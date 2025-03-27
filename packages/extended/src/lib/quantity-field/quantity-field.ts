import { LitElement, PropertyValues, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
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
 * @slot decrement-icon - The icon for the decrement button.
 * @slot increment-button - The increment button.
 * @slot increment-icon - The icon for the increment button.
 * @slot support-text - The support text for the field.
 *
 * @state required - Indicates whether the field is in its required state.
 * @state invalid - Indicates whether the field is in its invalid state.
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

  /** Indicates whether the field is invalid. */
  @property({ type: Boolean })
  public invalid = false;

  /** Indicates whether the field is required. */
  @property({ type: Boolean })
  public required = false;

  /** The accessible label for the decrement button. */
  @property({ attribute: 'decrement-label' })
  public decrementLabel = 'Decrement';

  /** The accessible label for the increment button. */
  @property({ attribute: 'increment-label' })
  public incrementLabel = 'Increment';

  @queryAssignedElements()
  private _defaultSlotElements!: Array<HTMLElement>;

  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('required')) {
      if (this.required) {
        this.#internals.states.add('required');
      } else {
        this.#internals.states.delete('required');
      }
    }

    if (changedProperties.has('invalid')) {
      if (this.invalid) {
        this.#internals.states.add('invalid');
      } else {
        this.#internals.states.delete('invalid');
      }
    }
  }

  public override render(): TemplateResult {
    return html`
      <div class="container">
        <slot name="label"></slot>
        <div class="inner">
          <slot name="decrement-button" @click=${this.#onDecrement}>
            <forge-icon-button shape="squared" aria-label=${this.decrementLabel}>
              <slot name="decrement-icon">
                <forge-icon name="minus"></forge-icon>
              </slot>
            </forge-icon-button>
          </slot>
          <forge-text-field .invalid=${this.invalid} .required=${this.required}>
            <slot></slot>
          </forge-text-field>
          <slot name="increment-button" @click=${this.#onIncrement}>
            <forge-icon-button shape="squared" aria-label=${this.incrementLabel}>
              <slot name="increment-icon">
                <forge-icon name="plus"></forge-icon>
              </slot>
            </forge-icon-button>
          </slot>
        </div>
        <slot name="support-text"></slot>
      </div>
    `;
  }

  #tryGetInput(): HTMLInputElement {
    return this._defaultSlotElements.find(el => el.tagName === 'INPUT') as HTMLInputElement;
  }

  #onDecrement(): void {
    const input = this.#tryGetInput();
    input?.stepDown();
    input?.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
    input?.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  #onIncrement(): void {
    const input = this.#tryGetInput();
    input?.stepUp();
    input?.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
    input?.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }
}
