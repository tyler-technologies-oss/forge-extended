import { DocumentType, NodeType, TextType } from '@tiptap/core';
import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './rich-text-renderer.scss?inline';

/**
 * Type representing rich text content in TipTap's ProseMirror JSON format.
 * This is a complex generic type from TipTap that represents the document structure.
 * The `any` types here are TipTap's internal representation and cannot be avoided
 * without importing the entire TipTap schema system.
 *
 * This format is produced by the editor's `toJSON()` method and can be consumed
 * by this renderer component for read-only display.
 */
export type RichTextRendererContent = DocumentType<
  // Document attributes (TipTap internal format - schema-dependent)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Record<string, any> | undefined,
  // Node types array (TipTap internal format - extension-dependent)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  NodeType<string, undefined | Record<string, any>, any, (NodeType | TextType)[]>[]
>;

declare global {
  interface HTMLElementTagNameMap {
    'forge-rich-text-renderer': RichTextRendererComponent;
  }
}

export const RichTextRendererComponentTagName: keyof HTMLElementTagNameMap = 'forge-rich-text-renderer';

/**
 * @tag forge-rich-text-renderer
 *
 * @summary
 * Renders rich text content in a read-only format for display purposes.
 *
 * @description
 * This component is responsible for rendering rich text content in a read-only mode. It accepts
 * content in ProseMirror JSON format (the same format produced by the editor's change event) and
 * displays it with proper formatting. Use this component to display rich text content that was
 * created with the forge-rich-text-editor component.
 *
 * @property {RichTextRendererContent} content - The content to render in ProseMirror JSON format.
 */
@customElement(RichTextRendererComponentTagName)
export class RichTextRendererComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: Object })
  public content?: RichTextRendererContent;

  public override render(): TemplateResult {
    return html`<div>Renderer</div>`;
  }
}
