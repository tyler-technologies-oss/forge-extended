import { LitElement, html, unsafeCSS, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './footer-item.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-footer-item': FooterItemComponent;
  }
}

export const FooterItemComponentTagName: keyof HTMLElementTagNameMap = 'forge-footer-item';

@customElement(FooterItemComponentTagName)
export class FooterItemComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  public connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'listitem');
  }

  public render(): TemplateResult {
    return html`<div class="forge-footer-item"><slot></slot></div>`;
  }
}
