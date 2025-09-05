import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { action } from 'storybook/actions';
import { html } from 'lit';
import { defineIconButtonComponent, defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconCheck, tylIconClear, tylIconMoreVert } from '@tylertech/tyler-icons';

import '$lib/multi-select-header';

defineIconButtonComponent();
defineIconComponent();
IconRegistry.define([tylIconCheck, tylIconClear, tylIconMoreVert]);

const component = 'forge-multi-select-header';

const meta = {
  title: 'Components/Multi Select Header',
  component,
  render: args => {
    return html`
      <forge-multi-select-header
        .selectedCount=${args.selectedCount}
        .selectedText=${args.selectedText}
        .noBorder=${args.noBorder}>
        <div slot="actions">
          <forge-icon-button aria-label="Select all items">
            <forge-icon name="check"></forge-icon>
          </forge-icon-button>
          <forge-icon-button aria-label="Clear selection">
            <forge-icon name="clear"></forge-icon>
          </forge-icon-button>
          <forge-icon-button aria-label="More actions">
            <forge-icon name="more_vert"></forge-icon>
          </forge-icon-button>
        </div>
      </forge-multi-select-header>
    `;
  },
  argTypes: {
    selectedCount: { control: 'number' },
    selectedText: { control: 'text' },
    noBorder: { control: 'boolean' }
  },
  args: {
    selectedCount: 3,
    selectedText: '',
    noBorder: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
