import { LitElement, TemplateResult, html, unsafeCSS, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

import styles from './rich-text-editor.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rich-text-editor': RichTextEditorComponent;
  }
}

export const RichTextEditorComponentTagName: keyof HTMLElementTagNameMap = 'forge-rich-text-editor';

/**
 * @tag forge-rich-text-editor
 */
@customElement(RichTextEditorComponentTagName)
export class RichTextEditorComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * The content of the editor.
   */
  @property({ type: String })
  public content = '';

  /**
   * Whether the editor is disabled.
   */
  @property({ type: Boolean })
  public disabled = false;

  /**
   * Whether the editor is in readonly mode.
   */
  @property({ type: Boolean, attribute: 'readonly' })
  public readOnly = false;

  /**
   * The Tiptap editor instance.
   */
  @state()
  private _editor: Editor | null = null;

  @query('.editor-content')
  private _editorElement!: HTMLElement;

  public override disconnectedCallback(): void {
    this._destroyEditor();
    super.disconnectedCallback();
  }

  public override firstUpdated(changedProps: PropertyValues<this>): void {
    super.firstUpdated(changedProps);
    this._initEditor();
  }

  public override updated(changedProps: PropertyValues<this>): void {
    super.updated(changedProps);

    if (changedProps.has('content') && this._editor && this.content !== this._getEditorContent()) {
      this._editor.commands.setContent(this.content);
    }

    if ((changedProps.has('disabled') || changedProps.has('readOnly')) && this._editor) {
      this._editor.setEditable(!(this.disabled || this.readOnly));
    }
  }

  public override render(): TemplateResult {
    return html`
      <div class="forge-rich-text-editor">
        <div class="editor-content"></div>
      </div>
    `;
  }

  /**
   * Initializes the Tiptap editor when the DOM is ready.
   */
  private _initEditor(): void {
    if (!this._editorElement) {
      return;
    }

    this._editor = new Editor({
      element: this._editorElement,
      extensions: [StarterKit],
      content: this.content,
      editable: !(this.disabled || this.readOnly),
      onUpdate: ({ editor }) => {
        const newContent = editor.getHTML();
        if (newContent !== this.content) {
          this.content = newContent;
          this.dispatchEvent(
            new CustomEvent('change', {
              detail: { content: newContent },
              bubbles: true,
              composed: true
            })
          );
        }
      }
    });
  }

  /**
   * Destroys the editor instance.
   */
  private _destroyEditor(): void {
    this._editor?.destroy();
    this._editor = null;
  }

  /**
   * Gets the HTML content from the editor.
   */
  private _getEditorContent(): string {
    return this._editor?.getHTML() ?? '';
  }
}
