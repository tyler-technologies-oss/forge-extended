import { defineIconButtonComponent } from '@tylertech/forge';
import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rte-tool-button': RteToolButtonComponent;
  }

  interface HTMLElementEventMap {
    'forge-rich-text-feature-button': CustomEvent<boolean>;
  }
}

export const RteToolButtonComponentTagName: keyof HTMLElementTagNameMap = 'forge-rte-tool-button';

/**
 * @tag forge-rte-tool-button
 */
@customElement(RteToolButtonComponentTagName)
export class RteToolButtonComponent extends LitElement {
  static {
    defineIconButtonComponent();
  }

  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  /** The label for the bold button */
  @property({ type: String })
  public label = 'Tool';

  /** The icon name. */
  @property({ type: String })
  public icon: string | undefined;

  /** The disabled state of the button. */
  @property({ type: Boolean })
  public disabled = false;

  /** The active state of the button. */
  @property({ type: Boolean })
  public active = false;

  public override render(): TemplateResult {
    return html`
      <forge-icon-button
        shape="squared"
        density="medium"
        toggle
        ?pressed=${this.active}
        @forge-icon-button-toggle=${this._toggle}
        @pointerdown=${this._pointerDown}
        ?disabled=${this.disabled}
        aria-label=${this.label}>
        <forge-icon .name=${this.icon}></forge-icon>
        <forge-icon slot="on" .name=${this.icon}></forge-icon>
      </forge-icon-button>
    `;
  }

  private async _toggle(evt: CustomEvent<boolean>): Promise<void> {
    evt.preventDefault();
    this.dispatchEvent(new CustomEvent('forge-rte-tool-toggle', { detail: evt.detail }));
  }

  private _pointerDown(evt: PointerEvent): void {
    evt.preventDefault();
  }
}
