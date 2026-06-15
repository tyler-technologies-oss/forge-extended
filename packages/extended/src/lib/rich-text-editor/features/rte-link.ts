import { consume } from '@lit/context';
import { Link } from '@tiptap/extension-link';
import { defineButtonComponent, IconRegistry, IPopoverToggleEventData } from '@tylertech/forge';
import { tylIconLink } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { editorContext, EditorContext } from '../editor-context';
import { RichTextEditorFeature } from './rich-text-editor-feature';
import { VirtualElement } from '@tylertech/forge/esm/core/utils/position-utils';

import './core/rich-text-feature-button';

declare global {
  interface HTMLElementTagNameMap {
    'forge-rte-link': RichTextFeatureLinkComponent;
  }
}

export const RichTextFeatureLinkComponentTagName: keyof HTMLElementTagNameMap = 'forge-rte-link';

/**
 * @tag forge-rte-link
 *
 * @summary
 * Provides a link creation and editing button for the rich text editor.
 *
 * @description
 * The link feature component renders a toolbar button that allows users to create hyperlinks
 * from selected text. Clicking the button opens a popover with a URL input field. The component
 * supports URL validation, automatic protocol addition, and provides Apply/Update/Remove/Cancel
 * buttons based on context. Links open in new tabs with security attributes (noopener, noreferrer,
 * nofollow). The feature announces state changes to screen readers for accessibility.
 *
 * @property {string} [label='Link'] - The accessible label for the link button.
 * @property {boolean} [validateUrls=true] - Whether to validate URL format before applying. When enabled, shows error messages for invalid URLs.
 * @property {boolean} [autoProtocol=true] - Whether to automatically add https:// protocol if missing from the URL.
 *
 * @attribute {string} label - The accessible label for the link button.
 * @attribute {boolean} validate-urls - Whether to validate URL format before applying.
 * @attribute {boolean} auto-protocol - Whether to automatically add https:// protocol if missing.
 */
@customElement(RichTextFeatureLinkComponentTagName)
export class RichTextFeatureLinkComponent extends LitElement implements RichTextEditorFeature {
  static {
    IconRegistry.define(tylIconLink);
    defineButtonComponent();
  }

  public static override styles = css`
    :host {
      display: contents;
    }

    .link-popover {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      min-width: 320px;
    }

    .button-group {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }

    .error-message {
      color: var(--forge-theme-error);
      font-size: 12px;
      margin-block-start: -8px;
    }
  `;

  /**
   * The accessible label for the button.
   * @default 'Link'
   * @attribute
   */
  @property({ type: String })
  public label = 'Link';

  /**
   * Whether to validate URLs before applying them.
   * @default true
   * @attribute
   */
  @property({ type: Boolean, attribute: 'validate-urls' })
  public validateUrls = true;

  /**
   * Whether to automatically add https:// protocol if missing.
   * @default true
   * @attribute
   */
  @property({ type: Boolean, attribute: 'auto-protocol' })
  public autoProtocol = true;

