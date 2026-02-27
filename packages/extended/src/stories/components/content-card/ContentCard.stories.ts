import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineButtonComponent, defineIconButtonComponent, IconRegistry } from '@tylertech/forge';
import { tylIconClose } from '@tylertech/tyler-icons';

import '$lib/content-card';

defineButtonComponent();
defineIconButtonComponent();
IconRegistry.define([tylIconClose]);

const component = 'forge-content-card';

const meta = {
  title: 'Components/Content Card',
  component,
  render: args => {
    return html`
      <style>
        .slot-demo {
          padding: var(--forge-spacing-xxsmall);
          border: 2px dashed;
          border-radius: 4px;
        }
        .slot-demo--info {
          background: var(--forge-theme-info-container-low);
          border-color: var(--forge-theme-info);
        }
        .slot-demo--primary {
          background: var(--forge-theme-primary-container-low);
          border-color: var(--forge-theme-primary);
        }

        .slot-demo--success {
          background: var(--forge-theme-success-container-low);
          border-color: var(--forge-theme-success);
        }
        .slot-demo--tertiary {
          background: var(--forge-theme-tertiary-container-low);
          border-color: var(--forge-theme-tertiary);
        }

        .slot-demo--body {
          min-height: 120px;
        }
      </style>
      <forge-content-card>
        <div slot="before-title" class="slot-demo slot-demo--info forge-typography--label2">before-title slot</div>
        <div slot="title" class="slot-demo slot-demo--primary forge-typography--label2">title slot</div>
        <div slot="header-actions" class="slot-demo slot-demo--primary forge-typography--label2">
          header-actions slot
        </div>
        <div slot="body" class="slot-demo slot-demo--success slot-demo--body forge-typography--body2">
          body slot - Main content area
        </div>
        <div slot="footer-secondary-action" class="slot-demo slot-demo--tertiary forge-typography--label2">
          footer-secondary-action slot
        </div>

        <div slot="footer-primary-action" class="slot-demo slot-demo--tertiary forge-typography--label2">
          footer-primary-action slot
        </div>
      </forge-content-card>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
