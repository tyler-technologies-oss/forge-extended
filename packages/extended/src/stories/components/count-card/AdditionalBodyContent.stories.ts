import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineIconComponent, defineMeterComponent, IconRegistry } from '@tylertech/forge';
import { tylIconAttachMoney } from '@tylertech/tyler-icons';

import '$lib/count-card';

defineIconComponent();
defineMeterComponent();
IconRegistry.define([tylIconAttachMoney]);

const component = 'forge-count-card';

const meta = {
  title: 'Components/Count Card',
  component,
  render: () => {
    return html`
      <style>
        .meter-body {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--forge-theme-text-medium);
        }

        .body-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .last-updated {
          color: var(--forge-theme-text-low);
        }
      </style>
      <div style="width: 320px;">
        <forge-count-card>
          <forge-icon slot="icon" name="attach_money"></forge-icon>
          <span slot="label">Todays money</span>
          <span slot="count">$50,846.00</span>
          <div slot="body" class="meter-body">
            <span class="forge-typography--body1">66% of monthly target</span>
            <span class="forge-typography--body1">100k</span>
          </div>
          <div slot="body" class="body-content">
            <forge-meter value="0.66" min="0" max="1"></forge-meter>
            <span class="forge-typography--label1 last-updated">Last updated 12/12/2025</span>
          </div>
        </forge-count-card>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const AdditionalBodyContent: Story = {};
