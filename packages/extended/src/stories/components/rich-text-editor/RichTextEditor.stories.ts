import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '$lib/rich-text-editor';

const component = 'forge-rich-text-editor';

const meta = {
  title: 'Components/Rich Text Editor',
  render: args => {
    return html`<forge-rich-text-editor></forge-rich-text-editor>`;
  },
  component,
  argTypes: {},
  args: {}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
