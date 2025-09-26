import { LitElement, PropertyValues, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state, queryAsync, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { cache } from 'lit/directives/cache.js';
import { query } from 'lit/decorators/query.js';

import {
  defineAvatarComponent,
  defineButtonComponent,
  defineCardComponent,
  defineDialogComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineListComponent,
  definePopoverComponent,
  defineScaffoldComponent,
  defineSkeletonComponent,
  defineTextFieldComponent,
  defineToolbarComponent,
  IconRegistry,
  IPopoverToggleEventData,
  PopoverComponent,
  toggleState
} from '@tylertech/forge';
import {
  tylIconApps,
  tylIconOpenInNew,
  tylIconSearch,
  tylIconChevronRight,
  tylIconClose,
  tylIconArrowBack
} from '@tylertech/tyler-icons';

import styles from './app-launcher.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-app-launcher': AppLauncherComponent;
  }
}

export interface AppLauncherOption {
  label: string;
  uri: string;
  iconName: string;
  target?: string;
}

export interface AppLauncherCustomLink {
  label: string;
  uri: string;
}

export type AppView = 'related' | 'all' | 'loading';

export const AppLauncherComponentTagName: keyof HTMLElementTagNameMap = 'forge-app-launcher';

/**
 * @tag forge-app-launcher
 *
 * @slot related-apps-title - Title text for the related apps section
 * @slot all-apps-title - Title text for the all apps view
 * @slot view-all-apps-button-text - Text for the button that switches to all apps view
 * @slot custom-links-title - Title text for the custom links section
 * @slot app-launcher-link - Individual custom link items using forge-app-launcher-link
 *
 * @state small - The component is displayed in mobile/small screen mode (dialog)
 * @state large - The component is displayed in desktop/large screen mode (popover)
 *
 */
@customElement(AppLauncherComponentTagName)
export class AppLauncherComponent extends LitElement {
  static {
    defineAvatarComponent();
    defineButtonComponent();
    defineCardComponent();
    defineDialogComponent();
    defineIconButtonComponent();
    defineIconComponent();
    defineListComponent();
    definePopoverComponent();
    defineScaffoldComponent();
    defineTextFieldComponent();
    defineToolbarComponent();
    defineSkeletonComponent();

    IconRegistry.define([
      tylIconApps,
      tylIconOpenInNew,
      tylIconSearch,
      tylIconChevronRight,
      tylIconClose,
      tylIconArrowBack
    ]);
  }

  readonly #internals: ElementInternals;

  public static override styles = unsafeCSS(styles);

  /** Indicates whether the dialog or popover is open. */
  @property({ type: Boolean })
  public open = false;

  /** An array of related apps for the related apps view. */
  @property({ type: Array, attribute: false })
  public relatedApps: AppLauncherOption[] = [];

  /** An array of all available apps for the all apps view. */
  @property({ type: Array, attribute: false })
  public allApps: AppLauncherOption[] = [];

  /** ARIA label for the app launcher trigger button */
  @property({ type: String, attribute: 'launcher-aria-label' })
  public launcherAriaLabel = 'Open app launcher';

  /** ARIA label for the back button */
  @property({ type: String, attribute: 'back-aria-label' })
  public backAriaLabel = 'Go back';

  /** ARIA label for the close button */
  @property({ type: String, attribute: 'close-aria-label' })
  public closeAriaLabel = 'Close app launcher';

  /** Indicates whether the app launcher is in a loading state. */
  @property({ type: Boolean })
  public loading = false;

  /** The current view of the app launcher, either 'related', 'all', or 'loading'. */
  @state()
  private _appView: AppView = 'related';

  /** The previous view before entering loading state. */
  @state()
  private _previousView: Exclude<AppView, 'loading'> = 'related';

  @state()
  private _filterText = '';

  @state()
  private _smallScreen = false;

  @queryAsync('#search-field')
  private _searchField!: HTMLInputElement;

