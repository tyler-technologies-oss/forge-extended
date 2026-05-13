import React, { forwardRef } from "react";
import "@tylertech/forge-extended/count-card";

export const ForgeCountCard = forwardRef((props, forwardedRef) => {
  const { noBorder, theme, ...filteredProps } = props;

  return React.createElement(
    "forge-count-card",
    {
      ...filteredProps,
      theme: props.theme,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "no-border": props.noBorder ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
