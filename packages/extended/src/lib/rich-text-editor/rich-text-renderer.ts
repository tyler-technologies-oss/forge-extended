import { DocumentType, NodeType, TextType } from '@tiptap/core';
import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './rich-text-renderer.scss?inline';

export type RichTextRendererContent = DocumentType<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Record<string, any> | undefined,
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
