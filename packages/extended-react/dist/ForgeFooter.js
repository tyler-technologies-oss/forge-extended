import React, { forwardRef } from "react";
import "@tylertech/forge-extended/footer/footer";

export const ForgeFooter = forwardRef((props, forwardedRef) => {
  const { layout, layoutBreakpoint, ...filteredProps } = props;

  return React.createElement(
    "forge-footer",
    {
      ...filteredProps,
      layout: props.layout,
      "layout-breakpoint": props.layoutBreakpoint || props["layout-breakpoint"],
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
