import { expect, fixture, html } from '@open-wc/testing';
import type { AiModalComponent } from './ai-modal.js';

describe('AiModalComponent', () => {
  it('should render', async () => {
    const el = await fixture<AiModalComponent>(html`<forge-ai-modal></forge-ai-modal>`);
    expect(el).to.be.instanceOf(AiModalComponent);
    expect(el.shadowRoot).to.exist;
  });

  it('should have default open state as false', async () => {
    const el = await fixture<AiModalComponent>(html`<forge-ai-modal></forge-ai-modal>`);
    expect(el.open).to.be.false;
  });

  it('should reflect open property to attribute', async () => {
    const el = await fixture<AiModalComponent>(html`<forge-ai-modal open></forge-ai-modal>`);
    expect(el.open).to.be.true;
    expect(el.hasAttribute('open')).to.be.true;
  });

  it('should show modal when show() is called', async () => {
    const el = await fixture<AiModalComponent>(html`<forge-ai-modal></forge-ai-modal>`);

    el.show();
    expect(el.open).to.be.true;
  });

  it('should close modal when close() is called', async () => {
    const el = await fixture<AiModalComponent>(html`<forge-ai-modal open></forge-ai-modal>`);

    el.close();
    expect(el.open).to.be.false;
  });

  it('should render slotted content', async () => {
    const el = await fixture<AiModalComponent>(html`
      <forge-ai-modal>
        <div>Modal content</div>
      </forge-ai-modal>
    `);

    const slottedContent = el.querySelector('div');
    expect(slottedContent).to.exist;
    expect(slottedContent?.textContent).to.equal('Modal content');
  });
});
