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
        min-height: 400px;
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
      <forge-landing-page-layout mode="single" alignment="left">
        <span class="forge-typography--subheading7" slot="secondary-title">Article</span>
        <h2 class="forge-typography--display6" slot="main-title">A single column, edge-aligned layout</h2>
        <forge-button slot="action" variant="filled">Read more</forge-button>

        <div class="demo-area forge-typography--label1" slot="left">Article content</div>

        <div class="demo-footer-area forge-typography--body2" slot="footer">Footer</div>
      </forge-landing-page-layout>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const SingleColumn: Story = {};
