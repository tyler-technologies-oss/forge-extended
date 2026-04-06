import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineCardComponent, defineTooltipComponent, toggleState } from '@tylertech/forge';
import styles from './count-card.scss?inline';
import { hideWhenEmpty } from '../utils/lit-utils';
import { SlotTextController } from '../utils/slot-utils';

declare global {
  interface HTMLElementTagNameMap {
    'forge-count-card': CountCardComponent;
  }
}

export const CountCardComponentTagName: keyof HTMLElementTagNameMap = 'forge-count-card';

export type CountCardTheme =
  | 'none'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'info-secondary';

const THEME_STATES: CountCardTheme[] = [
  'none',
  'primary',
  'secondary',
  'tertiary',
  'success',
  'error',
  'warning',
  'info',
  'info-secondary'
];

/**
 * A card component for displaying a count or metric with an icon and label.
 *
 * @tag forge-count-card
 *
 * @slot icon - The icon displayed at the start of the card header.
 * @slot label - The label text displayed next to the icon.
 * @slot header-end - Optional content at the end of the header, ideal for badges or accessory menus.
 * @slot count - The main count or value displayed prominently below the header.
 * @slot count-end - Optional content displayed after the count, ideal for units or secondary values.
 * @slot body - Optional content below the count for additional details or secondary information.
 * @slot full-width - Optional full-width content below the primary card content, ideal for sparklines, meters, or progress indicators.
 *
 * @cssprop --forge-count-card-icon-background - Controls the background color of the icon container. Defaults to Forge's surface-container color.
 * @cssprop --forge-count-card-icon-color - Controls the color of the icon. Defaults to Forge's on-surface color.
 * @cssprop --forge-count-card-icon-container-size - Controls the size of the icon container. Defaults to `32px`.
 * @cssprop --forge-count-card-icon-size - Controls the size of the icon itself. Defaults to `24px`.
 * @cssprop --forge-count-card-color - Controls the text color of the label and count. Inherited from theme when a theme is applied.
 *
 * @state none - Applied when the theme is set to `none`. Uses the default card styling.
 * @state primary - Applied when the theme is set to `primary`.
 * @state secondary - Applied when the theme is set to `secondary`.
 * @state tertiary - Applied when the theme is set to `tertiary`.
 * @state success - Applied when the theme is set to `success`.
 * @state error - Applied when the theme is set to `error`.
 * @state warning - Applied when the theme is set to `warning`.
 * @state info - Applied when the theme is set to `info`.
 * @state info-secondary - Applied when the theme is set to `info-secondary`. Provides a subtle tonal style.
 * @state no-border - Applied when the `noBorder` property is `true`.
 */
@customElement(CountCardComponentTagName)
export class CountCardComponent extends LitElement {
  static {
    defineCardComponent();
    defineTooltipComponent();
  }

  public static override styles = unsafeCSS(styles);

  readonly #internals: ElementInternals;
  readonly #labelController = new SlotTextController(this, { slotName: 'label' });
  readonly #countController = new SlotTextController(this, { slotName: 'count' });

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  /** The theme variant applied to the card. */
  @property({ type: String })
  public theme: CountCardTheme = 'none';

  /** Whether to hide the card border. */
  @property({ type: Boolean, attribute: 'no-border' })
  public noBorder = false;

  public override willUpdate(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('theme')) {
      for (const themeState of THEME_STATES) {
        toggleState(this.#internals, themeState, this.theme === themeState);
      }
    }
    if (changedProperties.has('noBorder')) {
      toggleState(this.#internals, 'no-border', this.noBorder);
    }
  }

  public override render(): TemplateResult {
    return html`
      <forge-card>
        <div class="header">
          <div class="header-start">
            <div class="icon-container" ${hideWhenEmpty()}>
              <slot name="icon"></slot>
            </div>
            <div class="label" ${hideWhenEmpty()}>
              <slot name="label" @slotchange=${this.#labelController.handleSlotChange}></slot>
            </div>
            ${this.#labelController.text ? html`<forge-tooltip>${this.#labelController.text}</forge-tooltip>` : nothing}
          </div>
          <div class="header-end" ${hideWhenEmpty()}>
            <slot name="header-end"></slot>
          </div>
        </div>
        <div class="inner-container">
          <div class="count-container" ${hideWhenEmpty()}>
            <div class="count">
              <slot name="count" @slotchange=${this.#countController.handleSlotChange}></slot>
            </div>
            ${this.#countController.text ? html`<forge-tooltip>${this.#countController.text}</forge-tooltip>` : nothing}
            <slot name="count-end"></slot>
          </div>
          <div ${hideWhenEmpty()}>
            <slot name="body"></slot>
          </div>
        </div>
        <div ${hideWhenEmpty()}>
          <slot name="full-width"></slot>
        </div>
      </forge-card>
    `;
  }
}
