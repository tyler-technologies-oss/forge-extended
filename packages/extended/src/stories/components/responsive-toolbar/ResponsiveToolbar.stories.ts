import { type Meta, type StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IMenuOption } from '@tylertech/forge';
import { storyStyles } from '../../decorators';

import '$lib/responsive-toolbar';

const component = 'forge-responsive-toolbar';

interface customMenuOption extends IMenuOption {
  variant?: 'text' | 'raised' | 'outlined';
}

const meta = {
  title: 'Components/Responsive Toolbar',
  decorators: [
    storyStyles(`
      .rt-container {
        max-width: 960px;
        resize: both;
        overflow: auto;
        border: 1px solid var(--forge-theme-outline);
        border-radius: 4px;
      }

      .rt-card {
        height: 100%;
      }

      .rt-content {
        padding: var(--forge-spacing-medium);
      }
    `)
  ],
  render: args => {
    const options: customMenuOption[] = [
      { label: 'Add User ', value: 'add-user', variant: 'text' },
      { label: 'Remove User', value: 'remove-user', variant: 'outlined' },
      { label: 'Third action', value: 'third-action', variant: 'raised' }
    ];

    return html`<div class="rt-container">
      <div class="rt-card">
        <forge-responsive-toolbar
          ?no-border=${args.noBorder}
          ?auto-height=${args.autoHeight}
          ?inverted=${args.inverted}>
          <forge-icon-button aria-label="Icon button demo" slot="before-start">
            <forge-icon name="arrow_back" external></forge-icon>
          </forge-icon-button>
          <div slot="start" class="forge-typography--heading4">${args.title}</div>
          <forge-stack inline alignment="center" slot="end-large">
            ${options.map(
              item => html` <forge-button variant=${ifDefined(item.variant)}>${item.label}</forge-button> `
            )}
          </forge-stack>
          <div slot="end-small">
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

        <p class="rt-content">
          To see this component respond, drag this div smaller using the drag handle on the bottom right of the card
        </p>
      </div>
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
