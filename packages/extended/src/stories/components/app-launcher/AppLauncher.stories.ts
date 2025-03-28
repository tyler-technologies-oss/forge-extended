import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '$lib/app-launcher';

const component = 'forge-app-launcher';

const meta = {
  title: 'Components/App Launcher',
  render: args => {
    return html`
      <forge-card no-padding>
        <forge-toolbar no-border>
          <forge-app-launcher slot="end"></forge-app-launcher>
        </forge-toolbar>
      </forge-card>
    `;
  },
  component,
  argTypes: {},
  args: {}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
