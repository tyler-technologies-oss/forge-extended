import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { defineButtonComponent } from '@tylertech/forge';

import styles from './ai-suggestions.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'forge-ai-suggestions': AiSuggestionsComponent;
  }

  interface HTMLElementEventMap {
    'forge-ai-suggestions-select': CustomEvent<AiSuggestionsEventData>;
  }
}

export interface Suggestion {
  text: string;
  value: string;
}

export interface AiSuggestionsEventData {
  text: string;
  value: string;
}

export const AiSuggestionsComponentTagName: keyof HTMLElementTagNameMap = 'forge-ai-suggestions';

/**
 * @tag forge-ai-suggestions
 *
 * @event {CustomEvent<AiSuggestionsEventData>} forge-ai-suggestions-select - Fired when a suggestion is selected.
 */
@customElement(AiSuggestionsComponentTagName)
export class AiSuggestionsComponent extends LitElement {
  static {
    defineButtonComponent();
  }

  public static override styles = unsafeCSS(styles);

  /** Array of suggestion objects to display */
  @property({ type: Array })
  public suggestions: Suggestion[] = [];

  private _handleSuggestionClick(suggestion: Suggestion): void {
    const event = new CustomEvent<AiSuggestionsEventData>('forge-ai-suggestions-select', {
      detail: {
        text: suggestion.text,
        value: suggestion.value
      },
      bubbles: true,
      composed: true,
      cancelable: true
    });
    this.dispatchEvent(event);
  }

  public override render(): TemplateResult {
    return html`
      <div class="scroll-container">
        <div class="suggestions-container">
          <div class="suggestions">
            ${map(
              this.suggestions,
              suggestion =>
                html`<button
                  class="forge-button forge-button--tonal suggestion"
                  @click=${() => this._handleSuggestionClick(suggestion)}>
                  ${suggestion.text}
                </button>`
            )}
          </div>
        </div>
      </div>
    `;
  }
}
