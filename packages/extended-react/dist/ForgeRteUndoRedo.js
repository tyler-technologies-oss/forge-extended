import React, { forwardRef } from "react";
import "@tylertech/forge-extended/rich-text-editor/features";

export const ForgeRteUndoRedo = forwardRef((props, forwardedRef) => {
  const { undoLabel, redoLabel, ...filteredProps } = props;

  return React.createElement(
    "forge-rte-undo-redo",
    {
      ...filteredProps,
      "undo-label": props.undoLabel || props["undo-label"],
      "redo-label": props.redoLabel || props["redo-label"],
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
