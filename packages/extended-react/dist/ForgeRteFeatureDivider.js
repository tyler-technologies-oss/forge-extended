import React, { forwardRef } from "react";
import "@tylertech/forge-extended/rich-text-editor/features";

export const ForgeRteFeatureDivider = forwardRef((props, forwardedRef) => {
  return React.createElement(
    "forge-rte-feature-divider",
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
