import {
  defineButtonComponent,
  defineCircularProgressComponent,
  defineDialogComponent,
  defineLinearProgressComponent
} from '@tylertech/forge';
import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './busy-indicator.scss?inline';

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

  @property({ type: Boolean, reflect: true })
  public progressBar = false;

  @property({ type: Number })
  public progress = 0;

  @property({ type: Number })
  public buffer = 0;

  private _onCancel(): void {
    this.open = false;
  }

  public override render(): TemplateResult {
    return html`
      <forge-dialog
        persistent
        ?open=${this.open}
        aria-labelledby=${this.titleText ? 'title' : nothing}
        aria-describedby="message">
        <div class="surface" part="surface">
          ${this.titleText ? html`<h1 id="title" class="title" part="title">${this.titleText}</h1>` : nothing}
          <div class="message-container" part="message-container">
            ${this.spinner
              ? html`<forge-circular-progress
                  class="spinner"
                  part="spinner"
                  aria-hidden="true"></forge-circular-progress>`
              : nothing}
            ${!!this.message?.trim()
              ? html`<p id="message" class="message" part="message">${this.message}</p>`
              : nothing}
            ${this.cancel
              ? html`
                  <forge-button class="cancel-button" part="cancel-button" @click=${this._onCancel}>
                    <slot name="cancel-text">Cancel</slot>
                  </forge-button>
                `
              : nothing}
          </div>
          ${this.progressBar
            ? html`
                <div class="progress-container" part="progress-bar-container">
                  <forge-linear-progress
                    part="progress-bar"
                    aria-hidden="true"
                    .progress=${this.progress}></forge-linear-progress>
                </div>
              `
            : nothing}
        </div>
      </forge-dialog>
    `;
  }
}
