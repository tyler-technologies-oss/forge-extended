import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '$lib/ai-chat-widget/ai-threads';
import { defineCardComponent } from '@tylertech/forge';
import { Thread } from '$lib/ai-chat-widget/ai-threads';

defineCardComponent();

const sampleThreads: Thread[] = [
  { id: '1', title: 'Getting Started with AI', time: '2:30 PM', date: new Date('2024-01-15') },
  { id: '2', title: 'Code Review Discussion', time: '10:45 AM', date: new Date('2024-01-14') },
  { id: '3', title: 'Project Planning', time: '4:15 PM', date: new Date('2024-01-13') },
  { id: '4', title: 'Bug Investigation', time: '9:20 AM', date: new Date('2024-01-12') },
  { id: '5', title: 'Feature Development', time: '1:00 PM', date: new Date('2024-01-11') }
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

export const WithGradientContainer: Story = {
  render: () => {
    return html`
      <forge-ai-gradient-container>
        <forge-ai-threads .threads=${sampleThreads}></forge-ai-threads>
      </forge-ai-gradient-container>
    `;
  }
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
