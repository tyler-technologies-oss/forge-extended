import { consume } from '@lit/context';
import { defineIconButtonComponent, IconRegistry } from '@tylertech/forge';
import { UndoRedo } from '@tiptap/extensions';
import { tylIconRedo, tylIconUndo } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from '../editor-context';
import { RichTextEditorFeature } from './rich-text-editor-feature';
import { createRef, ref } from 'lit/directives/ref.js';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rte-undo-redo': RichTextFeatureUndoRedoComponent;
  }
}

export const RichTextFeatureUndoRedoComponentTagName: keyof HTMLElementTagNameMap = 'forge-rte-undo-redo';

/**
 * @tag forge-rte-undo-redo
 */
@customElement(RichTextFeatureUndoRedoComponentTagName)
export class RichTextFeatureUndoRedoComponent extends LitElement implements RichTextEditorFeature {
  static {
    IconRegistry.define([tylIconUndo, tylIconRedo]);
    defineIconButtonComponent();
  }

  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  /**
   * The accessible label for the undo button.
   * @default 'Undo'
   * @attribute undo-label
   */
  @property({ type: String })
  public undoLabel = 'Undo';

  /**
   * The accessible label for the redo button.
   * @default 'Redo'
   * @attribute redo-label
   */
  @property({ type: String })
  public redoLabel = 'Redo';

  public readonly extensions = [UndoRedo];

  @state()
  @consume({ context: editorContext, subscribe: true })
  private readonly _editorContext!: EditorContext;

  public firstUpdated(_changedProperties: PropertyValues<this>): void {
    this._editorContext?.registerFeature(this);
  }

  #undoButtonRef = createRef<HTMLButtonElement>();
  #redoButtonRef = createRef<HTMLButtonElement>();

  public override render(): TemplateResult {
    return html`
      <forge-icon-button
        ${ref(this.#undoButtonRef)}
        shape="squared"
        density="medium"
        @click=${this.#undo}
        @keydown=${this.#handleKeydown}
        ?disabled=${this._editorContext.isEditable() && !this._editorContext.editor?.can().undo()}
        aria-label=${this.undoLabel}>
        <forge-icon .name=${tylIconUndo.name}></forge-icon>
      </forge-icon-button>
      <forge-icon-button
        ${ref(this.#redoButtonRef)}
        shape="squared"
        density="medium"
        @click=${this.#redo}
        @keydown=${this.#handleKeydown}
        ?disabled=${this._editorContext.isEditable() && !this._editorContext.editor?.can().redo()}
        aria-label=${this.redoLabel}>
        <forge-icon .name=${tylIconRedo.name}></forge-icon>
      </forge-icon-button>
    `;
  }

  #handleKeydown(evt: KeyboardEvent): void {
    if (evt.key === 'Enter') {
      (evt.target as HTMLElement).click();
    }
  }

  async #undo(): Promise<void> {
    this._editorContext.editor?.chain().undo().run();

    await this.updateComplete;

    if (!this._editorContext.editor?.can().undo()) {
      if (this._editorContext.editor?.can().redo()) {
        this.#redoButtonRef.value?.focus();
      } else {
        this._editorContext.editor?.chain().focus().run();
      }
    }
  }

  async #redo(): Promise<void> {
    this._editorContext.editor?.chain().redo().run();

    await this.updateComplete;

    if (!this._editorContext.editor?.can().redo()) {
      if (this._editorContext.editor?.can().undo()) {
        this.#undoButtonRef.value?.focus();
      } else {
        this._editorContext.editor?.chain().focus().run();
      }
    }
  }
}
