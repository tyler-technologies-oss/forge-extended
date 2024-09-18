import { defineButtonComponent } from '@tylertech/forge';
import { customElement, property } from 'lit/decorators.js';

import styles from './confirmation-dialog.scss?inline';
import { html, LitElement, nothing, TemplateResult, unsafeCSS } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'forge-confirmation-dialog': ConfirmationDialogElement;
  }

  interface HTMLElementEventMap {
    'forge-busy-indicator-cancel': CustomEvent<void>;
  }
}

@customElement('forge-confirmation-dialog')
export class ConfirmationDialogElement extends LitElement {
  static {
    defineButtonComponent();
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the confirmation dialog is open.
   */
  @property({ type: Boolean, reflect: true })
  public open = false;

  /**
   * The title text to display.
   */
  @property({ attribute: 'titleText' })
  public titleText?: string;

  /**
   * The message to display.
   */
  @property({ attribute: 'message' })
  public message?: string;

  /**
   * Indicates whether the secondary action button is displayed.
   */
  @property({ type: Boolean, reflect: true, attribute: 'secondary-action-button' })
  public showSecondaryActionButton = false;

  /**
   * The secondary action button text to display.
   */
  @property({ attribute: 'secondary-button-text' })
  public secondaryActionButtonText?: string;

  /**
   * The secondary action button text to display.
   */
  @property({ attribute: 'primary-button-text' })
  public primaryActionButtonText?: string;

  public override render(): TemplateResult {
    const title = this.titleText ? html`<h1 id="title" class="title" part="title">${this.titleText}</h1>` : nothing;

    const message = !!this.message?.trim()
      ? html`<p id="message" class="message" part="message">${this.message}</p>`
      : nothing;

    const secondaryActionButton = this.showSecondaryActionButton
      ? html`<forge-button class="cancel-button" part="cancel-button" variant="outlined" @click=${this._onCancel}>
          <slot name="cancel-text">${this.secondaryActionButtonText}</slot>
        </forge-button>`
      : nothing;

    const primaryActionButton = this.primaryActionButtonText
      ? html`<forge-button class="primary-button" part="primary-button" variant="raised" @click=${this._onCancel}>
          <slot name="primary-text">${this.primaryActionButtonText}</slot>
        </forge-button>`
      : nothing;

    return html`
        <div class="container" part="container">
          ${title}
          ${message}
          <div class="actions-container" part-"actions-container">
            ${secondaryActionButton}
            ${primaryActionButton}
          </div>
        </div>
    `;
  }

  private _onCancel(): void {
    console.log('cancel');

    // const event = new CustomEvent('forge-busy-indicator-cancel', { bubbles: true, cancelable: true });
    // this.dispatchEvent(event);
    // if (!event.defaultPrevented) {
    //   this.open = false;
    // }
  }
}
