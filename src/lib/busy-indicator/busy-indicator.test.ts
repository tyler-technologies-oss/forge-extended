import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { BusyIndicatorElement } from './busy-indicator';

import './busy-indicator';

describe('Busy Indicator', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<BusyIndicatorElement>(html`<forge-busy-indicator></forge-busy-indicator>`);

    expect(el.shadowRoot).to.be.ok;
    expect(el.shadowRoot?.childNodes.length).to.be.greaterThan(0);
  });
});
