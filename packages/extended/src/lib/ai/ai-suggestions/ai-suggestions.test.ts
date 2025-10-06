import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiSuggestionsComponent } from './ai-suggestions.js';

describe('AiSuggestionsComponent', () => {
  it('should be accessible', async () => {
    const element = await fixture<AiSuggestionsComponent>(html`<forge-ai-suggestions></forge-ai-suggestions>`);
    await expect(element).to.be.accessible();
  });
});
