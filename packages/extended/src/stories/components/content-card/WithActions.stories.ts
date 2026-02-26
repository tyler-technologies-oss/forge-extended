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
import { tylIconClose, tylIconEdit, tylIconDelete, tylIconShare, tylIconMoreVert } from '@tylertech/tyler-icons';

import '$lib/content-card';

defineButtonComponent();
defineIconButtonComponent();
defineIconComponent();
defineStackComponent();
IconRegistry.define([tylIconClose, tylIconEdit, tylIconDelete, tylIconShare, tylIconMoreVert]);

const component = 'forge-content-card';

const meta = {
  title: 'Components/Content Card',
  component,
  decorators: [
    storyStyles(`
      .actions-card-container {
        max-width: 400px;
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
          <div slot="title">Project Details</div>
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
            Delete
          </forge-button>
          <forge-button variant="filled" slot="footer-primary-action">
            <forge-icon slot="start" name="edit"></forge-icon>
            Edit Project
          </forge-button>
        </forge-content-card>
      </div>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const WithActions: Story = {};
