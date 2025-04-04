import { ResizeController } from '@lit-labs/observers/resize-controller.js';
import { defineToolbarComponent, toggleState } from '@tylertech/forge';
import { throttle } from '@tylertech/forge-core';
import { LitElement, PropertyValues, TemplateResult, html, unsafeCSS, type CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';

import styles from './responsive-toolbar.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-responsive-toolbar': ResponsiveToolbarComponent;
  }

  interface HTMLElementEventMap {
    'forge-responsive-toolbar-update': CustomEvent<ResponsiveToolbarUpdateEventData>;
  }
}

export type ResponsiveToolbarState = 'small' | 'large';

export interface ResponsiveToolbarUpdateEventData {
  state: ResponsiveToolbarState;
}

/** The amount of space between the title and actions before the title is considered to be overlapping the actions */
const BUFFER = 24;

/** The delay in milliseconds to throttle resize events */
const RESIZE_DELAY = 100;

export const ResponsiveToolbarComponentTagName: keyof HTMLElementTagNameMap = 'forge-responsive-toolbar';

/**
 * @tag forge-responsive-toolbar
 *
 * @slot before-start - Maps to the toolbar before-start slot
 * @slot start - Maps to the toolbar start slot
 * @slot end-large - The content you want to render at larger sizes in the toolbar end slot
 * @slot end-small - The content you want to render at smaller sizes in the toolbar end slot
 * @slot after-end - Maps to the toolbar after-end slot
 *
 * @state small - The title is overlapping the actions, the large end slot is hidden.
 * @state large - The title is not overlapping the actions, the small end slot is hidden.
 *
 * @event {CustomEvent<ResponsiveToolbarUpdateEventData>} forge-responsive-toolbar-update - Dispatched when the overflow state changes.
 */
@customElement(ResponsiveToolbarComponentTagName)
export class ResponsiveToolbarComponent extends LitElement {
  static {
    defineToolbarComponent();
  }

  public static override styles: CSSResult = unsafeCSS(styles);

  /** Hides the divider */
  @property({ type: Boolean, attribute: 'no-border' })
  public noBorder = false;

  /** Controls whether a bottom divider (default) or top divider (true) is used. */
  @property({ type: Boolean })
  public inverted = false;

  /** Controls the delay in milliseconds to throttle resize events */
  @property({ type: Number, attribute: 'resize-delay' })
  public resizeDelay = RESIZE_DELAY;

  readonly #startSlotContainer: Ref<HTMLElement> = createRef();
  readonly #endSlotContainer: Ref<HTMLElement> = createRef();
  readonly #internals: ElementInternals;
  #resizeController: ResizeController | undefined;
  #currentState: ResponsiveToolbarState | undefined;
  #throttleDestroy: (() => void) | undefined;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  public disconnectedCallback(): void {
    this.#currentState = undefined;
    this.#throttleDestroy?.();
    super.disconnectedCallback();
  }

  public override willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('resizeDelay') && this.resizeDelay !== changedProperties.get('resizeDelay')) {
      if (this.#resizeController) {
        this.#resizeController.unobserve(this);
        this.removeController(this.#resizeController);
      }
      this._initializeResizeController();
    }
  }

  private _initializeResizeController(): void {
    this.#throttleDestroy?.();
    this.#throttleDestroy = throttle(() => requestAnimationFrame(() => this._handleResize()), this.resizeDelay);
    this.#resizeController = new ResizeController(this, { callback: this.#throttleDestroy });
  }

  /**
   * Determines if the title is overlapping the actions and sets the internal
   * state to reflect that. This will toggle the visibility of the small and
   * large content slots.
   */
  private _handleResize(): void {
    const titleInlineEndEdge = this.#startSlotContainer.value?.getBoundingClientRect().right || 0;
    const actionsInlineStartEdge = this.#endSlotContainer.value?.getBoundingClientRect().left || 0;
    const isSmall = titleInlineEndEdge + BUFFER >= actionsInlineStartEdge;
    const newState: ResponsiveToolbarState = isSmall ? 'small' : 'large';

    if (this.#currentState === newState) {
      return;
    }

    this.#currentState = newState;
    toggleState(this.#internals, 'small', newState === 'small');
    toggleState(this.#internals, 'large', newState === 'large');
    this._emitOverflowEvent(newState);
  }

  private _emitOverflowEvent(state: ResponsiveToolbarState): void {
    const event = new CustomEvent<ResponsiveToolbarUpdateEventData>('forge-responsive-toolbar-update', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { state }
    });
    this.dispatchEvent(event);
  }

  public override render(): TemplateResult {
    return html`
      <forge-toolbar
        auto-height
        ?no-border=${this.noBorder}
        ?inverted=${this.inverted}
        @slotchange=${this._handleResize}>
        <slot name="before-start" slot="before-start"></slot>
        <div ${ref(this.#startSlotContainer)} slot="start">
          <slot name="start"></slot>
        </div>
        <div slot="end" id="end-large" ${ref(this.#endSlotContainer)}>
          <slot name="end-large"></slot>
        </div>
        <div slot="end" id="end-small">
          <slot name="end-small"></slot>
        </div>
        <slot name="after-end" slot="after-end"></slot>
      </forge-toolbar>
    `;
  }
}
