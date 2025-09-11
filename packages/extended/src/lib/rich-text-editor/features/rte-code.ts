import { consume } from '@lit/context';
import { Code } from '@tiptap/extension-code';
import { IconRegistry } from '@tylertech/forge';
import { tylIconCode } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from '../editor-context';
import { RichTextEditorFeature } from './rich-text-editor-feature';

import './core/rich-text-feature-button';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rte-code': RichTextFeatureCodeComponent;
  }
}

export const RichTextFeatureCodeComponentTagName: keyof HTMLElementTagNameMap = 'forge-rte-code';

/**
 * @tag forge-rte-code
 */
@customElement(RichTextFeatureCodeComponentTagName)
export class RichTextFeatureCodeComponent extends LitElement implements RichTextEditorFeature {
  static {
    IconRegistry.define(tylIconCode);
  }

  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  /**
   * The accessible label for the button.
   * @default 'Code'
   * @attribute
   */
  @property({ type: String })
  public label = Code.name;

  public readonly extensions = [Code];

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
        icon=${tylIconCode.name}
        ?disabled=${!this._editorContext.isEditable()}
        ?active=${this._editorContext.isActive(Code.name)}></forge-rte-tool-button>
    `;
  }

  private async _toggle(_evt: CustomEvent): Promise<void> {
    this._editorContext.editor?.chain().focus().toggleCode().run();
  }
}
