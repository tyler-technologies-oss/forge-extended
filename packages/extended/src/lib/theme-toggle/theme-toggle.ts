import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

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

export type ThemeToggleCurrentTheme = 'light' | 'dark' | 'system';

export interface ThemeToggleThemeEventData {
  theme: ThemeToggleCurrentTheme;
}

/**
 * @tag forge-theme-toggle
 *
 * @slot title - The title shown above the toggle buttons
 *
 * @event {CustomEvent<ThemeToggleThemeEventData>} forge-theme-toggle-update - Fired when the theme is changed
 */
@customElement(ThemeToggleComponentTagName)
export class ThemeToggleComponent extends LitElement {
  constructor() {
    super();
    this._theme = (localStorage.getItem(THEME_KEY) as ThemeToggleCurrentTheme) ?? 'system';
    if (this._theme === 'system') {
      this.#setThemeLocalStorage(this._theme);
    }
    this.#setThemeOnHtmlEl();
  }

  static {
    defineIconButtonComponent();
    definePopoverComponent();
    defineButtonToggleGroupComponent();

    IconRegistry.define([tylIconWbSunny, tylIconMoonWaningCrescent, tylIconTonality]);
  }

  public static override styles = unsafeCSS(styles);

  @state()
  protected _theme: ThemeToggleCurrentTheme = 'system';

  get #titleSlot(): TemplateResult | typeof nothing {
    return html`<slot name="title" id="theme-toggle-title">Theme</slot> `;
  }

  public override render(): TemplateResult {
    return html`
      <div class="title">${this.#titleSlot}</div>
      <forge-button-toggle-group
        aria-label="Select a theme"
        .value=${this._theme}
        @forge-button-toggle-group-change=${this.#onThemeChange}>
        <forge-button-toggle value="light" id="light-button">
          <forge-icon slot="start" name="wb_sunny"></forge-icon>
          <span>Light</span>
        </forge-button-toggle>
        <forge-button-toggle value="dark" id="dark-button">
          <forge-icon slot="start" name="moon_waning_crescent"></forge-icon>
          <span>Dark</span>
        </forge-button-toggle>
        <forge-button-toggle value="system" id="system-button">
          <forge-icon slot="start" name="tonality"></forge-icon>
          <span>System</span>
        </forge-button-toggle>
      </forge-button-toggle-group>
    `;
  }

  #onThemeChange(evt: CustomEvent<ThemeToggleCurrentTheme>): void {
    this._theme = evt.detail;
    this.#setTheme();
  }

  #setTheme(): void {
    this.#setThemeOnHtmlEl();
    this.#setThemeLocalStorage(this._theme);
    this.#emitThemeChange(this._theme);
  }

  #setThemeOnHtmlEl(): void {
    if (this._theme === 'system') {
      document.documentElement.setAttribute(THEME_KEY, this.#detectPrefersColorScheme());
      return;
    }
    document.documentElement.setAttribute(THEME_KEY, this._theme);
  }

  #setThemeLocalStorage(theme: string): void {
    localStorage.setItem(THEME_KEY, theme);
  }

  #emitThemeChange(theme: ThemeToggleCurrentTheme): void {
    const event = new CustomEvent<ThemeToggleThemeEventData>('forge-theme-toggle-update', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { theme }
    });
    this.dispatchEvent(event);
  }

  #detectPrefersColorScheme(): ThemeToggleCurrentTheme {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }
}
