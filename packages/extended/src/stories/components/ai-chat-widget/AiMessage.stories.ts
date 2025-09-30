import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-chat-widget/ai-message';

const component = 'forge-ai-message';

const meta = {
  title: 'AI/AI Message',
  component,
  render: args => {
    return html`<forge-ai-message .messageType=${args.messageType}>${args.content}</forge-ai-message>`;
  },
  argTypes: {
    messageType: {
      control: 'select',
      options: ['response', 'user'],
      description: 'The type of message: response or user'
    },
    content: {
      control: 'text',
      description: 'The message content'
    }
  },
  args: {
    messageType: 'response',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
