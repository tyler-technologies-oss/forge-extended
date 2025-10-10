import React, { forwardRef } from "react";
import "@tylertech/forge-extended/ai/ai-fab";

export const ForgeAiFab = forwardRef((props, forwardedRef) => {
  const { disabled, extended, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-fab",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? "" : undefined,
      extended: props.extended ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
