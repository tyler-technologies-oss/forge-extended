import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiIconComponent } from './ai-icon';

import './ai-icon';

describe('AiIcon', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<AiIconComponent>(html`<forge-ai-icon></forge-ai-icon>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should render svg icon', async () => {
    const el = await fixture<AiIconComponent>(html`<forge-ai-icon></forge-ai-icon>`);

    const svg = el.shadowRoot!.querySelector('svg');
    expect(svg).not.to.be.null;
  });
});
