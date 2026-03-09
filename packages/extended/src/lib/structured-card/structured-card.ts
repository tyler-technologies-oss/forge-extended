import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { styleMap } from 'lit/directives/style-map.js';
import { defineCardComponent, defineToolbarComponent } from '@tylertech/forge';
import { defineContentScaffoldComponent } from '../content-scaffold';
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
    defineToolbarComponent();
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

  @queryAssignedNodes({ slot: 'footer-secondary-action', flatten: true })
  private _footerSecondaryActionNodes!: Node[];

  @queryAssignedNodes({ slot: 'footer-primary-action', flatten: true })
  private _footerPrimaryActionNodes!: Node[];

  readonly #footerSecondaryActionSlot = html`<slot
    name="footer-secondary-action"
    @slotchange=${this.#handleSlotChange}></slot>`;
  readonly #footerPrimaryActionSlot = html`<slot
    name="footer-primary-action"
    @slotchange=${this.#handleSlotChange}></slot>`;

  get #footerActions(): TemplateResult | typeof nothing {
    const hasSecondaryAction = this._footerSecondaryActionNodes.length > 0;
    const hasPrimaryAction = this._footerPrimaryActionNodes.length > 0;
    const hasFooterActions = hasSecondaryAction || hasPrimaryAction;

    return when(
      hasFooterActions,
      () => html`
        <div class="footer-actions" slot="footer-end">
          ${this.#footerSecondaryActionSlot} ${this.#footerPrimaryActionSlot}
        </div>
      `,
      () => html` ${this.#footerSecondaryActionSlot} ${this.#footerPrimaryActionSlot} `
    );
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (['footer-secondary-action', 'footer-primary-action'].includes(slotName)) {
      this.requestUpdate();
    }
  }

  public override render(): TemplateResult {
    return html` <forge-card class="container">
      <forge-content-scaffold
        style=${styleMap({ '--forge-content-scaffold-body-padding': this.withTable ? '0' : undefined })}>
        <slot name="before-title" slot="before-header-start"></slot>
        <div role="heading" aria-level=${this.headingLevel} id="title" class="title" slot="header-start">
          <slot name="title"></slot>
        </div>
        <slot name="header-actions" slot="header-end"></slot>
        <slot name="body" slot="body"></slot>
        <slot name="footer-start" slot="footer-start"></slot>
        ${this.#footerActions}
      </forge-content-scaffold>
    </forge-card>`;
  }
}
