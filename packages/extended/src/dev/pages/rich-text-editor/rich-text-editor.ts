import '$dev/shared';
import './rich-text-editor.scss';
import '$lib/rich-text-editor';
import '$lib/rich-text-editor/features/rte-standard-tools';
// import '$lib/rich-text-editor/features/rte-bold';
// import '$lib/rich-text-editor/features/rte-italic';
// import '$lib/rich-text-editor/features/rte-underline';
import '$lib/rich-text-editor/features/rte-code';
import '$lib/rich-text-editor/features/rte-link';
import '$lib/rich-text-editor/rich-text-renderer';
import { type RichTextEditorComponent } from '$lib/rich-text-editor';

const richTextEditor = document.querySelector('forge-rich-text-editor') as RichTextEditorComponent;
richTextEditor.addEventListener('change', (evt: CustomEvent) => {
  console.log('Rich Text Editor Change Event:', evt.detail);
});
