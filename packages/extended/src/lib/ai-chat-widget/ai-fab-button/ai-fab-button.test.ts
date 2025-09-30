import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiFabButtonComponent } from './ai-fab-button';

import './ai-fab-button';

describe('AiFabButton', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<AiFabButtonComponent>(html`<forge-ai-fab-button></forge-ai-fab-button>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should have default property values', async () => {
    const el = await fixture<AiFabButtonComponent>(html`<forge-ai-fab-button></forge-ai-fab-button>`);

    expect(el.disabled).to.be.false;
    expect(el.extended).to.be.false;
  });

  it('should reflect disabled attribute', async () => {
    const el = await fixture<AiFabButtonComponent>(html`<forge-ai-fab-button disabled></forge-ai-fab-button>`);

    expect(el.disabled).to.be.true;
    expect(el.hasAttribute('disabled')).to.be.true;
  });

  it('should reflect extended attribute', async () => {
    const el = await fixture<AiFabButtonComponent>(html`<forge-ai-fab-button extended></forge-ai-fab-button>`);

    expect(el.extended).to.be.true;
    expect(el.hasAttribute('extended')).to.be.true;
  });

  it('should pass through slotted content when extended', async () => {
    const el = await fixture<AiFabButtonComponent>(
      html`<forge-ai-fab-button extended>Extended FAB</forge-ai-fab-button>`
    );

    const slot = el.shadowRoot!.querySelector('slot');
    expect(slot).not.to.be.null;
  });
});
