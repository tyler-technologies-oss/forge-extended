import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './footer.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-footer': FooterComponent;
  }
}

export const FooterComponentTagName: keyof HTMLElementTagNameMap = 'forge-footer';

@customElement(FooterComponentTagName)
export class FooterComponent extends LitElement {
  public static override styles = unsafeCSS(styles);
  @property({ type: String })
  public layout: 'standard' | 'alternative' | 'auto' = 'auto';

  @property({ type: Number })
  public layoutBreakpoint = 900;

  private _mediaQuery?: MediaQueryList;

  public connectedCallback(): void {
    super.connectedCallback();
    this._applyLayout();
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    this._removeMediaQuery();
  }

  public updated(changedProps: Map<string, unknown>): void {
    if (changedProps.has('layout')) {
      this._applyLayout();
    }
    if (changedProps.has('layoutBreakpoint')) {
      this._applyLayoutBreakpoint();
    }
  }

  private _applyLayout(): void {
    if (this.layout === 'auto') {
      this._setMediaQuery();
      this.setAttribute('layout', 'auto');
      return;
    }
    this._removeMediaQuery();
    this.setAttribute('layout', this.layout);
  }

  private _applyLayoutBreakpoint(): void {
    this.setAttribute('layout-breakpoint', this.layoutBreakpoint.toString());
    if (this.layout === 'auto') {
      this._removeMediaQuery();
      this._setMediaQuery();
    }
  }

  private _setMediaQuery(): void {
    this._mediaQuery = window.matchMedia(`(max-width: ${this.layoutBreakpoint}px)`);
    this._mediaQuery.addEventListener('change', this._onMediaChange);
    this._onMediaChange(this._mediaQuery);
  }

  private _removeMediaQuery(): void {
    if (this._mediaQuery) {
      this._mediaQuery.removeEventListener('change', this._onMediaChange);
    }
  }

  private _onMediaChange = (evt: MediaQueryList | MediaQueryListEvent): void => {
    if (evt.matches) {
      this.setAttribute('layout', 'alternative');
    } else {
      this.setAttribute('layout', 'standard');
    }
  };

  public override render(): TemplateResult {
    return html`
      <footer>
        <ul role="list" class="forge-footer__list"></ul>
        <slot></slot>
      </footer>
    `;
  }
}
