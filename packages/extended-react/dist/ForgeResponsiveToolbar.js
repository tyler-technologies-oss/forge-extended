import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-extended/responsive-toolbar";
import { useEventListener } from "./react-utils.js";

export const ForgeResponsiveToolbar = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { noBorder, inverted, resizeDelay, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-responsive-toolbar-update",
    props.onForgeResponsiveToolbarUpdate,
  );

  return React.createElement(
    "forge-responsive-toolbar",
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
      "resize-delay": props.resizeDelay || props["resize-delay"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "no-border": props.noBorder ? "" : undefined,
      inverted: props.inverted ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
