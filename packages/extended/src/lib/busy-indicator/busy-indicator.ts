import {
  defineButtonComponent,
  defineCircularProgressComponent,
  defineDialogComponent,
  defineLinearProgressComponent
} from '@tylertech/forge';
import { LitElement, PropertyValues, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';

import styles from './busy-indicator.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-busy-indicator': BusyIndicatorComponent;
  }

  interface HTMLElementEventMap {
    'forge-busy-indicator-cancel': CustomEvent<void>;
  }
}

export type BusyIndicatorMode = 'fullscreen' | 'inline';
export type BusyIndicatorVariant = 'spinner' | 'progress' | 'message-only';
export type BusyIndicatorFocusMode = 'auto' | 'manual';
export const BusyIndicatorComponentTagName: keyof HTMLElementTagNameMap = 'forge-busy-indicator';

/**
 * @tag forge-busy-indicator
 *
 * @slot title - The title text to display.
 * @slot message - The message to display.
 * @slot cancel-text - The text for the cancel button.
 *
 * @event {CustomEvent<void>} forge-busy-indicator-cancel - Fired when the cancel button is clicked.
 */
@customElement(BusyIndicatorComponentTagName)
export class BusyIndicatorComponent extends LitElement {
  static {
    defineDialogComponent();
    defineCircularProgressComponent();
    defineLinearProgressComponent();
    defineButtonComponent();
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the busy indicator is open.
   */
  @property({ type: Boolean })
  public open = false;

  /**
   * Whether the busy indicator is fullscreen or inline.
   */
  @property({ type: String })
  public mode: BusyIndicatorMode = 'fullscreen';

  /**
   * The title text to display.
   */
  @property({ attribute: 'title-text' })
  public titleText?: string;

  /**
   * The message to display.
   */
  @property()
  public message?: string;

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
   * Indicates whether the cancel button is displayed.
   */
  @property({ type: Boolean })
  public cancelable = false;

  /**
   * The variant of the busy indicator.
   * - `spinner` (default): displays a spinner.
   * - `progress`: displays a progress bar.
   * - `message-only`: No progress indicator is displayed.
   * @default message
   */
  @property()
  public variant: BusyIndicatorVariant = 'spinner';

  /**
   * Indicates whether the loading indicator is determinate.
   */
  @property({ type: Boolean })
  public determinate = false;

  /**
   * The progress amount for the progress bar.
   */
  @property({ type: Number })
  public progress = 0;

  /**
   * The buffer amount for the progress bar.
   */
  @property({ type: Number })
  public buffer = 0;

  /**
   * Indicates whether the busy indicator surface should be transparent (no background or elevation).
   */
  @property({ type: Boolean })
  public transparent = false;

  /** Holds the previously focused element before the busy indicator was opened. */
  #previousActiveElement: HTMLElement | null = null;

  private get _titleNodes(): Node[] {
    return this.querySelector<HTMLSlotElement>('slot[name="title"]')?.assignedNodes({ flatten: true }) ?? [];
  }

  private get _messageNodes(): Node[] {
    return this.querySelector<HTMLSlotElement>('slot[name="message"]')?.assignedNodes({ flatten: true }) ?? [];
  }

  private get _titleTemplate(): TemplateResult | typeof nothing {
    const hasTitle = !!this.titleText?.trim() || this._titleNodes.length > 0;
    return when(
      hasTitle,
      () =>
        html`<h1 id="title" class="title">
          <slot name="title">${this.titleText}</slot>
        </h1>`,
      () => html`<slot name="title"></slot>`
    );
  }

  private get _messageTemplate(): TemplateResult | typeof nothing {
    const hasMessage = !!this.message?.trim() || this._messageNodes.length > 0;
    return when(
      hasMessage,
      () => html`<p id="message" class="message"><slot name="message">${this.message}</slot></p>`,
      () => html`<slot name="message"></slot>`
    );
  }

  private get _spinnerTemplate(): TemplateResult | typeof nothing {
    return when(
      this.variant === 'spinner',
      () =>
        html`<div>
          <forge-circular-progress
            class="spinner"
            aria-hidden="true"
            ?determinate="${this.determinate}"
            .progress=${this.progress}></forge-circular-progress>
        </div>`
    );
  }

  private get _contentTemplate(): TemplateResult | typeof nothing {
    const visible = this.variant === 'message-only' || this.message || this.cancelable;
    return when(visible, () => html`<div class="content">${this._messageTemplate} ${this._cancelButtonTemplate}</div>`);
  }

  private get _cancelButtonTemplate(): TemplateResult | typeof nothing {
    return when(
      this.cancelable,
      () =>
        html`<forge-button class="cancel-button" variant="outlined" @click=${this._onCancel}>
          <slot name="cancel-text">Cancel</slot>
        </forge-button>`
    );
  }

  private get _progressBarTemplate(): TemplateResult | typeof nothing {
    return when(
      this.variant === 'progress',
      () =>
        html`<div class="progress-container">
          <forge-linear-progress
            aria-hidden="true"
            .determinate="${this.determinate}"
            .buffer=${this.buffer}
            .progress=${this.progress}></forge-linear-progress>
        </div>`
    );
  }

  public override disconnectedCallback(): void {
    if (this.#previousActiveElement) {
      this._releaseFocus();
    }
    super.disconnectedCallback();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('open')) {
      this._tryManageFocus();
    }
  }

  public override render(): TemplateResult {
    return html`
      <forge-dialog
        class=${classMap({ inline: this.mode === 'inline', transparent: this.transparent })}
        persistent
        .open=${this.open}
        .mode=${this.mode === 'inline' ? 'inline-modal' : 'modal'}
        .label=${this.label || this.titleText || ''}
        .description=${this.description || this.message || ''}>
        <div class="surface" @slotchange=${this._handleSlotChange}>
          ${this._titleTemplate}
          ${when(
            this.variant === 'spinner' || this.variant === 'message-only' || this.message || this.cancelable,
            () => html`<div class="layout-container">${this._spinnerTemplate} ${this._contentTemplate}</div>`
          )}
          ${this._progressBarTemplate}
        </div>
      </forge-dialog>
    `;
  }

  private _onCancel(): void {
    const event = new CustomEvent('forge-busy-indicator-cancel', { bubbles: true, cancelable: true });
    this.dispatchEvent(event);
    if (!event.defaultPrevented) {
      this.open = false;
    }
  }

  private _tryManageFocus(): void {
    if (this.open && this.mode === 'fullscreen') {
      this._captureFocusedElement();
    } else if (this.#previousActiveElement) {
      this._releaseFocus();
    }
  }

  private _captureFocusedElement(): void {
    this.#previousActiveElement = document.activeElement as HTMLElement;
  }

  private _releaseFocus(): void {
    this.#previousActiveElement?.focus({ preventScroll: true });
    this.#previousActiveElement = null;
  }

  private _handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLElement).slot;
    if (['title', 'message'].includes(slotName)) {
      this.requestUpdate();
    }
  }
}
