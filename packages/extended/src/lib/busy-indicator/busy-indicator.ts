import { LitElement, PropertyValues, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import {
  defineButtonComponent,
  defineCircularProgressComponent,
  defineDialogComponent,
  defineLinearProgressComponent
} from '@tylertech/forge';

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
   * The focus mode for the busy indicator. Determines whether the busy indicator captures focus or not.
   * - `auto` (default): The busy indicator captures focus and releases it when closed.
   * - `manual`: The busy indicator does not manage focus.
   * @default 'auto'
   */
  @property({ type: String, attribute: 'focus-mode' })
  public focusMode: BusyIndicatorFocusMode = 'auto';

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

  #previousActiveElement: HTMLElement | null = null;

  private get _titleTemplate(): TemplateResult | typeof nothing {
    return this.titleText
      ? html`<h1 id="title" class="title"><slot name="title">${this.titleText}</slot></h1>`
      : nothing;
  }

  private get _messageTemplate(): TemplateResult | typeof nothing {
    return !!this.message?.trim()
      ? html`<p id="message" class="message"><slot name="message">${this.message}</slot></p>`
      : nothing;
  }

  private get _spinnerTemplate(): TemplateResult | typeof nothing {
    return this.variant === 'spinner'
      ? html`<forge-circular-progress
          class="spinner"
          aria-hidden="true"
          ?determinate="${this.determinate}"
          .progress=${this.progress}></forge-circular-progress>`
      : nothing;
  }

  private get _contentTemplate(): TemplateResult | typeof nothing {
    const visible = this.variant === 'message-only' || this.message || this.cancelable;
    return visible ? html`<div class="content">${this._messageTemplate} ${this._cancelButtonTemplate}</div>` : nothing;
  }

  private get _cancelButtonTemplate(): TemplateResult | typeof nothing {
    return this.cancelable
      ? html`<forge-button class="cancel-button" variant="outlined" @click=${this._onCancel}>
          <slot name="cancel-text">Cancel</slot>
        </forge-button>`
      : nothing;
  }

  private get _progressBarTemplate(): TemplateResult | typeof nothing {
    return this.variant === 'progress'
      ? html`<div class="progress-container">
          <forge-linear-progress
            aria-hidden="true"
            .determinate="${this.determinate}"
            .buffer=${this.buffer}
            .progress=${this.progress}></forge-linear-progress>
        </div>`
      : nothing;
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
        persistent
        ?open=${this.open}
        .mode=${this.mode === 'inline' ? 'inline-modal' : 'modal'}
        class=${classMap({ inline: this.mode === 'inline', transparent: this.transparent })}
        .label=${this.label || this.titleText || ''}
        .description=${this.description || this.message || ''}
        .focusMode=${this.focusMode}>
        <div class="surface">
          ${this._titleTemplate}
          <div class="layout-container">${this._spinnerTemplate} ${this._contentTemplate}</div>
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
    if (this.open && this.focusMode === 'auto') {
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
}
