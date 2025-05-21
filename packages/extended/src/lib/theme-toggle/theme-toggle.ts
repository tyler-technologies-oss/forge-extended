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

const THEME_KEY = 'tyler-forge-theme';
export const ThemeToggleComponentTagName: keyof HTMLElementTagNameMap = 'forge-theme-toggle';

type CurrentTheme = 'light' | 'dark' | 'system';

/**
 * @tag forge-theme-toggle
 */
@customElement(ThemeToggleComponentTagName)
export class ThemeToggleComponent extends LitElement {
  constructor() {
    super();
    this.currentTheme = (localStorage.getItem(THEME_KEY) as CurrentTheme) || 'light';
  }

  static {
    defineIconButtonComponent();
    definePopoverComponent();
    defineButtonToggleGroupComponent();

    IconRegistry.define([tylIconWbSunny, tylIconMoonWaningCrescent, tylIconTonality]);
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Description of the property.
   */
  @property({ type: Boolean, attribute: 'open' })
  public open = true;

  @property({ type: String, attribute: 'current-theme' })
  public currentTheme: CurrentTheme = 'light';

  public override render(): TemplateResult {
    return html`
    ${this.currentTheme}
    <div class="title">Theme</div>
      <forge-button-toggle-group aria-label="Choose communication type" .value=${this.currentTheme} @forge-button-toggle-group-change=${this.#onThemeChange}>
        <forge-button-toggle value="light">
          <forge-icon slot="start" name="wb_sunny"></forge-icon>
          <span>Light</span>
        </forge-button-toggle>
        <forge-button-toggle value="dark">
          <forge-icon slot="start" name="moon_waning_crescent"></forge-icon>
          <span>Dark</span>
        </forge-button-toggle>
        <forge-button-toggle value="system">
          <forge-icon slot="start" name="tonality"></forge-icon>
          <span>System</span>
      </forge-button-toggle-group>
    `;
  }

  #onThemeChange(evt: CustomEvent<CurrentTheme>): void {
    this.currentTheme = evt.detail;
    localStorage.setItem(THEME_KEY, this.currentTheme);
  }
}
