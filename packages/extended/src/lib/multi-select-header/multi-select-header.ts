import { LitElement, TemplateResult, html, unsafeCSS, nothing } from 'lit';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { defineToolbarComponent, defineButtonComponent } from '@tylertech/forge';

import styles from './multi-select-header.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-multi-select-header': MultiSelectHeaderComponent;
  }

  interface HTMLElementEventMap {
    'forge-multi-select-header-select-all': CustomEvent;
  }
}

export const MultiSelectHeaderComponentTagName: keyof HTMLElementTagNameMap = 'forge-multi-select-header';

/**
 * @tag forge-multi-select-header
 *
 * @slot select-all-button-text - Text content for the select-all button
 * @slot actions - Action buttons (maps to the toolbar end slot)
 *
 * @event {CustomEvent} forge-multi-select-header-select-all - Fired when the select-all button is clicked
 */
@customElement(MultiSelectHeaderComponentTagName)
export class MultiSelectHeaderComponent extends LitElement {
  static {
    defineToolbarComponent();
    defineButtonComponent();
  }

  public static override styles = unsafeCSS(styles);

  /** The text to display in the header (typically showing selection count) */
  @property({ type: String })
  public text = '';

  /** Hides the bottom border */
  @property({ type: Boolean, attribute: 'no-border' })
  public noBorder = true;

  @queryAssignedNodes({ slot: 'select-all-button-text', flatten: true })
  private _slottedSelectAllNodes!: Node[];

  readonly #selectAllSlot = html`<slot name="select-all-button-text"></slot>`;

  get #selectAllButton(): TemplateResult | typeof nothing {
    const showSelectAllButton = this._slottedSelectAllNodes.length > 0;
    return when(
      showSelectAllButton,
      () =>
        html` <forge-button id="select-all-button" @click=${this.#handleSelectAllClick}>
          ${this.#selectAllSlot}
        </forge-button>`,
      () => html`${this.#selectAllSlot}`
    );
  }

  public override render(): TemplateResult {
    return html`
      <forge-toolbar ?no-border=${this.noBorder} @slotchange=${this.#handleSlotChange}>
        <div slot="start" class="start-container">
          <span class="selected-text">${this.text}</span>
          ${this.#selectAllButton}
        </div>
        <slot name="actions" slot="end"></slot>
      </forge-toolbar>
    `;
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (['select-all-button-text', 'actions'].includes(slotName)) {
      this.requestUpdate();
    }
  }

  #handleSelectAllClick(): void {
    const event = new CustomEvent('forge-multi-select-header-select-all', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}
