import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './ai-reasoning.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-reasoning': AiReasoningComponent;
  }
}

export const AiReasoningComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-reasoning';

/**
 * @tag forge-ai-reasoning
 */
@customElement(AiReasoningComponentTagName)
export class AiReasoningComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`
      <div class="reasoning">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
