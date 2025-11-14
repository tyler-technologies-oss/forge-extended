import { LitElement, TemplateResult, html, unsafeCSS, PropertyValues } from 'lit';
import { when } from 'lit/directives/when.js';
import { customElement, property, state, queryAssignedNodes } from 'lit/decorators.js';
import {
  defineScaffoldComponent,
  defineModalDrawerComponent,
  defineDrawerComponent,
  toggleState
} from '@tylertech/forge';
import { definePageToolbarComponent } from './page-toolbar';

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
 * @property {number} breakpoint - The screen width breakpoint in pixels for responsive behavior (default: 768)
 * @property {string} pageTitle - The page title to display in the body header toolbar (optional)
 * @property {boolean} showSecondaryBackArrow - Controls whether the back arrow button is shown in the page toolbar (default: true)
 * @property {boolean} pageToolbarNoBorder - Controls whether the page toolbar border is hidden (default: false)
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
 * @slot right-navigation - Responsive right navigation content that renders in right slot (small screens) or body-right slot (large screens)
 * @slot modal-right-header - Places content in the modal right drawer header (small screens only)
 * @slot modal-right-body - Places content in the modal right drawer body (small screens only)
 * @slot modal-right-footer - Places content in the modal right drawer footer (small screens only)
 * @slot app-bar-logo - Places content in the app bar logo slot
 * @slot app-bar-start - Places content in the app bar start slot
 * @slot app-bar-center - Places content in the app bar center slot
 * @slot app-bar-end - Places content in the app bar end slot
 * @slot page-toolbar-center - Places content in the page toolbar center slot (when pageTitle is set)
 * @slot page-toolbar-end - Places content in the page toolbar end slot (when pageTitle is set)
 *
 * @state small - Screen width is below 768px, navigation appears in modal drawer
 * @state large - Screen width is 768px or above, navigation appears in body-left drawer
 */

@customElement(AppLayoutComponentTagName)
export class AppLayoutComponent extends LitElement {
  static {
    defineScaffoldComponent();
    defineModalDrawerComponent();
    defineDrawerComponent();
    definePageToolbarComponent();
  }

  public static override styles = unsafeCSS(styles);

  @queryAssignedNodes({ slot: 'navigation', flatten: true })
  private _navigationNodes!: Node[];

  @queryAssignedNodes({ slot: 'right-navigation', flatten: true })
  private _rightNavigationNodes!: Node[];

  @property({ type: String, attribute: 'app-title' })
  public appTitle = '';

  @property({ type: Number })
  public breakpoint = 768;

  @property({ type: String, attribute: 'page-title' })
  public pageTitle = '';

  @property({ type: Boolean, attribute: 'show-secondary-back-arrow' })
  public showSecondaryBackArrow = true;

  @property({ type: Boolean, attribute: 'page-toolbar-no-border' })
  public pageToolbarNoBorder = false;

  @state()
  private _leftDrawerOpen = false;

  @state()
  private _rightDrawerOpen = false;

  @state()
  private _isLargeScreen = false;

  private _mediaQuery: MediaQueryList | null = null;
  private _rightDrawerButton: HTMLElement | null = null;
  private _mutationObserver: MutationObserver | null = null;
  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();

