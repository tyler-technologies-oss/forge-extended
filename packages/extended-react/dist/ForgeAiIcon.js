import React, { forwardRef } from "react";
import "@tylertech/forge-extended/ai-chat-widget/ai-icon";

export const ForgeAiIcon = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-ai-icon",
    {
      ...props,
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
