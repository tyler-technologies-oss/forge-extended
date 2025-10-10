import React from "react";
import { ForgeAiChatInterface as ForgeAiChatInterfaceElement } from "@tylertech/forge-extended/ai/ai-chat-interface";

export type { ForgeAiChatInterfaceElement };

export interface ForgeAiChatInterfaceProps
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
  /** Controls whether the expand button is visible in the header */
  showExpandButton?: boolean;

  /** Controls whether the minimize button is visible in the header */
  showMinimizeButton?: boolean;

  /** Indicates the current expanded state for displaying the appropriate expand/collapse icon */
  expanded?: boolean;

  /** Controls which minimize icon to display in the header */
  minimizeIcon?: ForgeAiChatInterfaceElement["minimizeIcon"];

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
 *  - _default_ - Default slot for messages
 * - **suggestions** - Slot for AI suggestions component
 * - **prompt** - Slot for custom AI prompt component. If not provided, a default forge-ai-prompt will be used.
 */
export const ForgeAiChatInterface: React.ForwardRefExoticComponent<ForgeAiChatInterfaceProps>;
