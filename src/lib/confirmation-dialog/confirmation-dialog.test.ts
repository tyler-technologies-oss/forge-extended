import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import { fixture, html } from '@open-wc/testing';
import { ConfirmationDialogElement } from './confirmation-dialog';

import './confirmation-dialog';
import { CircularProgressComponent } from '@tylertech/forge';

describe('Confirmation Dialog', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<ConfirmationDialogElement>(html`<forge-confirmation-dialog></forge-confirmation-dialog>`);

    expect(el.shadowRoot).to.be.ok;
    expect(el.shadowRoot?.childNodes.length).to.be.greaterThan(0);
  });

  it('should set open attribute', async () => {
    const el = await fixture<ConfirmationDialogElement>(
      html`<forge-confirmation-dialog open></forge-confirmation-dialog>`
    );

    expect(el.open).to.be.true;
    expect(el.hasAttribute('open')).to.be.true;
  });

  it('should set isBusy attribute', async () => {
    const el = await fixture<ConfirmationDialogElement>(
      html`<forge-confirmation-dialog is-busy></forge-confirmation-dialog>`
    );

    expect(el.isBusy).to.be.true;
    expect(el.hasAttribute('is-busy')).to.be.true;
  });

  it('should set show title text attribute', async () => {
    const el = await fixture<ConfirmationDialogElement>(
      html`<forge-confirmation-dialog show-title-text></forge-confirmation-dialog>`
    );

    expect(el.showTitleText).to.be.true;
  });

  it('should set title text attribute', async () => {
    const el = await fixture<ConfirmationDialogElement>(
      html`<forge-confirmation-dialog title-text="Title"></forge-confirmation-dialog>`
    );

    expect(el.titleText).to.equal('Title');
  });

  it('should set message attribute', async () => {
    const el = await fixture<ConfirmationDialogElement>(
      html`<forge-confirmation-dialog message="Please wait while we load your data"></forge-confirmation-dialog>`
    );

    expect(el.message).to.equal('Please wait while we load your data');
  });

  it('should set show secondary button attribute', async () => {
    const el = await fixture<ConfirmationDialogElement>(
      html`<forge-confirmation-dialog show-secondary-button></forge-confirmation-dialog>`
    );

    expect(el.showSecondaryButton).to.be.true;
  });

  it('should set secondary button text attribute', async () => {
    const el = await fixture<ConfirmationDialogElement>(
      html`<forge-confirmation-dialog secondary-button-text="Cancel"></forge-confirmation-dialog>`
    );

    expect(el.secondaryButtonText).to.equal('Cancel');
  });

  it('should set primary button text attribute', async () => {
    const el = await fixture<ConfirmationDialogElement>(
      html`<forge-confirmation-dialog primary-button-text="Save"></forge-confirmation-dialog>`
    );

    expect(el.primaryButtonText).to.equal('Save');
  });

  it('should dispatch forge-confirmation-dialog-action event when clicking the secondary button', async () => {
    const el = await fixture<ConfirmationDialogElement>(
      html`<forge-confirmation-dialog show-secondary-button open></forge-confirmation-dialog>`
    );

    const spy = sinon.spy();
    el.addEventListener('forge-confirmation-dialog-action', spy);

    const secondaryButton = el.shadowRoot?.querySelector('forge-button[variant="outlined"]') as HTMLButtonElement;
    console.log(secondaryButton);

    secondaryButton.click();

    expect(spy).to.have.been.calledOnce;
  });
});
