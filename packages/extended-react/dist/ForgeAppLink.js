import React, { forwardRef } from "react";
import "@tylertech/forge-extended/app-launcher/app-link";

export const ForgeAppLink = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-app-link",
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
