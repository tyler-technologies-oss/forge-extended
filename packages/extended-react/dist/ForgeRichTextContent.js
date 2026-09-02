import React, { forwardRef } from "react";
import "@tylertech/forge-extended/rich-text-editor";

export const ForgeRichTextContent = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-rich-text-content",
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
