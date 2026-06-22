import { consume } from '@lit/context';
import { Link } from '@tiptap/extension-link';
import { defineButtonComponent, IconRegistry, IPopoverToggleEventData } from '@tylertech/forge';
import { tylIconLink } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { editorContext, EditorContext } from '../editor-context';
import { RichTextEditorFeature } from './rich-text-editor-feature';
import { featureHostStyles } from './core/feature-styles';
import { DANGEROUS_PROTOCOLS } from '../extensions/sanitize-utils';
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
 * @property {boolean} [autoProtocol=true] - Whether to automatically add https:// protocol if missing from the URL.
 *
 * @attribute {string} label - The accessible label for the link button.
 * @attribute {boolean} auto-protocol - Whether to automatically add https:// protocol if missing.
 *
 * @note URL validation is always enabled for security and cannot be disabled.
 */
@customElement(RichTextFeatureLinkComponentTagName)
export class RichTextFeatureLinkComponent extends LitElement implements RichTextEditorFeature {
  static {
    IconRegistry.define(tylIconLink);
    defineButtonComponent();
  }

  public static override styles = [
    featureHostStyles,
    css`
      .link-popover {
        padding: var(--forge-spacing-medium);
        display: flex;
        flex-direction: column;
        gap: var(--forge-spacing-small);
        min-width: 320px;
      }

      .button-group {
        display: flex;
        gap: var(--forge-spacing-xsmall);
        justify-content: flex-end;
      }

      .error-message {
        color: var(--forge-theme-error);
        font-size: var(--forge-typography-body-small-size);
        margin-block-start: calc(var(--forge-spacing-xsmall) * -1);
      }

      .warning-message {
        color: var(--forge-theme-warning, #b45309);
        font-size: var(--forge-typography-body-small-size);
        margin-block-start: calc(var(--forge-spacing-xsmall) * -1);
      }
    `
  ];

  /**
   * The accessible label for the button.
   * @default 'Link'
   * @attribute
   */
  @property({ type: String })
  public label = 'Link';

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

  @state()
  private _validationWarning = '';

  #focusTimeout: number | undefined;

  public firstUpdated(_changedProperties: PropertyValues<this>): void {
    this._editorContext?.registerFeature(this);
  }

  public override disconnectedCallback(): void {
    if (this.#focusTimeout) {
      window.clearTimeout(this.#focusTimeout);
      this.#focusTimeout = undefined;
    }
    super.disconnectedCallback();
  }

  public override updated(changedProperties: PropertyValues<this>): void {
    // Auto-focus input when popover opens
    if (changedProperties.has('_popoverAnchor' as keyof this)) {
      if (this._popoverAnchor) {
        // Clear any existing timeout
        if (this.#focusTimeout) {
          window.clearTimeout(this.#focusTimeout);
        }
        // Use setTimeout to ensure popover is rendered
        this.#focusTimeout = window.setTimeout(() => {
          const input = this.shadowRoot?.querySelector('input');
          input?.focus();
          input?.select(); // Select existing text for easy editing
          this.#focusTimeout = undefined;
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
            : this._validationWarning
              ? html`<div id="link-error" class="warning-message" role="status">${this._validationWarning}</div>`
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

    // Security: URL validation is always enabled

    // SECURITY CHECK: URL length limit (prevent DoS)
    const MAX_URL_LENGTH = 2048; // RFC 2616 recommendation
    if (this._linkUrl.length > MAX_URL_LENGTH) {
      this._validationError = `URL too long (maximum ${MAX_URL_LENGTH} characters)`;
      return;
    }

    // CRITICAL SECURITY CHECK: Block dangerous protocols FIRST
    const lowerUrl = this._linkUrl.toLowerCase().trim();

    for (const protocol of DANGEROUS_PROTOCOLS) {
      if (lowerUrl.startsWith(protocol)) {
        this._validationError = 'Invalid protocol. Only http and https URLs are allowed.';
        return;
      }
    }

    // Check for URL-encoded variants
    try {
      const decoded = decodeURIComponent(lowerUrl);
      for (const protocol of DANGEROUS_PROTOCOLS) {
        if (decoded.startsWith(protocol)) {
          this._validationError = 'Invalid protocol detected. Only http and https URLs are allowed.';
          return;
        }
      }
    } catch {
      // Malformed encoding - reject
      this._validationError = 'Invalid URL encoding';
      return;
    }

    // Non-blocking advisory warning for non-ASCII/IDN URLs — Apply stays enabled (REDTEAM #7)
    // eslint-disable-next-line no-control-regex
    const hasNonASCII = /[^\x00-\x7F]/.test(this._linkUrl);
    const hasPunycode = this._linkUrl.includes('xn--');
    if (hasNonASCII || hasPunycode) {
      this._validationWarning =
        'Warning: This URL contains international characters. Verify carefully to avoid phishing.';
      // IDN/non-ASCII URLs skip the ASCII regex and go straight to the URL constructor check
    } else {
      this._validationWarning = '';

      // Primary regex validation — ASCII URLs only (query strings do not require a preceding /)
      const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[^\s]*|[?#][^\s]*)?$/;

      if (!urlPattern.test(this._linkUrl)) {
        this._validationError = 'Please enter a valid URL (e.g., https://example.com)';
        return;
      }
    }

    // Final validation via URL constructor — covers both ASCII and IDN paths
    try {
      const normalizedUrl = this.#normalizeUrl(this._linkUrl);
      const parsed = new URL(normalizedUrl);

      // Double-check protocol after normalization
      if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
        this._validationError = 'Invalid protocol. Only http and https URLs are allowed.';
        return;
      }
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
    this._validationWarning = '';
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
