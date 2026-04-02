import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconTrendingUp } from '@tylertech/tyler-icons';

import '$lib/count-card';

defineIconComponent();
IconRegistry.define([tylIconTrendingUp]);

const component = 'forge-count-card';

const meta = {
  tags: ['hidden'],
  title: 'Components/Count Card',
  component,
  render: () => {
    return html`
      <forge-count-card
        style="--forge-count-card-icon-background: var(--forge-theme-success-container); --forge-count-card-icon-color: var(--forge-theme-on-success-container);">
        <forge-icon slot="icon" name="trending_up"></forge-icon>
        <span slot="label">Profit Margin</span>
        <span slot="count">+15.2%</span>
      </forge-count-card>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const CustomIconStyles: Story = {};
