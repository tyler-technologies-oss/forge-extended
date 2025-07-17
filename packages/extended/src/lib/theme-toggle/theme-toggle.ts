import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  defineButtonToggleGroupComponent,
  defineIconButtonComponent,
  definePopoverComponent,
  IconRegistry,
  toggleState
} from '@tylertech/forge';
import { tylIconWbSunny, tylIconTonality, tylIconMoonWaningCrescent } from '@tylertech/tyler-icons';

import styles from './theme-toggle.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-theme-toggle': ThemeToggleComponent;
  }

  interface HTMLElementEventMap {
    'forge-theme-toggle-update': CustomEvent<ThemeToggleUpdateEventData>;
  }
}

const LOCAL_STORAGE_KEY = '.forge-theme';
const THEME_ATTRIBUTE = 'data-forge-theme';
export const ThemeToggleComponentTagName: keyof HTMLElementTagNameMap = 'forge-theme-toggle';

export type ThemeToggleTheme = 'light' | 'dark' | 'system';

export interface ThemeToggleUpdateEventData {
  theme: ThemeToggleTheme;
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
  static {
    defineIconButtonComponent();
    definePopoverComponent();
    defineButtonToggleGroupComponent();

    IconRegistry.define([tylIconWbSunny, tylIconMoonWaningCrescent, tylIconTonality]);
  }

  public static override styles = unsafeCSS(styles);

  @state()
  private _theme: ThemeToggleTheme = 'system';

  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this._theme = (window.localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeToggleTheme) ?? 'system';
    if (this._theme === 'system') {
      this.#setThemeLocalStorage(this._theme);
    }
    this.#setAttributeOnHtmlEl();
    this.#setCssState();
  }

  readonly #titleSlot = html`<slot name="title" id="theme-toggle-title">Theme</slot> `;

  public override render(): TemplateResult {
    return html`
      <div class="title">${this.#titleSlot}</div>
      <forge-button-toggle-group
        aria-label="Select a theme"
        .value=${this._theme}
        mandatory
        @forge-button-toggle-group-change=${this.#handleThemeChange}>
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

  /** Sets the current theme. */
  public setTheme(value: ThemeToggleTheme): void {
    this._theme = value;
    this.#setAttributeOnHtmlEl();
    this.#setCssState();
    this.#setThemeLocalStorage(this._theme);
  }

  #handleThemeChange(evt: CustomEvent<ThemeToggleTheme>): void {
    this._theme = evt.detail;
    this.#setTheme();
  }

  #setTheme(): void {
    this.#setAttributeOnHtmlEl();
    this.#setCssState();
    this.#setThemeLocalStorage(this._theme);
    this.#emitThemeChange(this._theme);
  }

  #setAttributeOnHtmlEl(): void {
    const htmlEl = document.documentElement;
    if (this._theme === 'system') {
      htmlEl.setAttribute(THEME_ATTRIBUTE, this.#detectPrefersColorScheme());
      return;
    }
    htmlEl.setAttribute(THEME_ATTRIBUTE, this._theme);
  }

  #setCssState(): void {
    switch (this._theme) {
      case 'light':
        toggleState(this.#internals, 'light', true);
        toggleState(this.#internals, 'dark', false);
        break;
      case 'dark':
        toggleState(this.#internals, 'dark', true);
        toggleState(this.#internals, 'light', false);
        break;
      case 'system': {
        const themeTest = this.#detectPrefersColorScheme();
        toggleState(this.#internals, 'light', themeTest === 'light');
        toggleState(this.#internals, 'dark', themeTest === 'dark');
        break;
      }
    }
  }

  #setThemeLocalStorage(theme: string): void {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, theme);
  }

  #emitThemeChange(theme: ThemeToggleTheme): void {
    const event = new CustomEvent<ThemeToggleUpdateEventData>('forge-theme-toggle-update', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { theme }
    });
    this.dispatchEvent(event);
  }

  #detectPrefersColorScheme(): ThemeToggleTheme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
