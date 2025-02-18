import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '../../../../lib/filter-sidesheet/facet-group/facet-group';
import '../../../../lib/filter-sidesheet/facet-checkbox/facet-checkbox';

const component = 'forge-facet-group';

const meta = {
  title: 'Components/Filter Sidesheet/Facet Group',
  component,
  render: args => {
    const addCategories = () => {
      args.categories = [...args.categories, { value: 'new', label: 'New Category', count: 0 }];
      console.log(args.categories);
    };

    return html` <button @click=${addCategories}>Add more</button>
      <forge-scaffold>
        <div slot="header">
          <forge-app-bar title-text="Tyler Forge">
            <forge-icon slot="logo" name="forge_logo" external external-type="custom"></forge-icon>
          </forge-app-bar>
        </div>
        <div slot="body-left">
          <forge-drawer style="--forge-drawer-width: 320px;">
            <div style="margin-block: 8px;">
              <forge-facet-group
                title=${args.title}
                .expandable=${args.expandable}
                .open=${args.open}
                .showDivider=${args.showDivider}>
                ${args.categories.map(
                  facet => html`
                    <forge-facet-checkbox value=${facet.value} count=${facet.count}>
                      ${facet.label}
                    </forge-facet-checkbox>
                  `
                )}
              </forge-facet-group>
            </div>
          </forge-drawer>
        </div>
      </forge-scaffold>`;
  },

  argTypes: {
    title: { control: 'text' },
    expandable: { control: 'boolean' },
    open: { control: 'boolean' },
    showDivider: { control: 'boolean' },
    categories: {}
  },
  args: {
    title: 'Categories',
    expandable: false,
    open: false,
    showDivider: false,
    categories: [
      { value: 'budget', label: 'Budget & Finance', count: 7 },
      { value: 'bd', label: 'Building & Development', count: 36 },
      { value: 'cb', label: 'City Business', count: 1487 },
      { value: 'co', label: 'Community', count: 1 },
      { value: 'bd', label: 'Education', count: 3676 },
      { value: 'bd', label: 'Education', count: 3676 },
      { value: 'bd', label: 'Education', count: 3676 },
      { value: 'bd', label: 'Education', count: 3676 },
      { value: 'bd', label: 'Education', count: 3676 }
    ]
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
