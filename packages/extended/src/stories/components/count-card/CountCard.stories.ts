import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { defineIconComponent, defineBadgeComponent, defineIconButtonComponent, IconRegistry } from '@tylertech/forge';
import { tylIconAttachMoney, tylIconMoreVert } from '@tylertech/tyler-icons';

import '$lib/count-card';

defineIconComponent();
defineBadgeComponent();
defineIconButtonComponent();
IconRegistry.define([tylIconAttachMoney, tylIconMoreVert]);

const component = 'forge-count-card';

const meta = {
  title: 'Components/Count Card',
  component,
  render: args => {
    return html`
      <div style="width: 320px;">
        <forge-count-card theme=${args.theme || nothing} ?no-border=${args.noBorder}>
          ${args.showIcon ? html`<forge-icon slot="icon" name="attach_money"></forge-icon>` : nothing}
          ${args.showLabel ? html`<span slot="label">${args.labelText}</span>` : nothing}
          ${args.showHeaderEnd
            ? html`<forge-badge slot="header-end" theme=${args.theme || nothing}>${args.badgeText}</forge-badge>`
            : nothing}
          ${args.showAction
            ? html`
                <forge-icon-button slot="action" aria-label="More options">
                  <forge-icon name="more_vert"></forge-icon>
                </forge-icon-button>
              `
            : nothing}
          <span slot="count">${args.countText}</span>
          ${args.showCountEnd
            ? html`<forge-badge slot="count-end" theme=${args.theme || nothing}>${args.countEndText}</forge-badge>`
            : nothing}
          ${args.showFullWidth
            ? html`
                <svg slot="full-width" viewBox="0 0 200 40" style="width: 100%; display: block;">
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
    theme: {
      control: 'select',
      options: ['none', 'primary', 'secondary', 'tertiary', 'success', 'error', 'warning', 'info', 'info-secondary'],
      description: 'Theme variant applied to the card',
      table: { category: 'Properties' }
    },
    noBorder: {
      control: 'boolean',
      description: 'Hide the card border',
      table: { category: 'Properties' }
    },
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
    showAction: {
      control: 'boolean',
      description: 'Toggle the action slot (icon button)',
      table: { category: 'Slots' }
    },
    showCountEnd: {
      control: 'boolean',
      description: 'Toggle the count-end slot (badge)',
      table: { category: 'Slots' }
    },
    showFullWidth: {
      control: 'boolean',
      description: 'Toggle the full-width slot (sparkline)',
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
    countEndText: {
      control: 'text',
      description: 'Count end text content',
      table: { category: 'Content' }
    },
    badgeText: {
      control: 'text',
      description: 'Badge text content',
      table: { category: 'Content' }
    }
  },
  args: {
    theme: 'none',
    noBorder: false,
    showIcon: true,
    showLabel: true,
    showHeaderEnd: true,
    showAction: false,
    showCountEnd: false,
    showFullWidth: false,
    labelText: 'Tomorrows money',
    countText: '$303.33',
    countEndText: '+5%',
    badgeText: '+12%'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
