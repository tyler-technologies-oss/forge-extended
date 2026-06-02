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

  function setupMediaQueryWithCallback(): {
    trigger: (matches: boolean) => void;
  } {
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

    return {
      trigger: (matches: boolean) => {
        mediaQueryCallback?.({ matches } as MediaQueryListEvent);
      }
    };
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

  describe('App Bar Properties', () => {
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
  });

  describe('Breakpoint Properties', () => {
    it('should set custom breakpoint', async () => {
      const harness = await createFixture({ breakpoint: 1200 });

      expect(harness.el.breakpoint).to.equal(1200);
    });

    it('should have undefined leftBreakpoint and rightBreakpoint by default', async () => {
      const harness = await createFixture();

      expect(harness.el.leftBreakpoint).to.be.undefined;
      expect(harness.el.rightBreakpoint).to.be.undefined;
    });

    it('should set leftBreakpoint via property', async () => {
      const harness = await createFixture({ leftBreakpoint: 800 });

      expect(harness.el.leftBreakpoint).to.equal(800);
    });

    it('should set rightBreakpoint via property', async () => {
      const harness = await createFixture({ rightBreakpoint: 1200 });

      expect(harness.el.rightBreakpoint).to.equal(1200);
    });

    it('should set leftBreakpoint via attribute', async () => {
      const harness = await createFixture();

      harness.el.setAttribute('left-breakpoint', '800');
      await harness.el.updateComplete;

      expect(harness.el.leftBreakpoint).to.equal(800);
    });

    it('should set rightBreakpoint via attribute', async () => {
      const harness = await createFixture();

      harness.el.setAttribute('right-breakpoint', '1200');
      await harness.el.updateComplete;

      expect(harness.el.rightBreakpoint).to.equal(1200);
    });
  });

  describe('Mini Drawer Properties', () => {
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
  });

  describe('Slot Projection', () => {
    it('content should project into the navigation slot', async () => {
      const harness = await createFixture({ hasNavigation: true });

      expect(harness.navigationSlot.assignedNodes().length).to.greaterThanOrEqual(1);
    });

    it('content should project into the body slot', async () => {
      const harness = await createFixture({ hasBodyContent: true });

      expect(harness.bodySlot.assignedNodes().length).to.greaterThanOrEqual(1);
    });

    it('should project content without a slot attribute into the body slot by default', async () => {
      const el = await fixture<AppLayoutComponent>(html`
        <forge-app-layout>
          <div id="default-content">Default Body Content</div>
        </forge-app-layout>
      `);

      const defaultSlot = el.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;
      const assignedElements = defaultSlot.assignedElements({ flatten: true });

      expect(assignedElements.length).to.be.greaterThan(0);
      expect(assignedElements.some(element => element.id === 'default-content')).to.be.true;
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

    it('content should project into the body-right-content slot', async () => {
      const harness = await createFixture({ hasBodyRightContent: true });

      expect(harness.bodyRightContentSlot.assignedNodes().length).to.greaterThanOrEqual(1);
    });
  });

  describe('Responsive Behavior', () => {
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

    it('should emit forge-app-layout-breakpoint-change event when breakpoint is crossed', async () => {
      const { trigger } = setupMediaQueryWithCallback();
      const harness = await createFixture({ hasNavigation: true });
      const spy = sinon.spy();

      harness.el.addEventListener('forge-app-layout-breakpoint-change', spy);
      trigger(true);
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
      mediaQueryCallback?.({ matches: false } as MediaQueryListEvent);
      await harness.el.updateComplete;

      expect(spy.calledOnce).to.be.true;
      const eventDetail = spy.firstCall.args[0].detail as AppLayoutBreakpointChangeEventData;
      expect(eventDetail.breakpoint).to.equal('small');
    });

    it('should have bubbles and composed set to true on breakpoint change event', async () => {
      const { trigger } = setupMediaQueryWithCallback();
      const harness = await createFixture({ hasNavigation: true });
      const spy = sinon.spy();

      harness.el.addEventListener('forge-app-layout-breakpoint-change', spy);
      trigger(true);
      await harness.el.updateComplete;

      const event = spy.firstCall.args[0] as CustomEvent;
      expect(event.bubbles).to.be.true;
      expect(event.composed).to.be.true;
    });
  });

  // Parameterized drawer tests for left and right drawers
  interface DrawerTestConfig {
    side: 'left' | 'right';
    statePrefix: string;
    eventName: string;
    fixtureOptions: Partial<AppLayoutFixtureConfig>;
    getDialog: (harness: AppLayoutHarness) => IDialogComponent | null;
    getDrawer: (harness: AppLayoutHarness) => IDrawerComponent | null;
    openMethod: (el: AppLayoutComponent) => void;
    closeMethod: (el: AppLayoutComponent) => void;
    toggleMethod: (el: AppLayoutComponent) => void;
    simulateDialogClose: (harness: AppLayoutHarness) => void;
    autoOpensOnLargeScreen: boolean;
  }

  const leftDrawerConfig: DrawerTestConfig = {
    side: 'left',
    statePrefix: 'drawer',
    eventName: 'forge-app-layout-drawer-change',
    fixtureOptions: { hasNavigation: true },
    getDialog: harness => harness.dialogElement,
    getDrawer: harness => harness.drawerElement,
    openMethod: () => {},
    closeMethod: el => el.closeDrawer(),
    toggleMethod: () => {},
    simulateDialogClose: harness => harness.simulateDialogClose(),
    autoOpensOnLargeScreen: true
  };

  const rightDrawerConfig: DrawerTestConfig = {
    side: 'right',
    statePrefix: 'right-drawer',
    eventName: 'forge-app-layout-right-drawer-change',
    fixtureOptions: { hasBodyRightContent: true },
    getDialog: harness => harness.rightDialogElement,
    getDrawer: harness => harness.rightDrawerElement,
    openMethod: el => el.openRightDrawer(),
    closeMethod: el => el.closeRightDrawer(),
    toggleMethod: el => el.toggleRightDrawer(),
    simulateDialogClose: harness => harness.simulateRightDialogClose(),
    autoOpensOnLargeScreen: false
  };

  function createDrawerTests(config: DrawerTestConfig): void {
    describe(`${config.side} drawer`, () => {
      it(`should have ${config.statePrefix}-closed state by default`, async () => {
        const harness = await createFixture(config.fixtureOptions);

        expect(harness.el.matches(`:state(${config.statePrefix}-closed)`)).to.be.true;
        expect(harness.el.matches(`:state(${config.statePrefix}-open)`)).to.be.false;
      });

      it('should render dialog on small screens when content is present', async () => {
        setupMediaQuery(false);
        const harness = await createFixture(config.fixtureOptions);

        if (config.side === 'right') {
          config.openMethod(harness.el);
          await harness.el.updateComplete;
        }

        expect(config.getDialog(harness)).to.exist;
      });

      it('should render drawer on large screens', async () => {
        setupMediaQuery(true);
        const harness = await createFixture(config.fixtureOptions);

        if (config.side === 'right') {
          config.openMethod(harness.el);
          await harness.el.updateComplete;
        }

        expect(config.getDrawer(harness)).to.exist;
      });

      if (config.autoOpensOnLargeScreen) {
        it('should auto-open drawer on large screens', async () => {
          setupMediaQuery(true);
          const harness = await createFixture(config.fixtureOptions);

          expect(harness.el.matches(`:state(${config.statePrefix}-open)`)).to.be.true;
        });
      } else {
        it('should NOT auto-open drawer on large screens', async () => {
          setupMediaQuery(true);
          const harness = await createFixture(config.fixtureOptions);

          expect(harness.el.matches(`:state(${config.statePrefix}-closed)`)).to.be.true;
        });
      }

      it(`should emit ${config.eventName} event when drawer closes via dialog`, async () => {
        setupMediaQuery(false);
        const harness = await createFixture(config.fixtureOptions);

        config.openMethod(harness.el);
        await harness.el.updateComplete;

        if (config.side === 'left') {
          harness.menuButton?.click();
          await harness.el.updateComplete;
        }

        const spy = sinon.spy();
        harness.el.addEventListener(config.eventName, spy);

        config.simulateDialogClose(harness);
        await harness.el.updateComplete;

        expect(spy.calledOnce).to.be.true;
        const eventDetail = spy.firstCall.args[0].detail as AppLayoutDrawerChangeEventData;
        expect(eventDetail.open).to.be.false;
      });

      it(`should have bubbles and composed set to true on ${config.eventName} event`, async () => {
        const harness = await createFixture(config.fixtureOptions);
        const spy = sinon.spy();

        harness.el.addEventListener(config.eventName, spy);

        if (config.side === 'left') {
          setupMediaQuery(false);
          const harness2 = await createFixture(config.fixtureOptions);
          harness2.el.addEventListener(config.eventName, spy);
          harness2.menuButton?.click();
          await harness2.el.updateComplete;
        } else {
          config.openMethod(harness.el);
          await harness.el.updateComplete;
        }

        const event = spy.firstCall.args[0] as CustomEvent;
        expect(event.bubbles).to.be.true;
        expect(event.composed).to.be.true;
      });
    });
  }

  // Run parameterized tests for both drawers
  createDrawerTests(leftDrawerConfig);
  createDrawerTests(rightDrawerConfig);

  describe('Left Drawer Specific', () => {
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

      harness.menuButton?.click();
      await harness.el.updateComplete;

      const spy = sinon.spy();
      harness.el.addEventListener('forge-app-layout-drawer-change', spy);

      harness.menuButton?.click();
      await harness.el.updateComplete;

      expect(spy.calledOnce).to.be.true;
      const eventDetail = spy.firstCall.args[0].detail as AppLayoutDrawerChangeEventData;
      expect(eventDetail.open).to.be.false;
    });

    describe('closeDrawer method', () => {
      it('should close the drawer when called on small screens', async () => {
        setupMediaQuery(false);
        const harness = await createFixture({ hasNavigation: true });

        harness.menuButton?.click();
        await harness.el.updateComplete;
        expect(harness.el.matches(':state(drawer-open)')).to.be.true;

        harness.el.closeDrawer();
        await harness.el.updateComplete;

        expect(harness.el.matches(':state(drawer-closed)')).to.be.true;
        expect(harness.el.matches(':state(drawer-open)')).to.be.false;
      });

      it('should emit forge-app-layout-drawer-change event when closeDrawer is called', async () => {
        setupMediaQuery(false);
        const harness = await createFixture({ hasNavigation: true });

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

        expect(harness.el.matches(':state(drawer-open)')).to.be.true;

        const spy = sinon.spy();
        harness.el.addEventListener('forge-app-layout-drawer-change', spy);

        harness.el.closeDrawer();
        await harness.el.updateComplete;

        expect(harness.el.matches(':state(drawer-open)')).to.be.true;
        expect(spy.called).to.be.false;
      });
    });

    describe('data-forge-app-layout-close attribute', () => {
      it('should close drawer when clicking element with data-forge-app-layout-close attribute', async () => {
        setupMediaQuery(false);
        const harness = await createFixture({ hasNavigation: true, navigationWithCloseAttribute: true });

        harness.menuButton?.click();
        await harness.el.updateComplete;
        expect(harness.el.matches(':state(drawer-open)')).to.be.true;

        harness.clickNavItemWithCloseAttribute();
        await harness.el.updateComplete;

        expect(harness.el.matches(':state(drawer-closed)')).to.be.true;
      });

      it('should emit forge-app-layout-drawer-change when clicking element with data-forge-app-layout-close', async () => {
        setupMediaQuery(false);
        const harness = await createFixture({ hasNavigation: true, navigationWithCloseAttribute: true });

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

        harness.menuButton?.click();
        await harness.el.updateComplete;
        expect(harness.el.matches(':state(drawer-open)')).to.be.true;

        harness.clickNavItemWithoutCloseAttribute();
        await harness.el.updateComplete;

        expect(harness.el.matches(':state(drawer-open)')).to.be.true;
      });
    });

    describe('dialog close event handling', () => {
      it('should reset drawer state when dialog is closed via forge-dialog-close event', async () => {
        setupMediaQuery(false);
        const harness = await createFixture({ hasNavigation: true });

        harness.menuButton?.click();
        await harness.el.updateComplete;
        expect(harness.el.matches(':state(drawer-open)')).to.be.true;

        harness.simulateDialogClose();
        await harness.el.updateComplete;

        expect(harness.el.matches(':state(drawer-closed)')).to.be.true;
        expect(harness.el.matches(':state(drawer-open)')).to.be.false;
      });

      it('should allow reopening dialog with single click after closing via forge-dialog-close', async () => {
        setupMediaQuery(false);
        const harness = await createFixture({ hasNavigation: true });

        harness.menuButton?.click();
        await harness.el.updateComplete;
        expect(harness.el.matches(':state(drawer-open)')).to.be.true;

        harness.simulateDialogClose();
        await harness.el.updateComplete;
        expect(harness.el.matches(':state(drawer-closed)')).to.be.true;

        harness.menuButton?.click();
        await harness.el.updateComplete;
        expect(harness.el.matches(':state(drawer-open)')).to.be.true;
      });
    });
  });

  describe('Right Drawer Specific', () => {
    describe('openRightDrawer method', () => {
      it('should open the right drawer', async () => {
        const harness = await createFixture({ hasBodyRightContent: true });

        expect(harness.el.matches(':state(right-drawer-closed)')).to.be.true;

        harness.el.openRightDrawer();
        await harness.el.updateComplete;

        expect(harness.el.matches(':state(right-drawer-open)')).to.be.true;
        expect(harness.el.matches(':state(right-drawer-closed)')).to.be.false;
      });

      it('should emit forge-app-layout-right-drawer-change event when opening', async () => {
        const harness = await createFixture({ hasBodyRightContent: true });
        const spy = sinon.spy();

        harness.el.addEventListener('forge-app-layout-right-drawer-change', spy);
        harness.el.openRightDrawer();
        await harness.el.updateComplete;

        expect(spy.calledOnce).to.be.true;
        const eventDetail = spy.firstCall.args[0].detail as AppLayoutDrawerChangeEventData;
        expect(eventDetail.open).to.be.true;
      });

      it('should not emit event when already open', async () => {
        const harness = await createFixture({ hasBodyRightContent: true });

        harness.el.openRightDrawer();
        await harness.el.updateComplete;

        const spy = sinon.spy();
        harness.el.addEventListener('forge-app-layout-right-drawer-change', spy);

        harness.el.openRightDrawer();
        await harness.el.updateComplete;

        expect(spy.called).to.be.false;
      });
    });

    describe('closeRightDrawer method', () => {
      it('should close the right drawer', async () => {
        const harness = await createFixture({ hasBodyRightContent: true });

        harness.el.openRightDrawer();
        await harness.el.updateComplete;
        expect(harness.el.matches(':state(right-drawer-open)')).to.be.true;

        harness.el.closeRightDrawer();
        await harness.el.updateComplete;

        expect(harness.el.matches(':state(right-drawer-closed)')).to.be.true;
        expect(harness.el.matches(':state(right-drawer-open)')).to.be.false;
      });

      it('should emit forge-app-layout-right-drawer-change event when closing', async () => {
        const harness = await createFixture({ hasBodyRightContent: true });

        harness.el.openRightDrawer();
        await harness.el.updateComplete;

        const spy = sinon.spy();
        harness.el.addEventListener('forge-app-layout-right-drawer-change', spy);

        harness.el.closeRightDrawer();
        await harness.el.updateComplete;

        expect(spy.calledOnce).to.be.true;
        const eventDetail = spy.firstCall.args[0].detail as AppLayoutDrawerChangeEventData;
        expect(eventDetail.open).to.be.false;
      });

      it('should not emit event when already closed', async () => {
        const harness = await createFixture({ hasBodyRightContent: true });
        const spy = sinon.spy();

        harness.el.addEventListener('forge-app-layout-right-drawer-change', spy);

        harness.el.closeRightDrawer();
        await harness.el.updateComplete;

        expect(spy.called).to.be.false;
      });
    });

    describe('toggleRightDrawer method', () => {
      it('should toggle right drawer from closed to open', async () => {
        const harness = await createFixture({ hasBodyRightContent: true });

        expect(harness.el.matches(':state(right-drawer-closed)')).to.be.true;

        harness.el.toggleRightDrawer();
        await harness.el.updateComplete;

        expect(harness.el.matches(':state(right-drawer-open)')).to.be.true;
      });

      it('should toggle right drawer from open to closed', async () => {
        const harness = await createFixture({ hasBodyRightContent: true });

        harness.el.openRightDrawer();
        await harness.el.updateComplete;
        expect(harness.el.matches(':state(right-drawer-open)')).to.be.true;

        harness.el.toggleRightDrawer();
        await harness.el.updateComplete;

        expect(harness.el.matches(':state(right-drawer-closed)')).to.be.true;
      });
    });

    describe('data-forge-app-layout-right attribute', () => {
      it('should toggle right drawer when clicking element with data-forge-app-layout-right attribute', async () => {
        const harness = await createFixture({ hasBodyRightContent: true, hasRightToggleButton: true });

        expect(harness.el.matches(':state(right-drawer-closed)')).to.be.true;

        harness.rightToggleButton?.click();
        await harness.el.updateComplete;

        expect(harness.el.matches(':state(right-drawer-open)')).to.be.true;
      });

      it('should emit forge-app-layout-right-drawer-change when clicking toggle button', async () => {
        const harness = await createFixture({ hasBodyRightContent: true, hasRightToggleButton: true });
        const spy = sinon.spy();

        harness.el.addEventListener('forge-app-layout-right-drawer-change', spy);
        harness.rightToggleButton?.click();
        await harness.el.updateComplete;

        expect(spy.calledOnce).to.be.true;
        const eventDetail = spy.firstCall.args[0].detail as AppLayoutDrawerChangeEventData;
        expect(eventDetail.open).to.be.true;
      });

      it('should close right drawer when clicking toggle button again', async () => {
        const harness = await createFixture({ hasBodyRightContent: true, hasRightToggleButton: true });

        harness.rightToggleButton?.click();
        await harness.el.updateComplete;
        expect(harness.el.matches(':state(right-drawer-open)')).to.be.true;

        harness.rightToggleButton?.click();
        await harness.el.updateComplete;
        expect(harness.el.matches(':state(right-drawer-closed)')).to.be.true;
      });
    });
  });

  describe('Independent Breakpoints', () => {
    it('should use main breakpoint for left navigation when leftBreakpoint is not set', async () => {
      setupMediaQuery(true);
      const harness = await createFixture({ hasNavigation: true });

      expect(harness.drawerElement).to.exist;
      expect(harness.dialogElement).to.not.exist;
    });

    it('should use main breakpoint for right drawer when rightBreakpoint is not set', async () => {
      setupMediaQuery(true);
      const harness = await createFixture({ hasBodyRightContent: true });

      harness.el.openRightDrawer();
      await harness.el.updateComplete;

      expect(harness.rightDrawerElement).to.exist;
      expect(harness.rightDialogElement).to.not.exist;
    });

    it('should show menu button based on left breakpoint when leftBreakpoint is set', async () => {
      const matchMediaStub = sinon.stub(window, 'matchMedia');

      matchMediaStub.withArgs('(min-width: 960px)').returns({
        matches: true,
        addEventListener: sinon.stub(),
        removeEventListener: sinon.stub(),
        media: '',
        onchange: null,
        addListener: sinon.stub(),
        removeListener: sinon.stub(),
        dispatchEvent: sinon.stub()
      } as unknown as MediaQueryList);

      matchMediaStub.withArgs('(min-width: 1200px)').returns({
        matches: false,
        addEventListener: sinon.stub(),
        removeEventListener: sinon.stub(),
        media: '',
        onchange: null,
        addListener: sinon.stub(),
        removeListener: sinon.stub(),
        dispatchEvent: sinon.stub()
      } as unknown as MediaQueryList);

      const harness = await createFixture({ hasNavigation: true, leftBreakpoint: 1200 });

      expect(harness.menuButton).to.exist;
    });

    it('should show right dialog when rightBreakpoint makes it small screen', async () => {
      const matchMediaStub = sinon.stub(window, 'matchMedia');

      matchMediaStub.withArgs('(min-width: 960px)').returns({
        matches: true,
        addEventListener: sinon.stub(),
        removeEventListener: sinon.stub(),
        media: '',
        onchange: null,
        addListener: sinon.stub(),
        removeListener: sinon.stub(),
        dispatchEvent: sinon.stub()
      } as unknown as MediaQueryList);

      matchMediaStub.withArgs('(min-width: 1400px)').returns({
        matches: false,
        addEventListener: sinon.stub(),
        removeEventListener: sinon.stub(),
        media: '',
        onchange: null,
        addListener: sinon.stub(),
        removeListener: sinon.stub(),
        dispatchEvent: sinon.stub()
      } as unknown as MediaQueryList);

      const harness = await createFixture({ hasBodyRightContent: true, rightBreakpoint: 1400 });

      harness.el.openRightDrawer();
      await harness.el.updateComplete;

      expect(harness.rightDialogElement).to.exist;
    });

    it('should cleanup left media query when leftBreakpoint changes', async () => {
      const matchMediaStub = sinon.stub(window, 'matchMedia');
      const removeEventListenerStub = sinon.stub();

      matchMediaStub.returns({
        matches: true,
        addEventListener: sinon.stub(),
        removeEventListener: removeEventListenerStub,
        media: '',
        onchange: null,
        addListener: sinon.stub(),
        removeListener: sinon.stub(),
        dispatchEvent: sinon.stub()
      } as unknown as MediaQueryList);

      const harness = await createFixture({ leftBreakpoint: 800 });

      harness.el.leftBreakpoint = 1000;
      await harness.el.updateComplete;

      expect(removeEventListenerStub.called).to.be.true;
    });

    it('should cleanup right media query when rightBreakpoint changes', async () => {
      const matchMediaStub = sinon.stub(window, 'matchMedia');
      const removeEventListenerStub = sinon.stub();

      matchMediaStub.returns({
        matches: true,
        addEventListener: sinon.stub(),
        removeEventListener: removeEventListenerStub,
        media: '',
        onchange: null,
        addListener: sinon.stub(),
        removeListener: sinon.stub(),
        dispatchEvent: sinon.stub()
      } as unknown as MediaQueryList);

      const harness = await createFixture({ rightBreakpoint: 800 });

      harness.el.rightBreakpoint = 1000;
      await harness.el.updateComplete;

      expect(removeEventListenerStub.called).to.be.true;
    });

    it('should update left drawer state when left media query changes', async () => {
      const matchMediaStub = sinon.stub(window, 'matchMedia');
      let leftMediaQueryChangeHandler: ((event: MediaQueryListEvent) => void) | null = null;

      matchMediaStub.callsFake(query => {
        const isLeftQuery = query.includes('1200');
        return {
          matches: true,
          addEventListener: (event: string, handler: (event: MediaQueryListEvent) => void) => {
            if (isLeftQuery && event === 'change') {
              leftMediaQueryChangeHandler = handler;
            }
          },
          removeEventListener: sinon.stub(),
          media: query,
          onchange: null,
          addListener: sinon.stub(),
          removeListener: sinon.stub(),
          dispatchEvent: sinon.stub()
        } as unknown as MediaQueryList;
      });

      const harness = await createFixture({ hasNavigation: true, leftBreakpoint: 1200 });

      if (leftMediaQueryChangeHandler) {
        leftMediaQueryChangeHandler({ matches: false } as MediaQueryListEvent);
        await harness.el.updateComplete;
      }

      expect(harness.el.matches(':state(drawer-closed)')).to.be.true;
    });

    it('should update right large screen state when right media query changes', async () => {
      const matchMediaStub = sinon.stub(window, 'matchMedia');
      let rightMediaQueryChangeHandler: ((event: MediaQueryListEvent) => void) | null = null;

      matchMediaStub.callsFake(query => {
        const isRightQuery = query.includes('1400');
        return {
          matches: true,
          addEventListener: (event: string, handler: (event: MediaQueryListEvent) => void) => {
            if (isRightQuery && event === 'change') {
              rightMediaQueryChangeHandler = handler;
            }
          },
          removeEventListener: sinon.stub(),
          media: query,
          onchange: null,
          addListener: sinon.stub(),
          removeListener: sinon.stub(),
          dispatchEvent: sinon.stub()
        } as unknown as MediaQueryList;
      });

      const harness = await createFixture({ hasBodyRightContent: true, rightBreakpoint: 1400 });

      harness.el.openRightDrawer();
      await harness.el.updateComplete;
      expect(harness.rightDrawerElement).to.exist;

      if (rightMediaQueryChangeHandler) {
        rightMediaQueryChangeHandler({ matches: false } as MediaQueryListEvent);
        await harness.el.updateComplete;
      }

      expect(harness.rightDialogElement).to.exist;
    });

    it('should cleanup left and right media queries on disconnect', async () => {
      const matchMediaStub = sinon.stub(window, 'matchMedia');
      const removeEventListenerStub = sinon.stub();

      matchMediaStub.returns({
        matches: true,
        addEventListener: sinon.stub(),
        removeEventListener: removeEventListenerStub,
        media: '',
        onchange: null,
        addListener: sinon.stub(),
        removeListener: sinon.stub(),
        dispatchEvent: sinon.stub()
      } as unknown as MediaQueryList);

      const harness = await createFixture({ leftBreakpoint: 800, rightBreakpoint: 1200 });

      harness.el.remove();

      expect(removeEventListenerStub.callCount).to.be.greaterThanOrEqual(3);
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
    return this.el.shadowRoot?.querySelector('forge-dialog.left-sheet-dialog') as IDialogComponent | null;
  }

  public get drawerElement(): IDrawerComponent | null {
    return this.el.shadowRoot?.querySelector('forge-drawer:not([direction="right"])') as IDrawerComponent | null;
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

  public get bodyRightContentSlot(): HTMLSlotElement {
    return this.el.shadowRoot!.querySelector('slot[name="body-right-content"]') as HTMLSlotElement;
  }

  public get rightDialogElement(): IDialogComponent | null {
    return this.el.shadowRoot?.querySelector('forge-dialog.right-sheet-dialog') as IDialogComponent | null;
  }

  public get rightDrawerElement(): IDrawerComponent | null {
    return this.el.shadowRoot?.querySelector('.right-drawer-container forge-drawer') as IDrawerComponent | null;
  }

  public get rightToggleButton(): HTMLElement | null {
    return document.querySelector('#right-toggle') as HTMLElement | null;
  }

  public simulateRightDialogClose(): void {
    const dialog = this.rightDialogElement;
    if (dialog) {
      dialog.dispatchEvent(new CustomEvent('forge-dialog-close', { bubbles: true, composed: true }));
    }
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
  leftBreakpoint?: number;
  rightBreakpoint?: number;
  useMiniDrawer?: boolean;
  miniHover?: boolean;
  hasNavigation?: boolean;
  navigationWithCloseAttribute?: boolean;
  hasBodyContent?: boolean;
  hasBodyRightContent?: boolean;
  hasRightToggleButton?: boolean;
  hasLogo?: boolean;
  hasAppBarStart?: boolean;
  hasAppBarCenter?: boolean;
  hasAppBarEnd?: boolean;
}

async function createFixture({
  appTitle = '',
  appTitleHref,
  breakpoint = 960,
  leftBreakpoint,
  rightBreakpoint,
  useMiniDrawer = false,
  miniHover = false,
  hasNavigation = false,
  navigationWithCloseAttribute = false,
  hasBodyContent = false,
  hasBodyRightContent = false,
  hasRightToggleButton = false,
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
      .leftBreakpoint=${leftBreakpoint}
      .rightBreakpoint=${rightBreakpoint}
      ?use-mini-drawer=${useMiniDrawer}
      ?mini-hover=${miniHover}>
      ${navigationContent} ${hasBodyContent ? html`<div slot="body">Body Content</div>` : ''}
      ${hasBodyRightContent ? html`<div slot="body-right-content">Body Right Content</div>` : ''}
      ${hasRightToggleButton ? html`<button id="right-toggle" data-forge-app-layout-right>Toggle Right</button>` : ''}
      ${hasLogo ? html`<div slot="app-bar-logo">Logo</div>` : ''}
      ${hasAppBarStart ? html`<div slot="app-bar-start">Start Content</div>` : ''}
      ${hasAppBarCenter ? html`<div slot="app-bar-center">Center Content</div>` : ''}
      ${hasAppBarEnd ? html`<div slot="app-bar-end">End Content</div>` : ''}
    </forge-app-layout>
  `);

  return new AppLayoutHarness(el);
}
