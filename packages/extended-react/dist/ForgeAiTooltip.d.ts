import React from "react";
import { ForgeAiTooltip as ForgeAiTooltipElement } from "@tylertech/forge-extended/ai/core/tooltip";

export type { ForgeAiTooltipElement };

export interface ForgeAiTooltipProps
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
  /** Whether the tooltip is open. */
  open?: boolean;

  /** The ID of the anchor element to attach the tooltip to. */
  for?: ForgeAiTooltipElement["for"];

  /** The text content of the tooltip (alternative to slotted content). */
  text?: ForgeAiTooltipElement["text"];

  /** The placement of the tooltip relative to the anchor. */
  placement?: ForgeAiTooltipElement["placement"];

  /** How the tooltip should be triggered. */
  trigger?: ForgeAiTooltipElement["trigger"];

  /** Delay in milliseconds before showing the tooltip. */
  delay?: ForgeAiTooltipElement["delay"];

  /** Delay in milliseconds before hiding the tooltip. */
  hideDelay?: ForgeAiTooltipElement["hideDelay"];

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

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
 * A tooltip component with accessibility features and dynamic positioning.
 * ---
 *
 *
 * ### **Methods:**
 *  - **show(): _void_** - Show the tooltip programmatically.
 * - **hide(): _void_** - Hide the tooltip programmatically.
 * - **toggle(): _void_** - Toggle the tooltip programmatically.
 *
 * ### **Slots:**
 *  - _default_ - The default slot for tooltip content.
 *
 * ### **CSS Properties:**
 *  - **--ai-tooltip-max-width** - The maximum width of the tooltip. _(default: undefined)_
 * - **--ai-tooltip-z-index** - The z-index of the tooltip overlay. _(default: undefined)_
 */
export const ForgeAiTooltip: React.ForwardRefExoticComponent<ForgeAiTooltipProps>;
