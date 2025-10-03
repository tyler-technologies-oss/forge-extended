import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-chat-widget/ai-threads';
import { defineCardComponent } from '@tylertech/forge';
import { Thread } from '$lib/ai-chat-widget/ai-threads';

defineCardComponent();

const sampleThreads: Thread[] = [
  { id: '1', title: 'Getting Started with AI' },
  { id: '2', title: 'Code Review Discussion' },
  { id: '3', title: 'Project Planning' },
  { id: '4', title: 'Bug Investigation' },
  { id: '5', title: 'Feature Development' }
];

const component = 'forge-ai-threads';

const meta = {
  title: 'AI/AI Threads',
  component,
  argTypes: {
    threads: {
      control: 'object',
      description: 'Array of threads to display in the navigation list'
    }
  },
  args: {
    threads: sampleThreads
  },
  render: (args: any) => {
    const onThreadSelect = action('forge-ai-threads-select');
    return html` <forge-card no-padding>
      <forge-ai-threads .threads=${args.threads} @forge-ai-threads-select=${onThreadSelect}></forge-ai-threads>
    </forge-card>`;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
