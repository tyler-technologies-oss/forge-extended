import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai/ai-embedded-chat';
import '$lib/ai/ai-prompt';
import '$lib/ai/ai-dropdown-menu';
import '$lib/ai/ai-dropdown-menu/ai-dropdown-menu-item';
import '$lib/ai/ai-voice-input';
import '$lib/ai/ai-user-message';
import '$lib/ai/ai-response-message';
import '$lib/ai/ai-suggestions';
import type { AiVoiceInputResultEvent } from '$lib/ai/ai-voice-input';
import { Suggestion } from '$lib/ai/ai-suggestions';
import { defineCardComponent, defineIconComponent, defineIconButtonComponent, IconRegistry } from '@tylertech/forge';
import { tylIconAdd, tylIconSparkles } from '@tylertech/tyler-icons';

const component = 'forge-ai-embedded-chat';

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
          <forge-icon-button>
            <forge-icon name="add" external></forge-icon>
          </forge-icon-button>
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
        ${createPrompt()}
      </forge-ai-embedded-chat>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithSuggestions: Story = {
  render: args => {
    const suggestions = [
      { text: 'Help me write an email', value: 'email' },
      { text: 'Create a presentation', value: 'presentation' },
      { text: 'Write some code', value: 'code' },
      { text: 'Plan a meeting', value: 'meeting' },
      { text: 'Summarize a document', value: 'summarize' }
    ] as Suggestion[];

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
        <forge-ai-suggestions slot="suggestions" .suggestions=${suggestions}></forge-ai-suggestions>
        ${createPrompt()}
      </forge-ai-embedded-chat>
    `;
  }
};
