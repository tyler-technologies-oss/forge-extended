import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineStackComponent, IconRegistry } from '@tylertech/forge';
import { tylIconContentCopy, tylIconDownload, tylIconExport, tylIconRefresh } from '@tylertech/tyler-icons';

defineStackComponent();

import '$lib/ai/ai-artifact';

IconRegistry.define([tylIconContentCopy, tylIconRefresh, tylIconDownload, tylIconExport]);

const component = 'forge-ai-artifact';

const meta = {
  title: 'AI/Primitives/Artifact',
  component,
  render: () => {
    return html`
      <forge-ai-artifact>
        <span slot="start">Artifact</span>
        <forge-stack inline slot="end" gap="0" alignment="center">
          <forge-icon-button aria-label="Copy to clipboard">
            <forge-icon name="content_copy"></forge-icon>
          </forge-icon-button>
          <forge-icon-button aria-label="Refresh">
            <forge-icon name="refresh"></forge-icon>
          </forge-icon-button>
          <forge-icon-button aria-label="Download">
            <forge-icon name="download"></forge-icon>
          </forge-icon-button>
          <forge-icon-button aria-label="Export">
            <forge-icon name="export"></forge-icon>
          </forge-icon-button>
        </forge-stack>
        Content here
      </forge-ai-artifact>
    `;
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
