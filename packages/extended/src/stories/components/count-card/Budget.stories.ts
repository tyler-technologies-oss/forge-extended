import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineIconComponent, defineIconButtonComponent, IconRegistry } from '@tylertech/forge';
import { tylIconCancel, tylIconEdit } from '@tylertech/tyler-icons';

import '$lib/count-card';

defineIconComponent();
defineIconButtonComponent();
IconRegistry.define([tylIconCancel, tylIconEdit]);

const component = 'forge-count-card';

const meta = {
  title: 'Components/Count Card',
  component,
  render: () => {
    return html`
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
        <forge-count-card>
          <span slot="label">Cost</span>
          <span slot="count">$33,002.00</span>
        </forge-count-card>

        <forge-count-card>
          <span slot="label">Funding</span>
          <span slot="count">$23,001.00</span>
        </forge-count-card>

        <forge-count-card theme="error">
          <span slot="label">Variance</span>
          <forge-icon-button slot="action" aria-label="Cancel">
            <forge-icon name="cancel"></forge-icon>
          </forge-icon-button>
          <span slot="count">-$10,001.00</span>
        </forge-count-card>

        <forge-count-card>
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
