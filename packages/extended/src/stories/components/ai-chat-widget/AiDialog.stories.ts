import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai-chat-widget/ai-dialog';
import '$lib/ai-chat-widget/ai-chat-interface';
import '$lib/ai-chat-widget/ai-user-message';
import '$lib/ai-chat-widget/ai-response-message';
import '$lib/ai-chat-widget/ai-fab-button';

const component = 'forge-ai-dialog';

const meta = {
  title: 'AI/AI Dialog',
  component,
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controls whether the dialog is open'
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Controls whether the dialog is displayed in an expanded state'
    }
  },
  args: {
    open: false,
    expanded: false
  },
  render: args => {
    const dialog = html`
      <forge-ai-dialog ?open=${args.open} ?expanded=${args.expanded}>
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
        </forge-ai-chat-interface>
      </forge-ai-dialog>
    `;

    const fabButton = html`
      <forge-ai-fab-button
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${() => {
          const dialogEl = document.querySelector('forge-ai-dialog');
          dialogEl?.show();
        }}>
      </forge-ai-fab-button>
    `;

    return html`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Dialog Demo</h2>
          <p>Click the FAB in the bottom right corner to open the AI dialog.</p>
        </div>
        ${fabButton} ${dialog}
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
