import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineCardComponent } from '@tylertech/forge';
import styles from './count-card.scss?inline';
import { hideWhenEmpty } from '../utils/lit-utils';

declare global {
  interface HTMLElementTagNameMap {
    'forge-count-card': CountCardComponent;
  }
}

export const CountCardComponentTagName: keyof HTMLElementTagNameMap = 'forge-count-card';

/**
 * A card component for displaying a count or metric with an icon and label.
 *
 * @tag forge-count-card
 *
 * @slot icon - The icon displayed at the start of the card header.
 * @slot label - The label text displayed next to the icon.
 * @slot count - The main count or value displayed prominently below the header.
 * @slot full-bleed - Optional full-width content below the primary card content, ideal for sparklines, meters, or progress indicators.
 *
 * @cssprop --forge-count-card-icon-background - Controls the background color of the icon container. Defaults to Forge's surface-container color.
 * @cssprop --forge-count-card-icon-color - Controls the color of the icon. Defaults to Forge's on-surface color.
 * @cssprop --forge-count-card-icon-container-size - Controls the size of the icon container. Defaults to `24px`.
 * @cssprop --forge-count-card-icon-size - Controls the size of the icon itself. Defaults to `16px`.
 */
@customElement(CountCardComponentTagName)
export class CountCardComponent extends LitElement {
  static {
    defineCardComponent();
  }

  public static override styles = unsafeCSS(styles);

  public override render(): TemplateResult {
    return html`
      <forge-card class="container">
        <div class="inner-container">
          <div class="header">
            <div class="icon-container" ${hideWhenEmpty()}>
              <slot name="icon"></slot>
            </div>
            <div class="label">
              <slot name="label"></slot>
            </div>
          </div>
          <div class="count">
            <slot name="count"></slot>
          </div>
        </div>
        <div class="full-bleed">
          <slot name="full-bleed"></slot>
        </div>
      </forge-card>
    `;
  }
}
