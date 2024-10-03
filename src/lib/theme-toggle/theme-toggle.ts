import {
  defineButtonComponent,
  defineButtonToggleComponent,
  defineButtonToggleGroupComponent,
  defineIconButtonComponent,
  defineIconComponent,
  definePopoverComponent,
  defineToolbarComponent,
  IconRegistry,
  IPopoverToggleEventData
} from '@tylertech/forge';
import { customElement, property } from 'lit/decorators.js';
import { tylIconWbSunny, tylIconSettingsBrightness } from '@tylertech/tyler-icons/standard';
import { tylIconMoonWaningCrescent } from '@tylertech/tyler-icons/extended';

import styles from './theme-toggle.scss?inline';
import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';

declare global {
  const _THEME_TYPES: 'light' | 'dark' | 'system';

  interface HTMLElementTagNameMap {
    'forge-theme-toggle': ThemeToggleElement;
  }

  interface HTMLElementEventMap {
    'forge-theme-toggle-theme': CustomEvent<void>;
  }

  interface IThemeToggleChange extends CustomEvent {
    detail: {
      theme: typeof _THEME_TYPES;
    };
  }
}

@customElement('forge-theme-toggle')
export class ThemeToggleElement extends LitElement {
  static {
    defineIconButtonComponent();
    defineButtonComponent();
    defineToolbarComponent();
    definePopoverComponent();
    defineIconComponent();
    defineButtonToggleComponent();
    defineButtonToggleGroupComponent();
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
   * Current theme that is set
   */
  @property({ type: String, attribute: 'theme-type' })
  public themeType = 'light';

  /**
   * The title text to display.
   */
  @property({ type: String, attribute: 'title-text' })
  public titleText = 'Display theme';

  /**
   * The message to display.
   */
  @property({ type: String, attribute: 'message' })
  public message = 'Choose what theme you would like to use for this application.';

  /**
   * The primary action button text to display.
   */
  @property({ type: String, attribute: 'primary-button-text' })
  public primaryButtonText = 'Close';

  public override render(): TemplateResult {
    const iconButton = html`
      <forge-icon-button aria-label=${this.titleText} id=${this.anchor}>
        <forge-icon name="wb_sunny"></forge-icon>
      </forge-icon-button>
    `;
    const title = html`
      <h1 id="title" class="title" slot="start">
        <slot name="title"> ${this.titleText} </slot>
      </h1>
    `;

    const message = html`
      <p id="message" class="message">
        <slot name="message"> ${this.message} </slot>
      </p>
    `;

    const buttonToggleGroup = html`
      <forge-button-toggle-group
        aria-label="Choose communication type"
        @forge-button-toggle-group-change=${(e: IThemeToggleChange) => this._onAction(e)}>
        <forge-button-toggle value="light">
          <div class="toggle-type-container">
            <forge-icon name="wb_sunny"></forge-icon>
            <slot name="light-toggle-text">
              <span>Light</span>
            </slot>
          </div>
        </forge-button-toggle>
        <forge-button-toggle value="dark">
          <div class="toggle-type-container">
            <forge-icon name="moon_waning_crescent"></forge-icon>
            <slot name="dark-toggle-text">
              <span>Dark</span>
            </slot>
          </div>
        </forge-button-toggle>
        <forge-button-toggle value="automatic">
          <div class="toggle-type-container">
            <forge-icon name="settings_brightness"></forge-icon>
            <slot name="automatic-toggle-text">
              <span>Automatic</span>
            </slot>
          </div>
        </forge-button-toggle>
      </forge-button-toggle-group>
    `;

    const primaryButton = html`
      <forge-button variant="raised" id="primary-button" @click=${this._onClose}>
        <slot name="primary-button-text">${this.primaryButtonText}</slot>
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
          <div slot="end">${primaryButton}</div>
        </forge-toolbar>
        </div>
      </forge-popover>
    `;
  }

  private _onAction(e: IThemeToggleChange): void {
    const themeSelected = e.detail;
    const event = new CustomEvent('forge-theme-toggle-toggled', {
      bubbles: true,
      cancelable: true,
      detail: { theme: themeSelected }
    });
    this.dispatchEvent(event);
  }

  private _onPopoverToggle(e: CustomEvent<IPopoverToggleEventData>): void {
    let { newState } = e.detail;
    newState === 'open' ? (this.open = true) : (this.open = false);
  }

  private _onClose(): void {
    this.open = false;
  }
}
