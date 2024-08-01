import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '$lib/quantity-field/quantity-field';

const component = 'forge-quantity-field';

const meta = {
  title: 'Components/Quantity Field',
  component,
  render: args => {
    return html`
      <forge-quantity-field .invalid=${args.invalid} .required=${args.required}>
        <label slot="label" for="quantity">Quantity</label>
        <input id="quantity" type="number" value="1" aria-label="Set a quantity" step="2" />
        <span slot="support-text">Enter a quantity</span>
      </forge-quantity-field>
    `;
  },
  argTypes: {
    invalid: { control: 'boolean' },
    required: { control: 'boolean' }
  },
  args: {
    invalid: false,
    required: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
