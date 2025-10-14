import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';
import { IconRegistry } from '@tylertech/forge';
import {
  tylIconMenu,
  tylIconSettings,
  tylIconPerson,
  tylIconDashboard,
  tylIconAnalytics,
  tylIconNotifications,
  tylIconChat,
  tylIconAdd,
  tylIconSparkles
} from '@tylertech/tyler-icons';

import '$lib/ai/ai-sidebar-chat';
import '$lib/ai/ai-prompt';
import '$lib/ai/ai-dropdown-menu';
import '$lib/ai/ai-dropdown-menu/ai-dropdown-menu-item';
import '$lib/ai/ai-voice-input';
import '$lib/ai/ai-user-message';
import '$lib/ai/ai-response-message';
import '$lib/ai/ai-suggestions';
import '$lib/ai/ai-button';
import { Suggestion } from '$lib/ai/ai-suggestions';
import type { AiVoiceInputResultEvent } from '$lib/ai/ai-voice-input';

import {
  defineScaffoldComponent,
  defineAppBarComponent,
  defineCardComponent,
  defineToolbarComponent,
  defineIconComponent,
  defineIconButtonComponent
} from '@tylertech/forge';

// Define Forge components
defineScaffoldComponent();
defineAppBarComponent();
defineCardComponent();
defineToolbarComponent();
defineIconComponent();
defineIconButtonComponent();

// Register icons
IconRegistry.define([
  tylIconMenu,
  tylIconSettings,
  tylIconPerson,
  tylIconDashboard,
  tylIconAnalytics,
  tylIconNotifications,
  tylIconChat,
  tylIconAdd,
  tylIconSparkles
]);

const createPrompt = () => {
  const handleVoiceInput = (event: CustomEvent<AiVoiceInputResultEvent>) => {
    const prompt = document.querySelector('forge-ai-prompt') as any;
    if (prompt) {
      prompt.value = event.detail.transcript;
    }
  };

  return html`
    <forge-ai-prompt slot="prompt">
      <forge-ai-dropdown-menu variant="icon-button" selection-mode="none" slot="actions">
        <span slot="trigger-content">
          <forge-icon-button>
            <forge-icon name="add" external></forge-icon>
          </forge-icon-button>
        </span>
        <forge-ai-dropdown-menu-item value="add-image">
          <span>Add image</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="add-pdf">
          <span>Add PDF</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="add-spreadsheet">
          <span>Add spreadsheet</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
      <forge-ai-voice-input slot="actions" @forge-ai-voice-input-result=${handleVoiceInput}></forge-ai-voice-input>
    </forge-ai-prompt>
  `;
};

const component = 'forge-ai-sidebar-chat';

