import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineToolbarComponent } from '@tylertech/forge';

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
 * @slot actions - Action buttons (maps to the toolbar end slot)
 * @slot after-end - Content after the end section
 */
@customElement(MultiSelectHeaderComponentTagName)
export class MultiSelectHeaderComponent extends LitElement {
  static {
    defineToolbarComponent();
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

  public override render(): TemplateResult {
    return html`
      <forge-toolbar ?no-border=${this.noBorder}>
        <div slot="start">
          <slot name="start">
            <span class="selected-text"> ${this.selectedCount} ${this.selectedText} </span>
          </slot>
        </div>
        <slot name="actions" slot="end"></slot>
      </forge-toolbar>
    `;
  }
}
