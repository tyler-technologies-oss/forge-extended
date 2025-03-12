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
    const el = await fixture<ConfirmationDialogComponent>(
      html`<forge-confirmation-dialog></forge-confirmation-dialog>`
    );

    expect(el.shadowRoot).to.be.ok;
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

  it('should set the aria-label of the circular progress to the ariaLabelLoading property', async () => {
    const harness = await createFixture({ open: true, isBusy: true });

    harness.el.ariaLabelLoading = 'Loading images';
    await harness.el.updateComplete;
    expect(harness.circularProgressElement.ariaLabel).to.equal('Loading images');
  });

  it('should set the aria-label of the circular progress to the aria-label-loading attribute', async () => {
    const harness = await createFixture({ open: true, isBusy: true });

    harness.el.setAttribute('aria-label-loading', 'Loading more images');
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

  it('should dispatch primaryAction=true forge-confirmation-dialog-action event when clicking the primary action', async () => {
    const harness = await createFixture({ open: true });
    const inputSpy = sinon.spy();

    harness.el.addEventListener('forge-confirmation-dialog-action', inputSpy);

    await harness.clickPrimaryActionButton();

    expect(inputSpy).to.have.been.calledWith(sinon.match.has('detail', sinon.match.has('primaryAction', true)));
  });

  it('should dispatch primaryAction=false forge-confirmation-dialog-action event when clicking the secondary action', async () => {
    const harness = await createFixture({ open: true });
    const inputSpy = sinon.spy();

    harness.el.addEventListener('forge-confirmation-dialog-action', inputSpy);

    await harness.clickSecondaryActionButton();

    expect(inputSpy).to.have.been.calledWith(sinon.match.has('detail', sinon.match.has('primaryAction', false)));
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
  open?: boolean;
  isBusy?: boolean;
  ariaLabelLoading?: string;
  secondaryActionText?: string;
}

async function createFixture({
  open = false,
  isBusy = false,
  ariaLabelLoading,
  secondaryActionText = 'Cancel'
}: ConfirmationDialogFixtureConfig = {}): Promise<ConfirmationDialogHarness> {
  const el = await fixture<ConfirmationDialogComponent>(html`
    <forge-confirmation-dialog .open=${open} .isBusy=${isBusy} ariaLabelLoading=${ifDefined(ariaLabelLoading)}>
      <div slot="title">Title</div>
      <div slot="message">Message</div>
      <div slot="secondary-button-text" id="secondary-button-text">${ifDefined(secondaryActionText)}</div>
      <div slot="primary-button-text">Primary button text</div>
    </forge-confirmation-dialog>
  `);

  return new ConfirmationDialogHarness(el);
}
