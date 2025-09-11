import { consume } from '@lit/context';
import Italic from '@tiptap/extension-italic';
import { IconRegistry } from '@tylertech/forge';
import { tylIconFormatItalic } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from '../editor-context';
import { RichTextEditorFeature } from './rich-text-editor-feature';

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
export class RteItalicComponent extends LitElement implements RichTextEditorFeature {
  static {
    IconRegistry.define(tylIconFormatItalic);
  }

  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  /**
   * The accessible label for the button.
   * @default 'Italic'
   * @attribute
   */
  @property({ type: String })
  public label = 'Italic';

  public readonly extensions = [Italic];

  @state()
  @consume({ context: editorContext, subscribe: true })
  private readonly _editorContext!: EditorContext;

  public firstUpdated(_changedProperties: PropertyValues<this>): void {
    this._editorContext?.registerFeature(this);
  }

  public override render(): TemplateResult {
    return html`
      <forge-rte-tool-button
        @forge-rte-tool-toggle=${this._toggle}
        label=${this.label}
        icon=${tylIconFormatItalic.name}
        ?disabled=${!this._editorContext.isEditable()}
        ?active=${this._editorContext.isActive(Italic.name)}></forge-rte-tool-button>
    `;
  }

  private _toggle(_evt: CustomEvent<boolean>): void {
    this._editorContext.editor?.chain().focus().toggleItalic().run();
  }
}
