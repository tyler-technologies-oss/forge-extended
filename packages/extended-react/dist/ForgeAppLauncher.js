import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-extended/app-launcher";
import { useProperties } from "./react-utils.js";

export const ForgeAppLauncher = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    open,
    breakpoint,
    launcherAriaLabel,
    backAriaLabel,
    closeAriaLabel,
    relatedApps,
    allApps,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "relatedApps", props.relatedApps);
  useProperties(ref, "allApps", props.allApps);

  return React.createElement(
    "forge-app-launcher",
    {
      ref: (node) => {
        ref.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      ...filteredProps,
      breakpoint: props.breakpoint,
      "launcher-aria-label":
        props.launcherAriaLabel || props["launcher-aria-label"],
      "back-aria-label": props.backAriaLabel || props["back-aria-label"],
      "close-aria-label": props.closeAriaLabel || props["close-aria-label"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
