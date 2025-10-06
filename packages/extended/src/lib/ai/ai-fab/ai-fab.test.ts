import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiFabComponent } from './ai-fab';

import './ai-fab';

describe('AiFab', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<AiFabComponent>(html`<forge-ai-fab></forge-ai-fab>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should have default property values', async () => {
    const el = await fixture<AiFabComponent>(html`<forge-ai-fab></forge-ai-fab>`);

    expect(el.disabled).to.be.false;
    expect(el.extended).to.be.false;
  });

  it('should reflect disabled attribute', async () => {
    const el = await fixture<AiFabComponent>(html`<forge-ai-fab disabled></forge-ai-fab>`);

    expect(el.disabled).to.be.true;
    expect(el.hasAttribute('disabled')).to.be.true;
  });

  it('should reflect extended attribute', async () => {
    const el = await fixture<AiFabComponent>(html`<forge-ai-fab extended></forge-ai-fab>`);

    expect(el.extended).to.be.true;
    expect(el.hasAttribute('extended')).to.be.true;
  });

  it('should pass through slotted content when extended', async () => {
    const el = await fixture<AiFabComponent>(html`<forge-ai-fab extended>Extended FAB</forge-ai-fab>`);

    const slot = el.shadowRoot!.querySelector('slot');
    expect(slot).not.to.be.null;
  });
});
