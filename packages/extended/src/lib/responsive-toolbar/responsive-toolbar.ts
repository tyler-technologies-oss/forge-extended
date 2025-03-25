import { ResizeController } from '@lit-labs/observers/resize-controller.js';
import { defineToolbarComponent } from '@tylertech/forge';
import { LitElement, TemplateResult, html, unsafeCSS, type CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
import { toggleState } from '@tylertech/forge/esm/core/utils/a11y-utils'; // TODO: replace with root level import once available

import styles from './responsive-toolbar.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-responsive-toolbar': ResponsiveToolbarComponent;
  }

  interface HTMLElementEventMap {
    'forge-responsive-toolbar-overflow': CustomEvent<ResponsiveToolbarOverflowEventData>;
  }
}

interface ResponsiveToolbarOverflowEventData {
  state: boolean;
}

/**
 * The amount of space between the title and actions before the title is
 * considered to be overlapping the actions
 */
const BUFFER = 24;

export const ResponsiveToolbarComponentTagName: keyof HTMLElementTagNameMap = 'forge-responsive-toolbar';

/**
 * @tag forge-responsive-toolbar
 *
 * @slot before-start - Maps to the toolbar before-start slot
 * @slot start - Maps to the toolbar start slot
 * @slot end-large - The content you want to render at larger sizes in the toolbar end slot
 * @slot end-small - The content you want to render at smaller sizes in the toolbar end slot
 * @slot after-end - Maps to the toolbar after-end slot
 * 
 * @event {CustomEvent<ResponsiveToolbarOverflowEventData>} forge-responsive-toolbar-overflow - Dispatched when the overflow state changes

 */
@customElement(ResponsiveToolbarComponentTagName)
export class ResponsiveToolbarComponent extends LitElement {
  static {
    defineToolbarComponent();
  }

  public static override styles: CSSResult = unsafeCSS(styles);

  /**
   * Forces the internal container to use height: auto for dynamic content that doesn't fit the static height.
   */
  @property({ type: Boolean, attribute: 'auto-height' })
  public autoHeight = true;

  /**
   * Hides the internal divider
   */
  @property({ type: Boolean, attribute: 'no-border' })
  public noBorder = false;

  /**
   * Controls whether a bottom divider (default) or top divider (true) is used.
   */
  @property({ type: Boolean, attribute: 'inverted' })
  public inverted = false;

  /**
   * Element refs that are used to calculate the overflow of the title and actions
   */
  private _startSlotContainer: Ref<HTMLElement> = createRef();
  private _endSlotContainer: Ref<HTMLElement> = createRef();

  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  public connectedCallback(): void {
    super.connectedCallback();

    /**
     * Resize observer controller to detect changes in the toolbar width and runs
     * the handleResize function on change
     */
    new ResizeController(this, { callback: () => requestAnimationFrame(() => this._handleResize()) });
  }

  /**
   * Determines if the title is overlapping the actions and sets the internal
   * state to reflect that. This will toggle the visibility of the action slots
   */
  private _handleResize(): void {
    const titleInlineEndEdge = this._startSlotContainer.value?.getBoundingClientRect().right || 0;
    const actionsInlineStartEdge = this._endSlotContainer.value?.getBoundingClientRect().left || 0;
    const isOverflowing = titleInlineEndEdge + BUFFER >= actionsInlineStartEdge;
    toggleState(this.#internals, 'overflowing', isOverflowing);
    this._emitOverflowEvent(isOverflowing);
  }

  private _emitOverflowEvent(isOverflowing: boolean): void {
    const event = new CustomEvent<ResponsiveToolbarOverflowEventData>('forge-responsive-toolbar-overflow', {
      bubbles: true,
      cancelable: true,
      detail: { state: isOverflowing }
    });
    this.dispatchEvent(event);
  }

  public override render(): TemplateResult {
    return html`
      <forge-toolbar
        ?auto-height=${this.autoHeight}
        ?no-border=${this.noBorder}
        ?inverted=${this.inverted}
        @slotchange=${this._handleResize}>
        <slot name="before-start" slot="before-start"></slot>
        <div ${ref(this._startSlotContainer)} slot="start">
          <slot name="start"></slot>
        </div>

        <div slot="end" id="end-large" ${ref(this._endSlotContainer)}>
          <slot name="end-large"></slot>
        </div>

        <div slot="end" id="end-small">
          <slot name="end-small"></slot>
        </div>
        <slot name="after-end" slot="after-end"></slot>
      </forge-toolbar>
    `;
  }
}
