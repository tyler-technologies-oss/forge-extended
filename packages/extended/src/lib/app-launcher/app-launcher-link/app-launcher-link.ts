import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineListComponent, IconRegistry } from '@tylertech/forge';

import styles from './app-launcher-link.scss?inline';
import { tylIconOpenInNew } from '@tylertech/tyler-icons';

declare global {
  interface HTMLElementTagNameMap {
    'forge-app-launcher-link': AppLauncherLinkComponent;
  }
}

export const AppLauncherLinkComponentTagName: keyof HTMLElementTagNameMap = 'forge-app-launcher-link';

export interface AppLauncherLink {
  label: string;
  uri: string;
}

/**
 * @tag forge-app-launcher-link
 *
 * @slot - The `<a>` element for the link.
 */
@customElement(AppLauncherLinkComponentTagName)
export class AppLauncherLinkComponent extends LitElement {
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
