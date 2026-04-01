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
  tags: ['hidden'],
  render: () => {
    return html`
      <forge-content-scaffold id="storybook-demo">
        <div slot="header">header slot</div>
        <div class="body" slot="body">
          <div class=" body-inner">body</div>
        </div>
        <div slot="footer-start">footer-start</div>
        <div slot="footer-end">footer-end</div>
      </forge-content-scaffold>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const FullWidthHeader: Story = {};
