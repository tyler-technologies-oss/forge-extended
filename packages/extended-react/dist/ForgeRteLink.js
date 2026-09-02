import React, { forwardRef } from "react";
import "@tylertech/forge-extended/rich-text-editor/features";

export const ForgeRteLink = forwardRef((props, forwardedRef) => {
  const { autoProtocol, label, ...filteredProps } = props;

  return React.createElement(
    "forge-rte-link",
    {
      ...filteredProps,
      label: props.label,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "auto-protocol": props.autoProtocol ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
