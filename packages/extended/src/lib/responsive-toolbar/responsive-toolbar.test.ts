import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { ResponsiveToolbarComponent } from './responsive-toolbar';

import './responsive-toolbar';

describe('ResponsiveToolbar', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<ResponsiveToolbarComponent>(html`<forge-responsive-toolbar></forge-responsive-toolbar>`);

    expect(el.shadowRoot).to.be.ok;
  });
});
