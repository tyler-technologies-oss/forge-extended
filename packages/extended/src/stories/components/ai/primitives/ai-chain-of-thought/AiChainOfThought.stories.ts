import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai/chain-of-thought';
import '$lib/ai/chain-of-thought/thought-search-result/thought-search-result';
import '$lib/ai/chain-of-thought/thought-image/thought-image';
import '$lib/ai/chain-of-thought/thought-detail/thought-detail';

const component = 'forge-ai-chain-of-thought';

const meta = {
  title: 'AI/Primitives/Chain of Thought',
  component,
  argTypes: {
    expanded: {
      control: 'boolean',
      description: 'Whether the chain of thought is expanded'
    },
    title: {
      control: 'text',
      description: 'Title for the chain of thought section'
    }
  },
  args: {
    expanded: false,
    title: 'Chain of Thought'
  },
  render: (args: any) => {
    return html`
      <forge-ai-chain-of-thought ?expanded=${args.expanded} title=${args.title}>
        <forge-thought-detail step="1" title="Sample Thought Process">
          This is a standalone thought detail component that can be used independently or within a chain of thought.
        </forge-thought-detail>
      </forge-ai-chain-of-thought>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const Expanded: Story = {
  args: {
    expanded: true
  }
};

export const MultipleThoughts: Story = {
  render: () => {
    const snowboardingSources = [
      { title: 'Powder Safety Guide', href: 'https://example.com/safety-guide' },
      { title: 'Equipment Reviews 2024', href: 'https://example.com/equipment-reviews' }
    ];

    return html`
      <forge-ai-chain-of-thought>
        <forge-ai-thought-search-result step="1" .sources=${snowboardingSources}>
          <span slot="title">Searching for snowboarding information</span>
          Found 3 relevant articles about advanced snowboarding techniques and safety tips for experienced riders.
        </forge-ai-thought-search-result>

        <forge-ai-thought-image step="2">
          <span slot="title">Analyzing the snowboarder's technique</span>
          <img
            src="https://images.unsplash.com/photo-1495469552678-d0fb77903866?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            slot="image" />
        </forge-ai-thought-image>

        <forge-ai-thought-detail>
          <span slot="title">Assessment and conclusion</span>
          Based on the image analysis and research, this snowboarder demonstrates excellent form with proper edge
          control, balanced stance, and appropriate speed for the terrain. The powder conditions appear ideal for this
          type of riding.
        </forge-ai-thought-detail>
      </forge-ai-chain-of-thought>
    `;
  }
};

export const ThoughtDetailComponent: Story = {
  render: () => {
    return html`
      <forge-ai-chain-of-thought>
        <forge-thought-detail step="1" title="Sample Thought Process">
          <span slot="title">This guy is really good at snowboarding</span>
          This is a standalone thought detail component that can be used independently or within a chain of thought.
        </forge-thought-detail>
      </forge-ai-chain-of-thought>
    `;
  }
};
