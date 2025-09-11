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
 * @description
 * This component is responsible for rendering rich text content (either ProseMirror JSON or HTML string) in either a
 * editable or read-only mode.
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
