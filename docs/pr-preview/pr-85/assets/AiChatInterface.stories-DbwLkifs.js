import{r as W,i as $,x as r}from"./iframe-CUyNwiwu.js";import{t as A}from"./custom-element-BhZVzxrc.js";import{n as C}from"./query-assigned-nodes-cwDSNLIu.js";import{n as S}from"./when-3fO0zp9C.js";import"./ai-icon-2ZJsBmon.js";import{d as P}from"./ai-prompt-u_Pn4aWZ.js";import"./ai-user-message-BsUg8Kk0.js";import"./ai-response-message-B2JF6z23.js";import"./ai-suggestions-BXZ0bPpI.js";import"./base-CShCMygk.js";import"./property-B65diJJi.js";import"./index-CX2YGzrH.js";import"./with-default-aria-BTxRBcsi.js";import"./icon-registry-DN_G8EjV.js";import"./base-button-adapter-joBc-7ey.js";import"./index-Dda5C6r3.js";import"./field-CybJqy8R.js";import"./index-Cmua3nUN.js";import"./query-CeEMzN2B.js";const N=`.forge-toolbar{--_toolbar-background: var(--forge-toolbar-background, var(--forge-theme-surface, #ffffff));--_toolbar-height: var(--forge-toolbar-height, 56px);--_toolbar-min-height: var(--forge-toolbar-min-height, var(--_toolbar-height));--_toolbar-divider-width: var(--forge-toolbar-divider-width, var(--forge-border-thin, 1px));--_toolbar-divider-style: var(--forge-toolbar-divider-style, solid);--_toolbar-divider-color: var(--forge-toolbar-divider-color, var(--forge-theme-outline, #e0e0e0));--_toolbar-shape: var(--forge-toolbar-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_toolbar-start-start-shape: var(--forge-toolbar-start-start-shape, var(--_toolbar-shape));--_toolbar-start-end-shape: var(--forge-toolbar-start-end-shape, var(--_toolbar-shape));--_toolbar-end-start-shape: var(--forge-toolbar-end-start-shape, 0);--_toolbar-end-end-shape: var(--forge-toolbar-end-end-shape, 0);--_toolbar-padding: var(--forge-toolbar-padding, var(--forge-spacing-medium, 16px));--_toolbar-padding-block: var(--forge-toolbar-padding-block, 0);--_toolbar-padding-inline: var(--forge-toolbar-padding-inline, var(--_toolbar-padding));--_toolbar-columns: var(--forge-toolbar-columns, auto 1fr auto)}.forge-toolbar{display:grid;grid-template-columns:var(--_toolbar-columns);height:var(--_toolbar-height);min-height:var(--_toolbar-min-height);box-sizing:border-box;padding-inline:0;border-block-end-width:var(--_toolbar-divider-width);border-block-end-style:var(--_toolbar-divider-style);border-block-end-color:var(--_toolbar-divider-color);border-start-start-radius:var(--_toolbar-start-start-shape);border-start-end-radius:var(--_toolbar-start-end-shape);border-end-start-radius:var(--_toolbar-end-start-shape);border-end-end-radius:var(--_toolbar-end-end-shape);background:var(--_toolbar-background);grid-template-columns:1fr;grid-template-areas:"start"}.forge-toolbar:has(.forge-toolbar__center),.forge-toolbar:has(.forge-toolbar__end){grid-template-columns:auto 1fr auto;grid-template-areas:"start center end"}.forge-toolbar:has(.forge-toolbar__end):not(:has(.forge-toolbar__center)){grid-template-columns:1fr auto;grid-template-areas:"start end"}.forge-toolbar--inverted{--_toolbar-start-start-shape: var(--forge-toolbar-start-start-shape, 0);--_toolbar-start-end-shape: var(--forge-toolbar-start-end-shape, 0);--_toolbar-end-start-shape: var(--_toolbar-shape);--_toolbar-end-end-shape: var(--_toolbar-shape);border-block-end:none;border-block-start-width:var(--_toolbar-divider-width);border-block-start-style:var(--_toolbar-divider-style);border-block-start-color:var(--_toolbar-divider-color)}.forge-toolbar--no-divider{border:none}.forge-toolbar--auto-height{--_toolbar-height: var(--forge-toolbar-height, auto)}.forge-toolbar :where(h1,h2,h3,h4,h5,h6){margin:0}.forge-toolbar__start,.forge-toolbar__center,.forge-toolbar__end{display:flex;align-items:center;width:100%;box-sizing:border-box}.forge-toolbar__start{grid-area:start}.forge-toolbar__center{justify-content:center;min-width:0;grid-area:center}.forge-toolbar__end{justify-content:end;grid-area:end}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */.forge-icon-button{--_icon-button-display: var(--forge-icon-button-display, inline-flex);--_icon-button-size: var(--forge-icon-button-size, 48px);--_icon-button-gap: var(--forge-icon-button-gap, 0);--_icon-button-icon-color: var(--forge-icon-button-icon-color, currentColor);--_icon-button-background-color: var(--forge-icon-button-background-color, none);--_icon-button-icon-size: var(--forge-icon-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.5));--_icon-button-cursor: var(--forge-icon-button-cursor, pointer);--_icon-button-padding: var(--forge-icon-button-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-border: var(--forge-icon-button-border, none);--_icon-button-shadow: var(--forge-icon-button-shadow, none);--_icon-button-transition-duration: var(--forge-icon-button-transition-duration, var(--forge-animation-duration-short3, .15s));--_icon-button-transition-timing: var(--forge-icon-button-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_icon-button-shape: var(--forge-icon-button-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_icon-button-shape-start-start: var(--forge-icon-button-shape-start-start, var(--_icon-button-shape));--_icon-button-shape-start-end: var(--forge-icon-button-shape-start-end, var(--_icon-button-shape));--_icon-button-shape-end-start: var(--forge-icon-button-shape-end-start, var(--_icon-button-shape));--_icon-button-shape-end-end: var(--forge-icon-button-shape-end-end, var(--_icon-button-shape));--_icon-button-shape-squared: var(--forge-icon-button-shape-squared, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_icon-button-outlined-border-width: var(--forge-icon-button-outlined-border-width, 1px);--_icon-button-outlined-border-style: var(--forge-icon-button-outlined-border-style, solid);--_icon-button-outlined-border-color: var(--forge-icon-button-outlined-border-color, var(--_icon-button-icon-color));--_icon-button-tonal-icon-color: var(--forge-icon-button-tonal-icon-color, var(--forge-theme-on-primary-container, #222c62));--_icon-button-tonal-background-color: var(--forge-icon-button-tonal-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-filled-icon-color: var(--forge-icon-button-filled-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-filled-background-color: var(--forge-icon-button-filled-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-raised-shadow: var(--forge-icon-button-raised-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_icon-button-raised-hover-shadow: var(--forge-icon-button-raised-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_icon-button-raised-active-shadow: var(--forge-icon-button-raised-active-shadow, 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12));--_icon-button-raised-disabled-shadow: var(--forge-icon-button-raised-disabled-shadow, none);--_icon-button-density-small-size: var(--forge-icon-button-density-small-size, 24px);--_icon-button-density-small-padding: var(--forge-icon-button-density-small-padding, var(--forge-spacing-xxxsmall, 2px));--_icon-button-density-small-icon-size: var(--forge-icon-button-density-small-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125));--_icon-button-density-medium-size: var(--forge-icon-button-density-medium-size, 36px);--_icon-button-density-medium-padding: var(--forge-icon-button-density-medium-padding, var(--forge-spacing-xxsmall, 4px));--_icon-button-density-large-size: var(--forge-icon-button-density-large-size, var(--_icon-button-size));--_icon-button-toggle-on-background-color: var(--forge-icon-button-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-toggle-on-icon-color: var(--forge-icon-button-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-outlined-toggle-on-background-color: var(--forge-icon-button-outlined-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-outlined-toggle-on-icon-color: var(--forge-icon-button-outlined-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-tonal-toggle-background-color: var(--forge-icon-button-tonal-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-tonal-toggle-on-background-color: var(--forge-icon-button-tonal-toggle-on-background-color, var(--forge-theme-primary-container, #d1d5ed));--_icon-button-tonal-toggle-on-icon-color: var(--forge-icon-button-tonal-toggle-on-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-background-color: var(--forge-icon-button-filled-toggle-background-color, var(--forge-theme-surface-container-low, #ebebeb));--_icon-button-filled-toggle-icon-color: var(--forge-icon-button-filled-toggle-icon-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-background-color: var(--forge-icon-button-filled-toggle-on-background-color, var(--forge-theme-primary, #3f51b5));--_icon-button-filled-toggle-on-icon-color: var(--forge-icon-button-filled-toggle-on-icon-color, var(--forge-theme-on-primary, #ffffff));--_icon-button-disabled-cursor: var(--forge-icon-button-disabled-cursor, not-allowed);--_icon-button-disabled-opacity: var(--forge-icon-button-disabled-opacity, .38);--_icon-button-popover-icon-padding: var(--forge-icon-button-popover-icon-padding, var(--forge-spacing-xsmall, 8px));--_icon-button-focus-indicator-color: var(--forge-icon-button-focus-indicator-color, var(--forge-theme-primary, #3f51b5))}.forge-icon-button{outline:none;-webkit-tap-highlight-color:transparent;position:relative;z-index:0;display:var(--_icon-button-display);align-items:center;justify-content:center;gap:var(--_icon-button-gap);box-sizing:border-box;height:var(--_icon-button-density-large-size);min-width:var(--_icon-button-density-large-size);border:var(--_icon-button-border);border-start-start-radius:var(--_icon-button-shape-start-start);border-start-end-radius:var(--_icon-button-shape-start-end);border-end-start-radius:var(--_icon-button-shape-end-start);border-end-end-radius:var(--_icon-button-shape-end-end);padding:var(--_icon-button-padding);box-shadow:var(--_icon-button-shadow);color:var(--_icon-button-icon-color);background:var(--_icon-button-background-color);font-size:var(--_icon-button-icon-size);cursor:var(--_icon-button-cursor);-webkit-user-select:none;user-select:none;transition-property:box-shadow,background;transition-duration:var(--_icon-button-transition-duration);transition-timing-function:var(--_icon-button-transition-timing)}.forge-icon-button img,.forge-icon-button svg{height:var(--_icon-button-icon-size);width:var(--_icon-button-icon-size)}.forge-icon-button svg{fill:currentColor}.forge-icon-button:not(:disabled){--_state-layer-display: var(--forge-state-layer-display, flex);--_state-layer-color: var(--forge-state-layer-color, var(--forge-theme-on-surface, #000000));--_state-layer-hover-color: var(--forge-state-layer-hover-color, var(--_state-layer-color));--_state-layer-hover-opacity: var(--forge-state-layer-hover-opacity, .08);--_state-layer-pressed-color: var(--forge-state-layer-pressed-color, var(--_state-layer-color));--_state-layer-pressed-opacity: var(--forge-state-layer-pressed-opacity, .12);--_state-layer-hover-duration: var(--forge-state-layer-hover-duration, 15ms);--_state-layer-pressed-duration: var(--forge-state-layer-pressed-duration, 105ms);--_state-layer-animation-duration: var(--forge-state-layer-animation-duration, 375ms);--forge-state-layer-color: var(--_icon-button-icon-color);outline:none;--forge-focus-indicator-color: var(--_icon-button-focus-indicator-color);--forge-focus-indicator-shape: var(--_icon-button-shape)}.forge-icon-button:not(:disabled):before{position:absolute;background-color:var(--_state-layer-hover-color);inset:0;transition:opacity var(--_state-layer-hover-duration) linear,background-color var(--_state-layer-hover-duration) linear;--_state-layer-hover-duration: var(--forge-state-layer-hover-duration, .1s);content:"";opacity:0;border-radius:inherit}.forge-icon-button:not(:disabled):hover:before{background-color:var(--_state-layer-hover-color);opacity:var(--_state-layer-hover-opacity)}.forge-icon-button:not(:disabled):active:before{opacity:var(--_state-layer-pressed-opacity);transition-duration:var(--_state-layer-pressed-duration);--_state-layer-pressed-opacity: var(--forge-state-layer-pressed-opacity, .18)}@keyframes forge-focus-indicator-outward-grow{0%{outline-width:0}to{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-outward-shrink{0%{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-grow{0%{border-width:0}to{border-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-shrink{0%{border-width:var(--_focus-indicator-active-width)}}.forge-icon-button:not(:disabled):focus-visible:after{--_focus-indicator-display: var(--forge-focus-indicator-display, flex);--_focus-indicator-width: var(--forge-focus-indicator-width, var(--forge-border-medium, 2px));--_focus-indicator-active-width: var(--forge-focus-indicator-active-width, 6px);--_focus-indicator-color: var(--forge-focus-indicator-color, var(--forge-theme-primary, #3f51b5));--_focus-indicator-shape: var(--forge-focus-indicator-shape, calc(var(--forge-shape-extra-small, 1px) * var(--forge-shape-factor, 1)));--_focus-indicator-duration: var(--forge-focus-indicator-duration, var(--forge-animation-duration-long4, .6s));--_focus-indicator-easing: var(--forge-focus-indicator-easing, var(--forge-animation-easing-emphasized, cubic-bezier(.2, 0, 0, 1)));--_focus-indicator-shape-start-start: var(--forge-focus-indicator-shape-start-start, var(--_focus-indicator-shape));--_focus-indicator-shape-start-end: var(--forge-focus-indicator-shape-start-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-end: var(--forge-focus-indicator-shape-end-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-start: var(--forge-focus-indicator-shape-end-start, var(--_focus-indicator-shape));--_focus-indicator-outward-offset: var(--forge-focus-indicator-outward-offset, var(--forge-spacing-xxsmall, 4px));--_focus-indicator-inward-offset: var(--forge-focus-indicator-inward-offset, 0px);--_focus-indicator-offset-block: var(--forge-focus-indicator-offset-block, 0);--_focus-indicator-offset-inline: var(--forge-focus-indicator-offset-inline, 0)}.forge-icon-button:not(:disabled):focus-visible:after{animation-delay:0s,calc(var(--_focus-indicator-duration) * .25);animation-duration:calc(var(--_focus-indicator-duration) * .25),calc(var(--_focus-indicator-duration) * .75);animation-timing-function:var(--_focus-indicator-easing);box-sizing:border-box;color:var(--_focus-indicator-color);display:none;pointer-events:none;position:absolute;margin-block:var(--_focus-indicator-offset-block);margin-inline:var(--_focus-indicator-offset-inline);animation-name:forge-focus-indicator-outward-grow,forge-focus-indicator-outward-shrink;border-end-end-radius:calc(var(--_focus-indicator-shape-end-end) + var(--_focus-indicator-outward-offset));border-end-start-radius:calc(var(--_focus-indicator-shape-end-start) + var(--_focus-indicator-outward-offset));border-start-end-radius:calc(var(--_focus-indicator-shape-start-end) + var(--_focus-indicator-outward-offset));border-start-start-radius:calc(var(--_focus-indicator-shape-start-start) + var(--_focus-indicator-outward-offset));inset:calc(-1 * var(--_focus-indicator-outward-offset));outline:var(--_focus-indicator-width) solid currentColor;content:"";display:block}.forge-icon-button:not(:disabled):where(.forge-icon-button--text,:not(:where(.forge-icon-button--outlined,.forge-icon-button--tonal,.forge-icon-button--filled,.forge-icon-button--raised))){--forge-focus-indicator-outward-offset: 0px}.forge-icon-button--outlined{border-width:var(--_icon-button-outlined-border-width);border-style:var(--_icon-button-outlined-border-style);border-color:var(--_icon-button-outlined-border-color)}.forge-icon-button--tonal{--_icon-button-icon-color: var(--_icon-button-tonal-icon-color);--_icon-button-background-color: var(--_icon-button-tonal-background-color)}.forge-icon-button--filled,.forge-icon-button--raised{--_icon-button-icon-color: var(--_icon-button-filled-icon-color);--_icon-button-background-color: var(--_icon-button-filled-background-color)}.forge-icon-button--raised{--_icon-button-shadow: var(--_icon-button-raised-shadow)}.forge-icon-button--raised:hover{--_icon-button-raised-shadow: var(--_icon-button-raised-hover-shadow)}.forge-icon-button--raised:active{--_icon-button-raised-shadow: var(--_icon-button-raised-active-shadow)}.forge-icon-button--squared{--_icon-button-shape: var(--_icon-button-shape-squared)}.forge-icon-button--small{--_icon-button-size: var(--_icon-button-density-small-size);--_icon-button-icon-size: var(--_icon-button-density-small-icon-size);--_icon-button-padding: var(--_icon-button-density-small-padding)}.forge-icon-button--small>*{font-size:var(--_icon-button-density-small-icon-size)}.forge-icon-button--medium{--_icon-button-size: var(--_icon-button-density-medium-size);--_icon-button-padding: var(--_icon-button-density-medium-padding)}.forge-icon-button:disabled{pointer-events:none;opacity:var(--_icon-button-disabled-opacity);pointer-events:auto;cursor:not-allowed}.forge-icon-button forge-circular-progress{--forge-circular-progress-indicator-color: var(--_icon-button-icon-color);--forge-circular-progress-track-color: transparent;--forge-circular-progress-size: 1em}:host{display:block;--_forge-chat-interface-width: 420px}.ai-chat-interface{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit);color:var(--forge-theme-on-surface);min-width:var(--_forge-chat-interface-width)}.ai-icon-button>svg{fill:var(--forge-theme-text-medium)}.header{display:flex;align-items:center;justify-content:space-between;padding-inline:var(--forge-spacing-medium, 16px)}.start{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.start h1{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading3-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading3-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-font-size-scale, 1.125)));font-weight:var(--forge-typography-heading3-font-weight, 500);line-height:var(--forge-typography-heading3-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-heading3-letter-spacing, .0083333333em);text-transform:var(--forge-typography-heading3-text-transform, inherit);text-decoration:var(--forge-typography-heading3-text-decoration, inherit)}.end{display:flex;align-items:center}.messages-container{padding:var(--forge-spacing-medium, 16px);height:720px;overflow-y:auto;background:linear-gradient(to top,var(--forge-theme-primary-container-minimum),var(--forge-theme-surface));border-block-end:1px solid var(--forge-theme-outline);display:flex;flex-direction:column}.suggestions-container{padding-inline:var(--forge-spacing-medium, 16px);padding-block-start:var(--forge-spacing-medium, 16px)}.prompt-container{padding:var(--forge-spacing-medium, 16px)}`;var q=Object.defineProperty,G=Object.getOwnPropertyDescriptor,T=o=>{throw TypeError(o)},x=(o,e,t,d)=>{for(var n=d>1?void 0:d?G(e,t):e,b=o.length-1,h;b>=0;b--)(h=o[b])&&(n=(d?h(e,t,n):h(n))||n);return d&&n&&q(e,t,n),n},H=(o,e,t)=>e.has(o)||T("Cannot "+t),a=(o,e,t)=>(H(o,e,"read from private field"),t?t.call(o):e.get(o)),i=(o,e,t)=>e.has(o)?T("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,t),z=(o,e,t)=>(H(o,e,"access private method"),t),v,m,_,p,s,M,k,I,y,w;const O="forge-ai-chat-interface";let c=class extends ${constructor(){super(...arguments),i(this,s),i(this,v,r`
    <div class="start">
      <forge-ai-icon></forge-ai-icon>
      <h1>AI Assistant</h1>
    </div>
  `),i(this,m,r`
    <div class="end">
      <button aria-label="More info" class="forge-icon-button forge-icon-button--large ai-icon-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8" />
        </svg>
      </button>
      <button aria-label="Switch to full screen" class="forge-icon-button forge-icon-button--large ai-icon-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5 5h5v2H7v3H5zm9 0h5v5h-2V7h-3zm3 9h2v5h-5v-2h3zm-7 3v2H5v-5h2v3z" />
        </svg>
      </button>
      <button aria-label="Minimize chat window" class="forge-icon-button forge-icon-button--large ai-icon-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M6 19h12v2H6z" />
        </svg>
      </button>
    </div>
  `),i(this,_,r`
    <div class="header forge-toolbar forge-toolbar--no-divider">${a(this,v)} ${a(this,m)}</div>
  `),i(this,p,r`<slot name="suggestions" @slotchange=${z(this,s,w)}></slot>`),i(this,k,r`<slot name="prompt" @slotchange=${z(this,s,w)}></slot>`),i(this,y,r`
    <div class="messages-container">
      <slot></slot>
    </div>
  `)}render(){return r`
      <div class="ai-chat-interface">
        ${a(this,_)} ${a(this,y)} ${a(this,s,M)}
        <div class="prompt-container">${a(this,s,I)}</div>
      </div>
    `}};v=new WeakMap;m=new WeakMap;_=new WeakMap;p=new WeakMap;s=new WeakSet;M=function(){const o=this._slottedSuggestionsNodes.length>0;return S(o,()=>r`<div class="suggestions-container">${a(this,p)}</div>`,()=>a(this,p))};k=new WeakMap;I=function(){const o=this._slottedPromptNodes.length>0;return S(o,()=>a(this,k),()=>r`<forge-ai-prompt></forge-ai-prompt>`)};y=new WeakMap;w=function(o){const e=o.target.name;["suggestions","prompt"].includes(e)&&this.requestUpdate()};c.styles=W(N);x([C({slot:"suggestions",flatten:!0})],c.prototype,"_slottedSuggestionsNodes",2);x([C({slot:"prompt",flatten:!0})],c.prototype,"_slottedPromptNodes",2);c=x([A(O)],c);const D="forge-ai-chat-interface";P();const no={title:"AI/AI Chat Interface",component:D,render:()=>r`<forge-ai-chat-interface></forge-ai-chat-interface>`},g={},l={render:()=>r`
      <forge-card no-padding raised>
        <forge-ai-chat-interface></forge-ai-chat-interface>
      </forge-card>
    `},f={render:()=>r`
      <forge-card no-padding raised>
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
          <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
          <forge-ai-response-message>
            Sure! Here's a simple example of a generic function: This function works with any type T, providing type
            safety while being reusable.
          </forge-ai-response-message>
        </forge-ai-chat-interface>
      </forge-card>
    `},u={render:()=>r`
      <forge-card no-padding raised>
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
          <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
          <forge-ai-response-message>
            Sure! Here's a simple example of a generic function: This function works with any type T, providing type
            safety while being reusable.
          </forge-ai-response-message>
          <forge-ai-suggestions slot="suggestions" .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}></forge-ai-suggestions>
        </forge-ai-chat-interface>
      </forge-card>
    `};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <forge-card no-padding raised>
        <forge-ai-chat-interface></forge-ai-chat-interface>
      </forge-card>
    \`;
  }
}`,...l.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <forge-card no-padding raised>
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
          <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
          <forge-ai-response-message>
            Sure! Here's a simple example of a generic function: This function works with any type T, providing type
            safety while being reusable.
          </forge-ai-response-message>
        </forge-ai-chat-interface>
      </forge-card>
    \`;
  }
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const suggestions = [{
      text: 'Help me write an email',
      value: 'email'
    }, {
      text: 'Create a presentation',
      value: 'presentation'
    }, {
      text: 'Write some code',
      value: 'code'
    }, {
      text: 'Plan a meeting',
      value: 'meeting'
    }, {
      text: 'Summarize a document',
      value: 'summarize'
    }] as Suggestion[];
    return html\`
      <forge-card no-padding raised>
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
          <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
          <forge-ai-response-message>
            Sure! Here's a simple example of a generic function: This function works with any type T, providing type
            safety while being reusable.
          </forge-ai-response-message>
          <forge-ai-suggestions slot="suggestions" .suggestions=\${suggestions}></forge-ai-suggestions>
        </forge-ai-chat-interface>
      </forge-card>
    \`;
  }
}`,...u.parameters?.docs?.source}}};const io=["Demo","InCard","WithMessages","WithSuggestions"];export{g as Demo,l as InCard,f as WithMessages,u as WithSuggestions,io as __namedExportsOrder,no as default};
