import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '$lib/profile-menu';
import '$lib/profile-menu/profile-link';
import { defineListComponent, IconRegistry } from '@tylertech/forge';
import { tylIconSettings } from '@tylertech/tyler-icons/standard';
import { tylIconAccount } from '@tylertech/tyler-icons/extended';

defineListComponent();

IconRegistry.define([tylIconSettings, tylIconAccount]);

const component = 'forge-profile-menu';

const meta = {
  title: 'Components/Profile Menu',
  render: args => {
    return html`<forge-app-bar theme-mode="scoped">
      <forge-profile-menu slot="end" ?theme-toggle=${args.showThemeToggle}>
        ${args.profileButtonText.length ? html`<span slot="profile-button-text">${args.profileButtonText}</span>` : ''}
        ${args.showSlottedLinks
          ? html`<forge-profile-link slot="link">
                <forge-icon slot="icon" name="settings" external></forge-icon>
                <a href="http://www.google.com" target="_blank">Settings</a>
              </forge-profile-link>
              <forge-profile-link slot="link">
                <forge-icon slot="icon" name="account" external></forge-icon>
                <a href="http://www.google.com" target="_blank">Profile</a>
              </forge-profile-link>`
          : html``}
        ${args.signOutButtonText.length ? html`<span slot="sign-out-button-text">${args.signOutButtonText}</span>` : ''}
      </forge-profile-menu>
    </forge-app-bar>`;
  },
  component,
  argTypes: {
    profileButtonText: { control: 'text' },
    signOutButtonText: { control: 'text' },
    showSlottedLinks: { control: 'boolean' },
    showThemeToggle: { control: 'boolean' }
  },
  args: {
    profileButtonText: 'Profile',
    signOutButtonText: 'Sign Out',
    showSlottedLinks: true,
    showThemeToggle: true
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
