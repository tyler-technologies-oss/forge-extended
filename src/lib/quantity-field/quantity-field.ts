import {
  defineTextFieldComponent,
  defineIconButtonComponent,
  defineIconComponent,
  TextFieldComponent,
  IconButtonComponent
} from '@tylertech/forge';
import { LitElement, TemplateResult, css, html, unsafeCSS } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';

import styles from './quantity-field.scss?inline';

const DECREMENT_BUTTON_SLOT_SELECTOR = 'slot[name="decrement-button"]';
const INCREMENT_BUTTON_SLOT_SELECTOR = 'slot[name="increment-button"]';

@customElement('forge-quantity-field')
export class QuantityFieldElement extends LitElement {
  static {
    defineTextFieldComponent();
    defineIconButtonComponent();
    defineIconComponent();
  }

  public static override styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true }) public invalid = false;
  @property({ type: Boolean, reflect: true }) public required = false;
  @queryAssignedElements({ selector: 'forge-text-field' }) private textFields!: TextFieldComponent[];
  @query(DECREMENT_BUTTON_SLOT_SELECTOR) private decrementButtonSlot!: HTMLSlotElement;
  @query(INCREMENT_BUTTON_SLOT_SELECTOR) private incrementButtonSlot!: HTMLSlotElement;

  private get _decrementButton(): IconButtonComponent {
    return this.decrementButtonSlot.assignedElements()[0] as IconButtonComponent;
  }

  private get _incrementButton(): IconButtonComponent {
    return this.incrementButtonSlot.assignedElements()[0] as IconButtonComponent;
  }

  private _incrementListener = this._increment.bind(this);
  private _decrementMethod = this._decrement.bind(this);

  constructor() {
    super();
  }

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

  public override attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null): void {
    super.attributeChangedCallback(name, oldVal, newVal);

    if (name === 'invalid' && this.textFields[0]) {
      this.textFields[0].invalid = this.invalid;
    }
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();

    this._decrementButton?.removeEventListener('click', this._decrementMethod);
    this._incrementButton?.removeEventListener('click', this._incrementListener);
  }

  public firstUpdated(): void {
    this._decrementButton?.addEventListener('click', this._decrementMethod);
    this._incrementButton?.addEventListener('click', this._incrementListener);
  }

  private _increment(): void {
    const input = this.querySelector('input') as HTMLInputElement;
    input.stepUp();
  }

  private _decrement(): void {
    const input = this.querySelector('input') as HTMLInputElement;
    input.stepDown();
  }
}
