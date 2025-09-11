import { consume } from '@lit/context';
import Underline from '@tiptap/extension-underline';
import { IconRegistry } from '@tylertech/forge';
import { tylIconFormatUnderlined } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from '../editor-context';
import { RichTextEditorFeature } from './rich-text-editor-feature';

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
export class RteUnderlineComponent extends LitElement implements RichTextEditorFeature {
  static {
    IconRegistry.define(tylIconFormatUnderlined);
  }

  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  /**
   * The accessible label for the button.
   * @default 'Underline'
   * @attribute
   */
  @property({ type: String })
  public label = 'Underline';

  public readonly extensions = [Underline];

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
        icon=${tylIconFormatUnderlined.name}
        ?disabled=${!this._editorContext.isEditable()}
        ?active=${this._editorContext.isActive(Underline.name)}></forge-rte-tool-button>
    `;
  }

  private _toggle(_evt: CustomEvent<boolean>): void {
    this._editorContext.editor?.chain().focus().toggleUnderline().run();
  }
}
