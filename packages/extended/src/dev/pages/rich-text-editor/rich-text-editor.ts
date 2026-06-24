import '$dev/shared';
import './rich-text-editor.scss';
import '$lib/rich-text-editor';
import '$lib/rich-text-editor/features/rte-bold';
import '$lib/rich-text-editor/features/rte-italic';
import '$lib/rich-text-editor/features/rte-underline';
import '$lib/rich-text-editor/features/rte-strike';
import '$lib/rich-text-editor/features/rte-code';
import '$lib/rich-text-editor/features/rte-bullet-list';
import '$lib/rich-text-editor/features/rte-ordered-list';
import '$lib/rich-text-editor/features/rte-undo-redo';
import '$lib/rich-text-editor/features/rte-feature-divider';
import { type RichTextEditorComponent } from '$lib/rich-text-editor';

const richTextEditor = document.querySelector('forge-rich-text-editor') as RichTextEditorComponent;
richTextEditor.addEventListener('change', (evt: CustomEvent) => {
  console.log('Rich Text Editor Change Event:', evt.detail);
});
