import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineToolbarComponent } from '@tylertech/forge';
import { ref, createRef } from 'lit/directives/ref.js';
import { ResizeController } from '@lit-labs/observers/resize-controller.js';
import { state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import styles from './responsive-toolbar.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-responsive-toolbar': ResponsiveToolbar;
  }
}

const BUFFER = 24;

@customElement('forge-responsive-toolbar')
export class ResponsiveToolbar extends LitElement {
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
  @property({ type: Boolean, reflect: true, attribute: 'auto-height' })
  public autoHeight = true;

  /**
   * Maps to the internal toolbar no-divider attribute
   */
  @property({ type: Boolean, reflect: true, attribute: 'no-divider' })
  public noDivider = false;

  /**
   * Element refs that are used to calculate the overflow of the title and actions
   */
  public titleContainer = createRef<HTMLElement>();
  public buttonContainer = createRef<HTMLElement>();

  /**
   * Resize observer controller to detect changes in the toolbar width
   */
  private _resizeController = new ResizeController(this, {});

  public override render(): TemplateResult {
    const visibilityStyles = { visibility: 'hidden', position: 'absolute', right: 8 };
    const titleInlineEndEdge = this.titleContainer.value?.getBoundingClientRect().right || 0;
    const actionsInlineStartEdge = this.buttonContainer.value?.getBoundingClientRect().left || 0;

    if (titleInlineEndEdge + BUFFER >= actionsInlineStartEdge) {
      this._isOverflowing = true;
    } else {
      this._isOverflowing = false;
    }

    return html`
      <forge-toolbar ?auto-height=${this.autoHeight} ?no-divider=${this.noDivider}>
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
        <slot name="after-end" slot="after-end"></slot>
      </forge-toolbar>
    `;
  }
}
