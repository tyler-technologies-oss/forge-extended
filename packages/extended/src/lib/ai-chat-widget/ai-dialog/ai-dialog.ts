import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';

import styles from './ai-dialog.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-dialog': AiDialogComponent;
  }
}

const VIEWPORT_WIDTH_THRESHOLD = 768;

export const AiDialogComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-dialog';

/**
 * @tag forge-ai-dialog
 *
 * @slot - Default slot for dialog content
 */
@customElement(AiDialogComponentTagName)
export class AiDialogComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /**
   * Indicates whether the dialog is open.
   */
  @property({ type: Boolean })
  public open = false;

  /**
   * Controls the dialog's positioning and size behavior.
   * When true, the dialog will have an expanded width and be centered on the screen.
   * When false, the dialog will be positioned at the bottom-right corner with a fixed width.
   */
  @property({ type: Boolean })
  public expanded = false;

  @state()
  private _smallViewport = window.innerWidth <= VIEWPORT_WIDTH_THRESHOLD;

  #mediaQuery?: MediaQueryList;
  #popoverElementRef: Ref<HTMLDivElement> = createRef();
  #dialogElementRef: Ref<HTMLDialogElement> = createRef();
  #escapeKeyAbortController?: AbortController;

  public override connectedCallback(): void {
    super.connectedCallback();
    this.#setupMediaQuery();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#cleanupMediaQuery();
    this.#removeEscapeKeyListener();
  }

  public override updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);

    if (changedProperties.has('open') || changedProperties.has('expanded') || changedProperties.has('_smallViewport')) {
      this.#handleOpenStateChange();
    }
  }

  readonly #popoverTemplate = html`
    <div
      ${ref(this.#popoverElementRef)}
      role="dialog"
      aria-modal="false"
      aria-labelledby="dialog-title"
      popover="manual"
      class="ai-dialog-popover"
      @toggle=${this.#handlePopoverToggle}>
      <slot></slot>
    </div>
  `;

  readonly #modalDialogTemplate = html`
    <dialog
      ${ref(this.#dialogElementRef)}
      aria-labelledby="dialog-title"
      class="forge-dialog"
      @close=${this.#handleDialogClose}>
      <slot></slot>
    </dialog>
  `;

  public override render(): TemplateResult {
    // Use dialog for small viewports OR when expanded, otherwise use popover
    const useDialog = this._smallViewport || this.expanded;
    return when(
      useDialog,
      () => this.#modalDialogTemplate,
      () => this.#popoverTemplate
    );
  }

  /**
   * Opens the dialog.
   */
  public show(): void {
    this.open = true;
  }

  /**
   * Closes the dialog.
   */
  public close(): void {
    this.open = false;
  }

  /**
   * Toggles the dialog open state.
   */
  public toggle(): void {
    this.open = !this.open;
  }

  #setupMediaQuery(): void {
    this.#mediaQuery = window.matchMedia(`(max-width: ${VIEWPORT_WIDTH_THRESHOLD}px)`);
    this.#mediaQuery.addEventListener('change', this.#handleMediaChange);
    this.#handleMediaChange(this.#mediaQuery);
  }

  #cleanupMediaQuery(): void {
    this.#mediaQuery?.removeEventListener('change', this.#handleMediaChange);
  }

  #handleMediaChange = (e: MediaQueryList | MediaQueryListEvent): void => {
    const previousViewport = this._smallViewport;
    this._smallViewport = e.matches;

    // If the viewport changed and we're open, we need to ensure proper template switching
    const previousUseDialog = previousViewport || this.expanded;
    const currentUseDialog = this._smallViewport || this.expanded;

    if (previousUseDialog !== currentUseDialog && this.open) {
      // Just trigger a re-render and let the updated() method handle the state change
      this.requestUpdate();
    }
  };

  #handleOpenStateChange(): void {
    const useDialog = this._smallViewport || this.expanded;

    if (useDialog) {
      // Use dialog element for small viewport OR expanded state
      this.#removeEscapeKeyListener();
      const dialogElement = this.#dialogElementRef.value;
      if (dialogElement) {
        if (this.open) {
          if (!dialogElement.open) {
            dialogElement.showModal();
          }
        } else {
          if (dialogElement.open) {
            dialogElement.close();
          }
        }
      }
    } else {
      // Use popover API for large viewport (not expanded)
      const popoverElement = this.#popoverElementRef.value;
      if (popoverElement) {
        if (this.open) {
          this.#addEscapeKeyListener();
          popoverElement.showPopover();
        } else {
          this.#removeEscapeKeyListener();
          popoverElement.hidePopover();
        }
      }
    }
  }

  #handlePopoverToggle(event: ToggleEvent): void {
    // Sync internal open state when popover is toggled externally
    const wasOpen = this.open;
    this.open = event.newState === 'open';

    // Manage escape key listener based on popover state
    if (this.open && !wasOpen) {
      this.#addEscapeKeyListener();
    } else if (!this.open && wasOpen) {
      this.#removeEscapeKeyListener();
    }
  }

  #handleDialogClose(): void {
    // Sync internal open state when dialog is closed externally
    this.open = false;
  }

  #addEscapeKeyListener(): void {
    if (!this.#escapeKeyAbortController) {
      this.#escapeKeyAbortController = new AbortController();
      document.addEventListener('keydown', this.#handleKeyDown, {
        signal: this.#escapeKeyAbortController.signal
      });
    }
  }

  #removeEscapeKeyListener(): void {
    if (this.#escapeKeyAbortController) {
      this.#escapeKeyAbortController.abort();
      this.#escapeKeyAbortController = undefined;
    }
  }

  #handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
    }
  };
}
