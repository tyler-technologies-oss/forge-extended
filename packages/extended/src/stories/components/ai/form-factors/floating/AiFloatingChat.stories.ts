import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai/ai-floating-chat';
import '$lib/ai/ai-prompt';
import '$lib/ai/ai-dropdown-menu';
import '$lib/ai/ai-dropdown-menu/ai-dropdown-menu-item';
import '$lib/ai/ai-voice-input';
import '$lib/ai/ai-user-message';
import '$lib/ai/ai-response-message';
import '$lib/ai/ai-fab';
import '$lib/ai/ai-suggestions';
import { Suggestion } from '$lib/ai/ai-suggestions';
import type { AiVoiceInputResultEvent } from '$lib/ai/ai-voice-input';
import { defineCardComponent, defineIconComponent, defineIconButtonComponent, IconRegistry } from '@tylertech/forge';
import { tylIconAdd, tylIconSparkles } from '@tylertech/tyler-icons';

const component = 'forge-ai-floating-chat';

defineCardComponent();
defineIconComponent();
defineIconButtonComponent();
IconRegistry.define([tylIconAdd, tylIconSparkles]);

const createPrompt = () => {
  const handleVoiceInput = (event: CustomEvent<AiVoiceInputResultEvent>) => {
    const prompt = document.querySelector('forge-ai-prompt') as any;
    if (prompt) {
      prompt.value = event.detail.transcript;
    }
  };

  return html`
    <forge-ai-prompt slot="prompt">
      <forge-ai-dropdown-menu variant="icon-button" selection-mode="none" slot="actions">
        <span slot="trigger-content">
          <forge-icon name="add" external></forge-icon>
        </span>
        <forge-ai-dropdown-menu-item value="add-image">
          <span>Add image</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="add-pdf">
          <span>Add PDF</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="add-spreadsheet">
          <span>Add spreadsheet</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
      <forge-ai-voice-input slot="actions" @forge-ai-voice-input-result=${handleVoiceInput}></forge-ai-voice-input>
    </forge-ai-prompt>
  `;
};

const meta = {
  title: 'AI/Form Factors/Floating',
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
        ${createPrompt()}
      </forge-ai-floating-chat>
    `;

    const fab = html`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${() => {
          const chatEl = document.querySelector('forge-ai-floating-chat');
          chatEl?.show();
        }}>
      </forge-ai-fab>
    `;

    return html`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat Demo (Form Factor Component)</h2>
          <p>Click the FAB in the bottom right corner to open the AI chat.</p>
          <p>This demo shows the structured form factor component that handles composition automatically.</p>
        </div>
        ${fab} ${chat}
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithSuggestions: Story = {
  render: args => {
    const suggestions = [
      { text: 'Can you show me an example?', value: 'example' },
      { text: 'How do I use generics with interfaces?', value: 'interfaces' },
      { text: 'What are the benefits of generics?', value: 'benefits' },
      { text: 'How do I constrain generic types?', value: 'constraints' }
    ] as Suggestion[];

    const chat = html`
      <forge-ai-floating-chat ?open=${args.open} ?expanded=${args.expanded}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>

        <forge-ai-suggestions
          slot="suggestions"
          .suggestions=${suggestions}
          @forge-ai-suggestions-select=${(event: CustomEvent) => {
            console.log('Selected suggestion:', event.detail);
          }}>
        </forge-ai-suggestions>
        ${createPrompt()}
      </forge-ai-floating-chat>
    `;

    const fab = html`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${() => {
          const chatEl = document.querySelector('forge-ai-floating-chat');
          chatEl?.show();
        }}>
      </forge-ai-fab>
    `;

    return html`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Suggestions</h2>
          <p>This example shows how to slot in suggestions to the chat interface.</p>
        </div>
        ${fab} ${chat}
      </div>
    `;
  }
};
