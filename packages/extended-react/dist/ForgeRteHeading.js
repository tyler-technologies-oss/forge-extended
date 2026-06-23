import React, { forwardRef } from "react";
import "@tylertech/forge-extended/rich-text-editor/features";

export const ForgeRteHeading = forwardRef((props, forwardedRef) => {
  const { h1Label, h2Label, h3Label, ...filteredProps } = props;

  return React.createElement(
    "forge-rte-heading",
    {
      ...filteredProps,
      "h1-label": props.h1Label || props["h1-label"],
      "h2-label": props.h2Label || props["h2-label"],
      "h3-label": props.h3Label || props["h3-label"],
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
