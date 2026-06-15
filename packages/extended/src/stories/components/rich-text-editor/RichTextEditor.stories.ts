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

export const BasicUsage: Story = {
  args: {
    showAdditionalFeatures: false
  },
  parameters: {
    docs: {
      description: {
        story:
          'A simple rich text editor with only the standard formatting tools. This is the recommended starting point for most applications.'
      }
    }
  }
};

export const FullFeatured: Story = {
  args: {
    showAdditionalFeatures: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'A fully-featured editor with all available formatting options including code blocks and hyperlinks. Use this when you need maximum formatting flexibility.'
      }
    }
  }
};

export const ContentValidation: Story = {
  args: {
    maxLength: 500,
    showCharacterCount: true,
    showWordCount: true,
    errorMessage: 'Content exceeds the maximum length of 500 characters',
    content:
      '<p>Start typing to see character and word counts. Try exceeding 500 characters to see validation errors.</p>'
  },
  parameters: {
    docs: {
      description: {
        story:
          'The editor supports content validation with character limits, character counts, and word counts. Custom error messages are displayed when validation fails. The `validation` event is emitted whenever validation state changes.'
      }
    }
  }
};

export const DisabledState: Story = {
  args: {
    disabled: true,
    content:
      '<h2>Disabled Editor</h2><p>This editor is <strong>disabled</strong> and cannot be edited. All toolbar buttons are also disabled.</p>'
  },
  parameters: {
    docs: {
      description: {
        story:
          'When disabled, the editor prevents all interactions. The content remains visible but cannot be modified, and toolbar buttons are disabled.'
      }
    }
  }
};

export const ReadOnlyState: Story = {
  args: {
    readOnly: true,
    content:
      '<h2>Read-Only Editor</h2><p>This editor is <strong>read-only</strong>. You can select and copy text, but cannot modify the content. Toolbar buttons are disabled.</p>'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Read-only mode allows users to view and select content without making changes. This is useful for displaying content that should not be modified but may need to be copied.'
      }
    }
  }
};

export const PrePopulatedContent: Story = {
  args: {
    content: `
      <h1>Welcome to the Rich Text Editor</h1>
      <p>This editor comes pre-populated with <strong>formatted content</strong> including:</p>
      <ul>
        <li><p><strong>Bold</strong> and <em>italic</em> text</p></li>
        <li><p><u>Underlined</u> and <s>strikethrough</s> text</p></li>
        <li><p>Multiple heading levels</p></li>
      </ul>
      <h2>Formatting Examples</h2>
      <p style="text-align: center">This paragraph is center-aligned.</p>
      <p style="text-align: right">This paragraph is right-aligned.</p>
      <ol>
        <li><p>Numbered lists work too</p></li>
        <li><p>With multiple items</p></li>
        <li><p>And proper formatting</p></li>
      </ol>
      <h3>Additional Features</h3>
      <p>Try selecting text and applying different formatting options using the toolbar above!</p>
    `
  },
  parameters: {
    docs: {
      description: {
        story:
          'The editor accepts pre-populated HTML content through the `content` property. This is useful for editing existing documents or providing templates with default formatting.'
      }
    }
  }
};

export const PasteHandling: Story = {
  args: {
    allowPasteFormatting: false,
    content:
      '<p>Try pasting content from Word, Google Docs, or any formatted source. With <code>allowPasteFormatting</code> set to <code>false</code>, only plain text will be preserved.</p>'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Control how pasted content is handled with `allowPasteFormatting`. When false, all formatting is stripped and only plain text is inserted. Use Ctrl+Shift+V (Cmd+Shift+V on Mac) for plain text paste regardless of this setting.'
      }
    }
  }
};

