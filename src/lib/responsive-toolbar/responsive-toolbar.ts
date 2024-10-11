import { LitElement, PropertyValues, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  defineIconButtonComponent,
  defineIconComponent,
  IconRegistry,
  defineToolbarComponent,
  defineButtonComponent
} from '@tylertech/forge';
import { tylIconPlus, tylIconMinus } from '@tylertech/tyler-icons/extended';
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

  @state()
  private _isOverflowing = false;

  @property({ type: Boolean, reflect: true, attribute: 'auto-height' })
  public autoHeight = true;

  @property({ type: Boolean, reflect: true, attribute: 'no-divider' })
  public noDivider = false;

  static {
    defineToolbarComponent();
    defineIconButtonComponent();
    defineIconComponent();
    defineButtonComponent();

    IconRegistry.define([tylIconMinus, tylIconPlus]);
  }

  public static override styles = unsafeCSS(styles);

  public titleContainer = createRef<HTMLElement>();
  public buttonContainer = createRef<HTMLElement>();
  private _resizeController = new ResizeController(this, {});

  public override render(): TemplateResult {
    const visibilityStyles = { visibility: 'hidden', position: 'absolute', right: 8 };
    const titleRightEdge = this.titleContainer.value?.getBoundingClientRect().right || 0;
    const actionsLeftEdge = this.buttonContainer.value?.getBoundingClientRect().left || 0;

    if (titleRightEdge + BUFFER >= actionsLeftEdge) {
      this._isOverflowing = true;
    } else {
      this._isOverflowing = false;
    }

    return html`
      <forge-toolbar ?auto-height=${this.autoHeight} no-divider="${this.noDivider || nothing}">
        <div ${ref(this.titleContainer)} slot="start">
          <slot name="start"></slot>
        </div>

        <div
          slot="end"
          ${ref(this.buttonContainer)}
          class="actions-container"
          style=${this._isOverflowing ? styleMap(visibilityStyles) : nothing}>
          <slot name="actions-desktop"></slot>
        </div>

        <div slot="end" class="mobile-container" style=${!this._isOverflowing ? styleMap(visibilityStyles) : nothing}>
          <slot name="actions-mobile"></slot>
        </div>
      </forge-toolbar>
    `;
  }
}
