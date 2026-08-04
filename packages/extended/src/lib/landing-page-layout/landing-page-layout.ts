import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';
import { toggleState } from '@tylertech/forge';

import styles from './landing-page-layout.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-landing-page-layout': LandingPageLayoutComponent;
  }
}

export type LandingPageLayoutMode = 'two-third' | 'equal' | 'three' | 'single';
export type LandingPageLayoutAlignment = 'left' | 'center';
export type LandingPageLayoutSize = 'normal' | 'wide';

export const LandingPageLayoutComponentTagName: keyof HTMLElementTagNameMap = 'forge-landing-page-layout';

/**
 * @tag forge-landing-page-layout
 *
 * @summary A responsive structural layout utility for building citizen-facing application landing pages consistent with Tyler patterns.
 *
 * @description
 * The `<forge-landing-page-layout>` component provides a responsive layout with a themed header (including a background gradient
 * or optional background image), a body area that supports one, two, or three content columns, and a footer. The layout adjusts
 * automatically at tablet and mobile breakpoints, stacking columns and collapsing padding for smaller screens.
 *
 * @property {LandingPageLayoutMode} mode - Controls the body column layout: `two-third` (default), `equal`, `three`, or `single`.
 * @property {LandingPageLayoutAlignment} alignment - Controls the horizontal alignment of the header content: `center` (default) or `left`.
 * @property {LandingPageLayoutSize} size - Controls the maximum width of the content area: `normal` (default) or `wide`.
 * @property {string} imageUrlLarge - URL of the background image to use on large screens (>= 769px).
 * @property {string} imageUrlSmall - URL of the background image to use on small screens (<= 768px).
 *
 * @slot image - Slot for a custom background image element (typically an `<img>` or `<picture>`).
 * @slot secondary-title - Small subheading text displayed above the main title in the header.
 * @slot main-title - The main heading text of the header.
 * @slot action - One or more calls to action displayed below the title in the header. Apply the `on-image` class to a slotted `forge-button` to make it legible over a background image (text/outlined buttons render white; filled buttons swap to a white background with a dark label).
 * @slot announcements - Content displayed to the right of the header body (typically announcements or informational content).
 * @slot top - Content displayed above the main body columns, spanning the full width.
 * @slot left - Content for the left column of the body.
 * @slot center - Content for the middle column (only shown when `mode` is `three`).
 * @slot right - Content for the right column of the body.
 * @slot body-footer - Content displayed at the bottom of the body, spanning the full width.
 * @slot footer - Content for the page footer (typically dark themed).
 *
 * @cssproperty --forge-landing-page-layout-content-width - Maximum width of the content area when `size` is `normal`. Defaults to `1040px`.
 * @cssproperty --forge-landing-page-layout-content-width-wide - Maximum width of the content area when `size` is `wide`. Defaults to `1280px`.
 * @cssproperty --forge-landing-page-layout-body-padding - Padding around the body content area. Defaults to `24px`.
 * @cssproperty --forge-landing-page-layout-body-padding-mobile - Padding around the body on mobile screens. Defaults to `8px`.
 * @cssproperty --forge-landing-page-layout-footer-padding - Inline padding of the footer. Defaults to `70px`.
 * @cssproperty --forge-landing-page-layout-root-height - Height of the root container. Defaults to `100%`.
 * @cssproperty --forge-landing-page-layout-actions-gap - Gap between action items in the header on large screens.
 * @cssproperty --forge-landing-page-layout-actions-gap-mobile - Gap between action items in the header on mobile screens.
 *
 * @state empty-announcements - The `announcements` slot has no content and the header content is centered across the full width.
 * @state body-only - No content is projected into the `top` slot, so the body area sits flush against the header.
 * @state has-image - A background image is present (via `image-url-large`/`image-url-small` or the `image` slot). A darkening overlay is applied over the image to improve header text contrast.
 *
 * @csspart root - The outermost container element.
 * @csspart container - The main wrapper that holds the header and body.
 * @csspart header - The header region.
 * @csspart header-background - The header background image container.
 * @csspart header-background-picture - The `<picture>` element used to render the responsive background image.
 * @csspart header-body - The header body containing the title and announcements.
 * @csspart header-body-left - The left side of the header body (title and actions).
 * @csspart header-body-right - The right side of the header body (announcements).
 * @csspart header-welcome - The welcome title container.
 * @csspart header-actions - The container that holds the action slot.
 * @csspart body - The main body container.
 * @csspart body-top - The top area of the body.
 * @csspart body-left - The left column of the body.
 * @csspart body-center - The center column of the body.
 * @csspart body-right - The right column of the body.
 * @csspart body-footer - The footer of the body.
 * @csspart footer - The page footer region.
 */
