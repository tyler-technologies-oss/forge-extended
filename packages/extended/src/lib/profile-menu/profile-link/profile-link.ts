import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './profile-link.scss?inline';
import { defineDividerComponent, defineListComponent } from '@tylertech/forge';

declare global {
  interface HTMLElementTagNameMap {
    'forge-profile-link': ProfileLinkComponent;
  }
}

export const ProfileLinkComponentTagName: keyof HTMLElementTagNameMap = 'forge-profile-link';

/**
 * @tag forge-profile-link
 */
@customElement(ProfileLinkComponentTagName)
export class ProfileLinkComponent extends LitElement {
  static {
    defineListComponent();
    defineDividerComponent();
  }

  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`
      <forge-list-item>
        <slot name="icon" slot="start"></slot>
        <slot></slot>
      </forge-list-item>
    `;
  }
}
