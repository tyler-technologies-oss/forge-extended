import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import styles from './ai-message.scss?inline';

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

  /** The type of message: response or user */
  @property({ type: String })
  public messageType: MessageType = 'response';

  @query('slot')
  private _slot!: HTMLSlotElement;

  private async _copyContent(): Promise<void> {
    try {
      const assignedNodes = this._slot.assignedNodes();
      const textContent = assignedNodes
        .map(node => node.textContent || '')
        .join('')
        .trim();

      if (textContent) {
        await navigator.clipboard.writeText(textContent);
      }
    } catch (error) {
      console.error('Failed to copy content:', error);
    }
  }

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
          <button
            aria-label="Copy content"
            class="forge-icon-button forge-icon-button--small"
            @click=${this._copyContent}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12z" />
            </svg>
          </button>
          <button aria-label="Thumbs up" class="forge-icon-button forge-icon-button--small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M5 9v12H1V9zm4 12a2 2 0 0 1-2-2V9c0-.55.22-1.05.59-1.41L14.17 1l1.06 1.06c.27.27.44.64.44 1.05l-.03.32L14.69 8H21a2 2 0 0 1 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21zm0-2h9.03L21 12v-2h-8.79l1.13-5.32L9 9.03z" />
            </svg>
          </button>
          <button aria-label="Thumbs down" class="forge-icon-button forge-icon-button--small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M19 15V3h4v12zM15 3a2 2 0 0 1 2 2v10c0 .55-.22 1.05-.59 1.41L9.83 23l-1.06-1.06c-.27-.27-.44-.64-.44-1.06l.03-.31.95-4.57H3a2 2 0 0 1-2-2v-2c0-.26.05-.5.14-.73l3.02-7.05C4.46 3.5 5.17 3 6 3zm0 2H5.97L3 12v2h8.78l-1.13 5.32L15 14.97z" />
            </svg>
          </button>
        </div>
      </div>
    `;
  }
}
