import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AppLauncherComponent } from './app-launcher';

import './app-launcher';

describe('AppLauncher', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<AppLauncherComponent>(html`<forge-app-launcher></forge-app-launcher>`);

    expect(el.shadowRoot).to.be.ok;
  });
});
