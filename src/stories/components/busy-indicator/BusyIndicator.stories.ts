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
      <forge-busy-indicator
        ${ref(busyIndicatorRef)}
        ?open=${args.open}
        .titleText="${args.titleText}"
        .message=${args.message}
        .cancel=${args.cancel}
        .spinner=${args.spinner}
        .progress=${args.progress}
        .progressBar=${args.progressBar}
        .progressBarDeterminate=${args.progressBarDeterminate}
        .buffer=${args.buffer}
        .direction=${args.direction}></forge-busy-indicator>
    `;
  },
  argTypes: {
    open: {
      control: {
        type: 'boolean'
      }
    },
    direction: {
      control: 'select',
      options: ['row', 'column']
    }
  },
  args: {
    open: false,
    titleText: 'Loading...',
    message: 'Please wait while we load your data',
    cancel: false,
    spinner: true,
    progressBar: false,
    progress: 0,
    buffer: 0,
    direction: 'column',
    progressBarDeterminate: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  args: {
    cancel: true
  }
};
