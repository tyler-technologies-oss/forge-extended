import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import '$lib/ai-wrapper/ai-wrapper';
import '$lib/ai-wrapper/ai-button';
import { AiWrapperElement } from '$lib/ai-wrapper/ai-wrapper';
import { AiButtonElement } from '$lib/ai-wrapper';

const component = 'forge-ai-wrapper';

const meta = {
  title: 'Components/AI Wrapper',
  component,

  render: args => {
    const aiWrapperRef = createRef<AiWrapperElement>();
    const aiButtonRef = createRef<AiButtonElement>();
    const skeleton = html` <div style="width: 100%; height: 32px; background-color: lightgray; opacity: .5"></div> `;

    return html`
      <style>
        body {
          padding: 0 !important;
        }
      </style>
      <forge-scaffold style="height: 500px;">
        <forge-app-bar title-text="Tyler Forge" slot="header">
          <forge-icon slot="logo" name="forge_logo" external external-type="custom"></forge-icon>
          <forge-ai-button slot="end" ${ref(aiButtonRef)} dialog-trigger-id="forge-ai-open-dialog"></forge-ai-button>
        </forge-app-bar>
        <div slot="body" style="padding-block: 24px; display: grid; gap: 16px; grid-row: auto;">
          ${skeleton} ${skeleton} ${skeleton}
        </div>
      </forge-scaffold>

      <forge-ai-wrapper ${ref(aiWrapperRef)} .open=${args.open} id="forge-ai-open-dialog">
        <span slot="tooltip-text">${args.tooltipText}</span>
        <span slot="title">${args.title}</span>
        <span slot="primary-button-text">${args.primaryButtonText}</span>
      </forge-ai-wrapper>
    `;
  },
  args: {
    anchor: 'forge-theme-toggle-anchor',
    open: false,
    tooltipText: 'Change your application theme',
    title: 'Display theme',
    primaryButtonText: 'Close'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
