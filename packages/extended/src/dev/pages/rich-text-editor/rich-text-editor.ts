import '$dev/shared';
import './rich-text-editor.scss';
import '$lib/rich-text-editor';
import { type RichTextEditorComponent } from '$lib/rich-text-editor';

const richTextEditor = document.querySelector('forge-rich-text-editor') as RichTextEditorComponent;
richTextEditor.addEventListener('change', (evt: CustomEvent) => {
  console.log('Rich Text Editor Change Event:', evt.detail);
});
