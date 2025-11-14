import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { defineToolbarComponent, defineIconButtonComponent, defineIconComponent, IconRegistry } from '@tylertech/forge';

import styles from './page-toolbar.scss?inline';
import { tylIconArrowBack } from '@tylertech/tyler-icons';

declare global {
  interface HTMLElementTagNameMap {
    'forge-page-toolbar': PageToolbarComponent;
  }
}

export const PageToolbarComponentTagName: keyof HTMLElementTagNameMap = 'forge-page-toolbar';

/**
 * @tag forge-page-toolbar
 *
 * @property {string} pageTitle - The page title to display in the toolbar
 * @property {boolean} showBackArrow - Controls whether the back arrow button is shown (default: true)
 * @property {boolean} noBorder - Controls whether the toolbar border is hidden (default: false)
 *
 * @slot center - Places content in the toolbar center slot
 * @slot end - Places content in the toolbar end slot
 */
@customElement(PageToolbarComponentTagName)
export class PageToolbarComponent extends LitElement {
  static {
    defineToolbarComponent();
    defineIconButtonComponent();
    defineIconComponent();

    IconRegistry.define([tylIconArrowBack]);
  }

  public static override styles = unsafeCSS(styles);

  @property({ type: String, attribute: 'page-title' })
  public pageTitle = '';

  @property({ type: Boolean, attribute: 'show-back-arrow' })
  public showBackArrow = false;

  @property({ type: Boolean, attribute: 'no-border' })
  public noBorder = false;

  public override render(): TemplateResult {
    return html`
      <forge-toolbar class="page-toolbar" ?no-border=${this.noBorder}>
        ${when(
          this.showBackArrow,
          () => html`
            <forge-icon-button slot="start" density="medium">
              <forge-icon name="arrow_back" class="back-arrow"></forge-icon>
            </forge-icon-button>
            <div class="vertical-divider" slot="start"></div>
          `
        )}
        <h2 slot="start" class="page-title">${this.pageTitle}</h2>
        <slot name="center" slot="center"></slot>
        <slot name="end" slot="end"></slot>
      </forge-toolbar>
    `;
  }
}
