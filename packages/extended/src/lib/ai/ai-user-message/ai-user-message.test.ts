import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiUserMessageComponent } from './ai-user-message.js';

describe('AiUserMessageComponent', () => {
  it('should be accessible', async () => {
    const element = await fixture<AiUserMessageComponent>(html`<forge-ai-user-message></forge-ai-user-message>`);
    await expect(element).to.be.accessible();
  });
});
