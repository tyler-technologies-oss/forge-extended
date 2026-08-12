import React, { forwardRef } from "react";
import "@tylertech/forge-extended/landing-page-layout";

export const ForgeLandingPageLayout = forwardRef((props, forwardedRef) => {
  const {
    mode,
    alignment,
    size,
    imageUrlLarge,
    imageUrlSmall,
    ...filteredProps
  } = props;

  return React.createElement(
    "forge-landing-page-layout",
    {
      ...filteredProps,
      mode: props.mode,
      alignment: props.alignment,
      size: props.size,
      "image-url-large": props.imageUrlLarge || props["image-url-large"],
      "image-url-small": props.imageUrlSmall || props["image-url-small"],
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
