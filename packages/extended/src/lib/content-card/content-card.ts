import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { defineCardComponent, defineToolbarComponent } from '@tylertech/forge';
import { defineContentScaffoldComponent } from '../content-scaffold';
import styles from './content-card.scss?inline';
import { HeadingLevel } from '$lib/types/types';

declare global {
  interface HTMLElementTagNameMap {
    'forge-content-card': ContentCardComponent;
  }
}

export const ContentCardComponentTagName: keyof HTMLElementTagNameMap = 'forge-content-card';

/**
 * @tag forge-content-card
 */
@customElement(ContentCardComponentTagName)
export class ContentCardComponent extends LitElement {
  static {
    defineCardComponent();
    defineToolbarComponent();
    defineContentScaffoldComponent();
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Controls the heading level for the title content
   */
  @property({ attribute: 'heading-level', type: Number })
  public headingLevel: HeadingLevel = 2;

  @queryAssignedNodes({ slot: 'footer-secondary-action', flatten: true })
  private _footerSecondaryActionNodes!: Node[];

  @queryAssignedNodes({ slot: 'footer-primary-action', flatten: true })
  private _footerPrimaryActionNodes!: Node[];

  readonly #footerSecondaryActionSlot = html`<slot
    name="footer-secondary-action"
    @slotchange=${this.#handleSlotChange}></slot>`;
  readonly #footerPrimaryActionSlot = html`<slot
    name="footer-primary-action"
    @slotchange=${this.#handleSlotChange}></slot>`;

  get #footerActions(): TemplateResult | typeof nothing {
    const hasSecondaryAction = this._footerSecondaryActionNodes.length > 0;
    const hasPrimaryAction = this._footerPrimaryActionNodes.length > 0;
    const hasFooterActions = hasSecondaryAction || hasPrimaryAction;

    return when(
      hasFooterActions,
      () => html`
        <div class="footer-actions" slot="footer-end">
          ${this.#footerSecondaryActionSlot} ${this.#footerPrimaryActionSlot}
        </div>
      `,
      () => html` ${this.#footerSecondaryActionSlot} ${this.#footerPrimaryActionSlot} `
    );
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (['footer-secondary-action', 'footer-primary-action'].includes(slotName)) {
      this.requestUpdate();
    }
  }

  public override render(): TemplateResult {
    return html` <forge-card class="container">
      <forge-content-scaffold>
        <slot name="before-title" slot="before-header-start"></slot>
        <slot name="title" slot="header-start"></slot>
        <slot name="header-actions" slot="header-end"></slot>
        <slot name="body" slot="body"></slot>
        ${this.#footerActions}
      </forge-content-scaffold>
    </forge-card>`;
  }
}
