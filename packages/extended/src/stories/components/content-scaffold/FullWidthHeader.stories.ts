import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { storyStyles } from '../../decorators';
import {
  defineButtonComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineStackComponent,
  defineToolbarComponent,
  IconRegistry
} from '@tylertech/forge';
import { tylIconSave, tylIconMoreVert, tylIconArrowBack, tylIconSearch } from '@tylertech/tyler-icons';

import '$lib/content-scaffold';

defineToolbarComponent();
defineButtonComponent();
defineIconButtonComponent();
defineStackComponent();
defineIconComponent();
IconRegistry.define([tylIconSave, tylIconMoreVert, tylIconArrowBack, tylIconSearch]);

const component = 'forge-content-scaffold';

const meta = {
  title: 'Components/Content Scaffold',
  component,
  tags: [''],
  args: {
    fullWidthHeader: true
  },
  argTypes: {
    fullWidthHeader: {
      control: 'boolean',
      description: 'Enable full-width header mode'
    }
  },

  decorators: [
    storyStyles(`
      .full-width-header {
        background-color: var(--forge-theme-surface-dim);
        height: 48px;
        display: flex;
        align-items: center;
        padding-inline: 16px;
      }
       p {
        margin:0;
        padding: 0;
       }

    `)
  ],

  render: ({ fullWidthHeader }) => {
    return html`
      <forge-content-scaffold .fullWidthHeader=${fullWidthHeader}>
        <div slot="header" class="full-width-header">This is a full width element</div>
        <div slot="body">
          <forge-stack>
            <p>
              This example demonstrates the full-width header slot. The header content spans the entire width of the
              scaffold without being constrained to start/end sections. This is useful for custom toolbars, navigation
              bars, or any content that needs complete control over the header layout.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </forge-stack>
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

export const FullWidthHeader: Story = {};
