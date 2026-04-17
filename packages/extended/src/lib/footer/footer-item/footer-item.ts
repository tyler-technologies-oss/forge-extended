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
 * @tag forge-footer-item
 *
 * @slot - Slot for footer item content (e.g., text, links, or icons).
 */

@customElement(FooterItemComponentTagName)
export class FooterItemComponent extends LitElement {
  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }
  public static override styles = unsafeCSS(styles);

  public connectedCallback(): void {
    super.connectedCallback();
    setDefaultAria(this, this.#internals, {
      role: 'listitem'
    });
  }

  public override render(): TemplateResult {
    return html`<div class="footer-item"><slot></slot></div>`;
  }
}
