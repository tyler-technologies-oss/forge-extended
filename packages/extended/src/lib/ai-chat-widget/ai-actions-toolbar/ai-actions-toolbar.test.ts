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

  it('should emit correct action types for each button', async () => {
    const el = await fixture<AiActionsToolbarComponent>(html`<forge-ai-actions-toolbar></forge-ai-actions-toolbar>`);

    const events: string[] = [];
    el.addEventListener('forge-ai-actions-toolbar-action', (evt: any) => {
      events.push(evt.detail.action);
    });

    const buttons = el.shadowRoot?.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;

    // Click each button
    buttons[0].click(); // refresh
    buttons[1].click(); // copy
    buttons[2].click(); // thumbs-up
    buttons[3].click(); // thumbs-down

    expect(events).to.deep.equal(['refresh', 'copy', 'thumbs-up', 'thumbs-down']);
  });
});
