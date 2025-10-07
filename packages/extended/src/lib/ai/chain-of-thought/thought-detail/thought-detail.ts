import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './thought-detail.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-thought-detail': ThoughtDetailComponent;
  }
}

export const ThoughtDetailComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-thought-detail';

/**
 * @tag forge-ai-thought-detail
 */
@customElement(ThoughtDetailComponentTagName)
export class ThoughtDetailComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** The step number for this thought detail */
  @property({ type: Number })
  public step?: number;

  public override render(): TemplateResult {
    return html`
      <div class="thought-detail-container">
        <div class="title-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon forge-icon">
            <path d="M12 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4" />
          </svg>
          <span class="title"><slot name="title"></slot></span>
        </div>
        <div class="content-container">
          <div class="vertical-line"></div>
          <div class="detail-container">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
