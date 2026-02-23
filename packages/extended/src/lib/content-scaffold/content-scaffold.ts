import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './content-scaffold.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-content-scaffold': ContentScaffoldComponent;
  }
}

export const ContentScaffoldComponentTagName: keyof HTMLElementTagNameMap = 'forge-content-scaffold';

/**
 * @tag forge-content-scaffold
 */
@customElement(ContentScaffoldComponentTagName)
export class ContentScaffoldComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`<div class="container">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>`;
  }
}
