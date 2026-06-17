import React, { forwardRef } from "react";
import "@tylertech/forge-extended/rich-text-editor";

export const ForgeRichTextRenderer = forwardRef((props, forwardedRef) => {
  const { content, ...filteredProps } = props;

  return React.createElement(
    "forge-rich-text-renderer",
    {
      ...filteredProps,
      content: props.content,
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
