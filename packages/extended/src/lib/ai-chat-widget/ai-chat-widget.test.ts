import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiChatWidgetComponent } from './ai-chat-widget';

import './ai-chat-widget';

describe('AiChatWidget', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<AiChatWidgetComponent>(html`<forge-ai-chat-widget></forge-ai-chat-widget>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should have default property values', async () => {
    const el = await fixture<AiChatWidgetComponent>(html`<forge-ai-chat-widget></forge-ai-chat-widget>`);

    expect(el.open).to.be.false;
    expect(el.fullsize).to.be.false;
  });

  it('should reflect open attribute', async () => {
    const el = await fixture<AiChatWidgetComponent>(html`<forge-ai-chat-widget open></forge-ai-chat-widget>`);

    expect(el.open).to.be.true;
    expect(el.hasAttribute('open')).to.be.true;
  });

  it('should reflect fullsize attribute', async () => {
    const el = await fixture<AiChatWidgetComponent>(html`<forge-ai-chat-widget fullsize></forge-ai-chat-widget>`);

    expect(el.fullsize).to.be.true;
    expect(el.hasAttribute('fullsize')).to.be.true;
  });
});
