import {
  defineButtonComponent,
  defineButtonToggleComponent,
  defineButtonToggleGroupComponent,
  defineIconButtonComponent,
  defineIconComponent,
  definePopoverComponent,
  defineToolbarComponent,
  defineTooltipComponent,
  IconRegistry,
  IPopoverToggleEventData
} from '@tylertech/forge';
import { customElement, property } from 'lit/decorators.js';
import { tylIconWbSunny, tylIconSettingsBrightness } from '@tylertech/tyler-icons/standard';
import { tylIconMoonWaningCrescent } from '@tylertech/tyler-icons/extended';

import styles from './theme-toggle.scss?inline';
import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'forge-theme-toggle': ThemeToggleElement;
  }

  interface HTMLElementEventMap {
    'forge-theme-toggle-theme': CustomEvent<ThemeType>;
  }
}

export type ThemeType = 'light' | 'dark' | 'automatic';
const LOCAL_STORAGE_KEY = 'tyler-forge-theme';

@customElement('forge-theme-toggle')
export class ThemeToggleElement extends LitElement {
  constructor() {
    super();
    this._manageLocalStorage();
  }

  static {
    defineIconButtonComponent();
    defineButtonComponent();
    defineToolbarComponent();
    definePopoverComponent();
    defineIconComponent();
    defineButtonToggleComponent();
    defineButtonToggleGroupComponent();
    defineTooltipComponent();
    IconRegistry.define([tylIconWbSunny, tylIconSettingsBrightness, tylIconMoonWaningCrescent]);
  }

  public static override styles = unsafeCSS(styles);

  /**
   * The title text to display.
   */
  @property({ type: String, reflect: true })
  public anchor = 'forge-theme-toggle-anchor';

  /**
   * Indicates whether the theme-toggle is open.
   */
  @property({ type: Boolean, reflect: true })
  public open = false;

  /**
   * Current theme value that is set
   */
  @property({ type: String, reflect: true })
  public value = 'light';

  public override render(): TemplateResult {
    const iconButton = html`
      <forge-icon-button aria-labelledby="display-theme-tooltip" id=${this.anchor}>
        <forge-icon name="wb_sunny"></forge-icon>
        <forge-tooltip>
          <slot name="tooltip-text" id="display-theme-tooltip"> Toggle your application theme </slot>
        </forge-tooltip>
      </forge-icon-button>
    `;
    const title = html`
      <h1 id="title" class="title" slot="start">
        <slot name="title"> Display theme </slot>
      </h1>
    `;

    const message = html`
      <p id="message" class="message">
        <slot name="message"> Choose what theme you would like to use for this application. </slot>
      </p>
    `;

    const buttonToggleGroup = html`
      <forge-button-toggle-group
        value=${this.value}
        aria-labelledby="title"
        @forge-button-toggle-group-change=${(e: CustomEvent<ThemeType>) => this._onAction(e)}>
        <forge-button-toggle value="light">
          <div class="toggle-type-container">
            <forge-icon name="wb_sunny"></forge-icon>
            <slot name="light-toggle-text"> Light </slot>
          </div>
        </forge-button-toggle>
        <forge-button-toggle value="dark">
          <div class="toggle-type-container">
            <forge-icon name="moon_waning_crescent"></forge-icon>
            <slot name="dark-toggle-text"> Dark </slot>
          </div>
        </forge-button-toggle>
        <forge-button-toggle value="automatic">
          <div class="toggle-type-container">
            <forge-icon name="settings_brightness"></forge-icon>
            <slot name="automatic-toggle-text"> Automatic </slot>
          </div>
        </forge-button-toggle>
      </forge-button-toggle-group>
    `;

    const primaryButton = html`
      <forge-button variant="raised" id="primary-button" @click=${this._onClose}>
        <slot name="primary-button-text">Close</slot>
      </forge-button>
    `;

    return html`
      ${iconButton}
      <forge-popover
        anchor=${this.anchor}
        placement="bottom"
        arrow
        ?open=${this.open}
        @forge-popover-toggle=${(e: CustomEvent<IPopoverToggleEventData>) => {
          this._onPopoverToggle(e);
        }}
        role="dialog"
        aria-modal="false"
        aria-labelledby="title">
        <forge-toolbar>
          ${title}
        </forge-toolbar>
        <div class="container">         
          ${message}
          ${buttonToggleGroup}
        </div>
        <forge-toolbar inverted>
          <div slot="end">
            ${primaryButton}
          </div>
        </forge-toolbar>
        </div>
      </forge-popover>
    `;
  }

  private _onAction(e: CustomEvent<ThemeType>): void {
    this.value = e.detail;
    this._setLocalStorage(this.value);
    this._emitThemeChangeEvent(e.detail);
  }

  private _onPopoverToggle(e: CustomEvent<IPopoverToggleEventData>): void {
    const { newState } = e.detail;
    if (newState === 'open') {
      this.open = true;
    } else {
      this.open = false;
    }
  }

  private _onClose(): void {
    this.open = false;
  }

  private _emitThemeChangeEvent(newValue: ThemeType): void {
    const event = new CustomEvent('forge-theme-toggle-theme', {
      bubbles: true,
      detail: newValue
    });
    this.dispatchEvent(event);
  }

  private _manageLocalStorage(): void {
    const currentTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as ThemeType;
    if (!currentTheme) {
      console.log('no theme set');
      localStorage.setItem(LOCAL_STORAGE_KEY, this.value);
      return;
    }
    this._setLocalStorage(currentTheme);
    this.value = currentTheme;
    this._emitThemeChangeEvent(currentTheme);
  }

  private _setLocalStorage(value: string): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, value);
  }
}
