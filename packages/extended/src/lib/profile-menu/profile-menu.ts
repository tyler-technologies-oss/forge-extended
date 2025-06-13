import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

import styles from './profile-menu.scss?inline';
import {
  defineAvatarComponent,
  defineButtonComponent,
  defineDividerComponent,
  defineIconButtonComponent,
  defineIconComponent,
  definePopoverComponent,
  defineToolbarComponent,
  IconRegistry
} from '@tylertech/forge';

import '../theme-toggle/theme-toggle';
import { tylIconLogout } from '@tylertech/tyler-icons/standard';

declare global {
  interface HTMLElementTagNameMap {
    'forge-profile-menu': ProfileMenuComponent;
  }
}

export const ProfileMenuComponentTagName: keyof HTMLElementTagNameMap = 'forge-profile-menu';

/**
 * @tag forge-profile-menu
 */
@customElement(ProfileMenuComponentTagName)
export class ProfileMenuComponent extends LitElement {
  static {
    defineAvatarComponent();
    defineButtonComponent();
    defineDividerComponent();
    defineIconComponent();
    defineIconButtonComponent();
    definePopoverComponent();
    defineToolbarComponent();

    IconRegistry.define([tylIconLogout]);
  }

  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the theme toggle is visible
   */
  @property({ type: Boolean, attribute: 'theme-toggle' })
  public themeToggle = false;

  @queryAssignedNodes({ slot: 'link', flatten: true })
  private _slottedLinkNodes!: Node[];

  @queryAssignedNodes({ slot: 'sign-out-button-text', flatten: true })
  private _slottedSignOutButtonTextNodes!: Node[];

  get #linkSlot(): TemplateResult | typeof nothing {
    return html`<slot name="link" id="link-slot"></slot>`;
  }

  get #signOutButtonSlot(): TemplateResult | typeof nothing {
    return html`<slot name="sign-out-button-text" id="sign-out-button-slot"></slot>`;
  }

  get #links(): TemplateResult | typeof nothing {
    const showLinks = this._slottedLinkNodes.length > 0;
    return when(
      showLinks,
      () => html` <forge-list> ${this.#linkSlot} </forge-list> `,
      () => this.#linkSlot
    );
  }

  get #themeToggle(): TemplateResult | typeof nothing {
    const showThemeToggle = this.themeToggle;
    return when(
      showThemeToggle,
      () => html`
        <forge-divider></forge-divider>
        <div class="theme">
          <forge-theme-toggle></forge-theme-toggle>
        </div>
      `,
      () => nothing
    );
  }

  get #signOutButton(): TemplateResult | typeof nothing {
    const showSignOutButton = this._slottedSignOutButtonTextNodes.length > 0;
    return when(
      showSignOutButton,
      () => html`
        <forge-toolbar inverted>
          <div slot="end">
            <forge-button id="sign-out-button" @click=${() => this.#onAction()}>
              ${this.#signOutButtonSlot}
              <forge-icon name="logout" external slot="end"></forge-icon>
            </forge-button>
          </div>
        </forge-toolbar>
      `,
      () => html`${this.#signOutButtonSlot}`
    );
  }

  public override render(): TemplateResult {
    return html`
      <forge-icon-button aria-label="Open profile popup" id="popover-trigger">
        <forge-avatar text="Leslie Knope" letter-count="2" id="button-avatar"></forge-avatar>
      </forge-icon-button>

      <forge-popover
        anchor="popover-trigger"
        placement="bottom-end"
        arrow
        position-strategy="fixed"
        @slotchange=${this.#handleSlotChange}>
        <div class="popover-inner-container">
          <div class="popover-inner">
            <forge-avatar
              text="Leslie Knope"
              letter-count="2"
              class="popover-avatar"
              id="popover-avatar"></forge-avatar>
            <div class="user-info-container">
              <div class="full-name">Nick Andrews</div>
              <div class="email">nick.andrews@tylertech.com</div>
            </div>
          </div>
        </div>
        ${when(this._slottedLinkNodes.length > 0, () => html`<forge-divider></forge-divider>`)} ${this.#links}
        ${this.#themeToggle} ${this.#signOutButton}
      </forge-popover>
    `;
  }

  #onAction(): void {
    console.log('on-action');
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (['profile-button-text', 'link', 'sign-out-button-text'].includes(slotName)) {
      this.requestUpdate();
    }
  }
}
