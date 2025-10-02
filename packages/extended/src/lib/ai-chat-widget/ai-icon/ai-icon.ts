import { LitElement, PropertyValues, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { toggleState } from '@tylertech/forge';

import styles from './ai-icon.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-icon': AiIconComponent;
  }
}

export const AiIconComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-icon';

/**
 * @tag forge-ai-icon
 *
 * @state no-border - The icon is displayed without a border.
 * @state border - The icon is displayed with a border.
 */
@customElement(AiIconComponentTagName)
export class AiIconComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Whether to display the icon without a border */
  @property({ type: Boolean, attribute: 'no-border' })
  public noBorder = false;

  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#setCssState();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('noBorder')) {
      this.#setCssState();
    }
  }

  #setCssState(): void {
    toggleState(this.#internals, 'no-border', this.noBorder);
    toggleState(this.#internals, 'border', !this.noBorder);
  }

  public override render(): TemplateResult {
    return html`
      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.375 10.625L15 12.5L9.375 14.375L7.5 20L5.625 14.375L0 12.5L5.625 10.625L7.5 5L9.375 10.625ZM16.25 3.75L20 5L16.25 6.25L15 10L13.75 6.25L10 5L13.75 3.75L15 0L16.25 3.75Z" />
      </svg>
    `;
  }
}
