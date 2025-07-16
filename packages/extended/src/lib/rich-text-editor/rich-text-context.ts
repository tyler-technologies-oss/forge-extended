import { provide } from '@lit/context';
import { Editor } from '@tiptap/core';
import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from './editor-context';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rich-text-context': RichTextContextComponent;
  }
}

export const RichTextContextComponentTagName: keyof HTMLElementTagNameMap = 'forge-rich-text-context';

/**
 * @tag forge-rich-text-context
 */
@customElement(RichTextContextComponentTagName)
export class RichTextContextComponent extends LitElement {
  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  @state()
  private _editor: Editor | null = null;

  #toolElements: Set<LitElement> = new Set();
  #initFrame: number | null = null;

  public registerToolElement(tool: LitElement): void {
    this.#toolElements.add(tool);

    if (this.#initFrame) {
      window.cancelAnimationFrame(this.#initFrame);
      this.#initFrame = null;
    }

    this.#initFrame = window.requestAnimationFrame(() => this.#initEditor());
  }

  /** Provide the editor context to child components. */
  @provide({ context: editorContext })
  protected _editorContext: EditorContext = {
    contextElement: this,
    editor: null,
    extensions: [],
    disabled: false,
    readOnly: false
  };

  @query('.editor-content')
  private _editorElement!: HTMLElement;

  public override disconnectedCallback(): void {
    this.#destroyEditor();
    super.disconnectedCallback();
  }

  public override render(): TemplateResult {
    return html`<slot></slot>`;
  }

  #initEditor(): void {
    if (!this._editorElement) {
      return;
    }

    this._editor?.destroy();

    const tools = Array.from(this.#toolElements).flatMap(toolEl => (toolEl as any).tools);

    this._editor = new Editor({
      element: this._editorElement,
      extensions: tools,
      content: this.content,
      editable: !(this.disabled || this.readOnly),
      injectCSS: false,
      onTransaction: () => {
        this.#toolElements.forEach(tool => tool.requestUpdate());
        // this.requestUpdate();
      },
      coreExtensionOptions: {
        clipboardTextSerializer: {
          blockSeparator: '\n'
        }
      },
      onUpdate: ({ editor }) => {
        const content = editor.getHTML();
        if (content !== this.content) {
          this.content = content;
          this.dispatchEvent(
            new CustomEvent('change', {
              detail: { content },
              bubbles: true,
              composed: true
            })
          );
        }
      }
    });

    // Update context with the new editor instance
    this._editorContext = {
      ...this._editorContext,
      editor: this._editor
    };
  }

  /**
   * Destroys the editor instance.
   */
  #destroyEditor(): void {
    this._editor?.destroy();
    this._editor = null;
  }
}
