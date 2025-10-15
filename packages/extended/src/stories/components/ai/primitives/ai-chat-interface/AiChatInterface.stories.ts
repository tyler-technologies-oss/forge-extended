import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai/ai-chat-interface';
import '$lib/ai/ai-prompt';
import '$lib/ai/ai-prompt/prompt-button';
import '$lib/ai/ai-dropdown-menu';
import '$lib/ai/ai-dropdown-menu/ai-dropdown-menu-item';
import '$lib/ai/ai-voice-input';
import '$lib/ai/ai-user-message';
import '$lib/ai/ai-response-message';
import '$lib/ai/ai-suggestions';
import '$lib/ai/ai-gradient-container';
import '$lib/ai/ai-empty-state';
import { Suggestion } from '$lib/ai/ai-suggestions';
import type { AiVoiceInputResultEvent } from '$lib/ai/ai-voice-input';
import { defineCardComponent, defineIconComponent, defineIconButtonComponent, IconRegistry } from '@tylertech/forge';
import { tylIconAdd, tylIconArrowDropDown, tylIconSparkles, tylIconWebAlt } from '@tylertech/tyler-icons';

const component = 'forge-ai-chat-interface';

defineCardComponent();
defineIconComponent();
defineIconButtonComponent();
IconRegistry.define([tylIconAdd, tylIconArrowDropDown, tylIconSparkles, tylIconWebAlt]);

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
            <forge-icon name="add"></forge-icon>
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
      <forge-prompt-button slot="actions">
        <forge-icon name="web_alt" slot="leading"></forge-icon>
        Web search
      </forge-prompt-button>
      <forge-ai-dropdown-menu variant="button" selection-mode="single" slot="actions">
        <span slot="trigger-content">GPT-4</span>
        <forge-icon name="arrow_drop_down" slot="end"></forge-icon>

        <forge-ai-dropdown-menu-item value="gpt-4">
          <span>GPT-4</span>
        </forge-ai-dropdown-menu-item>

        <forge-ai-dropdown-menu-item value="gpt-3.5">
          <span>GPT-3.5</span>
        </forge-ai-dropdown-menu-item>

        <forge-ai-dropdown-menu-item value="claude-3">
          <span>Claude-3</span>
        </forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
    </forge-ai-prompt>
  `;
};

const meta = {
  title: 'AI/Primitives/Chat Interface',
  component,
  render: () => {
    return html` <forge-ai-chat-interface> ${createPrompt()} </forge-ai-chat-interface> `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithEmptyState: Story = {
  render: () => {
    const suggestions = [
      { text: 'Help me write an email', value: 'email' },
      { text: 'Create a presentation', value: 'presentation' },
      { text: 'Write some code', value: 'code' },
      { text: 'Plan a meeting', value: 'meeting' },
      { text: 'Summarize a document', value: 'summarize' }
    ] as Suggestion[];

    return html`
      <forge-ai-gradient-container>
        <forge-ai-chat-interface>
          <forge-ai-empty-state>
            <forge-ai-suggestions slot="actions" variant="block" .suggestions=${suggestions}> </forge-ai-suggestions>
          </forge-ai-empty-state>
          ${createPrompt()}
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    `;
  }
};

export const WithMessages: Story = {
  render: () => {
    return html`
      <forge-ai-chat-interface>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
        <forge-ai-response-message>
          Sure! Here's a simple example of a generic function: This function works with any type T, providing type
          safety while being reusable.
        </forge-ai-response-message>
        ${createPrompt()}
      </forge-ai-chat-interface>
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
      <forge-ai-chat-interface>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
        <forge-ai-response-message>
          Sure! Here's a simple example of a generic function: This function works with any type T, providing type
          safety while being reusable.
        </forge-ai-response-message>
        <forge-ai-suggestions slot="suggestions" .suggestions=${suggestions}></forge-ai-suggestions>
        ${createPrompt()}
      </forge-ai-chat-interface>
    `;
  }
};

export const WithGradientBorderComponent: Story = {
  render: () => {
    const suggestions = [
      { text: 'Help me write an email', value: 'email' },
      { text: 'Create a presentation', value: 'presentation' },
      { text: 'Write some code', value: 'code' },
      { text: 'Plan a meeting', value: 'meeting' },
      { text: 'Summarize a document', value: 'summarize' }
    ] as Suggestion[];

    return html`
      <forge-ai-gradient-container>
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
          ${createPrompt()}
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    `;
  }
};
