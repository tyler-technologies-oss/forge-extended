import { consume } from '@lit/context';
import { html, LitElement, PropertyValues, TemplateResult, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { editorContext, EditorContext } from './editor-context';

import styles from './rich-text-content.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rich-text-content': RichTextContentComponent;
  }
}

export const RichTextContentComponentTagName: keyof HTMLElementTagNameMap = 'forge-rich-text-content';

/**
 * @tag forge-rich-text-content
 *
 * @description
 * This component is responsible for rendering the content area of the rich text editor.
 * It provides the editor element reference to the editor context.
 */
@customElement(RichTextContentComponentTagName)
export class RichTextContentComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @state()
  @consume({ context: editorContext, subscribe: true })
  private readonly _editorContext!: EditorContext;

  readonly #editorElementRef = createRef<HTMLElement>();

  public firstUpdated(_changedProperties: PropertyValues<this>): void {
    this._editorContext.setEditorElement(this.#editorElementRef.value as HTMLElement);
  }

  public override render(): TemplateResult {
    return html`
      <div class="editor-content-wrapper">
        <div ${ref(this.#editorElementRef)} class="editor-content" role="textbox"></div>
        <forge-focus-indicator inward target="editor"></forge-focus-indicator>
      </div>
    `;
  }
}
