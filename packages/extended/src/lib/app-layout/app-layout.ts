import { LitElement, TemplateResult, html, unsafeCSS, PropertyValues, nothing } from 'lit';
import { when } from 'lit/directives/when.js';
import { customElement, property, state, queryAssignedNodes } from 'lit/decorators.js';
import {
  defineScaffoldComponent,
  defineDialogComponent,
  defineDrawerComponent,
  defineIconButtonComponent,
  defineIconComponent,
  IconRegistry,
  toggleState,
  defineMiniDrawerComponent,
  defineAppBarMenuButtonComponent
} from '@tylertech/forge';
import { tylIconArrowBack, tylIconClose, tylIconTylerTalkingTLogo } from '@tylertech/tyler-icons';

import { BreakpointHandler } from './breakpoint-handler';
import styles from './app-layout.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-app-layout': AppLayoutComponent;
  }

  interface HTMLElementEventMap {
    'forge-app-layout-breakpoint-change': CustomEvent<AppLayoutBreakpointChangeEventData>;
    'forge-app-layout-drawer-change': CustomEvent<AppLayoutDrawerChangeEventData>;
    'forge-app-layout-right-drawer-change': CustomEvent<AppLayoutDrawerChangeEventData>;
  }
}

export type AppLayoutBreakpoint = 'small' | 'large';

export interface AppLayoutBreakpointChangeEventData {
  breakpoint: AppLayoutBreakpoint;
}

export interface AppLayoutDrawerChangeEventData {
  open: boolean;
}

export const AppLayoutComponentTagName: keyof HTMLElementTagNameMap = 'forge-app-layout';
export const APP_LAYOUT_CLOSE_ATTRIBUTE = 'data-forge-app-layout-close';

