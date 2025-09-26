import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import icons from './icons.json';
import data from './data.json';
import { AppLauncherOption } from '$lib/app-launcher';

import '$lib/app-launcher';
import '$lib/app-launcher/app-launcher-link';
import '$lib/app-launcher/app-link';
import { defineAppBarComponent } from '@tylertech/forge';

const component = 'forge-app-launcher';

defineAppBarComponent();

const selectRandomIconForDemo = () => {
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex].name;
};

const allApps = data.map(d => {
  return {
    label: d.label,
    iconName: selectRandomIconForDemo(),
    uri: d.uri
  };
}) as AppLauncherOption[];

const relatedApps: AppLauncherOption[] = [
  {
    label: 'Canva',
    iconName: 'payment',
    uri: 'https://google.com',
    target: '_blank'
  },
  {
    label: 'Figma',
    iconName: 'admin_panel_settings',
    uri: 'https://google.com',
    target: '_blank'
  },
  {
    label: 'GitHub',
    iconName: 'security',
    uri: 'https://google.com',
    target: '_blank'
  },
  {
    label: 'Slack',
    iconName: 'batch_prediction',
    uri: 'https://google.com',
    target: '_blank'
  },
  {
    label: 'Trello',
    iconName: 'settings_system_daydream',
    uri: 'https://google.com',
    target: '_blank'
  }
];

const meta = {
  title: 'Components/App Launcher',
  render: args => {
    return html`
      <forge-app-bar theme-mode="scoped" title-text="App Launcher">
        <forge-app-launcher
          slot="end"
          style="--forge-app-launcher-width: ${args.width}px; --forge-app-launcher-avatar-size: ${args.avatarSize}px;"
          .allApps=${allApps}
          .relatedApps=${args.showRelatedApps ? relatedApps : []}
          .loading=${args.loading}>
          <span slot="related-apps-title">${args.relatedAppsTitle}</span>
          <span slot="all-apps-title">${args.allAppsTitle}</span>
          <span slot="view-all-apps-button-text">${args.viewAllAppsButtonText}</span>
          <span slot="app-launcher-links-title">${args.appLauncherLinksTitle}</span>
          ${args.showAppLauncherLinks
            ? html`
                <forge-app-launcher-link slot="app-launcher-link">
                  <a href="http://www.google.com" target="_blank">Payments Documentation</a>
                </forge-app-launcher-link>
                <forge-app-launcher-link slot="app-launcher-link">
                  <a href="http://www.google.com" target="_blank">Frequently Asked Questions</a>
                </forge-app-launcher-link>
                <forge-app-launcher-link slot="app-launcher-link">
                  <a href="http://www.google.com" target="_blank">Community Services Directory</a>
                </forge-app-launcher-link>
              `
            : nothing}
        </forge-app-launcher>
      </forge-app-bar>
    `;
  },

  component,
  argTypes: {
    showRelatedApps: { control: 'boolean' },
    showAppLauncherLinks: { control: 'boolean' },
    loading: { control: 'boolean' },
    relatedAppsTitle: { control: 'text' },
    allAppsTitle: { control: 'text' },
    viewAllAppsButtonText: { control: 'text' },
    width: { control: { type: 'number', min: 300, max: 800, step: 10 } },
    avatarSize: { control: { type: 'number', min: 24, max: 96, step: 4 } }
  },
  args: {
    showRelatedApps: true,
    showAppLauncherLinks: true,
    loading: false,
    relatedAppsTitle: 'Related apps',
    allAppsTitle: 'All apps',
    viewAllAppsButtonText: 'View all apps',
    appLauncherLinksTitle: 'Custom Links',
    width: 500,
    avatarSize: 48
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
