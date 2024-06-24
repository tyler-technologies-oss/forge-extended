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
});
