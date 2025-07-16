import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-extended/theme-toggle";
import { useEventListener } from "./react-utils.js";

export const ForgeThemeToggle = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-theme-toggle-update",
    props.onForgeThemeToggleUpdate,
  );

  return React.createElement(
    "forge-theme-toggle",
    {
      ref: (node) => {
        ref.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      ...props,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      style: { ...props.style },
    },
    props.children,
  );
});
