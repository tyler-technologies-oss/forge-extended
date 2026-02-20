import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineCardComponent, defineToolbarComponent } from '@tylertech/forge';
import styles from './content-card.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-content-card': ContentCardComponent;
  }
}

export const ContentCardComponentTagName: keyof HTMLElementTagNameMap = 'forge-content-card';

/**
 * @tag forge-content-card
 */
@customElement(ContentCardComponentTagName)
export class ContentCardComponent extends LitElement {
  static {
    defineCardComponent();
    defineToolbarComponent();
  }

  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`<forge-card class="content-card-container">
      <forge-toolbar></forge-toolbar>
      <div class="content-card-body">
        <slot name="body"></slot>
      </div>
      <forge-toolbar inverted></forge-toolbar>
    </forge-card>`;
  }
}
