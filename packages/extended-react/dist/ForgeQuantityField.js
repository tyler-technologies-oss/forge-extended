import React, { forwardRef } from "react";
import "@tylertech/forge-extended/quantity-field";

export const ForgeQuantityField = forwardRef((props, forwardedRef) => {
  const {
    invalid,
    required,
    decrementLabel,
    incrementLabel,
    ...filteredProps
  } = props;

  return React.createElement(
    "forge-quantity-field",
    {
      ...filteredProps,
      "decrement-label": props.decrementLabel || props["decrement-label"],
      "increment-label": props.incrementLabel || props["increment-label"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      invalid: props.invalid ? "" : undefined,
      required: props.required ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
