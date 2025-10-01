import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiResponseMessageComponent } from './ai-response-message.js';

describe('AiResponseMessageComponent', () => {
  it('should render hello world', async () => {
    const element = await fixture<AiResponseMessageComponent>(
      html`<forge-ai-response-message></forge-ai-response-message>`
    );
    expect(element.textContent?.trim()).to.equal('Hello World');
  });

  it('should be accessible', async () => {
    const element = await fixture<AiResponseMessageComponent>(
      html`<forge-ai-response-message></forge-ai-response-message>`
    );
    await expect(element).to.be.accessible();
  });
});
