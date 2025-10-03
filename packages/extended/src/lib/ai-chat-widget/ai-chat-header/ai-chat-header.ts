import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import '../ai-icon/ai-icon';

import styles from './ai-chat-header.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-chat-header': AiChatHeaderComponent;
  }
}

export const AiChatHeaderComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-chat-header';

declare global {
  interface HTMLElementEventMap {
    'forge-ai-chat-header-expand': CustomEvent<void>;
    'forge-ai-chat-header-minimize': CustomEvent<void>;
  }
}

/**
 * @tag forge-ai-chat-header
 *
 * @slot title - Slot for custom title text (default: "AI Assistant")
 *
 * @fires forge-ai-chat-header-expand - Fired when the expand button is clicked
 * @fires forge-ai-chat-header-minimize - Fired when the minimize button is clicked
 */
@customElement(AiChatHeaderComponentTagName)
export class AiChatHeaderComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * Controls whether the expand button is visible
   */
  @property({ type: Boolean, attribute: 'show-expand-button' })
  public showExpandButton = false;

  /**
   * Controls whether the minimize button is visible
   */
  @property({ type: Boolean, attribute: 'show-minimize-button' })
  public showMinimizeButton = false;

  /**
   * Indicates the current expanded state for displaying the appropriate expand/collapse icon
   */
  @property({ type: Boolean })
  public expanded = false;

  public override render(): TemplateResult {
    return html`
      <div class="header forge-toolbar forge-toolbar--no-divider">
        <div class="start">
          <forge-ai-icon></forge-ai-icon>
          <slot name="title">
            <h1>AI Assistant</h1>
          </slot>
        </div>
        <div class="end">
          <button aria-label="More info" class="forge-icon-button forge-icon-button--large ai-icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8" />
            </svg>
          </button>
          ${when(
            this.showExpandButton,
            () => html`
              <button
                @click=${this.#handleExpandClick}
                aria-label=${this.expanded ? 'Collapse chat window' : 'Expand chat window'}
                class="forge-icon-button forge-icon-button--large ai-icon-button">
                ${when(
                  this.expanded,
                  () => html`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M14 14h5v2h-3v3h-2zm-9 0h5v5H8v-3H5zm3-9h2v5H5V8h3zm11 3v2h-5V5h2v3z" />
                    </svg>
                  `,
                  () => html`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M5 5h5v2H7v3H5zm9 0h5v5h-2V7h-3zm3 9h2v5h-5v-2h3zm-7 3v2H5v-5h2v3z" />
                    </svg>
                  `
                )}
              </button>
            `
          )}
          ${when(
            this.showMinimizeButton,
            () => html`
              <button
                @click=${this.#handleMinimizeClick}
                aria-label="Minimize chat window"
                class="forge-icon-button forge-icon-button--large ai-icon-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M6 19h12v2H6z" />
                </svg>
              </button>
            `
          )}
        </div>
      </div>
    `;
  }

  #handleExpandClick(): void {
    const event = new CustomEvent('forge-ai-chat-header-expand', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  #handleMinimizeClick(): void {
    const event = new CustomEvent('forge-ai-chat-header-minimize', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}
