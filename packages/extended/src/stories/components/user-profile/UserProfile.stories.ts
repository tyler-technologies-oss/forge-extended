import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { addons } from 'storybook/preview-api';
import { defineAppBarComponent, IconRegistry } from '@tylertech/forge';
import { tylIconSettings, tylIconAccount } from '@tylertech/tyler-icons';
import { action } from 'storybook/actions';
import { UPDATE_DARK_MODE_EVENT_NAME, DARK_MODE_EVENT_NAME } from '@vueless/storybook-dark-mode';
import { createRef, ref } from 'lit/directives/ref.js';
import { ThemeToggleTheme, type ThemeToggleUpdateEventData } from '$lib/theme-toggle';
import { type UserProfileComponent } from '$lib/user-profile';

import '$lib/user-profile';
import '$lib/user-profile/profile-link';

const channel = addons.getChannel();

defineAppBarComponent();
const signOutAction = action('forge-user-profile-sign-out');
const signInAction = action('forge-user-profile-sign-in');

IconRegistry.define([tylIconSettings, tylIconAccount]);

const component = 'forge-user-profile';

let hasAttachedThemeListener = false;
let lastThemeToggleChange: ThemeToggleTheme | null = null;

const meta = {
  title: 'Components/User Profile',
  render: args => {
    const userProfileRef = createRef<UserProfileComponent>();

    function handleThemeChange(evt: CustomEvent<ThemeToggleUpdateEventData>) {
      const mode =
        evt.detail.theme === 'system'
          ? window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
          : evt.detail.theme;
      lastThemeToggleChange = evt.detail.theme as ThemeToggleTheme;
      channel.emit(UPDATE_DARK_MODE_EVENT_NAME, mode);
    }

    function handleStorybookThemeUpdate(isDark: boolean) {
      // We only need to respond to the event if the theme toggle was not just changed to 'system'
      if (lastThemeToggleChange === 'system') {
        lastThemeToggleChange = null;
        return;
      }

      if (userProfileRef.value) {
        userProfileRef.value.setTheme(isDark ? 'dark' : 'light');
      }
    }

    // Make sure we only attach the theme listener once across multiple renders
    if (!hasAttachedThemeListener) {
      channel.on(DARK_MODE_EVENT_NAME, handleStorybookThemeUpdate);
      hasAttachedThemeListener = true;
    }

    // prettier-ignore
    return html`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
      <forge-user-profile
        ${ref(userProfileRef)}
        @forge-user-profile-sign-in=${(evt: Event) => signInAction(evt)}
        @forge-user-profile-sign-out=${(evt: Event) => signOutAction(evt)}
        @forge-theme-toggle-update=${handleThemeChange}
        slot="end"
        button-label="${args.buttonAriaLabel}"
        ?theme-toggle=${args.showThemeToggle}
        image-url="${args.imageUrl}"
        full-name="${args.fullName}"
        email="first.last@tylertech.com">
        ${args.showSlottedLinks ? html`<forge-profile-link slot="link">
          <forge-icon slot="icon" name="settings"></forge-icon>
          <a href="http://www.google.com" target="_blank">Settings</a>
        </forge-profile-link>
        <forge-profile-link slot="link">
          <forge-icon slot="icon" name="account"></forge-icon>
          <a href="http://www.google.com" target="_blank">Profile</a>
        </forge-profile-link>
        ` : nothing}
        ${args.signInButtonText.length ? html`<span slot="sign-in-button-text">${args.signInButtonText}</span>` : ''}
        ${args.signOutButtonText.length ? html`<span slot="sign-out-button-text">${args.signOutButtonText}</span>` : ''}
      </forge-user-profile>
    </forge-app-bar>`;
  },
  component,
  subcomponents: {
    ['Profile Link']: 'forge-profile-link'
  },
  argTypes: {
    fullName: { control: 'text' },
    signInButtonText: { control: 'text' },
    signOutButtonText: { control: 'text' },
    buttonAriaLabel: { control: 'text' },
    imageUrl: { control: 'text' },
    showSlottedLinks: { control: 'boolean' },
    showThemeToggle: { control: 'boolean' }
  },
  args: {
    fullName: 'First Last',
    signInButtonText: 'Sign in',
    signOutButtonText: 'Sign Out',
    buttonAriaLabel: 'Open the incredibly awesome profile menu',
    imageUrl: '',
    showSlottedLinks: true,
    showThemeToggle: true
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
