import { LitElement, TemplateResult, html, unsafeCSS, nothing } from 'lit';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { defineToolbarComponent, defineButtonComponent } from '@tylertech/forge';

import styles from './multi-select-header.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-multi-select-header': MultiSelectHeaderComponent;
  }
}

export const MultiSelectHeaderComponentTagName: keyof HTMLElementTagNameMap = 'forge-multi-select-header';

/**
 * @tag forge-multi-select-header
 *
 * @slot before-start - Content before the start section
 * @slot start - Content in the start section (typically title/labels)
 * @slot select-all - Content for the Select All button (when showSelectAll is true)
 * @slot actions - Action buttons (maps to the toolbar end slot)
 * @slot after-end - Content after the end section
 */
@customElement(MultiSelectHeaderComponentTagName)
export class MultiSelectHeaderComponent extends LitElement {
  static {
    defineToolbarComponent();
    defineButtonComponent();
  }

  public static override styles = unsafeCSS(styles);

  /** The number of selected items */
  @property({ type: Number, attribute: 'selected-count' })
  public selectedCount = 0;

  /** Custom text to display after the count. Defaults to "of items selected" */
  @property({ type: String, attribute: 'selected-text' })
  public selectedText = 'of items selected';

  /** Hides the bottom border */
  @property({ type: Boolean, attribute: 'no-border' })
  public noBorder = true;

  @queryAssignedNodes({ slot: 'select-all-button-text', flatten: true })
  private _slottedSelectAllNodes!: Node[];

  readonly #selectAllSlot = html`<slot name="select-all-button-text" id="select-all-button-slot"></slot>`;

  get #selectAllButton(): TemplateResult | typeof nothing {
    const showSelectAllButton = this._slottedSelectAllNodes.length > 0;
    return when(
      showSelectAllButton,
      () => html` <forge-button id="select-all-button"> ${this.#selectAllSlot} </forge-button>`,
      () => html`${this.#selectAllSlot}`
    );
  }

  public override render(): TemplateResult {
    return html`
      <forge-toolbar ?no-border=${this.noBorder} @slotchange=${this.#handleSlotChange}>
        <div slot="start">
          <slot name="start">
            <span class="selected-text">${this.selectedCount} ${this.selectedText}</span>
            ${this.#selectAllButton}
          </slot>
        </div>
        <slot name="actions" slot="end"></slot>
      </forge-toolbar>
    `;
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (['select-all-button-text', 'start', 'actions'].includes(slotName)) {
      this.requestUpdate();
    }
  }
}
