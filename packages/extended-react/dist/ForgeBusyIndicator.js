import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge-extended/busy-indicator";

export const ForgeBusyIndicator = forwardRef((props, forwardedRef) => {
  const {
    open,
    cancelable,
    determinate,
    transparent,
    mode,
    titleText,
    message,
    label,
    description,
    variant,
    progress,
    buffer,
    ...filteredProps
  } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-busy-indicator",
    {
      ...filteredProps,
      mode: props.mode,
      "title-text": props.titleText || props["title-text"],
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
