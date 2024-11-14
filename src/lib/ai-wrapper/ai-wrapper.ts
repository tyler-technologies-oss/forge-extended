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
import { tylIconClose, tylIconSend } from '@tylertech/tyler-icons/standard';
import { tylIconSparkles, tylIconArrowExpandAll } from '@tylertech/tyler-icons/extended';

import styles from './ai-wrapper.scss?inline';
import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-wrapper': AiWrapperElement;
  }
}

@customElement('forge-ai-wrapper')
export class AiWrapperElement extends LitElement {
  constructor() {
    super();
  }

  static {
    defineIconButtonComponent();
    defineButtonComponent();
    defineToolbarComponent();
    defineIconComponent();
    defineTooltipComponent();
    defineDialogComponent();
    defineTextFieldComponent();
    IconRegistry.define([tylIconSparkles, tylIconClose, tylIconSend, tylIconArrowExpandAll]);
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the dialog is open.
   */
  @property({ type: Boolean, reflect: true })
  public open = false;

  /**
   * Indicates whether the component is in its full size state.
   */
  @property({ type: Boolean, reflect: true })
  public fullsize = false;

  /**
   * Indicates whether the component is in its full size state.
   */
  @property({ type: Array, reflect: true })
  public messagesSent = false;

  private get _header(): TemplateResult {
    return html`
      <forge-toolbar no-border class="dialog-header">
        <div slot="title">This is the title</div>
        <div slot="end" class="inline-stack">
          <forge-icon-button @click=${this._onFullSizeToggle}>
            <forge-icon name="arrow_expand_all"></forge-icon>
          </forge-icon-button>
          <forge-icon-button @click=${this._onClose}>
            <forge-icon name="close"></forge-icon>
            <forge-tooltip>
              <slot name="tooltip-text" id="ai-wrapper-tooltip">Close the modal</slot>
            </forge-tooltip>
          </forge-icon-button>
        </div>
      </forge-toolbar>
    `;
  }

  private get _inputContainer(): TemplateResult {
    return html`
      <div class="input-container">
        <forge-text-field>
          <label>Label</label>
          <input type="text" />
        </forge-text-field>
        <forge-icon-button>
          <forge-icon name="send"></forge-icon>
        </forge-icon-button>
      </div>
    `;
  }

  public override render(): TemplateResult {
    return html`
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
          ${this._header}
          <div class="container-inner">
            <slot name="content">This is the content slot</slot>
          </div>
          ${this._inputContainer}
        </div>
      </forge-dialog>
    `;
  }

  private _resetState(): void {
    // Do state related resets here
  }

  private _onFullSizeToggle(): void {
    this.fullsize = !this.fullsize;
  }

  private _onOpen(): void {
    this.open = true;
  }

  private _onClose(): void {
    this.open = false;
  }
}
