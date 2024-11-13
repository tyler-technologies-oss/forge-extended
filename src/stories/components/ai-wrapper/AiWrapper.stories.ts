import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import '$lib/ai-wrapper/ai-wrapper';
import { AiWrapperElement, ThemeType } from '$lib/ai-wrapper/ai-wrapper';
import { ToastComponent, AppBarComponent } from '@tylertech/forge';

const component = 'forge-ai-wrapper';

const meta = {
  title: 'Components/AI Wrapper',
  component,

  render: args => {
    const themeToggleRef = createRef<AiWrapperElement>();

    function themeToggled(e: CustomEvent<ThemeType>) {
      const theme = e.detail;
      ToastComponent.present({ message: `${theme} theme selected` });
    }

    const skeleton = html` <div style="width: 100%; height: 32px; background-color: lightgray; opacity: .5"></div> `;

    return html`
      <style>
        body {
          padding: 0 !important;
        }
      </style>
      <forge-scaffold style="height: 900px;">
        <forge-app-bar title-text="Tyler Forge" slot="header">
          <forge-icon slot="logo" name="forge_logo" external external-type="custom"></forge-icon>
          <forge-ai-wrapper
            slot="end"
            ${ref(themeToggleRef)}
            .open=${args.open}
            @forge-theme-toggle-theme=${(e: CustomEvent<ThemeType>) => {
              themeToggled(e);
            }}>
            <span slot="tooltip-text">${args.tooltipText}</span>
            <span slot="title">${args.title}</span>
            <span slot="primary-button-text">${args.primaryButtonText}</span>
          </forge-ai-wrapper>
        </forge-app-bar>
        <div slot="body" style="padding-block: 24px; display: grid; gap: 16px; grid-row: auto;">
          ${skeleton} ${skeleton} ${skeleton}
        </div>
      </forge-scaffold>
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
