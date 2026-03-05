import React from "react";
import { ForgeAppLayout as ForgeAppLayoutElement } from "@tylertech/forge-extended/app-layout";

export type { ForgeAppLayoutElement };

export interface ForgeAppLayoutProps
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
  /** Whether to use forge-mini-drawer instead of forge-drawer for large screens (default: true) */
  useMiniDrawer?: boolean;

  /** Whether the mini drawer should expand on hover (default: false) */
  miniHover?: boolean;

  /** Whether the scaffold should fill the viewport (default: true) */
  viewport?: boolean;

  /** The title text to display in the app bar */
  appTitle?: ForgeAppLayoutElement["appTitle"];

  /** The screen width breakpoint in pixels for responsive behavior (default: 960) */
  breakpoint?: ForgeAppLayoutElement["breakpoint"];

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
 *  - **default** - The main content area
 * - **header** - Places content in the header
 * - **footer** - Places content in the footer
 * - **left** - Places content to the left of all content
 * - **right** - Places content to the right of all content
 * - **body-header** - Places content in the header of the body
 * - **body-footer** - Places content in the footer of the body
 * - **body-left** - Places content to the left of the body content
 * - **body-right** - Places content to the right of the body content
 * - **navigation** - Responsive navigation content that renders in left slot (small screens) or body-left slot (large screens)
 * - **app-bar-logo** - Places content in the app bar logo slot
 * - **app-bar-start** - Places content in the app bar start slot
 * - **app-bar-center** - Places content in the app bar center slot
 * - **app-bar-end** - Places content in the app bar end slot
 */
export const ForgeAppLayout: React.ForwardRefExoticComponent<ForgeAppLayoutProps>;
