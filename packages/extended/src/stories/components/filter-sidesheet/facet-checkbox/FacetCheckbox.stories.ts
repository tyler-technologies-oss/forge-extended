import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../../../lib/filter-sidesheet/facet-checkbox/facet-checkbox';

const component = 'forge-facet-checkbox';

const meta = {
  title: 'Components/Filter Sidesheet/Facet Checkbox',
  component,
  render: args => {
    return html` <div style="width:320px;">
      <forge-facet-checkbox .count=${args.count} .showCount=${args.showCount}>${args.label}</forge-facet-checkbox>
    </div>`;
  },
  argTypes: {
    label: { control: 'text' },
    count: { control: 'number' },
    showCount: { control: 'boolean' }
  },
  args: {
    label: 'This is the label',
    count: 36,
    showCount: true
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
