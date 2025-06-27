import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '$lib/theme-toggle/theme-toggle';

const component = 'forge-theme-toggle';

const meta = {
  title: 'Components/User Profile/Theme Toggle',
  render: args => {
    return html` <forge-theme-toggle></forge-theme-toggle> `;
  },
  component
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
