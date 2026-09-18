import { LitElement, html, unsafeCSS, TemplateResult } from 'lit';
import { tryDefine } from '@tylertech/forge-core';
import styles from './footer-item.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-footer-item': FooterItemComponent;
  }
}

export const FooterItemComponentTagName: keyof HTMLElementTagNameMap = 'forge-footer-item';

/**
 * A footer item component for displaying individual items within a footer, such as links, text, or copyright information.
 *
 * @tag forge-footer-item
 *
 * @slot - Slot for footer item content (e.g., text, links, or icons).
 *
 * @cssprop --forge-footer-item-color - Controls the text color of the footer item.
 */
export class FooterItemComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  public connectedCallback(): void {
    super.connectedCallback();
    // TODO: use setDefaultAria once extended is merged into the mono repo
    this.setAttribute('role', 'listitem');
  }

  public override render(): TemplateResult {
    return html`<div class="footer-item" part="root"><slot></slot></div>`;
  }
}

tryDefine(FooterItemComponentTagName, FooterItemComponent);
