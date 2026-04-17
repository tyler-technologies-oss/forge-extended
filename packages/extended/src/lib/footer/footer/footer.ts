import { LitElement, PropertyValues, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { toggleState } from '@tylertech/forge';
import styles from './footer.scss?inline';
import '../footer-item/footer-item';

declare global {
  interface HTMLElementTagNameMap {
    'forge-footer': FooterComponent;
  }
}

export const FooterComponentTagName: keyof HTMLElementTagNameMap = 'forge-footer';

/**
 * @tag forge-footer
 *
 * @slot - Slot for footer items or custom content
 *
 * @property {('standard'|'alternative'|'auto')} layout - Defines the footer layout mode
 * @property {number} layoutBreakpoint - Width breakpoint used when layout is set to `auto`
 */

@customElement(FooterComponentTagName)
export class FooterComponent extends LitElement {
  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }
  public static override styles = unsafeCSS(styles);

  @property({ type: String })
  public layout: 'standard' | 'alternative' | 'auto' = 'auto';

  @property({ type: Number })
  public layoutBreakpoint = 900;

  #mediaQuery?: MediaQueryList;

  public connectedCallback(): void {
    super.connectedCallback();
    this.#applyLayout();
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#removeMediaQuery();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('layout')) {
      this.#applyLayout();
    }
    if (changedProperties.has('layoutBreakpoint')) {
      this.#applyLayoutBreakpoint();
    }
  }

  #applyLayout(): void {
    if (this.layout === 'auto') {
      this.#setMediaQuery();
      toggleState(this.#internals, 'auto', true);
      return;
    }
    this.#removeMediaQuery();
    toggleState(this.#internals, 'auto', false);
    toggleState(this.#internals, this.layout, true);
  }

  #applyLayoutBreakpoint(): void {
    this.setAttribute('layout-breakpoint', this.layoutBreakpoint.toString());
    if (this.layout === 'auto') {
      this.#removeMediaQuery();
      this.#setMediaQuery();
    }
  }

  #setMediaQuery(): void {
    this.#mediaQuery = window.matchMedia(`(max-width: ${this.layoutBreakpoint}px)`);
    this.#mediaQuery.addEventListener('change', this.#onMediaChange);
    this.#onMediaChange(this.#mediaQuery);
  }

  #removeMediaQuery(): void {
    if (this.#mediaQuery) {
      this.#mediaQuery.removeEventListener('change', this.#onMediaChange);
    }
  }

  #onMediaChange = (evt: MediaQueryList | MediaQueryListEvent): void => {
    toggleState(this.#internals, 'alternative', evt.matches);
    toggleState(this.#internals, 'standard', !evt.matches);
  };

  public override render(): TemplateResult {
    return html`
      <footer>
        <ul role="list" class="footer__list"></ul>
        <slot></slot>
      </footer>
    `;
  }
}
