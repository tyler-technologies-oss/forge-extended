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
      <forge-multi-select-header .text=${args.text} .noBorder=${args.noBorder}>
        ${args.selectAllText ? html`<span slot="select-all-button-text">${args.selectAllText}</span>` : ''}
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
    text: { control: 'text' },
    noBorder: { control: 'boolean' },
    selectAllText: { control: 'text' }
  },
  args: {
    text: '3 items selected',
    noBorder: false,
    selectAllText: ''
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
