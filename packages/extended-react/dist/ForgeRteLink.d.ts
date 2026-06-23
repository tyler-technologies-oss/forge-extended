import React from "react";
import { ForgeRteLink as ForgeRteLinkElement } from "@tylertech/forge-extended/rich-text-editor/features";

export type { ForgeRteLinkElement };

export interface ForgeRteLinkProps
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
  /** Whether to automatically add https:// protocol if missing. */
  autoProtocol?: boolean;

  /** Whether to automatically add https:// protocol if missing from the URL. */
  autoProtocol?: boolean;

  /** The accessible label for the link button. */
  label?: ForgeRteLinkElement["label"];

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
 * Provides a link creation and editing button for the rich text editor.
 * ---
 *
 */
export const ForgeRteLink: React.ForwardRefExoticComponent<ForgeRteLinkProps>;
