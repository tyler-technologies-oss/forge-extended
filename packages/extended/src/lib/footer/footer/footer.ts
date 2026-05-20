import { LitElement, PropertyValues, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { toggleState } from '@tylertech/forge';
import { setDefaultAria } from '@tylertech/forge/esm/core/utils/a11y-utils';

import '../footer-item/footer-item';

import styles from './footer.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-footer': FooterComponent;
  }
}

export type FooterLayout = 'standard' | 'alternative' | 'auto';

export const FooterComponentTagName: keyof HTMLElementTagNameMap = 'forge-footer';

/**
 * A footer component for displaying navigation, copyright, and branding information at the bottom of a page.
 *
 * @tag forge-footer
 *
 * @slot - Slot for footer items or custom content.
 * @slot graphic - Slot for footer graphic, such as a logo.
 *
 * @cssprop --forge-footer-background - Controls the background color of the footer.
 * @cssprop --forge-footer-on-background - Controls the text color of footer content.
 * @cssprop --forge-footer-padding - Controls the padding of the footer.
 * @cssprop --forge-footer-padding-left - Controls the left padding of the footer.
 * @cssprop --forge-footer-padding-right - Controls the right padding of the footer.
 * @cssprop --forge-footer-gap - Controls the gap between footer content and graphic in standard layout.
 * @cssprop --forge-footer-alternative-gap - Controls the gap between stacked elements in alternative layout.
 * @cssprop --forge-footer-divider-margin - Controls the margin around dividers between footer items.
 *
 * @state standard - Applied when the layout is set to `standard` or when in `auto` mode above the breakpoint.
 * @state alternative - Applied when the layout is set to `alternative` or when in `auto` mode below the breakpoint.
 * @state auto - Applied when the layout is set to `auto`.
 */

@customElement(FooterComponentTagName)
export class FooterComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  readonly #internals: ElementInternals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  /** Defines the footer layout mode. */
  @property({ type: String })
  public layout: FooterLayout = 'auto';

  /** Width breakpoint in pixels used when layout is set to `auto`. */
  @property({ type: Number, attribute: 'layout-breakpoint' })
  public layoutBreakpoint = 900;

  #mediaQuery?: MediaQueryList;

  public override connectedCallback(): void {
    super.connectedCallback();
    setDefaultAria(this, this.#internals, {
      role: 'contentinfo'
    });
    this.#applyLayout();
  }

  public override disconnectedCallback(): void {
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
    toggleState(this.#internals, 'standard', this.layout === 'standard');
    toggleState(this.#internals, 'alternative', this.layout === 'alternative');
  }

  #applyLayoutBreakpoint(): void {
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
    this.#mediaQuery?.removeEventListener('change', this.#onMediaChange);
  }

  #onMediaChange = (evt: MediaQueryList | MediaQueryListEvent): void => {
    toggleState(this.#internals, 'alternative', evt.matches);
    toggleState(this.#internals, 'standard', !evt.matches);
  };

  public override render(): TemplateResult {
    return html`
      <footer part="root">
        <div role="list" class="list" part="content">
          <slot></slot>
        </div>
        <slot name="graphic"></slot>
      </footer>
    `;
  }
}
