import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { ConfirmationDialogComponent } from './confirmation-dialog';

import './confirmation-dialog';
import { ICircularProgressComponent, IDialogComponent } from '@tylertech/forge';
import { ifDefined } from 'lit/directives/if-defined.js';

describe('ConfirmationDialog', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<ConfirmationDialogComponent>(
      html`<forge-confirmation-dialog></forge-confirmation-dialog>`
    );

    expect(el.shadowRoot).to.be.ok;
  });

  it('should have expected default state', async () => {
    const harness = await createFixture();

    expect(harness.isOpen).to.be.false;
    expect(harness.isBusy).to.be.false;
    expect(harness.theme).to.be.equal('info');
  });

  it('should define sub-component dependencies', async () => {
    expect(window.customElements.get('forge-dialog')).to.be.ok;
    expect(window.customElements.get('forge-circular-progress')).to.be.ok;
    expect(window.customElements.get('forge-button')).to.be.ok;
    expect(window.customElements.get('forge-icon')).to.be.ok;
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

    expect(harness.isOpen).to.be.true;

    harness.el.open = false;
    await harness.el.updateComplete;

    expect(harness.isOpen).to.be.false;
  });

  it('should set theme', async () => {
    const harness = await createFixture({ theme: 'error' });

    expect(harness.el.theme).to.equal('error');
  });

  // it('should set accessible loading label on the busy indicator', async () => {
  //   const harness = await createFixture({ ariaLabelLoading: 'Loading data' });
  //   await harness.el.updateComplete;

  //   harness.el.open = true;
  //   harness.el.isBusy = true;
  //   await harness.el.updateComplete;

  //   expect(harness.el.ariaLabelLoading).to.equal('Loading data');
  //   expect(harness.circularProgressElement.ariaLabel).to.equal('Loading data');
  //   await expect(harness.el).shadowDom.to.be.accessible();
  // });
});

class ConfirmationDialogHarness {
  constructor(public el: ConfirmationDialogComponent) {}

  public get forgeDialogElement(): IDialogComponent {
    return this.el.shadowRoot?.querySelector('forge-dialog') as IDialogComponent;
  }

  public get secondaryButtonTextSlot(): HTMLElement {
    return this.el.shadowRoot?.querySelector('#secondary-action-text') as HTMLElement;
  }

  public get primaryButtonTextSlot(): HTMLElement {
    return this.el.shadowRoot?.querySelector('#primary-action-text') as HTMLElement;
  }

  public get circularProgressElement(): ICircularProgressComponent {
    return this.el.shadowRoot?.querySelector('forge-circular-progress') as ICircularProgressComponent;
  }

  // public get surfaceElement(): HTMLElement {
  //   return this.el.shadowRoot?.querySelector('.surface') as HTMLElement;
  // }

  // public get titleElement(): HTMLHeadingElement {
  //   return this.el.shadowRoot?.querySelector('#title') as HTMLHeadingElement;
  // }

  public get isOpen(): boolean {
    return this.el.open && this.forgeDialogElement.open;
  }

  public get isBusy(): boolean {
    return this.el.isBusy && this.forgeDialogElement.open;
  }

  public get theme(): string {
    return this.el.theme;
  }
}

interface ConfirmationDialogFixtureConfig {
  open?: boolean;
  isBusy?: boolean;
  theme?: ConfirmationDialogTheme;
  ariaLabelLoading?: string;
}

async function createFixture({
  open = false,
  isBusy = false,
  theme,
  ariaLabelLoading
}: ConfirmationDialogFixtureConfig = {}): Promise<ConfirmationDialogHarness> {
  const el = await fixture<ConfirmationDialogComponent>(html`
    <forge-confirmation-dialog
      .open=${open}
      .isBusy=${isBusy}
      theme=${ifDefined(theme)}
      ariaLabelLoading=${ifDefined(ariaLabelLoading)}>
      <div slot="title">Title</div>
      <div slot="message">Message</div>
      <div slot="secondary-button-text" id="secondary-action-text">Secondary button text</div>
      <div slot="primary-button-text" id="primary-action-text">Primary button text</div>
    </forge-confirmation-dialog>
  `);

  return new ConfirmationDialogHarness(el);
}
