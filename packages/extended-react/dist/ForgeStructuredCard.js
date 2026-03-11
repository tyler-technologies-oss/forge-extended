import React, { forwardRef } from "react";
import "@tylertech/forge-extended/structured-card";

export const ForgeStructuredCard = forwardRef((props, forwardedRef) => {
  const { headingLevel, bodySpacing, ...filteredProps } = props;

  return React.createElement(
    "forge-structured-card",
    {
      ...filteredProps,
      "heading-level": props.headingLevel || props["heading-level"],
      "body-spacing": props.bodySpacing || props["body-spacing"],
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
