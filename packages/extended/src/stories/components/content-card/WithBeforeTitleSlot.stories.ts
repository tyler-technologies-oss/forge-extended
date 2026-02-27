import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { storyStyles } from '../../decorators';
import {
  defineButtonComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineStackComponent,
  IconRegistry
} from '@tylertech/forge';
import {
  tylIconClose,
  tylIconDelete,
  tylIconShare,
  tylIconMoreVert,
  tylIconSave,
  tylIconDownload,
  tylIconEdit,
  tylIconArrowBack
} from '@tylertech/tyler-icons';

import '$lib/content-card';

defineButtonComponent();
defineIconButtonComponent();
defineIconComponent();
defineStackComponent();
IconRegistry.define([
  tylIconClose,
  tylIconSave,
  tylIconDelete,
  tylIconShare,
  tylIconMoreVert,
  tylIconDownload,
  tylIconEdit,
  tylIconArrowBack
]);

const component = 'forge-content-card';

const meta = {
  title: 'Components/Content Card',
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
    return html`
      <div class="actions-card-container">
        <forge-content-card heading-level="2">
          <forge-icon-button aria-label="Back" slot="before-title">
            <forge-icon name="arrow_back"></forge-icon>
          </forge-icon-button>
          <div slot="title">Project Details</div>
          <forge-icon-button aria-label="Edit" slot="header-actions">
            <forge-icon name="edit"></forge-icon>
          </forge-icon-button>
          <forge-icon-button aria-label="Download" slot="header-actions">
            <forge-icon name="download"></forge-icon>
          </forge-icon-button>
          <forge-icon-button aria-label="More actions" slot="header-actions">
            <forge-icon name="more_vert"></forge-icon>
          </forge-icon-button>

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
        </forge-content-card>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const WithBeforeTitleSlot: Story = {};
