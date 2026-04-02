import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/count-card';

const component = 'forge-count-card';

const meta = {
  title: 'Components/Count Card',
  component,
  render: () => {
    return html`
      <forge-count-card>
        <span slot="label">Total Sales</span>
        <span slot="count">$8,742.50</span>
      </forge-count-card>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const WithoutIcon: Story = {};
