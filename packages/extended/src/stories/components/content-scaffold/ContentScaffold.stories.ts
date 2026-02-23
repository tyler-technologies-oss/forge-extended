import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { storyStyles } from '../../decorators';

import '$lib/content-scaffold';
import { defineToolbarComponent } from '@tylertech/forge';

defineToolbarComponent();

const component = 'forge-content-scaffold';

const meta = {
  title: 'Components/Content Scaffold',
  component,
  decorators: [
    storyStyles(`
      .dash-container {
        background-color: var(--forge-theme-surface-container-lowest);
        border: 3px dashed var(--forge-theme-outline);
        padding: var(--forge-spacing-medium);
      }

      .header {
        border-bottom: none;
      }

      .body {
        height: 400px;
        border-bottom: none;
      }
    `)
  ],
  render: () => {
    return html`
      <forge-content-scaffold>
        <div class="dash-container header" slot="header">Header slot</div>
        <div class="dash-container body" slot="body">Body slot</div>
        <div class="dash-container" slot="footer">Footer slot</div>
      </forge-content-scaffold>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
