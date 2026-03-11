import React, { forwardRef } from "react";
import "@tylertech/forge-extended/content-scaffold";

export const ForgeContentScaffold = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-content-scaffold",
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
