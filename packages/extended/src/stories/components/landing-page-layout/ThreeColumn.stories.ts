import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineButtonComponent } from '@tylertech/forge';

import '$lib/landing-page-layout';
import { storyStyles } from '../../decorators';

defineButtonComponent();

const component = 'forge-landing-page-layout';

const meta = {
  title: 'Components/Landing Page Layout',
  component,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    storyStyles(`
      body {
        margin: 0;
        padding: 0;
        background-color: var(--forge-theme-surface);
      }

      #storybook-root,
      #root-inner {
        height: 100%;
      }

      .demo-area {
        border: dashed 2px var(--forge-theme-primary-container-high);
        background-color: var(--forge-theme-primary-container-minimum);
        border-radius: var(--forge-shape-medium);
        display: flex;
        place-content: center;
        text-align: center;
        color: var(--forge-theme-on-primary-container);
        padding: var(--forge-spacing-large);
        min-height: 300px;
      }

      .demo-footer-area {
        border: dashed 2px var(--forge-theme-on-surface-inverse);
        color: var(--forge-theme-on-surface-inverse);
        display: flex;
        place-content: center;
        text-align: center;
        padding: var(--forge-spacing-large);
        min-height: 90px;
      }
    `)
  ],
  render: () => {
    return html`
      <forge-landing-page-layout mode="three">
        <span class="forge-typography--subheading7" slot="secondary-title">Dashboard</span>
        <h2
          class="forge-typography--display6"
          slot="main-title"
          style="color: var(--forge-landing-page-layout-header-color, #ffffff)">
          Three-column overview
        </h2>
        <forge-button slot="action" variant="filled">Take action</forge-button>

        <div class="demo-area forge-typography--label1" slot="left">Left column</div>
        <div class="demo-area forge-typography--label1" slot="center">Center column</div>
        <div class="demo-area forge-typography--label1" slot="right">Right column</div>

        <div class="demo-footer-area forge-typography--body2" slot="footer">Footer</div>
      </forge-landing-page-layout>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const ThreeColumn: Story = {};
