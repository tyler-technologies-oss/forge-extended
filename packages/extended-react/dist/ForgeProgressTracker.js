import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-extended/progress-tracker";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeProgressTracker = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    orientation,
    completedLabel,
    incompleteLabel,
    steps,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-progress-tracker-step-info",
    props.onForgeProgressTrackerStepInfo,
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "steps", props.steps);

  return React.createElement(
    "forge-progress-tracker",
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
      orientation: props.orientation,
      "completed-label": props.completedLabel || props["completed-label"],
      "incomplete-label": props.incompleteLabel || props["incomplete-label"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      style: { ...props.style },
    },
    props.children,
  );
});
