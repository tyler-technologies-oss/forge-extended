import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { ThemeToggleComponent } from './theme-toggle';

import './theme-toggle';

describe('ThemeToggle', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<ThemeToggleComponent>(html`<forge-theme-toggle></forge-theme-toggle>`);

    expect(el.shadowRoot).to.be.ok;
  });
});
