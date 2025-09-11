import { consume } from '@lit/context';
import { Strike } from '@tiptap/extension-strike';
import { IconRegistry } from '@tylertech/forge';
import { tylIconFormatStrikethrough } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from '../editor-context';
import { RichTextEditorFeature } from './rich-text-editor-feature';

import './core/rich-text-feature-button';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rte-strike': RichTextFeatureStrikeComponent;
  }
}

export const RichTextFeatureStrikeComponentTagName: keyof HTMLElementTagNameMap = 'forge-rte-strike';

/**
 * @tag forge-rte-strike
 */
@customElement(RichTextFeatureStrikeComponentTagName)
export class RichTextFeatureStrikeComponent extends LitElement implements RichTextEditorFeature {
  static {
    IconRegistry.define(tylIconFormatStrikethrough);
  }

  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  /**
   * The accessible label for the button.
   * @default 'Strikethrough'
   * @attribute
   */
  @property({ type: String })
  public label = 'Strikethrough';

  public readonly extensions = [Strike];

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
        icon=${tylIconFormatStrikethrough.name}
        ?disabled=${!this._editorContext.isEditable()}
        ?active=${this._editorContext.isActive(Strike.name)}></forge-rte-tool-button>
    `;
  }

  private async _toggle(_evt: CustomEvent): Promise<void> {
    this._editorContext.editor?.chain().focus().toggleStrike().run();
  }
}
