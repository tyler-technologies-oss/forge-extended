import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  defineTextFieldComponent,
  defineIconButtonComponent,
  defineIconComponent,
  IconRegistry
} from '@tylertech/forge';
import { tylIconPlus, tylIconMinus } from '@tylertech/tyler-icons/extended';

import styles from './quantity-field.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-quantity-field': QuantityFieldComponent;
  }
}

export const QuantityFieldComponentTagName: keyof HTMLElementTagNameMap = 'forge-quantity-field';

/**
 * @tag forge-quantity-field
 *
 * @slot - Reserved for the `<input>` element.
 * @slot label - The label for the field.
 * @slot decrement-button - The decrement button.
 * @slot increment-button - The increment button.
 * @slot support-text - The support text for the field.
 */
@customElement(QuantityFieldComponentTagName)
export class QuantityFieldComponent extends LitElement {
  static {
    defineTextFieldComponent();
    defineIconButtonComponent();
    defineIconComponent();

    IconRegistry.define([tylIconMinus, tylIconPlus]);
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the field is invalid.
   */
  @property({ type: Boolean })
  public invalid = false;

  /**
   * Indicates whether the field is required.
   */
  @property({ type: Boolean })
  public required = false;

  /**
   * The accessible label for the decrement button.
   */
  @property({ attribute: 'decrement-label' })
  public decrementLabel = 'Decrement';

  /**
   * The accessible label for the increment button.
   */
  @property({ attribute: 'increment-label' })
  public incrementLabel = 'Increment';

  public override render(): TemplateResult {
    return html`
      <div class="container">
        <slot name="label"></slot>
        <div class="inner">
          <slot name="decrement-button" @click=${this._onDecrement}>
            <forge-icon-button shape="squared" aria-label=${this.decrementLabel}>
              <forge-icon name="minus"></forge-icon>
            </forge-icon-button>
          </slot>
          <forge-text-field .invalid=${this.invalid} .required=${this.required}>
            <slot></slot>
          </forge-text-field>
          <slot name="increment-button" @click=${this._onIncrement}>
            <forge-icon-button shape="squared" aria-label=${this.incrementLabel}>
              <forge-icon name="plus"></forge-icon>
            </forge-icon-button>
          </slot>
        </div>
        <slot name="support-text"></slot>
      </div>
    `;
  }

  private _tryGetInput(): HTMLInputElement {
    return this.querySelector('input') as HTMLInputElement;
  }

  private _onDecrement(): void {
    const input = this._tryGetInput();
    input?.stepDown();
    input?.dispatchEvent(new Event('input', { bubbles: true }));
    input?.dispatchEvent(new Event('change', { bubbles: true }));
  }

  private _onIncrement(): void {
    const input = this._tryGetInput();
    input?.stepUp();
    input?.dispatchEvent(new Event('input', { bubbles: true }));
    input?.dispatchEvent(new Event('change', { bubbles: true }));
  }
}
