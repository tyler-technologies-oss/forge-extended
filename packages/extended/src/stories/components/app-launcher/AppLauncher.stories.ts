import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '$lib/app-launcher';

const component = 'forge-app-launcher';

const meta = {
  title: 'Components/App Launcher',
  render: args => {
    return html`<forge-app-launcher></forge-app-launcher>`;
  },
  component,
  argTypes: {},
  args: {}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
