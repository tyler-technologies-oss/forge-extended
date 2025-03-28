import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './app-launcher.scss?inline';
import {
  defineCardComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineTextFieldComponent,
  IconRegistry
} from '@tylertech/forge';
import { tylIconApps, tylIconOpenInNew, tylIconSearch } from '@tylertech/tyler-icons/standard';

declare global {
  interface HTMLElementTagNameMap {
    'forge-app-launcher': AppLauncherComponent;
  }
}

export interface AppLauncherConfig {
  optionsCallback: AppLauncherOptionsCallback;
}
export interface AppLauncherOptionResult {
  options: AppLauncherOption[];
}
export interface AppLauncherOption {
  productGroup: string;
  label: string;
  uri: string;
  icon: string;
  target?: string;
}

export interface AppLauncherOptionGroup {
  label: string;
  apps: AppLauncherOption[];
}

export type AppLauncherOptionsCallback = () => Promise<AppLauncherOptionResult>;

export const AppLauncherComponentTagName: keyof HTMLElementTagNameMap = 'forge-app-launcher';

/**
 * @tag forge-app-launcher
 */
@customElement(AppLauncherComponentTagName)
export class AppLauncherComponent extends LitElement {
  static {
    defineCardComponent();
    defineIconButtonComponent();
    defineIconComponent();
    defineTextFieldComponent();

    IconRegistry.define([tylIconApps, tylIconOpenInNew, tylIconSearch]);
  }
  public static override styles = unsafeCSS(styles);

  /**
   * Description of the property.
   */
  @property({ type: Boolean, attribute: 'some-property' })
  public someProperty = true;

  public override render(): TemplateResult {
    return html`
      <forge-icon-button aria-label="Open app launcher" id="app-launcher-trigger">
        <forge-icon name="apps"></forge-icon>
      </forge-icon-button>
      <forge-popover anchor="app-launcher-trigger" placement="left-start" position-strategy="fixed">
        <div class="container">
          <div class="header">
            <h2 class="forge-typography--heading5">App Launcher</h2>
            <forge-button>
              Open App Directory
              <forge-icon slot="end" name="open_in_new"></forge-icon>
            </forge-button>
          </div>
          <forge-card>
            <forge-text-field shape="rounded">
              <forge-icon slot="leading" name="search"></forge-icon>
              <label>Search products & apps</label>
              <input type="text" />
            </forge-text-field>
          </forge-card>
        </div>
      </forge-popover>
    `;
  }
}
