import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { ifDefined } from 'lit/directives/if-defined.js';
import { sendMouse } from '@web/test-runner-commands';
import { IIconButtonComponent, type ITextFieldComponent } from '@tylertech/forge';
import sinon from 'sinon';
import { QuantityFieldComponent } from './quantity-field';

import './quantity-field';

describe('Quantity Field', () => {
  it('should contain shadow root', async () => {
    const harness = await createFixture();

    expect(harness.el.shadowRoot).to.be.ok;
    expect(harness.el.shadowRoot?.childNodes.length).to.be.greaterThan(0);
  });

  it('should have expected default state', async () => {
    const harness = await createFixture();

    expect(harness.el.required).to.be.false;
    expect(harness.el.invalid).to.be.false;
    expect(harness.el.matches(':state(required)')).to.be.false;
    expect(harness.el.matches(':state(invalid)')).to.be.false;
    expect(harness.el.decrementLabel).to.equal('Decrement');
    expect(harness.el.incrementLabel).to.equal('Increment');
  });

  it('should increment the input value', async () => {
    const harness = await createFixture();
    const startValue = harness.inputElement.valueAsNumber;

    await harness.clickIncrementButton();

    expect(harness.inputElement.valueAsNumber).to.equal(startValue + 1);
  });

  it('should decrement the input value', async () => {
    const harness = await createFixture();
    const startValue = harness.inputElement.valueAsNumber;

    await harness.clickDecrementButton();

    expect(harness.inputElement.valueAsNumber).to.equal(startValue - 1);
  });

  it('should not decrement below the minimum value', async () => {
    const harness = await createFixture({ min: 1 });
    const startValue = harness.inputElement.valueAsNumber;

    await harness.clickDecrementButton();

    expect(harness.inputElement.valueAsNumber).to.equal(startValue);
  });

  it('should not increment above the maximum value', async () => {
    const harness = await createFixture({ max: 1 });
    const startValue = harness.inputElement.valueAsNumber;

    await harness.clickIncrementButton();

    expect(harness.inputElement.valueAsNumber).to.equal(startValue);
  });

  it('should set required', async () => {
    const harness = await createFixture({ required: true });

    expect(harness.el.required).to.be.true;
    expect(harness.el.matches(':state(required)')).to.be.true;
    expect(harness.textFieldElement.required).to.be.true;
  });

  it('should set invalid', async () => {
    const harness = await createFixture({ invalid: true });

    expect(harness.el.invalid).to.be.true;
    expect(harness.el.matches(':state(invalid)')).to.be.true;
    expect(harness.textFieldElement.invalid).to.be.true;
  });

  it('should set decrement label', async () => {
    const harness = await createFixture({ decrementLabel: 'Custom Decrement Label' });

    expect(harness.decrementButton().getAttribute('aria-label')).to.equal('Custom Decrement Label');
  });

  it('should set increment label', async () => {
    const harness = await createFixture({ incrementLabel: 'Custom Increment Label' });

    expect(harness.incrementButton().getAttribute('aria-label')).to.equal('Custom Increment Label');
  });

  it('should dispatch input and change event on decrement', async () => {
    const el = await createFixture();

    const inputSpy = sinon.spy();
    const changeSpy = sinon.spy();

    el.inputElement.addEventListener('input', inputSpy);
    el.inputElement.addEventListener('change', changeSpy);

    await el.clickDecrementButton();

    expect(inputSpy.calledOnce).to.be.true;
    expect(changeSpy.calledOnce).to.be.true;
  });

  it('should dispatch input and change event on increment', async () => {
    const el = await createFixture();

    const inputSpy = sinon.spy();
    const changeSpy = sinon.spy();

    el.inputElement.addEventListener('input', inputSpy);
    el.inputElement.addEventListener('change', changeSpy);

    await el.clickIncrementButton();

    expect(inputSpy.calledOnce).to.be.true;
    expect(changeSpy.calledOnce).to.be.true;
  });
});

class QuantityFieldHarness {
  constructor(public el: QuantityFieldComponent) {}

  public get inputElement(): HTMLInputElement {
    return this.el.querySelector('input') as HTMLInputElement;
  }

  public get textFieldElement(): ITextFieldComponent {
    return this.el.shadowRoot!.querySelector('forge-text-field') as ITextFieldComponent;
  }

  public decrementButton(): IIconButtonComponent {
    return this.el.shadowRoot!.querySelector(
      'slot[name="decrement-button"] > forge-icon-button'
    ) as IIconButtonComponent;
  }

  public incrementButton(): IIconButtonComponent {
    return this.el.shadowRoot!.querySelector(
      'slot[name="increment-button"] > forge-icon-button'
    ) as IIconButtonComponent;
  }

  public async clickDecrementButton(): Promise<void> {
    const { top, left, width, height } = this.decrementButton().getBoundingClientRect();
    await sendMouse({
      type: 'click',
      position: [Math.round(left + width / 2), Math.round(top + height / 2)],
      button: 'left'
    });
  }

  public async clickIncrementButton(): Promise<void> {
    const { top, left, width, height } = this.incrementButton().getBoundingClientRect();
    await sendMouse({
      type: 'click',
      position: [Math.round(left + width / 2), Math.round(top + height / 2)],
      button: 'left'
    });
  }
}

interface QuantityFieldFixtureConfig {
  required?: boolean;
  invalid?: boolean;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  decrementLabel?: string;
  incrementLabel?: string;
}

async function createFixture({
  required,
  invalid,
  min,
  max,
  value = 1,
  step = 1,
  decrementLabel,
  incrementLabel
}: QuantityFieldFixtureConfig = {}): Promise<QuantityFieldHarness> {
  const el = await fixture<QuantityFieldComponent>(html`
    <forge-quantity-field
      ?required=${required}
      ?invalid=${invalid}
      decrement-label=${ifDefined(decrementLabel)}
      increment-label=${ifDefined(incrementLabel)}>
      <label slot="label">Quantity</label>
      <input
        type="number"
        value=${ifDefined(value)}
        step=${ifDefined(step)}
        min=${ifDefined(min)}
        max=${ifDefined(max)} />
    </forge-quantity-field>
  `);
  return new QuantityFieldHarness(el);
}
