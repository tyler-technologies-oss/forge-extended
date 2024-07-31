import { LitElement, PropertyValues, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import {
  defineTextFieldComponent,
  defineIconButtonComponent,
  defineIconComponent,
  TextFieldComponent
} from '@tylertech/forge';

import styles from './quantity-field.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-quantity-field': QuantityFieldElement;
  }
}

@customElement('forge-quantity-field')
export class QuantityFieldElement extends LitElement {
  static {
    defineTextFieldComponent();
    defineIconButtonComponent();
    defineIconComponent();
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the field is invalid.
   */
  @property({ type: Boolean, reflect: true })
  public invalid = false;

  /**
   * Indicates whether the field is required.
   */
  @property({ type: Boolean, reflect: true })
  public required = false;

  @queryAssignedElements({ flatten: true, selector: 'forge-text-field' })
  private textFields!: TextFieldComponent[];

  public override render(): TemplateResult {
    return html`
      <div class="container">
        <slot name="label"></slot>
        <div class="inner">
          <slot name="decrement-button" @click=${this._onDecrement}></slot>
          <slot></slot>
          <slot name="increment-button" @click=${this._onIncrement}></slot>
        </div>
        <slot name="support-text"></slot>
      </div>
    `;
  }

  // eslint-disable-next-line @tylertech-eslint/require-private-modifier
  protected override updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);

    if (changedProperties.has('invalid') && this.textFields[0]) {
      this.textFields[0].invalid = this.invalid;
    }
  }

  private _tryGetInput(): HTMLInputElement {
    return this.querySelector('input') as HTMLInputElement;
  }

  private _onDecrement(): void {
    this._tryGetInput()?.stepDown();
  }

  private _onIncrement(): void {
    this._tryGetInput()?.stepUp();
  }
}
