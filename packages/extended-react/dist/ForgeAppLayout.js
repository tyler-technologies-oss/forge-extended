import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-extended/app-layout";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeAppLayout = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    useMiniDrawer,
    miniHover,
    appTitle,
    breakpoint,
    isLargeScreen,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-app-layout-breakpoint-change",
    props.onForgeAppLayoutBreakpointChange,
  );
  useEventListener(
    ref,
    "forge-app-layout-drawer-change",
    props.onForgeAppLayoutDrawerChange,
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "isLargeScreen", props.isLargeScreen);

  return React.createElement(
    "forge-app-layout",
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
      "app-title": props.appTitle || props["app-title"],
      breakpoint: props.breakpoint,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "use-mini-drawer": props.useMiniDrawer ? "" : undefined,
      "mini-hover": props.miniHover ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
