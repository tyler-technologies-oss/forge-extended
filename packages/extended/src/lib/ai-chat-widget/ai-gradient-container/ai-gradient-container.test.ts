import { expect, fixture, html } from '@open-wc/testing';
import { AiGradientContainerComponent } from './ai-gradient-container';

describe('AiGradientContainer', () => {
  it('should render', async () => {
    const el = await fixture<AiGradientContainerComponent>(
      html`<forge-ai-gradient-container></forge-ai-gradient-container>`
    );
    expect(el).to.be.instanceOf(AiGradientContainerComponent);
  });

  it('should display hello world text', async () => {
    const el = await fixture<AiGradientContainerComponent>(
      html`<forge-ai-gradient-container></forge-ai-gradient-container>`
    );

    const containerDiv = el.shadowRoot?.querySelector('.ai-gradient-container');
    expect(containerDiv?.textContent?.trim()).to.equal('Hello world');
  });
});
