import { expect } from '@esm-bundle/chai';
import { fixture, html, nextFrame } from '@open-wc/testing';
import { ResponsiveToolbarComponent } from './responsive-toolbar';
import sinon from 'sinon';

import './responsive-toolbar';

describe('ResponsiveToolbar', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<ResponsiveToolbarComponent>(html`<forge-responsive-toolbar></forge-responsive-toolbar>`);

    expect(el.shadowRoot).to.be.ok;
  });
});

describe('ResponsiveToolbar', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<ResponsiveToolbarComponent>(html`<forge-responsive-toolbar></forge-responsive-toolbar>`);
    expect(el.shadowRoot).to.be.ok;
  });

  it('should have expected default state', async () => {
    const harness = await createFixture();
    expect(harness.el.noBorder).to.be.false;
    expect(harness.el.autoHeight).to.be.true;
    expect(harness.el.inverted).to.be.false;
  });

  it('the internal overflowing state should not be set when toolbar is large enough to fit the title and actions', async () => {
    const harness = await createFixture({ width: '1440px' });
    expect(harness.el.matches(':state(overflowing)')).to.be.false;
  });

  it('the internal overflowing state should be set when toolbar title and actions overlap', async () => {
    const harness = await createFixture({ width: '300px' });
    expect(harness.el.matches(':state(overflowing)')).to.be.true;
  });

  it('content should project into the before-start slot', async () => {
    const harness = await createFixture();
    expect(harness.beforeStartSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content should project into the start slot', async () => {
    const harness = await createFixture();
    expect(harness.startSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content should project into the actions-desktop slot', async () => {
    const harness = await createFixture();
    expect(harness.actionsDesktopSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content should project into the actions-mobile slot', async () => {
    const harness = await createFixture();
    expect(harness.actionsMobileSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content should project into the after-end slot', async () => {
    const harness = await createFixture();
    expect(harness.afterEndSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('should update the inverted property when the attribute is set ', async () => {
    const harness = await createFixture();
    harness.el.setAttribute('inverted', 'true');
    expect(harness.el.inverted).to.be.true;
  });

  it('should update the noBorder property when the attribute is set ', async () => {
    const harness = await createFixture();
    harness.el.setAttribute('no-border', 'true');
    expect(harness.el.noBorder).to.be.true;
  });

  it('should update the autoHeight property when the attribute is removed ', async () => {
    const harness = await createFixture();
    harness.el.removeAttribute('auto-height');
    expect(harness.el.autoHeight).to.be.false;
  });

  it('should dispatch forge-responsive-toolbar-overflow event on resize', async () => {
    const harness = await createFixture();
    const spy = sinon.spy();

    harness.el.addEventListener('forge-responsive-toolbar-overflow', spy);
    harness.el.style.width = '300px';

    await nextFrame();

    expect(spy).to.have.been.called;
  });
});

interface ResponsiveToolbarFixtureConfig {
  noBorder?: boolean;
  autoHeight?: boolean;
  inverted?: boolean;
  width?: string;
}

class ResponsiveToolbarHarness {
  constructor(public el: ResponsiveToolbarComponent) {}

  public get beforeStartSlot(): HTMLSlotElement {
    return this.el.shadowRoot?.querySelector('slot[name="before-start"]') as HTMLSlotElement;
  }

  public get startSlot(): HTMLSlotElement {
    return this.el.shadowRoot?.querySelector('slot[name="start"]') as HTMLSlotElement;
  }

  public get actionsDesktopSlot(): HTMLSlotElement {
    return this.el.shadowRoot?.querySelector('slot[name="actions-desktop"]') as HTMLSlotElement;
  }

  public get actionsMobileSlot(): HTMLSlotElement {
    return this.el.shadowRoot?.querySelector('slot[name="actions-mobile"]') as HTMLSlotElement;
  }

  public get afterEndSlot(): HTMLSlotElement {
    return this.el.shadowRoot?.querySelector('slot[name="after-end"]') as HTMLSlotElement;
  }
}

async function createFixture({
  noBorder = false,
  autoHeight = true,
  inverted = false,
  width = '1440px'
}: ResponsiveToolbarFixtureConfig = {}): Promise<ResponsiveToolbarHarness> {
  const el = await fixture<ResponsiveToolbarComponent>(html`
    <forge-responsive-toolbar
      ?no-border=${noBorder}
      ?auto-height=${autoHeight}
      ?inverted=${inverted}
      style="width: ${width}">
      <forge-icon-button aria-label="Icon button demo" slot="before-start">
        <forge-icon name="arrow_back" external></forge-icon>
      </forge-icon-button>
      <div slot="start" class="forge-typography--heading4">Community Services Directory</div>
      <div slot="actions-desktop">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <div slot="actions-mobile">Mobile actions</div>
      <div slot="after-end">After end</div>
    </forge-responsive-toolbar>
  `);
  return new ResponsiveToolbarHarness(el);
}
