import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AppLayoutComponent } from './app-layout';
import sinon from 'sinon';
import type {
  IAppBarComponent,
  IDialogComponent,
  IDrawerComponent,
  IMenuComponent,
  IMiniDrawerComponent,
  IScaffoldComponent
} from '@tylertech/forge';

import './app-layout';

describe('AppLayout', () => {
  afterEach(() => {
    sinon.restore();
  });

  function setupMediaQuery(matches: boolean): void {
    sinon.stub(window, 'matchMedia').returns({
      matches,
      addEventListener: sinon.stub(),
      removeEventListener: sinon.stub(),
      media: '',
      onchange: null,
      addListener: sinon.stub(),
      removeListener: sinon.stub(),
      dispatchEvent: sinon.stub()
    } as unknown as MediaQueryList);
  }

  it('should contain shadow root', async () => {
    const harness = await createFixture();

    expect(harness.el.shadowRoot).to.be.ok;
  });

  it('should have expected default state', async () => {
    const harness = await createFixture();

    expect(harness.el.appTitle).to.equal('');
    expect(harness.el.breakpoint).to.equal(960);
    expect(harness.el.useMiniDrawer).to.be.false;
    expect(harness.el.miniHover).to.be.false;
    expect(harness.el.viewport).to.be.true;
  });

  it('should initialize drawer as closed in constructor', async () => {
    const harness = await createFixture({ hasNavigation: true });

    expect(harness.el.matches(':state(drawer-closed)')).to.be.true;
    expect(harness.el.matches(':state(drawer-open)')).to.be.false;
  });

  it('should define sub-component dependencies', async () => {
    expect(window.customElements.get('forge-scaffold')).to.be.ok;
    expect(window.customElements.get('forge-dialog')).to.be.ok;
    expect(window.customElements.get('forge-drawer')).to.be.ok;
    expect(window.customElements.get('forge-mini-drawer')).to.be.ok;
    expect(window.customElements.get('forge-icon-button')).to.be.ok;
    expect(window.customElements.get('forge-icon')).to.be.ok;
  });

  it('should set app title', async () => {
    const harness = await createFixture({ appTitle: 'My Application' });

    expect(harness.el.appTitle).to.equal('My Application');
    expect(harness.appBarElement?.titleText).to.equal('My Application');
  });

  it('should set app title via attribute', async () => {
    const harness = await createFixture();

    harness.el.setAttribute('app-title', 'Test App');
    await harness.el.updateComplete;

    expect(harness.el.appTitle).to.equal('Test App');
    expect(harness.appBarElement?.titleText).to.equal('Test App');
  });

  it('should set custom breakpoint', async () => {
    const harness = await createFixture({ breakpoint: 1200 });

    expect(harness.el.breakpoint).to.equal(1200);
  });

  it('should set use mini drawer', async () => {
    const harness = await createFixture({ useMiniDrawer: true });

    expect(harness.el.useMiniDrawer).to.be.true;
  });

  it('should set viewport', async () => {
    const harness = await createFixture({ viewport: true });

    expect(harness.el.viewport).to.be.true;
  });

  it('should set use viewport via attribute', async () => {
    const harness = await createFixture();

    harness.el.setAttribute('use-viewport', '');
    await harness.el.updateComplete;

    expect(harness.el.viewport).to.be.true;
  });

  it('should set use mini drawer via attribute', async () => {
    const harness = await createFixture();

    harness.el.setAttribute('use-mini-drawer', '');
    await harness.el.updateComplete;

    expect(harness.el.useMiniDrawer).to.be.true;
  });

  it('should set mini hover', async () => {
    const harness = await createFixture({ miniHover: true });

    expect(harness.el.miniHover).to.be.true;
  });

  it('should set mini hover via attribute', async () => {
    const harness = await createFixture();

    harness.el.setAttribute('mini-hover', '');
    await harness.el.updateComplete;

    expect(harness.el.miniHover).to.be.true;
  });

  it('content should project into the navigation slot', async () => {
    const harness = await createFixture({ hasNavigation: true });

    expect(harness.navigationSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content should project into the body slot', async () => {
    const harness = await createFixture({ hasBodyContent: true });

    expect(harness.bodySlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content should project into the app-bar-logo slot', async () => {
    const harness = await createFixture({ hasLogo: true });

    expect(harness.appBarLogoSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content should project into the app-bar-start slot', async () => {
    const harness = await createFixture({ hasAppBarStart: true });

    expect(harness.appBarStartSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content should project into the app-bar-center slot', async () => {
    const harness = await createFixture({ hasAppBarCenter: true });

    expect(harness.appBarCenterSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('content should project into the app-bar-end slot', async () => {
    const harness = await createFixture({ hasAppBarEnd: true });

    expect(harness.appBarEndSlot.assignedNodes().length).to.greaterThanOrEqual(1);
  });

  it('should have small state when below breakpoint', async () => {
    setupMediaQuery(false);
    const harness = await createFixture({ breakpoint: 960 });

    expect(harness.el.matches(':state(small)')).to.be.true;
    expect(harness.el.matches(':state(large)')).to.be.false;
  });

  it('should have large state when above breakpoint', async () => {
    setupMediaQuery(true);
    const harness = await createFixture({ breakpoint: 960 });

    expect(harness.el.matches(':state(large)')).to.be.true;
    expect(harness.el.matches(':state(small)')).to.be.false;
  });

  it('should have drawer-closed state by default on small screens', async () => {
    setupMediaQuery(false);
    const harness = await createFixture({ hasNavigation: true });

    expect(harness.el.matches(':state(drawer-closed)')).to.be.true;
    expect(harness.el.matches(':state(drawer-open)')).to.be.false;
  });

  it('should render dialog on small screens when navigation content is present', async () => {
    setupMediaQuery(false);
    const harness = await createFixture({ hasNavigation: true });

    expect(harness.dialogElement).to.exist;
  });

  it('should render drawer on large screens with useMiniDrawer=false', async () => {
    setupMediaQuery(true);
    const harness = await createFixture({ hasNavigation: true, useMiniDrawer: false });

    expect(harness.drawerElement).to.exist;
    expect(harness.miniDrawerElement).to.not.exist;
  });

  it('should render mini-drawer on large screens with useMiniDrawer=true', async () => {
    setupMediaQuery(true);
    const harness = await createFixture({ hasNavigation: true, useMiniDrawer: true });

    expect(harness.miniDrawerElement).to.exist;
    expect(harness.drawerElement).to.not.exist;
  });

  it('should apply hover property to mini-drawer', async () => {
    setupMediaQuery(true);
    const harness = await createFixture({ hasNavigation: true, useMiniDrawer: true, miniHover: true });

    expect(harness.miniDrawerElement?.hover).to.be.true;
  });

  it('should show menu button when drawer is closed', async () => {
    setupMediaQuery(false);
    const harness = await createFixture({ hasNavigation: true });

    expect(harness.menuButton).to.exist;
  });

  it('should toggle drawer when menu button is clicked', async () => {
    setupMediaQuery(false);
    const harness = await createFixture({ hasNavigation: true });

    expect(harness.el.matches(':state(drawer-closed)')).to.be.true;

    harness.menuButton?.click();
    await harness.el.updateComplete;

    expect(harness.el.matches(':state(drawer-open)')).to.be.true;
  });
});

class AppLayoutHarness {
  constructor(public el: AppLayoutComponent) {}

  public get scaffoldElement(): IScaffoldComponent | null {
    return this.el.shadowRoot?.querySelector('forge-scaffold') as IScaffoldComponent | null;
  }

  public get appBarElement(): (IAppBarComponent & { titleText: string }) | null {
    return this.el.shadowRoot?.querySelector('forge-app-bar') as (IAppBarComponent & { titleText: string }) | null;
  }

  public get dialogElement(): IDialogComponent | null {
    return this.el.shadowRoot?.querySelector('forge-dialog') as IDialogComponent | null;
  }

  public get drawerElement(): IDrawerComponent | null {
    return this.el.shadowRoot?.querySelector('forge-drawer') as IDrawerComponent | null;
  }

  public get miniDrawerElement(): IMiniDrawerComponent | null {
    return this.el.shadowRoot?.querySelector('forge-mini-drawer') as IMiniDrawerComponent | null;
  }

  public get menuButton(): IMenuComponent | null {
    return this.el.shadowRoot?.querySelector('forge-app-bar-menu-button') as IMenuComponent | null;
  }

  public get navigationSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="navigation"]') as HTMLSlotElement;
  }

  public get bodySlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="body"]') as HTMLSlotElement;
  }

  public get appBarLogoSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="app-bar-logo"]') as HTMLSlotElement;
  }

  public get appBarStartSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="app-bar-start"]') as HTMLSlotElement;
  }

  public get appBarCenterSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="app-bar-center"]') as HTMLSlotElement;
  }

  public get appBarEndSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="app-bar-end"]') as HTMLSlotElement;
  }
}

