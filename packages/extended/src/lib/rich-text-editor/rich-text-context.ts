import { provide } from '@lit/context';
import { type AnyExtension, Editor as TipTapEditor } from '@tiptap/core';
import { Document } from '@tiptap/extension-document';
import { Text } from '@tiptap/extension-text';
import { Paragraph } from '@tiptap/extension-paragraph';
import CharacterCount from '@tiptap/extension-character-count';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
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
 * @summary
 * Provides the editor context for composed rich text editor layouts where toolbar and content are separated.
 *
 * @description
 * This component provides the context for the rich text editor and all auxiliary components.
 * It initializes the TipTap editor instance and provides methods to set the editor element and register features.
 * Use this component when you need to separate the toolbar from the content area, such as for fixed toolbars
 * or multi-column layouts. For simple inline editor usage, use forge-rich-text-editor instead.
 *
 * @slot - The default slot for toolbar components and forge-rich-text-content.
 *
 * @property {string} [editorId='editor'] - The ID of the element to instantiate the editor against.
 * @property {string} [content=''] - The HTML content of the editor.
 * @property {boolean} [disabled=false] - Whether the editor is disabled.
 * @property {boolean} [readOnly=false] - Whether the editor is in readonly mode.
 * @property {number} [maxLength=0] - Maximum character length allowed. 0 means no limit.
 * @property {string} [errorMessage=''] - Error message to display when validation fails.
 * @property {boolean} [showCharacterCount=false] - Whether to show character count below the editor.
 * @property {boolean} [showWordCount=false] - Whether to show word count below the editor.
 *
 * @attribute {string} editor-id - The ID of the element to instantiate the editor against.
 * @attribute {string} content - The HTML content of the editor.
 * @attribute {boolean} disabled - Whether the editor is disabled.
 * @attribute {boolean} readonly - Whether the editor is in readonly mode.
 * @attribute {number} max-length - Maximum character length allowed. 0 means no limit.
 * @attribute {string} error-message - Error message to display when validation fails.
 * @attribute {boolean} show-character-count - Whether to show character count below the editor.
 * @attribute {boolean} show-word-count - Whether to show word count below the editor.
 *
 * @event {CustomEvent<{ json: Record<string, any> }>} change - Fired when the content of the editor changes. The detail contains the editor content in JSON format.
 * @event {CustomEvent<{ isValid: boolean; errors: string[] }>} validation - Fired when validation state changes. The detail contains validation status and error messages.
 */
