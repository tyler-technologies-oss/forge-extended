import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiPromptComponent } from './ai-prompt.js';

describe('AiPromptComponent', () => {
  it('should be accessible', async () => {
    const element = await fixture<AiPromptComponent>(html`<forge-ai-prompt></forge-ai-prompt>`);
    await expect(element).to.be.accessible();
  });
});
