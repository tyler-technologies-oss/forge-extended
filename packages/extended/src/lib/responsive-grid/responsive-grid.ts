import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './responsive-grid.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-responsive-grid': ResponsiveGridComponent;
  }
}

export const ResponsiveGridComponentTagName: keyof HTMLElementTagNameMap = 'forge-responsive-grid';

/**
 * @tag forge-responsive-grid
 */
@customElement(ResponsiveGridComponentTagName)
export class ResponsiveGridComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: Number, attribute: 'max-column-count' })
  public maxColumnCount = 3;

  @property({ type: Number, attribute: 'gap' })
  public gap = 16;

  @property({ type: Number, attribute: 'min-column-size' })
  public minColumnSize = 320;

  public override render(): TemplateResult {
    return html`
      <div
        class="grid"
        id="grid-container"
        data-columns="${this.maxColumnCount}"
        data-gap="${this.gap}"
        data-min-column-size="${this.minColumnSize}">
        <slot></slot>
      </div>
    `;
  }
}
