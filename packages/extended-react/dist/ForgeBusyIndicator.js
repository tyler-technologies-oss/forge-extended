import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-extended/busy-indicator";
import { useEventListener } from "./react-utils.js";

export const ForgeBusyIndicator = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    open,
    cancelable,
    determinate,
    transparent,
    mode,
    titleText,
    headingLevel,
    message,
    label,
    description,
    variant,
    progress,
    buffer,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-busy-indicator-cancel",
    props.onForgeBusyIndicatorCancel,
  );

  return React.createElement(
    "forge-busy-indicator",
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
      mode: props.mode,
      "title-text": props.titleText || props["title-text"],
      "heading-level": props.headingLevel || props["heading-level"],
      message: props.message,
      label: props.label,
      description: props.description,
      variant: props.variant,
      progress: props.progress,
      buffer: props.buffer,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? "" : undefined,
      cancelable: props.cancelable ? "" : undefined,
      determinate: props.determinate ? "" : undefined,
      transparent: props.transparent ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