    // Initialize drawer states immediately to prevent default open behavior
    this._leftDrawerOpen = false;
    this._rightDrawerOpen = false;
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this._setupMediaQuery();
    this._setupMutationObserver();
  }

  public override firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);
    // Re-update states after first render when slotted content is available
    this._updateStates();
    // Force drawer states to be applied immediately after render
    this._applyDrawerStates();
    // Setup right drawer button after content is rendered
    this._setupRightDrawerButton();
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
    this._cleanupMutationObserver();
    // Clean up right drawer button event listener
    if (this._rightDrawerButton) {
      this._rightDrawerButton.removeEventListener('click', this._toggleRightDrawer);
      this._rightDrawerButton = null;
    }
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

  private _setupMutationObserver(): void {
    this._mutationObserver = new MutationObserver(() => {
      this._setupRightDrawerButton();
    });

    this._mutationObserver.observe(this, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-right-drawer-button']
    });
  }

  private _cleanupMutationObserver(): void {
    if (this._mutationObserver) {
      this._mutationObserver.disconnect();
      this._mutationObserver = null;
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
      // Large screens: navigation drawers open by default if content is present
      // Use hasUpdated to check if we're in initial setup or after first render
      this._leftDrawerOpen = this.hasUpdated ? this._hasNavigationContent : false;
      this._rightDrawerOpen = this.hasUpdated ? this._hasRightNavigationContent : false;
    } else {
      // Small screens: modal drawers closed by default
      this._leftDrawerOpen = false;
      this._rightDrawerOpen = false;
    }

    // Apply drawer states immediately after updating them
    if (this.hasUpdated) {
      this._applyDrawerStates();
    }
  }

  private _toggleLeftDrawer = (): void => {
    this._leftDrawerOpen = !this._leftDrawerOpen;
    this._applyDrawerStates();
  };

  private _toggleRightDrawer = (): void => {
    this._rightDrawerOpen = !this._rightDrawerOpen;
    this._applyDrawerStates();
  };

  private _handleRightDrawerAfterClose = (): void => {
    this._rightDrawerOpen = false;
  };

  private _handleLeftDrawerAfterClose = (): void => {
    this._leftDrawerOpen = false;
  };

  private _handleSlotChange = (event: Event): void => {
    const slotName = (event.target as HTMLSlotElement).name;
    if (slotName === 'navigation' || slotName === 'right-navigation') {
      this.requestUpdate();
    }
    // Check for right drawer button whenever slot content changes
    this._setupRightDrawerButton();
  };

  private _applyDrawerStates(): void {
    // Directly set the open property on drawer elements to ensure they match our state
    const leftDrawer = this.shadowRoot?.querySelector('forge-drawer[slot="body-left"]') as
      | (HTMLElement & { open: boolean })
      | null;
    const rightDrawer = this.shadowRoot?.querySelector('forge-drawer[slot="body-right"]') as
      | (HTMLElement & { open: boolean })
      | null;

    if (leftDrawer && leftDrawer.open !== this._leftDrawerOpen) {
      leftDrawer.open = this._leftDrawerOpen;
    }

    if (rightDrawer && rightDrawer.open !== this._rightDrawerOpen) {
      rightDrawer.open = this._rightDrawerOpen;
    }
  }

  private _setupRightDrawerButton(): void {
    // Find button with data-right-drawer-button attribute
    const button = this.querySelector('[data-right-drawer-button]') as HTMLElement | null;

    if (button !== this._rightDrawerButton) {
      // Remove old event listener if different button
      if (this._rightDrawerButton) {
        this._rightDrawerButton.removeEventListener('click', this._toggleRightDrawer);
      }

      // Set new button and add event listener
      this._rightDrawerButton = button;
      if (this._rightDrawerButton) {
        this._rightDrawerButton.addEventListener('click', this._toggleRightDrawer);
      }
    }
  }

  private get _hasNavigationContent(): boolean {
    return this._navigationNodes.length > 0;
  }

  private get _hasRightNavigationContent(): boolean {
    return this._rightNavigationNodes.length > 0;
  }

  public override render(): TemplateResult {
    const navigationSlot = html`<slot name="navigation" @slotchange=${this._handleSlotChange}></slot>`;
    const rightNavigationSlot = html`<slot name="right-navigation" @slotchange=${this._handleSlotChange}></slot>`;

    return html`
      <forge-scaffold viewport>
        <forge-app-bar slot="header" title-text=${this.appTitle} theme-mode="scoped">
          <slot name="app-bar-logo" slot="logo"></slot>
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
                <forge-modal-drawer
                  slot="left"
                  ?open=${this._leftDrawerOpen}
                  @forge-drawer-after-close=${this._handleLeftDrawerAfterClose}>
                  <forge-scaffold>
                    <slot name="modal-header" slot="header"></slot>
                    <slot name="modal-body" slot="body">
                      <aside>${navigationSlot}</aside>
                    </slot>
                    <slot name="modal-footer" slot="footer"></slot>
                  </forge-scaffold>
                </forge-modal-drawer>
              `
            : navigationSlot
          : ''}
        ${when(
          this.pageTitle,
          () => html`
            <forge-page-toolbar
              slot="body-header"
              page-title=${this.pageTitle}
              ?show-back-arrow=${this.showSecondaryBackArrow}
              ?no-border=${this.pageToolbarNoBorder}>
              <slot name="page-toolbar-center" slot="center"></slot>
              ${when(
                this._hasRightNavigationContent && this._isLargeScreen,
                () => html`
                  ${when(
                    this._rightDrawerOpen,
                    () => html`
                      <forge-icon-button
                        density="small"
                        id="expand-drawer-btn"
                        aria-label="Expand right drawer"
                        slot="end"
                        @click=${this._toggleRightDrawer}>
                        <forge-icon name="show_panel_left" external></forge-icon>
                      </forge-icon-button>
                    `,
                    () => html`
                      <forge-icon-button
                        density="small"
                        id="collapse-drawer-btn"
                        aria-label="Collapse right drawer"
                        slot="end"
                        @click=${this._toggleRightDrawer}>
                        <forge-icon name="show_panel_right" external></forge-icon>
                      </forge-icon-button>
                    `
                  )}
                `
              )}
              <slot name="page-toolbar-end" slot="end"></slot>
              <slot name="page-toolbar-after-end" slot="after-end"></slot>
            </forge-page-toolbar>
          `
        )}
        <slot name="body-header" slot="body-header"></slot>

        <!-- Large screens: Navigation in body-left slot -->
        ${this._isLargeScreen
          ? this._hasNavigationContent
            ? html`<forge-drawer
                slot="body-left"
                ?open=${this._leftDrawerOpen}
                @forge-drawer-after-close=${this._handleLeftDrawerAfterClose}
                >${navigationSlot}</forge-drawer
              >`
            : navigationSlot
          : ''}

        <main slot="body">
          <slot></slot>
        </main>

        <slot name="body-footer" slot="body-footer"></slot>

        <!-- Small screens: Right navigation in right slot -->
        ${!this._isLargeScreen
          ? this._hasRightNavigationContent
            ? html`
                <forge-modal-drawer
                  slot="right"
                  ?open=${this._rightDrawerOpen}
                  @forge-drawer-after-close=${this._handleRightDrawerAfterClose}
                  direction="right">
                  <forge-scaffold>
                    <slot name="modal-right-header" slot="header"></slot>
                    <slot name="modal-right-body" slot="body">
                      <aside>${rightNavigationSlot}</aside>
                    </slot>
                    <slot name="modal-right-footer" slot="footer"></slot>
                  </forge-scaffold>
                </forge-modal-drawer>
              `
            : rightNavigationSlot
          : ''}

        <!-- Large screens: Right navigation in body-right slot -->
        ${this._isLargeScreen
          ? this._hasRightNavigationContent
            ? html`<forge-drawer
                slot="body-right"
                direction="right"
                ?open=${this._rightDrawerOpen}
                @forge-drawer-after-close=${this._handleRightDrawerAfterClose}
                >${rightNavigationSlot}</forge-drawer
              >`
            : rightNavigationSlot
          : ''}

        <slot name="footer" slot="footer"></slot>
      </forge-scaffold>
    `;
  }
}
