import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import {
  defineAppBarComponent,
  defineScaffoldComponent,
  defineDrawerComponent,
  IconRegistry,
  defineListComponent,
  defineListItemComponent,
  defineIconComponent
} from '@tylertech/forge';

import '$lib/app-layout';
import { tylIconHome, tylIconInbox, tylIconSettings, tylIconStar } from '@tylertech/tyler-icons';
import { storyStyles } from 'src/stories/decorators';

defineAppBarComponent();
defineScaffoldComponent();
defineDrawerComponent();
defineListComponent();
defineListItemComponent();
defineIconComponent();

const component = 'forge-app-layout';

IconRegistry.define([tylIconHome, tylIconInbox, tylIconSettings, tylIconStar]);

const meta = {
  title: 'Components/App Layout',
  component,
  argTypes: {
    appTitle: {
      control: 'text',
      description: 'The title text to display in the app bar',
      table: {
        category: 'Properties'
      }
    },
    breakpoint: {
      control: 'number',
      description: 'The screen width breakpoint in pixels for responsive behavior',
      table: {
        category: 'Properties'
      }
    }
  },
  args: {
    appTitle: 'App Layout Demo',
    breakpoint: 960
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: args => {
    return html`
      <forge-app-layout app-title=${args.appTitle} breakpoint=${args.breakpoint}>
        <forge-list navlist slot="navigation">
          <forge-list-item>
            <forge-icon slot="start" name="home"></forge-icon>
            <a href="javascript: void(0);">Home</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="inbox"></forge-icon>
            <a href="javascript: void(0);">Inbox</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="star"></forge-icon>
            <a href="javascript: void(0);">Starred</a>
          </forge-list-item>
          <forge-list-item>
            <forge-icon slot="start" name="settings"></forge-icon>
            <a href="javascript: void(0);">Settings</a>
          </forge-list-item>
        </forge-list>

        <div class="content-container">
          <p class="forge-typography--body1">Resize the frame to see the responsive behavior</p>
        </div>
        <div slot="modal-footer">Footer</div>
      </forge-app-layout>
    `;
  }
};
