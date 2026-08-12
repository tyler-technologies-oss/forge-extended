import React from "react";
import { ForgeLandingPageLayout as ForgeLandingPageLayoutElement } from "@tylertech/forge-extended/landing-page-layout";

export type { ForgeLandingPageLayoutElement };

export interface ForgeLandingPageLayoutProps
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
  /** Controls the body column layout: `two-third` (default), `equal`, `three`, or `single`. */
  mode?: ForgeLandingPageLayoutElement["mode"];

  /** Controls the horizontal alignment of the header content: `center` (default) or `left`. */
  alignment?: ForgeLandingPageLayoutElement["alignment"];

  /** Controls the maximum width of the content area: `normal` (default) or `wide`. */
  size?: ForgeLandingPageLayoutElement["size"];

  /** URL of the background image to use on large screens (>= 769px). */
  imageUrlLarge?: ForgeLandingPageLayoutElement["imageUrlLarge"];

  /** URL of the background image to use on small screens (<= 768px). */
  imageUrlSmall?: ForgeLandingPageLayoutElement["imageUrlSmall"];

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
 * A responsive structural layout utility for building citizen-facing application landing pages consistent with Tyler patterns.
 * ---
 *
 *
 * ### **Slots:**
 *  - **image** - Slot for a custom background image element (typically an `<img>` or `<picture>`).
 * - **secondary-title** - Small subheading text displayed above the main title in the header.
 * - **main-title** - The main heading text of the header.
 * - **action** - One or more calls to action displayed below the title in the header. Apply the `on-image` class to a slotted `forge-button` to make it legible over a background image (text/outlined buttons render white; filled buttons swap to a white background with a dark label).
 * - **announcements** - Content displayed to the right of the header body (typically announcements or informational content).
 * - **top** - Content displayed above the main body columns, spanning the full width.
 * - **left** - Content for the left column of the body.
 * - **center** - Content for the middle column (only shown when `mode` is `three`).
 * - **right** - Content for the right column of the body.
 * - **body-footer** - Content displayed at the bottom of the body, spanning the full width.
 * - **footer** - Content for the page footer (typically dark themed).
 *
 * ### **CSS Properties:**
 *  - **--forge-landing-page-layout-content-width** - Maximum width of the content area when `size` is `normal`. Defaults to `1040px`. _(default: undefined)_
 * - **--forge-landing-page-layout-content-width-wide** - Maximum width of the content area when `size` is `wide`. Defaults to `1280px`. _(default: undefined)_
 * - **--forge-landing-page-layout-body-padding** - Padding around the body content area. Defaults to `24px`. _(default: undefined)_
 * - **--forge-landing-page-layout-body-padding-mobile** - Padding around the body on mobile screens. Defaults to `8px`. _(default: undefined)_
 * - **--forge-landing-page-layout-footer-padding** - Inline padding of the footer. Defaults to `70px`. _(default: undefined)_
 * - **--forge-landing-page-layout-root-height** - Height of the root container. Defaults to `100%`. _(default: undefined)_
 * - **--forge-landing-page-layout-actions-gap** - Gap between action items in the header on large screens. _(default: undefined)_
 * - **--forge-landing-page-layout-actions-gap-mobile** - Gap between action items in the header on mobile screens. _(default: undefined)_
 * - **--forge-landing-page-layout-header-color** - Color of the header title and secondary title text. Defaults to white so the light-on-dark header treatment holds across themes. _(default: undefined)_
 * - **--forge-landing-page-layout-header-gradient-start** - Start color of the header background gradient. Defaults to Forge blue-800. _(default: undefined)_
 * - **--forge-landing-page-layout-header-gradient-end** - End color of the header background gradient. Defaults to Forge indigo-900. _(default: undefined)_
 * - **--forge-landing-page-layout-header-overlay-start** - Top color of the darkening overlay layered over the header background image. Defaults to Forge black at 75% opacity. _(default: undefined)_
 * - **--forge-landing-page-layout-header-overlay-end** - Bottom color of the darkening overlay layered over the header background image. Defaults to Forge black at 55% opacity. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The outermost container element.
 * - **container** - The main wrapper that holds the header and body.
 * - **header** - The header region.
 * - **header-background** - The header background image container.
 * - **header-background-picture** - The `<picture>` element used to render the responsive background image.
 * - **header-body** - The header body containing the title and announcements.
 * - **header-body-left** - The left side of the header body (title and actions).
 * - **header-body-right** - The right side of the header body (announcements).
 * - **header-welcome** - The welcome title container.
 * - **header-actions** - The container that holds the action slot.
 * - **body** - The main body container.
 * - **body-top** - The top area of the body.
 * - **body-left** - The left column of the body.
 * - **body-center** - The center column of the body.
 * - **body-right** - The right column of the body.
 * - **body-footer** - The footer of the body.
 * - **footer** - The page footer region.
 */
export const ForgeLandingPageLayout: React.ForwardRefExoticComponent<ForgeLandingPageLayoutProps>;
