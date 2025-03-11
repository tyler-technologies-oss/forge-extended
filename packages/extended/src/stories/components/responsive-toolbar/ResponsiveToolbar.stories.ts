import { type Meta, type StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '$lib/responsive-toolbar';

const component = 'forge-responsive-toolbar';
import { IMenuOption } from '@tylertech/forge';

interface customMenuOption extends IMenuOption {
  variant?: 'text' | 'raised' | 'outlined';
}

const meta = {
  title: 'Components/Responsive Toolbar',
  render: args => {
    const options: customMenuOption[] = [
      { label: 'Add User ', value: 'add-user', variant: 'text' },
      { label: 'Remove User', value: 'remove-user', variant: 'outlined' },
      { label: 'Third action', value: 'third-action', variant: 'raised' }
    ];

    return html`<div style="width: 960px; resize:both; overflow:auto;">
      <forge-card style="--forge-card-padding: 0; height: 100%;">
        <forge-responsive-toolbar
          ?no-border=${args.noBorder}
          ?auto-height=${args.autoHeight}
          ?inverted=${args.inverted}>
          <forge-icon-button aria-label="Icon button demo" slot="before-start">
            <forge-icon name="arrow_back" external></forge-icon>
          </forge-icon-button>
          <div slot="start" class="forge-typography--heading4">${args.title}</div>
          <forge-stack inline alignment="center" slot="actions-desktop">
            ${options.map(
              item => html` <forge-button variant=${ifDefined(item.variant)}>${item.label}</forge-button> `
            )}
          </forge-stack>
          <div slot="actions-mobile">
            <forge-menu .options=${options}>
              <forge-icon-button aria-label="Open menu">
                <forge-icon name="more_vert" external></forge-icon>
              </forge-icon-button>
            </forge-menu>
          </div>
          ${args.afterEnd
            ? html`<div slot="after-end">
                <forge-button>After end</forge-button>
              </div>`
            : nothing}
        </forge-responsive-toolbar>

        <div style="padding: 16px;">
          <p>
            To see this component respond, drag this div smaller using the drag handle on the bottom right of the card
          </p>
        </div>
      </forge-card>
    </div>`;
  },
  component,
  argTypes: {
    title: { control: 'text' },
    noBorder: { control: 'boolean' },
    autoHeight: { control: 'boolean' },
    inverted: { control: 'boolean' },
    afterEnd: { control: 'boolean', name: 'Show after-end slot content' }
  },
  args: {
    title: 'This is a really really long title',
    noBorder: false,
    autoHeight: true,
    inverted: false,
    afterEnd: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  args: {
    demoWidth: 855,
    afterEnd: false
  }
};
