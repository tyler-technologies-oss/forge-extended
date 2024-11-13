import {
  defineButtonComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineToolbarComponent,
  defineTooltipComponent,
  defineDialogComponent,
  IconRegistry,
  defineTextFieldComponent
} from '@tylertech/forge';
import { customElement, property } from 'lit/decorators.js';
import { tylIconClose, tylIconInfoOutline, tylIconSend } from '@tylertech/tyler-icons/standard';
import { tylIconSparkles } from '@tylertech/tyler-icons/extended';

import styles from './ai-wrapper.scss?inline';
import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-wrapper': AiWrapperElement;
  }

  interface HTMLElementEventMap {
    'forge-theme-toggle-theme': CustomEvent<ThemeType>;
  }
}

export type ThemeType = 'light' | 'dark' | 'automatic';
const LOCAL_STORAGE_KEY = 'tyler-forge-ai-';

@customElement('forge-ai-wrapper')
export class AiWrapperElement extends LitElement {
  constructor() {
    super();
    this._manageLocalStorage();
  }

  static {
    defineIconButtonComponent();
    defineButtonComponent();
    defineToolbarComponent();
    defineIconComponent();
    defineTooltipComponent();
    defineDialogComponent();
    defineTextFieldComponent();
    IconRegistry.define([tylIconSparkles, tylIconClose, tylIconInfoOutline, tylIconSend]);
  }

  public static override styles = unsafeCSS(styles);

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
    const triggerButton = html`
      <forge-icon-button aria-labelledby="ai-wrapper-tooltip" @click=${this._onOpen}>
        <forge-icon name="sparkles"></forge-icon>
        <forge-tooltip>
          <slot name="tooltip-text" id="ai-wrapper-tooltip">Get help from AI</slot>
        </forge-tooltip>
      </forge-icon-button>
    `;

    const header = html`
      <forge-toolbar no-border class="dialog-header">
        <div slot="title">This is the title</div>
        <div slot="end" class="inline-stack">
          <forge-icon-button>
            <forge-icon name="info_outline" class="icon-color-reset"></forge-icon>
          </forge-icon-button>
          <forge-icon-button @click=${this._onClose}>
            <forge-icon name="close" class="icon-color-reset"></forge-icon>
            <forge-tooltip>
              <slot name="tooltip-text" id="ai-wrapper-tooltip">Close the modal</slot>
            </forge-tooltip>
          </forge-icon-button>
        </div>
      </forge-toolbar>
    `;

    const inputContainer = html`
      <div class="input-container">
        <forge-text-field>
          <label>Label</label>
          <input type="text" />
        </forge-text-field>
        <forge-icon-button>
          <forge-icon name="send" class="icon-color-reset"></forge-icon>
        </forge-icon-button>
      </div>
    `;

    return html`
      ${triggerButton}
      <forge-dialog
        class="dialog"
        animation-type="slide"
        placement="custom"
        ?open=${this.open}
        @forge-dialog-close=${() => this._resetState()}
        role="dialog"
        mode="nonmodal"
        aria-labelledby="title">
        <div class="container">
          ${header}
          <div class="container-inner">AI Stuff here</div>
          ${inputContainer}
        </div>
      </forge-dialog>
    `;
  }

  private _resetState(): void {
    // Do state related resets here
  }

  private _onOpen(): void {
    this.open = true;
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
