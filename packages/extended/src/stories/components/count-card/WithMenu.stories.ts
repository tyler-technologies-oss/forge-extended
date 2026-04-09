import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineIconComponent, defineIconButtonComponent, defineMenuComponent, IconRegistry } from '@tylertech/forge';
import { tylIconAttachMoney, tylIconMoreVert } from '@tylertech/tyler-icons';

import '$lib/count-card';

defineIconComponent();
defineIconButtonComponent();
defineMenuComponent();
IconRegistry.define([tylIconAttachMoney, tylIconMoreVert]);

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
      <div style="width: 320px;">
        <forge-count-card>
          <forge-icon slot="icon" name="attach_money"></forge-icon>
          <span slot="label">Revenue</span>
          <forge-menu slot="action" .options=${menuOptions}>
            <forge-icon-button aria-label="More options">
              <forge-icon name="more_vert"></forge-icon>
            </forge-icon-button>
          </forge-menu>
          <span slot="count">$12,450.00</span>
        </forge-count-card>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const WithMenu: Story = {};
