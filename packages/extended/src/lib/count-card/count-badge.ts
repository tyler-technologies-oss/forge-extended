import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineBadgeComponent, Theme, toggleState } from '@tylertech/forge';
import styles from './count-badge.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-count-badge': CountBadgeComponent;
  }
}

export const CountBadgeComponentTagName: keyof HTMLElementTagNameMap = 'forge-count-badge';

const THEME_STATES: Theme[] = ['primary', 'secondary', 'tertiary', 'success', 'error', 'warning', 'info'];

/**
 * A badge component designed for use within count cards to display status or change indicators.
 *
 * @tag forge-count-badge
 *
 * @slot - The badge content (e.g., "+12%", "New", etc.)
 *
 * @cssprop --forge-count-badge-background - Controls the background color of the badge.
 * @cssprop --forge-count-badge-color - Controls the text color of the badge.
 *
 * @state success - Applied when the theme is set to `success`.
 * @state error - Applied when the theme is set to `error`.
 * @state warning - Applied when the theme is set to `warning`.
 * @state info - Applied when the theme is set to `info`.
 * @state primary - Applied when the theme is set to `primary`.
 * @state secondary - Applied when the theme is set to `secondary`.
 * @state tertiary - Applied when the theme is set to `tertiary`.
 */
@customElement(CountBadgeComponentTagName)
export class CountBadgeComponent extends LitElement {
  static {
    defineBadgeComponent();
  }

  public static override styles = unsafeCSS(styles);

  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  /** The theme variant of the badge. */
  @property({ type: String })
  public theme: Theme = 'success';

  public override willUpdate(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('theme')) {
      for (const state of THEME_STATES) {
        toggleState(this.#internals, state, this.theme === state);
      }
    }
  }

  public override render(): TemplateResult {
    return html`
      <forge-badge theme=${this.theme}>
        <slot></slot>
        <slot name="end" slot="end"></slot>
      </forge-badge>
    `;
  }
}
