import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineListComponent } from '@tylertech/forge';

import styles from './custom-link.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-custom-link': CustomLinkComponent;
  }
}

export const CustomLinkComponentTagName: keyof HTMLElementTagNameMap = 'forge-custom-link';

/**
 * @tag forge-custom-link
 *
 * @slot - The `<a>` element for the link.
 */
@customElement(CustomLinkComponentTagName)
export class CustomLinkComponent extends LitElement {
  static {
    defineListComponent();
  }

  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`
      <forge-list-item>
        <forge-icon slot="start" name="open_in_new" external></forge-icon>
        <slot></slot>
      </forge-list-item>
    `;
  }
}
