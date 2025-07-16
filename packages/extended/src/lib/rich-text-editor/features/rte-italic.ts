import { consume } from '@lit/context';
import { Document } from '@tiptap/extension-document';
import Italic from '@tiptap/extension-italic';
import { Paragraph } from '@tiptap/extension-paragraph';
import { Text } from '@tiptap/extension-text';
import { IconRegistry } from '@tylertech/forge';
import { tylIconFormatItalic } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from '../editor-context';
import './core/rich-text-feature-button';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rte-italic': RteItalicComponent;
  }
}

export const RteItalicComponentTagName: keyof HTMLElementTagNameMap = 'forge-rte-italic';

/**
 * @tag forge-rte-italic
 */
@customElement(RteItalicComponentTagName)
export class RteItalicComponent extends LitElement {
  static {
    IconRegistry.define(tylIconFormatItalic);
  }

  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  /** The label for the italic button */
  @property({ type: String })
  public label = Italic.name;

  public tools = [Document, Paragraph, Text, Italic];

  @state()
  @consume({ context: editorContext, subscribe: true })
  private readonly _editorContext!: EditorContext;

  public firstUpdated(_changedProperties: PropertyValues<this>): void {
    this._editorContext?.contextElement.registerToolElement(this);
  }

  public override render(): TemplateResult {
    const { editor, disabled, readOnly } = this._editorContext;
    const isDisabled = disabled || readOnly || !editor;
    const isActive = editor?.isActive(Italic.name);

    return html`
      <forge-rte-tool-button
        @forge-rte-tool-toggle=${this._toggle}
        label=${this.label}
        icon=${tylIconFormatItalic.name}
        ?disabled=${isDisabled}
        ?active=${isActive}></forge-rte-tool-button>
    `;
  }

  private _toggle(_evt: CustomEvent<boolean>): void {
    this._editorContext.editor?.chain().focus().toggleItalic().run();
  }
}
