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
  private _isLargeScreen = false;

  private _mediaQuery: MediaQueryList | null = null;
  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this._setupMediaQuery();
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
    this._leftDrawerOpen = false; // Close drawer on screen size change
  }

  private _toggleLeftDrawer = (): void => {
    this._leftDrawerOpen = !this._leftDrawerOpen;
  };

  private _handleSlotChange = (event: Event): void => {
    const slotName = (event.target as HTMLSlotElement).name;
    if (slotName === 'navigation') {
      this.requestUpdate();
    }
  };

  private get _hasNavigationContent(): boolean {
    return this._navigationNodes.length > 0;
  }

  public override render(): TemplateResult {
    const navigationSlot = html`<slot name="navigation" @slotchange=${this._handleSlotChange}></slot>`;

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
                <forge-modal-drawer slot="left" ?open=${this._leftDrawerOpen}>
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
              <slot name="page-toolbar-end" slot="end"></slot>
            </forge-page-toolbar>
          `
        )}
        <slot name="body-header" slot="body-header"></slot>

        <!-- Large screens: Navigation in body-left slot -->
        ${this._isLargeScreen
          ? this._hasNavigationContent
            ? html`<forge-drawer slot="body-left">${navigationSlot}</forge-drawer>`
            : navigationSlot
          : ''}

        <main slot="body">
          <slot></slot>
        </main>

        <slot name="body-footer" slot="body-footer"></slot>
        <slot name="footer" slot="footer"></slot>
      </forge-scaffold>
    `;
  }
}
