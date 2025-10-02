import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../ai-chat-interface/ai-chat-interface';

import styles from './ai-threads.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-threads': AiThreadsComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-threads-select': CustomEvent<AiThreadsSelectEventData>;
  }
}

export interface Thread {
  id: string;
  title: string;
}

export interface AiThreadsSelectEventData {
  id: string;
  title: string;
}

export const AiThreadsComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-threads';

/**
 * @tag forge-ai-threads
 *
 * @event {CustomEvent<AiThreadsSelectEventData>} forge-ai-threads-select - Fired when a thread is selected.
 */
@customElement(AiThreadsComponentTagName)
export class AiThreadsComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  /** Array of threads to display in the navigation list */
  @property({ type: Array })
  public threads: Thread[] = [];

  /** Current filter value for searching threads */
  @state()
  private _filterValue = '';

  get #filteredThreads(): Thread[] {
    if (!this._filterValue.trim()) {
      return this.threads;
    }
    return this.threads.filter(thread => thread.title.toLowerCase().includes(this._filterValue.toLowerCase()));
  }

  private _handleFilterInput(event: InputEvent): void {
    this._filterValue = (event.target as HTMLInputElement).value;
  }

  private _handleThreadSelect(thread: Thread): void {
    const event = new CustomEvent<AiThreadsSelectEventData>('forge-ai-threads-select', {
      detail: { id: thread.id, title: thread.title },
      bubbles: true,
      composed: true,
      cancelable: true
    });
    this.dispatchEvent(event);
  }

  public override render(): TemplateResult {
    return html`<div class="threads-container">
      <div class="left">
        <aside class="forge-drawer threads">
          <div class="forge-field">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z" />
            </svg>
            <input
              type="text"
              id="my-css-only-input"
              placeholder="Filter threads"
              .value=${this._filterValue}
              @input=${this._handleFilterInput} />
          </div>
          <ul class="forge-list forge-list--navlist">
            ${this.#filteredThreads.map(
              thread => html`
                <li class="forge-list-item">
                  <button data-thread-id="${thread.id}" @click=${() => this._handleThreadSelect(thread)}>
                    ${thread.title}
                  </button>
                </li>
              `
            )}
          </ul>
        </aside>
      </div>
      <div class="right">
        <forge-ai-chat-interface></forge-ai-chat-interface>
      </div>
    </div>`;
  }
}
