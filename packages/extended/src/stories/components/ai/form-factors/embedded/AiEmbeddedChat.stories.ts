import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai/ai-embedded-chat';
import '$lib/ai/ai-user-message';
import '$lib/ai/ai-response-message';
import '$lib/ai/ai-suggestions';

const component = 'forge-ai-embedded-chat';

const meta = {
  title: 'AI/Form Factors/Embedded',
  component,
  argTypes: {
    expanded: {
      control: { type: 'boolean' },
      description: 'Controls whether the modal view is open when expanded'
    },
    gradientVariant: {
      control: { type: 'select' },
      options: ['low', 'medium', 'high'],
      description: 'Controls the gradient variant applied to the container'
    }
  },
  args: {
    expanded: false,
    gradientVariant: 'medium'
  },
  render: args => {
    return html`
      <forge-ai-embedded-chat
        ?expanded=${args.expanded}
        gradient-variant=${args.gradientVariant}
        @forge-ai-embedded-chat-expand=${action('expand')}
        @forge-ai-embedded-chat-collapse=${action('collapse')}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
      </forge-ai-embedded-chat>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
