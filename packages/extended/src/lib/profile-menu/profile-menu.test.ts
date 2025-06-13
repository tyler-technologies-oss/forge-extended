import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { ProfileMenuComponent } from './profile-menu';

import './profile-menu';

describe('ProfileMenu', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<ProfileMenuComponent>(html`<forge-profile-menu></forge-profile-menu>`);

    expect(el.shadowRoot).to.be.ok;
  });
});
