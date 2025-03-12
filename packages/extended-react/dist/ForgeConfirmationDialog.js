import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge-extended/confirmation-dialog";
import { useEventListener } from "./react-utils.js";

export const ForgeConfirmationDialog = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { open, isBusy, label, description, busyLabel, ...filteredProps } =
    props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-confirmation-dialog-action",
    props.onForgeConfirmationDialogAction,
  );

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-confirmation-dialog",
    {
      ref,
      ...filteredProps,
      label: props.label,
      description: props.description,
      "busy-label": props.busyLabel || props["busy-label"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? "" : undefined,
      "is-busy": props.isBusy ? "" : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
