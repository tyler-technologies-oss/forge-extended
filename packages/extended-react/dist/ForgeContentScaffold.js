import React, { forwardRef } from "react";
import "@tylertech/forge-extended/content-scaffold";

export const ForgeContentScaffold = forwardRef((props, forwardedRef) => {
  const { fullWidthHeader, fullWidthFooter, ...filteredProps } = props;

  return React.createElement(
    "forge-content-scaffold",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "full-width-header": props.fullWidthHeader ? "" : undefined,
      "full-width-footer": props.fullWidthFooter ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
