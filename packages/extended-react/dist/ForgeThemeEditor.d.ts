import React from "react";
import { ForgeThemeEditor as ForgeThemeEditorElement } from "@tylertech/forge-extended/theme-editor";

export type { ForgeThemeEditorElement };

export interface ForgeThemeEditorProps
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
  /** Whether the CSS and Sass exports express each derived ramp as a CSS relative
color of the token it came from, so changing a base updates its ramp rather
than leaving it frozen at export time.

Off by default: a literal value works in every engine and every tool, and on
an engine without relative color support the declaration is dropped silently
rather than erroring. */
  relativeColors?: boolean;

  /** The export format shown on the import/export view. */
  exportFormat?: ForgeThemeEditorElement["exportFormat"];

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

  /** The theme being edited. */
  theme?: ForgeThemeEditorElement["theme"];

  /** Fired when a theme is imported. */
  onForgeThemeEditorImport?: (
    event: CustomEvent<CustomEvent<ThemeEditorImportEventData>>,
  ) => void;

  /** Fired when the theme is edited. */
  onForgeThemeEditorChange?: (
    event: CustomEvent<CustomEvent<ThemeEditorChangeEventData>>,
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-theme-editor-import** - Fired when a theme is imported.
 * - **forge-theme-editor-change** - Fired when the theme is edited.
 *
 * ### **Methods:**
 *  - **getTheme(): _ForgeTheme_** - Returns the theme being edited.
 * - **loadTheme(theme: _ForgeThemeInput | null | undefined_): _void_** - Replaces the theme being edited. Anything the value omits is filled in with a
 * default, so a partial theme or a bare token map is accepted.
 * - **exportTheme(format: _ForgeThemeExportFormat_): _string_** - Emits the theme in the requested format.
 * - **importTheme(text: _string_): __** - Imports theme JSON, dropping unknown token names rather than emitting dead
 * custom properties.
 * - **generatePalette(seeds: _ForgeThemeSeeds | null_): _void_** - Derives the full token set from seed colors.
 * - **setToken(token: _string_, value: _string_): _void_** - Sets one token, or clears it when the value is empty.
 * - **resetToken(token: _string_): _void_** - Reverts one token to the Forge default for the theme's mode.
 * - **resetAllTokens(): _void_** - Reverts every token in the active variant to the Forge defaults.
 * - **getContrastReport(): _ThemeContrastEntry[]_** - Reports the contrast ratio of every `on-*` token against its background,
 * worst first.
 *
 * ### **Slots:**
 *  - **title** - The title shown in the editor header.
 */
export const ForgeThemeEditor: React.ForwardRefExoticComponent<ForgeThemeEditorProps>;
