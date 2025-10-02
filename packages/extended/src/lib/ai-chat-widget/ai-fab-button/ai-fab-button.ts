import { IconRegistry } from '@tylertech/forge';
import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tylIconSparkles } from '@tylertech/tyler-icons';
import '../ai-icon';

import styles from './ai-fab-button.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-fab-button': AiFabButtonComponent;
  }
}

export const AiFabButtonComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-fab-button';

/**
 * @tag forge-ai-fab-button
 */
@customElement(AiFabButtonComponentTagName)
export class AiFabButtonComponent extends LitElement {
  static {
    IconRegistry.define([tylIconSparkles]);
  }

  public static override styles = unsafeCSS(styles);

  /** Whether the button is disabled */
  @property({ type: Boolean, reflect: true })
  public disabled = false;

  /** Whether the button is extended */
  @property({ type: Boolean, reflect: true })
  public extended = false;

  public override render(): TemplateResult {
    return html`
      <button
        aria-label="Floating Action Button Demo"
        class="forge-fab ai-fab-button ${this.extended ? 'forge-fab--extended' : ''}"
        .disabled=${this.disabled}>
        <forge-ai-icon></forge-ai-icon>
        ${this.extended ? html`<slot></slot>` : ''}
      </button>
    `;
  }
}
