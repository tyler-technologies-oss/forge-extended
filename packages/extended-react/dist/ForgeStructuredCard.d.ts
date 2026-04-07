import React from "react";
import { ForgeStructuredCard as ForgeStructuredCardElement } from "@tylertech/forge-extended/structured-card";

export type { ForgeStructuredCardElement };

export interface ForgeStructuredCardProps
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
  /** Controls the semantic heading level for the title content. Defaults to `2` (h2).
Use this to maintain proper heading hierarchy in your document structure. */
  headingLevel?: ForgeStructuredCardElement["headingLevel"];

  /** Controls the spacing applied to the body section. Defaults to `default`.
- `default`: Applies standard padding to the body section.
- `none`: Removes padding from the body section for full-width content like tables. */
  bodySpacing?: ForgeStructuredCardElement["bodySpacing"];

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
 *  - **before-title** - Content displayed before the title in the header
 * - **title** - The title content displayed in the header
 * - **header-actions** - Action buttons or controls displayed at the end of the header
 * - **after-header-actions** - Content displayed after the header actions, designed specifically for icon buttons that need to run up against the card edge (ie: menu icon button)
 * - **body** - The main body content of the card
 * - **footer-start** - Content displayed at the start of the footer (e.g., pagination controls)
 * - **footer-secondary-action** - Secondary action button displayed at the end of the footer
 * - **footer-primary-action** - Primary action button displayed at the end of the footer
 *
 * ### **CSS Properties:**
 *  - **--forge-structured-card-body-height** - Controls the height of the body content. Defaults to `auto`. _(default: undefined)_
 */
export const ForgeStructuredCard: React.ForwardRefExoticComponent<ForgeStructuredCardProps>;
