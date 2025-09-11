import { consume } from '@lit/context';
import { Heading } from '@tiptap/extension-heading';
import { Paragraph } from '@tiptap/extension-paragraph';
import { TextAlign } from '@tiptap/extension-text-align';
import { IconRegistry } from '@tylertech/forge';
import {
  tylIconFormatAlignCenter,
  tylIconFormatAlignJustify,
  tylIconFormatAlignLeft,
  tylIconFormatAlignRight
} from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from '../editor-context';
import { RichTextEditorFeature } from './rich-text-editor-feature';

import './core/rich-text-feature-button';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rte-align': RichTextFeatureAlignComponent;
  }
}

export const RichTextFeatureAlignComponentTagName: keyof HTMLElementTagNameMap = 'forge-rte-align';

/**
 * @tag forge-rte-align
 */
@customElement(RichTextFeatureAlignComponentTagName)
export class RichTextFeatureAlignComponent extends LitElement implements RichTextEditorFeature {
  static {
    IconRegistry.define([
      tylIconFormatAlignLeft,
      tylIconFormatAlignCenter,
      tylIconFormatAlignRight,
      tylIconFormatAlignJustify
    ]);
  }

  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  /**
   * The accessible labels for the left align button.
   * @default 'Align Left'
   * @attribute left-label
   */
  @property({ type: String })
  public leftLabel = 'Align Left';

  /**
   * The accessible labels for the center align button.
   * @default 'Align Center'
   * @attribute center-label
   */
  @property({ type: String })
  public centerLabel = 'Align Center';

  /**
   * The accessible labels for the right align button.
   * @default 'Align Right'
   * @attribute right-label
   */
  @property({ type: String })
  public rightLabel = 'Align Right';

  /**
   * The accessible labels for the justify align button.
   * @default 'Justify'
   * @attribute justify-label
   */
  @property({ type: String })
  public justifyLabel = 'Justify';

  public readonly extensions = [
    Heading,
    TextAlign.configure({
      types: [Heading.name, Paragraph.name]
    })
  ];

  @state()
  @consume({ context: editorContext, subscribe: true })
  private readonly _editorContext!: EditorContext;

  public firstUpdated(_changedProperties: PropertyValues<this>): void {
    this._editorContext?.registerFeature(this);
  }

  public override render(): TemplateResult {
    return html`
      <forge-rte-tool-button
        @forge-rte-tool-toggle=${() => this._toggle('left')}
        label=${this.leftLabel}
        icon=${tylIconFormatAlignLeft.name}
        ?disabled=${!this._editorContext.isEditable()}
        ?active=${this._editorContext.isActive({ textAlign: 'left' })}></forge-rte-tool-button>
      <forge-rte-tool-button
        @forge-rte-tool-toggle=${() => this._toggle('center')}
        label=${this.centerLabel}
        icon=${tylIconFormatAlignCenter.name}
        ?disabled=${!this._editorContext.isEditable()}
        ?active=${this._editorContext.isActive({ textAlign: 'center' })}></forge-rte-tool-button>
      <forge-rte-tool-button
        @forge-rte-tool-toggle=${() => this._toggle('right')}
        label=${this.rightLabel}
        icon=${tylIconFormatAlignRight.name}
        ?disabled=${!this._editorContext.isEditable()}
        ?active=${this._editorContext.isActive({ textAlign: 'right' })}></forge-rte-tool-button>
      <forge-rte-tool-button
        @forge-rte-tool-toggle=${() => this._toggle('justify')}
        label=${this.justifyLabel}
        icon=${tylIconFormatAlignJustify.name}
        ?disabled=${!this._editorContext.isEditable()}
        ?active=${this._editorContext.isActive({ textAlign: 'justify' })}></forge-rte-tool-button>
    `;
  }

  private async _toggle(which: 'left' | 'center' | 'right' | 'justify'): Promise<void> {
    this._editorContext.editor?.chain().focus().toggleTextAlign(which).run();
  }
}
