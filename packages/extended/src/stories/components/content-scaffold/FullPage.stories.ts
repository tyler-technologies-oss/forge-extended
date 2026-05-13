import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { storyStyles } from '../../decorators';
import {
  defineButtonComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineToolbarComponent,
  IconRegistry
} from '@tylertech/forge';
import { tylIconSave, tylIconMoreVert, tylIconArrowBack } from '@tylertech/tyler-icons';

import '$lib/content-scaffold';
import '$lib/structured-card';

defineToolbarComponent();
defineButtonComponent();
defineIconButtonComponent();
defineIconComponent();
IconRegistry.define([tylIconSave, tylIconMoreVert, tylIconArrowBack]);

const component = 'forge-content-scaffold';

const meta = {
  title: 'Components/Content Scaffold',
  component,
  tags: ['hidden'],
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    storyStyles(`
      body {
        height: 100dvh;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #fafafa;
      }
      
      p {
        padding: 0;
        margin: 0;
      }

      #storybook-root,
      #root-inner {
        height: 100%;
      }
    `)
  ],

  render: () => {
    return html`
      <forge-content-scaffold>
        <forge-icon-button aria-label="Back" slot="before-header-start">
          <forge-icon name="arrow_back"></forge-icon>
        </forge-icon-button>
        <h2 slot="header-start" class="forge-typography--heading4">Project Details</h2>
        <forge-icon-button aria-label="More actions" slot="header-end">
          <forge-icon name="more_vert"></forge-icon>
        </forge-icon-button>
        <div slot="body">
          <forge-card>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </forge-card>
        </div>
        <forge-button variant="filled" slot="footer-end">
          <forge-icon slot="start" name="save"></forge-icon>
          Save
        </forge-button>
      </forge-content-scaffold>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const FullPage: Story = {};
