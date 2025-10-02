import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import { AiDialogComponent } from './ai-dialog';

describe('AiDialogComponent', () => {
  it('should create component instance', async () => {
    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog></forge-ai-dialog>`);
    expect(el).to.be.instanceOf(AiDialogComponent);
  });

  it('should have default properties', async () => {
    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog></forge-ai-dialog>`);
    expect(el.open).to.be.false;
    expect(el.expanded).to.be.false;
  });

  it('should reflect open property to attribute', async () => {
    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog open></forge-ai-dialog>`);
    expect(el.hasAttribute('open')).to.be.true;
    expect(el.open).to.be.true;
  });

  it('should reflect expanded property to attribute', async () => {
    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog expanded></forge-ai-dialog>`);
    expect(el.hasAttribute('expanded')).to.be.true;
    expect(el.expanded).to.be.true;
  });

  it('should show dialog when open is set to true', async () => {
    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog></forge-ai-dialog>`);
    const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;

    el.open = true;
    await el.updateComplete;

    expect(dialog.open).to.be.true;
  });

  it('should close dialog when open is set to false', async () => {
    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog open></forge-ai-dialog>`);
    const dialog = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;

    el.open = false;
    await el.updateComplete;

    expect(dialog.open).to.be.false;
  });

  it('should open dialog using show() method', async () => {
    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog></forge-ai-dialog>`);

    el.show();
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should close dialog using close() method', async () => {
    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog open></forge-ai-dialog>`);

    el.close();
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should toggle dialog using toggle() method', async () => {
    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog></forge-ai-dialog>`);

    el.toggle();
    await el.updateComplete;
    expect(el.open).to.be.true;

    el.toggle();
    await el.updateComplete;
    expect(el.open).to.be.false;
  });

  it('should dispatch open event when dialog opens', async () => {
    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog></forge-ai-dialog>`);
    let openEventFired = false;

    el.addEventListener('forge-ai-dialog-open', () => {
      openEventFired = true;
    });

    el.show();
    await el.updateComplete;

    expect(openEventFired).to.be.true;
  });

  it('should dispatch close event when dialog closes', async () => {
    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog open></forge-ai-dialog>`);
    let closeEventFired = false;

    el.addEventListener('forge-ai-dialog-close', () => {
      closeEventFired = true;
    });

    el.close();
    await el.updateComplete;

    expect(closeEventFired).to.be.true;
  });

  it('should render slotted content', async () => {
    const el = await fixture<AiDialogComponent>(html`
      <forge-ai-dialog>
        <div id="test-content">Test Content</div>
      </forge-ai-dialog>
    `);

    const slot = el.shadowRoot?.querySelector('slot');
    const assignedNodes = slot?.assignedNodes();
    expect(assignedNodes?.length).to.be.greaterThan(0);
  });

  it('should close popover when Escape key is pressed and popover is visible', async () => {
    // Mock window.innerWidth to simulate large viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    });

    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog open></forge-ai-dialog>`);
    await el.updateComplete;

    expect(el.open).to.be.true;

    // Simulate Escape key press
    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(escapeEvent);
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should switch from dialog to popover when viewport changes from small to large and maintain open state', async () => {
    // Start with small viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 600
    });

    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog open></forge-ai-dialog>`);
    await el.updateComplete;

    // Should be using dialog initially and be open
    let dialogElement = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
    let popoverElement = el.shadowRoot?.querySelector('[popover]');
    expect(dialogElement).to.not.be.null;
    expect(popoverElement).to.be.null;
    expect(el.open).to.be.true;
    expect(dialogElement.open).to.be.true;

    // Simulate viewport change to large
    Object.defineProperty(window, 'innerWidth', {
      value: 1024
    });

    // Trigger media query change
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.dispatchEvent(new Event('change'));
    await el.updateComplete;

    // Should now be using popover and still be open
    dialogElement = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
    popoverElement = el.shadowRoot?.querySelector('[popover]') as HTMLElement;
    expect(dialogElement).to.be.null;
    expect(popoverElement).to.not.be.null;
    expect(el.open).to.be.true;
    expect(popoverElement.matches(':popover-open')).to.be.true;
  });

  it('should switch from popover to dialog when viewport changes from large to small and maintain open state', async () => {
    // Start with large viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    });

    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog open></forge-ai-dialog>`);
    await el.updateComplete;

    // Should be using popover initially and be open
    let dialogElement = el.shadowRoot?.querySelector('dialog');
    let popoverElement = el.shadowRoot?.querySelector('[popover]') as HTMLElement;
    expect(dialogElement).to.be.null;
    expect(popoverElement).to.not.be.null;
    expect(el.open).to.be.true;
    expect(popoverElement.matches(':popover-open')).to.be.true;

    // Simulate viewport change to small
    Object.defineProperty(window, 'innerWidth', {
      value: 600
    });

    // Trigger media query change
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.dispatchEvent(new Event('change'));
    await el.updateComplete;

    // Should now be using dialog and still be open
    dialogElement = el.shadowRoot?.querySelector('dialog') as HTMLDialogElement;
    popoverElement = el.shadowRoot?.querySelector('[popover]');
    expect(dialogElement).to.not.be.null;
    expect(popoverElement).to.be.null;
    expect(el.open).to.be.true;
    expect(dialogElement?.open).to.be.true;
  });

  it('should not close dialog when Escape key is pressed and dialog is visible', async () => {
    // Mock window.innerWidth to simulate small viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 600
    });

    const el = await fixture<AiDialogComponent>(html`<forge-ai-dialog open></forge-ai-dialog>`);
    await el.updateComplete;

    expect(el.open).to.be.true;

    // Simulate Escape key press - should not close because dialog handles its own Escape
    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(escapeEvent);
    await el.updateComplete;

    // Dialog should still be open because it handles Escape internally
    expect(el.open).to.be.true;
  });
});
