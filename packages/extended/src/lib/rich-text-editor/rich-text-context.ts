import { provide } from '@lit/context';
import { Editor as TipTapEditor } from '@tiptap/core';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from './editor-context';
import { RichTextEditorFeature } from './features/rich-text-editor-feature';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rich-text-context': RichTextContextComponent;
  }
}

export const RichTextContextComponentTagName: keyof HTMLElementTagNameMap = 'forge-rich-text-context';

/**
 * @tag forge-rich-text-context
 *
 * @description
 * This component provides the context for the rich text editor and all auxiliary components.
 * It initializes the editor and provides methods to set the editor element and register features.
 * It also provides the editor context to child components.
 */
@customElement(RichTextContextComponentTagName)
export class RichTextContextComponent extends LitElement {
  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  /** The ID of the element to instantiate the editor against. */
  @property({ type: String, attribute: 'editor-id' })
  public editorId = 'editor';

  /** The content of the editor. */
  @property({ type: String })
  public content = '';

  /** Whether the editor is disabled. */
  @property({ type: Boolean })
  public disabled = false;

  /** Whether the editor is in readonly mode. */
  @property({ type: Boolean, attribute: 'readonly' })
  public readOnly = false;

  /** The TipTap editor instance */
  @state()
  private _editor: TipTapEditor | undefined = undefined;

  #featureInstances: Set<RichTextEditorFeature> = new Set();
  #initFrame: number | undefined;
  #editorElement: HTMLElement | undefined;

  /**
   * Sets the editor element that the editor will be initialized against.
   *
   * Initialization cannot occur until this element is set, as the editor needs a DOM element to attach to.
   *
   * @param element The element to set as the editor element.
   */
  #setEditorElement(element: HTMLElement): void {
    this.#editorElement = element;
  }

  /**
   * Registers a feature instance with the editor context.
   *
   * We use a requestAnimationFrame to ensure that the editor is initialized after all features have been registered.
   * This prevents issues with the editor not being ready when features try to access it, as well as avoiding
   * multiple initializations of the editor.
   *
   * @param instance The feature instance to register.
   */
  #registerFeature(instance: RichTextEditorFeature): void {
    this.#featureInstances.add(instance);

    if (this.#initFrame) {
      window.cancelAnimationFrame(this.#initFrame);
      this.#initFrame = undefined;
    }

    this.#initFrame = window.requestAnimationFrame(() => this.#initEditor());
  }

  /** Provide the editor context to child components. */
  @provide({ context: editorContext })
  public editorContext: EditorContext = {
    editor: null,
    disabled: false,
    readOnly: false,
    content: '',
    setEditorElement: this.#setEditorElement.bind(this),
    registerFeature: this.#registerFeature.bind(this)
  };

  public override disconnectedCallback(): void {
    this.#destroyEditor();
    super.disconnectedCallback();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('content')) {
      // TODO: how to update content dynamically?
      // this.editorContext.editor.content = this.content;
    }

    if (changedProperties.has('disabled') || changedProperties.has('readOnly')) {
      this.editorContext.editor?.setEditable(!this.disabled && !this.readOnly);
      this.editorContext = {
        ...this.editorContext,
        disabled: this.disabled,
        readOnly: this.readOnly
      };
    }
  }

  public override render(): TemplateResult {
    return html`<slot></slot>`;
  }

  #initEditor(): void {
    this.#destroyEditor();

    // Features can contain duplicate extensions. Make sure to filter out any duplicates
    const extensions = Array.from(this.#featureInstances)
      .flatMap(toolEl => toolEl.tools)
      .filter((ext, index, self) => self.findIndex(e => e.name === ext.name) === index);

    if (!this.#editorElement) {
      throw new Error('Editor element is not set. Please set the editor element before initializing the editor.');
    }

    if (!extensions.length) {
      throw new Error('No extensions provided to the editor. Please register at least one feature.');
    }

    this._editor = new TipTapEditor({
      element: this.#editorElement,
      extensions,
      content: this.editorContext.content,
      editable: !(this.editorContext.disabled || this.editorContext.readOnly),
      injectCSS: false,
      onTransaction: () => this.#featureInstances.forEach(tool => tool.requestUpdate()),
      coreExtensionOptions: {
        clipboardTextSerializer: {
          blockSeparator: '\n'
        }
      },
      onUpdate: ({ editor }) => {
        const content = editor.getHTML();
        if (content !== this.editorContext.content) {
          this.editorContext.content = content;
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

    this.editorContext = {
      ...this.editorContext,
      editor: this._editor
    };
  }

  #destroyEditor(): void {
    this._editor?.destroy();
    this._editor = undefined;
  }
}
