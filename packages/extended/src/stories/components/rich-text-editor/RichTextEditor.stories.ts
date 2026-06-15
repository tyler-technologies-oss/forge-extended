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
const validationAction = action('validation');
const initializedAction = action('initialized');
const initializationErrorAction = action('initialization-error');
const errorAction = action('error');

const meta = {
  title: 'Components/Rich Text Editor',
  render: args => {
    return html`
      <forge-rich-text-editor
        .content=${args.content}
        ?disabled=${args.disabled}
        ?readOnly=${args.readOnly}
        .maxLength=${args.maxLength}
        .errorMessage=${args.errorMessage}
        ?showCharacterCount=${args.showCharacterCount}
        ?showWordCount=${args.showWordCount}
        ?allowPasteFormatting=${args.allowPasteFormatting}
        ?allowPasteImages=${args.allowPasteImages}
        ?suppressErrors=${args.suppressErrors}
        @change=${changeAction}
        @validation=${validationAction}
        @initialized=${initializedAction}
        @initialization-error=${initializationErrorAction}
        @error=${errorAction}>
        <forge-rte-standard-tools></forge-rte-standard-tools>
        ${args.showAdditionalFeatures
          ? html`
              <forge-rte-feature-divider></forge-rte-feature-divider>
              <forge-rte-code></forge-rte-code>
              <forge-rte-link ?validate-urls=${args.validateUrls} ?auto-protocol=${args.autoProtocol}></forge-rte-link>
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
    maxLength: {
      control: 'number',
      description: 'Maximum character length allowed (0 = no limit)'
    },
    errorMessage: {
      control: 'text',
      description: 'Custom error message to display when validation fails'
    },
    showCharacterCount: {
      control: 'boolean',
      description: 'Whether to show character count below the editor'
    },
    showWordCount: {
      control: 'boolean',
      description: 'Whether to show word count below the editor'
    },
    allowPasteFormatting: {
      control: 'boolean',
      description: 'Whether to allow pasted content to retain formatting (false = plain text only)'
    },
    allowPasteImages: {
      control: 'boolean',
      description: 'Whether to allow images to be pasted into the editor'
    },
    showAdditionalFeatures: {
      control: 'boolean',
      description: 'Show code and link features in addition to standard tools'
    },
    validateUrls: {
      control: 'boolean',
      description: 'Whether to validate URLs in the link popover'
    },
    autoProtocol: {
      control: 'boolean',
      description: 'Whether to automatically add https:// protocol to links without a protocol'
    },
    suppressErrors: {
      control: 'boolean',
      description: 'Whether to suppress error logging to console (useful for debugging)'
    }
  },
  args: {
    content: '',
    disabled: false,
    readOnly: false,
    maxLength: 0,
    errorMessage: '',
    showCharacterCount: false,
    showWordCount: false,
    allowPasteFormatting: true,
    allowPasteImages: false,
    showAdditionalFeatures: true,
    validateUrls: true,
    autoProtocol: true,
    suppressErrors: false
  }
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Demo: Story = {};