@customElement(LandingPageLayoutComponentTagName)
export class LandingPageLayoutComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  readonly #internals: ElementInternals;

  @queryAssignedNodes({ slot: 'top', flatten: true })
  private _topNodes!: Node[];

  @queryAssignedNodes({ slot: 'announcements', flatten: true })
  private _announcementsNodes!: Node[];

  @queryAssignedNodes({ slot: 'image', flatten: true })
  private _imageNodes!: Node[];

  /** Controls the body column layout. */
  @property({ type: String, reflect: true })
  public mode: LandingPageLayoutMode = 'two-third';

  /** Controls the horizontal alignment of the header content. */
  @property({ type: String, reflect: true })
  public alignment: LandingPageLayoutAlignment = 'center';

  /** Controls the maximum width of the content area. */
  @property({ type: String, reflect: true })
  public size: LandingPageLayoutSize = 'normal';

  /** URL of the background image to use on large screens. */
  @property({ type: String, attribute: 'image-url-large', reflect: true })
  public imageUrlLarge = '';

  /** URL of the background image to use on small screens. */
  @property({ type: String, attribute: 'image-url-small', reflect: true })
  public imageUrlSmall = '';

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#assignImageSlot();
  }

  public override firstUpdated(): void {
    this.#updateStates();
  }

  public override updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('imageUrlLarge') || changedProperties.has('imageUrlSmall')) {
      this.#updateStates();
    }
  }

  #assignImageSlot(): void {
    const img = this.querySelector(':scope > img:not([slot])') as HTMLImageElement | null;
    if (img) {
      img.setAttribute('slot', 'image');
    }
  }

  #handleSlotChange = (evt: Event): void => {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (['top', 'announcements', 'image'].includes(slotName)) {
      this.#updateStates();
    }
  };

  #updateStates(): void {
    toggleState(this.#internals, 'empty-announcements', this._announcementsNodes.length === 0);
    toggleState(this.#internals, 'body-only', this._topNodes.length === 0);
    const hasImage = !!this.imageUrlLarge || !!this.imageUrlSmall || (this._imageNodes?.length ?? 0) > 0;
    toggleState(this.#internals, 'has-image', hasImage);
  }

  get #pictureTemplate(): TemplateResult | typeof nothing {
    if (!this.imageUrlLarge && !this.imageUrlSmall) {
      return nothing;
    }
    return html`
      <picture class="header-background-picture" part="header-background-picture">
        ${this.imageUrlSmall ? html`<source srcset=${this.imageUrlSmall} media="(max-width: 768px)" />` : nothing}
        ${this.imageUrlLarge ? html`<source srcset=${this.imageUrlLarge} media="(min-width: 769px)" />` : nothing}
        <img alt="" />
      </picture>
    `;
  }

  public override render(): TemplateResult {
    return html`
      <div class="root" part="root">
        <div class="container" part="container">
          <div class="header" part="header">
            <div class="header-background" aria-hidden="true" part="header-background">
              <slot name="image" @slotchange=${this.#handleSlotChange}>${this.#pictureTemplate}</slot>
            </div>
            <div class="header-body" part="header-body">
              <div class="header-body-left" part="header-body-left">
                <div class="header-welcome" part="header-welcome">
                  <slot name="secondary-title"></slot>
                  <slot name="main-title"></slot>
                </div>
                <div class="header-actions" part="header-actions">
                  <slot name="action"></slot>
                </div>
              </div>
              <div class="header-body-right" part="header-body-right">
                <slot name="announcements" @slotchange=${this.#handleSlotChange}></slot>
              </div>
            </div>
          </div>
          <div class="body" part="body">
            <div class="body-top" part="body-top">
              <slot name="top" @slotchange=${this.#handleSlotChange}></slot>
            </div>
            <div class="body-left" part="body-left">
              <slot name="left"></slot>
            </div>
            <div class="body-center" part="body-center">
              <slot name="center"></slot>
            </div>
            <div class="body-right" part="body-right">
              <slot name="right"></slot>
            </div>
            <div class="body-footer" part="body-footer">
              <slot name="body-footer"></slot>
            </div>
          </div>
        </div>
        <div class="footer" part="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}
