import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { action } from 'storybook/actions';
import { html } from 'lit';

import '$lib/multi-select-header';

const component = 'forge-multi-select-header';

const meta = {
  tags: ['hidden'],
  title: 'Components/Multi Select Header/With Select All Button',
  render: () => {
    const handleSelectAll = action('forge-multi-select-header-select-all');

    return html`
      <forge-multi-select-header text="3 items selected" @forge-multi-select-header-select-all=${handleSelectAll}>
        <span slot="select-all-button-text">Select All Items</span>
      </forge-multi-select-header>
    `;
  },
  component
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