  public readonly extensions = [
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        target: '_blank',
        rel: 'noopener noreferrer nofollow'
      }
    })
  ];

  @state()
  @consume({ context: editorContext, subscribe: true })
  private readonly _editorContext!: EditorContext;

  @state()
  private _popoverAnchor?: VirtualElement;

  @state()
  private _linkUrl = '';

  @state()
  private _validationError = '';

  public firstUpdated(_changedProperties: PropertyValues<this>): void {
    this._editorContext?.registerFeature(this);
  }

  public override updated(changedProperties: PropertyValues<this>): void {
    // Auto-focus input when popover opens
    if (changedProperties.has('_popoverAnchor' as keyof this)) {
      if (this._popoverAnchor) {
        // Use setTimeout to ensure popover is rendered
        setTimeout(() => {
          const input = this.shadowRoot?.querySelector('input');
          input?.focus();
          input?.select(); // Select existing text for easy editing
        }, 50);
      }
    }
  }

  public override render(): TemplateResult {
    const isEditingExistingLink = !!this._popoverAnchor && this._editorContext.isActive(Link.name);

    return html`
      <forge-rte-tool-button
        @forge-rte-tool-toggle=${this.#toggle}
        label=${this.label}
        icon=${tylIconLink.name}
        ?disabled=${!this._editorContext.isEditable()}
        ?active=${this._editorContext.isActive(Link.name)}></forge-rte-tool-button>
      <forge-popover
        .open=${!!this._popoverAnchor}
        .anchorElement=${this._popoverAnchor}
        @forge-popover-toggle=${this.#handlePopoverToggle}>
        <div class="link-popover">
          <forge-text-field density="small">
            <input
              type="url"
              placeholder="https://example.com"
              .value=${this._linkUrl}
              @input=${this.#handleLinkInput}
              @keydown=${this.#handleLinkKeydown}
              aria-label="Link URL"
              aria-describedby=${ifDefined(this._validationError ? 'link-error' : undefined)}
              aria-invalid=${!!this._validationError} />
          </forge-text-field>
          ${this._validationError
            ? html`<div id="link-error" class="error-message" role="alert">${this._validationError}</div>`
            : ''}
          <div class="button-group">
            <forge-button variant="raised" @click=${this.#applyLink} ?disabled=${!!this._validationError}>
              ${isEditingExistingLink ? 'Update' : 'Apply'}
            </forge-button>
            ${isEditingExistingLink
              ? html`<forge-button variant="outlined" @click=${this.#removeLink}>Remove Link</forge-button>`
              : ''}
            <forge-button variant="text" @click=${this.#cancel}>Cancel</forge-button>
          </div>
        </div>
      </forge-popover>
    `;
  }

  #handlePopoverToggle(evt: CustomEvent<IPopoverToggleEventData>): void {
    if (evt.detail.newState === 'closed') {
      this.#resetState();
    }
  }

  #handleLinkInput(evt: Event): void {
    this._linkUrl = (evt.target as HTMLInputElement).value.trim();
    this.#validateUrl();
  }

  #handleLinkKeydown(evt: KeyboardEvent): void {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      if (!this._validationError) {
        this.#applyLink();
      }
    } else if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#cancel();
    }
  }

  #validateUrl(): void {
    this._validationError = '';

    if (!this._linkUrl) {
      return; // Empty is valid - it removes the link
    }

    if (!this.validateUrls) {
      return; // Validation disabled
    }

    // Primary regex validation
    const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[^\s]*)?$/;

    if (!urlPattern.test(this._linkUrl)) {
      this._validationError = 'Please enter a valid URL (e.g., https://example.com)';
      return;
    }

    // Additional validation using URL constructor for enhanced security
    try {
      const normalizedUrl = this.#normalizeUrl(this._linkUrl);
      new URL(normalizedUrl);
    } catch {
      this._validationError = 'Please enter a valid URL (e.g., https://example.com)';
    }
  }

  #normalizeUrl(url: string): string {
    if (!url) {
      return '';
    }

    const trimmed = url.trim();

    // Auto-add https:// if no protocol specified
    if (this.autoProtocol && !trimmed.match(/^[a-zA-Z][a-zA-Z0-9+.-]*:/)) {
      return `https://${trimmed}`;
    }

    return trimmed;
  }

  #applyLink(): void {
    if (this._validationError) {
      return;
    }

    try {
      if (this._linkUrl) {
        const normalizedUrl = this.#normalizeUrl(this._linkUrl);
        const success = this._editorContext.editor?.chain().focus().setLink({ href: normalizedUrl }).run();
        if (success) {
          this._editorContext.announce('Link added');
        } else {
          console.warn('[RTE Link] Failed to apply link');
        }
      } else {
        const success = this._editorContext.editor?.chain().focus().unsetLink().run();
        if (success) {
          this._editorContext.announce('Link removed');
        } else {
          console.warn('[RTE Link] Failed to remove link');
        }
      }
      this.#resetState();
    } catch (error) {
      console.error('[RTE Link] Error applying link:', error);
      this.#resetState();
    }
  }

  #removeLink(): void {
    try {
      const success = this._editorContext.editor?.chain().focus().unsetLink().run();
      if (success) {
        this._editorContext.announce('Link removed');
      } else {
        console.warn('[RTE Link] Failed to remove link');
      }
      this.#resetState();
    } catch (error) {
      console.error('[RTE Link] Error removing link:', error);
      this.#resetState();
    }
  }

  #cancel(): void {
    this.#resetState();
  }

  #resetState(): void {
    this._popoverAnchor = undefined;
    this._linkUrl = '';
    this._validationError = '';
  }

  async #toggle(_evt: CustomEvent): Promise<void> {
    const { x, y, height, width } = this.#getSelectedTextCoordinates();
    this._popoverAnchor = new VirtualElement(x, y, width, height);

    // Pre-fill with existing link URL if cursor is on a link
    const { href } = this._editorContext.editor?.getAttributes('link') ?? {};
    this._linkUrl = (href as string) ?? '';
  }

  #getSelectedTextCoordinates(): { x: number; y: number; width: number; height: number } {
    const selection = this._editorContext.editor?.state.selection;
    if (selection && selection.$from && selection.$to) {
      const fromPos = this._editorContext.editor.view.coordsAtPos(selection.$from.pos);
      const toPos = this._editorContext.editor.view.coordsAtPos(selection.$to.pos);
      return {
        x: fromPos.left,
        y: fromPos.top,
        width: toPos.left - fromPos.left,
        height: fromPos.bottom - fromPos.top
      };
    }
    return { x: 0, y: 0, width: 0, height: 0 };
  }
}
