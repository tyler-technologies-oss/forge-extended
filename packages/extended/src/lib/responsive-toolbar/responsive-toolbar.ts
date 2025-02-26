import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { ResizeController } from '@lit-labs/observers/resize-controller.js';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import styles from './responsive-toolbar.scss?inline';
import { defineToolbarComponent } from '@tylertech/forge';

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
  constructor() {
    super();
  }

  static {
    defineToolbarComponent();
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Internal state to determine if the toolbar title is overlapping the actions
   */
  @state()
  private _isOverflowing = false;

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
  @property({ type: Boolean, attribute: 'inverted' })
  public inverted = false;

  /**
   * Element refs that are used to calculate the overflow of the title and actions
   */
  public titleContainer = createRef<HTMLElement>();
  public buttonContainer = createRef<HTMLElement>();

  private _handleResize = (): void => {
    const titleInlineEndEdge = this.titleContainer.value?.getBoundingClientRect().right || 0;
    const actionsInlineStartEdge = this.buttonContainer.value?.getBoundingClientRect().left || 0;

    if (titleInlineEndEdge + BUFFER >= actionsInlineStartEdge) {
      this._isOverflowing = true;
    } else {
      this._isOverflowing = false;
    }
  };

  /**
   * Resize observer controller to detect changes in the toolbar width
   */
  private _resizeController = new ResizeController(this, {
    callback: () => {
      this._handleResize();
    }
  });

  public override connectedCallback(): void {
    super.connectedCallback();
    this._handleResize();
    console.log(this.titleContainer);
  }

  public override render(): TemplateResult {
    const visibilityStyles = { visibility: 'hidden', position: 'absolute', right: 8 };

    return html`
      <forge-toolbar ?auto-height=${this.autoHeight} ?no-border=${this.noBorder} ?inverted=${this.inverted}>
        <slot name="before-start" slot="before-start"></slot>
        <div ${ref(this.titleContainer)} slot="start">
          <slot name="start"></slot>
        </div>

        <div
          slot="end"
          ${ref(this.buttonContainer)}
          style=${this._isOverflowing ? styleMap(visibilityStyles) : nothing}>
          <slot name="actions-desktop"></slot>
        </div>

        <div slot="end" style=${!this._isOverflowing ? styleMap(visibilityStyles) : nothing}>
          <slot name="actions-mobile"></slot>
        </div>
        <slot name="after-end" slot="after-end" @slotchange=${this._handleResize}></slot>
      </forge-toolbar>
    `;
  }
}