interface AppLayoutFixtureConfig {
  appTitle?: string;
  breakpoint?: number;
  useMiniDrawer?: boolean;
  miniHover?: boolean;
  viewport?: boolean;
  hasNavigation?: boolean;
  hasBodyContent?: boolean;
  hasLogo?: boolean;
  hasAppBarStart?: boolean;
  hasAppBarCenter?: boolean;
  hasAppBarEnd?: boolean;
}

async function createFixture({
  appTitle = '',
  breakpoint = 960,
  useMiniDrawer = false,
  miniHover = false,
  viewport = true,
  hasNavigation = false,
  hasBodyContent = false,
  hasLogo = false,
  hasAppBarStart = false,
  hasAppBarCenter = false,
  hasAppBarEnd = false
}: AppLayoutFixtureConfig = {}): Promise<AppLayoutHarness> {
  const el = await fixture<AppLayoutComponent>(html`
    <forge-app-layout
      app-title=${appTitle}
      breakpoint=${breakpoint}
      ?use-mini-drawer=${useMiniDrawer}
      ?mini-hover=${miniHover}
      ?viewport=${viewport}>
      ${hasNavigation ? html`<nav slot="navigation">Navigation Content</nav>` : ''}
      ${hasBodyContent ? html`<div slot="body">Body Content</div>` : ''}
      ${hasLogo ? html`<div slot="app-bar-logo">Logo</div>` : ''}
      ${hasAppBarStart ? html`<div slot="app-bar-start">Start Content</div>` : ''}
      ${hasAppBarCenter ? html`<div slot="app-bar-center">Center Content</div>` : ''}
      ${hasAppBarEnd ? html`<div slot="app-bar-end">End Content</div>` : ''}
    </forge-app-layout>
  `);

  return new AppLayoutHarness(el);
}
