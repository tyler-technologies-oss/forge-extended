import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiResponseMessageComponent } from './ai-response-message.js';

describe('AiResponseMessageComponent', () => {
  it('should render slotted content', async () => {
    const testContent = 'Hello, this is an AI response!';
    const element = await fixture<AiResponseMessageComponent>(
      html`<forge-ai-response-message>${testContent}</forge-ai-response-message>`
    );
    expect(element.textContent?.trim()).to.equal(testContent);
  });

  it('should be accessible', async () => {
    const element = await fixture<AiResponseMessageComponent>(
      html`<forge-ai-response-message>Test message</forge-ai-response-message>`
    );
    await expect(element).to.be.accessible();
  });
});
