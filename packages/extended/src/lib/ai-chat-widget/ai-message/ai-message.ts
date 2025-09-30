import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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

  public override render(): TemplateResult {
    return html`
      <div class="ai-message-container ${this.messageType === 'response' ? 'response' : ''}">
        <span>
          <slot></slot>
        </span>
      </div>
    `;
  }
}
