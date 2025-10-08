import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './ai-artifact.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-artifact': AiArtifactComponent;
  }
}

export const AiArtifactComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-artifact';

/**
 * @tag forge-ai-artifact
 */
@customElement(AiArtifactComponentTagName)
export class AiArtifactComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`
      <div class="artifact">
        <div class="forge-toolbar">
          <div class="forge-toolbar__start">
            <slot name="start"></slot>
          </div>
          <div class="forge-toolbar__end">
            <slot name="end"></slot>
          </div>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
