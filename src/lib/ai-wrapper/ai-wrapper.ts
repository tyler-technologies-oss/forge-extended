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
import { customElement, property, state } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { tylIconClose, tylIconSend } from '@tylertech/tyler-icons/standard';
import { tylIconSparkles, tylIconArrowExpandAll } from '@tylertech/tyler-icons/extended';

import styles from './ai-wrapper.scss?inline';
import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-wrapper': AiWrapperElement;
  }
}

interface IMessage {
  id: number;
  message: string;
  timestamp: string;
}

interface IResponse extends IMessage {
  originId: number;
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

  @state()
  private _message = '';

  @state()
  protected _messages = [] as IMessage[];

  @state()
  protected _responses = [] as IResponse[];

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

  private get _input(): TemplateResult {
    return html`
      <div class="input-container">
        <forge-text-field>
          <label for="forge-ai-wrapper-input">Label</label>
          <input
            autofocus
            id="forge-ai-wrapper-input"
            type="text"
            .value=${this._message}
            @change=${this._onInputChange}
            @keyup=${this._onSubmit} />
        </forge-text-field>
        <forge-icon-button @click=${this._addMessage}>
          <forge-icon name="send"></forge-icon>
        </forge-icon-button>
      </div>
    `;
  }

  private _messageInput = createRef<HTMLInputElement>();

  public override render(): TemplateResult {
    return html`
      <forge-dialog
        fullscreen-threshold="0"
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
            <div class="messages-container">
              ${this._messages.map(message => html` <div class="message">${message.message}</div> `)}
              ${this._responses.map(
                response => html`
                  <div class="response">
                    <forge-icon name="sparkles"></forge-icon>
                    <div>${response.message}</div>
                  </div>
                `
              )}
            </div>
          </div>
          ${this._input}
        </div>
      </forge-dialog>
    `;
  }

  private _resetState(): void {
    // Do state related resets here
  }

  private _onFullSizeToggle(): void {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        this.fullsize = !this.fullsize;
      });
    } else {
      this.fullsize = !this.fullsize;
    }
  }

  private _onClose(): void {
    this.open = false;
  }

  private _onInputChange(e: Event): void {
    this._message = (e.target as HTMLInputElement).value;
  }

  private _onSubmit(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this._addMessage();
    }
  }

  private _addMessage(): void {
    if (this._message.length) {
      this._messages = [
        ...this._messages,
        {
          id: this._messages.length + 1,
          message: this._message,
          timestamp: new Date().toLocaleTimeString()
        }
      ];
    }
    this._message = '';
    this._addResponse();
  }

  private _addResponse(): void {
    setTimeout(() => {
      this._responses = [
        ...this._responses,
        {
          id: this._responses.length + 1,
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          timestamp: new Date().toLocaleTimeString(),
          originId: this._messages[this._messages.length - 1].id
        }
      ];
    }, 500);
  }
}
