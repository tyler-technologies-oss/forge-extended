import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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

  /** Shows the Select All button next to the selected count */
  @property({ type: Boolean, attribute: 'show-select-all' })
  public showSelectAll = false;

  public override render(): TemplateResult {
    return html`
      <forge-toolbar ?no-border=${this.noBorder}>
        <div slot="start">
          <slot name="start">
            <span class="selected-text"> ${this.selectedCount} ${this.selectedText} </span>
            ${when(
              this.showSelectAll,
              () => html`
                <forge-button variant="text" class="select-all-button">
                  <slot name="select-all">Select All</slot>
                </forge-button>
              `
            )}
          </slot>
        </div>
        <slot name="actions" slot="end"></slot>
      </forge-toolbar>
    `;
  }
}
