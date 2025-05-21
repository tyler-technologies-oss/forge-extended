import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '$lib/theme-toggle';

const component = 'forge-theme-toggle';

const meta = {
  title: 'Components/Theme Toggle',
  render: args => {
    return html`<forge-theme-toggle></forge-theme-toggle>`;
  },
  component,
  argTypes: {},
  args: {}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
