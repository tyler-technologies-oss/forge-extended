import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';
import {
  defineListComponent,
  defineListItemComponent,
  defineIconComponent,
  defineDividerComponent,
  defineInlineMessageComponent,
  IconRegistry
} from '@tylertech/forge';
import { tylIconHome, tylIconInbox, tylIconSettings, tylIconStar, tylIconInfoOutline } from '@tylertech/tyler-icons';

import '$lib/app-layout';
import type { AppLayoutBreakpointChangeEventData, AppLayoutDrawerChangeEventData } from '$lib/app-layout';

defineListComponent();
defineListItemComponent();
defineIconComponent();
defineDividerComponent();
defineInlineMessageComponent();

IconRegistry.define([tylIconHome, tylIconInbox, tylIconSettings, tylIconStar, tylIconInfoOutline]);

const component = 'forge-app-layout';

const breakpointChangeAction = action('forge-app-layout-breakpoint-change');
const drawerChangeAction = action('forge-app-layout-drawer-change');

const meta = {
  title: 'Components/App Layout',
  component,
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
    }
  },
  args: {
    appTitle: 'Custom Mobile Content Demo',
    breakpoint: 960
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const CustomMobileContent: Story = {
  render: args => {
    // Track the current breakpoint state
    let currentBreakpoint: 'small' | 'large' = window.innerWidth >= args.breakpoint ? 'large' : 'small';

    // Handle breakpoint change event
    const handleBreakpointChange = (event: CustomEvent<AppLayoutBreakpointChangeEventData>): void => {
      currentBreakpoint = event.detail.breakpoint;
      updateNavigationContent();
      breakpointChangeAction(event);
    };

    // Handle drawer change event
    const handleDrawerChange = (event: CustomEvent<AppLayoutDrawerChangeEventData>): void => {
      drawerChangeAction(event);
    };

    // Update the navigation content based on the current breakpoint
    const updateNavigationContent = (): void => {
      const navigationContainer = document.getElementById('navigation-container');
      if (!navigationContainer) return;

      const mobileOnlyBanner =
        currentBreakpoint === 'small'
          ? `<forge-inline-message theme="info-secondary" style="margin: var(--forge-spacing-medium);">
              <forge-icon slot="icon" name="info_outline"></forge-icon>
              This banner only appears in the mobile view.
            </forge-inline-message>`
          : '';

      navigationContainer.innerHTML = `
        ${mobileOnlyBanner}
        <forge-list navlist>
          <forge-list-item>
            <forge-icon slot="start" name="home"></forge-icon>
            <a href="javascript: void(0);">Home</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="inbox"></forge-icon>
            <a href="javascript: void(0);">Inbox</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="star"></forge-icon>
            <a href="javascript: void(0);">Starred</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="settings"></forge-icon>
            <a href="javascript: void(0);">Settings</a>
          </forge-list-item>
        </forge-list>
      `;
    };

    // Initialize content after render
    setTimeout(() => {
      updateNavigationContent();
    }, 0);

    return html`
      <forge-app-layout
        app-title=${args.appTitle}
        breakpoint=${args.breakpoint}
        @forge-app-layout-breakpoint-change=${handleBreakpointChange}
        @forge-app-layout-drawer-change=${handleDrawerChange}>
        <div id="navigation-container" slot="navigation">
          <!-- Content will be dynamically updated based on breakpoint -->
        </div>

        <div slot="body" style="padding: var(--forge-spacing-medium);">
          <h2 class="forge-typography--heading2">Custom Mobile Content Demo</h2>
          <p class="forge-typography--body1" style="margin-block: var(--forge-spacing-medium);">
            This demo shows how to use the <code>forge-app-layout-breakpoint-change</code> event to detect when the
            layout changes between mobile and desktop modes, and render different content accordingly.
          </p>
          <p class="forge-typography--body1" style="margin-block-end: var(--forge-spacing-medium);">
            <strong>Try resizing the window</strong> to see the navigation content change:
          </p>
          <ul class="forge-typography--body1">
            <li><strong>Mobile (small):</strong> Shows an inline message that only appears in mobile view</li>
            <li><strong>Desktop (large):</strong> Shows standard navigation list without the message</li>
          </ul>
          <p
            class="forge-typography--body2"
            style="margin-block-start: var(--forge-spacing-large); color: var(--forge-theme-text-medium);">
            Check the <strong>Actions</strong> panel below to see the events being emitted as you resize the window or
            toggle the drawer.
          </p>
        </div>
      </forge-app-layout>
    `;
  }
};
