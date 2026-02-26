import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './content-scaffold.scss?inline';
import { defineToolbarComponent } from '@tylertech/forge';

declare global {
  interface HTMLElementTagNameMap {
    'forge-content-scaffold': ContentScaffoldComponent;
  }
}

export const ContentScaffoldComponentTagName: keyof HTMLElementTagNameMap = 'forge-content-scaffold';

/**
 * @tag forge-content-scaffold
 */
@customElement(ContentScaffoldComponentTagName)
export class ContentScaffoldComponent extends LitElement {
  static {
    defineToolbarComponent();
  }
  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`<div class="container">
      <div class="header">
        <div class="before-header-start">
          <slot name="before-header-start"></slot>
        </div>
        <div class="header-start">
          <slot name="header-start"></slot>
        </div>
        <div class="header-end">
          <slot name="header-end"></slot>
        </div>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
      <div class="footer">
        <div class="footer-start">
          <slot name="footer-start"></slot>
        </div>
        <div class="footer-end">
          <slot name="footer-end"></slot>
        </div>
      </div>
    </div>`;
  }
}
