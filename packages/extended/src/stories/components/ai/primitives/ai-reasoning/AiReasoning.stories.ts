import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai/ai-reasoning';
import '$lib/ai/ai-reasoning/reasoning-content';

const component = 'forge-ai-reasoning';

const meta = {
  title: 'AI/Primitives/Reasoning',
  component,
  render: () => {
    const reasoningSteps = [
      'Based on the provided information, I can reason through this step by step:',
      'Observation: The user is asking about a complex technical problem.',
      'Analysis: Multiple factors need to be considered including performance, scalability, and maintainability.',
      'Evaluation: The proposed solution addresses the core requirements while maintaining code quality.',
      'Conclusion: This approach provides the best balance of functionality and maintainability. Therefore, I recommend proceeding with the suggested implementation.'
    ];

    // Create container element to manage dynamic content
    setTimeout(() => {
      const container = document.querySelector('forge-ai-reasoning');
      if (!container) return;

      // Clear existing content
      container.innerHTML = '';

      // Add each reasoning step with delay
      reasoningSteps.forEach((step, index) => {
        setTimeout(() => {
          const reasoningContent = document.createElement('forge-ai-reasoning-content');
          reasoningContent.textContent = step;
          container.appendChild(reasoningContent);
        }, index * 1000); // 2 second delay between each step
      });
    }, 100);

    return html`
      <forge-ai-reasoning>
        <!-- Content will be dynamically added -->
      </forge-ai-reasoning>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
