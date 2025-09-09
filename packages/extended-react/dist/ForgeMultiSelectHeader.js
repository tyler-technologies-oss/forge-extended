import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-extended/multi-select-header";
import { useEventListener } from "./react-utils.js";

export const ForgeMultiSelectHeader = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { noBorder, text, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-multi-select-header-select-all",
    props.onForgeMultiSelectHeaderSelectAll,
  );

  return React.createElement(
    "forge-multi-select-header",
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
      text: props.text,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "no-border": props.noBorder ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
