import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import { fixture, html } from '@open-wc/testing';
import { BusyIndicatorElement } from './busy-indicator';

import './busy-indicator';

describe('Busy Indicator', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<BusyIndicatorElement>(html`<forge-busy-indicator></forge-busy-indicator>`);

    expect(el.shadowRoot).to.be.ok;
    expect(el.shadowRoot?.childNodes.length).to.be.greaterThan(0);
  });

  it('should set open attribute', async () => {
    const el = await fixture<BusyIndicatorElement>(html`<forge-busy-indicator open></forge-busy-indicator>`);

    expect(el.open).to.be.true;
    expect(el.hasAttribute('open')).to.be.true;
  });

  it('should set title text attribute', async () => {
    const el = await fixture<BusyIndicatorElement>(
      html`<forge-busy-indicator title-text="Loading..."></forge-busy-indicator>`
    );

    expect(el.titleText).to.equal('Loading...');
  });

  it('should set message attribute', async () => {
    const el = await fixture<BusyIndicatorElement>(
      html`<forge-busy-indicator message="Please wait while we load your data"></forge-busy-indicator>`
    );

    expect(el.message).to.equal('Please wait while we load your data');
  });

  it('should set cancelable attribute', async () => {
    const el = await fixture<BusyIndicatorElement>(html`<forge-busy-indicator cancelable></forge-busy-indicator>`);

    expect(el.cancelable).to.be.true;
    expect(el.hasAttribute('cancelable')).to.be.true;
  });

  it('should set spinner attribute', async () => {
    const el = await fixture<BusyIndicatorElement>(html`<forge-busy-indicator spinner></forge-busy-indicator>`);

    expect(el.spinner).to.be.true;
    expect(el.hasAttribute('spinner')).to.be.true;
  });

  it('should set progress bar determinate attribute', async () => {
    const el = await fixture<BusyIndicatorElement>(
      html`<forge-busy-indicator progress-bar-determinate></forge-busy-indicator>`
    );

    expect(el.progressBarDeterminate).to.be.true;
    expect(el.hasAttribute('progress-bar-determinate')).to.be.true;
  });

  it('should set progress bar attribute', async () => {
    const el = await fixture<BusyIndicatorElement>(html`<forge-busy-indicator progress-bar></forge-busy-indicator>`);

    expect(el.progressBar).to.be.true;
    expect(el.hasAttribute('progress-bar')).to.be.true;
  });

  it('should set progress attribute', async () => {
    const el = await fixture<BusyIndicatorElement>(html`<forge-busy-indicator progress=".5"></forge-busy-indicator>`);

    expect(el.progress).to.equal(0.5);
  });

  it('should set buffer attribute', async () => {
    const el = await fixture<BusyIndicatorElement>(html`<forge-busy-indicator buffer=".6"></forge-busy-indicator>`);

    expect(el.buffer).to.equal(0.6);
  });

  it('should set direction attribute', async () => {
    const el = await fixture<BusyIndicatorElement>(html`<forge-busy-indicator direction="row"></forge-busy-indicator>`);

    expect(el.direction).to.equal('row');
  });

  it('should dispatch cancel event', async () => {
    const el = await fixture<BusyIndicatorElement>(html`<forge-busy-indicator open cancelable></forge-busy-indicator>`);

    const spy = sinon.spy();
    el.addEventListener('forge-busy-indicator-cancel', spy);

    const cancelButton = el.shadowRoot?.querySelector('.cancel-button') as HTMLButtonElement;
    cancelButton.click();

    expect(spy).to.have.been.calledOnce;
    expect(el.open).to.be.false;
  });

  it('should not close when cancel event is prevented', async () => {
    const el = await fixture<BusyIndicatorElement>(html`<forge-busy-indicator open cancelable></forge-busy-indicator>`);

    el.addEventListener('forge-busy-indicator-cancel', e => e.preventDefault());

    const cancelButton = el.shadowRoot?.querySelector('.cancel-button') as HTMLButtonElement;
    cancelButton.click();

    expect(el.open).to.be.true;
  });
});
