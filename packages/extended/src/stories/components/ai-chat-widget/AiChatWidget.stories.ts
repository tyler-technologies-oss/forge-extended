import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-chat-widget';

const component = 'forge-ai-chat-widget';

const meta = {
  title: 'AI/AI Chat Widget',
  component,
  render: () => {
    return html` <forge-ai-chat-widget></forge-ai-chat-widget> `;
  },
  args: {}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
