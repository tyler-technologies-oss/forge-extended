import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import '$lib/theme-toggle/theme-toggle';
import { ThemeToggleElement, ThemeType } from '$lib/theme-toggle/theme-toggle';
import { ToastComponent } from '@tylertech/forge';

const component = 'forge-theme-toggle';

const meta = {
  title: 'Components/Theme Toggle',
  component,

  render: args => {
    const themeToggleRef = createRef<ThemeToggleElement>();

    function themeToggled(e: CustomEvent<ThemeType>) {
      const theme = e.detail;
      ToastComponent.present({ message: `${theme} theme selected` });
    }

    return html`
      <forge-theme-toggle
        ${ref(themeToggleRef)}
        .open=${args.open}
        @forge-theme-toggle-theme=${(e: CustomEvent<ThemeType>) => {
          themeToggled(e);
        }}>
        <span slot="tooltip-text">${args.tooltipText}</span>
        <span slot="title">${args.title}</span>
        <span slot="message">${args.message}</span>
        <span slot="primary-button-text">${args.primaryButtonText}</span>
      </forge-theme-toggle>
    `;
  },
  args: {
    anchor: 'forge-theme-toggle-anchor',
    open: false,
    tooltipText: 'Change your application theme',
    title: 'Display theme',
    message: 'Choose what theme you would like to use for this application.',
    primaryButtonText: 'Close'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
