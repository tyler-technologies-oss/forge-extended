import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-extended/ai-chat-widget/ai-suggestions";
import { useEventListener } from "./react-utils.js";

export const ForgeAiSuggestions = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { suggestions, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-ai-suggestions-select",
    props.onForgeAiSuggestionsSelect,
  );

  return React.createElement(
    "forge-ai-suggestions",
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
      suggestions: props.suggestions,
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
