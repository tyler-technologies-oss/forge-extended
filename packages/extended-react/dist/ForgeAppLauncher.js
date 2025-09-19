import React, { forwardRef } from "react";
import "@tylertech/forge-extended/app-launcher";

export const ForgeAppLauncher = forwardRef((props, forwardedRef) => {
  const {
    open,
    relatedApps,
    customLinks,
    allApps,
    breakpoint,
    launcherAriaLabel,
    backAriaLabel,
    closeAriaLabel,
    ...filteredProps
  } = props;

  return React.createElement(
    "forge-app-launcher",
    {
      ...filteredProps,
      relatedApps: props.relatedApps,
      customLinks: props.customLinks,
      allApps: props.allApps,
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
