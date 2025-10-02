import { expect, fixture, html } from '@open-wc/testing';
import { AiEmptyStateComponent } from './ai-empty-state';

describe('AiEmptyState', () => {
  it('should render', async () => {
    const el = await fixture<AiEmptyStateComponent>(html`<forge-ai-empty-state></forge-ai-empty-state>`);
    expect(el).to.be.instanceOf(AiEmptyStateComponent);
  });

  it('should display hello world text', async () => {
    const el = await fixture<AiEmptyStateComponent>(html`<forge-ai-empty-state></forge-ai-empty-state>`);

    const emptyStateDiv = el.shadowRoot?.querySelector('.ai-empty-state');
    expect(emptyStateDiv?.textContent?.trim()).to.equal('Hello world');
  });
});