/**
 * @tag forge-app-layout
 *
 * @summary A responsive application layout component that provides an app bar with a navigation drawer.
 * On small screens, the navigation appears in a modal dialog. On large screens, it appears in a side drawer.
 *
 * @description
 * The navigation drawer on small screens can be automatically closed when a user clicks on a navigation item
 * by adding the `data-forge-app-layout-close` attribute to any clickable element within the navigation slot.
 * Alternatively, the `closeDrawer()` method can be called programmatically.
 *
 * **Asymmetric Drawer Behavior:**
 * The left navigation drawer auto-opens on large screens because it serves as primary navigation that should
 * typically be visible on desktop. The right drawer remains closed by default on all screen sizes because it
 * contains contextual content that should be user-triggered (e.g., details panels, filters).
 *
 * @property {string} appTitle - The title text to display in the app bar
 * @property {string} [appTitleHref] - The URL that the app bar title links to
 * @property {number} breakpoint - The screen width breakpoint in pixels for responsive behavior (default: 960)
 * @property {number} [leftBreakpoint] - Optional separate breakpoint for the left navigation drawer. Falls back to breakpoint if not set.
 * @property {number} [rightBreakpoint] - Optional separate breakpoint for the right content drawer. Falls back to breakpoint if not set.
 * @property {boolean} useMiniDrawer - Whether to use forge-mini-drawer instead of forge-drawer for large screens (default: false)
 * @property {boolean} miniHover - Whether the mini drawer should expand on hover (default: false)
 * @property {boolean} isLargeScreen - Whether the current screen width is above the breakpoint (read-only)
 *
 * @method openLeftDrawer - Opens the left navigation drawer on small screens
 * @method closeLeftDrawer - Closes the left navigation drawer on small screens
 * @method toggleLeftDrawer - Toggles the left navigation drawer open/closed on small screens
 * @method closeDrawer - Deprecated alias for closeLeftDrawer()
 * @method openRightDrawer - Opens the right drawer
 * @method closeRightDrawer - Closes the right drawer
 * @method toggleRightDrawer - Toggles the right drawer open/closed
 *
 * @slot - Default slot. Content without a slot attribute is placed in the body area.
 * @slot body - Explicit body slot. Alternative to using the default slot.
 * @slot header - Places content in the header
 * @slot footer - Places content in the footer
 * @slot left - Places content to the left of all content
 * @slot right - Places content to the right of all content
 * @slot body-header - Places content in the header of the body
 * @slot body-footer - Places content in the footer of the body
 * @slot body-left - Places content to the left of the body content
 * @slot body-right - Places content to the right of the body content
 * @slot navigation - Responsive navigation content that renders in left slot (small screens) or body-left slot (large screens)
 * @slot body-right-content - Responsive content that renders in a right-sheet dialog (small screens) or body-right drawer (large screens)
 * @slot app-bar-logo - Places content in the app bar logo slot
 * @slot app-bar-start - Places content in the app bar start slot
 * @slot app-bar-center - Places content in the app bar center slot
 * @slot app-bar-end - Places content in the app bar end slot
 *
 * @cssproperty --forge-app-layout-drawer-width - Controls the width of the navigation drawer (default: 320px)
 * @cssproperty --forge-app-layout-dialog-width - Controls the width of the navigation dialog on small screens (default: 320px)
 * @cssproperty --forge-app-layout-mini-drawer-z-index - Controls the z-index of the mini drawer when using hover mode (default: 3)
 * @cssproperty --forge-app-layout-right-drawer-width - Controls the width of the right drawer (default: 320px)
 * @cssproperty --forge-app-layout-right-dialog-width - Controls the width of the right dialog on small screens (default: 320px)
 *
 * @state small - Screen width is below 960px, navigation appears in modal drawer
 * @state large - Screen width is 960px or above, navigation appears in body-left drawer
 * @state drawer-open - The navigation drawer is currently open
 * @state drawer-closed - The navigation drawer is currently closed
 * @state right-drawer-open - The right drawer is currently open
 * @state right-drawer-closed - The right drawer is currently closed
 *
 * @event {CustomEvent<AppLayoutBreakpointChangeEventData>} forge-app-layout-breakpoint-change - Fired when the screen size crosses the breakpoint threshold
 * @event {CustomEvent<AppLayoutDrawerChangeEventData>} forge-app-layout-drawer-change - Fired when the navigation drawer opens or closes
 * @event {CustomEvent<AppLayoutDrawerChangeEventData>} forge-app-layout-right-drawer-change - Fired when the right drawer opens or closes
 */

@customElement(AppLayoutComponentTagName)
export class AppLayoutComponent extends LitElement {
  static {
    defineScaffoldComponent();
    defineDialogComponent();
    defineDrawerComponent();
    defineMiniDrawerComponent();
    defineIconButtonComponent();
    defineIconComponent();
    defineAppBarMenuButtonComponent();

    IconRegistry.define([tylIconArrowBack, tylIconClose, tylIconTylerTalkingTLogo]);
  }

  public static override styles = unsafeCSS(styles);

  @queryAssignedNodes({ slot: 'navigation', flatten: true })
  private _navigationNodes!: Node[];

  @queryAssignedNodes({ slot: 'body-right-content', flatten: true })
  private _bodyRightContentNodes!: Node[];

  @property({ type: String, attribute: 'app-title' })
  public appTitle = '';

  @property({ type: String, attribute: 'app-title-href' })
  public appTitleHref = '';

  @property({ type: Number })
  public breakpoint = 960;

  @property({ type: Number, attribute: 'left-breakpoint' })
  public leftBreakpoint?: number;

  @property({ type: Number, attribute: 'right-breakpoint' })
  public rightBreakpoint?: number;

  @property({ type: Boolean, attribute: 'use-mini-drawer' })
  public useMiniDrawer = false;

  @property({ type: Boolean, attribute: 'mini-hover' })
  public miniHover = false;

  public get isLargeScreen(): boolean {
    return this._isLargeScreen;
  }

  /**
   * Opens the left navigation drawer. Only has effect on small screens where the drawer is modal.
   */
  public openLeftDrawer(): void {
    if (!this._isLeftLargeScreen) {
      this.#openLeftDrawer();
    }
  }

