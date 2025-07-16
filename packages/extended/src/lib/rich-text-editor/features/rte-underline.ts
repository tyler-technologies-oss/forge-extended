import { consume } from '@lit/context';
import { Document } from '@tiptap/extension-document';
import Underline from '@tiptap/extension-underline';
import { Paragraph } from '@tiptap/extension-paragraph';
import { Text } from '@tiptap/extension-text';
import { IconRegistry } from '@tylertech/forge';
import { tylIconFormatUnderlined } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from '../editor-context';
import './core/rich-text-feature-button';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rte-underline': RteUnderlineComponent;
  }
}

export const RteUnderlineComponentTagName: keyof HTMLElementTagNameMap = 'forge-rte-underline';

/**
 * @tag forge-rte-underline
 */
@customElement(RteUnderlineComponentTagName)
export class RteUnderlineComponent extends LitElement {
  static {
    IconRegistry.define(tylIconFormatUnderlined);
  }

  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  /** The label for the underline button */
  @property({ type: String })
  public label = Underline.name;

  public tools = [Document, Paragraph, Text, Underline];

  @state()
  @consume({ context: editorContext, subscribe: true })
  private readonly _editorContext!: EditorContext;

  public firstUpdated(_changedProperties: PropertyValues<this>): void {
    this._editorContext?.contextElement.registerToolElement(this);
  }

  public override render(): TemplateResult {
    const { editor, disabled, readOnly } = this._editorContext;
    const isDisabled = disabled || readOnly || !editor;
    const isActive = editor?.isActive(Underline.name);

    return html`
      <forge-rte-tool-button
        @forge-rte-tool-toggle=${this._toggle}
        label=${this.label}
        icon=${tylIconFormatUnderlined.name}
        ?disabled=${isDisabled}
        ?active=${isActive}></forge-rte-tool-button>
    `;
  }

  private _toggle(_evt: CustomEvent<boolean>): void {
    this._editorContext.editor?.chain().focus().toggleUnderline().run();
  }
}
