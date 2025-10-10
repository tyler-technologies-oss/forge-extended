import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineStackComponent } from '@tylertech/forge';

import '$lib/ai/ai-voice-input';
import type { AiVoiceInputResultEvent } from '$lib/ai/ai-voice-input';

defineStackComponent();

const component = 'forge-ai-voice-input';

const meta = {
  title: 'AI/Primitives/Voice Input',
  component,
  render: () => {
    const handleResult = (event: CustomEvent<AiVoiceInputResultEvent>) => {
      const resultDiv = document.getElementById('result');
      if (resultDiv) {
        resultDiv.textContent = `"${event.detail.transcript}" (confidence: ${Math.round(event.detail.confidence * 100)}%)`;
      }
    };

    return html`
      <forge-stack gap="24">
        <forge-ai-voice-input @forge-ai-voice-input-result=${handleResult}></forge-ai-voice-input>
        <div>Result: <span id="result">Click the microphone and speak...</span></div>
      </forge-stack>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
