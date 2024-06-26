import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { IconRegistry } from '@tylertech/forge';
import { tylIconPlus, tylIconMinus } from '@tylertech/tyler-icons/extended';

import '$lib/quantity-field/quantity-field';

const component = 'forge-quantity-field';

IconRegistry.define([tylIconPlus, tylIconMinus]);

const meta = {
  title: 'Components/Quantity Field',
  component,
  render: args => {
    return html`
      <forge-quantity-field>
        <label slot="label" for="quantity">Quantity</label>
        <forge-icon-button aria-label="Decrement" slot="decrement-button">
          <forge-icon name="minus"></forge-icon>
        </forge-icon-button>
        <forge-text-field>
          <input id="quantity" type="number" value="1" aria-label="Set a quantity" />
        </forge-text-field>
        <forge-icon-button aria-label="Increment" slot="increment-button">
          <forge-icon name="plus"></forge-icon>
        </forge-icon-button>
        <p slot="support-text">Enter a quantity</p>
      </forge-quantity-field>
    `;
  },
  argTypes: {},
  args: {}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
