import React, { forwardRef } from "react";
import "@tylertech/forge-extended/rich-text-editor/features";

export const ForgeRteAlign = forwardRef((props, forwardedRef) => {
  const {
    leftLabel,
    centerLabel,
    rightLabel,
    justifyLabel,
    leftLabel,
    centerLabel,
    rightLabel,
    justifyLabel,
    ...filteredProps
  } = props;

  return React.createElement(
    "forge-rte-align",
    {
      ...filteredProps,
      "left-label": props.leftLabel || props["left-label"],
      "center-label": props.centerLabel || props["center-label"],
      "right-label": props.rightLabel || props["right-label"],
      "justify-label": props.justifyLabel || props["justify-label"],
      leftLabel: props.leftLabel,
      centerLabel: props.centerLabel,
      rightLabel: props.rightLabel,
      justifyLabel: props.justifyLabel,
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
