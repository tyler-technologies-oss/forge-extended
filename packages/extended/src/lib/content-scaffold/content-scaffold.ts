import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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

  /**
   * Controls whether to show a divider below the header
   */
  @property({ attribute: 'show-header-divider', type: Boolean })
  public showHeaderDivider = true;

  public override render(): TemplateResult {
    return html`<div class="container">
      <forge-toolbar ?no-border=${!this.showHeaderDivider}>
        <slot name="before-header-start" slot="before-start"></slot>
        <slot name="header-start" slot="start"></slot>
        <slot name="header-end" slot="end"></slot>
        <slot name="after-header-end" slot="after-end"></slot>
      </forge-toolbar>
      <slot name="body"></slot>
      <forge-toolbar inverted>
        <slot name="before-footer-start" slot="before-start"></slot>
        <slot name="footer-start" slot="start"></slot>
        <slot name="footer-end" slot="end"></slot>
        <slot name="after-footer-end" slot="after-end"></slot>
      </forge-toolbar>
    </div>`;
  }
}
