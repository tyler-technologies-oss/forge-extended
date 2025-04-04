import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state, queryAsync } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import styles from './app-launcher.scss?inline';
import {
  defineAvatarComponent,
  defineCardComponent,
  defineDividerComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineListComponent,
  defineScaffoldComponent,
  defineTextFieldComponent,
  defineToolbarComponent,
  defineTooltipComponent,
  defineViewSwitcherComponent,
  IconRegistry
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
  tylIconHome
} from '@tylertech/tyler-icons/standard';
import { tylIconKeyboardEsc } from '@tylertech/tyler-icons/extended';

declare global {
  interface HTMLElementTagNameMap {
    'forge-app-launcher': AppLauncherComponent;
  }
}

export interface AppLauncherConfig {
  optionsCallback: AppLauncherOptionsCallback;
}
export interface AppLauncherOptionResult {
  options: AppLauncherOption[];
}
export interface AppLauncherOption {
  label: string;
  uri: string;
  icon: string;
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

export type AppLauncherOptionsCallback = () => Promise<AppLauncherOptionResult>;

export type AppView = 'grid' | 'list';

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

  @property({ type: Number })
  public index = 0;

  @property({ type: String, attribute: 'app-view' })
  public appView: AppView = 'list';

  @property({ type: Object })
  public contextualApps!: AppLauncherOptionGroup;

  @property({ type: Array })
  public customLinks: any[] = [];

  @property({ type: Array })
  public allApps: AppLauncherOptionGroup[] = [];

  @state()
  private _filterText = '';

  @queryAsync('#search-field')
  private _searchField!: HTMLInputElement;

  #appContainer(appName: string): TemplateResult | typeof nothing {
    return html`
      <forge-list-item class="app-list-item">
        <forge-avatar class="app-avatar" slot="start">
          <forge-icon name="accessibility" external></forge-icon>
        </forge-avatar>
        <a href="http://www.google.com">${appName}</a>
      </forge-list-item>
    `;
  }

  get #backButton(): TemplateResult | typeof nothing {
    const showBackButton = this.index === 1;
    return when(
      showBackButton,
      () => html`
        <forge-icon-button
          aria-label="Go back"
          slot="before-start"
          @click=${() => {
            this.index--;
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
        <h2 slot="start">App Launcher</h2>
        ${this.#backButton}
        <forge-icon-button aria-label="Close app launcher" class="close-button" slot="end">
          <forge-icon name="close"></forge-icon>
        </forge-icon-button>
      </forge-toolbar>
    `;
  }

  get #contextualApps(): TemplateResult | typeof nothing {
    const showContextualApps = this.index === 0;
    return when(
      showContextualApps,
      () => html`
        <div class="app-group v-stack grid-scroll">
          <h3>Payments</h3>
          <forge-list>
            ${this.#appContainer('Payments Administration')} ${this.#appContainer('PEP Administration')}
            ${this.#appContainer('Permissions')} ${this.#appContainer('Batch Integration')}
            ${this.#appContainer('System Integration')}
          </forge-list>

          <h3>CorpDev</h3>
          <forge-list> ${this.#appContainer('Admin Center')} ${this.#appContainer('Ops Center')} </forge-list>
        </div>
      `,
      () => nothing
    );
  }

  get #allApps(): TemplateResult | typeof nothing {
    const showAllApps = this.index === 1;
    return when(
      showAllApps,
      () => html`
        <div class="app-group">
          ${this.filteredApps.map(
            app => html` <forge-list> ${app.apps.map(a => this.#appContainer(a.applicationName))} </forge-list> `
          )}
        </div>
      `,
      () => nothing
    );
  }

  get #searchAllAppsField(): TemplateResult | typeof nothing {
    const showSearchInput = this.index === 1;
    return when(
      showSearchInput,
      () => html`
        <div slot="header" class="search-container">
          <forge-text-field density="small">
            <forge-icon name="search" slot="leading"></forge-icon>
            <input type="text" placeholder="Filter products & apps" @input=${this._onInputChange} id="search-field" />
          </forge-text-field>
        </div>
      `,
      () => nothing
    );
  }

  get #viewAllAppsButton(): TemplateResult | typeof nothing {
    const showAllAppsButton = this.index === 0;
    return when(
      showAllAppsButton,
      () => html`
        <div class="view-all-apps-button" slot="footer">
          <forge-button variant="outlined" @click=${this._switchToAllAppsView}>
            <span>View all apps</span>
            <forge-icon name="chevron_right"></forge-icon>
          </forge-button>
        </div>
      `,
      () => nothing
    );
  }

  get #customLinks(): TemplateResult | typeof nothing {
    return when(
      this.customLinks.length > 0,
      () => html`
        <forge-card class="custom-links-card">
          <div class="custom-links">
            <h3>My links</h3>
            <forge-list>
              <forge-list-item>
                <forge-icon slot="start" name="open_in_new"></forge-icon>
                <a href="http://www.google.com">Payments documentation</a>
              </forge-list-item>

              <forge-list-item>
                <forge-icon slot="start" name="open_in_new"></forge-icon>
                <a href="http://www.google.com">Frequently Asked Questions</a>
              </forge-list-item>

              <forge-list-item>
                <forge-icon slot="start" name="open_in_new"></forge-icon>
                <a href="http://www.google.com">Community Services Directory</a>
              </forge-list-item>
            </forge-list>
          </div>
        </forge-card>
      `,
      () => nothing
    );
  }

  get filteredApps(): AppLauncherOptionGroup[] {
    return this.allApps.filter(app => app.label.toLowerCase().includes(this._filterText));
  }

  set filteredApps(value: AppLauncherOptionGroup[]) {
    this.filteredApps = value;
  }

  public override render(): TemplateResult {
    return html`
      <forge-icon-button aria-label="Open app launcher" id="app-launcher-trigger">
        <forge-icon name="apps"></forge-icon>
      </forge-icon-button>
      <forge-popover anchor="app-launcher-trigger" placement="left-start" position-strategy="fixed">
        <div class="outer-container">
          ${this.#header}
          <div class="inner-container">
            <forge-card no-padding>
              <forge-scaffold>
                ${this.#searchAllAppsField}
                <div class="v-stack p-16" slot="body">${this.#contextualApps} ${this.#allApps}</div>
                ${this.#viewAllAppsButton}
              </forge-scaffold>
            </forge-card>
            ${this.#customLinks}
          </div>

          <div class="keyboard-toolbar">
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
          </div>
        </div>
      </forge-popover>
    `;
  }

  private _onInputChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this._filterText = target.value.toLowerCase();
    if (!this._filterText) {
      this.filteredApps = this.allApps;
    }
  }

  private async _switchToAllAppsView(): Promise<void> {
    this.index = 1;
    const input = await this._searchField;
    input.focus();
  }
}
