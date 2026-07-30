import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { defineIconComponent, IconRegistry } from '@tylertech/forge';
import { tylIconCheck } from '@tylertech/tyler-icons';
import styles from './progress-tracker.scss?inline';
import { hideWhenEmpty } from '../utils/lit-utils';

declare global {
  interface HTMLElementTagNameMap {
    'forge-progress-tracker': ProgressTrackerComponent;
  }

  interface HTMLElementEventMap {
    'forge-progress-tracker-step-info': CustomEvent<ProgressTrackerStepInfoEventData>;
  }
}

export type ProgressTrackerOrientation = 'horizontal' | 'vertical';

export type ProgressTrackerStepTheme = 'primary' | 'secondary' | 'tertiary' | 'success' | 'error' | 'warning' | 'info';

export interface ProgressTrackerStep {
  /** The label displayed for the step. */
  label: string;
  /** Whether the step is completed. */
  completed?: boolean;
  /** Additional information about the step. When provided, the step becomes interactive and dispatches the step info event when selected. */
  description?: string;
  /** Optional theme color applied to the step indicator and its trailing connector. When omitted, the default colors are used. */
  theme?: ProgressTrackerStepTheme;
}

export interface ProgressTrackerStepInfoEventData {
  step: ProgressTrackerStep;
  index: number;
}

export const ProgressTrackerComponentTagName: keyof HTMLElementTagNameMap = 'forge-progress-tracker';

/**
 * Displays progress through a sequence of steps or milestones, distinguishing completed from
 * incomplete steps. Steps that provide a description are interactive and dispatch an event when
 * selected so the consuming application can present the additional information, typically in a
 * dialog that it owns.
 *
 * @tag forge-progress-tracker
 *
 * @slot title - Optional title content displayed above the steps.
 * @slot actions - Optional actions (such as buttons) displayed at the end of the title row.
 *
 * @event {CustomEvent<ProgressTrackerStepInfoEventData>} forge-progress-tracker-step-info - Fired when an interactive step is selected. The consuming application should present the step's additional information, typically in a dialog.
 *
 * @cssprop --forge-progress-tracker-node-size - Controls the size of the step indicator circles. Defaults to `28px`.
 * @cssprop --forge-progress-tracker-connector-thickness - Controls the thickness of the completed connector fill. Defaults to `4px`.
 * @cssprop --forge-progress-tracker-connector-track-thickness - Controls the thickness of the incomplete connector track. Defaults to `2px`.
 * @cssprop --forge-progress-tracker-completed-color - Controls the color of completed step indicators and connector fills. Defaults to Forge's primary theme color.
 * @cssprop --forge-progress-tracker-completed-icon-color - Controls the color of the check icon within completed step indicators. Defaults to Forge's on-primary theme color.
 * @cssprop --forge-progress-tracker-incomplete-color - Controls the outline and number color of incomplete step indicators. Defaults to Forge's primary theme color.
 * @cssprop --forge-progress-tracker-connector-color - Controls the color of the incomplete connector track. Defaults to Forge's outline theme color.
 * @cssprop --forge-progress-tracker-active-connector-fill - Controls how much of the connector after the most recently completed step is filled. Defaults to `50%`.
 * @cssprop --forge-progress-tracker-label-color - Controls the color of the step labels. Defaults to Forge's text-high theme color.
 * @cssprop --forge-progress-tracker-vertical-connector-min-length - Controls the minimum connector length between steps in the vertical orientation. Defaults to `24px`.
 * @cssprop --forge-progress-tracker-step-min-width - Controls the minimum width of each step in the horizontal orientation. When the available width is smaller than the steps require, the steps scroll horizontally. Defaults to `96px`.
 */
@customElement(ProgressTrackerComponentTagName)
export class ProgressTrackerComponent extends LitElement {
  static {
    defineIconComponent();

    IconRegistry.define([tylIconCheck]);
  }

  public static override styles = unsafeCSS(styles);

  /**
   * The steps to display. Steps are rendered in the order provided.
   */
  @property({ attribute: false })
  public steps: ProgressTrackerStep[] = [];

  /**
   * The layout orientation of the steps.
   */
  @property({ type: String, reflect: true })
  public orientation: ProgressTrackerOrientation = 'horizontal';

  /**
   * The accessible status text announced for completed steps.
   */
  @property({ type: String, attribute: 'completed-label' })
  public completedLabel = 'Completed';

  /**
   * The accessible status text announced for incomplete steps.
   */
  @property({ type: String, attribute: 'incomplete-label' })
  public incompleteLabel = 'Not completed';

  get #currentStepIndex(): number {
    return this.steps.findIndex(step => !step.completed);
  }

  public override render(): TemplateResult {
    return html`
      <div class="header" ${hideWhenEmpty()}>
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
      </div>
      <ol class="steps">
        ${this.steps.map((step, index) => this.#renderStep(step, index))}
      </ol>
    `;
  }

  #renderStep(step: ProgressTrackerStep, index: number): TemplateResult {
    const isCurrent = index === this.#currentStepIndex;
    const content = html`
      <div class="node" aria-hidden="true">
        ${step.completed ? html`<forge-icon name="check"></forge-icon>` : html`<span>${index + 1}</span>`}
      </div>
      <div class="label">
        <span>${step.label}</span>
        <span class="sr-only">${step.completed ? this.completedLabel : this.incompleteLabel}</span>
      </div>
    `;
    return html`
      <li
        class=${classMap({ step: true, completed: !!step.completed, [`theme-${step.theme}`]: !!step.theme })}
        aria-current=${ifDefined(isCurrent ? 'step' : undefined)}>
        ${step.description
          ? html`
              <button
                type="button"
                class="step-content"
                aria-haspopup="dialog"
                @click=${() => this.#onStepSelected(step, index)}>
                ${content}
              </button>
            `
          : html`<div class="step-content">${content}</div>`}
        ${index < this.steps.length - 1 ? this.#renderConnector(index) : nothing}
      </li>
    `;
  }

  #renderConnector(index: number): TemplateResult {
    const fill = this.#connectorFill(index);
    return html`
      <div class=${classMap({ connector: true, [fill]: true })} aria-hidden="true">
        <div class="connector-fill"></div>
      </div>
    `;
  }

  /**
   * Determines how the connector between a step and its successor is filled. The connector is
   * fully filled once the next step is completed and partially filled while the next step is
   * the first incomplete step, indicating progress toward it.
   */
  #connectorFill(index: number): 'full' | 'partial' | 'none' {
    if (this.steps[index + 1]?.completed) {
      return 'full';
    }
    return this.steps[index]?.completed ? 'partial' : 'none';
  }

  #onStepSelected(step: ProgressTrackerStep, index: number): void {
    const infoEvent = new CustomEvent<ProgressTrackerStepInfoEventData>('forge-progress-tracker-step-info', {
      bubbles: true,
      composed: true,
      detail: { step, index }
    });

    this.dispatchEvent(infoEvent);
  }
}
