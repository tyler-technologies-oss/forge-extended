import React, { forwardRef } from "react";
import "@tylertech/forge-extended/ai-chat-widget";

export const ForgeAiChatWidget = forwardRef((props, forwardedRef) => {
  const { open, fullsize, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-chat-widget",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? "" : undefined,
      fullsize: props.fullsize ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
