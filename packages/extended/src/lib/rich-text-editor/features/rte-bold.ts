import { consume } from '@lit/context';
import { Document } from '@tiptap/extension-document';
import { Text } from '@tiptap/extension-text';
import { Paragraph } from '@tiptap/extension-paragraph';
import { Bold } from '@tiptap/extension-bold';
import { IconRegistry } from '@tylertech/forge';
import { tylIconFormatBold } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from '../editor-context';
import './core/rich-text-feature-button';
import { RichTextEditorFeature } from './rich-text-editor-feature';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rte-bold': RichTextFeatureBoldComponent;
  }
}

export const RichTextFeatureBoldComponentTagName: keyof HTMLElementTagNameMap = 'forge-rte-bold';

/**
 * @tag forge-rte-bold
 */
@customElement(RichTextFeatureBoldComponentTagName)
export class RichTextFeatureBoldComponent extends LitElement implements RichTextEditorFeature {
  static {
    IconRegistry.define(tylIconFormatBold);
  }

  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  /** The accessible label for the button. */
  @property({ type: String })
  public label = 'Bold';

  public readonly tools = [Document, Paragraph, Text, Bold];

  @state()
  @consume({ context: editorContext, subscribe: true })
  private readonly _editorContext!: EditorContext;

  public firstUpdated(_changedProperties: PropertyValues<this>): void {
    this._editorContext?.registerFeature(this);
  }

  public override render(): TemplateResult {
    const { editor, disabled, readOnly } = this._editorContext;
    const isDisabled = disabled || readOnly || !editor;
    const isActive = editor?.isActive('bold');

    return html`
      <forge-rte-tool-button
        @forge-rte-tool-toggle=${this._toggle}
        label=${this.label}
        icon=${tylIconFormatBold.name}
        ?disabled=${isDisabled}
        ?active=${isActive}></forge-rte-tool-button>
    `;
  }

  private async _toggle(_evt: CustomEvent): Promise<void> {
    this._editorContext.editor?.chain().focus().toggleBold().run();
  }
}
