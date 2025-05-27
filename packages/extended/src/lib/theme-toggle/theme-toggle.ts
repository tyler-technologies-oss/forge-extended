import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
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

export type ThemeToggleCurrentTheme = 'light' | 'dark';

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
    this.currentTheme =
      (localStorage.getItem(THEME_KEY) as ThemeToggleCurrentTheme) || this.#detectPrefersColorScheme();
    this.#setTheme();
  }

  static {
    defineIconButtonComponent();
    definePopoverComponent();
    defineButtonToggleGroupComponent();

    IconRegistry.define([tylIconWbSunny, tylIconMoonWaningCrescent, tylIconTonality]);
  }

  public static override styles = unsafeCSS(styles);

  /**
   * The current theme that is applied to the component. The default value is 'system'
   */

  // TODO public get currentTheme readonly @state
  @property({ type: String, attribute: 'current-theme' })
  public currentTheme: ThemeToggleCurrentTheme = 'system';

  get #titleSlot(): TemplateResult | typeof nothing {
    return html`<slot name="title" id="theme-toggle-title">Theme</slot> `;
  }

  public override render(): TemplateResult {
    return html`
      <div class="title">${this.#titleSlot}</div>
      <forge-button-toggle-group
        aria-label="Choose communication type"
        .value=${this.currentTheme}
        @forge-button-toggle-group-change=${this.#onThemeChange}>
        <forge-button-toggle .value=${'light'} id="light-button">
          <forge-icon slot="start" name="wb_sunny"></forge-icon>
          <span>Light</span>
        </forge-button-toggle>
        <forge-button-toggle .value=${'dark'} id="dark-button">
          <forge-icon slot="start" name="moon_waning_crescent"></forge-icon>
          <span>Dark</span>
        </forge-button-toggle>
        <forge-button-toggle .value=${'system'} id="system-button">
          <forge-icon slot="start" name="tonality"></forge-icon>
          <span>System</span>
        </forge-button-toggle>
      </forge-button-toggle-group>
    `;
  }

  #onThemeChange(evt: CustomEvent<ThemeToggleCurrentTheme>): void {
    this.currentTheme = evt.detail;
    this.#setTheme();
  }

  #setTheme(): void {
    this.#setThemeOnHtmlEl();
    this.#setThemeLocalStorage();
    this.#emitThemeChange(this.currentTheme);
  }

  #setThemeOnHtmlEl(): void {
    document.documentElement.setAttribute(THEME_KEY, this.currentTheme);
  }

  #setThemeLocalStorage(): void {
    localStorage.setItem(THEME_KEY, this.currentTheme);
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
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      const darkThemeTest = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return darkThemeTest ? 'dark' : 'light';
    }
    return 'light';
  }
}
