import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge-extended/responsive-toolbar";

export const ForgeResponsiveToolbar = forwardRef((props, forwardedRef) => {
  const { autoHeight, noBorder, inverted, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-responsive-toolbar",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "auto-height": props.autoHeight ? "" : undefined,
      "no-border": props.noBorder ? "" : undefined,
      inverted: props.inverted ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
