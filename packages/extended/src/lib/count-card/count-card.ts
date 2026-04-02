import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineCardComponent, Theme, toggleState } from '@tylertech/forge';
import styles from './count-card.scss?inline';
import { hideWhenEmpty } from '../utils/lit-utils';

declare global {
  interface HTMLElementTagNameMap {
    'forge-count-card': CountCardComponent;
  }
}

export const CountCardComponentTagName: keyof HTMLElementTagNameMap = 'forge-count-card';

const THEME_STATES: Theme[] = ['primary', 'secondary', 'tertiary', 'success', 'error', 'warning', 'info'];

/**
 * A card component for displaying a count or metric with an icon and label.
 *
 * @tag forge-count-card
 *
 * @slot icon - The icon displayed at the start of the card header.
 * @slot label - The label text displayed next to the icon.
 * @slot header-end - Optional content at the end of the header, ideal for badges or accessory menus.
 * @slot count - The main count or value displayed prominently below the header.
 * @slot full-width - Optional full-width content below the primary card content, ideal for sparklines, meters, or progress indicators.
 *
 * @cssprop --forge-count-card-icon-background - Controls the background color of the icon container. Defaults to Forge's surface-container color.
 * @cssprop --forge-count-card-icon-color - Controls the color of the icon. Defaults to Forge's on-surface color.
 * @cssprop --forge-count-card-icon-container-size - Controls the size of the icon container. Defaults to `24px`.
 * @cssprop --forge-count-card-icon-size - Controls the size of the icon itself. Defaults to `16px`.
 *
 * @state success - Applied when the theme is set to `success`.
 * @state error - Applied when the theme is set to `error`.
 * @state warning - Applied when the theme is set to `warning`.
 * @state info - Applied when the theme is set to `info`.
 * @state primary - Applied when the theme is set to `primary`.
 * @state secondary - Applied when the theme is set to `secondary`.
 * @state tertiary - Applied when the theme is set to `tertiary`.
 * @state tonal - Applied when the tonal property is set to `true`.
 */
@customElement(CountCardComponentTagName)
export class CountCardComponent extends LitElement {
  static {
    defineCardComponent();
  }

  public static override styles = unsafeCSS(styles);

  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  /** The theme variant applied to the icon container. */
  @property({ type: String })
  public theme?: Theme;

  /** Whether to apply tonal styling to the card. */
  @property({ type: Boolean })
  public tonal = false;

  public override willUpdate(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('theme')) {
      for (const state of THEME_STATES) {
        toggleState(this.#internals, state, this.theme === state);
      }
    }
    if (changedProperties.has('tonal')) {
      toggleState(this.#internals, 'tonal', this.tonal);
    }
  }

  public override render(): TemplateResult {
    return html`
      <forge-card class="container">
        <div class="header">
          <div class="header-start">
            <div class="icon-container" ${hideWhenEmpty()}>
              <slot name="icon"></slot>
            </div>
            <div class="label" ${hideWhenEmpty()}>
              <slot name="label"></slot>
            </div>
          </div>
          <div class="header-end" ${hideWhenEmpty()}>
            <slot name="header-end"></slot>
          </div>
        </div>
        <div class="inner-container">
          <div class="count" ${hideWhenEmpty()}>
            <slot name="count"></slot>
          </div>
          <div class="body" ${hideWhenEmpty()}>
            <slot name="body"></slot>
          </div>
        </div>
        <div class="full-width" ${hideWhenEmpty()}>
          <slot name="full-width"></slot>
        </div>
      </forge-card>
    `;
  }
}
