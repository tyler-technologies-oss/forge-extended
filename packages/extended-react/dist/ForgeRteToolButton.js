import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-extended/rich-text-editor/features/core";
import { useEventListener } from "./react-utils.js";

export const ForgeRteToolButton = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { disabled, active, label, icon, keyboardShortcut, ...filteredProps } =
    props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-rte-tool-toggle", props.onForgeRteToolToggle);

  return React.createElement(
    "forge-rte-tool-button",
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
      label: props.label,
      icon: props.icon,
      "keyboard-shortcut": props.keyboardShortcut || props["keyboard-shortcut"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? "" : undefined,
      active: props.active ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
