import React, { forwardRef } from "react";
import "@tylertech/forge-extended/ai-chat-widget/ai-chat-interface";

export const ForgeAiChatInterface = forwardRef((props, forwardedRef) => {
  const { showExpandButton, showMinimizeButton, expanded, ...filteredProps } =
    props;

  return React.createElement(
    "forge-ai-chat-interface",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "show-expand-button": props.showExpandButton ? "" : undefined,
      "show-minimize-button": props.showMinimizeButton ? "" : undefined,
      expanded: props.expanded ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
