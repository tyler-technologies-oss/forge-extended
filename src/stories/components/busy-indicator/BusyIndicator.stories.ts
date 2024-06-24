import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import { BusyIndicatorElement } from '$lib/busy-indicator/busy-indicator';
import '$lib/busy-indicator/busy-indicator';

const component = 'forge-busy-indicator';

const meta = {
  title: 'Components/Busy Indicator',
  component,
  render: args => {
    const busyIndicatorRef = createRef<BusyIndicatorElement>();

    function handleClick() {
      busyIndicatorRef.value!.open = true;
    }

    return html`
      <forge-button variant="raised" @click=${handleClick}>Show Busy Indicator</forge-button>
      <forge-busy-indicator ${ref(busyIndicatorRef)} ?open=${args.open}></forge-busy-indicator>
    `;
  },
  argTypes: {
    open: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    open: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
