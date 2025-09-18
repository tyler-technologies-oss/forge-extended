import React, { forwardRef } from "react";
import "@tylertech/forge-extended/app-launcher/custom-link";

export const ForgeCustomLink = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-custom-link",
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
