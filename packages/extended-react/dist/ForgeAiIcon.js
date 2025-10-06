import React, { forwardRef } from "react";
import "@tylertech/forge-extended/ai/ai-icon";

export const ForgeAiIcon = forwardRef((props, forwardedRef) => {
  const { outline, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-icon",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      outline: props.outline ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
