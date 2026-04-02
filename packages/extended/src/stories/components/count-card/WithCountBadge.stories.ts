import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconTrendingUp, tylIconTrendingDown, tylIconPeople } from '@tylertech/tyler-icons';

import '$lib/count-card';

defineIconComponent();
IconRegistry.define([tylIconTrendingUp, tylIconTrendingDown, tylIconPeople]);

const component = 'forge-count-card';

const meta = {
  title: 'Components/Count Card',
  component,
  render: () => {
    return html`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        <forge-count-card>
          <span slot="label">Revenue</span>
          <forge-count-badge slot="header-end" theme="success">
            +12.5%
            <forge-icon slot="end" name="trending_up"></forge-icon>
          </forge-count-badge>
          <span slot="count">$48,250.00</span>
        </forge-count-card>

        <forge-count-card>
          <span slot="label">Expenses</span>
          <forge-count-badge slot="header-end" theme="error">
            -8.3%
            <forge-icon slot="end" name="trending_down"></forge-icon>
          </forge-count-badge>
          <span slot="count">$12,480.00</span>
        </forge-count-card>

        <forge-count-card>
          <forge-icon slot="icon" name="people"></forge-icon>
          <span slot="label">New Users</span>
          <forge-count-badge slot="header-end" theme="info">+156</forge-count-badge>
          <span slot="count">2,847</span>
        </forge-count-card>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const WithCountBadge: Story = {};
