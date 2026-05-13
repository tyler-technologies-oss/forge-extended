import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * Compose the text content of all provided nodes into a single string.
 * @param nodes - The nodes to compose the text content of.
 * @returns The composed text content.
 */
export function composeSlottedTextContent(nodes: Node[]): string {
  return nodes
    .map(node => node.textContent)
    .join(' ')
    .trim();
}

export interface SlotTextControllerOptions {
  /** The name of the slot to observe. Use empty string for default slot. */
  slotName: string;
  /** Optional callback when the text content changes. */
  onChange?: (text: string) => void;
}

/**
 * A reactive controller that observes slot content and provides the text content.
 * Automatically updates when slotted content changes, including dynamic text updates.
 *
 * @example
 * ```ts
 * class MyComponent extends LitElement {
 *   #labelController = new SlotTextController(this, { slotName: 'label' });
 *
 *   render() {
 *     return html`
 *       <slot name="label" ${this.#labelController.slotChange}></slot>
 *       <span>Text: ${this.#labelController.text}</span>
 *     `;
 *   }
 * }
 * ```
 */
export class SlotTextController implements ReactiveController {
  readonly #host: ReactiveControllerHost;
  readonly #options: SlotTextControllerOptions;
  #observer?: MutationObserver;
  #nodes: Node[] = [];
  #text = '';

  constructor(host: ReactiveControllerHost, options: SlotTextControllerOptions) {
    this.#host = host;
    this.#options = options;
    host.addController(this);
  }

  /** The current text content of the slotted elements. */
  public get text(): string {
    return this.#text;
  }

  /** Handles the slotchange event. Bind this to the slot's @slotchange. */
  public readonly handleSlotChange = (event: Event): void => {
    const slot = event.target as HTMLSlotElement;
    this.#nodes = slot.assignedNodes({ flatten: true });
    this.#updateText();
    this.#setupObserver();
  };

  public hostDisconnected(): void {
    this.#observer?.disconnect();
  }

  #updateText(): void {
    const newText = composeSlottedTextContent(this.#nodes);
    if (newText !== this.#text) {
      this.#text = newText;
      this.#options.onChange?.(this.#text);
      this.#host.requestUpdate();
    }
  }

  #setupObserver(): void {
    this.#observer?.disconnect();
    this.#observer = new MutationObserver(() => this.#updateText());
    this.#nodes.forEach(node => {
      this.#observer?.observe(node, {
        characterData: true,
        childList: true,
        subtree: true
      });
    });
  }
}