const meta = {
  title: 'AI/Form Factors/Sidebar',
  component,
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controls whether the sidebar chat is open'
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Controls whether the chat is displayed in an expanded modal state'
    }
  },
  args: {
    open: true,
    expanded: false
  },
  render: args => {
    const handleOpen = action('forge-ai-sidebar-chat-open');
    const handleClose = action('forge-ai-sidebar-chat-close');
    const handleExpand = action('forge-ai-sidebar-chat-expand');
    const handleCollapse = action('forge-ai-sidebar-chat-collapse');

    const sidebarChat = html`
      <forge-ai-sidebar-chat
        ?open=${args.open}
        ?expanded=${args.expanded}
        @forge-ai-sidebar-chat-open=${handleOpen}
        @forge-ai-sidebar-chat-close=${handleClose}
        @forge-ai-sidebar-chat-expand=${handleExpand}
        @forge-ai-sidebar-chat-collapse=${handleCollapse}>
        <forge-ai-user-message>
          Hello! Can you help me understand the analytics data I'm seeing in my dashboard?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand your analytics data! I can see you're looking at your dashboard with
          various metrics and activity reports. What specific aspects would you like me to explain? I can help with: -
          Interpreting trends and patterns - Explaining key performance indicators - Suggesting areas for improvement -
          Answering questions about specific data points
        </forge-ai-response-message>
        <forge-ai-user-message> What should I focus on first when reviewing my dashboard? </forge-ai-user-message>
        <forge-ai-response-message>
          Great question! Here's a recommended approach for dashboard review: 1. **Start with key metrics** - Look at
          your primary KPIs first 2. **Check for anomalies** - Notice any unusual spikes or drops 3. **Review time
          trends** - Compare current data to historical patterns 4. **Identify opportunities** - Look for areas showing
          positive growth 5. **Address concerns** - Investigate any declining metrics Would you like me to walk through
          any of these areas with your current data?
        </forge-ai-response-message>
        ${createPrompt()}
      </forge-ai-sidebar-chat>
    `;

    return html`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat Demo"></forge-app-bar>

        <forge-toolbar slot="body-header">
          <h2 class="forge-typography--heading4">Page Title</h2>
          <forge-ai-button
            slot="end"
            @click=${() => {
              const sidebar = document.querySelector('forge-ai-sidebar-chat');
              sidebar?.toggle();
            }}
            >Ask AI Assistant</forge-ai-button
          >
        </forge-toolbar>

        <main slot="body" style="padding: 24px;">
          <forge-card>
            <p>Demo of the AI Sidebar Chat component within a typical application layout.</p>
            <p>This is a structured form factor component that combines ai-sidebar and ai-chat-interface.</p>
            <p>The sidebar chat automatically handles composition and includes a minimize button in the header.</p>
          </forge-card>
        </main>

        ${args.position === 'left'
          ? html`<div slot="body-left">${sidebarChat}</div>`
          : html`<div slot="body-right">${sidebarChat}</div>`}
      </forge-scaffold>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};

export const WithSuggestions: Story = {
  render: args => {
    const handleOpen = action('forge-ai-sidebar-chat-open');
    const handleClose = action('forge-ai-sidebar-chat-close');
    const handleExpand = action('forge-ai-sidebar-chat-expand');
    const handleCollapse = action('forge-ai-sidebar-chat-collapse');

    const suggestions = [
      { text: 'Show me key performance indicators', value: 'kpi' },
      { text: 'Analyze user engagement trends', value: 'engagement' },
      { text: 'Compare this month to last month', value: 'comparison' },
      { text: 'Identify areas for improvement', value: 'improvement' },
      { text: 'Generate a summary report', value: 'report' }
    ] as Suggestion[];

    const sidebarChat = html`
      <forge-ai-sidebar-chat
        ?open=${args.open}
        ?expanded=${args.expanded}
        @forge-ai-sidebar-chat-open=${handleOpen}
        @forge-ai-sidebar-chat-close=${handleClose}
        @forge-ai-sidebar-chat-expand=${handleExpand}
        @forge-ai-sidebar-chat-collapse=${handleCollapse}>
        <forge-ai-user-message>
          Hello! Can you help me understand the analytics data I'm seeing in my dashboard?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand your analytics data! I can see you're looking at your dashboard with
          various metrics and activity reports. What specific aspects would you like me to explain?
        </forge-ai-response-message>
        <forge-ai-suggestions slot="suggestions" .suggestions=${suggestions}></forge-ai-suggestions>
        ${createPrompt()}
      </forge-ai-sidebar-chat>
    `;

    return html`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat with Suggestions"></forge-app-bar>

        <forge-toolbar slot="body-header">
          <h2 class="forge-typography--heading4">Dashboard Analytics</h2>
          <forge-ai-button
            slot="end"
            @click=${() => {
              const sidebar = document.querySelector('forge-ai-sidebar-chat');
              sidebar?.toggle();
            }}
            >Ask AI Assistant</forge-ai-button
          >
        </forge-toolbar>

        <main slot="body" style="padding: 24px;">
          <forge-card>
            <p>This demo shows the sidebar chat with AI suggestions for dashboard analytics.</p>
            <p>The suggestions provide quick options for common analytics questions.</p>
          </forge-card>
        </main>

        ${args.position === 'left'
          ? html`<div slot="body-left">${sidebarChat}</div>`
          : html`<div slot="body-right">${sidebarChat}</div>`}
      </forge-scaffold>
    `;
  }
};
