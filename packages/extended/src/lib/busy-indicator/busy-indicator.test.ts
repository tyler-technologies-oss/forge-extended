import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import {
  frame,
  IButtonComponent,
  ICircularProgressComponent,
  IDialogComponent,
  ILinearProgressComponent,
  task
} from '@tylertech/forge';
import { sendKeys, sendMouse } from '@web/test-runner-commands';
import { nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import sinon from 'sinon';
import { BusyIndicatorComponent, BusyIndicatorMode, BusyIndicatorVariant } from './busy-indicator';

import './busy-indicator';

describe('Busy Indicator', () => {
  it('should contain shadow root', async () => {
    const harness = await createFixture();

    expect(harness.el.shadowRoot).to.be.ok;
    expect(harness.forgeDialogElement).to.be.ok;
  });

  it('should have expected default state', async () => {
    const harness = await createFixture();

    expect(harness.isOpen).to.be.false;
    expect(harness.forgeDialogElement.mode).to.equal('modal');
    expect(harness.titleElement).not.to.be.ok;
    expect(harness.messageElement).not.to.be.ok;
    expect(harness.spinnerElement).to.be.ok;
    expect(harness.cancelButtonElement).not.to.be.ok;
    expect(harness.progressBarElement).not.to.be.ok;
    expect(harness.el.progress).to.equal(0);
    expect(harness.el.buffer).to.equal(0);
    expect(harness.el.mode).to.equal('fullscreen');
    expect(harness.el.label).not.to.be.ok;
    expect(harness.el.description).not.to.be.ok;
    expect(harness.el.headingLevel).to.equal(1);
  });

  it('should define sub-component dependencies', async () => {
    expect(window.customElements.get('forge-dialog')).to.be.ok;
    expect(window.customElements.get('forge-circular-progress')).to.be.ok;
    expect(window.customElements.get('forge-button')).to.be.ok;
    expect(window.customElements.get('forge-linear-progress')).to.be.ok;
  });

  it('should set open', async () => {
    const harness = await createFixture({ open: true });

    expect(harness.isOpen).to.be.true;
  });

  it('should set open via attribute', async () => {
    const harness = await createFixture();

    harness.el.setAttribute('open', '');
    await harness.el.updateComplete;

    expect(harness.isOpen).to.be.true;
  });

  it('should close when open is set to false', async () => {
    const harness = await createFixture({ open: true });

    expect(harness.isOpen).to.be.true;

    harness.el.open = false;
    await harness.el.updateComplete;

    expect(harness.isOpen).to.be.false;
  });

  it('should set title text', async () => {
    const harness = await createFixture({ titleText: 'Loading...' });

    expect(harness.el.titleText).to.equal('Loading...');
    expect(harness.titleElement).to.be.ok;
    expect(harness.titleElement.innerText).to.equal('Loading...');
  });

  it('should set title text via slot', async () => {
    const harness = await createFixture({ titleTextSlot: 'Loading...' });

    await harness.el.updateComplete;

    expect(harness.titleElement).to.be.ok;
    expect(harness.slottedTitleElement.innerText).to.equal('Loading...');
  });

  it('should set title heading level', async () => {
    const harness = await createFixture({ titleText: 'Title', headingLevel: 2 });

    expect(harness.titleElement).to.be.ok;
    expect(harness.titleElement.ariaLevel).to.equal('2');

    harness.el.headingLevel = 3;

    await harness.el.updateComplete;

    expect(harness.titleElement.ariaLevel).to.equal('3');
  });

  it('should set message', async () => {
    const harness = await createFixture({ message: 'Please wait while we load your data' });

    expect(harness.messageElement).to.be.ok;
    expect(harness.messageElement.innerText).to.equal('Please wait while we load your data');
  });

  it('should set mode', async () => {
    const harness = await createFixture({ mode: 'inline' });

    expect(harness.forgeDialogElement.mode).to.equal('inline-modal');
    expect(harness.el.mode).to.equal('inline');
  });

  it('should set accessible label', async () => {
    const harness = await createFixture({ label: 'Loading' });

    expect(harness.el.label).to.equal('Loading');
    expect(harness.forgeDialogElement.label).to.equal('Loading');
    await expect(harness.el).shadowDom.to.be.accessible();
  });

  it('should set accessible description', async () => {
    const harness = await createFixture({ description: 'Please wait while we load your data' });

    expect(harness.el.description).to.equal('Please wait while we load your data');
    expect(harness.forgeDialogElement.description).to.equal('Please wait while we load your data');
    await expect(harness.el).shadowDom.to.be.accessible();
  });

  it('should set accessible label from slotted title', async () => {
    const title = 'Loading';
    const harness = await createFixture({ titleTextSlot: title });

    expect(harness.forgeDialogElement.label).to.equal(title);
    await expect(harness.el).shadowDom.to.be.accessible();
  });

  it('should set accessible description from message when message is visible', async () => {
    const message = 'Please wait while we load your data';
    const harness = await createFixture({ variant: 'message-only', messageTextSlot: message });

    expect(harness.forgeDialogElement.description).to.equal(message);
    await expect(harness.el).shadowDom.to.be.accessible();
  });

  it('should show spinner when variant is spinner', async () => {
    const harness = await createFixture({ variant: 'spinner' });

    expect(harness.spinnerElement).to.be.ok;
  });

  it('should not show spinner when using progress variant', async () => {
    const harness = await createFixture({ variant: 'progress' });

    expect(harness.spinnerElement).not.to.be.ok;
  });

  it('should show progress bar when variant is progress', async () => {
    const harness = await createFixture({ variant: 'progress' });

    expect(harness.progressBarElement).to.be.ok;
  });

  it('should not show progress bar when using spinner variant', async () => {
    const harness = await createFixture();

    expect(harness.progressBarElement).not.to.be.ok;
  });

  it('should not show progress bar or spinner when using message-only variant', async () => {
    const harness = await createFixture({ variant: 'message-only' });

    expect(harness.spinnerElement).not.to.be.ok;
    expect(harness.progressBarElement).not.to.be.ok;
  });

  it('should set progress bar determinate attribute', async () => {
    const harness = await createFixture({ variant: 'progress', determinate: true });

    expect(harness.progressBarElement.determinate).to.be.true;
  });

  it('should set determinate progress', async () => {
    const harness = await createFixture({ variant: 'progress', determinate: true });

    expect(harness.progressBarElement.progress).to.equal(0);

    harness.el.progress = 0.75;
    await harness.el.updateComplete;

    expect(harness.progressBarElement.progress).to.equal(0.75);
  });

  it('should set determinate progress buffer', async () => {
    const harness = await createFixture({ variant: 'progress', determinate: true });

    expect(harness.progressBarElement.buffer).to.equal(0);

    harness.el.buffer = 0.5;
    await harness.el.updateComplete;

    expect(harness.progressBarElement.buffer).to.equal(0.5);
  });

  it('should dispatch cancel event', async () => {
    const harness = await createFixture({ open: true, cancelable: true });

    expect(harness.isOpen).to.be.true;

    const spy = sinon.spy();
    harness.el.addEventListener('forge-busy-indicator-cancel', spy);

    harness.cancelButtonElement.click();

    expect(spy).to.have.been.calledOnce;
    expect(harness.isOpen).to.be.false;
  });

  it('should not close when cancel event is prevented', async () => {
    const harness = await createFixture({ open: true, cancelable: true });

    expect(harness.isOpen).to.be.true;

    const spy = sinon.spy(evt => evt.preventDefault());
    harness.el.addEventListener('forge-busy-indicator-cancel', spy);

    harness.cancelButtonElement.click();

    expect(spy).to.have.been.calledOnce;
    expect(harness.isOpen).to.be.true;
  });

  it('should not close when clicking outside', async () => {
    const harness = await createFixture({ open: true });

    expect(harness.isOpen).to.be.true;

    await harness.clickOutside();

    expect(harness.isOpen).to.be.true;
  });

  it('should not close when pressing escape key', async () => {
    const harness = await createFixture({ open: true });

    expect(harness.isOpen).to.be.true;

    await harness.pressEscapeKey();

    expect(harness.isOpen).to.be.true;
  });

  it('should capture and reset focused element when fullscreen', async () => {
    const harness = await createFixture();

    expect(harness.isOpen).to.be.false;
    expect(harness.el.mode).to.equal('fullscreen');
    expect(document.activeElement).to.equal(document.body);

    harness.el.open = true;
    await harness.el.updateComplete;

    await harness.focusDelay();

    expect(harness.isOpen).to.be.true;
    expect(document.activeElement).to.equal(harness.el);

    harness.el.open = false;
    await harness.el.updateComplete;
    await harness.exitAnimation();

    expect(harness.isOpen).to.be.false;
    expect(document.activeElement).to.equal(document.body);
  });

  it('should not capture and reset focused element when inline', async () => {
    const harness = await createFixture({ mode: 'inline' });

    expect(harness.isOpen).to.be.false;
    expect(harness.el.mode).to.equal('inline');
    expect(document.activeElement).to.equal(document.body);

    harness.el.open = true;
    await harness.el.updateComplete;

    await harness.focusDelay();

    expect(harness.isOpen).to.be.true;
    expect(document.activeElement).to.equal(document.body);

    harness.el.open = false;
    await harness.el.updateComplete;

    expect(harness.isOpen).to.be.false;
    expect(document.activeElement).to.equal(document.body);
  });
});

class BusyIndicatorHarness {
  constructor(public el: BusyIndicatorComponent) {}

  public get forgeDialogElement(): IDialogComponent {
    return this.el.shadowRoot?.querySelector('forge-dialog') as IDialogComponent;
  }

  public get surfaceElement(): HTMLElement {
    return this.el.shadowRoot?.querySelector('.surface') as HTMLElement;
  }

  public get titleElement(): HTMLHeadingElement {
    return this.el.shadowRoot?.querySelector('#title') as HTMLHeadingElement;
  }

  public get slottedTitleElement(): HTMLSpanElement {
    return this.el.querySelector('[slot="title"]') as HTMLSpanElement;
  }

  public get messageElement(): HTMLParagraphElement {
    return this.el.shadowRoot?.querySelector('#message') as HTMLParagraphElement;
  }

  public get spinnerElement(): ICircularProgressComponent {
    return this.el.shadowRoot?.querySelector('.spinner') as ICircularProgressComponent;
  }

  public get cancelButtonElement(): IButtonComponent {
    return this.el.shadowRoot?.querySelector('.cancel-button') as IButtonComponent;
  }

  public get progressBarElement(): ILinearProgressComponent {
    return this.el.shadowRoot?.querySelector('.progress-container > forge-linear-progress') as ILinearProgressComponent;
  }

  public get isOpen(): boolean {
    return this.el.open && this.forgeDialogElement.open;
  }

  public showAsync(): Promise<void> {
    this.forgeDialogElement.show();
    return this.enterAnimation();
  }

  public hideAsync(): Promise<void> {
    this.forgeDialogElement.hide();
    return this.exitAnimation();
  }

  public async clickOutside(): Promise<void> {
    await sendMouse({ type: 'click', position: [0, 0], button: 'left' });
  }

  public async pressEscapeKey(): Promise<void> {
    await sendKeys({ press: 'Escape' });
  }

  public enterAnimation(): Promise<void> {
    return task(500);
  }

  public exitAnimation(): Promise<void> {
    return task(500);
  }

  public async focusDelay(): Promise<void> {
    // Wait for two frames to ensure focus is captured by the <forge-dialog> element
    await frame();
    await frame();
  }
}

interface BusyIndicatorFixtureConfig {
  open?: boolean;
  mode?: BusyIndicatorMode;
  titleText?: string;
  titleTextSlot?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  message?: string;
  messageTextSlot?: string;
  cancelable?: boolean;
  variant?: BusyIndicatorVariant;
  determinate?: boolean;
  label?: string;
  description?: string;
}

async function createFixture({
  open = false,
  mode,
  titleText,
  titleTextSlot,
  headingLevel,
  messageTextSlot,
  message,
  cancelable,
  variant,
  determinate,
  label,
  description
}: BusyIndicatorFixtureConfig = {}): Promise<BusyIndicatorHarness> {
  const el = await fixture<BusyIndicatorComponent>(html`
    <forge-busy-indicator
      label=${ifDefined(label)}
      description=${ifDefined(description)}
      title-text=${ifDefined(titleText)}
      message=${ifDefined(message)}
      ?cancelable=${cancelable}
      variant=${ifDefined(variant)}
      ?determinate=${determinate}
      .open=${open}
      mode=${ifDefined(mode)}
      heading-level=${ifDefined(headingLevel)}>
      ${titleTextSlot ? html`<span slot="title">${titleTextSlot}</span>` : nothing}
      ${messageTextSlot ? html`<span slot="message">${messageTextSlot}</span>` : nothing}
    </forge-busy-indicator>
  `);

  return new BusyIndicatorHarness(el);
}
