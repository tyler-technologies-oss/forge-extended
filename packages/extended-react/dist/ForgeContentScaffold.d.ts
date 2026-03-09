import React from "react";
import { ForgeContentScaffold as ForgeContentScaffoldElement } from "@tylertech/forge-extended/content-scaffold";

export type { ForgeContentScaffoldElement };

export interface ForgeContentScaffoldProps
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
  /** When true, enables the full-width header mode using the `header` slot instead of the multi-slot layout. */
  fullWidthHeader?: boolean;

  /** When true, enables the full-width footer mode using the `footer` slot instead of the multi-slot layout. */
  fullWidthFooter?: boolean;

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
 *  - **header** - Full-width header content. Only used when `fullWidthHeader` is true.
 * - **before-header-start** - Content displayed before the header start slot. Only used when `fullWidthHeader` is false.
 * - **header-start** - Content displayed at the start of the header section. Only used when `fullWidthHeader` is false.
 * - **header-end** - Content displayed at the end of the header section. Only used when `fullWidthHeader` is false.
 * - **body** - The main body content that expands to fill available space.
 * - **footer** - Full-width footer content. Only used when `fullWidthFooter` is true.
 * - **footer-start** - Content displayed at the start of the footer section. Only used when `fullWidthFooter` is false.
 * - **footer-end** - Content displayed at the end of the footer section. Only used when `fullWidthFooter` is false.
 *
 * ### **CSS Properties:**
 *  - **--forge-content-scaffold-gap** - Controls the gap between header, body, and footer sections. Defaults to Forge's medium spacing token. _(default: undefined)_
 * - **--forge-content-scaffold-header-height** - Controls the height of the header section. Defaults to `auto`. _(default: undefined)_
 * - **--forge-content-scaffold-header-background** - Controls the background color of the header section. Defaults to `transparent`. _(default: undefined)_
 * - **--forge-content-scaffold-header-min-height** - Controls the minimum height of the header section. Defaults to `48px`. _(default: undefined)_
 * - **--forge-content-scaffold-body-height** - Controls the height of the body section. Defaults to `auto`. _(default: undefined)_
 * - **--forge-content-scaffold-body-padding-inline** - Controls the inline-padding applied to the body section. Defaults to Forge's medium spacing token. _(default: undefined)_
 * - **--forge-content-scaffold-footer-height** - Controls the height of the footer section. Defaults to `auto`. _(default: undefined)_
 * - **--forge-content-scaffold-footer-background** - Controls the background color of the footer section. Defaults to `transparent`. _(default: undefined)_
 * - **--forge-content-scaffold-footer-min-height** - Controls the minimum height of the footer section. Defaults to `48px`. _(default: undefined)_
 */
export const ForgeContentScaffold: React.ForwardRefExoticComponent<ForgeContentScaffoldProps>;
