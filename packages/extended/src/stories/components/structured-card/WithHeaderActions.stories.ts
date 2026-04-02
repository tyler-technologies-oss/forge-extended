import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { storyStyles } from '../../decorators';
import {
  defineButtonComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineMenuComponent,
  defineStackComponent,
  IconRegistry,
  type IMenuOption
} from '@tylertech/forge';
import {
  tylIconClose,
  tylIconDelete,
  tylIconShare,
  tylIconMoreVert,
  tylIconSave,
  tylIconDownload,
  tylIconEdit
} from '@tylertech/tyler-icons';

import '$lib/structured-card';

defineButtonComponent();
defineIconButtonComponent();
defineIconComponent();
defineMenuComponent();
defineStackComponent();
IconRegistry.define([
  tylIconClose,
  tylIconSave,
  tylIconDelete,
  tylIconShare,
  tylIconMoreVert,
  tylIconDownload,
  tylIconEdit
]);

const component = 'forge-structured-card';

const meta = {
  title: 'Components/Structured Card',
  component,
  decorators: [
    storyStyles(`
      .actions-card-container {
        max-width: 600px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)
  ],
  render: () => {
    const handleMenuSelect = (event: CustomEvent) => {
      console.log('Menu option selected:', event.detail);
    };

    const menuOptions: IMenuOption[] = [
      { label: 'Edit', value: 'edit', leadingIcon: 'edit', leadingIconType: 'component' },
      { label: 'Share', value: 'share', leadingIcon: 'share', leadingIconType: 'component' },
      { label: 'Download', value: 'download', leadingIcon: 'download', leadingIconType: 'component' },
      { label: 'Delete', value: 'delete', leadingIcon: 'delete', leadingIconType: 'component' }
    ];

    return html`
      <div class="actions-card-container">
        <forge-structured-card heading-level="2">
          <div slot="title">Project Details</div>
          <forge-menu slot="header-actions" .options=${menuOptions} @forge-menu-select=${handleMenuSelect}>
            <forge-icon-button aria-label="More actions">
              <forge-icon name="more_vert"></forge-icon>
            </forge-icon-button>
          </forge-menu>

          <div slot="body" class="card-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <forge-button variant="text" slot="footer-secondary-action">
            <forge-icon slot="start" name="delete"></forge-icon>
            Cancel
          </forge-button>
          <forge-button variant="filled" slot="footer-primary-action">
            <forge-icon slot="start" name="save"></forge-icon>
            Save
          </forge-button>
        </forge-structured-card>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const WithHeaderActions: Story = {};
