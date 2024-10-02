import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { QuantityFieldElement } from './quantity-field';

import './quantity-field';

describe('Quantity Field', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<QuantityFieldElement>(html`<forge-quantity-field></forge-quantity-field>`);

    expect(el.shadowRoot).to.be.ok;
    expect(el.shadowRoot?.childNodes.length).to.be.greaterThan(0);
  });

  it('should render a label', async () => {
    const el = await fixture<QuantityFieldElement>(
      html`<forge-quantity-field><label slot="label">Quantity</label></forge-quantity-field>`
    );

    const label = (el.shadowRoot?.querySelector('slot[name="label"]') as HTMLSlotElement)?.assignedElements()[0];
    expect(label).to.be.ok;
    expect(label?.textContent).to.equal('Quantity');
  });

  it('should render a decrement button', async () => {
    const el = await fixture<QuantityFieldElement>(
      html`<forge-quantity-field><forge-icon-button slot="decrement-button"></forge-icon-button></forge-quantity-field>`
    );

    const decrementButton = (
      el.shadowRoot?.querySelector('slot[name="decrement-button"]') as HTMLSlotElement
    )?.assignedElements()[0];
    expect(decrementButton).to.be.ok;
  });

  it('should render an increment button', async () => {
    const el = await fixture<QuantityFieldElement>(
      html`<forge-quantity-field><forge-icon-button slot="increment-button"></forge-icon-button></forge-quantity-field>`
    );

    const incrementButton = (
      el.shadowRoot?.querySelector('slot[name="increment-button"]') as HTMLSlotElement
    )?.assignedElements()[0];
    expect(incrementButton).to.be.ok;
  });

  it('should render a support text', async () => {
    const el = await fixture<QuantityFieldElement>(
      html`<forge-quantity-field><p slot="support-text">Enter a quantity</p></forge-quantity-field>`
    );

    const supportText = (
      el.shadowRoot?.querySelector('slot[name="support-text"]') as HTMLSlotElement
    )?.assignedElements()[0];
    expect(supportText).to.be.ok;
    expect(supportText?.textContent).to.equal('Enter a quantity');
  });

  it('should increment the input value', async () => {
    const el = await fixture<QuantityFieldElement>(
      html`<forge-quantity-field
        ><forge-text-field><input type="number" value="1" step="2" /></forge-text-field
        ><forge-icon-button slot="increment-button"></forge-icon-button
      ></forge-quantity-field>`
    );

    const input = el.querySelector('input') as HTMLInputElement;
    const incrementButton = (
      el.shadowRoot?.querySelector('slot[name="increment-button"]') as HTMLSlotElement
    )?.assignedElements()[0] as HTMLButtonElement;

    incrementButton.click();
    expect(input.value).to.equal('3');
  });

  it('should decrement the input value', async () => {
    const el = await fixture<QuantityFieldElement>(
      html`<forge-quantity-field
        ><forge-text-field><input type="number" value="3" step="2" /></forge-text-field
        ><forge-icon-button slot="decrement-button"></forge-icon-button
      ></forge-quantity-field>`
    );

    const input = el.querySelector('input') as HTMLInputElement;
    const decrementButton = (
      el.shadowRoot?.querySelector('slot[name="decrement-button"]') as HTMLSlotElement
    )?.assignedElements()[0] as HTMLButtonElement;

    decrementButton.click();
    expect(input.value).to.equal('1');
  });

  it('should not decrement below the minimum value', async () => {
    const el = await fixture<QuantityFieldElement>(
      html`<forge-quantity-field
        ><forge-text-field><input type="number" value="1" step="2" min="1" /></forge-text-field
        ><forge-icon-button slot="decrement-button"></forge-icon-button
      ></forge-quantity-field>`
    );

    const input = el.querySelector('input') as HTMLInputElement;
    const decrementButton = (
      el.shadowRoot?.querySelector('slot[name="decrement-button"]') as HTMLSlotElement
    )?.assignedElements()[0] as HTMLButtonElement;

    decrementButton.click();
    expect(input.value).to.equal('1');
  });

  it('should not increment above the maximum value', async () => {
    const el = await fixture<QuantityFieldElement>(
      html`<forge-quantity-field
        ><forge-text-field><input type="number" value="1" step="2" max="3" /></forge-text-field
        ><forge-icon-button slot="increment-button"></forge-icon-button
      ></forge-quantity-field>`
    );

    const input = el.querySelector('input') as HTMLInputElement;
    const incrementButton = (
      el.shadowRoot?.querySelector('slot[name="increment-button"]') as HTMLSlotElement
    )?.assignedElements()[0] as HTMLButtonElement;

    incrementButton.click();
    expect(input.value).to.equal('3');
  });

  // should set required
  it('should set required', async () => {
    const el = await fixture<QuantityFieldElement>(html`<forge-quantity-field required></forge-quantity-field>`);

    expect(el.required).to.be.true;
  });

  // should set invalid
  it('should set invalid', async () => {
    const el = await fixture<QuantityFieldElement>(html`<forge-quantity-field invalid></forge-quantity-field>`);

    expect(el.invalid).to.be.true;
  });

  // should not render decrement button
  it('should not render decrement button', async () => {
    const el = await fixture<QuantityFieldElement>(html`<forge-quantity-field></forge-quantity-field>`);

    const decrementButton = (
      el.shadowRoot?.querySelector('slot[name="decrement-button"]') as HTMLSlotElement
    )?.assignedElements()[0];
    expect(decrementButton).to.be.undefined;
  });

  // should not render increment button
  it('should not render increment button', async () => {
    const el = await fixture<QuantityFieldElement>(html`<forge-quantity-field></forge-quantity-field>`);

    const incrementButton = (
      el.shadowRoot?.querySelector('slot[name="increment-button"]') as HTMLSlotElement
    )?.assignedElements()[0];
    expect(incrementButton).to.be.undefined;
  });

  // should not render support text
  it('should not render support text', async () => {
    const el = await fixture<QuantityFieldElement>(html`<forge-quantity-field></forge-quantity-field>`);

    const supportText = (
      el.shadowRoot?.querySelector('slot[name="support-text"]') as HTMLSlotElement
    )?.assignedElements()[0];
    expect(supportText).to.be.undefined;
  });
});
