import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import '$lib/responsive-toolbar/responsive-toolbar';
import { IMenuOption } from '@tylertech/forge';

const component = 'forge-responsive-toolbar';

const meta = {
  title: 'Components/Responsive Toolbar',
  component,
  render: args => {
    const options: IMenuOption[] = [
      { label: 'Add User ', value: 'add-user' },
      { label: 'Remove User', value: 'remove-user' }
    ];

    return html`
      <forge-card style="--forge-card-padding: 0;">
        <forge-responsive-toolbar>
          <div slot="start" class="forge-typography--heading4">This is a really really long title</div>
          <forge-stack inline alignment="center" slot="actions-desktop">
            <forge-button>Remove user</forge-button>
            <forge-button variant="filled">Add user</forge-button>
          </forge-stack>
          <div slot="actions-mobile">
            <forge-menu .options=${options}>
              <forge-icon-button aria-label="Icon button demo">
                <forge-icon name="more_vert" external></forge-icon>
              </forge-icon-button>
            </forge-menu>
          </div>
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
    `;
  },
  argTypes: {
    invalid: { control: 'boolean' },
    required: { control: 'boolean' }
  },
  args: {
    invalid: false,
    required: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
