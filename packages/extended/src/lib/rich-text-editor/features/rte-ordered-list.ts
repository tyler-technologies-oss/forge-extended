import { consume } from '@lit/context';
import { ListItem, OrderedList } from '@tiptap/extension-list';
import { IconRegistry } from '@tylertech/forge';
import { tylIconFormatListNumbered } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorContext, EditorContext } from '../editor-context';
import { RichTextEditorFeature } from './rich-text-editor-feature';

import './core/rich-text-feature-button';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rte-ordered-list': RteOrderedListComponent;
  }
}

export const RteOrderedListComponentTagName: keyof HTMLElementTagNameMap = 'forge-rte-ordered-list';

/**
 * @tag forge-rte-ordered-list
 */
@customElement(RteOrderedListComponentTagName)
export class RteOrderedListComponent extends LitElement implements RichTextEditorFeature {
  static {
    IconRegistry.define(tylIconFormatListNumbered);
  }

  public static override styles = css`
    :host {
      display: contents;
    }
  `;

  /**
   * The accessible label for the button.
   * @default 'Ordered List'
   * @attribute
   */
  @property({ type: String })
  public label = 'Ordered List';

  public readonly extensions = [OrderedList, ListItem];

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
        icon=${tylIconFormatListNumbered.name}
        ?disabled=${!this._editorContext.isEditable()}
        ?active=${this._editorContext.isActive(OrderedList.name)}></forge-rte-tool-button>
    `;
  }

  private _toggle(_evt: CustomEvent<boolean>): void {
    this._editorContext.editor?.chain().focus().toggleOrderedList().run();
  }
}
