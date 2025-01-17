import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../../lib/filters/filter-wrapper/filter-wrapper';

const component = 'forge-filter-wrapper';

const meta = {
  title: 'Components/Filter Wrapper',
  component,
  render: args => {
    return html` <forge-filter-wrapper></forge-filter-wrapper> `;
  },

  args: {}
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
