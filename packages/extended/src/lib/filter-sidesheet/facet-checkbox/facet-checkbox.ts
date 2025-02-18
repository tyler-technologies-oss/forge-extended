import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './facet-checkbox.scss?inline';
import { defineCheckboxComponent } from '@tylertech/forge';

declare global {
  interface HTMLElementTagNameMap {
    'forge-facet-checkbox': FacetCheckboxElement;
  }
}

@customElement('forge-facet-checkbox')
export class FacetCheckboxElement extends LitElement {
  static {
    defineCheckboxComponent();
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Count value
   */
  @property({ type: Boolean, attribute: 'show-count' })
  public showCount = true;

  /**
   * Count value
   */
  @property({ type: Number, attribute: 'count' })
  public count: number | null = null;

  private get _count(): TemplateResult | typeof nothing {
    if (this.showCount) {
      if (this.count !== null && this.count > 999) {
        const firstNumber = this.count.toString().charAt(0);
        return html`<div class="count">+${firstNumber}k</div>`;
      } else {
        return html`<div class="count">${this.count}</div>`;
      }
    } else {
      return nothing;
    }
  }

  public override render(): TemplateResult {
    return html`
      <div class="container">
        <forge-checkbox>
          <div class="container-inner">
            <slot></slot>
            ${this._count}
          </div>
        </forge-checkbox>
      </div>
    `;
  }
}
