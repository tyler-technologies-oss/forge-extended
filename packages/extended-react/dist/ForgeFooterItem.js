import React, { forwardRef } from "react";
import "@tylertech/forge-extended/footer/footer-item";

export const ForgeFooterItem = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-footer-item",
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
