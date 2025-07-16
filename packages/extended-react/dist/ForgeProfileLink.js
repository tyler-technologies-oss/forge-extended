import React, { forwardRef } from "react";
import "@tylertech/forge-extended/profile-link";

export const ForgeProfileLink = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-profile-link",
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
