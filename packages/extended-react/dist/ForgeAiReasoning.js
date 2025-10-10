import React, { forwardRef } from "react";
import "@tylertech/forge-extended/ai/ai-reasoning";

export const ForgeAiReasoning = forwardRef((props, forwardedRef) => {
  const { expanded, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-reasoning",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      expanded: props.expanded ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
