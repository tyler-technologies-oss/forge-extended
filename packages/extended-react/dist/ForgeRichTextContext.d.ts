import React from "react";
import { ForgeRichTextContext as ForgeRichTextContextElement } from "@tylertech/forge-extended/rich-text-editor";

export type { ForgeRichTextContextElement };

export interface ForgeRichTextContextProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | "children"
    | "dir"
    | "hidden"
    | "id"
    | "lang"
    | "slot"
    | "style"
    | "title"
    | "translate"
    | "onClick"
    | "onFocus"
    | "onBlur"
  > {
  /** Whether the editor is disabled. */
  disabled?: boolean;

  /** Whether the editor is in readonly mode. */
  readOnly?: boolean;

  /** Whether to show character count below the editor. */
  showCharacterCount?: boolean;

  /** Whether to show word count below the editor. */
  showWordCount?: boolean;

  /** Whether to allow pasted content to retain formatting. When false, all pasted content is treated as plain text. */
  allowPasteFormatting?: boolean;

  /** Whether to allow images to be pasted into the editor. */
  allowPasteImages?: boolean;

  /** Whether to suppress error logging to console (useful for debugging). */
  suppressErrors?: boolean;

  /** The ID of the element to instantiate the editor against. */
  editorId?: ForgeRichTextContextElement["editorId"];

  /** The HTML content of the editor. */
  content?: ForgeRichTextContextElement["content"];

  /** Maximum character length allowed. 0 means no limit. */
  maxLength?: ForgeRichTextContextElement["maxLength"];

  /** Error message to display when validation fails. */
  errorMessage?: ForgeRichTextContextElement["errorMessage"];

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

  /** Used for labels to link them with their inputs (using input id). */
  htmlFor?: string;

  /** Used to help React identify which items have changed, are added, or are removed within a list. */
  key?: number | string;

  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: any;

  /** Allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the `Tab` key, hence the name) and determine their relative ordering for sequential focus navigation. */
  tabIndex?: number;

  /** Provide the editor context to child components. */
  editorContext?: ForgeRichTextContextElement["editorContext"];

  /** Returns whether the editor has been successfully initialized. */
  isInitialized?: ForgeRichTextContextElement["isInitialized"];

  /** Returns the initialization error message, if any. */
  initializationError?: ForgeRichTextContextElement["initializationError"];

  /** Fired when validation state changes. The detail contains validation status and error messages. */
  onValidation?: (
    event: CustomEvent<CustomEvent<RichTextEditorValidationEventDetail>>,
  ) => void;

  /** Fired when the content of the editor changes. The detail contains the editor content in ProseMirror JSON format. */
  onChange?: (
    event: CustomEvent<CustomEvent<RichTextEditorChangeEventDetail>>,
  ) => void;

  /** Fired when the editor has been successfully initialized. */
  onInitialized?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fired when editor initialization fails. The detail contains the error message. */
  onInitializationError?: (
    event: CustomEvent<
      CustomEvent<RichTextEditorInitializationErrorEventDetail>
    >,
  ) => void;

  /** Fired when a non-fatal error occurs during editor operation. The detail contains context and error message. */
  onError?: (
    event: CustomEvent<CustomEvent<RichTextEditorErrorEventDetail>>,
  ) => void;
}

/**
 * Provides the editor context for composed rich text editor layouts where toolbar and content are separated.
 * ---
 *
 *
 * ### **Events:**
 *  - **validation** - Fired when validation state changes. The detail contains validation status and error messages.
 * - **change** - Fired when the content of the editor changes. The detail contains the editor content in ProseMirror JSON format.
 * - **initialized** - Fired when the editor has been successfully initialized.
 * - **initialization-error** - Fired when editor initialization fails. The detail contains the error message.
 * - **error** - Fired when a non-fatal error occurs during editor operation. The detail contains context and error message.
 *
 * ### **Methods:**
 *  - **toJSON(): _object | undefined_** - Returns the editor content as JSON. Returns undefined if editor is not initialized or if an error occurs.
 * - **toHTML(): _string_** - Returns the editor content as HTML. Returns empty string if editor is not initialized or if an error occurs.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for toolbar components and forge-rich-text-content.
 */
export const ForgeRichTextContext: React.ForwardRefExoticComponent<ForgeRichTextContextProps>;
