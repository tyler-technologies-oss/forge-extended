import { provide } from '@lit/context';
import { Editor } from '@tiptap/core';
import { html, LitElement, PropertyValues, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { editorContext, EditorContext } from './editor-context';

import styles from './rich-text-editor.scss?inline';
import { RichTextContextComponent } from './rich-text-context';

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

  /** The content of the editor. */
  @property({ type: String })
  public content = '';

  /** Whether the editor is disabled. */
  @property({ type: Boolean })
  public disabled = false;

  /** Whether the editor is in readonly mode. */
  @property({ type: Boolean, attribute: 'readonly' })
  public readOnly = false;

  /** The Tiptap editor instance. */
  @state()
  private _editor: Editor | null = null;

  #toolElements: Set<LitElement> = new Set();
  #initFrame: number | null = null;
  #contextElementRef = createRef<RichTextContextComponent>();

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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    contextElement: this.#contextElementRef.value!,
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

  // public override firstUpdated(changedProps: PropertyValues<this>): void {
  //   super.firstUpdated(changedProps);
  //   this._initEditor();
  // }

  public override updated(changedProps: PropertyValues<this>): void {
    super.updated(changedProps);

    if (changedProps.has('content') && this._editor && this.content !== this._editor.getHTML()) {
      this._editor.commands.setContent(this.content);
    }

    if (changedProps.has('disabled') || changedProps.has('readOnly')) {
      this._editor?.setEditable(!(this.disabled || this.readOnly));

      // Update context for extension components
      this._editorContext = {
        ...this._editorContext,
        disabled: this.disabled,
        readOnly: this.readOnly
      };
    }
  }

  public override render(): TemplateResult {
    return html`
      <forge-rich-text-context ${ref(this.#contextElementRef)}>
        <div class="forge-rich-text-editor">
          <div class="editor-toolbar" role="toolbar">
            <forge-rich-text-features>
              <slot></slot>
            </forge-rich-text-features>
          </div>
          <div class="editor-content-wrapper">
            <div id="editor" class="editor-content" role="textbox"></div>
            <forge-focus-indicator inward target="editor"></forge-focus-indicator>
          </div>
        </div>
      </forge-rich-text-context>
    `;
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
