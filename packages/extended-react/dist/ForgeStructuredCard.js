import React, { forwardRef } from "react";
import "@tylertech/forge-extended/structured-card";

export const ForgeStructuredCard = forwardRef((props, forwardedRef) => {
  const { withTable, headingLevel, ...filteredProps } = props;

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
      "with-table": props.withTable ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
