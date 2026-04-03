import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { storyStyles } from '../../decorators';
import { defineButtonComponent, defineIconButtonComponent, defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconMoreVert, tylIconSave } from '@tylertech/tyler-icons';

import '$lib/structured-card';

defineButtonComponent();
defineIconButtonComponent();
defineIconComponent();
IconRegistry.define([tylIconMoreVert, tylIconSave]);

const component = 'forge-structured-card';

const meta = {
  title: 'Components/Structured Card',
  component,
  decorators: [
    storyStyles(`
      * {
        box-sizing: border-box;
      }

      .card-container {
        max-width: 360px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)
  ],
  render: () => {
    return html`
      <div class="card-container">
        <forge-structured-card style="--forge-structured-card-body-height: 200px;">
          <span slot="title">Project Details</span>
          <forge-icon-button aria-label="More actions" slot="header-actions">
            <forge-icon name="more_vert"></forge-icon>
          </forge-icon-button>
          <div slot="body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
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

export const ScrollableBodyContent: Story = {};
