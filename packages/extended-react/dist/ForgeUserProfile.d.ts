import React from "react";
import {
  ForgeUserProfile as ForgeUserProfileElement,
  Event,
} from "@tylertech/forge-extended/user-profile";

export type { ForgeUserProfileElement, Event };

export interface ForgeUserProfileProps
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
  /** Indicates whether the theme toggle is visible */
  themeToggle?: boolean;

  /** Controls whether the user profile popover is open */
  open?: boolean;

  /** The full name of the user */
  fullName?: ForgeUserProfileElement["fullName"];

  /** The email address of the user */
  email?: ForgeUserProfileElement["email"];

  /** The image URL for the user avatar */
  imageUrl?: ForgeUserProfileElement["imageUrl"];

  /** ARIA label for the user profile avatar button */
  buttonLabel?: ForgeUserProfileElement["buttonLabel"];

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

  /** Fired when the sign out button is clicked. */
  onForgeUserProfileSignOut?: (event: CustomEvent) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-user-profile-sign-out** - Fired when the sign out button is clicked.
 *
 * ### **Methods:**
 *  - **setTheme(value: _ThemeToggleTheme_): _void_** - Sets the theme for the theme toggle.
 *
 * ### **Slots:**
 *  - **link** - Slot for additional profile navigation links
 * - **sign-out-button-text** - Slot for the sign out button text
 */
export const ForgeUserProfile: React.ForwardRefExoticComponent<ForgeUserProfileProps>;
