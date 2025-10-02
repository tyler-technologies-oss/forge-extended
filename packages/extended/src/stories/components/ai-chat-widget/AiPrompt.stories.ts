import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-chat-widget/ai-prompt';

const component = 'forge-ai-prompt';

const meta = {
  title: 'AI/AI Prompt',
  component,
  render: () => {
    const onSend = action('forge-ai-prompt-send');
    return html` <forge-ai-prompt @forge-ai-prompt-send=${onSend}></forge-ai-prompt> `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithCustomPlaceholder: Story = {
  render: () => {
    const onSend = action('forge-ai-prompt-send');
    return html`
      <forge-ai-prompt placeholder="Type your message here..." @forge-ai-prompt-send=${onSend}> </forge-ai-prompt>
    `;
  }
};
