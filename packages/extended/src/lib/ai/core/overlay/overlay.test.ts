import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { ForgeAiOverlayComponent } from './overlay.js';

describe('ForgeAiOverlayComponent', () => {
  it('should be defined', () => {
    expect(customElements.get('forge-ai-overlay')).to.equal(ForgeAiOverlayComponent);
  });

  it('should render with default properties', async () => {
    const el = await fixture<ForgeAiOverlayComponent>(html`<forge-ai-overlay></forge-ai-overlay>`);

    expect(el.placement).to.equal('bottom-start');
    expect(el.flip).to.be.true;
    expect(el.shift).to.be.false;
    expect(el.open).to.be.false;
    expect(el.anchor).to.be.null;
  });

  it('should reflect open property as attribute', async () => {
    const el = await fixture<ForgeAiOverlayComponent>(html`<forge-ai-overlay></forge-ai-overlay>`);

    expect(el.hasAttribute('open')).to.be.false;

    el.open = true;
    await elementUpdated(el);

    expect(el.hasAttribute('open')).to.be.true;
  });

  it('should set placement property', async () => {
    const el = await fixture<ForgeAiOverlayComponent>(html`<forge-ai-overlay placement="top-end"></forge-ai-overlay>`);

    expect(el.placement).to.equal('top-end');
  });

  it('should set flip property', async () => {
    const el = await fixture<ForgeAiOverlayComponent>(html`<forge-ai-overlay .flip=${false}></forge-ai-overlay>`);

    expect(el.flip).to.be.false;
  });

  it('should set shift property', async () => {
    const el = await fixture<ForgeAiOverlayComponent>(html`<forge-ai-overlay .shift=${false}></forge-ai-overlay>`);

    expect(el.shift).to.be.false;
  });

  it('should set anchor property', async () => {
    const anchor = document.createElement('div');
    const el = await fixture<ForgeAiOverlayComponent>(html`<forge-ai-overlay .anchor=${anchor}></forge-ai-overlay>`);

    expect(el.anchor).to.equal(anchor);
  });

  it('should render overlay with manual popover attribute', async () => {
    const el = await fixture<ForgeAiOverlayComponent>(html`<forge-ai-overlay></forge-ai-overlay>`);
    const overlay = el.shadowRoot?.querySelector('.ai-overlay') as HTMLElement;

    expect(overlay).to.exist;
    expect(overlay.getAttribute('popover')).to.equal('manual');
  });

  it('should render slotted content', async () => {
    const el = await fixture<ForgeAiOverlayComponent>(html`
      <forge-ai-overlay>
        <div id="content">Test content</div>
      </forge-ai-overlay>
    `);

    const content = el.querySelector('#content');
    expect(content).to.exist;
    expect(content?.textContent).to.equal('Test content');
  });

  it('should dispatch forge-ai-overlay-toggle event when toggled', async () => {
    const el = await fixture<ForgeAiOverlayComponent>(html`<forge-ai-overlay></forge-ai-overlay>`);
    let eventDetail: { open: boolean; newState: string; oldState: string } | null = null;

    el.addEventListener(
      'forge-ai-overlay-toggle',
      (event: CustomEvent<{ open: boolean; newState: string; oldState: string }>) => {
        eventDetail = event.detail;
      }
    );

    const overlay = el.shadowRoot?.querySelector('.ai-overlay') as HTMLElement;
    const toggleEvent = new CustomEvent('toggle', {
      detail: { newState: 'open', oldState: 'closed' }
    });
    toggleEvent.newState = 'open';
    toggleEvent.oldState = 'closed';

    overlay.dispatchEvent(toggleEvent);

    expect(eventDetail).to.exist;
    expect(eventDetail.open).to.be.true;
    expect(eventDetail.newState).to.equal('open');
    expect(eventDetail.oldState).to.equal('closed');
  });

  it('should update open property when overlay is toggled', async () => {
    const el = await fixture<ForgeAiOverlayComponent>(html`<forge-ai-overlay></forge-ai-overlay>`);

    expect(el.open).to.be.false;

    const overlay = el.shadowRoot?.querySelector('.ai-overlay') as HTMLElement;
    const toggleEvent = new CustomEvent('toggle') as CustomEvent & { newState: string; oldState: string };
    toggleEvent.newState = 'open';
    toggleEvent.oldState = 'closed';

    overlay.dispatchEvent(toggleEvent);

    expect(el.open).to.be.true;
  });
});
