import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineCardComponent, defineToolbarComponent } from '@tylertech/forge';
import { defineContentScaffoldComponent } from '../content-scaffold';
import styles from './content-card.scss?inline';
import { HeadingLevel } from '$lib/types/types';

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
    defineContentScaffoldComponent();
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Controls the heading level for the title content
   */
  @property({ attribute: 'heading-level', type: Number })
  public headingLevel: HeadingLevel = 2;

  public override render(): TemplateResult {
    return html` <forge-card class="container">
      <forge-content-scaffold>
        <slot name="before-title" slot="before-header-start"></slot>
        <slot name="title" slot="header-start"></slot>
        <slot name="header-actions" slot="header-end"></slot>
        <div class="content-card-body" slot="body">
          <slot name="body"></slot>
        </div>
        <slot name="footer-actions" slot="footer-end"></slot>
      </forge-content-scaffold>
    </forge-card>`;
  }
}
