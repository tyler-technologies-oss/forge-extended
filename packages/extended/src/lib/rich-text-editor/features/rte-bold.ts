import { consume } from '@lit/context';
import { Bold } from '@tiptap/extension-bold';
import { IconRegistry } from '@tylertech/forge';
import { tylIconFormatBold } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from '../editor-context';
import { RichTextEditorFeature } from './rich-text-editor-feature';

import './core/rich-text-feature-button';

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

  /**
   * The accessible label for the button.
   * @default 'Bold'
   * @attribute
   */
  @property({ type: String })
  public label = 'Bold';

  public readonly extensions = [Bold];

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
        icon=${tylIconFormatBold.name}
        keyboard-shortcut="Control+B"
        ?disabled=${!this._editorContext.isEditable()}
        ?active=${this._editorContext.isActive(Bold.name)}></forge-rte-tool-button>
    `;
  }

  private async _toggle(_evt: CustomEvent): Promise<void> {
    const wasActive = this._editorContext.isActive(Bold.name);
    this._editorContext.editor?.chain().focus().toggleBold().run();

    // Announce state change to screen readers
    const message = wasActive ? 'Bold removed' : 'Bold applied';
    this._editorContext.announce(message);
  }
}
