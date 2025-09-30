import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-chat-widget/ai-button';

const component = 'forge-ai-button';
const clickAction = action('click');

const meta = {
  title: 'AI/AI Button',
  component,
  render: args => {
    return html`
      <forge-ai-button .variant=${args.variant} .disabled=${args.disabled} .type=${args.type} @click=${clickAction}>
        ${args.content}
      </forge-ai-button>
    `;
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['raised', 'outlined', 'tonal', 'text'],
      description: 'The visual style variant of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The button type for form interactions'
    },
    content: {
      control: 'text',
      description: 'The text content of the button'
    }
  },
  args: {
    variant: 'raised',
    disabled: false,
    type: 'button',
    content: 'AI Assistant'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
