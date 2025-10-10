import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/ai/ai-chat-header';
import { defineCardComponent, defineIconButtonComponent } from '@tylertech/forge';

const component = 'forge-ai-chat-header';

defineCardComponent();
defineIconButtonComponent();

const meta = {
  title: 'AI/Primitives/Chat Header',
  component,
  argTypes: {
    title: {
      control: 'text',
      description: 'The title text to display in the header'
    }
  },
  args: {
    title: 'AI Assistant'
  },
  render: (args: any) => {
    return html`<forge-ai-chat-header .title=${args.title}></forge-ai-chat-header>`;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithCustomTitle: Story = {
  args: {
    title: 'My Custom AI Bot'
  }
};

export const WithHeaderActions: Story = {
  render: (args: any) => {
    return html`
      <forge-ai-chat-header .title=${args.title}>
        <forge-icon-button slot="header-actions" aria-label="Switch to full screen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5 5h5v2H7v3H5zm9 0h5v5h-2V7h-3zm3 9h2v5h-5v-2h3zm-7 3v2H5v-5h2v3z" />
          </svg>
        </forge-icon-button>
        <forge-icon-button slot="header-actions" aria-label="Minimize chat window">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M6 19h12v2H6z" />
          </svg>
        </forge-icon-button>
      </forge-ai-chat-header>
    `;
  }
};

export const InCard: Story = {
  render: (args: any) => {
    return html`
      <forge-card no-padding raised>
        <forge-ai-chat-header .title=${args.title}></forge-ai-chat-header>
      </forge-card>
    `;
  }
};

export const InCardWithActions: Story = {
  args: {
    title: 'Support Assistant'
  },
  render: (args: any) => {
    return html`
      <forge-card no-padding raised>
        <forge-ai-chat-header .title=${args.title}>
          <forge-icon-button slot="header-actions" aria-label="Close chat">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </forge-icon-button>
        </forge-ai-chat-header>
      </forge-card>
    `;
  }
};
