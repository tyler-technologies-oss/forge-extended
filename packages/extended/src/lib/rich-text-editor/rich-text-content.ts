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
 * @summary
 * Renders the editable content area for composed rich text editor layouts.
 *
 * @description
 * This component is responsible for rendering the content area of the rich text editor.
 * It provides the editor element reference to the editor context and must be used within
 * a forge-rich-text-context component. Use this when you need to separate the toolbar from
 * the content area in your layout.
 */
@customElement(RichTextContentComponentTagName)
export class RichTextContentComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @state()
  @consume({ context: editorContext, subscribe: true })
  private readonly _editorContext!: EditorContext;

  @state()
  private _announcement = '';

  readonly #editorElementRef = createRef<HTMLElement>();
  #announcementTimeout: number | undefined;

  public firstUpdated(_changedProperties: PropertyValues<this>): void {
    this._editorContext.setEditorElement(this.#editorElementRef.value as HTMLElement);
    this._editorContext.setAnnouncementCallback(this.#announceToScreenReader.bind(this));
  }

  public override disconnectedCallback(): void {
    if (this.#announcementTimeout) {
      window.clearTimeout(this.#announcementTimeout);
      this.#announcementTimeout = undefined;
    }
    super.disconnectedCallback();
  }

  /**
   * Announces a message to screen readers via ARIA live region.
   * The announcement is cleared after 1 second to prevent stale messages.
   */
  async #announceToScreenReader(message: string): Promise<void> {
    if (this.#announcementTimeout) {
      window.clearTimeout(this.#announcementTimeout);
    }

    this._announcement = message;
    await this.requestUpdate();
    await this.updateComplete;

    this.#announcementTimeout = window.setTimeout(async () => {
      this._announcement = '';
      await this.requestUpdate();
      await this.updateComplete;
      this.#announcementTimeout = undefined;
    }, 1000);
  }

  public override render(): TemplateResult {
    const isReadonly = this._editorContext?.readOnly ?? false;
    const isDisabled = this._editorContext?.disabled ?? false;

    return html`
      <div class="editor-content-wrapper">
        <div
          ${ref(this.#editorElementRef)}
          id="forge-rte-content"
          class="editor-content"
          role="textbox"
          aria-label="Rich text editor content"
          aria-multiline="true"
          aria-readonly=${isReadonly ? 'true' : 'false'}
          aria-disabled=${isDisabled ? 'true' : 'false'}></div>
        <div class="sr-only" role="status" aria-live="polite" aria-atomic="true">${this._announcement}</div>
        <forge-focus-indicator inward></forge-focus-indicator>
      </div>
    `;
  }
}
