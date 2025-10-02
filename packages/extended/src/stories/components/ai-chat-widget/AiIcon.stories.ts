import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-chat-widget/ai-icon';
import { AiIconVariant } from '$lib/ai-chat-widget/ai-icon';

const component = 'forge-ai-icon';

const meta = {
  title: 'AI/AI Icon',
  component,
  argTypes: {
    variant: {
      control: 'select',
      options: ['no-border', 'border'] as AiIconVariant[],
      description: 'Variant for the icon display style'
    }
  },
  args: {
    variant: 'no-border'
  },
  render: (args: any) => {
    return html`<forge-ai-icon variant=${args.variant}></forge-ai-icon>`;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
