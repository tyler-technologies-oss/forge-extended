import { defineTextFieldComponent, defineIconButtonComponent, defineIconComponent } from '@tylertech/forge';
import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './quantity-field.scss?inline';

@customElement('forge-quantity-field')
export class QuantityFieldElement extends LitElement {
  static {
    defineTextFieldComponent();
    defineIconButtonComponent();
    defineIconComponent();
  }

  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`
      <div class="container">
        <slot name="label"></slot>
        <div class="inner">
          <slot name="decrement-button"></slot>
          <slot></slot>
          <slot name="increment-button"></slot>
        </div>
        <slot name="support-text"></slot>
      </div>
    `;
  }
}
