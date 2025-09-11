import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import './rte-bold';
import './rte-italic';
import './rte-underline';
import './rte-strike';
import './rte-bullet-list';
import './rte-ordered-list';
import './rte-align';
import './rte-undo-redo';
import './rte-feature-divider';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rte-standard-tools': RteStandardToolsComponent;
  }
}

export const RteStandardToolsComponentTagName: keyof HTMLElementTagNameMap = 'forge-rte-standard-tools';

/**
 * @tag forge-rte-standard-tools
 */
@customElement(RteStandardToolsComponentTagName)
export class RteStandardToolsComponent extends LitElement {
  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  public override render(): TemplateResult {
    return html`
      <forge-rte-bold></forge-rte-bold>
      <forge-rte-italic></forge-rte-italic>
      <forge-rte-underline></forge-rte-underline>
      <forge-rte-strike></forge-rte-strike>
      <forge-rte-feature-divider></forge-rte-feature-divider>
      <forge-rte-bullet-list></forge-rte-bullet-list>
      <forge-rte-ordered-list></forge-rte-ordered-list>
      <forge-rte-feature-divider></forge-rte-feature-divider>
      <forge-rte-align></forge-rte-align>
      <forge-rte-feature-divider></forge-rte-feature-divider>
      <forge-rte-undo-redo></forge-rte-undo-redo>
    `;
  }
}
