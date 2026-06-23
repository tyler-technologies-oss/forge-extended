import '$dev/shared';
import './rich-text-editor.scss';
import '$lib/rich-text-editor';
import '$lib/rich-text-editor/features/rte-heading';
import '$lib/rich-text-editor/features/rte-align';
import '$lib/rich-text-editor/features/rte-standard-tools';
import '$lib/rich-text-editor/features/rte-feature-divider';
import '$lib/rich-text-editor/features/rte-link';
import { type RichTextEditorComponent } from '$lib/rich-text-editor';
import { type RichTextRendererComponent } from '$lib/rich-text-editor/rich-text-renderer';

const richTextEditor = document.querySelector('forge-rich-text-editor') as RichTextEditorComponent;
richTextEditor.addEventListener('change', (evt: CustomEvent) => {
  console.log('Rich Text Editor Change Event:', evt.detail);
});

const richTextRenderer = document.querySelector('forge-rich-text-renderer') as RichTextRendererComponent;
richTextRenderer.content = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      attrs: { textAlign: 'left' },
      content: [{ type: 'text', text: 'Sample rendered content.' }]
    }
  ]
} as unknown as RichTextRendererComponent['content'];
