import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiChatInterfaceComponent } from './ai-chat-interface.js';

describe('AiChatInterfaceComponent', () => {
  it('should be accessible', async () => {
    const element = await fixture<AiChatInterfaceComponent>(html`<forge-ai-chat-interface></forge-ai-chat-interface>`);
    await expect(element).to.be.accessible();
  });
});
