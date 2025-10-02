import { IconRegistry } from '@tylertech/forge';
import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tylIconSparkles } from '@tylertech/tyler-icons';
import '../ai-icon';

import styles from './ai-button.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-button': AiButtonComponent;
  }
}

export const AiButtonComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-button';

/**
 * @tag forge-ai-button
 */
@customElement(AiButtonComponentTagName)
export class AiButtonComponent extends LitElement {
  static {
    IconRegistry.define([tylIconSparkles]);
  }

  public static override styles = unsafeCSS(styles);

  /** Whether the button is disabled */
  @property({ type: Boolean, reflect: true })
  public disabled = false;

  public override render(): TemplateResult {
    return html`
      <button class="forge-button forge-button--outlined ai-button" .disabled=${this.disabled} variant="outlined">
        <forge-ai-icon></forge-ai-icon>
        <slot></slot>
      </button>
    `;
  }
}
