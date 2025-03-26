import React from "react";
import { ForgeResponsiveToolbar as ForgeResponsiveToolbarElement } from "@tylertech/forge-extended/responsive-toolbar";

export type { ForgeResponsiveToolbarElement };

export interface ForgeResponsiveToolbarProps
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
  /** Hides the internal divider */
  noBorder?: boolean;

  /** Controls whether a bottom divider (default) or top divider (true) is used. */
  inverted?: boolean;

  /** Controls the delay in milliseconds to throttle resize events */
  resizeDelay?: ForgeResponsiveToolbarElement["resizeDelay"];

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

  /** Dispatched when the overflow state changes. */
  onForgeResponsiveToolbarUpdate?: (
    event: CustomEvent<CustomEvent<ResponsiveToolbarUpdateEventData>>,
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-responsive-toolbar-update** - Dispatched when the overflow state changes.
 *
 * ### **Slots:**
 *  - **before-start** - Maps to the toolbar before-start slot
 * - **start** - Maps to the toolbar start slot
 * - **end-large** - The content you want to render at larger sizes in the toolbar end slot
 * - **end-small** - The content you want to render at smaller sizes in the toolbar end slot
 * - **after-end** - Maps to the toolbar after-end slot
 */
export const ForgeResponsiveToolbar: React.ForwardRefExoticComponent<ForgeResponsiveToolbarProps>;
