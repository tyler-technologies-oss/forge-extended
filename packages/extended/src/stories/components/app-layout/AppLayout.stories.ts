import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineAppBarComponent, defineScaffoldComponent, defineDrawerComponent } from '@tylertech/forge';

import '$lib/app-layout';

defineAppBarComponent();
defineScaffoldComponent();
defineDrawerComponent();

const component = 'forge-app-layout';

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
    appTitle: 'App Layout Demo',
    breakpoint: 768
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
        </div>
        <div slot="modal-footer">Footer</div>
      </forge-app-layout>
    `;
  }
};
