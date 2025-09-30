import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './ai-icon.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-icon': AiIconComponent;
  }
}

export const AiIconComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-icon';

/**
 * @tag forge-ai-icon
 */
@customElement(AiIconComponentTagName)
export class AiIconComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`
      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.375 10.625L15 12.5L9.375 14.375L7.5 20L5.625 14.375L0 12.5L5.625 10.625L7.5 5L9.375 10.625ZM16.25 3.75L20 5L16.25 6.25L15 10L13.75 6.25L10 5L13.75 3.75L15 0L16.25 3.75Z" />
      </svg>
    `;
  }
}
