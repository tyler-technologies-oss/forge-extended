import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-extended/user-profile";
import { useEventListener } from "./react-utils.js";

export const ForgeUserProfile = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    themeToggle,
    open,
    fullName,
    email,
    imageUrl,
    buttonLabel,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-user-profile-sign-in",
    props.onForgeUserProfileSignIn,
  );
  useEventListener(
    ref,
    "forge-user-profile-sign-out",
    props.onForgeUserProfileSignOut,
  );

  return React.createElement(
    "forge-user-profile",
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
      "full-name": props.fullName || props["full-name"],
      email: props.email,
      "image-url": props.imageUrl || props["image-url"],
      "button-label": props.buttonLabel || props["button-label"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "theme-toggle": props.themeToggle ? "" : undefined,
      open: props.open ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
