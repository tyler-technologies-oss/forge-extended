import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { ConfirmationDialogComponent } from './confirmation-dialog';
import sinon from 'sinon';
import { ButtonComponent, ICircularProgressComponent, IDialogComponent } from '@tylertech/forge';
import { ifDefined } from 'lit/directives/if-defined.js';
import { sendMouse } from '@web/test-runner-commands';

import './confirmation-dialog';

describe('ConfirmationDialog', () => {
  it('should contain shadow root', async () => {
    const harness = await createFixture();

    expect(harness.el.shadowRoot).to.be.ok;
  });

  it('should have expected default state', async () => {
    const harness = await createFixture();

    expect(harness.open).to.be.false;
    expect(harness.isBusy).to.be.false;
  });

  it('should define sub-component dependencies', async () => {
    expect(window.customElements.get('forge-dialog')).to.be.ok;
    expect(window.customElements.get('forge-circular-progress')).to.be.ok;
    expect(window.customElements.get('forge-button')).to.be.ok;
    expect(window.customElements.get('forge-icon')).to.be.ok;
  });

  it('should set open', async () => {
    const harness = await createFixture({ open: true });

    expect(harness.open).to.be.true;
  });

  it('should set open via attribute', async () => {
    const harness = await createFixture();

    harness.el.setAttribute('open', '');
    await harness.el.updateComplete;

    expect(harness.open).to.be.true;
  });

  it('should set the aria-label of the circular progress to the busyLabel property', async () => {
    const harness = await createFixture({ open: true, isBusy: true });

    harness.el.busyLabel = 'Loading images';
    await harness.el.updateComplete;
    expect(harness.circularProgressElement.ariaLabel).to.equal('Loading images');
  });

  it('should set the aria-label of the circular progress to the busy-label attribute', async () => {
    const harness = await createFixture({ open: true, isBusy: true });

    harness.el.setAttribute('busy-label', 'Loading more images');
    await harness.el.updateComplete;
    expect(harness.circularProgressElement.ariaLabel).to.equal('Loading more images');
  });

  it('should close when open is set to false', async () => {
    const harness = await createFixture({ open: true });

    expect(harness.open).to.be.true;

    harness.el.open = false;
    await harness.el.updateComplete;

    expect(harness.open).to.be.false;
  });

  it('content should project into the title slot', async () => {
    const harness = await createFixture();
    expect(harness.titleSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content should project into the message slot', async () => {
    const harness = await createFixture();
    expect(harness.messageSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content should project into the secondary-button-text slot', async () => {
    const harness = await createFixture();
    expect(harness.secondaryButtonTextSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content should project into the primary-button-text slot', async () => {
    const harness = await createFixture();
    expect(harness.primaryButtonTextSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('should dispatch value=true forge-confirmation-dialog-action event when clicking the primary action', async () => {
    const harness = await createFixture({ open: true });
    const inputSpy = sinon.spy();

    harness.el.addEventListener('forge-confirmation-dialog-action', inputSpy);

    await harness.clickPrimaryActionButton();

    expect(inputSpy).to.have.been.calledWith(sinon.match.has('detail', sinon.match.has('value', true)));
  });

  it('should dispatch value=false forge-confirmation-dialog-action event when clicking the secondary action', async () => {
    const harness = await createFixture({ open: true });
    const inputSpy = sinon.spy();

    harness.el.addEventListener('forge-confirmation-dialog-action', inputSpy);

    await harness.clickSecondaryActionButton();

    expect(inputSpy).to.have.been.calledWith(sinon.match.has('detail', sinon.match.has('value', false)));
  });

  it('should reset the isBusy state of the dialog when closed', async () => {
    const harness = await createFixture({ open: true });
    harness.el.isBusy = true;
    expect(harness.open).to.be.true;
    expect(harness.isBusy).to.be.true;

    harness.el.open = false;
    await harness.el.updateComplete;

    expect(harness.open).to.be.false;
    expect(harness.isBusy).to.be.false;
  });

  it('busy indicator should be present when isBusy is set to true', async () => {
    const harness = await createFixture({ open: true });
    harness.el.isBusy = true;
    await harness.el.updateComplete;
    expect(harness.circularProgressElement).to.exist;
  });

  it('busy indicator should be removed when isBusy is set to false', async () => {
    const harness = await createFixture({ open: true, isBusy: true });
    expect(harness.circularProgressElement).to.exist;
    harness.el.isBusy = false;
    await harness.el.updateComplete;
    expect(harness.circularProgressElement).to.not.exist;
  });

  it('secondary button should be removed if the secondary-button-slot is removed', async () => {
    const harness = await createFixture({ open: true, secondaryActionText: 'Cancel' });
    harness.secondaryButtonTextSlot.assignedElements().forEach(el => el.remove());

    await harness.el.updateComplete;
    await harness.el.updateComplete;

    expect(harness.secondaryButton).to.not.exist;
  });

  it('heading element should be removed if the title slot is removed', async () => {
    const harness = await createFixture({ open: true });
    expect(harness.headingElement).to.exist;

    harness.titleSlot.assignedElements().forEach(el => el.remove());

    await harness.el.updateComplete;
    await harness.el.updateComplete;

    expect(harness.headingElement).to.not.exist;
  });

  it('should not close when action event is prevented', async () => {
    const harness = await createFixture({ open: true });

    expect(harness.el.open).to.be.true;

    const spy = sinon.spy(evt => evt.preventDefault());
    harness.el.addEventListener('forge-confirmation-dialog-action', spy);

    harness.secondaryButton.click();

    expect(spy).to.have.been.calledOnce;
    expect(harness.el.open).to.be.true;
  });

  it('should close the dialog when secondary action is clicked and event is not prevented', async () => {
    const harness = await createFixture({ open: true });

    expect(harness.el.open).to.be.true;

    const spy = sinon.spy();
    harness.el.addEventListener('forge-confirmation-dialog-action', spy);

    harness.secondaryButton.click();

    expect(spy).to.have.been.calledOnce;
    expect(harness.el.open).to.be.false;
  });

  it('should not close when the backdrop is clicked', async () => {
    const harness = await createFixture({ open: true });

    expect(harness.el.open).to.be.true;
    await sendMouse({ type: 'click', position: [0, 0], button: 'left' });

    expect(harness.el.open).to.be.true;
  });

  it('should set accessible label from slotted title', async () => {
    const title = 'Loading';
    const harness = await createFixture({ title: title });

    expect(harness.forgeDialogElement.label).to.equal(title);
    await expect(harness.el).shadowDom.to.be.accessible();
  });

  it('should set accessible description from message when message is visible', async () => {
    const message = 'Please wait while we load your data';
    const harness = await createFixture({ message: message });

    expect(harness.forgeDialogElement.description).to.equal(message);
    await expect(harness.el).shadowDom.to.be.accessible();
  });

  it('primary button should default to say "confirm" if the primary-button-slot is removed', async () => {
    const harness = await createFixture({ open: true, primaryActionText: 'Yes' });
    harness.primaryButtonTextSlot.assignedElements().forEach(el => el.remove());

    await harness.el.updateComplete;
    await harness.el.updateComplete;

    expect(harness.primaryButton).to.exist;
    expect(harness.primaryButton.textContent?.trim()).to.equal('Confirm');
  });
});

class ConfirmationDialogHarness {
  constructor(public el: ConfirmationDialogComponent) {}

  public get forgeDialogElement(): IDialogComponent {
    return this.el.shadowRoot?.querySelector('forge-dialog') as IDialogComponent;
  }

  public get secondaryButtonTextSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="secondary-button-text"]') as HTMLSlotElement;
  }

  public get primaryButtonTextSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="primary-button-text"]') as HTMLSlotElement;
  }

  public get secondaryButton(): ButtonComponent {
    return this.el.shadowRoot!.querySelector('#secondary-button') as ButtonComponent;
  }

  public get headingElement(): HTMLElement {
    return this.el.shadowRoot!.querySelector('h1') as HTMLElement;
  }

  public get primaryButton(): ButtonComponent {
    return this.el.shadowRoot!.querySelector('#primary-button') as ButtonComponent;
  }

  public get circularProgressElement(): ICircularProgressComponent {
    return this.el.shadowRoot?.querySelector('forge-circular-progress') as ICircularProgressComponent;
  }

  public get titleSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="title"]') as HTMLSlotElement;
  }

  public get messageSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="message"]') as HTMLSlotElement;
  }

  public get actionsContainer(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('.actions-container') as HTMLSlotElement;
  }

  public async clickPrimaryActionButton(): Promise<void> {
    const { top, left, width, height } = this.primaryButton.getBoundingClientRect();
    await sendMouse({
      type: 'click',
      position: [Math.round(left + width / 2), Math.round(top + height / 2)],
      button: 'left'
    });
  }

  public async clickSecondaryActionButton(): Promise<void> {
    const { top, left, width, height } = this.secondaryButton.getBoundingClientRect();
    await sendMouse({
      type: 'click',
      position: [Math.round(left + width / 2), Math.round(top + height / 2)],
      button: 'left'
    });
  }

  public get open(): boolean {
    return this.el.open && this.forgeDialogElement.open;
  }

  public get isBusy(): boolean {
    return this.el.isBusy && this.forgeDialogElement.open;
  }
}

interface ConfirmationDialogFixtureConfig {
  title?: string;
  message?: string;
  open?: boolean;
  isBusy?: boolean;
  ariaLabelLoading?: string;
  secondaryActionText?: string;
  primaryActionText?: string;
}

async function createFixture({
  title = 'Title',
  message = 'Message',
  open = false,
  isBusy = false,
  ariaLabelLoading,
  secondaryActionText = 'Cancel',
  primaryActionText = 'Yes'
}: ConfirmationDialogFixtureConfig = {}): Promise<ConfirmationDialogHarness> {
  const el = await fixture<ConfirmationDialogComponent>(html`
    <forge-confirmation-dialog .open=${open} .isBusy=${isBusy} ariaLabelLoading=${ifDefined(ariaLabelLoading)}>
      <div slot="title">${ifDefined(title)}</div>
      <div slot="message">${ifDefined(message)}</div>
      <div slot="secondary-button-text" id="secondary-button-text">${ifDefined(secondaryActionText)}</div>
      <div slot="primary-button-text">${ifDefined(primaryActionText)}</div>
    </forge-confirmation-dialog>
  `);

  return new ConfirmationDialogHarness(el);
}
