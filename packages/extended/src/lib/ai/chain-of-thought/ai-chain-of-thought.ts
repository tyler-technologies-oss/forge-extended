import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../ai-reasoning-header/ai-reasoning-header';

import styles from './ai-chain-of-thought.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-chain-of-thought': AiChainOfThoughtComponent;
  }
}

export const AiChainOfThoughtComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-chain-of-thought';

/**
 * @tag forge-ai-chain-of-thought
 */
@customElement(AiChainOfThoughtComponentTagName)
export class AiChainOfThoughtComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Whether the chain of thought is expanded */
  @property({ type: Boolean, reflect: true })
  public expanded = false;

  /** Title for the chain of thought section */
  @property({ type: String })
  public title = 'Chain of Thought';

  public override render(): TemplateResult {
    return html`
      <forge-ai-reasoning-header .expanded=${this.expanded} @toggle=${this._handleHeaderToggle}>
        <span slot="title">${this.title}</span>
      </forge-ai-reasoning-header>
      <div
        class="forge-expansion-panel thought-content-container ${this.expanded ? 'forge-expansion-panel--open' : ''}">
        <div class="forge-expansion-panel__content " id="chain-content" aria-hidden=${!this.expanded}>
          <slot></slot>
        </div>
      </div>
    `;
  }

  private _handleHeaderToggle(event: CustomEvent): void {
    this.expanded = event.detail.expanded;
  }
}
