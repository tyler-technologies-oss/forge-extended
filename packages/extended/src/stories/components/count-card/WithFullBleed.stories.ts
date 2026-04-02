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
      <div style="width: 320px;">
        <forge-count-card>
          <forge-icon slot="icon" name="trending_up"></forge-icon>
          <span slot="label">Weekly Sales</span>
          <span slot="count">$4,250.00</span>
          <svg slot="full-bleed" viewBox="0 0 200 40" style="width: 100%; display: block;">
            <polyline
              fill="none"
              stroke="var(--forge-theme-primary)"
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

export const WithFullBleed: Story = {};
