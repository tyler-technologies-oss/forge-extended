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

export const OutputFormats: Story = {
  render: () => {
    const sampleContent =
      '<h1>Sample Document</h1><p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p><ul><li><p>Bullet item 1</p></li><li><p>Bullet item 2</p></li></ul>';

    const handleGetJSON = (e: Event) => {
      const editor = (e.target as HTMLElement).previousElementSibling as any;
      const json = editor.toJSON();
      const output = document.getElementById('json-output');
      if (output) {
        output.textContent = JSON.stringify(json, null, 2);
      }
      console.log('JSON Output:', json);
    };

    const handleGetHTML = (e: Event) => {
      const editor = (e.target as HTMLElement).parentElement?.previousElementSibling as any;
      const htmlContent = editor.toHTML();
      const output = document.getElementById('html-output');
      if (output) {
        output.textContent = htmlContent;
      }
      console.log('HTML Output:', htmlContent);
    };

    return html`
      <style>
        .output-demo {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .output-buttons {
          display: flex;
          gap: 8px;
        }
        .output-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .output-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .output-section h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }
        .output-content {
          background: var(--forge-theme-surface-container);
          border: 1px solid var(--forge-theme-outline);
          border-radius: 4px;
          padding: 12px;
          font-family: monospace;
          font-size: 12px;
          white-space: pre-wrap;
          word-break: break-all;
          max-height: 300px;
          overflow: auto;
        }
      </style>
      <div class="output-demo">
        <forge-rich-text-editor .content=${sampleContent}>
          <forge-rte-standard-tools></forge-rte-standard-tools>
        </forge-rich-text-editor>

        <div class="output-buttons">
          <button @click=${handleGetJSON}>Get JSON Output</button>
          <button @click=${handleGetHTML}>Get HTML Output</button>
        </div>

        <div class="output-display">
          <div class="output-section">
            <h3>JSON Output (ProseMirror format)</h3>
            <div class="output-content" id="json-output">Click "Get JSON Output" to see the editor content as JSON</div>
          </div>

          <div class="output-section">
            <h3>HTML Output</h3>
            <div class="output-content" id="html-output">Click "Get HTML Output" to see the editor content as HTML</div>
          </div>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story:
          'The rich text editor provides `toJSON()` and `toHTML()` methods to export content in different formats. Use `toJSON()` to get the ProseMirror document structure for storage or processing, and `toHTML()` to get a clean HTML string for display or further processing.'
      }
    }
  }
};
