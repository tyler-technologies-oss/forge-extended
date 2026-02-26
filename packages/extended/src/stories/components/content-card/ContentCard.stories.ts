import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import '$lib/content-card';

const component = 'forge-content-card';

const meta = {
  title: 'Components/Content Card',
  component,
  render: args => {
    return html`
      <forge-content-card>
        <!-- <div slot="before-title">Before header start</div> -->
        <div slot="title">This is the title</div>
        <div slot="header-actions">Header actions</div>
        <div slot="body">This is the content of the body slot</div>
        <div slot="footer-secondary-action">Footer actions</div>
        <div slot="footer-primary-action">Footer actions</div>
      </forge-content-card>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
