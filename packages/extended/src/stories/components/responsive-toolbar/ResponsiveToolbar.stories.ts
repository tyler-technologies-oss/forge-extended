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

    return html`<div style="width: ${args.demoWidth}px; resize:both; overflow:auto;">
      <forge-card style="--forge-card-padding: 0;">
        <forge-responsive-toolbar>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </forge-card>
    </div>`;
  },
  component,
  argTypes: {
    demoWidth: { control: { type: 'range', min: 360, max: 1260, step: 3 } },
    title: { control: 'text' },
    afterEnd: { control: 'boolean', name: 'Show after-end slot content' }
  },
  args: {
    demoWidth: 900,
    title: 'This is a really really long title',
    afterEnd: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
