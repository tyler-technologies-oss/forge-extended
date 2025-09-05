import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import icons from './icons.json';
import data from './data.json';
import { AppLauncherOption } from '$lib/app-launcher';

import '$lib/app-launcher';
import '$lib/app-launcher/custom-link';
import '$lib/app-launcher/app-link';

const component = 'forge-app-launcher';

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
    label: 'Payments Administration',
    iconName: 'payment',
    uri: 'www.google.com',
    target: '_blank'
  },
  {
    label: 'PEP Administration',
    iconName: 'admin_panel_settings',
    uri: 'www.google.com',
    target: '_blank'
  },
  {
    label: 'Permissions',
    iconName: 'security',
    uri: 'www.google.com',
    target: '_blank'
  },
  {
    label: 'Batch Integration',
    iconName: 'batch_prediction',
    uri: 'www.google.com',
    target: '_blank'
  },
  {
    label: 'System Integration',
    iconName: 'settings_system_daydream',
    uri: 'www.google.com',
    target: '_blank'
  }
];

const meta = {
  title: 'Components/App Launcher',
  render: args => {
    return html`
      <forge-card no-padding>
        <forge-app-bar no-border theme-mode="scoped">
          <forge-app-launcher
            .fullscreen=${args.fullscreen}
            .allApps=${allApps}
            .relatedApps=${args.showRelatedApps ? relatedApps : []}
            slot="end">
            <span slot="related-apps-title">${args.relatedAppsTitle}</span>
            <span slot="all-apps-title">${args.allAppsTitle}</span>
            <span slot="view-all-apps-button-text">${args.viewAllAppsButtonText}</span>
            <span slot="custom-links-title">${args.customLinksTitle}</span>

            <!-- ${allApps.map(
              app => html`
                <forge-app-link slot="app-link">
                  <span>test</span>
                </forge-app-link>
              `
            )} -->
            ${args.showCustomLinks
              ? html`
                  <forge-custom-link slot="custom-link">
                    <a href="http://www.google.com" target="_blank">Payments Documentation</a>
                  </forge-custom-link>
                  <forge-custom-link slot="custom-link">
                    <a href="http://www.google.com" target="_blank">Frequently Asked Questions</a>
                  </forge-custom-link>
                  <forge-custom-link slot="custom-link">
                    <a href="http://www.google.com" target="_blank">Community Services Directory</a>
                  </forge-custom-link>
                `
              : nothing}
          </forge-app-launcher>
        </forge-app-bar>
      </forge-card>
    `;
  },

  component,
  argTypes: {
    fullscreen: { control: 'boolean' },
    showRelatedApps: { control: 'boolean' },
    showCustomLinks: { control: 'boolean' },
    relatedAppsTitle: { control: 'text' },
    allAppsTitle: { control: 'text' },
    viewAllAppsButtonText: { control: 'text' }
  },
  args: {
    fullscreen: false,
    showRelatedApps: true,
    showCustomLinks: true,
    relatedAppsTitle: 'Related apps',
    allAppsTitle: 'All apps',
    viewAllAppsButtonText: 'View all apps',
    customLinksTitle: 'Custom links'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
