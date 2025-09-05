import { LitElement, PropertyValues, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state, queryAsync, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { cache } from 'lit/directives/cache.js';
import { query } from 'lit/decorators/query.js';

import {
  defineAvatarComponent,
  defineCardComponent,
  defineDialogComponent,
  defineDividerComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineListComponent,
  defineScaffoldComponent,
  defineTextFieldComponent,
  defineToolbarComponent,
  defineTooltipComponent,
  defineViewSwitcherComponent,
  IconRegistry,
  IPopoverToggleEventData,
  PopoverComponent
} from '@tylertech/forge';
import {
  tylIconApps,
  tylIconOpenInNew,
  tylIconSearch,
  tylIconChevronRight,
  tylIconKeyboardReturn,
  tylIconArrowUpward,
  tylIconArrowDownward,
  tylIconGridOn,
  tylIconList,
  tylIconClose,
  tylIconArrowBack,
  tylIconHome,
  tylIconKeyboardEsc
} from '@tylertech/tyler-icons';

import styles from './app-launcher.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-app-launcher': AppLauncherComponent;
  }
}

export interface AppLauncherOptionResult {
  options: AppLauncherOption[];
}
export interface AppLauncherOption {
  label: string;
  uri: string;
  iconName: string;
  target?: string;
}

export interface AppLauncherOptionGroup {
  label: string;
  apps: AppLauncherOption[];
}

export interface AppLauncherCustomLink {
  label: string;
  uri: string;
}

export type AppView = 'related' | 'all';

export const AppLauncherComponentTagName: keyof HTMLElementTagNameMap = 'forge-app-launcher';

/**
 * @tag forge-app-launcher
 */
@customElement(AppLauncherComponentTagName)
export class AppLauncherComponent extends LitElement {
  static {
    defineAvatarComponent();
    defineCardComponent();
    defineIconButtonComponent();
    defineIconComponent();
    defineListComponent();
    defineTextFieldComponent();
    defineDividerComponent();
    defineViewSwitcherComponent();
    defineToolbarComponent();
    defineTooltipComponent();
    defineScaffoldComponent();
    defineDialogComponent();

    IconRegistry.define([
      tylIconApps,
      tylIconOpenInNew,
      tylIconSearch,
      tylIconChevronRight,
      tylIconKeyboardReturn,
      tylIconArrowUpward,
      tylIconArrowDownward,
      tylIconKeyboardEsc,
      tylIconGridOn,
      tylIconList,
      tylIconClose,
      tylIconArrowBack,
      tylIconHome
    ]);
  }
  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the dialog or popover is open.
   */
  @property({ type: Boolean })
  public open = false;

  /**
   * The current view of the app launcher, either 'related' or 'all'
   */
  @property({ type: String })
  public appView: AppView = 'related';

  /**
   * An array of related apps for the related apps view
   */
  @property({ type: Array })
  public relatedApps: AppLauncherOption[] = [];

  /**
   * An array of custom links for the custom-links slot
   */
  @property({ type: Array })
  public customLinks: AppLauncherCustomLink[] = [];

  @property({ type: Array })
  public allApps: AppLauncherOption[] = [];

  @property({ type: Boolean, attribute: 'small-screen' })
  public smallScreen = false;

  @property({ type: Boolean, attribute: 'fullscreen' })
  public fullscreen = false;

  @state()
  private _filterText = '';

  @queryAsync('#search-field')
  private _searchField!: HTMLInputElement;

  @query('#app-launcher-popover')
  private _appLauncherPopover!: PopoverComponent;

  @queryAssignedNodes({ slot: 'custom-link', flatten: true })
  private _slottedCustomLinkNodes!: Node[];

  #mediaQuery = window.matchMedia('(max-width: 768px)');

