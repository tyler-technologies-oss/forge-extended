import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import type { AiModalComponent } from '../ai-modal';
import '../ai-modal';

import styles from './ai-dialog.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-dialog': AiDialogComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-dialog-fullscreen-change': CustomEvent<{ isFullscreen: boolean }>;
    'forge-ai-dialog-close': CustomEvent<void>;
  }
}

const VIEWPORT_WIDTH_THRESHOLD = 768;

export const AiDialogComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-dialog';

/**
 * @tag forge-ai-dialog
 *
 * @slot - Default slot for dialog content (typically ai-chat-interface)
 *
 * @fires forge-ai-dialog-fullscreen-change - Fired when the fullscreen state changes due to viewport size
 * @fires forge-ai-dialog-close - Fired when the dialog is closed
 */
@customElement(AiDialogComponentTagName)
export class AiDialogComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the dialog is open.
   */
  @property({ type: Boolean })
  public open = false;

  /**
   * Controls the dialog's positioning and size behavior.
   * When true, the dialog will have an expanded width and be centered on the screen.
   * When false, the dialog will be positioned at the bottom-right corner with a fixed width.
   */
  @property({ type: Boolean })
  public expanded = false;

  @state()
  private _isFullscreen = window.innerWidth <= VIEWPORT_WIDTH_THRESHOLD;

  /**
   * Gets the current fullscreen state (readonly)
   */
  public get isFullscreen(): boolean {
    return this._isFullscreen;
  }

  #mediaQuery?: MediaQueryList;
  #popoverElementRef: Ref<HTMLDivElement> = createRef();
  #aiModalElementRef: Ref<AiModalComponent> = createRef();
  #escapeKeyAbortController?: AbortController;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#setupMediaQuery();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#cleanupMediaQuery();
    this.#removeEscapeKeyListener();
  }

  public override updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);

    if (changedProperties.has('open') || changedProperties.has('expanded') || changedProperties.has('_isFullscreen')) {
      this.#handleOpenStateChange();
    }
  }

  readonly #content = html`<slot></slot>`;

  get #popoverTemplate(): TemplateResult {
    return html`
      <dialog
        ${ref(this.#popoverElementRef)}
        aria-modal="false"
        aria-labelledby="dialog-title"
        popover="manual"
        class="ai-dialog"
        @toggle=${this.#handlePopoverToggle}>
        ${this.#content}
      </dialog>
    `;
  }

  get #modalTemplate(): TemplateResult {
    return html`
      <forge-ai-modal ${ref(this.#aiModalElementRef)} @forge-ai-modal-close=${this.#handleDialogClose}>
        ${this.#content}
      </forge-ai-modal>
    `;
  }

  public override render(): TemplateResult {
    // Use modal for small viewports OR when expanded, otherwise use popover
    const useModal = this._isFullscreen || this.expanded;
    return when(
      useModal,
      () => this.#modalTemplate,
      () => this.#popoverTemplate
    );
  }

  /**
   * Opens the dialog.
   */
  public show(): void {
    this.open = true;
  }

  /**
   * Closes the dialog.
   */
  public close(): void {
    if (this.expanded) {
      this.expanded = false;
    }
    this.open = false;

    // Emit close event for parent components to listen to
    const event = new CustomEvent('forge-ai-dialog-close', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  /**
   * Toggles the dialog open state.
   */
  public toggle(): void {
    if (this.open) {
      this.close();
    } else {
      this.show();
    }
  }

  #setupMediaQuery(): void {
    this.#mediaQuery = window.matchMedia(`(max-width: ${VIEWPORT_WIDTH_THRESHOLD}px)`);
    this.#mediaQuery.addEventListener('change', this.#handleMediaChange);
    this.#handleMediaChange(this.#mediaQuery);
  }

  #cleanupMediaQuery(): void {
    this.#mediaQuery?.removeEventListener('change', this.#handleMediaChange);
  }

  #handleMediaChange = (e: MediaQueryList | MediaQueryListEvent): void => {
    const previousFullscreen = this._isFullscreen;
    this._isFullscreen = e.matches;

    // Dispatch fullscreen change event
    if (previousFullscreen !== this._isFullscreen) {
      const event = new CustomEvent('forge-ai-dialog-fullscreen-change', {
        bubbles: true,
        composed: true,
        detail: { isFullscreen: this._isFullscreen }
      });
      this.dispatchEvent(event);
    }

    // If the viewport changed and we're open, we need to ensure proper template switching
    const previousUseDialog = previousFullscreen || this.expanded;
    const currentUseDialog = this._isFullscreen || this.expanded;

    if (previousUseDialog !== currentUseDialog && this.open) {
      // Just trigger a re-render and let the updated() method handle the state change
      this.requestUpdate();
    }
  };

  #handleOpenStateChange(): void {
    const useDialog = this._isFullscreen || this.expanded;

    if (useDialog) {
      // Use dialog element for small viewport OR expanded state
      this.#removeEscapeKeyListener();
      const dialogElement = this.#aiModalElementRef.value;
      if (dialogElement) {
        if (this.open) {
          if (!dialogElement.open) {
            dialogElement.show();
          }
        } else {
          if (dialogElement.open) {
            dialogElement.close();
          }
        }
      }
    } else {
      // Use popover API for large viewport (not expanded)
      const popoverElement = this.#popoverElementRef.value;
      if (popoverElement) {
        if (this.open) {
          this.#addEscapeKeyListener();
          popoverElement.showPopover();
        } else {
          this.#removeEscapeKeyListener();
          popoverElement.hidePopover();
        }
      }
    }
  }

  #handlePopoverToggle(event: ToggleEvent): void {
    // Sync internal open state when popover is toggled externally
    const wasOpen = this.open;
    this.open = event.newState === 'open';

    // Manage escape key listener based on popover state
    if (this.open && !wasOpen) {
      this.#addEscapeKeyListener();
    } else if (!this.open && wasOpen) {
      this.#removeEscapeKeyListener();
    }
  }

  #handleDialogClose(): void {
    // Sync internal open state when dialog is closed externally
    this.close();
  }

  #addEscapeKeyListener(): void {
    if (!this.#escapeKeyAbortController) {
      this.#escapeKeyAbortController = new AbortController();
      document.addEventListener('keydown', this.#handleKeyDown, {
        signal: this.#escapeKeyAbortController.signal
      });
    }
  }

  #removeEscapeKeyListener(): void {
    if (this.#escapeKeyAbortController) {
      this.#escapeKeyAbortController.abort();
      this.#escapeKeyAbortController = undefined;
    }
  }

  #handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
    }
  };
}
