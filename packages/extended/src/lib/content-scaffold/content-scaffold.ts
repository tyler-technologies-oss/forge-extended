import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import styles from './content-scaffold.scss?inline';
import { hideWhenEmpty } from '../utils/lit-utils.js';

declare global {
  interface HTMLElementTagNameMap {
    'forge-content-scaffold': ContentScaffoldComponent;
  }
}

export const ContentScaffoldComponentTagName: keyof HTMLElementTagNameMap = 'forge-content-scaffold';

/**
 * @tag forge-content-scaffold
 *
 * @slot header - Full-width header content. When used, the multi-slot header layout (header-start, header-end, before-header-start) will be hidden.
 * @slot before-header-start - Content displayed before the header start slot. Only shown when the `header` slot is empty.
 * @slot header-start - Content displayed at the start of the header section. Only shown when the `header` slot is empty.
 * @slot header-end - Content displayed at the end of the header section. Only shown when the `header` slot is empty.
 * @slot body - The main body content that expands to fill available space.
 * @slot footer - Full-width footer content. When used, the multi-slot footer layout (footer-start, footer-end) will be hidden.
 * @slot footer-start - Content displayed at the start of the footer section. Only shown when the `footer` slot is empty.
 * @slot footer-end - Content displayed at the end of the footer section. Only shown when the `footer` slot is empty.
 *
 * @cssprop --forge-content-scaffold-header-height - Controls the height of the header section. Defaults to `auto`.
 * @cssprop --forge-content-scaffold-header-background - Controls the background color of the header section. Defaults to `transparent`.
 * @cssprop --forge-content-scaffold-header-min-height - Controls the minimum height of the header section. Defaults to `48px`.
 * @cssprop --forge-content-scaffold-body-height - Controls the height of the body section. Defaults to `auto`.
 * @cssprop --forge-content-scaffold-body-padding-inline - Controls the inline-padding applied to the body section. Defaults to Forge's medium spacing token.
 * @cssprop --forge-content-scaffold-footer-height - Controls the height of the footer section. Defaults to `auto`.
 * @cssprop --forge-content-scaffold-footer-background - Controls the background color of the footer section. Defaults to `transparent`.
 * @cssprop --forge-content-scaffold-footer-min-height - Controls the minimum height of the footer section. Defaults to `48px`.
 * @cssprop --forge-content-scaffold-footer-full-padding - Controls the padding applied to full-width footer content. Defaults to Forge's small spacing token.
 */
@customElement(ContentScaffoldComponentTagName)
export class ContentScaffoldComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @queryAssignedNodes({ slot: 'header', flatten: true })
  private _slottedHeaderNodes!: Node[];

  @queryAssignedNodes({ slot: 'footer', flatten: true })
  private _slottedFooterNodes!: Node[];

  readonly #headerSlot = html`<slot name="header"></slot>`;
  readonly #footerSlot = html`<slot name="footer"></slot>`;

  get #headerContent(): TemplateResult | typeof nothing {
    const hasFullWidthHeader = this._slottedHeaderNodes.length > 0;
    return when(
      hasFullWidthHeader,
      () => html` <div class="header-full-content">${this.#headerSlot}</div> `,
      () => html`
        <div class="header" ${hideWhenEmpty()}>
          <div class="header-start-container">
            <div ${hideWhenEmpty()}>
              <slot name="before-header-start"></slot>
            </div>
            <slot name="header-start"></slot>
          </div>
          <div class="header-end" ${hideWhenEmpty()}>
            <slot name="header-end"></slot>
          </div>
        </div>
        ${this.#headerSlot}
      `
    );
  }

  get #footerContent(): TemplateResult | typeof nothing {
    const hasFullWidthFooter = this._slottedFooterNodes.length > 0;
    return when(
      hasFullWidthFooter,
      () => html` <div class="footer-full-content">${this.#footerSlot}</div> `,
      () => html`
        <div class="footer" ${hideWhenEmpty()}>
          <div class="footer-start" ${hideWhenEmpty()}>
            <slot name="footer-start"></slot>
          </div>
          <div class="footer-end" ${hideWhenEmpty()}>
            <slot name="footer-end"></slot>
          </div>
        </div>
        ${this.#footerSlot}
      `
    );
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (['header', 'footer'].includes(slotName)) {
      this.requestUpdate();
    }
  }

  public override render(): TemplateResult {
    return html`
      ${this.#headerContent}
      <div class="container" @slotchange=${this.#handleSlotChange}>
        <div class="body" ${hideWhenEmpty()}>
          <div class="body-inner">
            <slot name="body"></slot>
          </div>
        </div>
        ${this.#footerContent}
      </div>
    `;
  }
}
