import { RichTextEditorComponent, RichTextEditorComponentTagName } from './rich-text-editor';
import { tryDefine } from '@tylertech/forge-core';

export * from './rich-text-editor';

export function defineRichTextEditorComponent(): void {
  tryDefine(RichTextEditorComponentTagName, RichTextEditorComponent);
}
