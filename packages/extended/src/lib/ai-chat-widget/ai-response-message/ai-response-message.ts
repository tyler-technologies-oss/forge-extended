import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../ai-actions-toolbar/ai-actions-toolbar';

import styles from './ai-response-message.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-response-message': AiResponseMessageComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-response-message-action': CustomEvent<AiResponseMessageActionEventData>;
  }
}

export type AiResponseMessageActionType = 'refresh' | 'copy' | 'thumbs-up' | 'thumbs-down';

export interface AiResponseMessageActionEventData {
  action: AiResponseMessageActionType;
}

export const AiResponseMessageComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-response-message';

/**
 * @tag forge-ai-response-message
 *
 * @event {CustomEvent<AiResponseMessageActionEventData>} forge-ai-response-message-action - Fired when an action button is clicked.
 */
@customElement(AiResponseMessageComponentTagName)
export class AiResponseMessageComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  readonly #messageContainer = html`
    <div class="ai-message-container">
      <span>
        <slot></slot>
      </span>
    </div>
  `;

  readonly #actionsToolbar = html`
    <forge-ai-actions-toolbar @forge-ai-actions-toolbar-action=${this._handleToolbarAction}></forge-ai-actions-toolbar>
  `;

  private _handleToolbarAction(event: CustomEvent<{ action: AiResponseMessageActionType }>): void {
    this._emitActionEvent(event.detail.action);
  }

  private _emitActionEvent(action: AiResponseMessageActionType): void {
    const event = new CustomEvent<AiResponseMessageActionEventData>('forge-ai-response-message-action', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { action }
    });
    this.dispatchEvent(event);
  }

  public override render(): TemplateResult {
    return html` <div class="grid-container">${this.#messageContainer} ${this.#actionsToolbar}</div> `;
  }
}
