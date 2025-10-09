import React, { forwardRef } from "react";
import "@tylertech/forge-extended/ai/ai-chain-of-thought";

export const ForgeAiChainOfThought = forwardRef((props, forwardedRef) => {
  const { expanded, title, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-chain-of-thought",
    {
      ...filteredProps,
      title: props.title,
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
