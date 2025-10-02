import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-chat-widget/ai-prompt';
import { AiPromptVariant } from '$lib/ai-chat-widget/ai-prompt';

const component = 'forge-ai-prompt';

const meta = {
  title: 'AI/AI Prompt',
  component,
  argTypes: {
    variant: {
      control: 'select',
      options: ['stacked', 'inline'] as AiPromptVariant[],
      description: 'Layout variant for the prompt component'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field'
    }
  },
  args: {
    variant: 'stacked',
    placeholder: 'Ask a question...'
  },
  render: (args: any) => {
    const onSend = action('forge-ai-prompt-send');
    return html`
      <forge-ai-prompt variant=${args.variant} placeholder=${args.placeholder} @forge-ai-prompt-send=${onSend}>
      </forge-ai-prompt>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
