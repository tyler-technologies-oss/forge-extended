import { provide } from '@lit/context';
import { type AnyExtension, Editor as TipTapEditor } from '@tiptap/core';
import { Document } from '@tiptap/extension-document';
import { Text } from '@tiptap/extension-text';
import { Paragraph } from '@tiptap/extension-paragraph';
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

const DEFAULT_EXTENSIONS: AnyExtension[] = [Document, Text, Paragraph];

/**
 * @tag forge-rich-text-context
 *
 * @description
 * This component provides the context for the rich text editor and all auxiliary components.
 * It initializes the editor and provides methods to set the editor element and register features.
 * It also provides the editor context to child components.
 *
 * @event {CustomEvent<{ json: Record<string, any> }>} change - Fired when the content of the editor changes.
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
    isActive(identifier: string | object) {
      return this.editor?.isActive(identifier) ?? false;
    },
    isEditable() {
      return !this.disabled && !this.readOnly && !!this.editor;
    },
    setEditorElement: this.#setEditorElement.bind(this),
    registerFeature: this.#registerFeature.bind(this)
  };

  public override disconnectedCallback(): void {
    this.#destroyEditor();
    super.disconnectedCallback();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (this.hasUpdated && changedProperties.has('content')) {
      this.editorContext.editor?.commands.setContent(this.content);
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

  public toJSON(): object | undefined {
    return this._editor?.getJSON();
  }

  #initEditor(): void {
    this.#destroyEditor();

    // Features can contain duplicate extensions. Make sure to filter out any duplicates
    const featureExtensions = Array.from(this.#featureInstances).flatMap(feature => feature.extensions);
    const extensions = [...DEFAULT_EXTENSIONS, ...featureExtensions].filter(
      (ext, index, self) => self.findIndex(e => e.name === ext.name) === index
    );

    if (!this.#editorElement) {
      throw new Error('Editor element is not set. Please set the editor element before initializing the editor.');
    }

    this._editor = new TipTapEditor({
      element: this.#editorElement,
      extensions,
      content: this.editorContext.content,
      editable: !(this.editorContext.disabled || this.editorContext.readOnly),
      injectCSS: false,
      onTransaction: () => this.#featureInstances.forEach(feature => feature.requestUpdate()),
      coreExtensionOptions: {
        clipboardTextSerializer: {
          blockSeparator: '\n'
        }
      },
      onUpdate: ({ editor }) => {
        const json = editor.getJSON();
        this.dispatchEvent(
          new CustomEvent('change', {
            detail: { json },
            bubbles: true,
            composed: true
          })
        );
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