  /**
   * Closes the left navigation drawer. Only has effect on small screens where the drawer is modal.
   */
  public closeLeftDrawer(): void {
    if (!this._isLeftLargeScreen) {
      this.#closeLeftDrawer();
    }
  }

  /**
   * Closes the left navigation drawer. Only has effect on small screens where the drawer is modal.
   * @deprecated Use `closeLeftDrawer()` instead for consistency with other drawer methods.
   */
  public closeDrawer(): void {
    this.closeLeftDrawer();
  }

  /**
   * Toggles the left navigation drawer open/closed. Only has effect on small screens where the drawer is modal.
   */
  public toggleLeftDrawer(): void {
    if (!this._isLeftLargeScreen) {
      this.#toggleLeftDrawer();
    }
  }

  /**
   * Opens the right drawer.
   */
  public openRightDrawer(): void {
    this.#setRightDrawerOpen(true);
  }

  /**
   * Closes the right drawer.
   */
  public closeRightDrawer(): void {
    this.#setRightDrawerOpen(false);
  }

  /**
   * Toggles the right drawer open/closed.
   */
  public toggleRightDrawer(): void {
    this.#setRightDrawerOpen(!this._rightDrawerOpen);
  }

  // Main breakpoint state
  @state() private _isLargeScreen = false;

  // Left drawer state
  @state() private _leftDrawerOpen = false;
  @state() private _isLeftLargeScreen = false;

  // Right drawer state
  @state() private _rightDrawerOpen = false;
  @state() private _isRightLargeScreen = false;

  // Breakpoint handlers
  #mainBreakpointHandler: BreakpointHandler;
  #leftBreakpointHandler: BreakpointHandler | null = null;
  #rightBreakpointHandler: BreakpointHandler | null = null;

  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();

