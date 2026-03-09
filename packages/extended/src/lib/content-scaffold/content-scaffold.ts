import { LitElement, TemplateResult, html, unsafeCSS, nothing } from 'lit';
import { customElement, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import styles from './content-scaffold.scss?inline';
import { defineToolbarComponent } from '@tylertech/forge';

declare global {
  interface HTMLElementTagNameMap {
    'forge-content-scaffold': ContentScaffoldComponent;
  }
}

export const ContentScaffoldComponentTagName: keyof HTMLElementTagNameMap = 'forge-content-scaffold';

/**
 * @tag forge-content-scaffold
 *
 * @slot before-header-start - Content displayed before the header start slot. Conditionally rendered when header content is present.
 * @slot header-start - Content displayed at the start of the header section. Conditionally rendered when header content is present.
 * @slot header-end - Content displayed at the end of the header section. Conditionally rendered when header content is present.
 * @slot body - The main body content that expands to fill available space.
 * @slot footer-start - Content displayed at the start of the footer section. Conditionally rendered when footer content is present.
 * @slot footer-end - Content displayed at the end of the footer section. Conditionally rendered when footer content is present.
 *
 * @cssprop --forge-content-scaffold-header-height - Controls the height of the header section. Defaults to `auto`.
 * @cssprop --forge-content-scaffold-header-background - Controls the background color of the header section. Defaults to `transparent`.
 * @cssprop --forge-content-scaffold-header-min-height - Controls the minimum height of the header section. Defaults to `48px`.
 * @cssprop --forge-content-scaffold-body-height - Controls the height of the body section. Defaults to `auto`.
 * @cssprop --forge-content-scaffold-body-padding - Controls the padding applied to the body section. Defaults to Forge's medium spacing token.
 * @cssprop --forge-content-scaffold-footer-height - Controls the height of the footer section. Defaults to `auto`.
 * @cssprop --forge-content-scaffold-footer-background - Controls the background color of the footer section. Defaults to `transparent`.
 * @cssprop --forge-content-scaffold-footer-min-height - Controls the minimum height of the footer section. Defaults to `48px`.
 */
@customElement(ContentScaffoldComponentTagName)
export class ContentScaffoldComponent extends LitElement {
  static {
    defineToolbarComponent();
  }
  public static override styles = unsafeCSS(styles);

  @queryAssignedNodes({ slot: 'before-header-start', flatten: true })
  private _slottedBeforeHeaderStartNodes!: Node[];

  @queryAssignedNodes({ slot: 'header-start', flatten: true })
  private _slottedHeaderStartNodes!: Node[];

  @queryAssignedNodes({ slot: 'header-end', flatten: true })
  private _slottedHeaderEndNodes!: Node[];

  @queryAssignedNodes({ slot: 'body', flatten: true })
  private _slottedBodyNodes!: Node[];

  @queryAssignedNodes({ slot: 'footer-start', flatten: true })
  private _slottedFooterStartNodes!: Node[];

  @queryAssignedNodes({ slot: 'footer-end', flatten: true })
  private _slottedFooterEndNodes!: Node[];

  readonly #beforeHeaderStartSlot = html`<slot name="before-header-start"></slot>`;
  readonly #headerStartSlot = html`<slot name="header-start"></slot>`;
  readonly #headerEndSlot = html`<slot name="header-end"></slot>`;
  readonly #bodySlot = html`<slot name="body"></slot>`;
  readonly #footerStartSlot = html`<slot name="footer-start"></slot>`;
  readonly #footerEndSlot = html`<slot name="footer-end"></slot>`;

  get #header(): TemplateResult | typeof nothing {
    const hasHeaderContent =
      this._slottedBeforeHeaderStartNodes.length > 0 ||
      this._slottedHeaderStartNodes.length > 0 ||
      this._slottedHeaderEndNodes.length > 0;

    const hasBeforeHeaderStart = this._slottedBeforeHeaderStartNodes.length > 0;
    const containerClass = hasBeforeHeaderStart ? 'header-start-container' : 'header-start-container no-before-content';

    return when(
      hasHeaderContent,
      () => html`
        <div class="header">
          <div class="${containerClass}">${this.#beforeHeaderStartSlot} ${this.#headerStartSlot}</div>
          <div class="header-end">${this.#headerEndSlot}</div>
        </div>
      `,
      () => html`${this.#beforeHeaderStartSlot}${this.#headerStartSlot}${this.#headerEndSlot}`
    );
  }

  get #body(): TemplateResult | typeof nothing {
    const hasBodyContent = this._slottedBodyNodes.length > 0;

    return when(
      hasBodyContent,
      () => html`
        <div class="body">
          <div class="body-inner">${this.#bodySlot}</div>
        </div>
      `,

      () => html`${this.#bodySlot}`
    );
  }

  get #footer(): TemplateResult | typeof nothing {
    const hasFooterContent = this._slottedFooterStartNodes.length > 0 || this._slottedFooterEndNodes.length > 0;

    return when(
      hasFooterContent,
      () => html`
        <div class="footer">
          <div class="footer-start">${this.#footerStartSlot}</div>
          <div class="footer-end">${this.#footerEndSlot}</div>
        </div>
      `,
      () => html`${this.#footerStartSlot}${this.#footerEndSlot}`
    );
  }

  public override render(): TemplateResult {
    return html`<div class="container" @slotchange=${this.#handleSlotChange}>
      ${this.#header} ${this.#body} ${this.#footer}
    </div>`;
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (
      ['before-header-start', 'header-start', 'header-end', 'body', 'footer-start', 'footer-end'].includes(slotName)
    ) {
      this.requestUpdate();
    }
  }
}
