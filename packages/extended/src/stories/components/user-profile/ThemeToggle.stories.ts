import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '$lib/theme-toggle/theme-toggle';

const component = 'forge-theme-toggle';

const meta = {
  tags: ['hidden'],
  title: 'Components/User Profile/Theme Toggle',
  render: args => {
    return html`
      <forge-theme-toggle group-aria-label="${args.groupAriaLabel}">
        <span slot="title">${args.title}</span>
        <span slot="light-label">${args['light-label']}</span>
        <span slot="dark-label">${args['dark-label']}</span>
        <span slot="system-label">${args['system-label']}</span>
      </forge-theme-toggle>
    `;
  },
  component,
  argTypes: {
    groupAriaLabel: { control: 'text' },
    title: { control: 'text' },
    'light-label': { control: 'text' },
    'dark-label': { control: 'text' },
    'system-label': { control: 'text' }
  },
  args: {
    groupAriaLabel: 'Select a theme',
    title: 'Theme',
    'light-label': 'Light',
    'dark-label': 'Dark',
    'system-label': 'System'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
