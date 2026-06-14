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
 * @summary
 * A rich text editor component powered by TipTap that provides a flexible, component-based
 * architecture for composing editing features.
 *
 * @description
 * The Rich Text Editor component provides a powerful and accessible rich text editing experience.
 * It includes a toolbar for formatting options and a content area for editing text. Features are
 * added as child components, allowing you to compose exactly the functionality your application needs.
 *
 * @slot - The default slot is reserved for feature components (toolbar buttons like forge-rte-standard-tools, forge-rte-code, forge-rte-link, etc.).
 *
 * @property {string} [content=''] - The HTML content of the editor.
 * @property {boolean} [disabled=false] - Whether the editor is disabled.
 * @property {boolean} [readOnly=false] - Whether the editor is in readonly mode.
 *
 * @attribute {string} content - The HTML content of the editor.
 * @attribute {boolean} disabled - Whether the editor is disabled.
 * @attribute {boolean} readonly - Whether the editor is in readonly mode.
 *
 * @event {CustomEvent<{ json: Record<string, any> }>} change - Fired when the content of the editor changes. The detail contains the editor content in JSON format.
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
          <div
            class="editor-toolbar"
            role="toolbar"
            aria-label="Rich text formatting toolbar"
            aria-controls="forge-rte-content"
            aria-orientation="horizontal">
            <slot></slot>
          </div>
          <forge-rich-text-content></forge-rich-text-content>
        </div>
      </forge-rich-text-context>
    `;
  }
}
