import { LitElement, TemplateResult, html, unsafeCSS, nothing } from 'lit';
import { customElement, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import '../ai-icon/ai-icon';

import styles from './ai-chat-interface.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-chat-interface': AiChatInterfaceComponent;
  }
}

export const AiChatInterfaceComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-chat-interface';

/**
 * @tag forge-ai-chat-interface
 *
 * @slot - Default slot for messages
 * @slot suggestions - Slot for AI suggestions component
 */
@customElement(AiChatInterfaceComponentTagName)
export class AiChatInterfaceComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @queryAssignedNodes({ slot: 'suggestions', flatten: true })
  private _slottedSuggestionsNodes!: Node[];

  readonly #headerStart = html`
    <div class="start">
      <forge-ai-icon></forge-ai-icon>
      <h1>AI Assistant</h1>
    </div>
  `;

  readonly #headerEnd = html`
    <div class="end">
      <button aria-label="More info" class="forge-icon-button forge-icon-button--large ai-icon-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8" />
        </svg>
      </button>
      <button aria-label="Switch to full screen" class="forge-icon-button forge-icon-button--large ai-icon-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5 5h5v2H7v3H5zm9 0h5v5h-2V7h-3zm3 9h2v5h-5v-2h3zm-7 3v2H5v-5h2v3z" />
        </svg>
      </button>
      <button aria-label="Minimize chat window" class="forge-icon-button forge-icon-button--large ai-icon-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M6 19h12v2H6z" />
        </svg>
      </button>
    </div>
  `;

  readonly #header = html`
    <div class="header forge-toolbar forge-toolbar--no-divider">${this.#headerStart} ${this.#headerEnd}</div>
  `;

  readonly #suggestionsSlot = html`<slot name="suggestions" @slotchange=${this.#handleSlotChange}></slot>`;

  get #suggestions(): TemplateResult | typeof nothing {
    const hasSuggestions = this._slottedSuggestionsNodes.length > 0;
    return when(
      hasSuggestions,
      () => html`<div class="suggestions-container">${this.#suggestionsSlot}</div>`,
      () => this.#suggestionsSlot
    );
  }

  readonly #messagesContainer = html`
    <div class="messages-container">
      <slot></slot>
    </div>
  `;

  readonly #inputActions = html`
    <div class="actions">
      <button aria-label="Add file" class="forge-icon-button forge-icon-button--large ai-icon-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
        </svg>
      </button>
      <button aria-label="Record audio" class="forge-icon-button forge-icon-button--large ai-icon-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5 5 5 0 0 0 5-5z" />
        </svg>
      </button>
    </div>
  `;

  readonly #inputContainer = html`
    <div class="input-container">
      <div class="forge-card">
        <div class="forge-field">
          <input type="text" id="chat-input" placeholder="Ask a question..." />
          <button
            aria-label="Send message"
            class="forge-icon-button forge-icon-button--large ai-icon-button ai-icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="m2 21 21-9L2 3v7l15 2-15 2z" />
            </svg>
          </button>
        </div>
        <hr class="forge-divider" />
        ${this.#inputActions}
      </div>
    </div>
  `;

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (slotName === 'suggestions') {
      this.requestUpdate();
    }
  }

  public override render(): TemplateResult {
    return html`
      <div class="ai-chat-interface">
        ${this.#header} ${this.#messagesContainer} ${this.#suggestions} ${this.#inputContainer}
      </div>
    `;
  }
}
