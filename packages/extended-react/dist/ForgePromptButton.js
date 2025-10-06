import React, { forwardRef } from "react";
import "@tylertech/forge-extended/ai/ai-prompt/prompt-button";

export const ForgePromptButton = forwardRef((props, forwardedRef) => {
  const { disabled, ...filteredProps } = props;

  return React.createElement(
    "forge-prompt-button",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
