import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { defineCardComponent } from '@tylertech/forge';
import { defineContentScaffoldComponent } from '../content-scaffold';
import { hideWhenEmpty } from '../utils/lit-utils.js';
import styles from './structured-card.scss?inline';
import { HeadingLevel } from '../types/types';

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
 *
 * @state body-spacing-none - Applied when the `bodySpacing` property is set to `none`. Used to remove default body padding for full-width content.
 */
@customElement(StructuredCardComponentTagName)
export class StructuredCardComponent extends LitElement {
  static {
    defineCardComponent();
    defineContentScaffoldComponent();
  }

  public static override styles = unsafeCSS(styles);

  #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  /**
   * Controls the semantic heading level for the title content. Defaults to `2` (h2).
   * Use this to maintain proper heading hierarchy in your document structure.
   */
  @property({ attribute: 'heading-level', type: Number })
  public headingLevel: HeadingLevel = 2;

  /**
   * Controls the spacing applied to the body section. Defaults to `default`.
   * - `default`: Applies standard padding to the body section.
   * - `none`: Removes padding from the body section for full-width content like tables.
   */
  @property({ attribute: 'body-spacing' })
  public bodySpacing: 'none' | 'default' = 'default';

  @queryAssignedNodes({ slot: 'before-title', flatten: true })
  private _beforeTitleNodes!: Node[];

  public override willUpdate(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('bodySpacing')) {
      if (this.bodySpacing === 'none') {
        this.#internals.states.add('body-spacing-none');
      } else {
        this.#internals.states.delete('body-spacing-none');
      }
    }
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (slotName === 'before-title') {
      this.requestUpdate();
    }
  }

  public override render(): TemplateResult {
    return html`
      <forge-card class="container">
        <forge-content-scaffold @slotchange=${this.#handleSlotChange} full-width-header full-width-footer>
          <div slot="header" class="header-container" ${hideWhenEmpty()}>
            <div class="title-container">
              <slot name="before-title" slot="before-header-start"></slot>
              <div
                role="heading"
                aria-level=${this.headingLevel}
                id="title"
                slot="header-start"
                class=${classMap({
                  'title-with-margin': this._beforeTitleNodes.length === 0
                })}>
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
