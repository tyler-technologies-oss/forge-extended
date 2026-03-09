import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { storyStyles } from '../../decorators';
import { defineButtonComponent, defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconSave, tylIconClose } from '@tylertech/tyler-icons';

import '$lib/structured-card';

defineButtonComponent();
defineIconComponent();
IconRegistry.define([tylIconSave, tylIconClose]);

const component = 'forge-structured-card';

const meta = {
  title: 'Components/Structured Card',
  component,
  decorators: [
    storyStyles(`
      .no-header-card-container {
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
      <div class="no-header-card-container">
        <forge-structured-card>
          <div slot="body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

          <forge-button variant="text" slot="footer-secondary-action">
            <forge-icon slot="start" name="close"></forge-icon>
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

export const CardWithNoHeader: Story = {};
