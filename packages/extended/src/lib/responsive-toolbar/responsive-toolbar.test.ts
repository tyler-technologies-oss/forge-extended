import { expect } from '@esm-bundle/chai';
import { fixture, html, nextFrame } from '@open-wc/testing';
import { ResponsiveToolbarComponent } from './responsive-toolbar';
import sinon from 'sinon';

import './responsive-toolbar';

describe('ResponsiveToolbarComponent', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<ResponsiveToolbarComponent>(html`<forge-responsive-toolbar></forge-responsive-toolbar>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should have expected default state', async () => {
    const harness = await createFixture();

    expect(harness.el.noBorder).to.be.false;
    expect(harness.el.inverted).to.be.false;
    expect(harness.el.resizeDelay).to.equal(100);
  });

  it('should set large state', async () => {
    const harness = await createFixture({ width: '1440px' });

    expect(harness.el.matches(':state(large)')).to.be.true;
  });

  it('should set small state', async () => {
    const harness = await createFixture({ width: '300px' });

    expect(harness.el.matches(':state(small)')).to.be.true;
  });

  it('content should project into the before-start slot', async () => {
    const harness = await createFixture();
    expect(harness.beforeStartSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('should update the inverted property when the attribute is set ', async () => {
    const harness = await createFixture();
    harness.el.setAttribute('inverted', '');

    expect(harness.el.inverted).to.be.true;
  });

  it('should update the noBorder property when the attribute is set ', async () => {
    const harness = await createFixture();
    harness.el.setAttribute('no-border', '');

    expect(harness.el.noBorder).to.be.true;
  });

  it('should update the resizeDelay property when the attribute is set ', async () => {
    const harness = await createFixture();
    harness.el.setAttribute('resize-delay', '200');

    expect(harness.el.resizeDelay).to.equal(200);
  });

  it('should dispatch update event on resize to small', async () => {
    const harness = await createFixture();
    const spy = sinon.spy();

    harness.el.addEventListener('forge-responsive-toolbar-update', spy);
    harness.el.style.width = '300px';

    await nextFrame();

    expect(spy).to.have.been.called;
  });

  it('should dispatch update event on resize to large', async () => {
    const harness = await createFixture({ width: '300px' });
    const spy = sinon.spy();

    harness.el.addEventListener('forge-responsive-toolbar-update', spy);
    harness.el.style.width = '1440px';

    await nextFrame();

    expect(spy).to.have.been.called;
  });

  it('should not dispatch update event on resize if the state does not change', async () => {
    const harness = await createFixture();
    const spy = sinon.spy();

    harness.el.addEventListener('forge-responsive-toolbar-update', spy);
    harness.el.style.width = '1340px';

    await nextFrame();

    expect(spy).to.not.have.been.called;
  });

  it('should dispatch update event after resize delay', async () => {
    const harness = await createFixture();

    const spy = sinon.spy();
    harness.el.addEventListener('forge-responsive-toolbar-update', spy);
    harness.el.style.width = '300px';

    expect(spy).to.not.have.been.called;

    await new Promise(resolve => setTimeout(resolve, 200));
    expect(spy).to.have.been.calledOnce;
  });

  it('should dispatch update event after changing resize delay', async () => {
    const harness = await createFixture();

    const spy = sinon.spy();
    harness.el.addEventListener('forge-responsive-toolbar-update', spy);
    harness.el.setAttribute('resize-delay', '200');
    harness.el.style.width = '300px';

    expect(spy).to.not.have.been.called;

    await new Promise(resolve => setTimeout(resolve, 300));
    expect(spy).to.have.been.calledOnce;
  });
});

interface ResponsiveToolbarFixtureConfig {
  noBorder?: boolean;
  inverted?: boolean;
  width?: string;
}

class ResponsiveToolbarHarness {
  constructor(public el: ResponsiveToolbarComponent) {}

  public get beforeStartSlot(): HTMLSlotElement {
    return this.el.shadowRoot?.querySelector('slot[name="before-start"]') as HTMLSlotElement;
  }
}

async function createFixture({
  noBorder = false,
  inverted = false,
  width = '1440px'
}: ResponsiveToolbarFixtureConfig = {}): Promise<ResponsiveToolbarHarness> {
  const el = await fixture<ResponsiveToolbarComponent>(html`
    <forge-responsive-toolbar ?no-border=${noBorder} ?inverted=${inverted} style="width: ${width}">
      <forge-icon-button aria-label="Icon button demo" slot="before-start">
        <forge-icon name="arrow_back" external></forge-icon>
      </forge-icon-button>
      <div slot="start" class="forge-typography--heading4">Community Services Directory</div>
      <div slot="end-large">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <div slot="end-small">Mobile actions</div>
      <div slot="after-end">After end</div>
    </forge-responsive-toolbar>
  `);
  return new ResponsiveToolbarHarness(el);
}
