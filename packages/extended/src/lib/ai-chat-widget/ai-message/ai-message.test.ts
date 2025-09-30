import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiMessageComponent } from './ai-message';

import './ai-message';

describe('AiMessage', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<AiMessageComponent>(html`<forge-ai-message></forge-ai-message>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should render hello world text', async () => {
    const el = await fixture<AiMessageComponent>(html`<forge-ai-message></forge-ai-message>`);

    const span = el.shadowRoot!.querySelector('span');
    expect(span).not.to.be.null;
    expect(span!.textContent).to.equal('Hello World');
  });
});
