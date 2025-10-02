import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-chat-widget/ai-empty-state';

const component = 'forge-ai-empty-state';

const meta = {
  title: 'AI/AI Empty State',
  component,
  render: () => {
    return html`<forge-ai-empty-state></forge-ai-empty-state>`;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
