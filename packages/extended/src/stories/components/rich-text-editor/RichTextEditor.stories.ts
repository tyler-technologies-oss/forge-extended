import { type Meta, type StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import { action } from 'storybook/actions';

import '$lib/rich-text-editor';
import '$lib/rich-text-editor/features/rte-standard-tools';
import '$lib/rich-text-editor/features/rte-code';
import '$lib/rich-text-editor/features/rte-link';
import '$lib/rich-text-editor/rich-text-renderer';

const component = 'forge-rich-text-editor';

const changeAction = action('change');

const meta = {
  title: 'Components/Rich Text Editor',
  render: args => {
    return html`
      <forge-rich-text-editor
        .content=${args.content}
        ?disabled=${args.disabled}
        ?readOnly=${args.readOnly}
        @change=${changeAction}>
        <forge-rte-standard-tools></forge-rte-standard-tools>
        ${args.showAdditionalFeatures
          ? html`
              <forge-rte-feature-divider></forge-rte-feature-divider>
              <forge-rte-code></forge-rte-code>
              <forge-rte-link></forge-rte-link>
            `
          : nothing}
      </forge-rich-text-editor>
    `;
  },
  component,
  argTypes: {
    content: {
      control: 'text',
      description: 'The HTML content of the editor'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the editor is disabled'
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the editor is in readonly mode'
    },
    showAdditionalFeatures: {
      control: 'boolean',
      description: 'Show code and link features in addition to standard tools'
    }
  },
  args: {
    content: '',
    disabled: false,
    readOnly: false,
    showAdditionalFeatures: true
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
