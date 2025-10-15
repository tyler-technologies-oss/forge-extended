import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai/ai-prompt';
import '$lib/ai/ai-prompt/prompt-button';
import '$lib/ai/ai-dropdown-menu';
import '$lib/ai/ai-dropdown-menu/ai-dropdown-menu-item';
import '$lib/ai/ai-voice-input';
import { AiPromptVariant } from '$lib/ai/ai-prompt';
import type { AiVoiceInputResultEvent } from '$lib/ai/ai-voice-input';
import { defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconAdd, tylIconArrowDropDown, tylIconChevronDown, tylIconWebAlt } from '@tylertech/tyler-icons';

defineIconComponent();

IconRegistry.define([tylIconChevronDown, tylIconWebAlt, tylIconArrowDropDown, tylIconAdd]);

const component = 'forge-ai-prompt';

const meta = {
  title: 'AI/Primitives/Prompt',
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

    const handleVoiceInput = (event: CustomEvent<AiVoiceInputResultEvent>) => {
      const prompt = document.querySelector('forge-ai-prompt') as any;
      if (prompt) {
        prompt.value = event.detail.transcript;
      }
    };

    return html`
      <forge-ai-prompt variant=${args.variant} placeholder=${args.placeholder} @forge-ai-prompt-send=${onSend}>
        <forge-ai-dropdown-menu variant="icon-button" selection-mode="none" slot="actions">
          <forge-icon name="add" slot="trigger-content"></forge-icon>

          <forge-ai-dropdown-menu-item value="gpt-4.1">
            <span>Add image</span>
            <!-- <span slot="description">More capable, advanced reasoning</span> -->
            <forge-icon name="sparkles" slot="start"></forge-icon>
          </forge-ai-dropdown-menu-item>

          <forge-ai-dropdown-menu-item value="gpt-4">
            <span>Add video</span>
            <!-- <span slot="description">Advanced reasoning capabilities</span> -->
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
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
