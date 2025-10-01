import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiResponseMessageComponent } from './ai-response-message.js';

describe('AiResponseMessageComponent', () => {
  it('should be accessible', async () => {
    const element = await fixture<AiResponseMessageComponent>(
      html`<forge-ai-response-message></forge-ai-response-message>`
    );
    await expect(element).to.be.accessible();
  });
});
