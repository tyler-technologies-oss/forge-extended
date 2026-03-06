import { LitElement, TemplateResult, html, unsafeCSS, PropertyValues } from 'lit';
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
  defineMiniDrawerComponent
} from '@tylertech/forge';
import { tylIconArrowBack, tylIconClose } from '@tylertech/tyler-icons';

import styles from './app-layout.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-app-layout': AppLayoutComponent;
  }
}

export const AppLayoutComponentTagName: keyof HTMLElementTagNameMap = 'forge-app-layout';

/**
 * @tag forge-app-layout
 *
 * @property {string} appTitle - The title text to display in the app bar
 * @property {number} breakpoint - The screen width breakpoint in pixels for responsive behavior (default: 960)
 * @property {boolean} useMiniDrawer - Whether to use forge-mini-drawer instead of forge-drawer for large screens (default: true)
 * @property {boolean} miniHover - Whether the mini drawer should expand on hover (default: false)
 *
 * @slot default - The main content area
 * @slot header - Places content in the header
 * @slot footer - Places content in the footer
 * @slot left - Places content to the left of all content
 * @slot right - Places content to the right of all content
 * @slot body-header - Places content in the header of the body
 * @slot body-footer - Places content in the footer of the body
 * @slot body-left - Places content to the left of the body content
 * @slot body-right - Places content to the right of the body content
 * @slot navigation - Responsive navigation content that renders in left slot (small screens) or body-left slot (large screens)
 * @slot app-bar-logo - Places content in the app bar logo slot
 * @slot app-bar-start - Places content in the app bar start slot
 * @slot app-bar-center - Places content in the app bar center slot
 * @slot app-bar-end - Places content in the app bar end slot
 *
 * @cssproperty --forge-app-layout-drawer-width - Controls the width of the navigation drawer (default: 320px)
 *
 * @state small - Screen width is below 960px, navigation appears in modal drawer
 * @state large - Screen width is 960px or above, navigation appears in body-left drawer
 * @state drawer-open - The navigation drawer is currently open
 * @state drawer-closed - The navigation drawer is currently closed
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

    IconRegistry.define([tylIconArrowBack, tylIconClose]);
  }

  public static override styles = unsafeCSS(styles);

  @queryAssignedNodes({ slot: 'navigation', flatten: true })
  private _navigationNodes!: Node[];

  @property({ type: String, attribute: 'app-title' })
  public appTitle = '';

  @property({ type: Number })
  public breakpoint = 960;

  @property({ type: Boolean, attribute: 'use-mini-drawer' })
  public useMiniDrawer = false;

  @property({ type: Boolean, attribute: 'mini-hover' })
  public miniHover = false;

  @state()
  private _leftDrawerOpen = false;

  @state()
  private _isLargeScreen = false;

  private _mediaQuery: MediaQueryList | null = null;
  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();

    // Initialize drawer state immediately to prevent default open behavior
    this._leftDrawerOpen = false;
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this._setupMediaQuery();
  }

  public override firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);
    // Re-update states after first render when slotted content is available
    this._updateStates();
    // Force drawer states to be applied immediately after render
    this._applyDrawerStates();
  }

  public override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('breakpoint')) {
      this._cleanupMediaQuery();
      this._setupMediaQuery();
    }
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._cleanupMediaQuery();
  }

  private _setupMediaQuery(): void {
    this._mediaQuery = window.matchMedia(`(min-width: ${this.breakpoint}px)`);
    this._isLargeScreen = this._mediaQuery.matches;
    this._updateStates();
    this._mediaQuery.addEventListener('change', this._handleMediaQueryChange);
  }

  private _cleanupMediaQuery(): void {
    if (this._mediaQuery) {
      this._mediaQuery.removeEventListener('change', this._handleMediaQueryChange);
      this._mediaQuery = null;
    }
  }

  private _handleMediaQueryChange = (event: MediaQueryListEvent): void => {
    this._isLargeScreen = event.matches;
    this._updateStates();
  };

  private _updateStates(): void {
    toggleState(this.#internals, 'small', !this._isLargeScreen);
    toggleState(this.#internals, 'large', this._isLargeScreen);

    // Set drawer defaults based on breakpoint
    if (this._isLargeScreen) {
      // Large screens: navigation drawer always open if content is present
      this._leftDrawerOpen = true;
    } else {
      // Small screens: modal drawer closed by default
      this._leftDrawerOpen = false;
    }

    // Update drawer state
    toggleState(this.#internals, 'drawer-open', this._leftDrawerOpen);
    toggleState(this.#internals, 'drawer-closed', !this._leftDrawerOpen);

    // Apply drawer states immediately after updating them
    if (this.hasUpdated) {
      this._applyDrawerStates();
    }
  }

  private _toggleLeftDrawer = (): void => {
    // Only allow toggling on small screens
    if (this._isLargeScreen) {
      return;
    }

    this._leftDrawerOpen = !this._leftDrawerOpen;

    // Update drawer states
    toggleState(this.#internals, 'drawer-open', this._leftDrawerOpen);
    toggleState(this.#internals, 'drawer-closed', !this._leftDrawerOpen);

    this._applyDrawerStates();
  };

  private _handleLeftDrawerAfterClose = (): void => {
    this._leftDrawerOpen = false;

    // Update drawer states
    toggleState(this.#internals, 'drawer-open', false);
    toggleState(this.#internals, 'drawer-closed', true);
  };

  private _handleSlotChange = (event: Event): void => {
    const slotName = (event.target as HTMLSlotElement).name;
    if (slotName === 'navigation') {
      this.requestUpdate();
    }
  };

  private _applyDrawerStates(): void {
    // Directly set the open property on drawer elements to ensure they match our state
    const drawerSelector = this.useMiniDrawer ? 'forge-mini-drawer' : 'forge-drawer';
    const leftDrawer = this.shadowRoot?.querySelector(drawerSelector) as (HTMLElement & { open: boolean }) | null;

    if (leftDrawer && leftDrawer.open !== this._leftDrawerOpen) {
      leftDrawer.open = this._leftDrawerOpen;
    }
  }

  private get _hasNavigationContent(): boolean {
    return this._navigationNodes.length > 0;
  }

  public override render(): TemplateResult {
    const navigationSlot = html`<slot name="navigation" @slotchange=${this._handleSlotChange}></slot>`;

    return html`
      <forge-scaffold>
        <forge-app-bar slot="header" title-text=${this.appTitle} theme-mode="scoped">
          <slot name="app-bar-logo" slot="logo">
            <forge-icon name="tyler_talking_t_logo" external></forge-icon>
          </slot>
          <slot name="app-bar-start" slot="start"></slot>
          ${when(
            !this._isLargeScreen,
            () => html`
              <forge-app-bar-menu-button slot="start" @click=${this._toggleLeftDrawer}> </forge-app-bar-menu-button>
            `
          )}
          <slot name="app-bar-center" slot="center"></slot>
          <slot name="app-bar-end" slot="end"></slot>
        </forge-app-bar>

        <!-- Small screens: Navigation in left slot -->
        ${!this._isLargeScreen
          ? this._hasNavigationContent
            ? html`
                <forge-dialog
                  class="left-sheet-dialog"
                  fullscreen-threshold="0"
                  preset="left-sheet"
                  slot="left"
                  ?open=${this._leftDrawerOpen}
                  @forge-drawer-after-close=${this._handleLeftDrawerAfterClose}>
                  <div class="drawer-container">
                    <forge-toolbar no-border>
                      <forge-icon-button
                        autofocus
                        class="close-drawer-button"
                        slot="before-start"
                        aria-label="Close navigation drawer"
                        @click=${this._toggleLeftDrawer}>
                        <forge-icon name="close"></forge-icon>
                      </forge-icon-button>
                    </forge-toolbar>
                    <aside>${navigationSlot}</aside>
                  </div>
                </forge-dialog>
              `
            : navigationSlot
          : ''}
        <slot name="body-header" slot="body-header"></slot>

        <!-- Large screens: Navigation in body-left slot -->
        ${this._isLargeScreen
          ? this._hasNavigationContent
            ? html`
                <div class="drawer-container ${this.miniHover ? 'mini-hover' : ''}" slot="body-left">
                  ${this.useMiniDrawer
                    ? html`
                        <forge-mini-drawer
                          ?hover=${this.miniHover}
                          ?open=${this._leftDrawerOpen}
                          @forge-drawer-after-close=${this._handleLeftDrawerAfterClose}>
                          ${navigationSlot}
                        </forge-mini-drawer>
                      `
                    : html`
                        <forge-drawer
                          ?open=${this._leftDrawerOpen}
                          @forge-drawer-after-close=${this._handleLeftDrawerAfterClose}>
                          ${navigationSlot}
                        </forge-drawer>
                      `}
                </div>
              `
            : navigationSlot
          : ''}

        <div slot="body">
          <slot name="body"></slot>
        </div>

        <slot name="right" slot="right"></slot>
        <slot name="body-right" slot="body-right"></slot>
        <slot name="body-footer" slot="body-footer"></slot>

        <slot name="footer" slot="footer"></slot>
      </forge-scaffold>
    `;
  }
}
