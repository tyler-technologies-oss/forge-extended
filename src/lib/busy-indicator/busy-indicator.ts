import {
  defineButtonComponent,
  defineCircularProgressComponent,
  defineDialogComponent,
  defineLinearProgressComponent
} from '@tylertech/forge';
import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './busy-indicator.scss?inline';

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

  constructor() {
    super();
  }

  @property({ type: Boolean, reflect: true })
  public open = false;

  @property({ attribute: 'title-text' })
  public titleText?: string;

  @property({ attribute: 'message' })
  public message?: string;

  @property({ type: Boolean, reflect: true })
  public cancel = false;

  @property({ type: Boolean, reflect: true })
  public spinner = true;

  @property({ type: Boolean, reflect: true, attribute: 'progress-bar-determinate' })
  public progressBarDeterminate = false;

  @property({ type: Boolean, reflect: true, attribute: 'progress-bar' })
  public progressBar = false;

  @property({ type: Number })
  public progress = 0;

  @property({ type: Number, reflect: true })
  public buffer = 0;

  @property({ type: String, reflect: true })
  public direction: BusyIndicatorDirection = 'column';

  public override render(): TemplateResult {
    return html`
      <forge-dialog
        persistent
        ?open=${this.open}
        aria-labelledby=${this.titleText ? 'title' : nothing}
        aria-describedby="message">
        <div class="surface" part="surface">
          ${this._titleHtml()}
          <div class="message-container" part="message-container">
            ${this._spinnerHtml()} ${this._messageHtml()} ${this._cancelButtonHtml()}
          </div>
          ${this._progressBarHtml()}
        </div>
      </forge-dialog>
    `;
  }

  private _onCancel(): void {
    this.open = false;
  }

  private _titleHtml(): TemplateResult | typeof nothing {
    if (this.titleText) {
      return html`<h1 id="title" class="title" part="title">${this.titleText}</h1>`;
    }

    return nothing;
  }

  private _spinnerHtml(): TemplateResult | typeof nothing {
    if (this.spinner) {
      return html`<forge-circular-progress class="spinner" part="spinner" aria-hidden="true">
      </forge-circular-progress>`;
    }

    return nothing;
  }

  private _cancelButtonHtml(): TemplateResult | typeof nothing {
    if (this.cancel) {
      return html`
        <forge-button class="cancel-button" part="cancel-button" @click=${this._onCancel}>
          <slot name="cancel-text">Cancel</slot>
        </forge-button>
      `;
    }

    return nothing;
  }

  private _messageHtml(): TemplateResult | any {
    if (!!this.message?.trim()) {
      return html`<p id="message" class="message" part="message">${this.message}</p>`;
    }

    return nothing;
  }

  private _progressBarHtml(): TemplateResult | typeof nothing {
    if (this.progressBar) {
      return html`
        <div class="progress-container" part="progress-bar-container">
          <forge-linear-progress
            part="progress-bar"
            aria-hidden="true"
            .buffer="${this.buffer}"
            .determinate="${this.progressBarDeterminate}"
            .progress=${this.progress}></forge-linear-progress>
        </div>
      `;
    }

    return nothing;
  }
}
