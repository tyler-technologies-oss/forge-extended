import { consume } from '@lit/context';
import { Link } from '@tiptap/extension-link';
import { IconRegistry, IPopoverToggleEventData } from '@tylertech/forge';
import { tylIconLink } from '@tylertech/tyler-icons';
import { css, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
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
 */
@customElement(RichTextFeatureLinkComponentTagName)
export class RichTextFeatureLinkComponent extends LitElement implements RichTextEditorFeature {
  static {
    IconRegistry.define(tylIconLink);
  }

  public static override styles = css`
    :host {
      display: contents;
    }

    .link-popover {
      padding: 8px;
    }
  `;

  /**
   * The accessible label for the button.
   * @default 'Link'
   * @attribute
   */
  @property({ type: String })
  public label = 'Link';

  public readonly extensions = [Link.configure({})];

  @state()
  @consume({ context: editorContext, subscribe: true })
  private readonly _editorContext!: EditorContext;

  @state()
  private _popoverAnchor?: VirtualElement;

  @state()
  private _linkUrl = '';

  public firstUpdated(_changedProperties: PropertyValues<this>): void {
    this._editorContext?.registerFeature(this);
  }

  public override updated(changedProperties: PropertyValues<this>): void {
    // Auto-focus input when popover opens
    if (changedProperties.has('_popoverAnchor')) {
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
              type="text"
              placeholder="Enter link URL"
              .value=${this._linkUrl}
              @input=${this.#handleLinkInput}
              @keydown=${this.#handleLinkKeydown} />
          </forge-text-field>
        </div>
      </forge-popover>
    `;
  }

  #handlePopoverToggle(evt: CustomEvent<IPopoverToggleEventData>): void {
    if (evt.detail.newState === 'closed') {
      this._popoverAnchor = undefined;
      this._linkUrl = '';
    }
  }

  #handleLinkInput(evt: Event): void {
    this._linkUrl = (evt.target as HTMLInputElement).value;
  }

  #handleLinkKeydown(evt: KeyboardEvent): void {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      this.#applyLink();
    } else if (evt.key === 'Escape') {
      evt.preventDefault();
      this._popoverAnchor = undefined;
      this._linkUrl = '';
    }
  }

  #applyLink(): void {
    if (this._linkUrl) {
      this._editorContext.editor?.chain().focus().setLink({ href: this._linkUrl }).run();
      this._editorContext.announce('Link added');
    } else {
      this._editorContext.editor?.chain().focus().unsetLink().run();
      this._editorContext.announce('Link removed');
    }
    this._popoverAnchor = undefined;
    this._linkUrl = '';
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
