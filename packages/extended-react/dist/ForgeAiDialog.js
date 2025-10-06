import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-extended/ai/ai-dialog";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeAiDialog = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { open, expanded, isFullscreen, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-dialog-fullscreen-change",
    props.onForgeAiDialogFullscreenChange,
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "isFullscreen", props.isFullscreen);

  return React.createElement(
    "forge-ai-dialog",
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
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? "" : undefined,
      expanded: props.expanded ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
