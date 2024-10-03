import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import '$lib/theme-toggle/theme-toggle';
import { ThemeToggleElement } from '$lib/theme-toggle/theme-toggle';
import { ToastComponent } from '@tylertech/forge';

const component = 'forge-theme-toggle';

const meta = {
  title: 'Components/Theme Toggle',
  component,

  render: args => {
    const themeToggleRef = createRef<ThemeToggleElement>();

    function themeToggled(e: IThemeToggleChange) {
      let theme = e.detail.theme;
      ToastComponent.present({ message: `${theme} theme selected` });
    }

    return html`
      <forge-theme-toggle
        ${ref(themeToggleRef)}
        .open=${args.open}
        .titleText=${args.titleText}
        .message=${args.message}
        @forge-theme-toggle-toggled=${(e: IThemeToggleChange) => {
          themeToggled(e);
        }}>
      </forge-theme-toggle>
    `;
  },
  args: {
    anchor: 'forge-theme-toggle-anchor',
    open: false,
    titleText: 'Display theme',
    message: 'Choose what theme you would like to use for this application.',
    primaryButtonText: 'Cancel'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
