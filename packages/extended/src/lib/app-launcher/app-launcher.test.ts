import { expect } from '@esm-bundle/chai';
import { fixture, html, nextFrame } from '@open-wc/testing';
import { AppLauncherComponent, AppLauncherOption, AppLauncherCustomLink, AppView } from './app-launcher';
import { PopoverComponent, DialogComponent } from '@tylertech/forge';
import sinon from 'sinon';

import './app-launcher';

describe('AppLauncher', () => {
  describe('Basic instantiation', () => {
    it('should contain shadow root', async () => {
      const el = await fixture<AppLauncherComponent>(html`<forge-app-launcher></forge-app-launcher>`);

      expect(el.shadowRoot).to.be.ok;
    });

    it('should have default property values', async () => {
      const el = await fixture<AppLauncherComponent>(html`<forge-app-launcher></forge-app-launcher>`);

      expect(el.open).to.be.false;
      expect(el.appView).to.equal('all'); // Defaults to 'all' when no related apps
      expect(el.relatedApps).to.deep.equal([]);
      expect(el.customLinks).to.deep.equal([]);
      expect(el.allApps).to.deep.equal([]);
      expect(el.breakpoint).to.equal(768);
    });
  });

  describe('Boolean properties', () => {
    it('should update open property', async () => {
      const harness = await createFixture();

      expect(harness.el.open).to.be.false;

      harness.el.open = true;
      await nextFrame();

      expect(harness.el.open).to.be.true;
    });
  });

  describe('String/Enum properties', () => {
    it('should update appView property', async () => {
      const harness = await createFixture();

      expect(harness.el.appView).to.equal('related');

      harness.el.appView = 'all';
      await nextFrame();

      expect(harness.el.appView).to.equal('all');
    });

    it('should default to all view when no related apps provided', async () => {
      const harness = await createFixture({ relatedApps: [] });

      expect(harness.el.appView).to.equal('all');
    });

    it('should show search field when in all view', async () => {
      const harness = await createFixture({
        appView: 'all',
        relatedApps: [] // Ensure it stays in all view
      });

      expect(harness.searchField).to.exist;
    });

    it('should hide search field when in related view', async () => {
      const harness = await createFixture({
        appView: 'related',
        relatedApps: [{ label: 'Test App', iconName: 'test', uri: 'http://test.com' }]
      });
      await nextFrame();

      expect(harness.searchField).to.not.exist;
    });
  });

  describe('Array properties', () => {
    it('should accept relatedApps array', async () => {
      const relatedApps: AppLauncherOption[] = [{ label: 'Test App', iconName: 'test', uri: 'http://test.com' }];
      const harness = await createFixture({ relatedApps });

      expect(harness.el.relatedApps).to.deep.equal(relatedApps);
      expect(harness.el.relatedApps.length).to.equal(1);
    });

    it('should accept allApps array', async () => {
      const allApps: AppLauncherOption[] = [
        { label: 'App 1', iconName: 'app1', uri: 'http://app1.com' },
        { label: 'App 2', iconName: 'app2', uri: 'http://app2.com' }
      ];
      const harness = await createFixture({ allApps });

      expect(harness.el.allApps).to.deep.equal(allApps);
      expect(harness.el.allApps.length).to.equal(2);
    });

    it('should accept customLinks array', async () => {
      const customLinks: AppLauncherCustomLink[] = [{ label: 'Custom Link', uri: 'http://custom.com' }];
      const harness = await createFixture({ customLinks });

      expect(harness.el.customLinks).to.deep.equal(customLinks);
      expect(harness.el.customLinks.length).to.equal(1);
    });
  });

  describe('Number properties', () => {
    it('should update breakpoint property', async () => {
      const harness = await createFixture();

      expect(harness.el.breakpoint).to.equal(768);

      harness.el.breakpoint = 1024;
      await nextFrame();

      expect(harness.el.breakpoint).to.equal(1024);
    });

    it('should update media query when breakpoint changes', async () => {
      const harness = await createFixture();

      harness.el.breakpoint = 500;
      await nextFrame();

      expect(harness.el.breakpoint).to.equal(500);
    });
  });

  describe('Launcher aria-label property', () => {
    it('should set the aria-label of the launcher button to the launcherAriaLabel property', async () => {
      const harness = await createFixture();

      harness.el.launcherAriaLabel = 'Launch applications';
      await nextFrame();

      expect(harness.appLauncherTrigger.ariaLabel).to.equal('Launch applications');
    });

    it('should set the aria-label of the launcher button via the launcher-aria-label attribute', async () => {
      const harness = await createFixture();

      harness.el.setAttribute('launcher-aria-label', 'Open application menu');
      await nextFrame();

      expect(harness.appLauncherTrigger.ariaLabel).to.equal('Open application menu');
    });

    it('should have default aria-label value', async () => {
      const harness = await createFixture();

      expect(harness.el.launcherAriaLabel).to.equal('Open app launcher');
      expect(harness.appLauncherTrigger.ariaLabel).to.equal('Open app launcher');
    });
  });

  describe('Back button aria-label property', () => {
    it('should set the aria-label of the back button to the backAriaLabel property', async () => {
      const harness = await createFixture({
        appView: 'all',
        relatedApps: [{ label: 'Test App', iconName: 'test', uri: 'http://test.com' }] // Ensure back button shows
      });

      harness.el.backAriaLabel = 'Return to previous view';
      await nextFrame();

      const backButton = harness.backButton;
      expect(backButton).to.exist;
      expect(backButton!.ariaLabel).to.equal('Return to previous view');
    });

    it('should set the aria-label of the back button via the back-aria-label attribute', async () => {
      const harness = await createFixture({
        appView: 'all',
        relatedApps: [{ label: 'Test App', iconName: 'test', uri: 'http://test.com' }] // Ensure back button shows
      });

      harness.el.setAttribute('back-aria-label', 'Navigate back');
      await nextFrame();

      const backButton = harness.backButton;
      expect(backButton).to.exist;
      expect(backButton!.ariaLabel).to.equal('Navigate back');
    });

    it('should have default back button aria-label value', async () => {
      const harness = await createFixture({
        appView: 'all',
        relatedApps: [{ label: 'Test App', iconName: 'test', uri: 'http://test.com' }] // Ensure back button shows
      });

      expect(harness.el.backAriaLabel).to.equal('Go back');

      const backButton = harness.backButton;
      expect(backButton).to.exist;
      expect(backButton!.ariaLabel).to.equal('Go back');
    });
  });

  describe('Close button aria-label property', () => {
    it('should set the aria-label of the close button to the closeAriaLabel property', async () => {
      const harness = await createFixture({ open: true });

      harness.el.closeAriaLabel = 'Dismiss app launcher';
      await nextFrame();

      const closeButton = harness.closeButton;
      expect(closeButton).to.exist;
      expect(closeButton!.ariaLabel).to.equal('Dismiss app launcher');
    });

    it('should set the aria-label of the close button via the close-aria-label attribute', async () => {
      const harness = await createFixture({ open: true });

      harness.el.setAttribute('close-aria-label', 'Exit application menu');
      await nextFrame();

      const closeButton = harness.closeButton;
      expect(closeButton).to.exist;
      expect(closeButton!.ariaLabel).to.equal('Exit application menu');
    });

    it('should have default close button aria-label value', async () => {
      const harness = await createFixture({ open: true });

      expect(harness.el.closeAriaLabel).to.equal('Close app launcher');

      const closeButton = harness.closeButton;
      expect(closeButton).to.exist;
      expect(closeButton!.ariaLabel).to.equal('Close app launcher');
    });
  });

  describe('State management', () => {
    it('should reset state when close button is clicked', async () => {
      const harness = await createFixture({
        appView: 'all',
        open: true,
        relatedApps: [] // Ensure we stay in all view
      });

      // Set up initial state that will be reset
      harness.el.appView = 'all';
      harness.el.open = true;
      await nextFrame();

      // Simulate typing in search field to set filter text
      const searchField = harness.searchField;
      if (searchField) {
        searchField.value = 'test search';
        searchField.dispatchEvent(new Event('input', { bubbles: true }));
      }
      await nextFrame();

      // Directly click the close button using DOM click
      const closeButton = harness.closeButton;
      if (closeButton) {
        closeButton.click();
      }
      await nextFrame();

      // Verify resetState behavior
      expect(harness.el.appView).to.equal('related');
      expect(harness.el.open).to.be.false;

      // Check that search field is not visible in related view (indicates filter was cleared)
      expect(harness.searchField).to.not.exist;
    });

    it('should reset state to initial values', async () => {
      const harness = await createFixture();

      // Change state from defaults
      harness.el.appView = 'all';
      harness.el.open = true;
      await nextFrame();

      // Verify state is changed
      expect(harness.el.appView).to.equal('all');
      expect(harness.el.open).to.be.true;

      // Trigger reset by clicking close button
      const closeButton = harness.closeButton;
      if (closeButton) {
        closeButton.click();
      }
      await nextFrame();

      // Verify reset to initial state
      expect(harness.el.appView).to.equal('related');
      expect(harness.el.open).to.be.false;
    });
  });

  describe('Popover events', () => {
    it('should handle forge-popover-toggle event and reset state when closed', async () => {
      // Mock matchMedia to ensure large screen (popover mode)
      const originalMatchMedia = window.matchMedia;
      window.matchMedia = (query: string) =>
        ({
          matches: false, // Large screen - media query doesn't match
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => true
        }) as MediaQueryList;

      const harness = await createFixture({
        appView: 'all',
        open: true,
        relatedApps: [] // Stay in all view
      });

      // Set up initial state that will be reset
      harness.el.appView = 'all';
      harness.el.open = true;

      // Simulate typing in search field to set filter text
      await harness.typeInSearchField('test search');
      await nextFrame();

      // Verify initial state
      expect(harness.el.appView).to.equal('all');
      expect(harness.el.open).to.be.true;
      expect(harness.searchField).to.exist;

      // Get the popover element
      const popover = harness.popover;
      expect(popover).to.exist;

      // Create and dispatch the forge-popover-toggle event with 'closed' state
      const toggleEvent = new CustomEvent('forge-popover-toggle', {
        detail: { newState: 'closed' },
        bubbles: true
      });

      popover!.dispatchEvent(toggleEvent);
      await nextFrame();

      // Verify resetState was called by checking the state changes
      expect(harness.el.appView).to.equal('related');
      expect(harness.el.open).to.be.false;

      // Search field should not be visible in related view (indicates filter was cleared)
      expect(harness.searchField).to.not.exist;

      // Restore original matchMedia
      window.matchMedia = originalMatchMedia;
    });

    it('should not reset state when popover toggle event has non-closed state', async () => {
      // Mock matchMedia to ensure large screen (popover mode)
      const originalMatchMedia = window.matchMedia;
      window.matchMedia = (query: string) =>
        ({
          matches: false, // Large screen - media query doesn't match
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => true
        }) as MediaQueryList;

      const harness = await createFixture({
        appView: 'all',
        open: true,
        relatedApps: []
      });

      // Set up initial state
      harness.el.appView = 'all';
      harness.el.open = true;
      await nextFrame();

      // Verify initial state
      expect(harness.el.appView).to.equal('all');
      expect(harness.el.open).to.be.true;

      const popover = harness.popover;
      expect(popover).to.exist;

      // Create and dispatch the forge-popover-toggle event with 'opened' state
      const toggleEvent = new CustomEvent('forge-popover-toggle', {
        detail: { newState: 'opened' },
        bubbles: true
      });

      popover!.dispatchEvent(toggleEvent);
      await nextFrame();

      // State should remain unchanged
      expect(harness.el.appView).to.equal('all');
      expect(harness.el.open).to.be.true;

      // Restore original matchMedia
      window.matchMedia = originalMatchMedia;
    });

    it('should only render popover when smallScreen is false', async () => {
      // Mock matchMedia to ensure large screen (popover mode)
      const originalMatchMedia = window.matchMedia;
      window.matchMedia = (query: string) =>
        ({
          matches: false, // Large screen - media query doesn't match
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => true
        }) as MediaQueryList;

      const harness = await createFixture();

      expect(harness.popover).to.exist;
      expect(harness.dialog).to.not.exist;

      // Restore original matchMedia
      window.matchMedia = originalMatchMedia;
    });
  });

  describe('Dialog events', () => {
    it('should handle forge-dialog-close event and reset state', async () => {
      // Mock matchMedia to ensure small screen (dialog mode)
      const originalMatchMedia = window.matchMedia;
      window.matchMedia = (query: string) =>
        ({
          matches: true, // Small screen - media query matches
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => true
        }) as MediaQueryList;

      const harness = await createFixture({
        appView: 'all',
        open: true,
        relatedApps: [] // Stay in all view
      });

      // Set up initial state that will be reset
      harness.el.appView = 'all';
      harness.el.open = true;

      // Simulate typing in search field to set filter text
      await harness.typeInSearchField('test search');
      await nextFrame();

      // Verify initial state
      expect(harness.el.appView).to.equal('all');
      expect(harness.el.open).to.be.true;
      expect(harness.searchField).to.exist;

      // Get the dialog element
      const dialog = harness.dialog;
      expect(dialog).to.exist;

      // Create and dispatch the forge-dialog-close event
      const closeEvent = new CustomEvent('forge-dialog-close', {
        bubbles: true
      });

      dialog!.dispatchEvent(closeEvent);
      await nextFrame();

      // Verify resetState was called by checking the state changes
      expect(harness.el.appView).to.equal('related');
      expect(harness.el.open).to.be.false;

      // Search field should not be visible in related view (indicates filter was cleared)
      expect(harness.searchField).to.not.exist;

      // Restore original matchMedia
      window.matchMedia = originalMatchMedia;
    });

    it('should only render dialog when smallScreen is true', async () => {
      // Mock matchMedia to ensure small screen (dialog mode)
      const originalMatchMedia = window.matchMedia;
      window.matchMedia = (query: string) =>
        ({
          matches: true, // Small screen - media query matches
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => true
        }) as MediaQueryList;

      const harness = await createFixture();

      expect(harness.dialog).to.exist;
      expect(harness.popover).to.not.exist;

      // Restore original matchMedia
      window.matchMedia = originalMatchMedia;
    });

    it('should reset state consistently between dialog and popover close events', async () => {
      const originalMatchMedia = window.matchMedia;

      // Test dialog close - mock small screen
      window.matchMedia = (query: string) =>
        ({
          matches: true, // Small screen - media query matches
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => true
        }) as MediaQueryList;

      const dialogHarness = await createFixture({
        appView: 'all',
        open: true,
        relatedApps: []
      });

      // Set up state for dialog
      dialogHarness.el.appView = 'all';
      dialogHarness.el.open = true;
      await nextFrame();

      // Verify we're in dialog mode
      expect(dialogHarness.dialog).to.exist;

      // Dispatch dialog close event
      const dialogCloseEvent = new CustomEvent('forge-dialog-close', { bubbles: true });
      dialogHarness.dialog!.dispatchEvent(dialogCloseEvent);
      await nextFrame();

      // Verify dialog reset
      expect(dialogHarness.el.appView).to.equal('related');
      expect(dialogHarness.el.open).to.be.false;

      // Test popover close - mock large screen
      window.matchMedia = (query: string) =>
        ({
          matches: false, // Large screen - media query doesn't match
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => true
        }) as MediaQueryList;

      const popoverHarness = await createFixture({
        appView: 'all',
        open: true,
        relatedApps: []
      });

      // Set up state for popover
      popoverHarness.el.appView = 'all';
      popoverHarness.el.open = true;
      await nextFrame();

      // Verify we're in popover mode
      expect(popoverHarness.popover).to.exist;

      // Dispatch popover close event
      const popoverCloseEvent = new CustomEvent('forge-popover-toggle', {
        detail: { newState: 'closed' },
        bubbles: true
      });
      popoverHarness.popover!.dispatchEvent(popoverCloseEvent);
      await nextFrame();

      // Verify popover reset matches dialog reset
      expect(popoverHarness.el.appView).to.equal('related');
      expect(popoverHarness.el.open).to.be.false;

      // Restore original matchMedia
      window.matchMedia = originalMatchMedia;
    });
  });

  describe('Search functionality', () => {
    it('should filter apps based on search input', async () => {
      const allApps: AppLauncherOption[] = [
        { label: 'Payment System', iconName: 'payment', uri: 'http://payment.com' },
        { label: 'User Management', iconName: 'users', uri: 'http://users.com' },
        { label: 'Analytics Dashboard', iconName: 'analytics', uri: 'http://analytics.com' },
        { label: 'Settings Panel', iconName: 'settings', uri: 'http://settings.com' }
      ];

      const harness = await createFixture({
        appView: 'all',
        allApps
      });

      const searchField = harness.searchField;
      expect(searchField).to.exist;

      // Initially, all apps should be shown
      let appLinks = harness.appLinks;
      expect(appLinks?.length).to.equal(4);

      // Search for "payment" - should show only Payment System
      await harness.typeInSearchField('payment');
      await nextFrame();

      appLinks = harness.appLinks;
      expect(appLinks?.length).to.equal(1);
      expect(appLinks?.[0].textContent?.trim()).to.include('Payment System');

      // Search for "user" - should show only User Management
      await harness.typeInSearchField('user');
      await nextFrame();

      appLinks = harness.appLinks;
      expect(appLinks?.length).to.equal(1);
      expect(appLinks?.[0].textContent?.trim()).to.include('User Management');

      // Search for "system" - should show Payment System (partial match)
      await harness.typeInSearchField('system');
      await nextFrame();

      appLinks = harness.appLinks;
      expect(appLinks?.length).to.equal(1);
      expect(appLinks?.[0].textContent?.trim()).to.include('Payment System');
    });

    it('should be case insensitive when filtering', async () => {
      const allApps: AppLauncherOption[] = [
        { label: 'Payment System', iconName: 'payment', uri: 'http://payment.com' },
        { label: 'User Management', iconName: 'users', uri: 'http://users.com' }
      ];

      const harness = await createFixture({
        appView: 'all',
        allApps
      });

      // Test uppercase search
      await harness.typeInSearchField('PAYMENT');
      await nextFrame();

      let appLinks = harness.appLinks;
      expect(appLinks?.length).to.equal(1);
      expect(appLinks?.[0].textContent?.trim()).to.include('Payment System');

      // Test mixed case search
      await harness.typeInSearchField('UsEr');
      await nextFrame();

      appLinks = harness.appLinks;
      expect(appLinks?.length).to.equal(1);
      expect(appLinks?.[0].textContent?.trim()).to.include('User Management');
    });

    it('should show empty state when no apps match search', async () => {
      const allApps: AppLauncherOption[] = [
        { label: 'Payment System', iconName: 'payment', uri: 'http://payment.com' },
        { label: 'User Management', iconName: 'users', uri: 'http://users.com' }
      ];

      const harness = await createFixture({
        appView: 'all',
        allApps
      });

      // Search for something that doesn't match any app
      await harness.typeInSearchField('nonexistentapp');
      await nextFrame();

      // Should show empty state
      const emptyState = harness.emptyState;
      expect(emptyState).to.exist;
      expect(emptyState?.textContent?.trim()).to.include('No applications found');

      // App list should be empty
      const appLinks = harness.appLinks;
      expect(appLinks?.length).to.equal(0);
    });

    it('should show all apps when search is cleared', async () => {
      const allApps: AppLauncherOption[] = [
        { label: 'Payment System', iconName: 'payment', uri: 'http://payment.com' },
        { label: 'User Management', iconName: 'users', uri: 'http://users.com' }
      ];

      const harness = await createFixture({
        appView: 'all',
        allApps
      });

      // Search to filter results
      await harness.typeInSearchField('payment');
      await nextFrame();

      let appLinks = harness.appLinks;
      expect(appLinks?.length).to.equal(1);

      // Clear search
      await harness.typeInSearchField('');
      await nextFrame();

      // Should show all apps again
      appLinks = harness.appLinks;
      expect(appLinks?.length).to.equal(2);
    });

    it('should not show empty state when search field is empty', async () => {
      const harness = await createFixture({
        appView: 'all',
        allApps: [] // No apps
      });

      // Empty state should not show when no search text is entered
      const emptyState = harness.emptyState;
      expect(emptyState).to.not.exist;
    });
  });

  describe('Slot change handling', () => {
    it('should handle slotchange events for monitored slots and trigger update', async () => {
      const harness = await createFixture({
        appView: 'related' // Ensure related apps view to render related-apps-title slot
      });

      // Spy on requestUpdate to verify it gets called
      const requestUpdateSpy = sinon.spy(harness.el, 'requestUpdate');

      // Get the related-apps-title slot which should be rendered
      const relatedAppsSlot = harness.el.shadowRoot!.querySelector(
        'slot[name="related-apps-title"]'
      ) as HTMLSlotElement;
      expect(relatedAppsSlot).to.exist;

      // Create and dispatch a slotchange event
      const slotChangeEvent = new Event('slotchange', { bubbles: true });
      Object.defineProperty(slotChangeEvent, 'target', {
        value: relatedAppsSlot,
        enumerable: true
      });

      relatedAppsSlot.dispatchEvent(slotChangeEvent);
      await nextFrame();

      // Verify requestUpdate was called
      expect(requestUpdateSpy).to.have.been.called;

      requestUpdateSpy.restore();
    });

    it('should handle slotchange events for view-all-apps-button-text slot', async () => {
      const harness = await createFixture({
        appView: 'related' // This will show the "View all apps" button
      });

      // Spy on requestUpdate
      const requestUpdateSpy = sinon.spy(harness.el, 'requestUpdate');

      // Get the view-all-apps-button-text slot
      const buttonTextSlot = harness.el.shadowRoot!.querySelector(
        'slot[name="view-all-apps-button-text"]'
      ) as HTMLSlotElement;
      expect(buttonTextSlot).to.exist;

      // Create and dispatch a slotchange event
      const slotChangeEvent = new Event('slotchange', { bubbles: true });
      Object.defineProperty(slotChangeEvent, 'target', {
        value: buttonTextSlot,
        enumerable: true
      });

      buttonTextSlot.dispatchEvent(slotChangeEvent);
      await nextFrame();

      // Verify requestUpdate was called
      expect(requestUpdateSpy).to.have.been.called;

      requestUpdateSpy.restore();
    });

    it('should handle slotchange events for all-apps-title slot', async () => {
      const harness = await createFixture({
        appView: 'all', // This will show the all apps title
        relatedApps: [] // Ensure we stay in all view
      });

      // Spy on requestUpdate
      const requestUpdateSpy = sinon.spy(harness.el, 'requestUpdate');

      // Get the all-apps-title slot
      const allAppsSlot = harness.el.shadowRoot!.querySelector('slot[name="all-apps-title"]') as HTMLSlotElement;
      expect(allAppsSlot).to.exist;

      // Create and dispatch a slotchange event
      const slotChangeEvent = new Event('slotchange', { bubbles: true });
      Object.defineProperty(slotChangeEvent, 'target', {
        value: allAppsSlot,
        enumerable: true
      });

      allAppsSlot.dispatchEvent(slotChangeEvent);
      await nextFrame();

      // Verify requestUpdate was called
      expect(requestUpdateSpy).to.have.been.called;

      requestUpdateSpy.restore();
    });

    it('should not trigger update for non-monitored slot changes', async () => {
      const harness = await createFixture();

      // Spy on requestUpdate
      const requestUpdateSpy = sinon.spy(harness.el, 'requestUpdate');

      // Create a fake slot element with a non-monitored name
      const fakeSlot = document.createElement('slot');
      fakeSlot.setAttribute('name', 'non-monitored-slot');

      // Create and dispatch a slotchange event
      const slotChangeEvent = new Event('slotchange', { bubbles: true });
      Object.defineProperty(slotChangeEvent, 'target', {
        value: fakeSlot,
        enumerable: true
      });

      // Dispatch the event on the component itself to trigger the handler
      harness.el.shadowRoot!.dispatchEvent(slotChangeEvent);
      await nextFrame();

      // Verify requestUpdate was NOT called
      expect(requestUpdateSpy).to.not.have.been.called;

      requestUpdateSpy.restore();
    });

    it('should handle slotchange when all-apps-title content changes', async () => {
      const harness = await createFixture({
        appView: 'all',
        relatedApps: [] // Ensure we stay in all view
      });

      // Spy on requestUpdate
      const requestUpdateSpy = sinon.spy(harness.el, 'requestUpdate');

      // Add initial content to the all-apps-title slot
      const titleElement = document.createElement('span');
      titleElement.textContent = 'Initial Title';
      titleElement.slot = 'all-apps-title';
      harness.el.appendChild(titleElement);
      await nextFrame();

      // Clear the spy to focus on the change we're about to make
      requestUpdateSpy.resetHistory();

      // Change the slotted content
      titleElement.textContent = 'Updated Title';

      // Manually trigger slotchange to simulate what happens when slot content changes
      const allAppsSlot = harness.el.shadowRoot!.querySelector('slot[name="all-apps-title"]') as HTMLSlotElement;
      if (allAppsSlot) {
        const slotChangeEvent = new Event('slotchange', { bubbles: true });
        allAppsSlot.dispatchEvent(slotChangeEvent);
      }
      await nextFrame();

      // Verify requestUpdate was called due to slot change
      expect(requestUpdateSpy).to.have.been.called;

      requestUpdateSpy.restore();
    });
  });

  describe('View All Apps button functionality', () => {
    it('should switch to all apps view when View All Apps button is clicked', async () => {
      const harness = await createFixture({
        appView: 'related', // Start in related view
        relatedApps: [{ label: 'Test App', iconName: 'test', uri: 'http://test.com' }], // Ensure we have related apps
        allApps: [
          { label: 'All App 1', iconName: 'app1', uri: 'http://app1.com' },
          { label: 'All App 2', iconName: 'app2', uri: 'http://app2.com' }
        ]
      });

      // Verify initial state is related view
      expect(harness.el.appView).to.equal('related');

      // Verify the View All Apps button is visible in related view
      const viewAllAppsButton = harness.viewAllAppsButton;
      expect(viewAllAppsButton).to.exist;

      // Verify search field is not visible in related view
      expect(harness.searchField).to.not.exist;

      // Click the View All Apps button
      viewAllAppsButton!.click();
      await nextFrame();

      // Verify the view switched to 'all'
      expect(harness.el.appView).to.equal('all');

      // Verify search field is now visible in all view
      expect(harness.searchField).to.exist;

      // Verify the View All Apps button is no longer visible
      expect(harness.viewAllAppsButton).to.not.exist;
    });

    it('should switch back to related apps view when back arrow button is clicked', async () => {
      const harness = await createFixture({
        appView: 'all', // Start in all view
        relatedApps: [{ label: 'Test App', iconName: 'test', uri: 'http://test.com' }], // Ensure we have related apps
        allApps: [
          { label: 'All App 1', iconName: 'app1', uri: 'http://app1.com' },
          { label: 'All App 2', iconName: 'app2', uri: 'http://app2.com' }
        ]
      });

      // Verify initial state is all view
      expect(harness.el.appView).to.equal('all');

      // Verify search field is visible in all view
      expect(harness.searchField).to.exist;

      // Verify the back button is visible in all view
      const backButton = harness.backButton;
      expect(backButton).to.exist;

      // Verify the View All Apps button is not visible in all view
      expect(harness.viewAllAppsButton).to.not.exist;

      // Click the back arrow button
      backButton!.click();
      await nextFrame();

      // Verify the view switched back to 'related'
      expect(harness.el.appView).to.equal('related');

      // Verify search field is no longer visible in related view
      expect(harness.searchField).to.not.exist;

      // Verify the View All Apps button is now visible again
      expect(harness.viewAllAppsButton).to.exist;

      // Verify the back button is no longer visible in related view
      expect(harness.backButton).to.not.exist;
    });

    it('should clear search field input when switching back to related apps view', async () => {
      const harness = await createFixture({
        appView: 'all', // Start in all view
        relatedApps: [{ label: 'Test App', iconName: 'test', uri: 'http://test.com' }], // Ensure we have related apps
        allApps: [
          { label: 'Payment System', iconName: 'payment', uri: 'http://payment.com' },
          { label: 'User Management', iconName: 'users', uri: 'http://users.com' }
        ]
      });

      // Verify we're in all view with search field visible
      expect(harness.el.appView).to.equal('all');
      expect(harness.searchField).to.exist;

      // Type something in the search field
      await harness.typeInSearchField('payment');
      await nextFrame();

      // Verify the search field has the typed value
      expect(harness.searchField!.value).to.equal('payment');

      // Verify filtering is working (should show only Payment System)
      let appLinks = harness.appLinks;
      expect(appLinks.length).to.equal(1);
      expect(appLinks[0].textContent?.trim()).to.include('Payment System');

      // Click the back arrow button to return to related view
      const backButton = harness.backButton;
      expect(backButton).to.exist;
      backButton!.click();
      await nextFrame();

      // Verify we're back in related view
      expect(harness.el.appView).to.equal('related');

      // Switch back to all view to check if search field was cleared
      const viewAllAppsButton = harness.viewAllAppsButton;
      expect(viewAllAppsButton).to.exist;
      viewAllAppsButton!.click();
      await nextFrame();

      // Verify we're back in all view
      expect(harness.el.appView).to.equal('all');
      expect(harness.searchField).to.exist;

      // Verify the search field input value has been cleared
      expect(harness.searchField!.value).to.equal('');

      // Verify all apps are shown again (no filtering)
      appLinks = harness.appLinks;
      expect(appLinks.length).to.equal(2);
    });
  });
});

