import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { defineCardComponent } from '@tylertech/forge';
import { defineContentScaffoldComponent } from '../content-scaffold';
import { hideWhenEmpty } from '../utils/lit-utils.js';
import styles from './structured-card.scss?inline';
import { HeadingLevel } from '$lib/types/types';

declare global {
  interface HTMLElementTagNameMap {
    'forge-structured-card': StructuredCardComponent;
  }
}

export const StructuredCardComponentTagName: keyof HTMLElementTagNameMap = 'forge-structured-card';

/**
 * @tag forge-structured-card
 *
 * @slot before-title - Content displayed before the title in the header
 * @slot title - The title content displayed in the header
 * @slot header-actions - Action buttons or controls displayed at the end of the header
 * @slot body - The main body content of the card
 * @slot footer - Content displayed at the start of the footer (e.g., pagination controls)
 * @slot footer-secondary-action - Secondary action button displayed at the end of the footer
 * @slot footer-primary-action - Primary action button displayed at the end of the footer
 *
 * @cssprop --forge-structured-card-body-height - Controls the height of the body content. Defaults to `auto`.
 */
@customElement(StructuredCardComponentTagName)
export class StructuredCardComponent extends LitElement {
  static {
    defineCardComponent();
    defineContentScaffoldComponent();
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Controls the semantic heading level for the title content. Defaults to `2` (h2).
   * Use this to maintain proper heading hierarchy in your document structure.
   */
  @property({ attribute: 'heading-level', type: Number })
  public headingLevel: HeadingLevel = 2;

  /**
   * When set to `true`, removes the default padding from the body section to accommodate
   * tables and other full-width content. This ensures tables extend edge-to-edge within the card body.
   */
  @property({ attribute: 'with-table', type: Boolean })
  public withTable = false;

  public override render(): TemplateResult {
    return html`
      <forge-card class="container">
        <forge-content-scaffold
          full-width-header
          full-width-footer
          style=${styleMap({ '--forge-content-scaffold-body-padding': this.withTable ? '0' : undefined })}>
          <div slot="header" class="header-container" ${hideWhenEmpty()}>
            <div class="title-container">
              <slot name="before-title" slot="before-header-start"></slot>
              <div role="heading" aria-level=${this.headingLevel} id="title" slot="header-start">
                <slot name="title"></slot>
              </div>
            </div>

            <div class="actions-container" ${hideWhenEmpty()}>
              <slot name="header-actions" slot="header-end"></slot>
            </div>
          </div>

          <slot name="body" slot="body"></slot>
          <div class="footer-container" slot="footer" ${hideWhenEmpty()}>
            <div class="footer-start-container">
              <slot name="footer-start"></slot>
            </div>
            <div class="footer-actions" ${hideWhenEmpty()}>
              <slot name="footer-secondary-action"></slot>
              <slot name="footer-primary-action"></slot>
            </div>
          </div>
        </forge-content-scaffold>
      </forge-card>
    `;
  }
}
