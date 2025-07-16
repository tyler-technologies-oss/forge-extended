import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { defineListComponent, IconRegistry } from '@tylertech/forge';
import { tylIconSettings, tylIconAccount } from '@tylertech/tyler-icons';
import { action } from 'storybook/actions';

import '$lib/user-profile';
import '$lib/user-profile/profile-link';

defineListComponent();
const actionAction = action('forge-user-profile-sign-out');

IconRegistry.define([tylIconSettings, tylIconAccount]);

const component = 'forge-user-profile';

const meta = {
  title: 'Components/User Profile',
  render: args => {
    // prettier-ignore
    return html`<forge-app-bar theme-mode="scoped" title-text="Forge Extended">
      <forge-user-profile
        @forge-user-profile-sign-out=${(evt: Event) => actionAction(evt)}
        slot="end"
        button-label="${args.buttonAriaLabel}"
        ?theme-toggle=${args.showThemeToggle}
        full-name="First Last"
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
        ${args.signOutButtonText.length ? html`<span slot="sign-out-button-text">${args.signOutButtonText}</span>` : ''}
      </forge-user-profile>
    </forge-app-bar>`;
  },
  component,
  subcomponents: {
    ['Profile Link']: 'forge-profile-link'
  },
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
