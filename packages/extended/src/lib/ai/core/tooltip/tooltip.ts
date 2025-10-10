import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { type OverlayPlacement } from '../overlay/overlay.js';
import '../overlay/overlay.js';

import styles from './tooltip.scss?inline';
import { when } from 'lit/directives/when.js';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-tooltip': ForgeAiTooltipComponent;
  }

  interface HTMLElementEventMap {
    'ai-tooltip-toggle': CustomEvent<{
      open: boolean;
      newState: string;
      oldState: string;
    }>;
  }
}

export type TooltipPlacement = OverlayPlacement;
export type TooltipTrigger = 'hover' | 'focus' | 'click' | 'manual';

/**
 * @summary A tooltip component with accessibility features and dynamic positioning.
 *
 * @description
 * This component provides tooltip functionality with proper accessibility support.
 * When closed, the content is visually hidden but available to screen readers.
 * When open, it displays in a positioned overlay above other content.
 *
 * @since 1.2.0
 *
 * @cssprop --ai-tooltip-max-width - The maximum width of the tooltip.
 * @cssprop --ai-tooltip-z-index - The z-index of the tooltip overlay.
 *
 * @slot - The default slot for tooltip content.
 */
@customElement('forge-ai-tooltip')
export class ForgeAiTooltipComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * The ID of the anchor element to attach the tooltip to.
   */
  @property()
  public for = '';

  /**
   * The text content of the tooltip (alternative to slotted content).
   */
  @property()
  public text = '';

  /**
   * The placement of the tooltip relative to the anchor.
   */
  @property()
  public placement: TooltipPlacement = 'top';

  /**
   * How the tooltip should be triggered.
   */
  @property()
  public trigger: TooltipTrigger = 'hover';

  /**
   * Whether the tooltip is open.
   */
  @property({ type: Boolean, reflect: true })
  public open = false;

  /**
   * Delay in milliseconds before showing the tooltip.
   */
  @property({ type: Number })
  public delay = 500;

  /**
   * Delay in milliseconds before hiding the tooltip.
   */
  @property({ type: Number, attribute: 'hide-delay' })
  public hideDelay = 0;

  @state()
  private _anchorElement: Element | null = null;

  private _showTimeout: number | null = null;
  private _hideTimeout: number | null = null;

  public override connectedCallback(): void {
    super.connectedCallback();
    this._findAnchorElement();
    this._attachEventListeners();
    this._updateHostAttributes();

    // Retry finding anchor element after a short delay if not found initially
    if (!this._anchorElement && this.for) {
      setTimeout(() => {
        this._findAnchorElement();
        this._attachEventListeners();
      }, 0);
    }
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._detachEventListeners();
    this._clearTimeouts();
  }

  public override updated(changedProperties: Map<string | number | symbol, unknown>): void {
    if (changedProperties.has('for')) {
      this._detachEventListeners();
      this._findAnchorElement();
      this._attachEventListeners();
    }

    if (changedProperties.has('open')) {
      this._updateHostAttributes();
    }
  }

  private _findAnchorElement(): void {
    if (!this.for) {
      this._anchorElement = null;
      return;
    }

    // Look for element by ID in the same document
    this._anchorElement = document.getElementById(this.for);

    if (!this._anchorElement) {
      // Try to find it in the parent's shadow root if we're in one
      const root = this.getRootNode() as Document | ShadowRoot;
      if (root !== document && 'querySelector' in root) {
        this._anchorElement = root.querySelector(`#${this.for}`);
      }
    }

    if (!this._anchorElement) {
      console.warn(`Tooltip anchor element with id "${this.for}" not found`);
    }
  }

  private _updateHostAttributes(): void {
    // Set ARIA attributes on the host element
    this.setAttribute('role', this.open ? 'tooltip' : 'none');
    this.setAttribute('aria-hidden', String(!this.open));

    if (this.open) {
      this.setAttribute('aria-live', 'polite');
    } else {
      this.removeAttribute('aria-live');
    }
  }

  private _attachEventListeners(): void {
    if (!this._anchorElement) {
      return;
    }

    switch (this.trigger) {
      case 'hover':
        this._anchorElement.addEventListener('mouseenter', this._handleShow);
        this._anchorElement.addEventListener('mouseleave', this._handleHide);
        break;
      case 'focus':
        this._anchorElement.addEventListener('focusin', this._handleShow);
        this._anchorElement.addEventListener('focusout', this._handleHide);
        break;
      case 'click':
        this._anchorElement.addEventListener('click', this._handleToggle);
        break;
      // manual trigger has no automatic event listeners
    }
  }

  private _detachEventListeners(): void {
    if (!this._anchorElement) {
      return;
    }

    this._anchorElement.removeEventListener('mouseenter', this._handleShow);
    this._anchorElement.removeEventListener('mouseleave', this._handleHide);
    this._anchorElement.removeEventListener('focusin', this._handleShow);
    this._anchorElement.removeEventListener('focusout', this._handleHide);
    this._anchorElement.removeEventListener('click', this._handleToggle);
  }

  private _handleShow = (): void => {
    this._clearTimeouts();
    if (this.delay > 0) {
      this._showTimeout = window.setTimeout(() => {
        this.open = true;
      }, this.delay);
    } else {
      this.open = true;
    }
  };

  private _handleHide = (): void => {
    this._clearTimeouts();
    if (this.hideDelay > 0) {
      this._hideTimeout = window.setTimeout(() => {
        this.open = false;
      }, this.hideDelay);
    } else {
      this.open = false;
    }
  };

  private _handleToggle = (): void => {
    this.open = !this.open;
  };

  private _clearTimeouts(): void {
    if (this._showTimeout) {
      clearTimeout(this._showTimeout);
      this._showTimeout = null;
    }
    if (this._hideTimeout) {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = null;
    }
  }

  private _onOverlayToggle = (event: CustomEvent): void => {
    this.open = event.detail.open;

    // Re-emit as tooltip-specific event
    this.dispatchEvent(
      new CustomEvent('ai-tooltip-toggle', {
        detail: event.detail,
        bubbles: true,
        composed: true
      })
    );
  };

  /**
   * Show the tooltip programmatically.
   */
  public show(): void {
    this.open = true;
  }

  /**
   * Hide the tooltip programmatically.
   */
  public hide(): void {
    this.open = false;
  }

  /**
   * Toggle the tooltip programmatically.
   */
  public toggle(): void {
    this.open = !this.open;
  }

  get #tooltipContent(): TemplateResult {
    const hasText = this.text.trim().length > 0;

    if (hasText) {
      return html`${this.text}`;
    }

    return html`<slot></slot>`;
  }

  public override render(): TemplateResult {
    const contentClasses = {
      'tooltip-content': true,
      'tooltip-content--hidden': !this.open
    };

    return html`
      ${when(
        this.open,
        () =>
          html` <!-- Overlay for visual presentation when open -->
            <forge-ai-overlay
              .anchor=${this._anchorElement}
              .placement=${this.placement}
              flip
              .open=${this.open}
              @ai-overlay-toggle=${this._onOverlayToggle}>
              <div class="ai-tooltip" data-placement=${this.placement}>${this.#tooltipContent}</div>
            </forge-ai-overlay>`,
        () => html`
          <!-- Content shown when closed for accessibility -->
          <div class=${classMap(contentClasses)}>${this.#tooltipContent}</div>
        `
      )}
    `;
  }
}
