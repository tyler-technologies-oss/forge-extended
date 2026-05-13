import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineButtonComponent, defineIconButtonComponent, IconRegistry } from '@tylertech/forge';
import { tylIconClose } from '@tylertech/tyler-icons';

import '$lib/structured-card';

defineButtonComponent();
defineIconButtonComponent();
IconRegistry.define([tylIconClose]);

const component = 'forge-structured-card';

const meta = {
  title: 'Components/Structured Card',
  component,
  render: () => {
    return html`
      <forge-structured-card id="storybook-demo">
        <span slot="before-title">before-title</span>
        <span slot="title">title</span>
        <span slot="header-actions">header-actions</span>
        <span slot="after-header-actions">after-header-actions</span>
        <span slot="body" style="height: 300px;">body</span>
        <span slot="footer-start">footer-start</span>
        <span slot="footer-secondary-action">footer-secondary-action</span>
        <span slot="footer-primary-action">footer-primary-action</span>
      </forge-structured-card>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
