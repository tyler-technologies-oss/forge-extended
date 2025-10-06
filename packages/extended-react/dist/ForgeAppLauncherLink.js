import React, { forwardRef } from "react";
import "@tylertech/forge-extended/app-launcher/app-launcher-link";

export const ForgeAppLauncherLink = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-app-launcher-link",
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
