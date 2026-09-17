import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  defineButtonToggleGroupComponent,
  defineIconButtonComponent,
  definePopoverComponent,
  IconRegistry,
  toggleState
} from '@tylertech/forge';
import { tylIconWbSunny, tylIconTonality, tylIconMoonWaningCrescent } from '@tylertech/tyler-icons';
import { applyTheme, detectPrefersColorScheme, getStoredTheme, ThemeToggleTheme } from '../utils/theme-utils';

import styles from './theme-toggle.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-theme-toggle': ThemeToggleComponent;
  }

  interface HTMLElementEventMap {
    'forge-theme-toggle-update': CustomEvent<ThemeToggleUpdateEventData>;
  }
}

export const ThemeToggleComponentTagName: keyof HTMLElementTagNameMap = 'forge-theme-toggle';

export interface ThemeToggleUpdateEventData {
  /** The selected theme mode, as chosen by the user or set programmatically. */
  theme: ThemeToggleTheme;
  /** The actual light/dark theme applied, resolving `system` to the current OS color scheme preference. */
  resolvedTheme: 'light' | 'dark';
}

/**
 * @tag forge-theme-toggle
 *
 * @slot title - The title shown above the toggle buttons
 * @slot light-label - The text label for the light theme option
 * @slot dark-label - The text label for the dark theme option
 * @slot system-label - The text label for the system theme option
 *
 * @event {CustomEvent<ThemeToggleUpdateEventData>} forge-theme-toggle-update - Fired when the theme changes, either
 * from a user selection or, when `system` is selected, the OS color scheme preference changing. `detail.theme` is
 * the selected mode and is unchanged for OS-driven updates while `system` remains selected; `detail.resolvedTheme`
 * is the actual light/dark theme applied and is always the actionable value.
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

  /** ARIA label for the theme toggle button group */
  @property({ attribute: 'group-aria-label' })
  public groupAriaLabel = 'Select a theme';

  @state()
  private _theme: ThemeToggleTheme = 'system';

  readonly #internals: ElementInternals;
  readonly #mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this._theme = getStoredTheme();
    applyTheme(this._theme);
    this.#setCssState();
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#mediaQuery.addEventListener('change', this.#handleSystemPreferenceChange);
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#mediaQuery.removeEventListener('change', this.#handleSystemPreferenceChange);
  }

  readonly #titleSlot = html`<slot name="title" id="theme-toggle-title">Theme</slot> `;
  readonly #lightLabelSlot = html`<slot name="light-label" id="light-label-slot">Light</slot>`;
  readonly #darkLabelSlot = html`<slot name="dark-label" id="dark-label-slot">Dark</slot>`;
  readonly #systemLabelSlot = html`<slot name="system-label" id="system-label-slot">System</slot>`;

  public override render(): TemplateResult {
    return html`
      <div class="title">${this.#titleSlot}</div>
      <forge-button-toggle-group
        aria-label="${this.groupAriaLabel}"
        .value=${this._theme}
        mandatory
        @forge-button-toggle-group-change=${this.#handleThemeChange}>
        <forge-button-toggle value="light" id="light-button">
          <forge-icon slot="start" name="wb_sunny"></forge-icon>
          <span>${this.#lightLabelSlot}</span>
        </forge-button-toggle>
        <forge-button-toggle value="dark" id="dark-button">
          <forge-icon slot="start" name="moon_waning_crescent"></forge-icon>
          <span>${this.#darkLabelSlot}</span>
        </forge-button-toggle>
        <forge-button-toggle value="system" id="system-button">
          <forge-icon slot="start" name="tonality"></forge-icon>
          <span>${this.#systemLabelSlot}</span>
        </forge-button-toggle>
      </forge-button-toggle-group>
    `;
  }

  /** Sets the current theme. */
  public setTheme(value: ThemeToggleTheme): void {
    this._theme = value;
    applyTheme(this._theme);
    this.#setCssState();
  }

  #handleThemeChange(evt: CustomEvent<ThemeToggleTheme>): void {
    this._theme = evt.detail;
    this.#setTheme();
  }

  #setTheme(): void {
    applyTheme(this._theme);
    this.#setCssState();
    this.#emitThemeChange(this._theme);
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
        const themeTest = detectPrefersColorScheme();
        toggleState(this.#internals, 'light', themeTest === 'light');
        toggleState(this.#internals, 'dark', themeTest === 'dark');
        break;
      }
    }
  }

  #emitThemeChange(theme: ThemeToggleTheme): void {
    const resolvedTheme = theme === 'system' ? detectPrefersColorScheme() : theme;
    const event = new CustomEvent<ThemeToggleUpdateEventData>('forge-theme-toggle-update', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { theme, resolvedTheme }
    });
    this.dispatchEvent(event);
  }

  #handleSystemPreferenceChange = (): void => {
    if (this._theme === 'system') {
      this.#setTheme();
    }
  };
}
