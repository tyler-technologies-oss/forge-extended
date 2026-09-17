import React from "react";
import { ForgeThemeToggle as ForgeThemeToggleElement } from "@tylertech/forge-extended/theme-toggle";

export type { ForgeThemeToggleElement };

export interface ForgeThemeToggleProps
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
  /** ARIA label for the theme toggle button group */
  groupAriaLabel?: ForgeThemeToggleElement["groupAriaLabel"];

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

  /** Fired when the theme changes, either from a user selection or, when `system` is selected, the OS color scheme preference changing. `detail.theme` is the selected mode and is unchanged for OS-driven updates while `system` remains selected; `detail.resolvedTheme` is the actual light/dark theme applied and is always the actionable value. */
  onForgeThemeToggleUpdate?: (
    event: CustomEvent<CustomEvent<ThemeToggleUpdateEventData>>,
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-theme-toggle-update** - Fired when the theme changes, either from a user selection or, when `system` is selected, the OS color scheme preference changing. `detail.theme` is the selected mode and is unchanged for OS-driven updates while `system` remains selected; `detail.resolvedTheme` is the actual light/dark theme applied and is always the actionable value.
 *
 * ### **Methods:**
 *  - **setTheme(value: _ThemeToggleTheme_): _void_** - Sets the current theme.
 *
 * ### **Slots:**
 *  - **title** - The title shown above the toggle buttons
 * - **light-label** - The text label for the light theme option
 * - **dark-label** - The text label for the dark theme option
 * - **system-label** - The text label for the system theme option
 */
export const ForgeThemeToggle: React.ForwardRefExoticComponent<ForgeThemeToggleProps>;
