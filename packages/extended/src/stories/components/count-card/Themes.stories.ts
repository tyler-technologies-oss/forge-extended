import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineIconComponent, IconRegistry } from '@tylertech/forge';
import {
  tylIconAttachMoney,
  tylIconPeople,
  tylIconShoppingCart,
  tylIconTrendingUp,
  tylIconStar,
  tylIconWarning,
  tylIconError,
  tylIconInfo
} from '@tylertech/tyler-icons';

import '$lib/count-card';

defineIconComponent();
IconRegistry.define([
  tylIconAttachMoney,
  tylIconPeople,
  tylIconShoppingCart,
  tylIconTrendingUp,
  tylIconStar,
  tylIconWarning,
  tylIconError,
  tylIconInfo
]);

const component = 'forge-count-card';

const meta = {
  title: 'Components/Count Card',
  component,
  render: () => {
    return html`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
        <forge-count-card theme="primary">
          <forge-icon slot="icon" name="star"></forge-icon>
          <span slot="label">Primary</span>
          <span slot="count">1,234</span>
        </forge-count-card>

        <forge-count-card theme="secondary">
          <forge-icon slot="icon" name="people"></forge-icon>
          <span slot="label">Secondary</span>
          <span slot="count">5,678</span>
        </forge-count-card>

        <forge-count-card theme="tertiary">
          <forge-icon slot="icon" name="shopping_cart"></forge-icon>
          <span slot="label">Tertiary</span>
          <span slot="count">910</span>
        </forge-count-card>

        <forge-count-card theme="success">
          <forge-icon slot="icon" name="trending_up"></forge-icon>
          <span slot="label">Success</span>
          <span slot="count">+23.5%</span>
        </forge-count-card>

        <forge-count-card theme="error">
          <forge-icon slot="icon" name="error"></forge-icon>
          <span slot="label">Error</span>
          <span slot="count">12</span>
        </forge-count-card>

        <forge-count-card theme="warning">
          <forge-icon slot="icon" name="warning"></forge-icon>
          <span slot="label">Warning</span>
          <span slot="count">47</span>
        </forge-count-card>

        <forge-count-card theme="info">
          <forge-icon slot="icon" name="info"></forge-icon>
          <span slot="label">Info</span>
          <span slot="count">99+</span>
        </forge-count-card>

        <forge-count-card theme="info-secondary">
          <forge-icon slot="icon" name="attach_money"></forge-icon>
          <span slot="label">Info Secondary</span>
          <span slot="count">$12,450</span>
        </forge-count-card>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Themes: Story = {};
