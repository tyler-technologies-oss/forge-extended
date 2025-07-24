import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './app-launcher.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-app-launcher': AppLauncherComponent;
  }
}

export const AppLauncherComponentTagName: keyof HTMLElementTagNameMap = 'forge-app-launcher';

/**
 * @tag forge-app-launcher
 */
@customElement(AppLauncherComponentTagName)
export class AppLauncherComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * Description of the property.
   */
  @property({ type: Boolean, attribute: 'some-property' })
  public someProperty = true;

  public override render(): TemplateResult {
    return html`<div>AppLauncherComponent works!</div>`;
  }
}
