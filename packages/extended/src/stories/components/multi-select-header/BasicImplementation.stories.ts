import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineIconButtonComponent, defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconDelete } from '@tylertech/tyler-icons';

import '$lib/multi-select-header';

defineIconButtonComponent();
defineIconComponent();
IconRegistry.define([tylIconDelete]);

const component = 'forge-multi-select-header';

const meta = {
  tags: ['hidden'],
  title: 'Components/Multi Select Header/Basic Implementation',
  render: () => {
    return html`
      <forge-multi-select-header text="3 items selected">
        <forge-icon-button slot="actions" aria-label="Delete selected">
          <forge-icon name="delete"></forge-icon>
        </forge-icon-button>
      </forge-multi-select-header>
    `;
  },
  component
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
