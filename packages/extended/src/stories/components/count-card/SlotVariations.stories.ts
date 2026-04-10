import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import {
  defineIconComponent,
  defineIconButtonComponent,
  defineMenuComponent,
  defineBadgeComponent,
  defineMeterComponent,
  IconRegistry
} from '@tylertech/forge';
import {
  tylIconAttachMoney,
  tylIconPeople,
  tylIconShoppingCart,
  tylIconTrendingUp,
  tylIconMoreVert
} from '@tylertech/tyler-icons';

import '$lib/count-card';

defineIconComponent();
defineIconButtonComponent();
defineMenuComponent();
defineBadgeComponent();
defineMeterComponent();
IconRegistry.define([tylIconAttachMoney, tylIconPeople, tylIconShoppingCart, tylIconTrendingUp, tylIconMoreVert]);

const component = 'forge-count-card';

const meta = {
  title: 'Components/Count Card',
  component,
  render: () => {
    const menuOptions = [
      { label: 'View details', value: 'details' },
      { label: 'Export data', value: 'export' },
      { label: 'Remove card', value: 'remove' }
    ];

    return html`
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
        <!-- Card 1: With header-end badge -->
        <forge-count-card>
          <forge-icon slot="icon" name="attach_money"></forge-icon>
          <span slot="label">Revenue</span>
          <forge-badge slot="header-end" theme="success">+12%</forge-badge>
          <span slot="count">$12,450.00</span>
        </forge-count-card>

        <!-- Card 2: With action slot, no icon -->
        <forge-count-card>
          <span slot="label">Total Users</span>
          <forge-menu slot="action" .options=${menuOptions}>
            <forge-icon-button aria-label="More options">
              <forge-icon name="more_vert"></forge-icon>
            </forge-icon-button>
          </forge-menu>
          <span slot="count">1,234</span>
        </forge-count-card>

        <!-- Card 3: With count-end and body content -->
        <forge-count-card>
          <forge-icon slot="icon" name="shopping_cart"></forge-icon>
          <span slot="label">Orders This Month</span>
          <span slot="count">567</span>
          <span slot="count-end" style="color: var(--forge-theme-text-medium);">/ 1,000</span>
          <div slot="body">
            <forge-meter value="0.567" min="0" max="1" theme="info"></forge-meter>
          </div>
        </forge-count-card>

        <!-- Card 4: Long label with full-width content -->
        <forge-count-card>
          <forge-icon slot="icon" name="trending_up"></forge-icon>
          <span slot="label">Year-over-Year Growth Rate for Q4 Performance Metrics</span>
          <span slot="count">+23.5%</span>
          <svg slot="full-width" viewBox="0 0 200 40" style="width: 100%; display: block;">
            <polyline
              fill="none"
              stroke="var(--forge-theme-success)"
              stroke-width="2"
              points="0,35 20,30 40,32 60,25 80,28 100,20 120,22 140,15 160,18 180,10 200,5" />
          </svg>
        </forge-count-card>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const SlotVariations: Story = {};
