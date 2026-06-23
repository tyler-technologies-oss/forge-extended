import React, { forwardRef } from "react";
import "@tylertech/forge-extended/rich-text-editor/features";

export const ForgeRteStandardTools = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-rte-standard-tools",
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
