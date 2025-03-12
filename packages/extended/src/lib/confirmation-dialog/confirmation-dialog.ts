import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedNodes, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import styles from './confirmation-dialog.scss?inline';
import { defineButtonComponent, defineCircularProgressComponent, defineDialogComponent } from '@tylertech/forge';

declare global {
  interface HTMLElementTagNameMap {
    'forge-confirmation-dialog': ConfirmationDialogComponent;
  }

  interface HTMLElementEventMap {
    'forge-confirmation-dialog-action': CustomEvent<ConfirmationDialogActionEventData>;
  }
}

export interface ConfirmationDialogActionEventData {
  primaryAction: boolean;
}

export interface ConfirmationDialogProperties {
  open: boolean;
  isBusy: boolean;
  ariaLabelLoading: string;
}

export const ConfirmationDialogComponentTagName: keyof HTMLElementTagNameMap = 'forge-confirmation-dialog';

/**
 * @tag forge-confirmation-dialog
 *
 * @slot title - The title of the dialog
 * @slot message - The dialog message
 * @slot secondary-button-text - The text used in the secondary action button
 * @slot primary-button-text - The text used in the primary action button
 *
 * @event {IConfirmationDialogAction} forge-confirmation-dialog-action - Fired when an action button is clicked. Will contain false if the secondary button is clicked, true if the primary button is clicked.
 */
@customElement(ConfirmationDialogComponentTagName)
export class ConfirmationDialogComponent extends LitElement implements ConfirmationDialogProperties {
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

  /**
   * Aria label of the busy indicator when loading
   */
  @property({ type: String, attribute: 'aria-label-loading' })
  public ariaLabelLoading = 'Loading';

  @queryAssignedNodes({ slot: 'secondary-button-text', flatten: true })
  private _slottedSecondaryButtonTextNodes!: Array<Node>;

  @queryAssignedNodes({ slot: 'title', flatten: true })
  private _slottedTitleNodes!: Array<Node>;

  private get _title(): TemplateResult | typeof nothing {
    const showTitle = this._slottedTitleNodes.length > 0;
    return when(
      showTitle,
      () => html`<h1>${this._titleSlot}</h1>`,
      () => html`${this._titleSlot}`
    );
  }

  private get _titleSlot(): TemplateResult | typeof nothing {
    return html` <slot name="title" id="confirmation-dialog-title" class="title"></slot>`;
  }

  private get _busyIndicator(): TemplateResult | typeof nothing {
    return this.isBusy
      ? html`<forge-circular-progress slot="end" aria-label=${this.ariaLabelLoading}> </forge-circular-progress>`
      : nothing;
  }

  private get _secondaryButtonSlot(): TemplateResult | typeof nothing {
    return html` <slot name="secondary-button-text" id="secondary-button-slot"></slot>`;
  }

  private get _secondaryButton(): TemplateResult | typeof nothing {
    const showSecondaryButton = this._slottedSecondaryButtonTextNodes.length > 0;
    return when(
      showSecondaryButton,
      () =>
        html` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          id="secondary-button"
          @click=${() => this._onAction(false)}>
          ${this._secondaryButtonSlot}
        </forge-button>`,
      () => html`${this._secondaryButtonSlot}`
    );
  }

  private get _primaryButton(): TemplateResult | typeof nothing {
    return html`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      @click=${() => this._onAction(true)}>
      ${when(
        this.isBusy,
        () => this._busyIndicator,
        () => html`<slot name="primary-button-text"></slot>`
      )}
    </forge-button>`;
  }

  public override render(): TemplateResult {
    return html`
      <forge-dialog
        @slotchange=${this._handleSlotChange}
        persistent
        fullscreen-threshold="0"
        ?open=${this.open}
        @forge-dialog-close=${() => (this.isBusy = false)}
        aria-labelledby="confirmation-dialog-title"
        aria-describedby="confirmation-message">
        <div class="outer-container">
          <div class="title-message-container">
            ${this._title}
            <slot name="message" id="confirmation-message" class="message"></slot>
          </div>
          <div class="actions-container">${this._secondaryButton} ${this._primaryButton}</div>
        </div>
      </forge-dialog>
    `;
  }

  private _onAction(isPrimary: boolean): void {
    const event = new CustomEvent<ConfirmationDialogActionEventData>('forge-confirmation-dialog-action', {
      bubbles: true,
      cancelable: true,
      detail: { primaryAction: isPrimary }
    });
    this.dispatchEvent(event);
  }

  private _handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (['title', 'secondary-button-text'].includes(slotName)) {
      this.requestUpdate();
    }
  }
}
