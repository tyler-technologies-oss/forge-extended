import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-chat-widget/ai-icon';

const component = 'forge-ai-icon';

const meta = {
  title: 'AI/AI Icon',
  component,
  argTypes: {
    noBorder: {
      control: 'boolean',
      description: 'Whether to display the icon without a border'
    }
  },
  args: {
    noBorder: false
  },
  render: (args: any) => {
    return html`<forge-ai-icon ?no-border=${args.noBorder}></forge-ai-icon>`;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
