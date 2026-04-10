import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineIconComponent, defineIconButtonComponent, defineBadgeComponent, IconRegistry } from '@tylertech/forge';
import {
  tylIconEdit,
  tylIconAttachMoney,
  tylIconAccountBalance,
  tylIconTrendingDown,
  tylIconStar
} from '@tylertech/tyler-icons';

import '$lib/count-card';

defineIconComponent();
defineIconButtonComponent();
defineBadgeComponent();
IconRegistry.define([tylIconEdit, tylIconAttachMoney, tylIconAccountBalance, tylIconTrendingDown, tylIconStar]);

const component = 'forge-count-card';

const meta = {
  title: 'Components/Count Card',
  component,
  render: () => {
    return html`
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--forge-spacing-medium);">
        <forge-count-card>
          <forge-icon slot="icon" name="attach_money"></forge-icon>
          <span slot="label">Cost</span>
          <span slot="count">$33,002.00</span>
        </forge-count-card>

        <forge-count-card>
          <forge-icon slot="icon" name="account_balance"></forge-icon>
          <span slot="label">Funding</span>
          <span slot="count">$23,001.00</span>
        </forge-count-card>

        <forge-count-card theme="error">
          <forge-icon slot="icon" name="trending_down"></forge-icon>
          <span slot="label">Variance</span>
          <forge-badge slot="header-end" theme="error">Over budget</forge-badge>
          <span slot="count">-$10,001.00</span>
        </forge-count-card>

        <forge-count-card>
          <forge-icon slot="icon" name="star"></forge-icon>
          <span slot="label">Total score</span>
          <forge-icon-button slot="action" aria-label="Edit">
            <forge-icon name="edit"></forge-icon>
          </forge-icon-button>
          <span slot="count">Not scored</span>
        </forge-count-card>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Budget: Story = {};