    // Initialize main breakpoint handler
    this.#mainBreakpointHandler = new BreakpointHandler(
      () => this.breakpoint,
      isLargeScreen => this.#handleMainBreakpointChange(isLargeScreen)
    );

    // Initialize drawer state immediately to prevent default open behavior
    this._leftDrawerOpen = false;
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#mainBreakpointHandler.setup();
    this.#setupLeftBreakpointHandler();
    this.#setupRightBreakpointHandler();
  }

  public override firstUpdated(changedProperties: PropertyValues<this>): void {
    super.firstUpdated(changedProperties);
    // Re-update states after first render when slotted content is available
    this.#updateMainStates();
    // Force drawer states to be applied immediately after render
    this.#applyDrawerStates();
  }

  public override updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);

    if (changedProperties.has('breakpoint')) {
      this.#mainBreakpointHandler.update();
    }

    if (changedProperties.has('leftBreakpoint')) {
      this.#cleanupLeftBreakpointHandler();
      this.#setupLeftBreakpointHandler();
    }

    if (changedProperties.has('rightBreakpoint')) {
      this.#cleanupRightBreakpointHandler();
      this.#setupRightBreakpointHandler();
    }
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#mainBreakpointHandler.cleanup();
    this.#cleanupLeftBreakpointHandler();
    this.#cleanupRightBreakpointHandler();
  }

  // --- Breakpoint Handler Setup/Cleanup ---

  #setupLeftBreakpointHandler(): void {
    if (this.leftBreakpoint !== undefined) {
      const leftBreakpoint = this.leftBreakpoint;
      this.#leftBreakpointHandler = new BreakpointHandler(
        () => leftBreakpoint,
        isLargeScreen => this.#handleLeftBreakpointChange(isLargeScreen)
      );
      this.#leftBreakpointHandler.setup();
    } else {
      // Sync with main breakpoint
      this._isLeftLargeScreen = this._isLargeScreen;
      this.#updateLeftDrawerState();
    }
  }

  #cleanupLeftBreakpointHandler(): void {
    if (this.#leftBreakpointHandler) {
      this.#leftBreakpointHandler.cleanup();
      this.#leftBreakpointHandler = null;
    }
  }

  #setupRightBreakpointHandler(): void {
    if (this.rightBreakpoint !== undefined) {
      const rightBreakpoint = this.rightBreakpoint;
      this.#rightBreakpointHandler = new BreakpointHandler(
        () => rightBreakpoint,
        isLargeScreen => this.#handleRightBreakpointChange(isLargeScreen)
      );
      this.#rightBreakpointHandler.setup();
    } else {
      // Sync with main breakpoint
      this._isRightLargeScreen = this._isLargeScreen;
    }
  }

  #cleanupRightBreakpointHandler(): void {
    if (this.#rightBreakpointHandler) {
      this.#rightBreakpointHandler.cleanup();
      this.#rightBreakpointHandler = null;
    }
  }

  // --- Breakpoint Change Handlers ---

  #handleMainBreakpointChange(isLargeScreen: boolean): void {
    this._isLargeScreen = isLargeScreen;
    this.#updateMainStates();
    this.#emitBreakpointChange(isLargeScreen ? 'large' : 'small');
  }

  #handleLeftBreakpointChange(isLargeScreen: boolean): void {
    this._isLeftLargeScreen = isLargeScreen;
    this.#updateLeftDrawerState();
  }

  #handleRightBreakpointChange(isLargeScreen: boolean): void {
    this._isRightLargeScreen = isLargeScreen;
  }

  // --- State Management ---

  #updateMainStates(): void {
    toggleState(this.#internals, 'small', !this._isLargeScreen);
    toggleState(this.#internals, 'large', this._isLargeScreen);

    // Sync left/right large screen states if they don't have their own breakpoints
    if (this.leftBreakpoint === undefined) {
      this._isLeftLargeScreen = this._isLargeScreen;
      this.#updateLeftDrawerState();
    }

    if (this.rightBreakpoint === undefined) {
      this._isRightLargeScreen = this._isLargeScreen;
    }

    // Update right drawer state
    toggleState(this.#internals, 'right-drawer-open', this._rightDrawerOpen);
    toggleState(this.#internals, 'right-drawer-closed', !this._rightDrawerOpen);

    // Apply drawer states immediately after updating them
    if (this.hasUpdated) {
      this.#applyDrawerStates();
    }
  }

  #updateLeftDrawerState(): void {
    // Left drawer auto-opens on large screens (primary navigation)
    this._leftDrawerOpen = this._isLeftLargeScreen;
    toggleState(this.#internals, 'drawer-open', this._leftDrawerOpen);
    toggleState(this.#internals, 'drawer-closed', !this._leftDrawerOpen);

    if (this.hasUpdated) {
      this.#applyDrawerStates();
    }
  }

  #applyDrawerStates(): void {
    // Directly set the open property on drawer elements to ensure they match our state
    const drawerSelector = this.useMiniDrawer ? 'forge-mini-drawer' : 'forge-drawer';
    const leftDrawer = this.shadowRoot?.querySelector(drawerSelector) as (HTMLElement & { open: boolean }) | null;

    if (leftDrawer && leftDrawer.open !== this._leftDrawerOpen) {
      leftDrawer.open = this._leftDrawerOpen;
    }
  }

  // --- Left Drawer Operations ---

  #openLeftDrawer(): void {
    if (this._leftDrawerOpen) {
      return;
    }
    this._leftDrawerOpen = true;
    toggleState(this.#internals, 'drawer-open', true);
    toggleState(this.#internals, 'drawer-closed', false);
    this.#emitDrawerChange(true);
  }

  #toggleLeftDrawer = (): void => {
    // Only allow toggling on small screens (based on left breakpoint)
    if (this._isLeftLargeScreen) {
      return;
    }

    this._leftDrawerOpen = !this._leftDrawerOpen;
    toggleState(this.#internals, 'drawer-open', this._leftDrawerOpen);
    toggleState(this.#internals, 'drawer-closed', !this._leftDrawerOpen);

    this.#applyDrawerStates();
    this.#emitDrawerChange(this._leftDrawerOpen);
  };

  #closeLeftDrawer(): void {
    if (!this._leftDrawerOpen) {
      return;
    }
    this._leftDrawerOpen = false;
    toggleState(this.#internals, 'drawer-open', false);
    toggleState(this.#internals, 'drawer-closed', true);
    this.#emitDrawerChange(false);
  }

  #handleLeftDrawerAfterClose = (): void => {
    this.#closeLeftDrawer();
  };

  // --- Right Drawer Operations ---

  #setRightDrawerOpen(open: boolean): void {
    if (this._rightDrawerOpen === open) {
      return;
    }
    this._rightDrawerOpen = open;
    toggleState(this.#internals, 'right-drawer-open', open);
    toggleState(this.#internals, 'right-drawer-closed', !open);
    this.#emitRightDrawerChange(open);
  }

  #handleRightDrawerClose = (): void => {
    this.#setRightDrawerOpen(false);
  };

  // --- Slot Handling ---

  #handleSlotChange = (event: Event): void => {
    const slotName = (event.target as HTMLSlotElement).name;
    if (['navigation', 'body-right-content'].includes(slotName)) {
      this.requestUpdate();
    }
  };

  #handleNavigationClick = (event: Event): void => {
    const path = event.composedPath();
    const hasCloseAttribute = path.some(el => el instanceof HTMLElement && el.hasAttribute(APP_LAYOUT_CLOSE_ATTRIBUTE));

    if (hasCloseAttribute) {
      this.closeLeftDrawer();
    }
  };

  // --- Event Emitters ---

  #emitBreakpointChange(breakpoint: AppLayoutBreakpoint): void {
    const event = new CustomEvent<AppLayoutBreakpointChangeEventData>('forge-app-layout-breakpoint-change', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { breakpoint }
    });
    this.dispatchEvent(event);
  }

  #emitDrawerChange(open: boolean): void {
    const event = new CustomEvent<AppLayoutDrawerChangeEventData>('forge-app-layout-drawer-change', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { open }
    });
    this.dispatchEvent(event);
  }

  #emitRightDrawerChange(open: boolean): void {
    const event = new CustomEvent<AppLayoutDrawerChangeEventData>('forge-app-layout-right-drawer-change', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { open }
    });
    this.dispatchEvent(event);
  }

  // --- Content Detection ---

  get #hasNavigationContent(): boolean {
    return this._navigationNodes.length > 0;
  }

  get #hasBodyRightContent(): boolean {
    return this._bodyRightContentNodes.length > 0;
  }

  // --- Drawer Templates ---

  get #navigationSlot(): TemplateResult {
    return html`<slot name="navigation" @slotchange=${this.#handleSlotChange}></slot>`;
  }

  get #bodyRightContentSlot(): TemplateResult {
    return html`<slot name="body-right-content" @slotchange=${this.#handleSlotChange}></slot>`;
  }

  get #leftDrawerSmallScreenTemplate(): TemplateResult | typeof nothing {
    if (this._isLeftLargeScreen) {
      return nothing;
    }

    if (!this.#hasNavigationContent) {
      return this.#navigationSlot;
    }

    return html`
      <forge-dialog
        class="left-sheet-dialog"
        fullscreen-threshold="0"
        preset="left-sheet"
        slot="left"
        ?open=${this._leftDrawerOpen}
        @forge-dialog-close=${this.#handleLeftDrawerAfterClose}>
        <div class="drawer-container">
          <forge-toolbar no-border>
            <forge-icon-button
              autofocus
              class="close-drawer-button"
              slot="before-start"
              aria-label="Close navigation drawer"
              @click=${this.#toggleLeftDrawer}>
              <forge-icon name="close"></forge-icon>
            </forge-icon-button>
          </forge-toolbar>
          <aside @click=${this.#handleNavigationClick}>${this.#navigationSlot}</aside>
        </div>
      </forge-dialog>
    `;
  }

  get #leftDrawerLargeScreenTemplate(): TemplateResult | typeof nothing {
    if (!this._isLeftLargeScreen) {
      return nothing;
    }

    if (!this.#hasNavigationContent) {
      return this.#navigationSlot;
    }

    return html`
      <div class="drawer-container ${this.miniHover ? 'mini-hover' : ''}" slot="body-left">
        ${this.useMiniDrawer
          ? html`
              <forge-mini-drawer
                ?hover=${this.miniHover}
                ?open=${this._leftDrawerOpen}
                @forge-drawer-after-close=${this.#handleLeftDrawerAfterClose}>
                ${this.#navigationSlot}
              </forge-mini-drawer>
            `
          : html`
              <forge-drawer ?open=${this._leftDrawerOpen} @forge-drawer-after-close=${this.#handleLeftDrawerAfterClose}>
                ${this.#navigationSlot}
              </forge-drawer>
            `}
      </div>
    `;
  }

  get #rightDrawerSmallScreenTemplate(): TemplateResult | typeof nothing {
    if (this._isRightLargeScreen) {
      return nothing;
    }

    if (!this.#hasBodyRightContent) {
      return this.#bodyRightContentSlot;
    }

    return html`
      <forge-dialog
        class="right-sheet-dialog"
        fullscreen-threshold="0"
        preset="right-sheet"
        slot="right"
        ?open=${this._rightDrawerOpen}
        @forge-dialog-close=${this.#handleRightDrawerClose}>
        <div class="drawer-container">
          <forge-toolbar no-border>
            <forge-icon-button
              autofocus
              class="close-drawer-button"
              slot="before-start"
              aria-label="Close right drawer"
              @click=${this.closeRightDrawer}>
              <forge-icon name="close"></forge-icon>
            </forge-icon-button>
          </forge-toolbar>
          <aside>${this.#bodyRightContentSlot}</aside>
        </div>
      </forge-dialog>
    `;
  }

  get #rightDrawerLargeScreenTemplate(): TemplateResult | typeof nothing {
    if (!this._isRightLargeScreen) {
      return nothing;
    }

    if (!this.#hasBodyRightContent) {
      return this.#bodyRightContentSlot;
    }

    return html`
      <div class="drawer-container right-drawer-container" slot="body-right">
        <forge-drawer
          direction="right"
          ?open=${this._rightDrawerOpen}
          @forge-drawer-after-close=${this.#handleRightDrawerClose}>
          ${this.#bodyRightContentSlot}
        </forge-drawer>
      </div>
    `;
  }

  // --- Render ---

  public override render(): TemplateResult {
    return html`
      <forge-scaffold>
        <forge-app-bar slot="header" .titleText=${this.appTitle} .href=${this.appTitleHref} theme-mode="scoped">
          <slot name="app-bar-logo" slot="logo">
            <forge-icon name="tyler_talking_t_logo"></forge-icon>
          </slot>
          <slot name="app-bar-start" slot="start"></slot>
          ${when(
            !this._isLeftLargeScreen,
            () =>
              html`<forge-app-bar-menu-button
                slot="start"
                @click=${this.#toggleLeftDrawer}></forge-app-bar-menu-button>`
          )}
          <slot name="app-bar-center" slot="center"></slot>
          <slot name="app-bar-end" slot="end"></slot>
        </forge-app-bar>

        <!-- Left drawer templates -->
        ${this.#leftDrawerSmallScreenTemplate} ${this.#leftDrawerLargeScreenTemplate}

        <slot name="body-header" slot="body-header"></slot>
        <slot name="body" slot="body"></slot>
        <slot slot="body"></slot>
        <slot name="right" slot="right"></slot>

        <!-- Right drawer templates -->
        ${this.#rightDrawerSmallScreenTemplate} ${this.#rightDrawerLargeScreenTemplate}

        <slot name="body-right" slot="body-right"></slot>
        <slot name="body-footer" slot="body-footer"></slot>

        <slot name="footer" slot="footer"></slot>
      </forge-scaffold>
    `;
  }
}
