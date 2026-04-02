import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconAttachMoney, tylIconPeople, tylIconShoppingCart, tylIconTrendingUp } from '@tylertech/tyler-icons';

import '$lib/count-card';

defineIconComponent();
IconRegistry.define([tylIconAttachMoney, tylIconPeople, tylIconShoppingCart, tylIconTrendingUp]);

const component = 'forge-count-card';

const meta = {
  title: 'Components/Count Card',
  component,
  render: () => {
    return html`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
        <forge-count-card tonal>
          <forge-icon slot="icon" name="attach_money"></forge-icon>
          <span slot="label">Revenue</span>
          <span slot="count">$12,450.00</span>
        </forge-count-card>

        <forge-count-card tonal>
          <forge-icon slot="icon" name="people"></forge-icon>
          <span slot="label">Total Users</span>
          <span slot="count">1,234</span>
        </forge-count-card>

        <forge-count-card tonal>
          <forge-icon slot="icon" name="shopping_cart"></forge-icon>
          <span slot="label">Orders</span>
          <span slot="count">567</span>
        </forge-count-card>

        <forge-count-card tonal>
          <forge-icon slot="icon" name="trending_up"></forge-icon>
          <span slot="label">Growth</span>
          <span slot="count">+23.5%</span>
        </forge-count-card>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Tonal: Story = {};
