import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import { BusyIndicatorComponent } from '$lib/busy-indicator';
import '$lib/busy-indicator';

const component = 'forge-busy-indicator';

const meta = {
  title: 'Components/Busy Indicator',
  component,
  render: args => {
    const busyIndicatorRef = createRef<BusyIndicatorComponent>();

    function handleClick() {
      busyIndicatorRef.value!.open = true;
      setTimeout(() => (busyIndicatorRef.value!.open = false), 3000);
    }

    return html`
      <forge-button variant="raised" @click=${handleClick}>Show Busy Indicator</forge-button>
      <forge-busy-indicator
        ${ref(busyIndicatorRef)}
        ?open=${args.open}
        .titleText="${args.titleText}"
        .message=${args.message}
        .cancelable=${args.cancelable}
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
    titleText: '',
    message: 'Please wait while we load your data...',
    cancelable: false,
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

export const Demo: Story = {};
