import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AppLayoutComponent, AppLayoutBreakpointChangeEventData, AppLayoutDrawerChangeEventData } from './app-layout';
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

  it('should set app title href', async () => {
    const harness = await createFixture({ appTitleHref: 'https://example.com' });

    expect(harness.el.appTitleHref).to.equal('https://example.com');
    expect(harness.appBarElement?.href).to.equal('https://example.com');
  });

  it('should set app title href via attribute', async () => {
    const harness = await createFixture();

    harness.el.setAttribute('app-title-href', 'https://test.com');
    await harness.el.updateComplete;

    expect(harness.el.appTitleHref).to.equal('https://test.com');
    expect(harness.appBarElement?.href).to.equal('https://test.com');
  });

  it('should not set href on app bar when appTitleHref is undefined', async () => {
    const harness = await createFixture();

    expect(harness.el.appTitleHref).to.be.undefined;
    expect(harness.appBarElement?.hasAttribute('href')).to.be.false;
  });

  it('should set custom breakpoint', async () => {
    const harness = await createFixture({ breakpoint: 1200 });

    expect(harness.el.breakpoint).to.equal(1200);
  });

  it('should set use mini drawer', async () => {
    const harness = await createFixture({ useMiniDrawer: true });

    expect(harness.el.useMiniDrawer).to.be.true;
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

  it('should return false from isLargeScreen getter when below breakpoint', async () => {
    setupMediaQuery(false);
    const harness = await createFixture({ breakpoint: 960 });

    expect(harness.el.isLargeScreen).to.be.false;
  });

  it('should return true from isLargeScreen getter when above breakpoint', async () => {
    setupMediaQuery(true);
    const harness = await createFixture({ breakpoint: 960 });

    expect(harness.el.isLargeScreen).to.be.true;
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

  describe('closeDrawer', () => {
    it('should close the drawer when called on small screens', async () => {
      setupMediaQuery(false);
      const harness = await createFixture({ hasNavigation: true });

      // Open drawer first
      harness.menuButton?.click();
      await harness.el.updateComplete;
      expect(harness.el.matches(':state(drawer-open)')).to.be.true;

      // Call closeDrawer
      harness.el.closeDrawer();
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(drawer-closed)')).to.be.true;
      expect(harness.el.matches(':state(drawer-open)')).to.be.false;
    });

    it('should emit forge-app-layout-drawer-change event when closeDrawer is called', async () => {
      setupMediaQuery(false);
      const harness = await createFixture({ hasNavigation: true });

      // Open drawer first
      harness.menuButton?.click();
      await harness.el.updateComplete;

      const spy = sinon.spy();
      harness.el.addEventListener('forge-app-layout-drawer-change', spy);

      harness.el.closeDrawer();
      await harness.el.updateComplete;

      expect(spy.calledOnce).to.be.true;
      const eventDetail = spy.firstCall.args[0].detail as AppLayoutDrawerChangeEventData;
      expect(eventDetail.open).to.be.false;
    });

    it('should not emit event when closeDrawer is called but drawer is already closed', async () => {
      setupMediaQuery(false);
      const harness = await createFixture({ hasNavigation: true });

      const spy = sinon.spy();
      harness.el.addEventListener('forge-app-layout-drawer-change', spy);

      harness.el.closeDrawer();
      await harness.el.updateComplete;

      expect(spy.called).to.be.false;
    });

    it('should not close drawer when called on large screens', async () => {
      setupMediaQuery(true);
      const harness = await createFixture({ hasNavigation: true });

      // Drawer is open by default on large screens
      expect(harness.el.matches(':state(drawer-open)')).to.be.true;

      const spy = sinon.spy();
      harness.el.addEventListener('forge-app-layout-drawer-change', spy);

      harness.el.closeDrawer();
      await harness.el.updateComplete;

      // Should remain open and no event should be emitted
      expect(harness.el.matches(':state(drawer-open)')).to.be.true;
      expect(spy.called).to.be.false;
    });

    it('should close drawer when clicking element with data-forge-app-layout-close attribute', async () => {
      setupMediaQuery(false);
      const harness = await createFixture({ hasNavigation: true, navigationWithCloseAttribute: true });

      // Open drawer first
      harness.menuButton?.click();
      await harness.el.updateComplete;
      expect(harness.el.matches(':state(drawer-open)')).to.be.true;

      // Click the nav item with close attribute
      harness.clickNavItemWithCloseAttribute();
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(drawer-closed)')).to.be.true;
    });

    it('should emit forge-app-layout-drawer-change when clicking element with data-forge-app-layout-close', async () => {
      setupMediaQuery(false);
      const harness = await createFixture({ hasNavigation: true, navigationWithCloseAttribute: true });

      // Open drawer first
      harness.menuButton?.click();
      await harness.el.updateComplete;

      const spy = sinon.spy();
      harness.el.addEventListener('forge-app-layout-drawer-change', spy);

      harness.clickNavItemWithCloseAttribute();
      await harness.el.updateComplete;

      expect(spy.calledOnce).to.be.true;
      const eventDetail = spy.firstCall.args[0].detail as AppLayoutDrawerChangeEventData;
      expect(eventDetail.open).to.be.false;
    });

    it('should not close drawer when clicking element without data-forge-app-layout-close attribute', async () => {
      setupMediaQuery(false);
      const harness = await createFixture({ hasNavigation: true, navigationWithCloseAttribute: true });

      // Open drawer first
      harness.menuButton?.click();
      await harness.el.updateComplete;
      expect(harness.el.matches(':state(drawer-open)')).to.be.true;

      // Click the nav item without close attribute
      harness.clickNavItemWithoutCloseAttribute();
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(drawer-open)')).to.be.true;
    });
  });

  describe('events', () => {
    it('should emit forge-app-layout-drawer-change event when drawer opens', async () => {
      setupMediaQuery(false);
      const harness = await createFixture({ hasNavigation: true });
      const spy = sinon.spy();

      harness.el.addEventListener('forge-app-layout-drawer-change', spy);
      harness.menuButton?.click();
      await harness.el.updateComplete;

      expect(spy.calledOnce).to.be.true;
      const eventDetail = spy.firstCall.args[0].detail as AppLayoutDrawerChangeEventData;
      expect(eventDetail.open).to.be.true;
    });

    it('should emit forge-app-layout-drawer-change event when drawer closes', async () => {
      setupMediaQuery(false);
      const harness = await createFixture({ hasNavigation: true });

      // Open drawer first
      harness.menuButton?.click();
      await harness.el.updateComplete;

      const spy = sinon.spy();
      harness.el.addEventListener('forge-app-layout-drawer-change', spy);

      // Close drawer
      harness.menuButton?.click();
      await harness.el.updateComplete;

      expect(spy.calledOnce).to.be.true;
      const eventDetail = spy.firstCall.args[0].detail as AppLayoutDrawerChangeEventData;
      expect(eventDetail.open).to.be.false;
    });

    it('should emit forge-app-layout-breakpoint-change event when breakpoint is crossed', async () => {
      let mediaQueryCallback: ((evt: MediaQueryListEvent) => void) | null = null;

      sinon.stub(window, 'matchMedia').returns({
        matches: false,
        addEventListener: (eventName: string, callback: (evt: MediaQueryListEvent) => void) => {
          if (eventName === 'change') {
            mediaQueryCallback = callback;
          }
        },
        removeEventListener: sinon.stub(),
        media: '',
        onchange: null,
        addListener: sinon.stub(),
        removeListener: sinon.stub(),
        dispatchEvent: sinon.stub()
      } as unknown as MediaQueryList);

      const harness = await createFixture({ hasNavigation: true });
      const spy = sinon.spy();

      harness.el.addEventListener('forge-app-layout-breakpoint-change', spy);

      // Simulate breakpoint change
      mediaQueryCallback?.({ matches: true } as MediaQueryListEvent);
      await harness.el.updateComplete;

      expect(spy.calledOnce).to.be.true;
      const eventDetail = spy.firstCall.args[0].detail as AppLayoutBreakpointChangeEventData;
      expect(eventDetail.breakpoint).to.equal('large');
    });

    it('should emit forge-app-layout-breakpoint-change event with small when going below breakpoint', async () => {
      let mediaQueryCallback: ((evt: MediaQueryListEvent) => void) | null = null;

      sinon.stub(window, 'matchMedia').returns({
        matches: true,
        addEventListener: (eventName: string, callback: (evt: MediaQueryListEvent) => void) => {
          if (eventName === 'change') {
            mediaQueryCallback = callback;
          }
        },
        removeEventListener: sinon.stub(),
        media: '',
        onchange: null,
        addListener: sinon.stub(),
        removeListener: sinon.stub(),
        dispatchEvent: sinon.stub()
      } as unknown as MediaQueryList);

      const harness = await createFixture({ hasNavigation: true });
      const spy = sinon.spy();

      harness.el.addEventListener('forge-app-layout-breakpoint-change', spy);

      // Simulate breakpoint change
      mediaQueryCallback?.({ matches: false } as MediaQueryListEvent);
      await harness.el.updateComplete;

      expect(spy.calledOnce).to.be.true;
      const eventDetail = spy.firstCall.args[0].detail as AppLayoutBreakpointChangeEventData;
      expect(eventDetail.breakpoint).to.equal('small');
    });

    it('should have bubbles and composed set to true on drawer change event', async () => {
      setupMediaQuery(false);
      const harness = await createFixture({ hasNavigation: true });
      const spy = sinon.spy();

      harness.el.addEventListener('forge-app-layout-drawer-change', spy);
      harness.menuButton?.click();
      await harness.el.updateComplete;

      const event = spy.firstCall.args[0] as CustomEvent;
      expect(event.bubbles).to.be.true;
      expect(event.composed).to.be.true;
    });

    it('should have bubbles and composed set to true on breakpoint change event', async () => {
      let mediaQueryCallback: ((evt: MediaQueryListEvent) => void) | null = null;

      sinon.stub(window, 'matchMedia').returns({
        matches: false,
        addEventListener: (eventName: string, callback: (evt: MediaQueryListEvent) => void) => {
          if (eventName === 'change') {
            mediaQueryCallback = callback;
          }
        },
        removeEventListener: sinon.stub(),
        media: '',
        onchange: null,
        addListener: sinon.stub(),
        removeListener: sinon.stub(),
        dispatchEvent: sinon.stub()
      } as unknown as MediaQueryList);

      const harness = await createFixture({ hasNavigation: true });
      const spy = sinon.spy();

      harness.el.addEventListener('forge-app-layout-breakpoint-change', spy);

      mediaQueryCallback?.({ matches: true } as MediaQueryListEvent);
      await harness.el.updateComplete;

      const event = spy.firstCall.args[0] as CustomEvent;
      expect(event.bubbles).to.be.true;
      expect(event.composed).to.be.true;
    });

    it('should reset drawer state when dialog is closed via forge-dialog-close event', async () => {
      setupMediaQuery(false);
      const harness = await createFixture({ hasNavigation: true });

      // Open the dialog
      harness.menuButton?.click();
      await harness.el.updateComplete;
      expect(harness.el.matches(':state(drawer-open)')).to.be.true;

      // Simulate dialog close (escape key or backdrop click triggers this event)
      harness.simulateDialogClose();
      await harness.el.updateComplete;

      expect(harness.el.matches(':state(drawer-closed)')).to.be.true;
      expect(harness.el.matches(':state(drawer-open)')).to.be.false;
    });

    it('should emit forge-app-layout-drawer-change event when dialog is closed via forge-dialog-close', async () => {
      setupMediaQuery(false);
      const harness = await createFixture({ hasNavigation: true });

      // Open the dialog
      harness.menuButton?.click();
      await harness.el.updateComplete;

      const spy = sinon.spy();
      harness.el.addEventListener('forge-app-layout-drawer-change', spy);

      // Simulate dialog close
      harness.simulateDialogClose();
      await harness.el.updateComplete;

      expect(spy.calledOnce).to.be.true;
      const eventDetail = spy.firstCall.args[0].detail as AppLayoutDrawerChangeEventData;
      expect(eventDetail.open).to.be.false;
    });

    it('should allow reopening dialog with single click after closing via forge-dialog-close', async () => {
      setupMediaQuery(false);
      const harness = await createFixture({ hasNavigation: true });

      // Open the dialog
      harness.menuButton?.click();
      await harness.el.updateComplete;
      expect(harness.el.matches(':state(drawer-open)')).to.be.true;

      // Simulate dialog close (escape key or backdrop click)
      harness.simulateDialogClose();
      await harness.el.updateComplete;
      expect(harness.el.matches(':state(drawer-closed)')).to.be.true;

      // Click menu button again - should open on first click
      harness.menuButton?.click();
      await harness.el.updateComplete;
      expect(harness.el.matches(':state(drawer-open)')).to.be.true;
    });
  });
});

class AppLayoutHarness {
  constructor(public el: AppLayoutComponent) {}

  public get scaffoldElement(): IScaffoldComponent | null {
    return this.el.shadowRoot?.querySelector('forge-scaffold') as IScaffoldComponent | null;
  }

  public get appBarElement(): (IAppBarComponent & { titleText: string; href: string }) | null {
    return this.el.shadowRoot?.querySelector('forge-app-bar') as
      | (IAppBarComponent & { titleText: string; href: string })
      | null;
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

  public get closeDrawerButton(): HTMLElement | null {
    return this.el.shadowRoot?.querySelector('.close-drawer-button') as HTMLElement | null;
  }

  public simulateDialogClose(): void {
    const dialog = this.dialogElement;
    if (dialog) {
      dialog.dispatchEvent(new CustomEvent('forge-dialog-close', { bubbles: true, composed: true }));
    }
  }

  public simulateEscapeKey(): void {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  }

  public clickNavItemWithCloseAttribute(): void {
    const navItem = this.el.querySelector('#nav-with-close') as HTMLElement | null;
    navItem?.click();
  }

  public clickNavItemWithoutCloseAttribute(): void {
    const navItem = this.el.querySelector('#nav-without-close') as HTMLElement | null;
    navItem?.click();
  }
}

interface AppLayoutFixtureConfig {
  appTitle?: string;
  appTitleHref?: string;
  breakpoint?: number;
  useMiniDrawer?: boolean;
  miniHover?: boolean;
  hasNavigation?: boolean;
  navigationWithCloseAttribute?: boolean;
  hasBodyContent?: boolean;
  hasLogo?: boolean;
  hasAppBarStart?: boolean;
  hasAppBarCenter?: boolean;
  hasAppBarEnd?: boolean;
}

async function createFixture({
  appTitle = '',
  appTitleHref,
  breakpoint = 960,
  useMiniDrawer = false,
  miniHover = false,
  hasNavigation = false,
  navigationWithCloseAttribute = false,
  hasBodyContent = false,
  hasLogo = false,
  hasAppBarStart = false,
  hasAppBarCenter = false,
  hasAppBarEnd = false
}: AppLayoutFixtureConfig = {}): Promise<AppLayoutHarness> {
  const navigationContent = navigationWithCloseAttribute
    ? html`
        <nav slot="navigation">
          <a id="nav-with-close" href="#" data-forge-app-layout-close>Home</a>
          <a id="nav-without-close" href="#">Settings</a>
        </nav>
      `
    : hasNavigation
      ? html`<nav slot="navigation">Navigation Content</nav>`
      : '';

  const el = await fixture<AppLayoutComponent>(html`
    <forge-app-layout
      app-title=${appTitle}
      .appTitleHref=${appTitleHref}
      breakpoint=${breakpoint}
      ?use-mini-drawer=${useMiniDrawer}
      ?mini-hover=${miniHover}>
      ${navigationContent} ${hasBodyContent ? html`<div slot="body">Body Content</div>` : ''}
      ${hasLogo ? html`<div slot="app-bar-logo">Logo</div>` : ''}
      ${hasAppBarStart ? html`<div slot="app-bar-start">Start Content</div>` : ''}
      ${hasAppBarCenter ? html`<div slot="app-bar-center">Center Content</div>` : ''}
      ${hasAppBarEnd ? html`<div slot="app-bar-end">End Content</div>` : ''}
    </forge-app-layout>
  `);

  return new AppLayoutHarness(el);
}
