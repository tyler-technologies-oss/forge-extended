import { ResizeController } from '@lit-labs/observers/resize-controller.js';
import { defineToolbarComponent } from '@tylertech/forge';
import { LitElement, TemplateResult, html, unsafeCSS, type CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';

import styles from './responsive-toolbar.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-responsive-toolbar': ResponsiveToolbarComponent;
  }
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
 * @slot actions-desktop - The content you want to render at larger sizes in the toolbar end slot
 * @slot actions-mobile - The content you want to render at smaller sizes in the toolbar end slot
 * @slot after-end - Maps to the toolbar after-end slot
 */
@customElement(ResponsiveToolbarComponentTagName)
export class ResponsiveToolbarComponent extends LitElement {
  static {
    defineToolbarComponent();
  }

  public static override styles: CSSResult = unsafeCSS(styles);

  /**
   * Maps to the internal toolbar auto-height attribute
   */
  @property({ type: Boolean, attribute: 'auto-height' })
  public autoHeight = true;

  /**
   * Maps to the internal toolbar no-border attribute
   */
  @property({ type: Boolean, attribute: 'no-border' })
  public noBorder = false;

  /**
   * Maps to the internal toolbar inverted attribute
   */
  @property({ type: Boolean })
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
    new ResizeController(this, { callback: () => this._handleResize() });
  }

  /**
   * Determines if the title is overlapping the actions and sets the internal
   * state to reflect that. This will toggle the visibility of the action slots
   */
  private _handleResize(): void {
    const titleInlineEndEdge = this._startSlotContainer.value?.getBoundingClientRect().right || 0;
    const actionsInlineStartEdge = this._endSlotContainer.value?.getBoundingClientRect().left || 0;

    if (titleInlineEndEdge + BUFFER >= actionsInlineStartEdge) {
      this.#internals.states.add('overflowing');
    } else {
      this.#internals.states.delete('overflowing');
    }
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

        <div slot="end" id="actions-large" ${ref(this._endSlotContainer)}>
          <slot name="actions-desktop"></slot>
        </div>

        <div slot="end" id="actions-small">
          <slot name="actions-mobile"></slot>
        </div>
        <slot name="after-end" slot="after-end"></slot>
      </forge-toolbar>
    `;
  }
}
