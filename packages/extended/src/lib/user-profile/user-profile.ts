import { LitElement, TemplateResult, html, nothing, unsafeCSS, PropertyValues } from 'lit';
import { customElement, property, queryAssignedNodes, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { tylIconAccount, tylIconLogin, tylIconLogout } from '@tylertech/tyler-icons';
import {
  defineAvatarComponent,
  defineButtonComponent,
  defineDividerComponent,
  defineIconButtonComponent,
  defineIconComponent,
  definePopoverComponent,
  defineToolbarComponent,
  IconRegistry,
  IPopoverToggleEventData,
  toggleState
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
    'forge-user-profile-sign-in': Event;
  }
}

export const UserProfileComponentTagName: keyof HTMLElementTagNameMap = 'forge-user-profile';

/**
 * @tag forge-user-profile
 *
 * @slot link - Slot for additional profile navigation links
 * @slot sign-out-button-text - Slot for the sign out button text
 * @slot sign-in-button-text - Slot for the sign in button text
 *
 * @event {Event} forge-user-profile-sign-out - Fired when the sign out button is clicked.
 * @event {Event} forge-user-profile-sign-in - Fired when the sign in button is clicked.
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

    IconRegistry.define([tylIconLogout, tylIconAccount, tylIconLogin]);
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

  /** Controls whether the user profile popover is open */
  @property({ type: Boolean })
  public open = false;

  /** Internal state property indicating if the user is authenticated based on fullName */
  @state()
  private _authenticated = false;

  @queryAssignedNodes({ slot: 'link', flatten: true })
  private _slottedLinkNodes!: Node[];

  readonly #internals: ElementInternals;
  readonly #linkSlot = html`<slot name="link" id="link-slot"></slot>`;
  readonly #signOutButtonSlot = html`<slot name="sign-out-button-text" id="sign-out-button-slot">Sign Out</slot>`;
  readonly #signInButtonSlot = html`<slot name="sign-in-button-text" id="sign-in-button-slot">Sign In</slot>`;
  readonly #themeToggleRef = createRef<ThemeToggleComponent>();

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this._authenticated = !!this.fullName;
  }

  public override updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);

    if (changedProperties.has('open')) {
      toggleState(this.#internals, 'open', this.open);
    }

    if (changedProperties.has('fullName')) {
      this._authenticated = !!this.fullName;
    }
  }

  /** Gets the current authenticated state */
  public get authenticated(): boolean {
    return this._authenticated;
  }

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
            <forge-icon name="logout" slot="end"></forge-icon>
          </forge-button>
        </div>
      </forge-toolbar>
    `;
  }

  get #signInButton(): TemplateResult | typeof nothing {
    return html`
      <forge-toolbar inverted>
        <div slot="end">
          <forge-button class="sign-in-button" id="sign-in-button" @click=${this.#handleSignIn}>
            ${this.#signInButtonSlot}
            <forge-icon name="login" slot="end"></forge-icon>
          </forge-button>
        </div>
      </forge-toolbar>
    `;
  }

  public override render(): TemplateResult {
    // prettier-ignore
    return html`
      <forge-icon-button theme="app-bar" aria-label="${this.buttonLabel}" id="popover-trigger">
        ${when(
          this._authenticated,
          () => html`<forge-avatar .text=${this.fullName} .imageUrl=${this.imageUrl} id="button-avatar"></forge-avatar>`,
          () => html`<forge-avatar id="button-avatar"><forge-icon name="account"></forge-icon></forge-avatar>`
        )}
      </forge-icon-button>
      <forge-popover
        id="user-profile-popover"
        anchor="popover-trigger"
        placement="bottom-end"
        arrow
        position-strategy="fixed"
        .open=${this.open}
        @forge-popover-toggle=${this.#handlePopoverToggle}
        @slotchange=${this.#handleSlotChange}>
        ${when(
          this._authenticated,
          () => html`
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
          `,
          () => html`
            <div class="user-info-container">
              <div class="not-logged-in">
                <forge-avatar>
                  <forge-icon name="account"></forge-icon>
                </forge-avatar>
                <forge-button variant="tonal">Sign in</forge-button>
              </div>
            </div>
          `
        )}
        ${when(this._slottedLinkNodes.length, () => html`<forge-divider></forge-divider>`)}
        ${this.#links}
        ${this.#themeToggle}
        ${when(this._authenticated, () => this.#signOutButton, () => this.#signInButton)}
      </forge-popover>
    `;
  }

  /** Sets the theme for the theme toggle. */
  public setTheme(value: ThemeToggleTheme): void {
    if (this.#themeToggleRef.value) {
      this.#themeToggleRef.value.setTheme(value);
    }
  }

  #handlePopoverToggle(evt: CustomEvent<IPopoverToggleEventData>): void {
    this.open = evt.detail.newState === 'open';
  }

  #handleSignOut(): void {
    const event = new Event('forge-user-profile-sign-out', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  #handleSignIn(): void {
    const event = new Event('forge-user-profile-sign-in', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  #handleSlotChange(evt: Event): void {
    const slotName = (evt.target as HTMLSlotElement).name;
    if (['profile-button-text', 'link', 'sign-out-button-text', 'sign-in-button-text'].includes(slotName)) {
      this.requestUpdate();
    }
  }
}
