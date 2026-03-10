import React, { forwardRef } from "react";
import "@tylertech/forge-extended/structured-card";

export const ForgeStructuredCard = forwardRef((props, forwardedRef) => {
  const { fullWidth, headingLevel, ...filteredProps } = props;

  return React.createElement(
    "forge-structured-card",
    {
      ...filteredProps,
      "heading-level": props.headingLevel || props["heading-level"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "full-width": props.fullWidth ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
