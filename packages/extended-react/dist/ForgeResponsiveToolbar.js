import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge-extended/responsive-toolbar";
import { useProperties } from "./react-utils.js";

export const ForgeResponsiveToolbar = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    autoHeight,
    noBorder,
    inverted,
    startSlotContainer,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "startSlotContainer", props.startSlotContainer);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-responsive-toolbar",
    {
      ref,
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
