import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  defineAppBarComponent,
  defineScaffoldComponent,
  defineDrawerComponent,
  IconRegistry,
  defineListComponent,
  defineListItemComponent,
  defineIconComponent,
  defineIconButtonComponent
} from '@tylertech/forge';

import '$lib/app-layout';
import { tylIconHome, tylIconInbox, tylIconInfo, tylIconSettings, tylIconStar } from '@tylertech/tyler-icons';
import { storyStyles } from 'src/stories/decorators';

defineAppBarComponent();
defineScaffoldComponent();
defineDrawerComponent();
defineListComponent();
defineListItemComponent();
defineIconComponent();
defineIconButtonComponent();

const component = 'forge-app-layout';

IconRegistry.define([tylIconHome, tylIconInbox, tylIconInfo, tylIconSettings, tylIconStar]);

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
    appTitleHref: {
      control: 'text',
      description: 'The URL that the app bar title links to',
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
    leftBreakpoint: {
      control: 'number',
      description: 'Optional separate breakpoint for the left navigation drawer. Falls back to breakpoint if not set.',
      table: {
        category: 'Properties'
      }
    },
    rightBreakpoint: {
      control: 'number',
      description: 'Optional separate breakpoint for the right content drawer. Falls back to breakpoint if not set.',
      table: {
        category: 'Properties'
      }
    }
  },
  args: {
    appTitle: 'App Layout Demo',
    appTitleHref: undefined,
    breakpoint: 960,
    leftBreakpoint: undefined,
    rightBreakpoint: undefined
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: args => {
    return html`
      <forge-app-layout
        app-title=${args.appTitle}
        app-title-href=${ifDefined(args.appTitleHref)}
        breakpoint=${args.breakpoint}
        .leftBreakpoint=${args.leftBreakpoint}
        .rightBreakpoint=${args.rightBreakpoint}>
        <forge-list navlist slot="navigation" data-forge-app-layout-close>
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

        <div style="padding: var(--forge-spacing-medium);" slot="body">
          <p class="forge-typography--body1">Resize the frame to see the responsive behavior</p>
        </div>
      </forge-app-layout>
    `;
  }
};

export const WithRightDrawer: Story = {
  render: args => {
    function handleToggleRightDrawer(event: Event): void {
      const button = event.currentTarget as HTMLElement;
      const appLayout = button.closest('forge-app-layout');
      appLayout?.toggleRightDrawer();
    }

    return html`
      <forge-app-layout
        app-title=${args.appTitle}
        app-title-href=${ifDefined(args.appTitleHref)}
        breakpoint=${args.breakpoint}
        .leftBreakpoint=${args.leftBreakpoint}
        .rightBreakpoint=${args.rightBreakpoint}>
        <forge-list navlist slot="navigation" data-forge-app-layout-close>
          <forge-list-item>
            <forge-icon slot="start" name="home"></forge-icon>
            <a href="javascript: void(0);">Home</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="inbox"></forge-icon>
            <a href="javascript: void(0);">Inbox</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="settings"></forge-icon>
            <a href="javascript: void(0);">Settings</a>
          </forge-list-item>
        </forge-list>

        <forge-icon-button slot="app-bar-end" aria-label="Toggle details panel" @click=${handleToggleRightDrawer}>
          <forge-icon name="info"></forge-icon>
        </forge-icon-button>

        <div style="padding: var(--forge-spacing-medium);" slot="body">
          <p class="forge-typography--body1">Click the info button in the app bar to toggle the right drawer.</p>
          <p class="forge-typography--body1">Resize the frame to see the responsive behavior.</p>
        </div>

        <div slot="body-right-content" style="padding: var(--forge-spacing-medium);">
          <h3 class="forge-typography--heading5">Details Panel</h3>
          <p class="forge-typography--body1">This content appears in the right drawer.</p>
          <p class="forge-typography--body1">On large screens, it appears as a drawer on the right side of the body.</p>
          <p class="forge-typography--body1">On small screens, it appears as a modal dialog.</p>
        </div>
      </forge-app-layout>
    `;
  }
};
