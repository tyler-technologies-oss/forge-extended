import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { tylIconLogout } from '@tylertech/tyler-icons';
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
import { ThemeToggleComponent, ThemeToggleTheme } from '../theme-toggle/theme-toggle';
import { createRef, ref } from 'lit/directives/ref.js';

import '../theme-toggle/theme-toggle';
import './profile-link/profile-link';

import styles from './user-profile.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-user-profile': UserProfileComponent;
  }

  interface HTMLElementEventMap {
    'forge-user-profile-sign-out': Event;
  }
}

export const UserProfileComponentTagName: keyof HTMLElementTagNameMap = 'forge-user-profile';

/**
 * @tag forge-user-profile
 *
 * @slot link - Slot for additional profile navigation links
 * @slot sign-out-button-text - Slot for the sign out button text
 *
 * @event {Event} forge-user-profile-sign-out - Fired when the sign out button is clicked.
 */

@customElement(UserProfileComponentTagName)
export class UserProfileComponent extends LitElement {
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

  /** The full name of the user */
  @property({ attribute: 'full-name' })
  public fullName = '';

  /** The email address of the user */
  @property()
  public email = '';

  /** The image URL for the user avatar */
  @property({ attribute: 'image-url' })
  public imageUrl = '';

  /** ARIA label for the user profile avatar button */
  @property({ attribute: 'button-label' })
  public buttonLabel = 'Open user profile';

  /** Indicates whether the theme toggle is visible */
  @property({ type: Boolean, attribute: 'theme-toggle' })
  public themeToggle = false;

  @queryAssignedNodes({ slot: 'link', flatten: true })
  private _slottedLinkNodes!: Node[];

  readonly #linkSlot = html`<slot name="link" id="link-slot"></slot>`;
  readonly #signOutButtonSlot = html`<slot name="sign-out-button-text" id="sign-out-button-slot">Sign Out</slot>`;
  readonly #themeToggleRef = createRef<ThemeToggleComponent>();

  get #links(): TemplateResult | typeof nothing {
    const showLinks = this._slottedLinkNodes.length > 0;
    return when(
      showLinks,
      () => html` <forge-list>${this.#linkSlot}</forge-list> `,
      () => this.#linkSlot
    );
  }

  get #themeToggle(): TemplateResult | typeof nothing {
    const showThemeToggle = this.themeToggle;
    return when(
      showThemeToggle,
      () => html`
        <forge-divider></forge-divider>
        <div class="theme-toggle-container">
          <forge-theme-toggle ${ref(this.#themeToggleRef)}></forge-theme-toggle>
        </div>
      `,
      () => nothing
    );
  }

  get #signOutButton(): TemplateResult | typeof nothing {
    return html`
      <forge-toolbar inverted>
        <div slot="end">
          <forge-button class="sign-out-button" id="sign-out-button" @click=${this.#handleSignOut}>
            ${this.#signOutButtonSlot}
            <forge-icon name="logout" external slot="end"></forge-icon>
          </forge-button>
        </div>
      </forge-toolbar>
    `;
  }

  public override render(): TemplateResult {
    // prettier-ignore
    return html`
      <forge-icon-button theme="app-bar" aria-label="${this.buttonLabel}" id="popover-trigger">
        <forge-avatar .text=${this.fullName} .imageUrl=${this.imageUrl} id="button-avatar"></forge-avatar>
      </forge-icon-button>
      <forge-popover
        id="user-profile-popover"
        anchor="popover-trigger"
        placement="bottom-end"
        arrow
        position-strategy="fixed"
        @slotchange=${this.#handleSlotChange}>
        <div class="user-info-container">
          <forge-avatar
            .text=${this.fullName}
            class="popover-avatar"
            .imageUrl=${this.imageUrl}
            id="popover-avatar"></forge-avatar>
          <div class="user-info">
            <div class="full-name">${this.fullName}</div>
            <div class="email">${this.email}</div>
          </div>
        </div>
        ${when(this._slottedLinkNodes.length, () => html`<forge-divider></forge-divider>`)} 
        ${this.#links}
        ${this.#themeToggle} 
        ${this.#signOutButton}
      </forge-popover>
    `;
  }

  /** Sets the theme for the theme toggle. */
  public setTheme(value: ThemeToggleTheme): void {
    if (this.#themeToggleRef.value) {
      this.#themeToggleRef.value.setTheme(value);
    }
  }

  #handleSignOut(): void {
    const event = new Event('forge-user-profile-sign-out', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (['profile-button-text', 'link', 'sign-out-button-text'].includes(slotName)) {
      this.requestUpdate();
    }
  }
}