  @query('#app-launcher-popover')
  private _appLauncherPopover!: PopoverComponent;

  @queryAssignedNodes({ slot: 'app-launcher-link', flatten: true })
  private _slottedCustomLinkNodes!: Node[];

  #mediaQuery?: MediaQueryList;
  #breakpoint = 768;
  #numberOfSkeletons = 5;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  readonly #relatedAppsTitleSlot = html`<h2>
    <slot name="related-apps-title" id="related-apps-title-slot">Related apps</slot>
  </h2>`;

  readonly #allAppsTitleSlot = html`<slot name="all-apps-title" id="all-apps-title-slot">All apps</slot>`;

  readonly #viewAllAppsButtonSlot = html`<slot name="view-all-apps-button-text" id="view-all-apps-button-text-slot"
    >View all apps</slot
  >`;

  readonly #appLauncherLinksTitleSlot = html`<slot
    name="app-launcher-links-title"
    id="app-launcher-links-title-slot"></slot>`;

  readonly #appLauncherLinkSlot = html`<slot name="app-launcher-link" id="app-launcher-link-slot"></slot>`;

  readonly #emptyState = html`
    <div class="empty-state">
      <forge-icon name="search"></forge-icon>
      <p>No applications found</p>
    </div>
  `;

  public connectedCallback(): void {
    super.connectedCallback();
    if (!this.relatedApps?.length) {
      this._appView = 'all';
    }
    this.#setupMediaQuery();
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.#mediaQuery) {
      this.#mediaQuery.removeEventListener('change', this.#handleMediaChange);
    }
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('loading')) {
      if (this.loading) {
        // Store current view before switching to loading
        if (this._appView !== 'loading') {
          this._previousView = this._appView;
        }
        this._appView = 'loading';
      } else {
        // Restore previous view when loading completes
        this._appView = this._previousView;
      }
    }

    if (changedProperties.has('relatedApps') && !this.loading) {
      if (!this.relatedApps?.length) {
        this._appView = 'all';
        this._previousView = 'all';
      } else if (this._appView === 'all' && this.relatedApps?.length) {
        this._appView = 'related';
        this._previousView = 'related';
      }
    }
  }

  get #appLauncherIcon(): TemplateResult | typeof nothing {
    return html`<forge-icon-button
      theme="app-bar"
      aria-label=${this.launcherAriaLabel}
      id="app-launcher-trigger"
      @click=${this._smallScreen ? () => (this.open = !this.open) : null}>
      <forge-icon name="apps"></forge-icon>
    </forge-icon-button>`;
  }

  get #backButton(): TemplateResult | typeof nothing {
    const showBackButton = this._appView === 'all' && this.relatedApps?.length;
    return when(
      showBackButton,
      () => html`
        <forge-icon-button
          aria-label=${this.backAriaLabel}
          slot="before-start"
          @click=${() => this.#transitionToView('related')}>
          <forge-icon name="arrow_back"></forge-icon>
        </forge-icon-button>
      `,
      () => nothing
    );
  }

  get #header(): TemplateResult | typeof nothing {
    return html`
      <forge-toolbar class="header" no-border>
        <h1 slot="start">App Launcher</h1>
        ${this.#backButton}
        <forge-icon-button
          aria-label=${this.closeAriaLabel}
          class="close-button"
          slot="end"
          @click=${() => {
            this.#resetState();
          }}>
          <forge-icon name="close"></forge-icon>
        </forge-icon-button>
      </forge-toolbar>
    `;
  }

  get #relatedApps(): TemplateResult | typeof nothing {
    const showrelatedApps = this._appView === 'related';
    return when(
      showrelatedApps,
      () => html`
        ${this.#relatedAppsTitleSlot}
        <forge-list>${this.relatedApps?.map(app => html` ${this.#appListItem(app)} `)}</forge-list>
      `,
      () => nothing
    );
  }

  get #searchAllAppsField(): TemplateResult | typeof nothing {
    const showSearchInput = this._appView === 'all';
    return when(
      showSearchInput,
      () => html`
        <forge-text-field density=${this._smallScreen ? 'large' : 'small'}>
          <forge-icon name="search" slot="leading"></forge-icon>
          <input
            type="text"
            placeholder="Search by product or app"
            @input=${this.#onInputChange}
            id="search-field"
            autocomplete="off" />
        </forge-text-field>
      `,
      () => nothing
    );
  }

  get #allApps(): TemplateResult | typeof nothing {
    const showAllApps = this._appView === 'all';
    return when(
      showAllApps,
      () => html`
        ${when(
          !this.#filteredApps?.length && this._filterText,
          () => html`${this.#emptyState}`,
          () =>
            html` <h2>${this.#allAppsTitleSlot}</h2>
              <forge-list>${this.#filteredApps?.map(app => html` ${this.#appListItem(app)} `)}</forge-list>`
        )}
      `,
      () => nothing
    );
  }

  get #loading(): TemplateResult | typeof nothing {
    return when(
      this._appView === 'loading',
      () => html`
        <div class="loading-state">
          <forge-skeleton class="title-skeleton" aria-hidden="true"></forge-skeleton>
          ${Array.from(
            { length: this.#numberOfSkeletons },
            () => html`<forge-skeleton aria-hidden="true"></forge-skeleton>`
          )}
          <forge-skeleton class="button-skeleton" aria-hidden="true"></forge-skeleton>
          <span class="loading-text">Loading apps</span>
        </div>
      `,
      () => nothing
    );
  }

  get #viewAllAppsButton(): TemplateResult | typeof nothing {
    const showAllAppsButton = this._appView === 'related';
    return when(
      showAllAppsButton,
      () => html`
        <forge-button variant="raised" ?disabled=${this.loading} @click=${this.#switchToAllAppsView}>
          <span>${this.#viewAllAppsButtonSlot}</span>
          <forge-icon name="chevron_right"></forge-icon>
        </forge-button>
      `,
      () => nothing
    );
  }

  get #customLinks(): TemplateResult | typeof nothing {
    const showLinks = this._slottedCustomLinkNodes.length > 0;
    return when(
      showLinks,
      () => html`
        <forge-card class="custom-links-card">
          <div class="custom-links">
            <h2>${this.#appLauncherLinksTitleSlot}</h2>
            <forge-list>${this.#appLauncherLinkSlot}</forge-list>
          </div>
        </forge-card>
      `,
      () => this.#appLauncherLinkSlot
    );
  }

  get #searchContainer(): TemplateResult | typeof nothing {
    return when(
      this._appView === 'all',
      () => html`<div class="search-container">${this.#searchAllAppsField}</div>`,
      () => nothing
    );
  }

  get #appContent(): TemplateResult {
    return html`
      <div class="app-list-container v-stack">
        <div class="scroll-container v-stack">${this.#relatedApps} ${this.#allApps} ${this.#loading}</div>
      </div>
    `;
  }

  get #viewAllAppsButtonContainer(): TemplateResult | typeof nothing {
    return when(
      this._appView === 'related',
      () => html`<div class="view-all-apps-button">${this.#viewAllAppsButton}</div>`,
      () => nothing
    );
  }

  get #mainCard(): TemplateResult {
    return html`
      <forge-card no-padding>
        ${this.#searchContainer} ${this.#appContent} ${this.#viewAllAppsButtonContainer}
      </forge-card>
    `;
  }

  get #containerContent(): TemplateResult {
    const innerContainerClass =
      this._appView === 'related' && this._smallScreen ? 'inner-container related-view' : 'inner-container';
    return html`
      <div class="outer-container">
        ${this.#header}
        <div class="${innerContainerClass}">${this.#mainCard} ${this.#customLinks}</div>
      </div>
    `;
  }

  get #filteredApps(): AppLauncherOption[] {
    return this.allApps?.filter(app => app.label.toLowerCase().includes(this._filterText));
  }

  public override render(): TemplateResult {
    return when(
      !this._smallScreen,
      () =>
        html`${cache(
          html` ${this.#appLauncherIcon}
            <forge-popover
              arrow
              placement="bottom-end"
              position-strategy="fixed"
              anchor="app-launcher-trigger"
              @slotchange=${this.#handleSlotChange}
              @forge-popover-toggle=${async (e: CustomEvent<IPopoverToggleEventData>) => {
                const { newState } = e.detail;
                if (newState === 'closed') {
                  await this._appLauncherPopover.hideAsync();
                  this.#resetState();
                } else if (newState === 'open') {
                  this.open = true;
                }
              }}
              id="app-launcher-popover">
              ${this.#containerContent}
            </forge-popover>`
        )}`,
      () => html`
        ${cache(
          html`${this.#appLauncherIcon}
            <forge-dialog
              persistent
              .open=${this.open}
              @slotchange=${this.#handleSlotChange}
              @forge-dialog-close=${() => {
                this.#resetState();
              }}>
              ${this.#containerContent}
            </forge-dialog>`
        )}
      `
    );
  }

  #appListItem(app: AppLauncherOption): TemplateResult | typeof nothing {
    return html`
      <forge-list-item class="app-list-item">
        <forge-avatar class="app-avatar" slot="start">
          <forge-icon name=${app.iconName} external></forge-icon>
        </forge-avatar>
        <a href="${app.uri}" target="${app.target || '_blank'}">${app.label}</a>
      </forge-list-item>
    `;
  }

  #setupMediaQuery(): void {
    if (this.#mediaQuery) {
      this.#mediaQuery.removeEventListener('change', this.#handleMediaChange);
    }
    this.#mediaQuery = window.matchMedia(`(max-width: ${this.#breakpoint}px)`);
    this.#mediaQuery.addEventListener('change', this.#handleMediaChange);
    this.#handleMediaChange(this.#mediaQuery, true);
  }

  #handleMediaChange: (e: MediaQueryList | MediaQueryListEvent, isInitial?: boolean) => void = (
    e: MediaQueryList | MediaQueryListEvent,
    isInitial?: boolean
  ) => {
    this._smallScreen = e.matches;

    // Update component state using ElementInternals
    toggleState(this.#internals, 'small', this._smallScreen);
    toggleState(this.#internals, 'large', !this._smallScreen);

    if (!isInitial && this.isConnected) {
      requestAnimationFrame(() => {
        if (this._appLauncherPopover && this.open) {
          this._appLauncherPopover.open = true;
        }
      });
    }
  };

  #onInputChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this._filterText = target.value.toLowerCase();
  }

  async #transitionToView(newView: AppView): Promise<void> {
    if (this._appView === newView) {
      return;
    }

    // Change the view
    this._appView = newView;

    // Reset filter text when going back to related view
    if (newView === 'related') {
      this._filterText = '';
      const input = await this._searchField;
      if (input) {
        input.value = '';
      }
    }

    // Focus search field when switching to all apps view
    if (newView === 'all') {
      const input = await this._searchField;
      input?.focus();
    }
  }

  #resetState(): void {
    this.loading = false;
    this._appView = this.relatedApps?.length ? 'related' : 'all';
    this._previousView = this._appView;
    this._filterText = '';
    this.open = false;
    if (this._appLauncherPopover) {
      this._appLauncherPopover.open = false;
    }
  }

  async #switchToAllAppsView(): Promise<void> {
    await this.#transitionToView('all');
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (
      [
        'app-launcher-link',
        'custom-links-title',
        'related-apps-title',
        'view-all-apps-button-text',
        'all-apps-title'
      ].includes(slotName)
    ) {
      this.requestUpdate();
    }
  }
}
