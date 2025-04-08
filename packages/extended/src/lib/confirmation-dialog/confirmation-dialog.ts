import { LitElement, PropertyValues, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, query, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { styleMap } from 'lit/directives/style-map.js';
import styles from './confirmation-dialog.scss?inline';
import {
  ButtonComponent,
  defineButtonComponent,
  defineCircularProgressComponent,
  defineDialogComponent,
  defineIconButtonComponent,
  IconRegistry,
  IDialogBeforeCloseEventData
} from '@tylertech/forge';
import { tylIconClose } from '@tylertech/tyler-icons/standard';
import { composeSlottedTextContent } from '../utils/slot-utils';

declare global {
  interface HTMLElementTagNameMap {
    'forge-confirmation-dialog': ConfirmationDialogComponent;
  }

  interface HTMLElementEventMap {
    'forge-confirmation-dialog-action': CustomEvent<ConfirmationDialogActionEventData>;
  }
}

export type ConfirmationDialogActionEventType = 'action' | 'light-dismiss';

export interface ConfirmationDialogActionEventData {
  value: boolean;
  type: ConfirmationDialogActionEventType;
}

export interface ConfirmationDialogProperties {
  open: boolean;
  isBusy: boolean;
  busyLabel: string;
  label: string | undefined;
  description: string | undefined;
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
 * @event {CustomEvent<ConfirmationDialogActionEventData>} forge-confirmation-dialog-action - Fired when an action button is clicked. Will contain false if the secondary button is clicked, true if the primary button is clicked.
 */
@customElement(ConfirmationDialogComponentTagName)
export class ConfirmationDialogComponent extends LitElement implements ConfirmationDialogProperties {
  static {
    defineButtonComponent();
    defineDialogComponent();
    defineCircularProgressComponent();
    defineIconButtonComponent();

    IconRegistry.define([tylIconClose]);
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the confirmation dialog is open.
   */
  @property({ type: Boolean, attribute: 'open' })
  public open = false;

  /**
   * The accessible label for dialog.
   */
  @property()
  public label: string | undefined;

  /**
   * The accessible description for dialog.
   */
  @property()
  public description: string | undefined;

  /**
   * Indicates whether the confirmation dialog in a busy state
   */
  @property({ type: Boolean, attribute: 'is-busy' })
  public isBusy = false;

  /**
   * ARIA label for the the busy indicator when loading
   */
  @property({ type: String, attribute: 'busy-label' })
  public busyLabel = 'Loading';

  @queryAssignedNodes({ slot: 'title', flatten: true })
  private _slottedTitleNodes!: Node[];

  @queryAssignedNodes({ slot: 'message', flatten: true })
  private _slottedMessageNodes!: Node[];

  @queryAssignedNodes({ slot: 'secondary-button-text', flatten: true })
  private _slottedSecondaryButtonTextNodes!: Node[];

  @query('#primary-button')
  private _primaryButtonRef!: ButtonComponent | null;

  #primaryButtonWidth: string | undefined;

  get #title(): TemplateResult | typeof nothing {
    const showTitle = this._slottedTitleNodes.length > 0;
    return when(
      showTitle,
      () => html` <h1>${this.#titleSlot}</h1>`,
      () => html`${this.#titleSlot}`
    );
  }

  get #titleSlot(): TemplateResult | typeof nothing {
    return html`<slot name="title" id="confirmation-dialog-title" class="title"></slot> `;
  }

  get #closeIconButton(): TemplateResult | typeof nothing {
    return html`
      <forge-icon-button autofocus aria-label="Close confirmation dialog" @click=${() => this._onAction(false)}>
        <forge-icon name="close"></forge-icon>
      </forge-icon-button>
    `;
  }

  get #secondaryButtonSlot(): TemplateResult | typeof nothing {
    return html`<slot name="secondary-button-text" id="secondary-button-slot"></slot>`;
  }

  get #primaryButtonSlot(): TemplateResult | typeof nothing {
    return this.isBusy
      ? this.#busyIndicator
      : html`<slot name="primary-button-text" id="primary-button-slot">Confirm</slot>`;
  }

  get #busyIndicator(): TemplateResult | typeof nothing {
    return html`<forge-circular-progress slot="end" aria-label=${this.busyLabel}> </forge-circular-progress>`;
  }

  get #secondaryButton(): TemplateResult | typeof nothing {
    const showSecondaryButton = this._slottedSecondaryButtonTextNodes.length > 0;
    return when(
      showSecondaryButton,
      () =>
        html` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          id="secondary-button"
          @click=${() => this._onAction(false)}>
          ${this.#secondaryButtonSlot}
        </forge-button>`,
      () => html`${this.#secondaryButtonSlot}`
    );
  }

  get #primaryButton(): TemplateResult | typeof nothing {
    return html`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      style=${styleMap({ minWidth: this.#primaryButtonWidth })}
      @click=${() => this._onAction(true)}>
      ${this.#primaryButtonSlot}
    </forge-button>`;
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('isBusy')) {
      this.#primaryButtonWidth =
        this.isBusy && this._primaryButtonRef ? `${this._primaryButtonRef.clientWidth}px` : undefined;
    }
  }

  public override render(): TemplateResult {
    const showTitleContainer = this._slottedTitleNodes.length > 0;
    return html`
      <forge-dialog
        @slotchange=${this._handleSlotChange}
        @forge-dialog-before-close=${(e: CustomEvent<IDialogBeforeCloseEventData>) =>
          this._onAction(false, 'light-dismiss', e)}
        @forge-dialog-close=${() => (this.isBusy = false)}
        fullscreen-threshold="0"
        ?open=${this.open}
        .label=${this.label || composeSlottedTextContent(this._slottedTitleNodes) || ''}
        .description=${this.description || composeSlottedTextContent(this._slottedMessageNodes) || ''}>
        <div class="outer-container">
          <div class="title-container" style=${styleMap({ display: showTitleContainer ? 'grid' : 'none' })}>
            ${this.#title}
            <div class="close-button-container">${this.#closeIconButton}</div>
          </div>
          <div class="message-container">
            <slot name="message" id="confirmation-message"></slot>
          </div>
          <div class="actions-container">${this.#secondaryButton} ${this.#primaryButton}</div>
        </div>
      </forge-dialog>
    `;
  }

  private _onAction(
    value: boolean,
    type: ConfirmationDialogActionEventType = 'action',
    evt?: CustomEvent<IDialogBeforeCloseEventData>
  ): void {
    const reason = evt?.detail?.reason;
    const actionEvent = new CustomEvent<ConfirmationDialogActionEventData>('forge-confirmation-dialog-action', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        value,
        type
      }
    });

    this.dispatchEvent(actionEvent);

    if (evt && evt.detail?.reason === 'backdrop') {
      evt.preventDefault();
      return;
    }

    if (actionEvent.defaultPrevented) {
      evt?.preventDefault();
    } else if (!actionEvent.defaultPrevented) {
      this.open = false;
      this.isBusy = false;
    }
  }

  private _handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (['title', 'secondary-button-text', 'primary-button-text'].includes(slotName)) {
      this.requestUpdate();
    }
  }
}
