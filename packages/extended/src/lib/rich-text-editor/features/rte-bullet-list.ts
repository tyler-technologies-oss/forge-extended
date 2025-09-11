import { consume } from '@lit/context';
import { BulletList, ListItem } from '@tiptap/extension-list';
import { IconRegistry } from '@tylertech/forge';
import { tylIconFormatListBulleted } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from '../editor-context';
import { RichTextEditorFeature } from './rich-text-editor-feature';

import './core/rich-text-feature-button';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rte-bullet-list': RteBulletListComponent;
  }
}

export const RteBulletListComponentTagName: keyof HTMLElementTagNameMap = 'forge-rte-bullet-list';

/**
 * @tag forge-rte-bullet-list
 */
@customElement(RteBulletListComponentTagName)
export class RteBulletListComponent extends LitElement implements RichTextEditorFeature {
  static {
    IconRegistry.define(tylIconFormatListBulleted);
  }

  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  /**
   * The accessible label for the button.
   * @default 'Bullet List'
   * @attribute
   */
  @property({ type: String })
  public label = 'Bullet List';

  public readonly extensions = [BulletList, ListItem];

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
        icon=${tylIconFormatListBulleted.name}
        ?disabled=${!this._editorContext.isEditable()}
        ?active=${this._editorContext.isActive(BulletList.name)}></forge-rte-tool-button>
    `;
  }

  private _toggle(_evt: CustomEvent<boolean>): void {
    this._editorContext.editor?.chain().focus().toggleBulletList().run();
  }
}
