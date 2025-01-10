import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  defineButtonComponent,
  defineCircularProgressComponent,
  defineDialogComponent,
  defineLinearProgressComponent
} from '@tylertech/forge';

import styles from './busy-indicator.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-busy-indicator': BusyIndicatorElement;
  }

  interface HTMLElementEventMap {
    'forge-busy-indicator-cancel': CustomEvent<void>;
  }
}

export type BusyIndicatorDirection = 'row' | 'column';

@customElement('forge-busy-indicator')
export class BusyIndicatorElement extends LitElement {
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
   * Indicates whether the cancel button is displayed.
   */
  @property({ type: Boolean })
  public cancelable = false;

  /**
   * Indicates whether the spinner is displayed.
   */
  @property({ type: Boolean })
  public spinner = true;

  /**
   * Indicates whether the progress bar is displayed.
   */
  @property({ type: Boolean, attribute: 'progress-bar' })
  public progressBar = false;

  /**
   * Indicates whether the progress bar is determinate.
   */
  @property({ type: Boolean, attribute: 'progress-bar-determinate' })
  public progressBarDeterminate = false;

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
   * The layout direction of the busy indicator.
   */
  @property({ type: String })
  public direction: BusyIndicatorDirection = 'column';

  private get _titleTemplate(): TemplateResult | typeof nothing {
    return this.titleText ? html`<h1 id="title" class="title" part="title">${this.titleText}</h1>` : nothing;
  }

  private get _messageTemplate(): TemplateResult | typeof nothing {
    return !!this.message?.trim() ? html`<p id="message" class="message" part="message">${this.message}</p>` : nothing;
  }

  private get _spinnerTemplate(): TemplateResult | typeof nothing {
    return this.spinner
      ? html`<forge-circular-progress class="spinner" part="spinner" aria-hidden="true"></forge-circular-progress>`
      : nothing;
  }

  private get _cancelButtonTemplate(): TemplateResult | typeof nothing {
    return this.cancelable
      ? html`<forge-button class="cancel-button" part="cancel-button" @click=${this._onCancel}>
          <slot name="cancel-text">Cancel</slot>
        </forge-button>`
      : nothing;
  }

  private get _progressBarTemplate(): TemplateResult | typeof nothing {
    return this.progressBar
      ? html`<div class="progress-container" part="progress-bar-container">
          <forge-linear-progress
            part="progress-bar"
            aria-hidden="true"
            .buffer="${this.buffer}"
            .determinate="${this.progressBarDeterminate}"
            .progress=${this.progress}></forge-linear-progress>
        </div>`
      : nothing;
  }

  public override render(): TemplateResult {
    return html`
      <forge-dialog
        persistent
        ?open=${this.open}
        aria-labelledby=${this.titleText ? 'title' : nothing}
        aria-describedby="message">
        <div class="surface" part="surface">
          ${this._titleTemplate}
          <div class="message-container" part="message-container">
            ${this._spinnerTemplate} ${this._messageTemplate} ${this._cancelButtonTemplate}
          </div>
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
}
