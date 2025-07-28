import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ContextRoot } from '@lit/context';

import './rich-text-context';
import './rich-text-content';

import styles from './rich-text-editor.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rich-text-editor': RichTextEditorComponent;
  }
}

export const RichTextEditorComponentTagName: keyof HTMLElementTagNameMap = 'forge-rich-text-editor';

/**
 * @tag forge-rich-text-editor
 *
 * @description
 * The Rich Text Editor component provides a rich text editing experience.
 * It includes a toolbar for formatting options and a content area for editing text.
 */
@customElement(RichTextEditorComponentTagName)
export class RichTextEditorComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** The content of the editor. */
  @property({ type: String })
  public content = '';

  /** Whether the editor is disabled. */
  @property({ type: Boolean })
  public disabled = false;

  /** Whether the editor is in readonly mode. */
  @property({ type: Boolean, attribute: 'readonly' })
  public readOnly = false;

  constructor() {
    super();
    const contextRoot = new ContextRoot();
    contextRoot.attach(this);
  }

  public override render(): TemplateResult {
    return html`
      <forge-rich-text-context .readOnly=${this.readOnly} .disabled=${this.disabled} .content=${this.content}>
        <div class="forge-rich-text-editor">
          <div class="editor-toolbar" role="toolbar">
            <slot></slot>
          </div>
          <forge-rich-text-content></forge-rich-text-content>
        </div>
      </forge-rich-text-context>
    `;
  }
}
