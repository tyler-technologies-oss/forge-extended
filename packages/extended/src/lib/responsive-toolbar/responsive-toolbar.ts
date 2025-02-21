import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './responsive-toolbar.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-responsive-toolbar': ResponsiveToolbarComponent;
  }
}

export const ResponsiveToolbarComponentTagName: keyof HTMLElementTagNameMap = 'forge-responsive-toolbar';

/**
 * @tag forge-responsive-toolbar
 */
@customElement(ResponsiveToolbarComponentTagName)
export class ResponsiveToolbarComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * Description of the property.
   */
  @property({ type: Boolean, attribute: 'some-property' })
  public someProperty = true;

  public override render(): TemplateResult {
    return html`<div>ResponsiveToolbarComponent works!</div>`;
  }
}
