import React from "react";
import { ForgeConfirmationDialog as ForgeConfirmationDialogElement } from "@tylertech/forge-extended/confirmation-dialog";

export type { ForgeConfirmationDialogElement };

export interface ForgeConfirmationDialogProps
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
  /** Indicates whether the confirmation dialog is open */
  open?: boolean;

  /** Indicates whether the confirmation dialog is in a busy state */
  isBusy?: boolean;

  /** The accessible label for dialog */
  label?: ForgeConfirmationDialogElement["label"];

  /** The accessible description for dialog */
  description?: ForgeConfirmationDialogElement["description"];

  /** ARIA label for the the busy indicator when loading */
  busyLabel?: ForgeConfirmationDialogElement["busyLabel"];

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

  /** Fired when an action button is clicked. Will contain `false` if the secondary button is clicked, `true` if the primary button is clicked. */
  onForgeConfirmationDialogAction?: (
    event: CustomEvent<CustomEvent<ConfirmationDialogActionEventData>>,
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-confirmation-dialog-action** - Fired when an action button is clicked. Will contain `false` if the secondary button is clicked, `true` if the primary button is clicked.
 *
 * ### **Slots:**
 *  - **title** - The title of the dialog
 * - **message** - The dialog message
 * - **secondary-button-text** - The text used in the secondary action button
 * - **primary-button-text** - The text used in the primary action button
 */
export const ForgeConfirmationDialog: React.ForwardRefExoticComponent<ForgeConfirmationDialogProps>;
