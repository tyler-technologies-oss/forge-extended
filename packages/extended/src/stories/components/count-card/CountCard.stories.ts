import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconAttachMoney } from '@tylertech/tyler-icons';

import '$lib/count-card';

defineIconComponent();
IconRegistry.define([tylIconAttachMoney]);

const component = 'forge-count-card';

const meta = {
  title: 'Components/Count Card',
  component,
  render: args => {
    return html`
      <div style="width: 320px;">
        <forge-count-card>
          ${args.showIcon ? html`<forge-icon slot="icon" name="attach_money"></forge-icon>` : nothing}
          ${args.showLabel ? html`<span slot="label">${args.labelText}</span>` : nothing}
          ${args.showHeaderEnd
            ? html`<forge-count-badge slot="header-end" theme=${args.badgeTheme}>${args.badgeText}</forge-count-badge>`
            : nothing}
          ${args.showCount ? html`<span slot="count">${args.countText}</span>` : nothing}
          ${args.showFullBleed
            ? html`
                <svg slot="full-bleed" viewBox="0 0 200 40" style="width: 100%; display: block;">
                  <polyline
                    fill="none"
                    stroke="var(--forge-theme-primary)"
                    stroke-width="2"
                    points="0,35 20,30 40,32 60,25 80,28 100,20 120,22 140,15 160,18 180,10 200,5" />
                </svg>
              `
            : nothing}
        </forge-count-card>
      </div>
    `;
  },
  argTypes: {
    showIcon: {
      control: 'boolean',
      description: 'Toggle the icon slot',
      table: { category: 'Slots' }
    },
    showLabel: {
      control: 'boolean',
      description: 'Toggle the label slot',
      table: { category: 'Slots' }
    },
    showHeaderEnd: {
      control: 'boolean',
      description: 'Toggle the header-end slot (badge)',
      table: { category: 'Slots' }
    },
    showCount: {
      control: 'boolean',
      description: 'Toggle the count slot',
      table: { category: 'Slots' }
    },
    showFullBleed: {
      control: 'boolean',
      description: 'Toggle the full-bleed slot (sparkline)',
      table: { category: 'Slots' }
    },
    labelText: {
      control: 'text',
      description: 'Label text content',
      table: { category: 'Content' }
    },
    countText: {
      control: 'text',
      description: 'Count text content',
      table: { category: 'Content' }
    },
    badgeText: {
      control: 'text',
      description: 'Badge text content',
      table: { category: 'Content' }
    },
    badgeTheme: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'error', 'warning', 'info'],
      description: 'Badge theme variant',
      table: { category: 'Badge' }
    }
  },
  args: {
    showIcon: true,
    showLabel: true,
    showHeaderEnd: true,
    showCount: true,
    showFullBleed: false,
    labelText: 'Tomorrows money',
    countText: '$303.33',
    badgeText: '+12%',
    badgeTheme: 'success'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
