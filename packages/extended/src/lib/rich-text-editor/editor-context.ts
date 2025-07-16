import { createContext } from '@lit/context';
import { Editor, Extensions } from '@tiptap/core';
import type { RichTextContextComponent } from './rich-text-context';

/**
 * The shape of the editor context that will be provided to sub-components.
 */
export interface EditorContext {
  /** The TipTap editor instance */
  readonly editor: Editor | null;

  /** The registered Tiptap features */
  readonly extensions: Extensions;

  /** Whether the editor is disabled */
  readonly disabled: boolean;

  /** Whether the editor is in read-only mode */
  readonly readOnly: boolean;

  readonly contextElement: RichTextContextComponent;
}

/**
 * The Lit context that will be provided by the Rich Text Editor component
 * and consumed by sub-components
 */
export const editorContext = createContext<EditorContext>('forge-rich-text-editor-context');
