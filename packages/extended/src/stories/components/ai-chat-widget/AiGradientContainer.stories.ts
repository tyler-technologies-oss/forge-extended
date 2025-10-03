import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-chat-widget/ai-gradient-container';
import { AiGradientContainerVariant } from '$lib/ai-chat-widget/ai-gradient-container';

const component = 'forge-ai-gradient-container';

const meta = {
  title: 'AI/AI Gradient Container',
  component,
  argTypes: {
    variant: {
      control: 'select',
      options: ['low', 'medium', 'high', 'disabled'] as AiGradientContainerVariant[],
      description: 'Gradient intensity variant'
    }
  },
  args: {
    variant: 'medium'
  },
  render: (args: any) => {
    return html`<forge-ai-gradient-container variant=${args.variant}>
      <div style="width: 150px; height: 150px; padding: 16px;">This is inside the gradient container</div>
    </forge-ai-gradient-container>`;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
