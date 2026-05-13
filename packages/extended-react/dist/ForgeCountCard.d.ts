import React from "react";
import { ForgeCountCard as ForgeCountCardElement } from "@tylertech/forge-extended/count-card";

export type { ForgeCountCardElement };

export interface ForgeCountCardProps
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
  /** Whether to hide the card border. */
  noBorder?: boolean;

  /** The theme variant applied to the card. */
  theme?: ForgeCountCardElement["theme"];

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
 * A card component for displaying a count or metric with an icon and label.
 * ---
 *
 *
 * ### **Slots:**
 *  - **icon** - The icon displayed at the start of the card header.
 * - **label** - The label text displayed next to the icon.
 * - **header-end** - Optional content at the end of the header, ideal for badges or small accessories.
 * - **action** - Optional slot for a `forge-icon-button`. Use this instead of `header-end` for icon buttons, as it provides proper alignment for the 48x48 touch target.
 * - **count** - The main count or value displayed prominently below the header.
 * - **count-end** - Optional content displayed after the count, ideal for units or secondary values.
 * - **body** - Optional content below the count for additional details or secondary information.
 * - **full-width** - Optional full-width content below the primary card content, ideal for sparklines, meters, or progress indicators.
 *
 * ### **CSS Properties:**
 *  - **--forge-count-card-icon-background** - Controls the background color of the icon container. Defaults to Forge's surface-container color. _(default: undefined)_
 * - **--forge-count-card-icon-color** - Controls the color of the icon. Defaults to Forge's on-surface color. _(default: undefined)_
 * - **--forge-count-card-icon-container-size** - Controls the size of the icon container. Defaults to `32px`. _(default: undefined)_
 * - **--forge-count-card-icon-size** - Controls the size of the icon itself. Defaults to `24px`. _(default: undefined)_
 * - **--forge-count-card-color** - Controls the text color of the label and count. Inherited from theme when a theme is applied. _(default: undefined)_
 */
export const ForgeCountCard: React.ForwardRefExoticComponent<ForgeCountCardProps>;
