import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-chat-widget/ai-icon';

const component = 'forge-ai-icon';

const meta = {
  title: 'AI/AI Icon',
  component,
  render: args => {
    return html` <forge-ai-icon></forge-ai-icon> `;
  },
  argTypes: {},
  args: {}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
