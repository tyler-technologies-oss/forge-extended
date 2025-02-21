import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '$lib/responsive-toolbar';

const component = 'forge-responsive-toolbar';

const meta = {
  title: 'Components/Responsive Toolbar',
  render: args => {
    return html`<forge-responsive-toolbar></forge-responsive-toolbar>`;
  },
  component,
  argTypes: {},
  args: {}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