export const LinkFeatures: Story = {
  render: () => {
    return html`
      <forge-rich-text-editor>
        <forge-rte-standard-tools></forge-rte-standard-tools>
        <forge-rte-feature-divider></forge-rte-feature-divider>
        <forge-rte-link validate-urls auto-protocol></forge-rte-link>
      </forge-rich-text-editor>
      <div
        style="margin-block-start: 16px; padding: 12px; background: var(--forge-theme-surface-container); border-radius: 4px;">
        <h3 style="margin-block-start: 0;">Link Features</h3>
        <ul style="margin-block-end: 0;">
          <li><strong>URL Validation:</strong> Invalid URLs show an error message</li>
          <li><strong>Auto Protocol:</strong> URLs without http:// or https:// get https:// automatically added</li>
          <li>
            <strong>Security:</strong> Links open in new tabs with security attributes (noopener, noreferrer, nofollow)
          </li>
        </ul>
        <p style="margin-block-end: 0;">
          <em>Try it:</em> Select text and click the link button. Try entering "example.com" to see auto-protocol in
          action.
        </p>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story:
          'The link feature includes URL validation and automatic protocol addition. Invalid URLs are prevented, and links without a protocol automatically get https:// prepended for convenience.'
      }
    }
  }
};

export const ComposedLayout: Story = {
  render: () => {
    return html`
      <style>
        .composed-demo {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .toolbar-card {
          padding: 12px;
          background: var(--forge-theme-surface-container);
          border: 1px solid var(--forge-theme-outline);
          border-radius: 8px;
        }
        .content-card {
          padding: 12px;
          background: var(--forge-theme-surface);
          border: 1px solid var(--forge-theme-outline);
          border-radius: 8px;
          min-block-size: 200px;
        }
      </style>
      <div class="composed-demo">
        <forge-rich-text-context>
          <div class="toolbar-card">
            <forge-rte-standard-tools></forge-rte-standard-tools>
            <forge-rte-feature-divider></forge-rte-feature-divider>
            <forge-rte-code></forge-rte-code>
            <forge-rte-link></forge-rte-link>
          </div>
          <div class="content-card">
            <forge-rich-text-content></forge-rich-text-content>
          </div>
        </forge-rich-text-context>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story:
          'For advanced layouts, use `<forge-rich-text-context>` to separate the toolbar from the content area. This allows you to position the toolbar independently, create fixed toolbars, or implement custom layouts with multiple content sections.'
      }
    }
  }
};

export const RendererComponent: Story = {
  render: () => {
    const sampleContent = `
      <h1>Document Title</h1>
      <p>This content is displayed in <strong>read-only mode</strong> using the <code>&lt;forge-rich-text-renderer&gt;</code> component.</p>
      <h2>Key Features</h2>
      <ul>
        <li><p>Displays rich text without editing capabilities</p></li>
        <li><p>Preserves all formatting and structure</p></li>
        <li><p>No toolbar or interactive elements</p></li>
        <li><p>Ideal for displaying saved content</p></li>
      </ul>
      <p style="text-align: center"><em>Perfect for blog posts, comments, or any read-only content display.</em></p>
    `;

    return html` <forge-rich-text-renderer .content=${sampleContent}></forge-rich-text-renderer> `;
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `<forge-rich-text-renderer>` to display rich text content without editing capabilities. This component renders the same formatted content as the editor but without any interactive elements or toolbar.'
      }
    }
  }
};

export const FormIntegration: Story = {
  render: () => {
    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const editor = form.querySelector('forge-rich-text-editor') as any;
      const titleInput = form.querySelector('input[name="title"]') as HTMLInputElement;

      const data = {
        title: titleInput.value,
        content: editor.toHTML(),
        contentJSON: editor.toJSON()
      };

      alert(`Form submitted!\n\nTitle: ${data.title}\n\nContent (HTML): ${data.content.substring(0, 100)}...`);
      console.log('Form data:', data);
    };

    return html`
      <style>
        .form-demo {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-inline-size: 800px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-field label {
          font-weight: 600;
          font-size: 14px;
        }
        .form-field input {
          padding: 8px 12px;
          border: 1px solid var(--forge-theme-outline);
          border-radius: 4px;
          font-size: 14px;
        }
        .form-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }
        .form-actions button {
          padding: 8px 16px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          font-size: 14px;
        }
        .form-actions button[type='submit'] {
          background: var(--forge-theme-primary);
          color: var(--forge-theme-on-primary);
        }
        .form-actions button[type='reset'] {
          background: var(--forge-theme-surface-container);
          color: var(--forge-theme-on-surface);
          border: 1px solid var(--forge-theme-outline);
        }
      </style>
      <form @submit=${handleSubmit} class="form-demo">
        <div class="form-field">
          <label for="title">Document Title *</label>
          <input type="text" id="title" name="title" required placeholder="Enter document title" />
        </div>

        <div class="form-field">
          <label for="editor">Content *</label>
          <forge-rich-text-editor id="editor" max-length="1000" show-character-count>
            <forge-rte-standard-tools></forge-rte-standard-tools>
            <forge-rte-feature-divider></forge-rte-feature-divider>
            <forge-rte-code></forge-rte-code>
            <forge-rte-link></forge-rte-link>
          </forge-rich-text-editor>
        </div>

        <div class="form-actions">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    `;
  },
  parameters: {
    docs: {
      description: {
        story:
          'Integrate the rich text editor into forms by using `toHTML()` or `toJSON()` methods to extract content on form submission. The editor supports validation with character limits and emits validation events that can be used for form validation.'
      }
    }
  }
};

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
