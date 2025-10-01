import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiUserMessageComponent } from './ai-user-message.js';

describe('AiUserMessageComponent', () => {
  it('should render slotted content', async () => {
    const testContent = 'Hello, this is a user message!';
    const element = await fixture<AiUserMessageComponent>(
      html`<forge-ai-user-message>${testContent}</forge-ai-user-message>`
    );
    expect(element.textContent?.trim()).to.equal(testContent);
  });

  it('should be accessible', async () => {
    const element = await fixture<AiUserMessageComponent>(
      html`<forge-ai-user-message>Test message</forge-ai-user-message>`
    );
    await expect(element).to.be.accessible();
  });
});
