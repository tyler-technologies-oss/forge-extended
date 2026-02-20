import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  defineAppBarComponent,
  defineCardComponent,
  defineScaffoldComponent,
  defineDrawerComponent,
  defineListComponent,
  defineIconComponent,
  defineButtonComponent,
  defineIconButtonComponent,
  defineToolbarComponent,
  defineMenuComponent,
  defineDividerComponent,
  IconRegistry,
  defineStackComponent,
  IMenuOption,
  ButtonVariant
} from '@tylertech/forge';
import {
  tylIconDashboard,
  tylIconHome,
  tylIconSettings,
  tylIconReport,
  tylIconPeople,
  tylIconArrowBack,
  tylIconAdd,
  tylIconEdit,
  tylIconDelete,
  tylIconMoreVert,
  tylIconFilterList,
  tylIconDownload
} from '@tylertech/tyler-icons';

import '$lib/app-layout';
import '$lib/responsive-toolbar';

defineAppBarComponent();
defineCardComponent();
defineScaffoldComponent();
defineDrawerComponent();
defineListComponent();
defineIconComponent();
defineButtonComponent();
defineIconButtonComponent();
defineToolbarComponent();
defineMenuComponent();
defineDividerComponent();
defineStackComponent();

IconRegistry.define([
  tylIconDashboard,
  tylIconHome,
  tylIconSettings,
  tylIconReport,
  tylIconPeople,
  tylIconArrowBack,
  tylIconAdd,
  tylIconEdit,
  tylIconDelete,
  tylIconMoreVert,
  tylIconFilterList,
  tylIconDownload
]);

interface CustomMenuOption extends IMenuOption {
  variant?: ButtonVariant;
  iconName: string;
}

const component = 'forge-app-layout';

const meta = {
  title: 'Components/App Layout',
  component,
  render: (args: any) => {
    // Menu options for mobile responsive toolbar
    const toolbarMenuOptions: CustomMenuOption[] = [
      { label: 'Download', value: 'download', iconName: 'download', variant: 'text' },
      { label: 'Add Item', value: 'add', iconName: 'add', variant: 'tonal' }
    ];

    // Mock cards data
    const mockCards = Array.from({ length: 6 }, (_, index) => ({ id: index }));

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

        /* Responsive grid layout */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: var(--forge-spacing-medium);
          padding: var(--forge-spacing-medium);
        }

        .card-grid forge-card {
          --forge-card-padding: 0;
        }

        .card-content {
          padding: var(--forge-spacing-medium);
          display: flex;
          flex-direction: column;
          gap: var(--forge-spacing-small);
        }

        .mock-box {
          background: var(--forge-theme-surface-container-low);
          border-radius: 4px;
        }

        .mock-title {
          height: 24px;
          width: 60%;
        }

        .mock-text {
          height: 16px;
        }

        .mock-text-short {
          height: 16px;
          width: 80%;
        }

        .mock-stats {
          display: flex;
          gap: var(--forge-spacing-medium);
          margin-block-start: var(--forge-spacing-small);
        }

        .mock-stat {
          height: 48px;
          flex: 1;
        }
      </style>
      <forge-app-layout
        app-title=${args.appTitle}
        breakpoint=${args.breakpoint}
        page-title=${args.pageTitle}
        ?show-secondary-back-arrow=${args.showSecondaryBackArrow}>
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

        <div slot="right-navigation">
          <forge-list navlist slot="right-navigation">
            <!-- Quick Actions Section -->
            <forge-list-item class="section-item">
              <forge-icon slot="start" name="add" external></forge-icon>
              <button type="button">Create New</button>
            </forge-list-item>
            <forge-list-item class="section-item">
              <forge-icon slot="start" name="upload" external></forge-icon>
              <button type="button">Upload File</button>
            </forge-list-item>

            <!-- Tools Section -->
            <forge-list-item class="section-item">
              <forge-icon slot="start" name="calculate" external></forge-icon>
              <button type="button">Calculator</button>
            </forge-list-item>
            <forge-list-item class="section-item">
              <forge-icon slot="start" name="calendar_today" external></forge-icon>
              <button type="button">Calendar</button>
            </forge-list-item>
          </forge-list>
        </div>

        <forge-responsive-toolbar slot="body-header">
          <!-- Back button - always visible -->
          <forge-icon-button slot="before-start" aria-label="Go back">
            <forge-icon name="arrow_back" external></forge-icon>
          </forge-icon-button>

          <!-- Page title - always visible -->
          <div slot="before-start" class="forge-typography--heading2">User Management Dashboard</div>

          <!-- Desktop version: Individual action buttons shown when space is available -->
          <forge-stack slot="end-large" inline>
            ${toolbarMenuOptions.map(
              option => html`
                <forge-button variant=${ifDefined(option.variant)}>
                  <forge-icon slot="start" name=${option.iconName} external></forge-icon>
                  ${option.label}
                </forge-button>
              `
            )}
          </forge-stack>

          <!-- Mobile version: Overflow menu shown when space is constrained -->
          <div slot="end-small">
            <forge-menu .options=${toolbarMenuOptions} slot="trigger">
              <forge-icon-button aria-label="More options">
                <forge-icon name="more_vert" external></forge-icon>
              </forge-icon-button>
            </forge-menu>
          </div>
        </forge-responsive-toolbar>

        <div class="card-grid">
          ${mockCards.map(
            () => html`
              <forge-card>
                <div class="card-content">
                  <div class="mock-box mock-text"></div>
                  <div class="mock-box mock-text"></div>
                  <div class="mock-box mock-text"></div>
                  <div class="mock-box mock-text"></div>
                  <div class="mock-box mock-text"></div>
                </div>
              </forge-card>
            `
          )}
        </div>

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

export const Demo: Story = {
  render: args => {
    return html`
      <style>
        * {
          box-sizing: border-box !important;
        }
        body {
          margin: 0 !important;
          padding: 0 !important;
        }

        .navigation-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: var(--forge-spacing-medium);
        }

        .content-container {
          padding: var(--forge-spacing-medium);
        }

        .mock-nav-item {
          height: 24px;
          width: 100%;
          background: var(--forge-theme-surface-container-low);
          border-radius: 4px;
          margin-block-end: var(--forge-spacing-small);
        }
      </style>
      <forge-app-layout app-title=${args.appTitle} breakpoint=${args.breakpoint}>
        <div class="navigation-container" slot="navigation">
          <div class="mock-nav-item"></div>
          <div class="mock-nav-item"></div>
          <div class="mock-nav-item"></div>
          <div class="mock-nav-item"></div>
          <div class="mock-nav-item"></div>
          <div class="mock-nav-item"></div>
          <div class="mock-nav-item"></div>
          <div class="mock-nav-item"></div>
        </div>

        <div class="content-container">
          <p class="forge-typography--body1">Resize the frame to see the responsive behavior</p>
          <input
            type="text"
            placeholder="Sample input field"
            style="padding: 8px; width: 100%; max-width: 400px; margin-block-end: 16px;" />
        </div>
        <div slot="modal-footer">Footer</div>
      </forge-app-layout>
    `;
  }
};

export const WithContentGrid: Story = {};
