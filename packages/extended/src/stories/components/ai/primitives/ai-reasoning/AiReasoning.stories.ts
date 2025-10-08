import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai/ai-reasoning';
import '$lib/ai/ai-reasoning/reasoning-content';
import '$lib/ai/ai-reasoning-header';

const component = 'forge-ai-reasoning';

const meta = {
  title: 'AI/Primitives/Reasoning',
  component,
  argTypes: {
    expanded: {
      control: 'boolean',
      description: 'Whether the reasoning is expanded'
    },
    reasoning: {
      control: 'boolean',
      description: 'Whether this is a reasoning component'
    },
    title: {
      control: 'text',
      description: 'Title for the reasoning section'
    }
  },
  args: {
    expanded: true,
    title: 'AI Reasoning Process',
    reasoningTitle: 'Thinking...'
  },
  render: (args: any) => {
    const reasoningSteps = [
      'Based on the provided information, I can reason through this step by step:',
      'Observation: The user is asking about a complex technical problem.',
      'Analysis: Multiple factors need to be considered including performance, scalability, and maintainability.',
      'Evaluation: The proposed solution addresses the core requirements while maintaining code quality.',
      'Conclusion: This approach provides the best balance of functionality and maintainability. Therefore, I recommend proceeding with the suggested implementation.'
    ];

    const template = html`
      <forge-ai-reasoning .expanded=${args.expanded} id="reasoning-container">
        <forge-ai-reasoning-header slot="header" .expanded=${args.expanded} .reasoning=${args.reasoning}>
          <span slot="reasoning-title">${args.reasoningTitle}</span>
          <span slot="title">${args.title}</span>
        </forge-ai-reasoning-header>
      </forge-ai-reasoning>
    `;

    // Add the reasoning steps dynamically with delays
    setTimeout(() => {
      const container = document.getElementById('reasoning-container');
      const header = container?.querySelector('forge-ai-reasoning-header');

      if (container && header) {
        reasoningSteps.forEach((stepText, index) => {
          setTimeout(() => {
            // Set reasoning to true when first item starts processing
            if (index === 0) {
              (header as any).reasoning = true;
            }

            const contentElement = document.createElement('forge-ai-reasoning-content');
            contentElement.textContent = stepText;
            container.appendChild(contentElement);

            // Set reasoning to false when last item finishes processing
            if (index === reasoningSteps.length - 1) {
              // Wait for the typing animation to complete before setting to false
              setTimeout(
                () => {
                  (header as any).reasoning = false;
                },
                stepText.length * 10 + 500
              ); // Approximate typing duration + buffer
            }
          }, index * 2000); // 2 second delay between each step
        });
      }
    }, 100);

    return template;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
