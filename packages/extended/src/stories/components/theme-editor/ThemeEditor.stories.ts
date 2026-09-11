import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { createForgeTheme } from '$lib/theme-editor';

import '$lib/theme-editor';

const component = 'forge-theme-editor';

const meta = {
  title: 'Components/Theme Editor',
  component,
  render: args => {
    return html`
      <forge-theme-editor ?preview=${args.preview} export-format=${args.exportFormat} .theme=${args.theme}>
        <span slot="title">${args.titleText}</span>
      </forge-theme-editor>
    `;
  },
  argTypes: {
    preview: {
      control: 'boolean',
      description: 'Whether the theme is applied to the live document',
      table: { category: 'Properties' }
    },
    exportFormat: {
      control: 'select',
      options: ['json', 'scss', 'css'],
      description: 'The export format shown on the import and export view',
      table: { category: 'Properties' }
    },
    theme: {
      control: 'object',
      description: 'The theme being edited',
      table: { category: 'Properties' }
    },
    titleText: {
      control: 'text',
      description: 'Title slot content',
      table: { category: 'Content' }
    }
  },
  args: {
    preview: false,
    exportFormat: 'json',
    theme: createForgeTheme({ name: 'My brand theme' }),
    titleText: 'Theme editor'
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