class AppLauncherHarness {
  constructor(public el: AppLauncherComponent) {}

  public get appLauncherTrigger(): HTMLElement {
    return this.el.shadowRoot!.querySelector('#app-launcher-trigger') as HTMLElement;
  }

  public get popover(): PopoverComponent | null {
    return this.el.shadowRoot!.querySelector('#app-launcher-popover') as PopoverComponent;
  }

  public get dialog(): DialogComponent | null {
    return this.el.shadowRoot!.querySelector('forge-dialog') as DialogComponent;
  }

  public get searchField(): HTMLInputElement | null {
    return this.el.shadowRoot!.querySelector('forge-text-field input') as HTMLInputElement;
  }

  public get relatedAppsTitle(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('#related-apps-title-slot') as HTMLElement;
  }

  public get allAppsTitle(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('#all-apps-title-slot') as HTMLElement;
  }

  public get viewAllAppsButton(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('forge-button') as HTMLElement;
  }

  public get backButton(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('forge-icon-button[aria-label="Go back"]') as HTMLElement;
  }

  public get appList(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('forge-list') as HTMLElement;
  }

  public get closeButton(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('.close-button') as HTMLElement;
  }

  public get emptyState(): HTMLElement | null {
    return this.el.shadowRoot!.querySelector('.empty-state') as HTMLElement;
  }

