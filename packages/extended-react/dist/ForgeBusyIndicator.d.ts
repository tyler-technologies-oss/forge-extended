import React from "react";
import { ForgeBusyIndicator as ForgeBusyIndicatorElement } from "@tylertech/forge-extended/busy-indicator";

export type { ForgeBusyIndicatorElement };

export interface ForgeBusyIndicatorProps
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
  /** Indicates whether the busy indicator is open. */
  open?: boolean;

  /** Indicates whether the cancel button is displayed. */
  cancelable?: boolean;

  /** Indicates whether the loading indicator is determinate. */
  determinate?: boolean;

  /** Indicates whether the busy indicator surface should be transparent (no background or elevation). */
  transparent?: boolean;

  /** Whether the busy indicator is fullscreen or inline. */
  mode?: ForgeBusyIndicatorElement["mode"];

  /** The title text to display. */
  titleText?: ForgeBusyIndicatorElement["titleText"];

  /** The message to display. */
  message?: ForgeBusyIndicatorElement["message"];

  /** The accessible label for dialog. */
  label?: ForgeBusyIndicatorElement["label"];

  /** The accessible description for dialog. */
  description?: ForgeBusyIndicatorElement["description"];

  /** The variant of the busy indicator.
- `spinner` (default): displays a spinner.
- `progress`: displays a progress bar.
- `message-only`: No progress indicator is displayed. */
  variant?: ForgeBusyIndicatorElement["variant"];

  /** The progress amount for the progress bar. */
  progress?: ForgeBusyIndicatorElement["progress"];

  /** The buffer amount for the progress bar. */
  buffer?: ForgeBusyIndicatorElement["buffer"];

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
}

/**
 *
 * ---
 *
 *
 * ### **Slots:**
 *  - **title** - The title text to display.
 * - **message** - The message to display.
 * - **cancel-text** - The text for the cancel button.
 */
export const ForgeBusyIndicator: React.ForwardRefExoticComponent<ForgeBusyIndicatorProps>;
