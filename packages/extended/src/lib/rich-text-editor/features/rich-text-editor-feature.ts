import { AnyExtension } from '@tiptap/core';

export interface RichTextEditorFeature {
  readonly tools: AnyExtension[];
  requestUpdate(): void;
}
