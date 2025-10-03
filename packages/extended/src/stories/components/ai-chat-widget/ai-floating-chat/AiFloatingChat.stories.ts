import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-chat-widget/ai-floating-chat';
import '$lib/ai-chat-widget/ai-user-message';
import '$lib/ai-chat-widget/ai-response-message';
import '$lib/ai-chat-widget/ai-fab-button';

const component = 'forge-ai-floating-chat';

const meta = {
  title: 'AI/AI Floating Chat',
  component,
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controls whether the chat is open'
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Controls whether the chat is displayed in an expanded state'
    }
  },
  args: {
    open: false,
    expanded: false
  },
  render: args => {
    const chat = html`
      <forge-ai-floating-chat ?open=${args.open} ?expanded=${args.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
      </forge-ai-floating-chat>
    `;

    const fabButton = html`
      <forge-ai-fab-button
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${() => {
          const chatEl = document.querySelector('forge-ai-floating-chat');
          chatEl?.show();
        }}>
      </forge-ai-fab-button>
    `;

    return html`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat Demo (Form Factor Component)</h2>
          <p>Click the FAB in the bottom right corner to open the AI chat.</p>
          <p>This demo shows the structured form factor component that handles composition automatically.</p>
        </div>
        ${fabButton} ${chat}
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithSuggestions: Story = {
  render: args => {
    const chat = html`
      <forge-ai-floating-chat ?open=${args.open} ?expanded=${args.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>

        <!-- Example of slotting suggestions - this would be an actual ai-suggestions component -->
        <div slot="suggestions" style="padding: 16px; background: #f5f5f5; border-radius: 8px; margin: 8px;">
          <strong>Suggested follow-ups:</strong>
          <ul>
            <li>Can you show me an example?</li>
            <li>How do I use generics with interfaces?</li>
            <li>What are the benefits of generics?</li>
          </ul>
        </div>
      </forge-ai-floating-chat>
    `;

    const fabButton = html`
      <forge-ai-fab-button
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${() => {
          const chatEl = document.querySelector('forge-ai-floating-chat');
          chatEl?.show();
        }}>
      </forge-ai-fab-button>
    `;

    return html`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Suggestions</h2>
          <p>This example shows how to slot in suggestions to the chat interface.</p>
        </div>
        ${fabButton} ${chat}
      </div>
    `;
  }
};
