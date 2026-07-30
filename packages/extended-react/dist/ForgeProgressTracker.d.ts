import React from "react";
import { ForgeProgressTracker as ForgeProgressTrackerElement } from "@tylertech/forge-extended/progress-tracker";

export type { ForgeProgressTrackerElement };

export interface ForgeProgressTrackerProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | "children"
    | "dir"
    | "hidden"
    | "id"
    | "lang"
    | "slot"
    | "style"
    | "title"
    | "translate"
    | "onClick"
    | "onFocus"
    | "onBlur"
  > {
  /** The layout orientation of the steps. */
  orientation?: ForgeProgressTrackerElement["orientation"];

  /** The accessible status text announced for completed steps. */
  completedLabel?: ForgeProgressTrackerElement["completedLabel"];

  /** The accessible status text announced for incomplete steps. */
  incompleteLabel?: ForgeProgressTrackerElement["incompleteLabel"];

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

  /** Used for labels to link them with their inputs (using input id). */
  htmlFor?: string;

  /** Used to help React identify which items have changed, are added, or are removed within a list. */
  key?: number | string;

  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: any;

  /** Allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the `Tab` key, hence the name) and determine their relative ordering for sequential focus navigation. */
  tabIndex?: number;

  /** The steps to display. Steps are rendered in the order provided. */
  steps?: ForgeProgressTrackerElement["steps"];

  /** Fired when an interactive step is selected. The consuming application should present the step's additional information, typically in a dialog. */
  onForgeProgressTrackerStepInfo?: (
    event: CustomEvent<CustomEvent<ProgressTrackerStepInfoEventData>>,
  ) => void;
}

/**
 * Displays progress through a sequence of steps or milestones, distinguishing completed from
 * incomplete steps. Steps that provide a description are interactive and dispatch an event when
 * selected so the consuming application can present the additional information, typically in a
 * dialog that it owns.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-progress-tracker-step-info** - Fired when an interactive step is selected. The consuming application should present the step's additional information, typically in a dialog.
 *
 * ### **Slots:**
 *  - **title** - Optional title content displayed above the steps.
 * - **actions** - Optional actions (such as buttons) displayed at the end of the title row.
 *
 * ### **CSS Properties:**
 *  - **--forge-progress-tracker-node-size** - Controls the size of the step indicator circles. Defaults to `28px`. _(default: undefined)_
 * - **--forge-progress-tracker-connector-thickness** - Controls the thickness of the completed connector fill. Defaults to `4px`. _(default: undefined)_
 * - **--forge-progress-tracker-connector-track-thickness** - Controls the thickness of the incomplete connector track. Defaults to `2px`. _(default: undefined)_
 * - **--forge-progress-tracker-completed-color** - Controls the color of completed step indicators and connector fills. Defaults to Forge's primary theme color. _(default: undefined)_
 * - **--forge-progress-tracker-completed-icon-color** - Controls the color of the check icon within completed step indicators. Defaults to Forge's on-primary theme color. _(default: undefined)_
 * - **--forge-progress-tracker-incomplete-color** - Controls the outline and number color of incomplete step indicators. Defaults to Forge's primary theme color. _(default: undefined)_
 * - **--forge-progress-tracker-connector-color** - Controls the color of the incomplete connector track. Defaults to Forge's outline theme color. _(default: undefined)_
 * - **--forge-progress-tracker-active-connector-fill** - Controls how much of the connector after the most recently completed step is filled. Defaults to `50%`. _(default: undefined)_
 * - **--forge-progress-tracker-label-color** - Controls the color of the step labels. Defaults to Forge's text-high theme color. _(default: undefined)_
 * - **--forge-progress-tracker-vertical-connector-min-length** - Controls the minimum connector length between steps in the vertical orientation. Defaults to `24px`. _(default: undefined)_
 * - **--forge-progress-tracker-step-min-width** - Controls the minimum width of each step in the horizontal orientation. When the available width is smaller than the steps require, the steps scroll horizontally. Defaults to `96px`. _(default: undefined)_
 */
export const ForgeProgressTracker: React.ForwardRefExoticComponent<ForgeProgressTrackerProps>;
