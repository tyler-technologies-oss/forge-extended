import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './facet-group.scss?inline';
import {
  defineBadgeComponent,
  defineButtonComponent,
  defineDividerComponent,
  defineExpansionPanelComponent,
  defineIconButtonComponent,
  defineOpenIconComponent
} from '@tylertech/forge';

import '../facet-checkbox/facet-checkbox';

declare global {
  interface HTMLElementTagNameMap {
    'forge-facet-group': FacetGroupElement;
  }
}

@customElement('forge-facet-group')
export class FacetGroupElement extends LitElement {
  static {
    defineBadgeComponent();
    defineButtonComponent();
    defineDividerComponent();
    defineExpansionPanelComponent();
    defineIconButtonComponent();
    defineOpenIconComponent();
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the facet group is opened or closed.
   */
  @property({ type: String, attribute: 'title' })
  public title = '';

  /**
   * Indicates whether the facet group is opened or closed.
   */
  @property({ type: Boolean, attribute: 'expandable' })
  public expandable = false;

  /**
   * Indicates whether the facet group is opened or closed.
   */
  @property({ type: Boolean, attribute: 'open' })
  public open = false;

  /**
   * Show or hide the divider
   */
  @property({ type: Boolean, attribute: 'show-divider' })
  public showDivider = true;

  private get _header(): TemplateResult | typeof nothing {
    return html`
      <div
        role=${ifDefined(this.expandable ? 'button' : undefined)}
        tabindex=${ifDefined(this.expandable ? '0' : undefined)}
        class="header">
        <div class="title">
          <slot name="title" class="title">${this._title}</slot>
          <forge-badge theme="primary">6</forge-badge>
        </div>
        <div class="header-actions">
          <forge-button>Clear</forge-button>
          ${this._openIcon}
        </div>
      </div>
    `;
  }

  private get _expansionPanel(): TemplateResult | typeof nothing {
    return html` <forge-expansion-panel ?open=${this.open}> ${this._facetGroup} </forge-expansion-panel> `;
  }

  private get _title(): TemplateResult | typeof nothing {
    return this.title ? html`${this.title}` : nothing;
  }

  private get _openIcon(): TemplateResult | typeof nothing {
    return this.expandable ? html`<forge-open-icon></forge-open-icon>` : nothing;
  }

  private get _divider(): TemplateResult | typeof nothing {
    return this.showDivider ? html`<forge-divider></forge-divider>` : nothing;
  }

  private get _facetGroup(): TemplateResult | typeof nothing {
    return html`
      ${this._header}
      <div class="body">
        <slot></slot>
      </div>
      <div class="footer">
        <forge-button>See 8 more</forge-button>
      </div>
    `;
  }

  public override render(): TemplateResult {
    return this.expandable
      ? html` <div class="container">${this._expansionPanel}</div>
          ${this._divider}`
      : html` <div class="container">${this._facetGroup}</div>
          ${this._divider}`;
  }
}
