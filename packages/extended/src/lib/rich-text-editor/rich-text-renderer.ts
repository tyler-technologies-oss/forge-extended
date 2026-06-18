import { type AnyExtension, DocumentType, Editor as TipTapEditor, NodeType, TextType } from '@tiptap/core';
import { Document } from '@tiptap/extension-document';
import { Paragraph } from '@tiptap/extension-paragraph';
import { Text } from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Code from '@tiptap/extension-code';
import { BulletList, ListItem, OrderedList } from '@tiptap/extension-list';
import Link from '@tiptap/extension-link';
import Heading from '@tiptap/extension-heading';
import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

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

// Default extensions for the renderer - matches all editor features
const DEFAULT_EXTENSIONS: AnyExtension[] = [
  Document,
  Paragraph,
  Text,
  Bold,
  Italic,
  Underline,
  Strike,
  Code,
  BulletList,
  OrderedList,
  ListItem,
  Heading.configure({ levels: [1, 2, 3] }),
  Link.configure({
    openOnClick: true,
    HTMLAttributes: {
      target: '_blank',
      rel: 'noopener noreferrer nofollow'
    }
  }),
  TextAlign.configure({
    types: ['heading', 'paragraph']
  })
];

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
 * The renderer supports all formatting features available in the editor:
 * - Text formatting (bold, italic, underline, strikethrough, code)
 * - Headings (H1, H2, H3)
 * - Lists (bulleted, numbered)
 * - Text alignment (left, center, right, justify)
 * - Links (clickable with security attributes)
 *
 * @property {RichTextRendererContent} content - The content to render in ProseMirror JSON format.
 */
@customElement(RichTextRendererComponentTagName)
export class RichTextRendererComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: Object })
  public content?: RichTextRendererContent;

  @query('.renderer-content')
  private _contentElement?: HTMLElement;

  private _editor?: TipTapEditor;

  public override connectedCallback(): void {
    super.connectedCallback();
    this._initializeEditor();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._destroyEditor();
  }

  public override willUpdate(changedProperties: Map<string | symbol, unknown>): void {
    if (changedProperties.has('content') && this._editor) {
      this._updateContent();
    }
  }

  private _initializeEditor(): void {
    // Wait for first render to get the content element
    this.updateComplete.then(() => {
      if (!this._contentElement) {
        return;
      }

      try {
        this._editor = new TipTapEditor({
          element: this._contentElement,
          extensions: DEFAULT_EXTENSIONS,
          editable: false,
          content: this.content
        });
      } catch (error) {
        console.error('[RichTextRenderer] Failed to initialize editor:', error);
      }
    });
  }

  private _destroyEditor(): void {
    if (this._editor) {
      this._editor.destroy();
      this._editor = undefined;
    }
  }

  private _updateContent(): void {
    if (!this._editor) {
      return;
    }

    try {
      if (this.content) {
        const sanitized = this.#sanitizeContent(this.content);
        this._editor.commands.setContent(sanitized);
      } else {
        this._editor.commands.clearContent();
      }
    } catch (error) {
      console.error('[RichTextRenderer] Failed to update content:', error);
    }
  }

  /**
   * Sanitizes content before rendering.
   * CRITICAL: Renderer displays content to ALL users, so untrusted content MUST be sanitized.
   */
  #sanitizeContent(content: unknown): unknown {
    if (!content || typeof content !== 'object') {
      return content;
    }

    const MAX_DEPTH = 50;
    const MAX_NODES = 5000;
    let nodeCount = 0;

    const sanitize = (node: unknown, depth: number): unknown => {
      if (depth > MAX_DEPTH) {
        throw new Error('Maximum nesting depth exceeded');
      }

      if (++nodeCount > MAX_NODES) {
        throw new Error('Maximum node count exceeded');
      }

      if (!node || typeof node !== 'object') {
        return node;
      }

      const n = node as Record<string, unknown>;

      // Sanitize link marks
      if (n.type === 'link' || (n.attrs && typeof n.attrs === 'object')) {
        const attrs = n.attrs as Record<string, unknown>;
        if (attrs.href && typeof attrs.href === 'string') {
          const href = attrs.href.toLowerCase().trim();

          const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:', 'about:', 'blob:'];

          for (const protocol of dangerousProtocols) {
            if (href.includes(protocol)) {
              console.warn('[RichTextRenderer] Blocked dangerous protocol:', attrs.href);
              attrs.href = '#';
              break;
            }
          }
        }
      }

      // Recursively sanitize
      if (Array.isArray(n.content)) {
        n.content = n.content.map(child => sanitize(child, depth + 1));
      }
      if (Array.isArray(n.marks)) {
        n.marks = n.marks.map(mark => sanitize(mark, depth + 1));
      }

      return n;
    };

    try {
      return sanitize(content, 0);
    } catch (error) {
      console.error('[RichTextRenderer] Content sanitization failed:', error);
      return { type: 'doc', content: [] }; // Return empty document on error
    }
  }

  public override render(): TemplateResult {
    return html` <div class="renderer-content" role="article" aria-label="Rich text content"></div> `;
  }
}
