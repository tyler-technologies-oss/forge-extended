import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './filter-wrapper.scss?inline';

@customElement('forge-filter-wrapper')
export class FilterWrapperElement extends LitElement {
  static {}

  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html` <div class="filter-wrapper">Facet wrapper component</div> `;
  }
}
