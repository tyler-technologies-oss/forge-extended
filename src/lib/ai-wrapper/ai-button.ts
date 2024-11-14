import { defineIconButtonComponent, defineIconComponent, defineTooltipComponent, IconRegistry } from '@tylertech/forge';
import { customElement, property } from 'lit/decorators.js';
import { tylIconSparkles } from '@tylertech/tyler-icons/extended';

import styles from './ai-button.scss?inline';
import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { AiWrapperElement } from './ai-wrapper';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-button': AiButtonElement;
  }

  // TODO - any type
  interface HTMLElementEventMap {
    'forge-ai-button-clicked': CustomEvent<any>;
  }
}

@customElement('forge-ai-button')
export class AiButtonElement extends LitElement {
  constructor() {
    super();
  }

  static {
    defineIconButtonComponent();
    defineIconComponent();
    defineTooltipComponent();
    IconRegistry.define([tylIconSparkles]);
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the theme-toggle is open.
   */
  @property({ type: Boolean, reflect: true })
  public open = false;

  @property({ type: String, attribute: 'dialog-trigger-id' })
  public dialogTriggerId = 'forge-ai-open-dialog';

  public override render(): TemplateResult {
    return html`
      <forge-icon-button aria-labelledby="ai-button-tooltip" @click=${this._onClick} id=${this.id}>
        <forge-icon name="sparkles"></forge-icon>
        <forge-tooltip>
          <slot name="tooltip-text" id="ai-button-tooltip">Launch the AI assistant</slot>
        </forge-tooltip>
      </forge-icon-button>
    `;
  }

  private _onClick(): void {
    const dialog = document.querySelector(`#${this.dialogTriggerId}`) as AiWrapperElement;
    if (dialog) {
      dialog.open = !dialog.open;
      return;
    } else {
      console.error(`Could not find dialog with id: ${this.dialogTriggerId}`);
    }
  }
}
