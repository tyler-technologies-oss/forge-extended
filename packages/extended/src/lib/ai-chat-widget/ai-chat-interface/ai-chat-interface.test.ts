import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiChatInterfaceComponent } from './ai-chat-interface.js';

describe('AiChatInterfaceComponent', () => {
  it('should render hello world', async () => {
    const element = await fixture<AiChatInterfaceComponent>(html`<forge-ai-chat-interface></forge-ai-chat-interface>`);
    expect(element.textContent?.trim()).to.equal('Hello World');
  });

  it('should be accessible', async () => {
    const element = await fixture<AiChatInterfaceComponent>(html`<forge-ai-chat-interface></forge-ai-chat-interface>`);
    await expect(element).to.be.accessible();
  });
});
