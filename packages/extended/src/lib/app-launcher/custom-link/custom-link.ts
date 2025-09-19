import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineListComponent, IconRegistry } from '@tylertech/forge';

import styles from './custom-link.scss?inline';
import { tylIconOpenInNew } from '@tylertech/tyler-icons';

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

    IconRegistry.define([tylIconOpenInNew]);
  }

  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`
      <forge-list-item>
        <forge-icon slot="start" name="open_in_new"></forge-icon>
        <slot></slot>
      </forge-list-item>
    `;
  }
}
