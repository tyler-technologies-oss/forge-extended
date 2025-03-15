import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge-extended/responsive-toolbar";
import { useEventListener } from "./react-utils.js";

export const ForgeResponsiveToolbar = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { autoHeight, noBorder, inverted, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-responsive-toolbar-overflow",
    props.onForgeResponsiveToolbarOverflow,
  );

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
