import React from "react";
import { ForgeFooter as ForgeFooterElement } from "@tylertech/forge-extended/footer/footer";

export type { ForgeFooterElement };

export interface ForgeFooterProps
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
  /** Defines the footer layout mode. */
  layout?: ForgeFooterElement["layout"];

  /** Width breakpoint in pixels used when layout is set to `auto`. */
  layoutBreakpoint?: ForgeFooterElement["layoutBreakpoint"];

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
 * A footer component for displaying navigation, copyright, and branding information at the bottom of a page.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - Slot for footer items or custom content.
 * - **graphic** - Slot for footer graphic, such as a logo.
 *
 * ### **CSS Properties:**
 *  - **--forge-footer-background** - Controls the background color of the footer. _(default: undefined)_
 * - **--forge-footer-on-background** - Controls the text color of footer content. _(default: undefined)_
 * - **--forge-footer-padding** - Controls the padding of the footer. _(default: undefined)_
 * - **--forge-footer-padding-left** - Controls the left padding of the footer. _(default: undefined)_
 * - **--forge-footer-padding-right** - Controls the right padding of the footer. _(default: undefined)_
 * - **--forge-footer-gap** - Controls the gap between footer content and graphic in standard layout. _(default: undefined)_
 * - **--forge-footer-alternative-gap** - Controls the gap between stacked elements in alternative layout. _(default: undefined)_
 * - **--forge-footer-divider-margin** - Controls the margin around dividers between footer items. _(default: undefined)_
 */
export const ForgeFooter: React.ForwardRefExoticComponent<ForgeFooterProps>;
