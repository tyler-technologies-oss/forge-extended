import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { ResponsiveGridComponent } from './responsive-grid';

import './responsive-grid';

describe('ResponsiveGrid', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<ResponsiveGridComponent>(html`<forge-responsive-grid></forge-responsive-grid>`);

    expect(el.shadowRoot).to.be.ok;
  });
});
