import React, { forwardRef } from "react";
import "@tylertech/forge-extended/rich-text-editor/features";

export const ForgeRteItalic = forwardRef((props, forwardedRef) => {
  const { label, ...filteredProps } = props;

  return React.createElement(
    "forge-rte-italic",
    {
      ...filteredProps,
      label: props.label,
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
