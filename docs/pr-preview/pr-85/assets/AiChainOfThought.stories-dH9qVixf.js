import{r as f,i as p,x as s}from"./iframe-QzzbqrfA.js";import{t as b}from"./custom-element-BhZVzxrc.js";import{n as d}from"./property-Dfd5sbDZ.js";import"./ai-reasoning-header-CwTPpeaj.js";import{o as x}from"./if-defined-CvgT8Tmn.js";import"./ai-chat-interface-Db04e9-K.js";import"./ai-prompt-ecRp4fSE.js";import"./ai-dropdown-menu-CyNV9t0E.js";import"./ai-voice-input-DLHKchU1.js";import"./ai-gradient-container-C8cy6C6D.js";import"./ai-user-message-DxYg0p5p.js";import"./ai-response-message-CJju-fku.js";import{I as T,t as C,a as $}from"./icon-registry-DkZ9Rd4X.js";import{d as A}from"./index-BBJUI7sQ.js";import{d as D}from"./index-Ci8QZ6cV.js";import{d as O}from"./index-DH5HdI6V.js";const P=`.forge-expansion-panel{--_expansion-panel-animation-duration: var(--forge-expansion-panel-animation-duration, var(--forge-animation-duration-medium4, .4s));--_expansion-panel-animation-easing: var(--forge-expansion-panel-animation-easing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)))}.forge-expansion-panel{display:grid;grid-template-rows:0fr;transition-property:visibility,opacity,grid-template-rows;transition-duration:var(--_expansion-panel-animation-duration);transition-timing-function:var(--_expansion-panel-animation-easing);min-height:0;opacity:0;transform:translateZ(0);backface-visibility:hidden}.forge-expansion-panel:not(.forge-expansion-panel--open){visibility:hidden}.forge-expansion-panel--open{opacity:1;grid-template-rows:1fr}.forge-expansion-panel__content{display:grid;grid-template-rows:1fr;overflow:hidden}@media (prefers-reduced-motion: reduce){.forge-expansion-panel{transition:none}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */.forge-icon{--_icon-color: var(--forge-icon-color, currentColor);--_icon-size: var(--forge-icon-size, 1em);--_icon-width: var(--forge-icon-width, var(--_icon-size));--_icon-height: var(--forge-icon-height, var(--_icon-size));--_icon-font-size: var(--forge-icon-font-size, calc(var(--forge-typography-font-size, 1rem) * 1.5))}img.forge-icon,svg.forge-icon{box-sizing:content-box;contain:content;font-size:var(--_icon-font-size);display:inline-block}img.forge-icon{width:var(--_icon-width);height:var(--_icon-height)}svg{width:var(--_icon-width);height:var(--_icon-height);display:block;fill:var(--_icon-color);stroke:var(--_icon-color);stroke-width:0}:host{width:100%;display:block}.header-container{display:grid;grid-template-columns:56px 1fr auto;align-items:center}.thought-content-container{margin-block-start:var(--forge-spacing-medium, 16px)}`;var I=Object.defineProperty,j=Object.getOwnPropertyDescriptor,_=(e,t,a,r)=>{for(var o=r>1?void 0:r?j(t,a):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,a,o):i(o))||o);return r&&o&&I(t,a,o),o};const S="forge-ai-chain-of-thought";let g=class extends p{constructor(){super(...arguments),this.expanded=!1,this.title="Chain of Thought"}render(){return s`
      <forge-ai-reasoning-header .expanded=${this.expanded} @toggle=${this._handleHeaderToggle}>
        <span slot="title">${this.title}</span>
      </forge-ai-reasoning-header>
      <div
        class="forge-expansion-panel thought-content-container ${this.expanded?"forge-expansion-panel--open":""}">
        <div class="forge-expansion-panel__content " id="chain-content" aria-hidden=${!this.expanded}>
          <slot></slot>
        </div>
      </div>
    `}_handleHeaderToggle(e){this.expanded=e.detail.expanded}};g.styles=f(P);_([d({type:Boolean,reflect:!0})],g.prototype,"expanded",2);_([d({type:String})],g.prototype,"title",2);g=_([b(S)],g);const q=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */.forge-button{--_button-primary-color: var(--forge-button-primary-color, var(--forge-theme-primary, #3f51b5));--_button-text-color: var(--forge-button-text-color, var(--_button-primary-color));--_button-disabled-color: var(--forge-button-disabled-color, var(--forge-theme-surface-container, #e0e0e0));--_button-padding: var(--forge-button-padding, var(--forge-spacing-medium, 16px));--_button-display: var(--forge-button-display, inline-grid);--_button-justify: var(--forge-button-justify, center);--_button-shape: var(--forge-button-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_button-height: var(--forge-button-height, 36px);--_button-min-width: var(--forge-button-min-width, 64px);--_button-spacing: var(--forge-button-spacing, var(--forge-spacing-xsmall, 8px));--_button-border-width: var(--forge-button-border-width, medium);--_button-border-style: var(--forge-button-border-style, none);--_button-border-color: var(--forge-button-border-color, currentColor);--_button-shape-start-start-radius: var(--forge-button-shape-start-start-radius, var(--_button-shape));--_button-shape-start-end-radius: var(--forge-button-shape-start-end-radius, var(--_button-shape));--_button-shape-end-start-radius: var(--forge-button-shape-end-start-radius, var(--_button-shape));--_button-shape-end-end-radius: var(--forge-button-shape-end-end-radius, var(--_button-shape));--_button-padding-block: var(--forge-button-padding-block, var(--_button-0));--_button-padding-inline: var(--forge-button-padding-inline, var(--_button-padding));--_button-background: var(--forge-button-background, transparent);--_button-hover-background: var(--forge-button-hover-background, var(--_button-background));--_button-active-background: var(--forge-button-active-background, var(--_button-background));--_button-color: var(--forge-button-color, var(--_button-text-color));--_button-icon-size: var(--forge-button-icon-size, calc(var(--forge-typography-font-size, 1rem) * 1.125));--_button-shadow: var(--forge-button-shadow, none);--_button-hover-shadow: var(--forge-button-hover-shadow, none);--_button-active-shadow: var(--forge-button-active-shadow, none);--_button-cursor: var(--forge-button-cursor, pointer);--_button-transition-duration: var(--forge-button-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-transition-timing: var(--forge-button-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-text-padding-inline: var(--forge-button-text-padding-inline, var(--forge-spacing-xsmall, 8px));--_button-outlined-background: var(--forge-button-outlined-background, transparent);--_button-outlined-color: var(--forge-button-outlined-color, var(--_button-primary-color));--_button-outlined-border-width: var(--forge-button-outlined-border-width, var(--forge-border-thin, 1px));--_button-outlined-border-style: var(--forge-button-outlined-border-style, solid);--_button-outlined-border-color: var(--forge-button-outlined-border-color, var(--_button-primary-color));--_button-tonal-background: var(--forge-button-tonal-background, var(--forge-theme-primary-container, #d1d5ed));--_button-tonal-disabled-background: var(--forge-button-tonal-disabled-background, var(--_button-disabled-color));--_button-tonal-color: var(--forge-button-tonal-color, var(--forge-theme-on-primary-container, #222c62));--_button-tonal-disabled-color: var(--forge-button-tonal-disabled-color, var(--_button-disabled-text-color));--_button-filled-background: var(--forge-button-filled-background, var(--_button-primary-color));--_button-filled-disabled-background: var(--forge-button-filled-disabled-background, var(--_button-disabled-color));--_button-filled-color: var(--forge-button-filled-color, var(--forge-theme-on-primary, #ffffff));--_button-filled-disabled-color: var(--forge-button-filled-disabled-color, var(--_button-disabled-text-color));--_button-raised-background: var(--forge-button-raised-background, var(--_button-primary-color));--_button-raised-disabled-background: var(--forge-button-raised-disabled-background, var(--_button-disabled-color));--_button-raised-color: var(--forge-button-raised-color, var(--forge-theme-on-primary, #ffffff));--_button-raised-disabled-color: var(--forge-button-raised-disabled-color, var(--_button-disabled-text-color));--_button-raised-shadow: var(--forge-button-raised-shadow, 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12));--_button-raised-hover-shadow: var(--forge-button-raised-hover-shadow, 0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12));--_button-raised-active-shadow: var(--forge-button-raised-active-shadow, 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12));--_button-raised-disabled-shadow: var(--forge-button-raised-disabled-shadow, none);--_button-link-color: var(--forge-button-link-color, var(--_button-primary-color));--_button-link-text-decoration: var(--forge-button-link-text-decoration, underline);--_button-link-height: var(--forge-button-link-height, auto);--_button-link-padding: var(--forge-button-link-padding, 0);--_button-link-line-height: var(--forge-button-link-line-height, normal);--_button-link-width: var(--forge-button-link-width, auto);--_button-link-hover-text-decoration: var(--forge-button-link-hover-text-decoration, none);--_button-link-active-opacity: var(--forge-button-link-active-opacity, .65);--_button-link-transition-duration: var(--forge-button-link-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-link-transition-timing: var(--forge-button-link-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-disabled-cursor: var(--forge-button-disabled-cursor, not-allowed);--_button-disabled-text-color: var(--forge-button-disabled-text-color, var(--forge-theme-text-low, rgba(0, 0, 0, .38)));--_button-disabled-background: var(--forge-button-disabled-background, transparent);--_button-disabled-border-color: var(--forge-button-disabled-border-color, var(--_button-disabled-color));--_button-disabled-shadow: var(--forge-button-disabled-shadow, none);--_button-dense-height: var(--forge-button-dense-height, 24px);--_button-pill-shape: var(--forge-button-pill-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_button-pill-padding-inline: var(--forge-button-pill-padding-inline, var(--forge-spacing-small, 12px));--_button-focus-indicator-offset: var(--forge-button-focus-indicator-offset, 4px);--_button-text-focus-indicator-offset: var(--forge-button-text-focus-indicator-offset, 0px);--_button-link-focus-indicator-offset: var(--forge-button-link-focus-indicator-offset, 2px);--_button-popover-icon-transition-duration: var(--forge-button-popover-icon-transition-duration, var(--forge-animation-duration-short3, .15s));--_button-popover-icon-transition-timing: var(--forge-button-popover-icon-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(.2, 0, 0, 1)));--_button-popover-icon-open-rotation: var(--forge-button-popover-icon-open-rotation, 180deg)}.forge-button{-webkit-tap-highlight-color:transparent;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-button-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-button-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-button-font-size-scale, .875)));font-weight:var(--forge-typography-button-font-weight, 500);line-height:var(--forge-typography-button-line-height, normal);letter-spacing:var(--forge-typography-button-letter-spacing, .0714285714em);text-transform:var(--forge-typography-button-text-transform, inherit);text-decoration:var(--forge-typography-button-text-decoration, inherit);display:var(--_button-display);grid-auto-flow:column;align-items:center;justify-content:var(--_button-justify);gap:var(--_button-spacing);z-index:0;box-sizing:border-box;min-inline-size:var(--_button-min-width);height:var(--_button-height);inline-size:100%;border-width:var(--_button-border-width);border-style:var(--_button-border-style);border-color:var(--_button-border-color);border-start-start-radius:var(--_button-shape-start-start-radius);border-start-end-radius:var(--_button-shape-start-end-radius);border-end-start-radius:var(--_button-shape-end-start-radius);border-end-end-radius:var(--_button-shape-end-end-radius);padding-block:var(--_button-padding-block);padding-inline:var(--_button-padding-inline);box-shadow:var(--_button-shadow);outline:none;-webkit-user-select:none;user-select:none;-webkit-appearance:none;vertical-align:middle;text-decoration:none;white-space:nowrap;background:var(--_button-background);color:var(--_button-color);cursor:var(--_button-cursor);transition-property:box-shadow,background;transition-duration:var(--_button-transition-duration);transition-timing-function:var(--_button-transition-timing);position:relative;inline-size:auto;--forge-icon-font-size: var(--_button-icon-size)}.forge-button::-moz-focus-inner{padding:0;border:0}.forge-button:hover{--_button-shadow: var(--_button-hover-shadow);background:var(--_button-hover-background)}.forge-button:active{--_button-shadow: var(--_button-active-shadow);background:var(--_button-active-background)}.forge-button:not(:disabled){outline:none;--forge-focus-indicator-color: var(--_button-primary-color)}.forge-button:not(:disabled):not(.forge-button--link){--_state-layer-display: var(--forge-state-layer-display, flex);--_state-layer-color: var(--forge-state-layer-color, var(--forge-theme-on-surface, #000000));--_state-layer-hover-color: var(--forge-state-layer-hover-color, var(--_state-layer-color));--_state-layer-hover-opacity: var(--forge-state-layer-hover-opacity, .08);--_state-layer-pressed-color: var(--forge-state-layer-pressed-color, var(--_state-layer-color));--_state-layer-pressed-opacity: var(--forge-state-layer-pressed-opacity, .12);--_state-layer-hover-duration: var(--forge-state-layer-hover-duration, 15ms);--_state-layer-pressed-duration: var(--forge-state-layer-pressed-duration, 105ms);--_state-layer-animation-duration: var(--forge-state-layer-animation-duration, 375ms)}.forge-button:not(:disabled):not(.forge-button--link):before{position:absolute;background-color:var(--_state-layer-hover-color);inset:0;transition:opacity var(--_state-layer-hover-duration) linear,background-color var(--_state-layer-hover-duration) linear;--_state-layer-hover-duration: var(--forge-state-layer-hover-duration, .1s);content:"";opacity:0;border-radius:inherit}.forge-button:not(:disabled):not(.forge-button--link):hover:before{background-color:var(--_state-layer-hover-color);opacity:var(--_state-layer-hover-opacity)}.forge-button:not(:disabled):not(.forge-button--link):active:before{opacity:var(--_state-layer-pressed-opacity);transition-duration:var(--_state-layer-pressed-duration);--_state-layer-pressed-opacity: var(--forge-state-layer-pressed-opacity, .18)}@keyframes forge-focus-indicator-outward-grow{0%{outline-width:0}to{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-outward-shrink{0%{outline-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-grow{0%{border-width:0}to{border-width:var(--_focus-indicator-active-width)}}@keyframes forge-focus-indicator-inward-shrink{0%{border-width:var(--_focus-indicator-active-width)}}.forge-button:not(:disabled):focus-visible:after{--_focus-indicator-display: var(--forge-focus-indicator-display, flex);--_focus-indicator-width: var(--forge-focus-indicator-width, var(--forge-border-medium, 2px));--_focus-indicator-active-width: var(--forge-focus-indicator-active-width, 6px);--_focus-indicator-color: var(--forge-focus-indicator-color, var(--forge-theme-primary, #3f51b5));--_focus-indicator-shape: var(--forge-focus-indicator-shape, calc(var(--forge-shape-extra-small, 1px) * var(--forge-shape-factor, 1)));--_focus-indicator-duration: var(--forge-focus-indicator-duration, var(--forge-animation-duration-long4, .6s));--_focus-indicator-easing: var(--forge-focus-indicator-easing, var(--forge-animation-easing-emphasized, cubic-bezier(.2, 0, 0, 1)));--_focus-indicator-shape-start-start: var(--forge-focus-indicator-shape-start-start, var(--_focus-indicator-shape));--_focus-indicator-shape-start-end: var(--forge-focus-indicator-shape-start-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-end: var(--forge-focus-indicator-shape-end-end, var(--_focus-indicator-shape));--_focus-indicator-shape-end-start: var(--forge-focus-indicator-shape-end-start, var(--_focus-indicator-shape));--_focus-indicator-outward-offset: var(--forge-focus-indicator-outward-offset, var(--forge-spacing-xxsmall, 4px));--_focus-indicator-inward-offset: var(--forge-focus-indicator-inward-offset, 0px);--_focus-indicator-offset-block: var(--forge-focus-indicator-offset-block, 0);--_focus-indicator-offset-inline: var(--forge-focus-indicator-offset-inline, 0)}.forge-button:not(:disabled):focus-visible:after{animation-delay:0s,calc(var(--_focus-indicator-duration) * .25);animation-duration:calc(var(--_focus-indicator-duration) * .25),calc(var(--_focus-indicator-duration) * .75);animation-timing-function:var(--_focus-indicator-easing);box-sizing:border-box;color:var(--_focus-indicator-color);display:none;pointer-events:none;position:absolute;margin-block:var(--_focus-indicator-offset-block);margin-inline:var(--_focus-indicator-offset-inline);animation-name:forge-focus-indicator-outward-grow,forge-focus-indicator-outward-shrink;border-end-end-radius:calc(var(--_focus-indicator-shape-end-end) + var(--_focus-indicator-outward-offset));border-end-start-radius:calc(var(--_focus-indicator-shape-end-start) + var(--_focus-indicator-outward-offset));border-start-end-radius:calc(var(--_focus-indicator-shape-start-end) + var(--_focus-indicator-outward-offset));border-start-start-radius:calc(var(--_focus-indicator-shape-start-start) + var(--_focus-indicator-outward-offset));inset:calc(-1 * var(--_focus-indicator-outward-offset));outline:var(--_focus-indicator-width) solid currentColor;content:"";display:block}.forge-button:disabled{cursor:var(--_button-disabled-cursor);--_button-background: var(--_button-disabled-background);--_button-color: var(--_button-disabled-text-color);--_button-shadow: var(--_button-disabled-shadow);pointer-events:none;pointer-events:initial}.forge-button:where(:not(.forge-button--outlined,.forge-button--tonal,.forge-button--filled,.forge-button--raised,.forge-button--link)),.forge-button--text{--_button-padding-inline: var(--_button-text-padding-inline)}.forge-button--outlined{--_button-background: var(--_button-outlined-background);--_button-color: var(--_button-outlined-color);--_button-border-width: var(--_button-outlined-border-width);--_button-border-style: var(--_button-outlined-border-style);--_button-border-color: var(--_button-outlined-border-color)}.forge-button--outlined:disabled{--_button-border-color: var(--_button-disabled-border-color)}.forge-button--tonal{--_button-background: var(--_button-tonal-background);--_button-color: var(--_button-tonal-color)}.forge-button--tonal:disabled{--_button-background: var(--_button-tonal-disabled-background);--_button-color: var(--_button-tonal-disabled-color)}.forge-button--filled,.forge-button--raised{--_button-background: var(--_button-filled-background);--_button-color: var(--_button-filled-color);--forge-state-layer-color: var(--_button-filled-color)}.forge-button--filled:disabled,.forge-button--raised:disabled{--_button-background: var(--_button-filled-disabled-background);--_button-color: var(--_button-filled-disabled-color)}.forge-button--raised{--_button-background: var(--_button-raised-background);--_button-color: var(--_button-raised-color);--_button-shadow: var(--_button-raised-shadow)}.forge-button--raised:hover{--_button-shadow: var(--_button-raised-hover-shadow)}.forge-button--raised:active{--_button-shadow: var(--_button-raised-active-shadow)}.forge-button--raised:disabled{--_button-background: var(--_button-raised-disabled-background);--_button-color: var(--_button-raised-disabled-color);--_button-shadow: var(--_button-raised-disabled-shadow)}.forge-button--link{--_button-color: var(--_button-link-color);--_button-height: var(--_button-link-height);--_button-padding: var(--_button-link-padding);--_button-focus-indicator-offset: var(--_button-link-focus-indicator-offset);text-decoration:var(--_button-link-text-decoration);line-height:var(--_button-link-line-height);transition:opacity var(--_button-link-transition-duration) var(--_button-link-transition-timing);inline-size:var(--_button-link-width)}.forge-button--link:hover{text-decoration:var(--_button-link-hover-text-decoration)}.forge-button--link:active{opacity:var(--_button-link-active-opacity)}.forge-button--pill{--_button-shape: var(--_button-pill-shape);--_button-padding-inline: var(--_button-pill-padding-inline);--forge-focus-indicator-shape: var(--_button-pill-shape)}.forge-button--dense{--_button-height: var(--_button-dense-height)}:host{display:block;box-sizing:border-box}.title-container{display:grid;grid-template-columns:56px 1fr auto;align-items:center}::slotted([slot=icon]){fill:var(--forge-theme-text-medium, rgba(0, 0, 0, .6));height:24px;width:24px}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit);color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6))}.content-container{display:grid;grid-template-columns:56px 1fr auto;align-items:center;padding:var(--forge-spacing-small, 12px)}.vertical-line{display:block;width:1px;min-height:100%;height:100%;background-color:var(--forge-theme-outline, #e0e0e0);grid-row:2;grid-column:1}.main-content{--forge-card-outline-color: transparent;display:grid;place-content:start;place-items:start;grid-row:2;grid-column:2;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:var(--forge-theme-on-surface, #000000);line-height:1.5}`;var M=Object.defineProperty,B=Object.getOwnPropertyDescriptor,w=(e,t,a,r)=>{for(var o=r>1?void 0:r?B(t,a):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,a,o):i(o))||o);return r&&o&&M(t,a,o),o};const H="forge-ai-thought-base";let h=class extends p{render(){return s`
      <div class="thought-base-container">
        <div class="title-container">
          <slot name="icon"></slot>
          <span class="title"><slot name="title"></slot></span>
        </div>
        <div class="content-container">
          <div class="vertical-line"></div>
          <div class="main-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}};h.styles=f(q);w([d({type:Number})],h.prototype,"step",2);h=w([b(H)],h);const L=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}.sources-container{display:flex;align-items:center;column-gap:var(--forge-spacing-small, 12px);row-gap:var(--forge-spacing-xxsmall, 4px);flex-wrap:wrap;margin-block-start:var(--forge-spacing-xsmall, 8px)}.source{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-button-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-button-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-button-font-size-scale, .875)));font-weight:var(--forge-typography-button-font-weight, 500);line-height:var(--forge-typography-button-line-height, normal);letter-spacing:var(--forge-typography-button-letter-spacing, .0714285714em);text-transform:var(--forge-typography-button-text-transform, inherit);text-decoration:var(--forge-typography-button-text-decoration, inherit);display:flex;align-items:center;gap:var(--forge-spacing-xsmall, 8px);border-radius:calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1));background-color:var(--forge-theme-surface-container, #e0e0e0);padding-inline:var(--forge-spacing-medium, 16px);padding-block:var(--forge-spacing-xxsmall, 4px);color:var(--forge-theme-text-high, rgba(0, 0, 0, .87));cursor:pointer}.source svg{height:16px;width:16px}`;var V=Object.defineProperty,N=Object.getOwnPropertyDescriptor,y=(e,t,a,r)=>{for(var o=r>1?void 0:r?N(t,a):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,a,o):i(o))||o);return r&&o&&V(t,a,o),o};const R="forge-ai-thought-search-result";let u=class extends p{constructor(){super(...arguments),this.sources=[]}render(){return s`
      <forge-ai-thought-base step=${x(this.step)}>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" />
        </svg>
        <slot slot="title" name="title"></slot>
        <slot></slot>
        <div class="sources-container">
          ${this.sources.map(e=>s`
              <a href="${e.href}" class="source" target="_blank" rel="noopener noreferrer">
                <span>${e.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
                  <path
                    d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z" />
                </svg>
              </a>
            `)}
        </div>
      </forge-ai-thought-base>
    `}};u.styles=f(L);y([d({type:Number})],u.prototype,"step",2);y([d({type:Array})],u.prototype,"sources",2);u=y([b(R)],u);const G=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}.image-container{--forge-card-outline-color: transparent;display:grid;place-content:center;place-items:center}::slotted(img[slot=image]){height:150px;width:150px;object-fit:cover;border-radius:calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1))}`;var F=Object.defineProperty,E=Object.getOwnPropertyDescriptor,k=(e,t,a,r)=>{for(var o=r>1?void 0:r?E(t,a):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=(r?i(t,a,o):i(o))||o);return r&&o&&F(t,a,o),o};const W="forge-ai-thought-image";let v=class extends p{render(){return s`
      <forge-ai-thought-base step=${x(this.step)}>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
          <path
            d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5.04 9.29-2.75 3.54-1.96-2.36L6.5 17h11z" />
        </svg>
        <slot slot="title" name="title"></slot>
        <div class="image-container">
          <slot name="image"></slot>
        </div>
      </forge-ai-thought-base>
    `}};v.styles=f(G);k([d({type:Number})],v.prototype,"step",2);v=k([b(W)],v);const Y=":host{display:block}";var Z=Object.getOwnPropertyDescriptor,J=(e,t,a,r)=>{for(var o=r>1?void 0:r?Z(t,a):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(o=i(o)||o);return o};const K="forge-ai-thought-detail";let m=class extends p{render(){return s`
      <forge-ai-thought-base>
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="forge-icon">
          <path d="M12 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4" />
        </svg>
        <slot slot="title" name="title"></slot>
        <slot></slot>
      </forge-ai-thought-base>
    `}};m.styles=f(Y);m=J([b(K)],m);const Q="forge-ai-chain-of-thought";A();D();O();T.define([C,$]);const z=[{title:"Powder Safety Guide",href:"https://example.com/safety-guide"},{title:"Equipment Reviews 2024",href:"https://example.com/equipment-reviews"}],U=()=>s`
    <forge-ai-prompt slot="prompt">
      <forge-ai-dropdown-menu variant="icon-button" selection-mode="none" slot="actions">
        <span slot="trigger-content">
          <forge-icon-button>
            <forge-icon name="add" external></forge-icon>
          </forge-icon-button>
        </span>
        <forge-ai-dropdown-menu-item value="add-image">
          <span>Add image</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="add-pdf">
          <span>Add PDF</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="add-spreadsheet">
          <span>Add spreadsheet</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
      <forge-ai-voice-input slot="actions" @forge-ai-voice-input-result=${t=>{const a=document.querySelector("forge-ai-prompt");a&&(a.value=t.detail.transcript)}}></forge-ai-voice-input>
    </forge-ai-prompt>
  `,X={title:"AI/Primitives/Chain of Thought",component:Q,tags:["autodocs"],argTypes:{expanded:{control:"boolean",description:"Whether the chain of thought is expanded"},title:{control:"text",description:"Title for the chain of thought section"}},args:{expanded:!1,title:"Chain of Thought"},render:e=>s`
      <forge-ai-chain-of-thought .expanded=${e.expanded} .title=${e.title}>
        <forge-ai-thought-search-result .sources=${z}>
          <span slot="title">Searching for snowboarding information</span>
          Found 2 relevant articles about advanced snowboarding techniques and safety tips for experienced riders.
        </forge-ai-thought-search-result>

        <forge-ai-thought-image>
          <span slot="title">Analyzing the snowboarder's technique</span>
          <img
            src="https://images.unsplash.com/photo-1495469552678-d0fb77903866?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            slot="image" />
        </forge-ai-thought-image>

        <forge-ai-thought-detail>
          <span slot="title">Assessment and conclusion</span>
          Based on the image analysis and research, this snowboarder demonstrates excellent form with proper edge
          control, balanced stance, and appropriate speed for the terrain. The powder conditions appear ideal for this
          type of riding.
        </forge-ai-thought-detail>
      </forge-ai-chain-of-thought>
    `},l={},c={render:()=>s`
      <forge-ai-gradient-container style="height: 800px; width: 100%;">
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Can you analyze this snowboarding image and tell me about the technique being used?
          </forge-ai-user-message>

          <forge-ai-response-message>
            <p>I'll analyze the snowboarding image for you. Let me break down my thought process:</p>

            <forge-ai-chain-of-thought title="Analyzing Snowboarding Technique">
              <forge-ai-thought-search-result .sources=${z}>
                <span slot="title">Searching for snowboarding information</span>
                Found 2 relevant articles about advanced snowboarding techniques and safety tips for experienced riders.
              </forge-ai-thought-search-result>

              <forge-ai-thought-image>
                <span slot="title">Analyzing the snowboarder's technique</span>
                <img
                  src="https://images.unsplash.com/photo-1495469552678-d0fb77903866?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1web8fHx8MA%3D%3D"
                  slot="image" />
              </forge-ai-thought-image>

              <forge-ai-thought-detail>
                <span slot="title">Assessment and conclusion</span>
                Based on the image analysis and research, this snowboarder demonstrates excellent form with proper edge
                control, balanced stance, and appropriate speed for the terrain. The powder conditions appear ideal for
                this type of riding.
              </forge-ai-thought-detail>
            </forge-ai-chain-of-thought>

            <p>
              The snowboarder in this image shows excellent technique for powder riding. Their balanced stance and
              controlled descent indicate advanced skill level, making the most of these ideal snow conditions.
            </p>
          </forge-ai-response-message>

          ${U()}
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    `};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <forge-ai-gradient-container style="height: 800px; width: 100%;">
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Can you analyze this snowboarding image and tell me about the technique being used?
          </forge-ai-user-message>

          <forge-ai-response-message>
            <p>I'll analyze the snowboarding image for you. Let me break down my thought process:</p>

            <forge-ai-chain-of-thought title="Analyzing Snowboarding Technique">
              <forge-ai-thought-search-result .sources=\${snowboardingSources}>
                <span slot="title">Searching for snowboarding information</span>
                Found 2 relevant articles about advanced snowboarding techniques and safety tips for experienced riders.
              </forge-ai-thought-search-result>

              <forge-ai-thought-image>
                <span slot="title">Analyzing the snowboarder's technique</span>
                <img
                  src="https://images.unsplash.com/photo-1495469552678-d0fb77903866?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1web8fHx8MA%3D%3D"
                  slot="image" />
              </forge-ai-thought-image>

              <forge-ai-thought-detail>
                <span slot="title">Assessment and conclusion</span>
                Based on the image analysis and research, this snowboarder demonstrates excellent form with proper edge
                control, balanced stance, and appropriate speed for the terrain. The powder conditions appear ideal for
                this type of riding.
              </forge-ai-thought-detail>
            </forge-ai-chain-of-thought>

            <p>
              The snowboarder in this image shows excellent technique for powder riding. Their balanced stance and
              controlled descent indicate advanced skill level, making the most of these ideal snow conditions.
            </p>
          </forge-ai-response-message>

          \${createPrompt()}
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    \`;
  }
}`,...c.parameters?.docs?.source}}};const oo=["Demo","InChatInterface"],mo=Object.freeze(Object.defineProperty({__proto__:null,Demo:l,InChatInterface:c,__namedExportsOrder:oo,default:X},Symbol.toStringTag,{value:"Module"}));export{mo as A,l as D};
