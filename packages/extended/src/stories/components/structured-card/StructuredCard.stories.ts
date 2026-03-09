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
        <span slot="before-title">before-title slot</span>
        <span slot="title">title slot</span>
        <span slot="header-actions"> header-actions slot </span>
        <span slot="body">body slot</span>
        <span slot="footer-start">footer-start slot</span>
        <span slot="footer-secondary-action">footer-secondary-action slot</span>
        <span slot="footer-primary-action">footer-primary-action slot</span>
      </forge-structured-card>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
