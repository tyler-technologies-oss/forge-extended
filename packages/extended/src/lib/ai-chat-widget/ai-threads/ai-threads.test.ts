import { expect, fixture, html } from '@open-wc/testing';
import { AiThreadsComponent } from './ai-threads';

describe('AiThreads', () => {
  it('should render', async () => {
    const el = await fixture<AiThreadsComponent>(html`<forge-ai-threads></forge-ai-threads>`);
    expect(el).to.be.instanceOf(AiThreadsComponent);
  });
});
