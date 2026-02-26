import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { storyStyles } from '../../decorators';
import {
  defineButtonComponent,
  defineDialogComponent,
  defineIconButtonComponent,
  defineIconComponent,
  IconRegistry
} from '@tylertech/forge';
import { tylIconClose, tylIconSave } from '@tylertech/tyler-icons';

import '$lib/content-scaffold';

defineButtonComponent();
defineDialogComponent();
defineIconButtonComponent();
defineIconComponent();
IconRegistry.define([tylIconClose, tylIconSave]);

const component = 'forge-content-scaffold';

const meta = {
  title: 'Components/Content Scaffold',
  component,
  decorators: [
    storyStyles(`
      * {
        box-sizing: border-box;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)
  ],
  render: () => {
    const handleOpenDialog = (e: Event) => {
      const button = e.target as HTMLElement;
      const dialog = button.nextElementSibling as any;
      dialog?.show();
    };

    const handleCloseDialog = (e: Event) => {
      const target = e.target as HTMLElement;
      const dialog = target.closest('forge-dialog') as any;
      dialog?.hide();
    };

    return html`
      <forge-button variant="filled" @click=${handleOpenDialog}>Open Dialog</forge-button>
      <forge-dialog>
        <forge-content-scaffold>
          <h1 slot="header-start" class="forge-typography--heading4">Edit Settings</h1>
          <forge-icon-button aria-label="Close dialog" slot="header-end" @click=${handleCloseDialog}>
            <forge-icon name="close"></forge-icon>
          </forge-icon-button>

          <div slot="body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

          <forge-stack inline alignment="center" slot="footer-end">
            <forge-button variant="text" @click=${handleCloseDialog}>Cancel</forge-button>
            <forge-button variant="filled">
              <forge-icon slot="start" name="save"></forge-icon>
              Save Changes
            </forge-button>
          </forge-stack>
        </forge-content-scaffold>
      </forge-dialog>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const InADialog: Story = {};