  public connectedCallback(): void {
    super.connectedCallback();
    if (!this.relatedApps.length) {
      this.appView = 'all';
    }
    this.#mediaQuery.addEventListener('change', this.#handleMediaChange);
    this.#handleMediaChange(this.#mediaQuery, true);
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#mediaQuery.removeEventListener('change', this.#handleMediaChange);
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('relatedApps')) {
      if (!this.relatedApps.length) {
        this.appView = 'all';
      }
    }
  }

  #handleMediaChange: (e: MediaQueryList | MediaQueryListEvent, isInitial?: boolean) => void = (
    e: MediaQueryList | MediaQueryListEvent,
    isInitial?: boolean
  ) => {
    this.smallScreen = e.matches;
    if (!isInitial) {
      requestAnimationFrame(() => {
        if (this._appLauncherPopover) {
          this._appLauncherPopover.open = true;
        }
      });
    }
  };

  #appListItem(app: AppLauncherOption): TemplateResult | typeof nothing {
    return html`
      <forge-list-item class="app-list-item">
        <forge-avatar class="app-avatar" slot="start">
          <forge-icon name=${app.iconName} external></forge-icon>
        </forge-avatar>
        <a href="http://www.google.com" target="_blank">${app.label}</a>
      </forge-list-item>
    `;
  }

  get #appLauncherIcon(): TemplateResult | typeof nothing {
    return html`<forge-icon-button
      theme="app-bar"
      aria-label="Open app launcher"
      id="app-launcher-trigger"
      @click=${() => (this.open = !this.open)}>
      <forge-icon name="apps"></forge-icon>
    </forge-icon-button>`;
  }

  get #backButton(): TemplateResult | typeof nothing {
    const showBackButton = this.appView === 'all' && this.relatedApps.length;
    return when(
      showBackButton,
      () => html`
        <forge-icon-button
          aria-label="Go back"
          slot="before-start"
          @click=${() => {
            this.appView = 'related';
            this._filterText = '';
            this._searchField.value = '';
          }}>
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
          aria-label="Close app launcher"
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

  readonly #relatedAppsTitleSlot = html`<h2>
    <slot name="related-apps-title" id="related-apps-title-slot">Related apps</slot>
  </h2>`;

  get #relatedApps(): TemplateResult | typeof nothing {
    const showrelatedApps = this.appView === 'related';
    return when(
      showrelatedApps,
      () => html`
        ${this.#relatedAppsTitleSlot}
        <forge-list>${this.relatedApps.map(app => html` ${this.#appListItem(app)} `)}</forge-list>
      `,
      () => nothing
    );
  }

  get #searchAllAppsField(): TemplateResult | typeof nothing {
    const showSearchInput = this.appView === 'all';
    return when(
      showSearchInput,
      () => html`
        <forge-text-field density=${this.smallScreen ? 'large' : 'small'} id="search-field">
          <forge-icon name="search" slot="leading"></forge-icon>
          <input
            type="text"
            placeholder="Search by product or app"
            @input=${this._onInputChange}
            id="search-field"
            autocomplete="off" />
        </forge-text-field>
      `,
      () => nothing
    );
  }

  readonly #allAppsTitleSlot = html`<slot name="all-apps-title" id="all-apps-title-slot">All apps</slot>`;

  get #allApps(): TemplateResult | typeof nothing {
    const showAllApps = this.appView === 'all';
    return when(
      showAllApps,
      () => html`
        ${when(
          !this.filteredApps.length && this._filterText,
          () => html`${this.#emptyState}`,
          () =>
            html` <h2>${this.#allAppsTitleSlot}</h2>
              <forge-list>${this.filteredApps.map(app => html` ${this.#appListItem(app)} `)}</forge-list>`
        )}
      `,
      () => nothing
    );
  }

  readonly #viewAllAppsButtonSlot = html`<slot name="view-all-apps-button-text" id="view-all-apps-button-text-slot"
    >View all apps</slot
  >`;

  get #viewAllAppsButton(): TemplateResult | typeof nothing {
    const showAllAppsButton = this.appView === 'related';
    return when(
      showAllAppsButton,
      () => html`
        <forge-button variant="raised" @click=${this._switchToAllAppsView}>
          <span>${this.#viewAllAppsButtonSlot}</span>
          <forge-icon name="chevron_right"></forge-icon>
        </forge-button>
      `,
      () => nothing
    );
  }

  readonly #keyboardIndicatorToolbar = html` <div class="keyboard-toolbar">
    <div class="keyboard-indicator">
      <forge-icon name="keyboard_return"></forge-icon>
      <div class="keyboard-indicator-label">to select</div>
    </div>

    <div class="keyboard-indicator">
      <div>
        <forge-icon name="arrow_upward"></forge-icon>
        <forge-icon name="arrow_downward"></forge-icon>
      </div>
      <div class="keyboard-indicator-label">to navigate</div>
    </div>

    <div class="keyboard-indicator">
      <forge-icon name="keyboard_esc" external-type="extended"></forge-icon>
      <div class="keyboard-indicator-label">to close</div>
    </div>
  </div>`;

  readonly #customLinksTitleSlot = html`<slot name="custom-links-title" id="custom-links-title-slot"></slot>`;

  readonly #customLinkSlot = html`<slot name="custom-link" id="custom-link-slot"></slot>`;

  get #customLinks(): TemplateResult | typeof nothing {
    const showLinks = this._slottedCustomLinkNodes.length > 0;
    return when(
      showLinks,
      () => html`
        <forge-card class="custom-links-card">
          <div class="custom-links">
            <h2>${this.#customLinksTitleSlot}</h2>
            <forge-list>${this.#customLinkSlot}</forge-list>
          </div>
        </forge-card>
      `,
      () => this.#customLinkSlot
    );
  }

  readonly #emptyState = html`
    <div class="empty-state">
      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 92 92">
        <defs>
          <style>
            .cls-1,
            .cls-12,
            .cls-6 {
              fill: none;
            }
            .cls-2 {
              fill: #d0dbf4;
              fill-rule: evenodd;
            }
            .cls-13,
            .cls-3,
            .cls-5,
            .cls-7 {
              fill: #5cc5cd;
            }
            .cls-10,
            .cls-11,
            .cls-12,
            .cls-13,
            .cls-3,
            .cls-6,
            .cls-7,
            .cls-9 {
              stroke: #586ab1;
            }
            .cls-10,
            .cls-3,
            .cls-6 {
              stroke-miterlimit: 10;
            }
            .cls-10,
            .cls-11,
            .cls-12,
            .cls-3,
            .cls-6,
            .cls-7,
            .cls-9 {
              stroke-width: 2px;
            }
            .cls-10,
            .cls-4,
            .cls-9 {
              fill: #d1d1d1;
            }
            .cls-11,
            .cls-12,
            .cls-13,
            .cls-7,
            .cls-9 {
              stroke-linecap: round;
              stroke-linejoin: round;
            }
            .cls-8 {
              fill: #fff;
              opacity: 0.59;
            }
            .cls-11 {
              fill: #fcbf12;
            }
            .cls-13 {
              stroke-width: 1.5px;
            }
          </style>
        </defs>
        <title>no-apps-spot</title>
        <rect class="cls-1" x="0.09" y="0.05" width="92" height="92" />
        <path class="cls-2" d="M46.1,82a36,36,0,1,0-36-36A36,36,0,0,0,46.1,82Z" />
        <rect class="cls-3" x="35.66" y="59.09" width="20.79" height="11.29" />
        <rect class="cls-4" x="11.99" y="16.73" width="68.09" height="38.25" />
        <rect class="cls-5" x="12.11" y="52.94" width="67.91" height="9.67" />
        <rect class="cls-6" x="11.87" y="16.61" width="68.38" height="46.06" rx="1" />
        <line class="cls-6" x1="11.57" y1="52.94" x2="80.5" y2="52.94" />
        <path class="cls-7" d="M63.29,73.17h0a3.78,3.78,0,0,0-3.77-3.77H32.59a3.78,3.78,0,0,0-3.76,3.77H63.29Z" />
        <circle class="cls-8" cx="45.45" cy="40.78" r="15.42" />
        <rect
          class="cls-9"
          x="29.26"
          y="51.64"
          width="4.46"
          height="10.67"
          transform="translate(17.42 120.54) rotate(-138.59)" />
        <path
          class="cls-10"
          d="M31.21,28.41a18.42,18.42,0,1,0,26-1.63A18.42,18.42,0,0,0,31.21,28.41ZM54.34,30a14.09,14.09,0,1,1-19.89,1.24A14.08,14.08,0,0,1,54.34,30Z" />
        <path
          class="cls-11"
          d="M21.23,74.44,31.62,62.66l-5.88-5.18L15.36,69.26a7.45,7.45,0,0,0-.61.66c-1.33,1.84-1.46,4.23.21,5.71s4.22,1,5.73-.53Z" />
        <line class="cls-12" x1="28.8" y1="65.17" x2="23.22" y2="60.28" />
        <path
          class="cls-13"
          d="M43.2,44.13a8.39,8.39,0,0,1,.42-3A4.65,4.65,0,0,1,45,39.31a8.84,8.84,0,0,0,1.44-1.45,2.32,2.32,0,0,0,.49-1.44c0-1.29-.55-1.93-1.66-1.93a1.53,1.53,0,0,0-1.24.56,2.36,2.36,0,0,0-.49,1.52H39.2a5.15,5.15,0,0,1,1.61-4,6.4,6.4,0,0,1,4.44-1.42,6.69,6.69,0,0,1,4.41,1.31,4.61,4.61,0,0,1,1.57,3.74,4.37,4.37,0,0,1-.42,1.93,6.65,6.65,0,0,1-1.36,1.78L48,41.29a3.44,3.44,0,0,0-.86,1.24,4.71,4.71,0,0,0-.27,1.6ZM42.67,48a2,2,0,0,1,.69-1.55,2.43,2.43,0,0,1,1.7-.61,2.47,2.47,0,0,1,1.71.61,2.11,2.11,0,0,1,0,3.1,2.47,2.47,0,0,1-1.71.61,2.43,2.43,0,0,1-1.7-.61A2,2,0,0,1,42.67,48Z" />
      </svg>
      <p>No applications found</p>
    </div>
  `;

  public get filteredApps(): AppLauncherOption[] {
    return this.allApps.filter(app => app.label.toLowerCase().includes(this._filterText));
  }

  public set filteredApps(value: AppLauncherOption[]) {
    this.filteredApps = value;
  }

  public override render(): TemplateResult {
    return when(
      !this.smallScreen,
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
                }
              }}
              id="app-launcher-popover">
              <div class="outer-container">
                ${this.#header}
                <div class="inner-container">
                  <forge-card no-padding>
                    ${this.appView === 'all'
                      ? html`<div class="search-container">${this.#searchAllAppsField}</div>`
                      : nothing}

                    <div class="v-stack p-16">
                      <div class="app-group v-stack">${this.#relatedApps} ${this.#allApps}</div>
                    </div>
                    ${this.appView === 'related'
                      ? html`<div class="view-all-apps-button">${this.#viewAllAppsButton}</div>`
                      : nothing}
                  </forge-card>
                  ${this.#customLinks}
                </div>
                ${this.#keyboardIndicatorToolbar}
              </div>
            </forge-popover>`
        )}`,
      () => html`
        ${cache(
          html`${this.#appLauncherIcon}
            <forge-dialog
              .fullscreen=${this.fullscreen}
              persistent
              fullscreen-threshold="0"
              .open=${this.open}
              @forge-dialog-close=${() => {
                this.#resetState();
              }}>
              <forge-scaffold>
                <div class="header">
                  ${this.#header}
                </div>
                <forge-card no-padding slot="body">
                    <forge-scaffold>
                      ${
                        this.appView === 'all'
                          ? html`<div slot="header" class="search-container">${this.#searchAllAppsField}</div>`
                          : nothing
                      }

                      <div class="v-stack p-16" slot="body">
                        <div class="app-group v-stack">${this.#relatedApps} ${this.#allApps}</div>
                      </div>
                      ${
                        this.appView === 'related'
                          ? html`<div class="view-all-apps-button" slot="footer">${this.#viewAllAppsButton}</div>`
                          : nothing
                      }
                    </forge-scaffold>
                  </forge-card>
              </forge-scaffold>
              </div>
            </forge-dialog>`
        )}
      `
    );
  }

  private _onInputChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this._filterText = target.value.toLowerCase();
  }

  #resetState(): void {
    this.appView = 'related';
    this._filterText = '';
    this.open = false;
    if (this._appLauncherPopover) {
      this._appLauncherPopover.open = false;
    }
  }

  private async _switchToAllAppsView(): Promise<void> {
    this.appView = 'all';
    const input = await this._searchField;
    input.focus();
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (
      [
        'custom-link',
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
