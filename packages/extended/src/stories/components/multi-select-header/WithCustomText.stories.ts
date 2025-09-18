import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/multi-select-header';

const component = 'forge-multi-select-header';

const meta = {
  tags: ['hidden'],
  title: 'Components/Multi Select Header/With Custom Text',
  render: () => {
    return html` <forge-multi-select-header text="5 rows selected for processing"></forge-multi-select-header> `;
  },
  component
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
