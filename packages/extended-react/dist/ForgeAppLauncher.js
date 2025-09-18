import React, { forwardRef } from "react";
import "@tylertech/forge-extended/app-launcher";

export const ForgeAppLauncher = forwardRef((props, forwardedRef) => {
  const {
    open,
    smallScreen,
    fullscreen,
    appView,
    relatedApps,
    customLinks,
    allApps,
    ...filteredProps
  } = props;

  return React.createElement(
    "forge-app-launcher",
    {
      ...filteredProps,
      appView: props.appView,
      relatedApps: props.relatedApps,
      customLinks: props.customLinks,
      allApps: props.allApps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? "" : undefined,
      "small-screen": props.smallScreen ? "" : undefined,
      fullscreen: props.fullscreen ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
