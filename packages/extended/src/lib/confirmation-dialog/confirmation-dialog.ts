import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedNodes, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import styles from './confirmation-dialog.scss?inline';
import {
  defineButtonComponent,
  defineCircularProgressComponent,
  defineDialogComponent,
  IconRegistry
} from '@tylertech/forge';
import {
  tylIconInfoOutline,
  tylIconLanguage,
  tylIconCheckCircleOutline,
  tylIconWarning,
  tylIconErrorOutline
} from '@tylertech/tyler-icons/standard';

declare global {
  interface HTMLElementTagNameMap {
    'forge-confirmation-dialog': ConfirmationDialogComponent;
  }

  interface HTMLElementEventMap {
    'forge-confirmation-dialog-action': CustomEvent<void>;
  }

  export type ConformationDialogThemes = 'success' | 'error' | 'warning' | 'info' | 'info-secondary';

  interface IConfirmationDialogAction extends CustomEvent {
    detail: {
      primaryAction: boolean;
    };
  }
}

export const ConfirmationDialogComponentTagName: keyof HTMLElementTagNameMap = 'forge-confirmation-dialog';

const ICONS: Record<ConformationDialogThemes, string> = {
  info: 'info_outline',
  'info-secondary': 'info_outline',
  success: 'check_circle_outline',
  warning: 'warning',
  error: 'error_outline'
};

/**
 * @tag forge-confirmation-dialog
 */
@customElement(ConfirmationDialogComponentTagName)
export class ConfirmationDialogComponent extends LitElement {
  static {
    defineButtonComponent();
    defineDialogComponent();
    defineCircularProgressComponent();
    IconRegistry.define([
      tylIconInfoOutline,
      tylIconLanguage,
      tylIconCheckCircleOutline,
      tylIconWarning,
      tylIconErrorOutline
    ]);
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
   * Current theme of the dialog
   */
  @property({ type: String, attribute: 'theme' })
  public theme: ConformationDialogThemes = 'info';

  /**
   * Aria label of the busy indicator when loading
   */
  @property({ type: String, attribute: 'aria-label-loading' })
  public ariaLabelLoading = 'Loading';

  /**
   * Internal state to show/hide secondary button
   */
  @state()
  private _showSecondaryButton = true;

  @queryAssignedNodes({ slot: 'secondary-button-text', flatten: true })
  private _secondaryButtonNode!: Array<Node>;

  private _handleSlotChange(): void {
    this._toggleSecondaryButton();
  }

  public updated(): void {
    this._toggleSecondaryButton();
  }

  private _toggleSecondaryButton(): void {
    this._showSecondaryButton = this._secondaryButtonNode.length > 0;
  }

  private get _busyIndicator(): TemplateResult | typeof nothing {
    return this.isBusy
      ? html`<forge-circular-progress slot="end" aria-label=${this.ariaLabelLoading}> </forge-circular-progress>`
      : nothing;
  }

  private get _secondaryButtonSlot(): TemplateResult | typeof nothing {
    return html` <slot
      name="secondary-button-text"
      id="secondary-button-slot"
      @slotchange=${this._handleSlotChange}></slot>`;
  }

  private get _secondaryButton(): TemplateResult | typeof nothing {
    return when(
      this._showSecondaryButton,
      () =>
        html` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          theme=${this.theme}
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
      theme=${this.theme}
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
        ?open=${this.open}
        theme=${this.theme}
        @forge-dialog-close=${() => this._resetState()}
        aria-labelledby="confirmation-dialog-title"
        aria-describedby="confirmation-message">
        <div class="outer-container">
          <div class="title-message-container">
            <forge-icon .name=${ICONS[this.theme]} class="icon"></forge-icon>
            <slot name="title" id="confirmation-dialog-title" class="title"></slot>
            <slot name="message" id="confirmation-message" class="message"></slot>
          </div>
          <div class="actions-container">${this._secondaryButton} ${this._primaryButton}</div>
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
