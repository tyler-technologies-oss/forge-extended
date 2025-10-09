import React, { forwardRef } from "react";
import "@tylertech/forge-extended/ai/ai-chain-of-thought/thought-base";

export const ForgeAiThoughtBase = forwardRef((props, forwardedRef) => {
  const { step, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-thought-base",
    {
      ...filteredProps,
      step: props.step,
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
