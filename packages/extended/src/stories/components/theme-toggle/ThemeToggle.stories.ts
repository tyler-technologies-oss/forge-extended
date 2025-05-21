import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import '$lib/theme-toggle';
import { ThemeToggleThemeEventData } from '$lib/theme-toggle';

const component = 'forge-theme-toggle';
const actionThemeChange = action('forge-theme-toggle-update');

const meta = {
  title: 'Components/Theme Toggle',

  render: args => {
    function handleAction(evt: CustomEvent<ThemeToggleThemeEventData>) {
      actionThemeChange(evt.detail.theme);
    }

    return html`<forge-theme-toggle @forge-theme-toggle-update=${handleAction}></forge-theme-toggle>`;
  },
  component,
  argTypes: {},
  args: {}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
