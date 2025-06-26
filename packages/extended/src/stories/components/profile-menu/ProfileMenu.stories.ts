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
    return html` <style>
        body {
          padding: 0 !important;
        }
      </style>
      <forge-app-bar theme-mode="scoped" title-text="Forge Extended">
        <forge-profile-menu
          slot="end"
          button-label="${args.buttonAriaLabel}"
          ?theme-toggle=${args.showThemeToggle}
          full-name="Nick Andrews"
          email="nick.andrews@tylertech.com">
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
          ${args.signOutButtonText.length
            ? html`<span slot="sign-out-button-text">${args.signOutButtonText}</span>`
            : ''}
        </forge-profile-menu>
      </forge-app-bar>`;
  },
  component,
  argTypes: {
    signOutButtonText: { control: 'text' },
    buttonAriaLabel: { control: 'text' },
    showSlottedLinks: { control: 'boolean' },
    showThemeToggle: { control: 'boolean' }
  },
  args: {
    signOutButtonText: 'Sign Out',
    buttonAriaLabel: 'Open the incredibly awesome profile menu',
    showSlottedLinks: true,
    showThemeToggle: true
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
