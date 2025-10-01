import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-chat-widget/ai-chat-interface';
import '$lib/ai-chat-widget/ai-user-message';
import '$lib/ai-chat-widget/ai-response-message';
import '$lib/ai-chat-widget/ai-suggestions';
import { Suggestion } from '$lib/ai-chat-widget/ai-suggestions';
import { defineCardComponent } from '@tylertech/forge';

const component = 'forge-ai-chat-interface';

defineCardComponent();

const meta = {
  title: 'AI/AI Chat Interface',
  component,
  render: () => {
    return html`<forge-ai-chat-interface></forge-ai-chat-interface>`;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const InCard: Story = {
  render: () => {
    return html`
      <forge-card no-padding raised>
        <forge-ai-chat-interface></forge-ai-chat-interface>
      </forge-card>
    `;
  }
};

export const WithMessages: Story = {
  render: () => {
    return html`
      <forge-card no-padding raised>
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
          <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
          <forge-ai-response-message>
            Sure! Here's a simple example of a generic function: This function works with any type T, providing type
            safety while being reusable.
          </forge-ai-response-message>
        </forge-ai-chat-interface>
      </forge-card>
    `;
  }
};

export const WithSuggestions: Story = {
  render: () => {
    const suggestions = [
      { text: 'Help me write an email', value: 'email' },
      { text: 'Create a presentation', value: 'presentation' },
      { text: 'Write some code', value: 'code' },
      { text: 'Plan a meeting', value: 'meeting' },
      { text: 'Summarize a document', value: 'summarize' }
    ] as Suggestion[];

    return html`
      <forge-card no-padding raised>
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
          <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
          <forge-ai-response-message>
            Sure! Here's a simple example of a generic function: This function works with any type T, providing type
            safety while being reusable.
          </forge-ai-response-message>
          <forge-ai-suggestions slot="suggestions" .suggestions=${suggestions}></forge-ai-suggestions>
        </forge-ai-chat-interface>
      </forge-card>
    `;
  }
};
