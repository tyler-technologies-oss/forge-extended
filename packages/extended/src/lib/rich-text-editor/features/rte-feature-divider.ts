import { defineDividerComponent } from '@tylertech/forge';
import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rte-feature-divider': RichTextFeatureDividerComponent;
  }
}

export const RichTextFeatureDividerComponentTagName: keyof HTMLElementTagNameMap = 'forge-rte-feature-divider';

/**
 * @tag forge-rte-feature-divider
 */
@customElement(RichTextFeatureDividerComponentTagName)
export class RichTextFeatureDividerComponent extends LitElement {
  static {
    defineDividerComponent();
  }

  public static override styles = css`
    :host {
      display: contents;
    }

    forge-divider {
      max-height: 24px;
    }
  `;

  public override render(): TemplateResult {
    return html`<forge-divider vertical part="forge-divider" exportparts="root:forge-divider-root"></forge-divider>`;
  }
}
