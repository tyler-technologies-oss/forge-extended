import { expect, fixture, html } from '@open-wc/testing';
import { AiActionsToolbarComponent } from './ai-actions-toolbar';

describe('AiActionsToolbar', () => {
  it('should render', async () => {
    const el = await fixture<AiActionsToolbarComponent>(html`<forge-ai-actions-toolbar></forge-ai-actions-toolbar>`);
    expect(el).to.be.instanceOf(AiActionsToolbarComponent);
  });

  it('should have correct shadow DOM structure', async () => {
    const el = await fixture<AiActionsToolbarComponent>(html`<forge-ai-actions-toolbar></forge-ai-actions-toolbar>`);

    const toolbar = el.shadowRoot?.querySelector('.actions-toolbar');
    expect(toolbar).to.exist;

    const buttons = el.shadowRoot?.querySelectorAll('button');
    expect(buttons).to.have.lengthOf(4);
  });

  it('should emit action events when buttons are clicked', async () => {
    const el = await fixture<AiActionsToolbarComponent>(html`<forge-ai-actions-toolbar></forge-ai-actions-toolbar>`);

    let eventDetail: any;
    el.addEventListener('forge-ai-actions-toolbar-action', (evt: any) => {
      eventDetail = evt.detail;
    });

    const refreshButton = el.shadowRoot?.querySelector('button[aria-label="Refresh"]') as HTMLButtonElement;
    refreshButton.click();

    expect(eventDetail).to.deep.equal({ action: 'refresh' });
  });
});
