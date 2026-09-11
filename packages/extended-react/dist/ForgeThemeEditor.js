import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-extended/theme-editor";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeThemeEditor = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { preview, exportFormat, theme, previewSelectors, ...filteredProps } =
    props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-theme-editor-import",
    props.onForgeThemeEditorImport,
  );
  useEventListener(
    ref,
    "forge-theme-editor-change",
    props.onForgeThemeEditorChange,
  );
  useEventListener(
    ref,
    "forge-theme-editor-preview",
    props.onForgeThemeEditorPreview,
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "theme", props.theme);
  useProperties(ref, "previewSelectors", props.previewSelectors);

  return React.createElement(
    "forge-theme-editor",
    {
      ref: (node) => {
        ref.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      ...filteredProps,
      "export-format": props.exportFormat || props["export-format"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      preview: props.preview ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
