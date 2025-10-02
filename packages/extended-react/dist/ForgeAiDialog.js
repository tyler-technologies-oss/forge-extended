import React, { forwardRef } from "react";
import "@tylertech/forge-extended/ai-chat-widget/ai-dialog";

export const ForgeAiDialog = forwardRef((props, forwardedRef) => {
  const { open, expanded, ...filteredProps } = props;

  return React.createElement(
    "forge-ai-dialog",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? "" : undefined,
      expanded: props.expanded ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
