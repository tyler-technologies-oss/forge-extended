import React from "react";
import { ForgeQuantityField as ForgeQuantityFieldElement } from "@tylertech/forge-extended/quantity-field";

export type { ForgeQuantityFieldElement };

export interface ForgeQuantityFieldProps
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
  /** Indicates whether the field is invalid. */
  invalid?: boolean;

  /** Indicates whether the field is required. */
  required?: boolean;

  /** The accessible label for the decrement button. */
  decrementLabel?: ForgeQuantityFieldElement["decrementLabel"];

  /** The accessible label for the increment button. */
  incrementLabel?: ForgeQuantityFieldElement["incrementLabel"];

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
 *  - _default_ - Reserved for the `<input>` element.
 * - **label** - The label for the field.
 * - **decrement-button** - The decrement button.
 * - **decrement-icon** - The icon for the decrement button.
 * - **increment-button** - The increment button.
 * - **increment-icon** - The icon for the increment button.
 * - **support-text** - The support text for the field.
 */
export const ForgeQuantityField: React.ForwardRefExoticComponent<ForgeQuantityFieldProps>;
