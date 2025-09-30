import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiMessageComponent } from './ai-message';

import './ai-message';

describe('AiMessage', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<AiMessageComponent>(html`<forge-ai-message></forge-ai-message>`);

    expect(el.shadowRoot).to.be.ok;
  });
});