  public get appLinks(): HTMLElement[] {
    return Array.from(this.el.shadowRoot!.querySelectorAll('forge-app-link')) as HTMLElement[];
  }

  public async typeInSearchField(text: string): Promise<void> {
    const searchField = this.searchField;
    if (searchField) {
      searchField.value = text;
      searchField.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}

interface AppLauncherFixtureConfig {
  open?: boolean;
  appView?: AppView;
  relatedApps?: AppLauncherOption[];
  customLinks?: AppLauncherCustomLink[];
  allApps?: AppLauncherOption[];
  breakpoint?: number;
}

async function createFixture({
  open = false,
  appView = 'related',
  relatedApps = [{ label: 'Test App', iconName: 'test', uri: 'http://test.com' }],
  customLinks = [],
  allApps = [
    { label: 'All App 1', iconName: 'app1', uri: 'http://app1.com' },
    { label: 'All App 2', iconName: 'app2', uri: 'http://app2.com' }
  ],
  breakpoint = 768
}: AppLauncherFixtureConfig = {}): Promise<AppLauncherHarness> {
  const el = await fixture<AppLauncherComponent>(html`
    <forge-app-launcher
      .open=${open}
      .appView=${appView}
      .relatedApps=${relatedApps}
      .customLinks=${customLinks}
      .allApps=${allApps}
      .breakpoint=${breakpoint}>
    </forge-app-launcher>
  `);

  return new AppLauncherHarness(el);
}
