import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import './rte-bold';
import './rte-italic';
import './rte-underline';

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
    `;
  }
}
