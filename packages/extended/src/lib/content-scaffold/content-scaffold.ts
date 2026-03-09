import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import styles from './content-scaffold.scss?inline';
import { defineToolbarComponent } from '@tylertech/forge';
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
 * @property {boolean} fullWidthHeader - When true, enables the full-width header mode using the `header` slot instead of the multi-slot layout.
 *
 * @slot header - Full-width header content. Only used when `fullWidthHeader` is true.
 * @slot before-header-start - Content displayed before the header start slot. Only used when `fullWidthHeader` is false.
 * @slot header-start - Content displayed at the start of the header section. Only used when `fullWidthHeader` is false.
 * @slot header-end - Content displayed at the end of the header section. Only used when `fullWidthHeader` is false.
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

  @property({ type: Boolean, attribute: 'full-width-header' })
  public fullWidthHeader = false;

  public override render(): TemplateResult {
    return html`
      <div class="container">
        ${when(
          this.fullWidthHeader,
          () => html`
            <div class="header-full-content">
              <slot name="header"></slot>
            </div>
          `,
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
          `
        )}
        <div class="body" ${hideWhenEmpty()}>
          <div class="body-inner">
            <slot name="body"></slot>
          </div>
        </div>
        <div class="footer" ${hideWhenEmpty()}>
          <div class="footer-start" ${hideWhenEmpty()}>
            <slot name="footer-start"></slot>
          </div>
          <div class="footer-end" ${hideWhenEmpty()}>
            <slot name="footer-end"></slot>
          </div>
        </div>
      </div>
    `;
  }
}
