import { LitElement, html, unsafeCSS, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './footer-item.scss?inline';
import { setDefaultAria } from '@tylertech/forge/esm/core/utils/a11y-utils';

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

@customElement(FooterItemComponentTagName)
export class FooterItemComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  public connectedCallback(): void {
    super.connectedCallback();
    setDefaultAria(this, this.#internals, {
      role: 'listitem'
    });
  }

  public override render(): TemplateResult {
    return html`<div class="footer-item" part="root"><slot></slot></div>`;
  }
}
