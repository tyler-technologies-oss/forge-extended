import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './theme-toggle.scss?inline';
import {
  defineButtonToggleGroupComponent,
  defineIconButtonComponent,
  definePopoverComponent,
  IconRegistry
} from '@tylertech/forge';
import { tylIconWbSunny, tylIconTonality } from '@tylertech/tyler-icons/standard';
import { tylIconMoonWaningCrescent } from '@tylertech/tyler-icons/extended';

declare global {
  interface HTMLElementTagNameMap {
    'forge-theme-toggle': ThemeToggleComponent;
  }
}

const THEME_KEY = 'data-forge-theme';
export const ThemeToggleComponentTagName: keyof HTMLElementTagNameMap = 'forge-theme-toggle';

type CurrentTheme = 'light' | 'dark' | 'system';

export interface ThemeToggleThemeEventData {
  theme: CurrentTheme;
}

/**
 * @tag forge-theme-toggle
 */
@customElement(ThemeToggleComponentTagName)
export class ThemeToggleComponent extends LitElement {
  constructor() {
    super();
    this.currentTheme = (localStorage.getItem(THEME_KEY) as CurrentTheme) || this.#detectPrefersColorScheme();
    this.#setTheme();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._emitThemeChange(this.currentTheme);
  }

  static {
    defineIconButtonComponent();
    definePopoverComponent();
    defineButtonToggleGroupComponent();

    IconRegistry.define([tylIconWbSunny, tylIconMoonWaningCrescent, tylIconTonality]);
  }

  public static override styles = unsafeCSS(styles);

  /**
   * The current theme that is applied to the component. The default value is 'system'.
   */
  @property({ type: String, attribute: 'current-theme' })
  public currentTheme: CurrentTheme = 'system';

  private _emitThemeChange(theme: CurrentTheme): void {
    const event = new CustomEvent<ThemeToggleThemeEventData>('forge-theme-toggle-update', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { theme }
    });
    this.dispatchEvent(event);
  }

  public override render(): TemplateResult {
    return html`
      <div class="title">Theme</div>
      <forge-button-toggle-group
        aria-label="Choose communication type"
        .value=${this.currentTheme}
        @forge-button-toggle-group-change=${this.#onThemeChange}>
        <forge-button-toggle .value=${'light'}>
          <forge-icon slot="start" name="wb_sunny"></forge-icon>
          <span>Light</span>
        </forge-button-toggle>
        <forge-button-toggle .value=${'dark'}>
          <forge-icon slot="start" name="moon_waning_crescent"></forge-icon>
          <span>Dark</span>
        </forge-button-toggle>
        <forge-button-toggle .value=${'system'}>
          <forge-icon slot="start" name="tonality"></forge-icon>
          <span>System</span>
        </forge-button-toggle>
      </forge-button-toggle-group>
    `;
  }

  #onThemeChange(evt: CustomEvent<CurrentTheme>): void {
    this.currentTheme = evt.detail;
    this.#setTheme();
  }

  #setTheme(): void {
    this.#setThemeOnHtmlEl();
    this.#setThemeLocalStorage();
    this._emitThemeChange(this.currentTheme);
  }

  #setThemeOnHtmlEl(): void {
    document.documentElement.setAttribute(THEME_KEY, this.currentTheme);
  }

  #setThemeLocalStorage(): void {
    localStorage.setItem(THEME_KEY, this.currentTheme);
  }

  #detectPrefersColorScheme(): CurrentTheme {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      const darkThemeTest = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return darkThemeTest ? 'dark' : 'light';
    }
    return 'light';
  }
}
