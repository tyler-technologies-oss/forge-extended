import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './ai-message.scss?inline';
import { IconRegistry } from '@tylertech/forge';
import { tylIconContentCopy, tylIconRefresh, tylIconThumbDown, tylIconThumbUp } from '@tylertech/tyler-icons';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-message': AiMessageComponent;
  }
}

export const AiMessageComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-message';

export type MessageType = 'response' | 'user';

/**
 * @tag forge-ai-message
 */
@customElement(AiMessageComponentTagName)
export class AiMessageComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  static {
    IconRegistry.define([tylIconRefresh, tylIconContentCopy, tylIconThumbUp, tylIconThumbDown]);
  }

  /** The type of message: response or user */
  @property({ type: String })
  public messageType: MessageType = 'response';

  public override render(): TemplateResult {
    return html`
      <div class="grid-container">
        <div class="ai-message-container ${this.messageType === 'response' ? 'response' : ''}">
          <span>
            <slot></slot>
          </span>
        </div>
        <div class="actions-toolbar">
          <button aria-label="Refresh" class="forge-icon-button forge-icon-button--small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 0 0-8 8 8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6 6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z" />
            </svg>
          </button>
          <button aria-label="Copy content" class="forge-icon-button forge-icon-button--small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12z" />
            </svg>
          </button>
          <button aria-label="Thumbs up" class="forge-icon-button forge-icon-button--small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32 0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z" />
            </svg>
          </button>
          <button aria-label="Thumbs down" class="forge-icon-button forge-icon-button--small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M19 15h4V3h-4m-4 0H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2a2 2 0 0 0 2 2h6.31l-.95 4.57c-.02.1-.03.2-.03.31 0 .42.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2" />
            </svg>
          </button>
        </div>
      </div>
    `;
  }
}
