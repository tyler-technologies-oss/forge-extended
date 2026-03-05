import React, { forwardRef } from "react";
import "@tylertech/forge-extended/app-layout";

export const ForgeAppLayout = forwardRef((props, forwardedRef) => {
  const {
    useMiniDrawer,
    miniHover,
    viewport,
    appTitle,
    breakpoint,
    ...filteredProps
  } = props;

  return React.createElement(
    "forge-app-layout",
    {
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
      viewport: props.viewport ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
