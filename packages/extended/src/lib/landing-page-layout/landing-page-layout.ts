import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './landing-page-layout.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-landing-page-layout': LandingPageLayoutComponent;
  }
}

export const LandingPageLayoutComponentTagName: keyof HTMLElementTagNameMap = 'forge-landing-page-layout';
@customElement(LandingPageLayoutComponentTagName)
export class LandingPageLayoutComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String, reflect: true })
  public mode: 'two-third' | 'equal' | 'three' | 'single' = 'two-third';

  @property({ type: String, reflect: true })
  public alignment: 'left' | 'center' = 'center';

  @property({ type: String, reflect: true })
  public size: 'normal' | 'wide' = 'normal';

  @property({ type: String, attribute: 'image-url-small' })
  public imageUrlSmall = '';

  @property({ type: String, attribute: 'image-url-large' })
  public imageUrlLarge = '';

  #backgroundPicture?: HTMLPictureElement;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#applyMode();
    this.#applyAlignment();
    this.#applySize();
    this.#setupSlotListeners();
  }

  public override firstUpdated(): void {
    this.#backgroundPicture = this.renderRoot.querySelector(
      '.forge-landing-page-layout__header__background__picture'
    ) as HTMLPictureElement;
    if (this.imageUrlSmall || this.imageUrlLarge) {
      this.#applyImageSources();
    }
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#cleanupSlotListeners();
  }

  public override updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('mode')) {
      this.#applyMode();
    }
    if (changedProperties.has('alignment')) {
      this.#applyAlignment();
    }
    if (changedProperties.has('size')) {
      this.#applySize();
    }
    if (changedProperties.has('imageUrlSmall') || changedProperties.has('imageUrlLarge')) {
      this.#applyImageSources();
    }
  }

  #applyMode(): void {
    const body = this.renderRoot.querySelector('.forge-landing-page-layout__body');
    if (!body) {
      return;
    }
    body.className = 'forge-landing-page-layout__body'; // reset
    body.classList.add(`forge-landing-page-layout__body--${this.mode}`);
  }

  #applyAlignment(): void {
    const root = this.renderRoot.querySelector('.forge-landing-page-layout__root');
    if (!root) {
      return;
    }
    root.classList.toggle('forge-landing-page-layout--align-center', this.alignment === 'center');
    root.classList.toggle('forge-landing-page-layout--align-left', this.alignment === 'left');
  }

  #applySize(): void {
    const container = this.renderRoot.querySelector('.forge-landing-page-layout');
    if (!container) {
      return;
    }
    container.classList.toggle('forge-landing-page-layout--wide', this.size === 'wide');
  }

  #applyImageSources(): void {
    if (!this.#backgroundPicture) {
      return;
    }

    if (!this.imageUrlSmall && !this.imageUrlLarge) {
      return;
    }

    this.#backgroundPicture.innerHTML = '';
    this.#setSmallImageSource(this.imageUrlSmall);
    this.#setLargeImageSource(this.imageUrlLarge);

    const img = document.createElement('img');
    img.alt = '';
    img.src = this.imageUrlLarge || this.imageUrlSmall;
    this.#backgroundPicture.appendChild(img);
  }

  #setSmallImageSource(url: string): void {
    if (!url) {
      return;
    }
    const source = document.createElement('source');
    source.srcset = url;
    source.media = '(max-width: 768px)';
    this.#backgroundPicture?.appendChild(source);
  }

  #setLargeImageSource(url: string): void {
    if (!url) {
      return;
    }
    const source = document.createElement('source');
    source.srcset = url;
    source.media = '(min-width: 769px)';
    this.#backgroundPicture?.appendChild(source);
  }

  #setupSlotListeners(): void {
    const topSlot = this.renderRoot.querySelector('slot[name="top"]');
    const announcementsSlot = this.renderRoot.querySelector('slot[name="announcements"]');
    topSlot?.addEventListener('slotchange', this.#onTopSlotChange);
    announcementsSlot?.addEventListener('slotchange', this.#onAnnouncementsSlotChange);
  }

  #cleanupSlotListeners(): void {
    const topSlot = this.renderRoot.querySelector('slot[name="top"]');
    const announcementsSlot = this.renderRoot.querySelector('slot[name="announcements"]');
    topSlot?.removeEventListener('slotchange', this.#onTopSlotChange);
    announcementsSlot?.removeEventListener('slotchange', this.#onAnnouncementsSlotChange);
  }

  #onTopSlotChange = (evt: Event): void => {
    const slot = evt.target as HTMLSlotElement;
    const body = this.renderRoot.querySelector('.forge-landing-page-layout__body');
    body?.classList.toggle('forge-landing-page-layout__body--only', slot.assignedElements().length === 0);
  };

  #onAnnouncementsSlotChange = (evt: Event): void => {
    const slot = evt.target as HTMLSlotElement;
    const headerBody = this.renderRoot.querySelector('.forge-landing-page-layout__header__body');
    headerBody?.classList.toggle(
      'forge-landing-page-layout__header__body--empty-announcements',
      slot.assignedElements().length === 0
    );
  };

  public override render(): TemplateResult {
    return html`
      <div class="forge-landing-page-layout__root" part="root">
        <div class="forge-landing-page-layout" part="container">
          <div class="forge-landing-page-layout__header" part="header">
            <div
              class="forge-landing-page-layout__header__background"
              aria-hidden="true"
              part="header-background-container">
              <slot name="image">
                <picture
                  class="forge-landing-page-layout__header__background__picture"
                  part="header-background-picture"></picture>
              </slot>
            </div>
            <div class="forge-landing-page-layout__header__body" part="header-body">
              <div class="forge-landing-page-layout__header__body-left" part="header-body-left">
                <div class="forge-landing-page-layout__header__welcome" part="header-welcome-container">
                  <slot name="secondary-title"></slot>
                  <slot name="main-title"></slot>
                </div>
                <div class="forge-landing-page-layout__header__actions" part="header-actions-container">
                  <slot name="action"></slot>
                </div>
              </div>
              <div class="forge-landing-page-layout__header__body-right" part="header-body-right">
                <slot name="announcements"></slot>
              </div>
            </div>
          </div>
          <div class="forge-landing-page-layout__body" part="body-container">
            <div class="forge-landing-page-layout__body__top" part="body-topcontainer">
              <slot name="top"></slot>
            </div>
            <div class="forge-landing-page-layout__body__left" part="body-left-container">
              <slot name="left"></slot>
            </div>
            <div class="forge-landing-page-layout__body__center" part="body-center-container">
              <slot name="center"></slot>
            </div>
            <div class="forge-landing-page-layout__body__right" part="body-right-container">
              <slot name="right"></slot>
            </div>
            <div class="forge-landing-page-layout__body__footer" part="body-footer-container">
              <slot name="body-footer"></slot>
            </div>
          </div>
        </div>
        <div class="forge-landing-page-layout__footer" part="footer-container">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}
