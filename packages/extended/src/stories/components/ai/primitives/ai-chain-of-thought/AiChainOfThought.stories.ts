import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai/chain-of-thought';
import '$lib/ai/chain-of-thought/thought-search-result/thought-search-result';
import '$lib/ai/chain-of-thought/thought-image/thought-image';
import '$lib/ai/chain-of-thought/thought-detail/thought-detail';
import '$lib/ai/ai-chat-interface';
import '$lib/ai/ai-gradient-container';
import '$lib/ai/ai-user-message';
import '$lib/ai/ai-response-message';

const component = 'forge-ai-chain-of-thought';

const snowboardingSources = [
  { title: 'Powder Safety Guide', href: 'https://example.com/safety-guide' },
  { title: 'Equipment Reviews 2024', href: 'https://example.com/equipment-reviews' }
];

const meta = {
  title: 'AI/Primitives/Chain of Thought',
  component,
  tags: ['autodocs'],
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
      <forge-ai-chain-of-thought .expanded=${args.expanded} .title=${args.title}>
        <forge-ai-thought-search-result .sources=${snowboardingSources}>
          <span slot="title">Searching for snowboarding information</span>
          Found 2 relevant articles about advanced snowboarding techniques and safety tips for experienced riders.
        </forge-ai-thought-search-result>

        <forge-ai-thought-image>
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
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const InChatInterface: Story = {
  render: () => {
    return html`
      <forge-ai-gradient-container style="height: 800px; width: 100%;">
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Can you analyze this snowboarding image and tell me about the technique being used?
          </forge-ai-user-message>

          <forge-ai-response-message>
            <p>I'll analyze the snowboarding image for you. Let me break down my thought process:</p>

            <forge-ai-chain-of-thought title="Analyzing Snowboarding Technique">
              <forge-ai-thought-search-result .sources=${snowboardingSources}>
                <span slot="title">Searching for snowboarding information</span>
                Found 2 relevant articles about advanced snowboarding techniques and safety tips for experienced riders.
              </forge-ai-thought-search-result>

              <forge-ai-thought-image>
                <span slot="title">Analyzing the snowboarder's technique</span>
                <img
                  src="https://images.unsplash.com/photo-1495469552678-d0fb77903866?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  slot="image" />
              </forge-ai-thought-image>

              <forge-ai-thought-detail>
                <span slot="title">Assessment and conclusion</span>
                Based on the image analysis and research, this snowboarder demonstrates excellent form with proper edge
                control, balanced stance, and appropriate speed for the terrain. The powder conditions appear ideal for
                this type of riding.
              </forge-ai-thought-detail>
            </forge-ai-chain-of-thought>

            <p>
              The snowboarder in this image shows excellent technique for powder riding. Their balanced stance and
              controlled descent indicate advanced skill level, making the most of these ideal snow conditions.
            </p>
          </forge-ai-response-message>
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    `;
  }
};
