import { type Meta, type StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { defineStackComponent } from '@tylertech/forge';
import { ForgeAiFilePickerComponent, type AiFilePickerChangeEventData } from '$lib/ai/ai-file-picker';
import { standaloneStoryParams } from '../../../../utils';
import { action } from 'storybook/actions';

import '$lib/ai/ai-file-picker';

defineStackComponent();

const component = 'forge-ai-file-picker';
const fileChangeAction = action('forge-ai-file-picker-change');

const meta = {
  title: 'AI/Primitives/File Picker',
  component,
  render: args => {
    function handleFileChange(event: CustomEvent<AiFilePickerChangeEventData>) {
      fileChangeAction(event.detail);
      console.log('File selected:', event.detail.file);
    }

    return html`
      <forge-stack gap="24">
        <forge-ai-file-picker
          .variant=${args.variant}
          .disabled=${args.disabled}
          .accept=${args.accept}
          .multiple=${args.multiple}
          @forge-ai-file-picker-change=${handleFileChange}>
          ${args.variant === 'button' ? 'Upload File' : html`<forge-icon slot="icon" name="add"></forge-icon>`}
        </forge-ai-file-picker>
        <div>Selected file details will appear in the Actions tab below when a file is selected.</div>
      </forge-stack>
    `;
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['button', 'icon-button'],
      description: 'The variant of the file picker button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the file picker is disabled'
    },
    accept: {
      control: 'text',
      description: 'Accepted file types (comma-separated MIME types or extensions)'
    },
    multiple: {
      control: 'boolean',
      description: 'Whether to allow multiple file selection'
    }
  },
  args: {
    variant: 'button',
    disabled: false,
    accept: '',
    multiple: false
  }
} satisfies Meta<ForgeAiFilePickerComponent>;

export default meta;

type Story = StoryObj<ForgeAiFilePickerComponent>;

export const Demo: Story = {
  ...standaloneStoryParams
};

export const IconButton: Story = {
  ...standaloneStoryParams,
  args: {
    variant: 'icon-button'
  }
};

export const ImageOnly: Story = {
  ...standaloneStoryParams,
  args: {
    accept: 'image/*'
  }
};

export const Multiple: Story = {
  ...standaloneStoryParams,
  args: {
    multiple: true
  }
};

export const Disabled: Story = {
  ...standaloneStoryParams,
  args: {
    disabled: true
  }
};
