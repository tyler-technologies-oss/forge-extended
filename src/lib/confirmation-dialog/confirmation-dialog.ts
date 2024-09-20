import { defineButtonComponent, defineDialogComponent } from '@tylertech/forge';
import { customElement, property, state } from 'lit/decorators.js';

import styles from './confirmation-dialog.scss?inline';
import { html, LitElement, nothing, TemplateResult, unsafeCSS } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'forge-confirmation-dialog': ConfirmationDialogElement;
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

@customElement('forge-confirmation-dialog')
export class ConfirmationDialogElement extends LitElement {
  static {
    defineButtonComponent();
    defineDialogComponent();
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the confirmation dialog is open.
   */
  @property({ type: Boolean, reflect: true })
  public open = false;

  /**
   * Indicates whether the confirmation dialog in a busy state
   */

  @property({ type: Boolean, attribute: 'is-busy' })
  public isBusy = false;

  /**
   * Indicates whether the title is displayed.
   */
  @property({ type: Boolean, reflect: true, attribute: 'show-title' })
  public showTitleText = true;

  /**
   * The title text to display.
   */
  @property({ attribute: 'title-text' })
  public titleText?: string;

  /**
   * The message to display.
   */
  @property({ attribute: 'message' })
  public message?: string;

  /**
   * Indicates whether the secondary action button is displayed.
   */
  @property({ type: Boolean, reflect: true, attribute: 'show-secondary-button' })
  public showSecondaryButton = true;

  /**
   * The secondary action button text to display.
   */
  @property({ attribute: 'secondary-button-text' })
  public secondaryButtonText?: string;

  /**
   * The primary action button text to display.
   */
  @property({ attribute: 'primary-button-text' })
  public primaryButtonText?: string;

  public override render(): TemplateResult {
    const title = this.showTitleText
      ? html`<h1 id="title" class="title">${this.titleText}</h1>`
      : html`<h1 id="title" class="sr-only">Confirmation</h1>`;

    const message = !!this.message?.trim() ? html`<p id="message" class="message">${this.message}</p>` : nothing;

    const busyIndicator = this.isBusy
      ? html`<forge-circular-progress slot="end" aria-label="Loading"> </forge-circular-progress>`
      : nothing;

    const secondaryButton = this.showSecondaryButton
      ? html`<forge-button
          ?disabled=${this.isBusy}
          variant="outlined"
          id="secondary-button"
          @click=${() => this._onAction(false)}>
          <slot name="cancel-text">${this.secondaryButtonText}</slot>
        </forge-button>`
      : nothing;

    const primaryButton = this.primaryButtonText
      ? html`<forge-button
          ?disabled=${this.isBusy}
          variant="raised"
          id="primary-button"
          @click=${() => this._onAction(true)}>
          <slot name="primary-text">${this.primaryButtonText}</slot>
          ${busyIndicator}
        </forge-button>`
      : nothing;

    return html`
      <forge-dialog
        ?open=${this.open}
        @forge-dialog-close=${() => this._resetState()}
        aria-labelledby=${this.titleText ? 'title' : nothing}
        aria-describedby="message">
        <div class="container">
          ${title} ${message}
          <div class="actions-container">${secondaryButton} ${primaryButton}</div>
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
