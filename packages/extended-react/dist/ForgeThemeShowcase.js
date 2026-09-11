import React, { forwardRef } from "react";
import "@tylertech/forge-extended/theme-editor/theme-showcase";

export const ForgeThemeShowcase = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-theme-showcase",
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
