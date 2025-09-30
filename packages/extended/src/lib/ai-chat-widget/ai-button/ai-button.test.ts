import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiButtonComponent } from './ai-button';

import './ai-button';

describe('AiButton', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<AiButtonComponent>(html`<forge-ai-button></forge-ai-button>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should have default property values', async () => {
    const el = await fixture<AiButtonComponent>(html`<forge-ai-button></forge-ai-button>`);

    expect(el.disabled).to.be.false;
  });

  it('should reflect disabled attribute', async () => {
    const el = await fixture<AiButtonComponent>(html`<forge-ai-button disabled></forge-ai-button>`);

    expect(el.disabled).to.be.true;
    expect(el.hasAttribute('disabled')).to.be.true;
  });

  it('should pass through slotted content', async () => {
    const el = await fixture<AiButtonComponent>(html`<forge-ai-button>Click me</forge-ai-button>`);

    const slot = el.shadowRoot!.querySelector('slot');
    expect(slot).not.to.be.null;
  });
});
