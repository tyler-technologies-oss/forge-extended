import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import {
  defineAppBarComponent,
  defineCardComponent,
  defineScaffoldComponent,
  defineDrawerComponent,
  defineListComponent,
  defineIconComponent,
  IconRegistry
} from '@tylertech/forge';
import { tylIconDashboard, tylIconHome, tylIconSettings, tylIconReport, tylIconPeople } from '@tylertech/tyler-icons';

import '$lib/app-layout';

defineAppBarComponent();
defineCardComponent();
defineScaffoldComponent();
defineDrawerComponent();
defineListComponent();
defineIconComponent();

IconRegistry.define([tylIconDashboard, tylIconHome, tylIconSettings, tylIconReport, tylIconPeople]);

const component = 'forge-app-layout';

const meta = {
  title: 'Components/App Layout',
  component,
  render: (args: any) => {
    return html`
      <style>
        * {
          box-sizing: border-box !important;
        }
        body {
          margin: 0 !important;
          padding: 0 !important;
        }

        .section-header {
          padding-block: var(--forge-spacing-small);
          padding-inline: var(--forge-spacing-small);
          color: var(--forge-theme-text-secondary);
        }

        /* Responsive layout */
      </style>
      <forge-app-layout
        app-title=${args.appTitle}
        breakpoint=${args.breakpoint}
        page-title=${args.pageTitle}
        ?show-secondary-back-arrow=${args.showSecondaryBackArrow}
        ?page-toolbar-no-border=${args.pageToolbarNoBorder}>
        <forge-list navlist slot="navigation">
          <!-- Dashboard Section -->
          <div class="forge-typography--body1 section-header">Dashboard</div>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="visibility" external></forge-icon>
            <button type="button">Overview</button>
          </forge-list-item>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="analytics" external></forge-icon>
            <button type="button">Analytics</button>
          </forge-list-item>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="assessment" external></forge-icon>
            <button type="button">Reports</button>
          </forge-list-item>

          <forge-divider></forge-divider>

          <!-- Users Section -->
          <div class="forge-typography--body1 section-header">Users</div>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="people" external></forge-icon>
            <button type="button">All Users</button>
          </forge-list-item>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="admin_panel_settings" external></forge-icon>
            <button type="button">Roles & Permissions</button>
          </forge-list-item>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="groups" external></forge-icon>
            <button type="button">User Groups</button>
          </forge-list-item>

          <forge-divider></forge-divider>

          <!-- Documents Section -->
          <div class="forge-typography--body1 section-header">Documents</div>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="history" external></forge-icon>
            <button type="button">Recent Files</button>
          </forge-list-item>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="share" external></forge-icon>
            <button type="button">Shared</button>
          </forge-list-item>
          <forge-list-item class="section-item">
            <forge-icon slot="start" name="archive" external></forge-icon>
            <button type="button">Archive</button>
          </forge-list-item>

          <forge-divider></forge-divider>

          <!-- Standalone Items -->
          <forge-list-item>
            <forge-icon slot="start" name="settings" external></forge-icon>
            <button type="button">Settings</button>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="help" external></forge-icon>
            <button type="button">Help & Support</button>
          </forge-list-item>
        </forge-list>

        <div style="padding: 16px;">Stuff</div>

        <div slot="footer">
          <div
            style="padding: 16px; background: var(--forge-theme-surface-container); border-top: 1px solid var(--forge-theme-outline-low); text-align: center;">
            Footer Content
          </div>
        </div>
      </forge-app-layout>
    `;
  },
  argTypes: {
    appTitle: {
      control: 'text',
      description: 'The title text to display in the app bar',
      table: {
        category: 'Properties'
      }
    },
    breakpoint: {
      control: 'number',
      description: 'The screen width breakpoint in pixels for responsive behavior',
      table: {
        category: 'Properties'
      }
    },
    pageTitle: {
      control: 'text',
      description: 'The page title to display in the body header toolbar (optional)',
      table: {
        category: 'Properties'
      }
    },
    showSecondaryBackArrow: {
      control: 'boolean',
      description: 'Controls whether the back arrow button is shown in the page toolbar',
      table: {
        category: 'Properties'
      }
    },
    pageToolbarNoBorder: {
      control: 'boolean',
      description: 'Controls whether the page toolbar border is hidden',
      table: {
        category: 'Properties'
      }
    }
  },
  args: {
    appTitle: 'App Layout Demo',
    breakpoint: 768,
    pageTitle: 'Dashboard',
    showSecondaryBackArrow: true,
    pageToolbarNoBorder: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
