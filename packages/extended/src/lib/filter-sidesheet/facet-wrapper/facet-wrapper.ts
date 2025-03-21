import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { FacetContext, facetContext, updateFacetContext } from '../facet-context';

import styles from './facet-wrapper.scss?inline';

@customElement('forge-facet-wrapper')
export class FilterWrapperElement extends LitElement {
  static {}

  public static override styles = unsafeCSS(styles);

  @provide({ context: facetContext })
  @state()
  public facetCtx = new FacetContext();

  @provide({ context: updateFacetContext })
  private _updateData = (value: string): void => {
    this.data = value;
  };

  public override render(): TemplateResult {
    return html`
      <div class="facet-wrapper">
        <div style="font-size: 13px;">Provider's data: ${this.facetCtx}</div>
        <slot></slot>
      </div>
    `;
  }
}
