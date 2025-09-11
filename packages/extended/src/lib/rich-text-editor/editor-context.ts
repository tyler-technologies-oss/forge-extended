import { createContext } from '@lit/context';
import { Editor } from '@tiptap/core';
import { RichTextEditorFeature } from './features/rich-text-editor-feature';

/**
 * The shape of the editor context that will be provided to sub-components.
 */
export interface EditorContext {
  /** The TipTap editor instance */
  readonly editor: Editor | null;

  /** Whether the editor is disabled */
  readonly disabled: boolean;

  /** Whether the editor is read-only */
  readonly readOnly: boolean;

  /** Determines if a feature is active. */
  isActive(identifier: string | object): boolean;

  /** Whether the editor is editable. */
  isEditable(): boolean;

  /** The text content of the editor */
  content: string;

  /** Sets the element to instantiate the editor against. */
  setEditorElement: (element: HTMLElement) => void;

  /** Register a new feature (extension) with the editor */
  registerFeature: (feature: RichTextEditorFeature) => void;
}

/**
 * The Lit context that will be provided by the Rich Text Editor component
 * and consumed by sub-components
 */
export const editorContext = createContext<EditorContext>('forge-rich-text-editor-context');
