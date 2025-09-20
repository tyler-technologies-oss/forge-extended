import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineAvatarComponent, defineListComponent } from '@tylertech/forge';

import styles from './app-link.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-app-link': AppLinkComponent;
  }
}

export const AppLinkComponentTagName: keyof HTMLElementTagNameMap = 'forge-app-link';

/**
 * @tag forge-app-link
 *
 * @slot - The `<a>` element for the link.
 */
@customElement(AppLinkComponentTagName)
export class AppLinkComponent extends LitElement {
  static {
    defineListComponent();
    defineAvatarComponent();
  }

  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`
      <forge-list-item class="app-list-item">
        <forge-avatar class="app-avatar" slot="start">
          <slot name="icon"></slot>
        </forge-avatar>
        <slot></slot>
      </forge-list-item>
    `;
  }
}
