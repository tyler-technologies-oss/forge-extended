import { html, LitElement, PropertyValues, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styles from './ai-modal.scss?inline';

/**
 * @tag forge-ai-modal
 */
@customElement('forge-ai-modal')
export class AiModalComponent extends LitElement {
  public static readonly styles = unsafeCSS(styles);

  @query('dialog')
  private _dialog!: HTMLDialogElement;

  /**
   * Controls whether the modal is open or closed.
   */
  @property({ type: Boolean, reflect: true })
  public open = false;

  /**
   * Controls whether the modal is displayed in fullscreen mode.
   */
  @property({ type: Boolean, reflect: true })
  public fullscreen = false;

  public render(): TemplateResult {
    const classes = {
      'forge-dialog': true,
      'forge-dialog--fullscreen': this.fullscreen
    };
    return html`
      <dialog
        class=${classMap(classes)}
        aria-labelledby="chat-interface-title"
        @close=${this.#handleDialogClose}
        @click=${this.#handleDialogClick}>
        <slot></slot>
      </dialog>
    `;
  }

  public override updated(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('open')) {
      if (this.open) {
        this._dialog?.showModal();
        this.dispatchEvent(new CustomEvent('forge-ai-modal-open', { bubbles: true, composed: true }));
      } else {
        this._dialog?.close();
        this.dispatchEvent(new CustomEvent('forge-ai-modal-close', { bubbles: true, composed: true }));
      }
    }
  }

  #handleDialogClose(): void {
    this.open = false;
  }

  #handleDialogClick(event: MouseEvent): void {
    // Close modal when clicking on the backdrop (the dialog element itself)
    if (event.target === this._dialog) {
      this.close();
    }
  }

  /**
   * Shows the modal dialog.
   */
  public show(): void {
    this.open = true;
  }

  /**
   * Closes the modal dialog.
   */
  public close(): void {
    this.open = false;
  }
}
