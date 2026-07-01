import React, { forwardRef, useRef, useEffect } from "react";
import "@tylertech/forge-extended/rich-text-editor";
import { useEventListener, useProperties } from "./react-utils.js";

export const ForgeRichTextEditor = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    disabled,
    readOnly,
    showCharacterCount,
    showWordCount,
    allowPasteFormatting,
    allowPasteImages,
    content,
    maxLength,
    errorMessage,
    isInitialized,
    initializationError,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "change", props.onChange);
  useEventListener(ref, "validation", props.onValidation);
  useEventListener(ref, "initialized", props.onInitialized);
  useEventListener(ref, "initialization-error", props.onInitializationError);
  useEventListener(ref, "error", props.onError);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "isInitialized", props.isInitialized);
  useProperties(ref, "initializationError", props.initializationError);

  return React.createElement(
    "forge-rich-text-editor",
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
      content: props.content,
      "max-length": props.maxLength || props["max-length"],
      "error-message": props.errorMessage || props["error-message"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? true : undefined,
      readonly: props.readOnly ? true : undefined,
      "show-character-count": props.showCharacterCount ? true : undefined,
      "show-word-count": props.showWordCount ? true : undefined,
      "allow-paste-formatting": props.allowPasteFormatting ? true : undefined,
      "allow-paste-images": props.allowPasteImages ? true : undefined,
      style: { ...props.style },
    },
    props.children,
  );
});
