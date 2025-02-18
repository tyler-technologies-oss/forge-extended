import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './confirmation-dialog.scss?inline';
import { defineButtonComponent, defineCircularProgressComponent, defineDialogComponent } from '@tylertech/forge';

declare global {
  interface HTMLElementTagNameMap {
    'forge-confirmation-dialog': ConfirmationDialogComponent;
  }

  interface HTMLElementEventMap {
    'forge-confirmation-dialog-action': CustomEvent<void>;
  }

  interface IConfirmationDialogAction extends CustomEvent {
    detail: {
      primaryAction: boolean;
    };
  }
}

export const ConfirmationDialogComponentTagName: keyof HTMLElementTagNameMap = 'forge-confirmation-dialog';

/**
 * @tag forge-confirmation-dialog
 */
@customElement(ConfirmationDialogComponentTagName)
export class ConfirmationDialogComponent extends LitElement {
  static {
    defineButtonComponent();
    defineDialogComponent();
    defineCircularProgressComponent();
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the confirmation dialog is open.
   */
  @property({ type: Boolean, attribute: 'open' })
  public open = false;

  /**
   * Indicates whether the confirmation dialog in a busy state
   */
  @property({ type: Boolean, attribute: 'is-busy' })
  public isBusy = false;

  public override render(): TemplateResult {
    const busyIndicator = this.isBusy
      ? html`<forge-circular-progress slot="end" aria-label="Loading"> </forge-circular-progress>`
      : nothing;

    const primaryButton = html`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      @click=${() => this._onAction(true)}>
      <slot name="primary-button-text"></slot>
      ${busyIndicator}
    </forge-button>`;

    return html`
      <forge-dialog
        ?open=${this.open}
        @forge-dialog-close=${() => this._resetState()}
        aria-labelledby="confirmation-dialog-title"
        aria-describedby="confirmation-message">
        <div class="container">
          <slot name="title" id="confirmation-dialog-title" class="title"></slot>
          <slot name="message" id="confirmation-message" class="message"></slot>
          <div class="actions-container">
            <slot name="secondary-action" @click=${() => this._onAction(false)}></slot>
            ${primaryButton}
          </div>
        </div>
      </forge-dialog>
    `;
  }

  private _resetState(): void {
    this.isBusy = false;
  }

  private _onAction(isPrimary: boolean): void {
    const event = new CustomEvent('forge-confirmation-dialog-action', {
      bubbles: true,
      cancelable: true,
      detail: { primaryAction: isPrimary }
    } as IConfirmationDialogAction);
    this.dispatchEvent(event);
  }
}
