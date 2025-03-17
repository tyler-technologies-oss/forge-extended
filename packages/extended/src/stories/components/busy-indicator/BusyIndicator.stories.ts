import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';
import { BusyIndicatorComponent } from '$lib/busy-indicator';
import { standaloneStoryParams } from '../../utils';
import { storyStyles } from '../../decorators';
import { action } from '@storybook/addon-actions';

import '$lib/busy-indicator';

const component = 'forge-busy-indicator';
const cancelAction = action('forge-busy-indicator-cancel');

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
        @forge-busy-indicator-cancel=${cancelAction}
        .mode=${args.mode}
        .titleText="${args.titleText}"
        .message=${args.message}
        .cancelable=${args.cancelable}
        .variant=${args.variant}
        .determinate=${args.determinate}
        .progress=${args.progress}
        .buffer=${args.buffer}
        .transparent=${args.transparent}></forge-busy-indicator>
    `;
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['modal', 'inline']
    },
    variant: {
      control: 'select',
      options: ['spinner', 'progress', 'message-only']
    }
  },
  args: {
    mode: 'modal',
    titleText: '',
    message: 'Please wait while we load your data...',
    cancelable: false,
    variant: 'spinner',
    progress: 0.5,
    buffer: 1,
    determinate: false,
    transparent: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const Inline: Story = {
  ...standaloneStoryParams,
  decorators: [
    storyStyles(`
    .parent {
      position: relative;
      height: 300px;
      border: 1px solid var(--forge-theme-outline);
      border-radius: var(--forge-shape-large);
    }
  `)
  ],
  render: () => {
    return html`
      <div class="parent">
        <forge-busy-indicator
          open
          mode="inline"
          title-text="Loading"
          message="Please wait while we load your data..."></forge-busy-indicator>
      </div>
    `;
  }
};
