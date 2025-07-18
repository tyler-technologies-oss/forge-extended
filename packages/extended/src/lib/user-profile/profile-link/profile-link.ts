import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineListComponent } from '@tylertech/forge';

import styles from './profile-link.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-profile-link': ProfileLinkComponent;
  }
}

export const ProfileLinkComponentTagName: keyof HTMLElementTagNameMap = 'forge-profile-link';

/**
 * @tag forge-profile-link
 *
 * @slot icon - The icon to display in the profile link.
 * @slot - The `<a>` element for the link.
 */
@customElement(ProfileLinkComponentTagName)
export class ProfileLinkComponent extends LitElement {
  static {
    defineListComponent();
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
