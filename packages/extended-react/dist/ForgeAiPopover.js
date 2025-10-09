import React, { forwardRef } from "react";
import "@tylertech/forge-extended/ai/core/popover";

export const ForgeAiPopover = forwardRef((props, forwardedRef) => {
  const { flip, shift, open, anchor, placement, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-popover",
    {
      ...filteredProps,
      anchor: props.anchor,
      placement: props.placement,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      flip: props.flip ? "" : undefined,
      shift: props.shift ? "" : undefined,
      open: props.open ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
