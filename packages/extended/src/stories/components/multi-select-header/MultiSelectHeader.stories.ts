import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { action } from 'storybook/actions';
import { html } from 'lit';
import { defineIconButtonComponent, defineIconComponent, defineButtonComponent, IconRegistry } from '@tylertech/forge';
import { tylIconCheck, tylIconClear, tylIconMoreVert } from '@tylertech/tyler-icons';

import '$lib/multi-select-header';

defineIconButtonComponent();
defineIconComponent();
defineButtonComponent();
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
        .noBorder=${args.noBorder}
        .showSelectAll=${args.showSelectAll}>
        ${args.selectAllText ? html`<span slot="select-all">${args.selectAllText}</span>` : ''}
        <forge-button slot="actions" variant="outlined">Forge button</forge-button>
        <forge-icon-button slot="actions" aria-label="Select all items">
          <forge-icon name="check"></forge-icon>
        </forge-icon-button>
        <forge-icon-button slot="actions" aria-label="Clear selection">
          <forge-icon name="clear"></forge-icon>
        </forge-icon-button>

        <forge-icon-button slot="actions" aria-label="More actions">
          <forge-icon name="more_vert"></forge-icon>
        </forge-icon-button>
      </forge-multi-select-header>
    `;
  },
  argTypes: {
    selectedCount: { control: 'number' },
    selectedText: { control: 'text' },
    noBorder: { control: 'boolean' },
    showSelectAll: { control: 'boolean' },
    selectAllText: { control: 'text' }
  },
  args: {
    selectedCount: 3,
    selectedText: '',
    noBorder: false,
    showSelectAll: false,
    selectAllText: ''
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