@customElement(RichTextContextComponentTagName)
export class RichTextContextComponent extends LitElement {
  public static override styles = css`
    :host {
      display: contents;
    }

    .editor-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-block-start: var(--forge-spacing-small);
      padding-inline: var(--forge-spacing-medium);
      min-height: var(--forge-spacing-large);
      gap: var(--forge-spacing-medium);
    }

    .editor-error {
      color: var(--forge-theme-error);
      font-size: var(--forge-typography-body-small-size);
      font-weight: var(--forge-typography-body-small-weight);
      line-height: var(--forge-typography-body-small-line-height);
    }

    .editor-counts {
      color: var(--forge-theme-text-secondary);
      font-size: var(--forge-typography-body-small-size);
      font-weight: var(--forge-typography-body-small-weight);
      line-height: var(--forge-typography-body-small-line-height);
      margin-inline-start: auto;
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

  /** Maximum character length allowed. 0 means no limit. */
  @property({ type: Number, attribute: 'max-length' })
  public maxLength = 0;

  /** Error message to display when validation fails. */
  @property({ type: String, attribute: 'error-message' })
  public errorMessage = '';

  /** Whether to show character count below the editor. */
  @property({ type: Boolean, attribute: 'show-character-count' })
  public showCharacterCount = false;

  /** Whether to show word count below the editor. */
  @property({ type: Boolean, attribute: 'show-word-count' })
  public showWordCount = false;

  /** The TipTap editor instance */
  @state()
  private _editor: TipTapEditor | undefined = undefined;

  /** Current character count */
  @state()
  private _characterCount = 0;

  /** Current word count */
  @state()
  private _wordCount = 0;

  /** Whether the content is valid */
  @state()
  private _isValid = true;

  /** Validation error messages */
  @state()
  private _validationErrors: string[] = [];

  #featureInstances: Set<RichTextEditorFeature> = new Set();
  #initFrame: number | undefined;
  #editorElement: HTMLElement | undefined;
  #announcementCallback: ((message: string) => Promise<void>) | undefined;

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
   * Sets the callback for announcing messages to screen readers.
   *
   * @param callback The callback function to invoke when an announcement should be made.
   */
  #setAnnouncementCallback(callback: (message: string) => Promise<void>): void {
    this.#announcementCallback = callback;
  }

  /**
   * Announces a message to screen readers via ARIA live region.
   *
   * @param message The message to announce.
   */
  async #announce(message: string): Promise<void> {
    if (this.#announcementCallback) {
      await this.#announcementCallback(message);
    }
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
    isActive(identifier: string | object, attributes?: object) {
      if (typeof identifier === 'string') {
        return this.editor?.isActive(identifier, attributes) ?? false;
      }
      return this.editor?.isActive(identifier) ?? false;
    },
    isEditable() {
      return !this.disabled && !this.readOnly && !!this.editor;
    },
    setEditorElement: this.#setEditorElement.bind(this),
    registerFeature: this.#registerFeature.bind(this),
    setAnnouncementCallback: this.#setAnnouncementCallback.bind(this),
    announce: this.#announce.bind(this)
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

      // Announce state changes to screen readers
      if (this.hasUpdated && changedProperties.has('disabled')) {
        const message = this.disabled ? 'Editor disabled' : 'Editor enabled';
        this.#announce(message);
      }
      if (this.hasUpdated && changedProperties.has('readOnly')) {
        const message = this.readOnly ? 'Editor read-only' : 'Editor editable';
        this.#announce(message);
      }
    }
  }

  public override render(): TemplateResult {
    return html`
      <slot></slot>
      ${when(this.showCharacterCount || this.showWordCount || !this._isValid, () => this.#renderFooter())}
    `;
  }

  #renderFooter(): TemplateResult {
    return html`
      <div class="editor-footer">
        ${when(!this._isValid, () => this.#renderErrors())}
        ${when(this.showCharacterCount || this.showWordCount, () => this.#renderCounts())}
      </div>
    `;
  }

  #renderErrors(): TemplateResult {
    return html`
      <div class="editor-error" role="alert" aria-live="polite">
        ${this.errorMessage || this._validationErrors[0] || 'Validation error'}
      </div>
    `;
  }

  #renderCounts(): TemplateResult {
    const counts: string[] = [];

    if (this.showCharacterCount) {
      const charText =
        this.maxLength > 0
          ? `${this._characterCount} / ${this.maxLength} characters`
          : `${this._characterCount} characters`;
      counts.push(charText);
    }

    if (this.showWordCount) {
      counts.push(`${this._wordCount} words`);
    }

    return html`<div class="editor-counts" aria-live="polite" aria-atomic="true">${counts.join(' • ')}</div>`;
  }

  #validateContent(): void {
    const errors: string[] = [];
    let isValid = true;

    // Check max length
    if (this.maxLength > 0 && this._characterCount > this.maxLength) {
      isValid = false;
      errors.push(`Content exceeds maximum length of ${this.maxLength} characters`);
    }

    // Update validation state
    const hasChanged = this._isValid !== isValid;
    this._isValid = isValid;
    this._validationErrors = errors;

    // Dispatch validation event if state changed
    if (hasChanged) {
      this.dispatchEvent(
        new CustomEvent('validation', {
          detail: {
            isValid,
            errors
          },
          bubbles: true,
          composed: true
        })
      );
    }
  }

  public toJSON(): object | undefined {
    return this._editor?.getJSON();
  }

  #initEditor(): void {
    this.#destroyEditor();

    // Features can contain duplicate extensions. Make sure to filter out any duplicates
    const featureExtensions = Array.from(this.#featureInstances).flatMap(feature => feature.extensions);

    // Add CharacterCount extension if maxLength is set or if counts should be displayed
    const characterCountExtension = CharacterCount.configure({
      limit: this.maxLength > 0 ? this.maxLength : undefined
    });

    const extensions = [...DEFAULT_EXTENSIONS, characterCountExtension, ...featureExtensions].filter(
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

        // Update character and word counts
        const charCountStorage = editor.storage.characterCount;
        this._characterCount = charCountStorage?.characters?.() ?? 0;
        this._wordCount = charCountStorage?.words?.() ?? 0;

        // Perform validation
        this.#validateContent();

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

    // Initialize counts
    const storage = this._editor.storage.characterCount;
    this._characterCount = storage?.characters?.() ?? 0;
    this._wordCount = storage?.words?.() ?? 0;

    // Initial validation
    this.#validateContent();
  }

  #destroyEditor(): void {
    this._editor?.destroy();
    this._editor = undefined;
  }
}
