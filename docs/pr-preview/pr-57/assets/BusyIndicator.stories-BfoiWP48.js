import{x as u,T as ie,r as ne,a as oe}from"./lit-element-CxMangmT.js";import{e as se,i as le,t as ce,a as ge,b as fe,d as pe,n as J,c as k,f as G,g as de,h as me}from"./slot-utils-CJMZ2nQc.js";import{s as he}from"./utils-snF2GEKE.js";import{g as ue}from"./_commonjsHelpers-CqkleIqs.js";import{C as ye,l as be,m as X,s as M,_ as $,h as N,i as ve,W as _e,o as ke,p as xe,g as Ee,k as Te,n as y,a as we,b as Se}from"./base-DchQP-E2.js";import{a as H,c as ze}from"./service-adapter-BgeOCrvH.js";var O={exports:{}},j;function Ae(){return j||(j=1,function(t,e){(function(){function l(c,b){var o,d=0,ae=c.length,T,r="",a,f,m,n,i,_,w,C,L=!0,D=!1,v;o=arguments.length>1?b:{},typeof o.indent>"u"&&(o.indent="    "),typeof o.openbrace=="string"&&(L=o.openbrace==="end-of-line"),typeof o.autosemicolon=="boolean"&&(D=o.autosemicolon);function R(s){return s===" "||s===`
`||s==="	"||s==="\r"||s==="\f"}function P(s){return s==="'"||s==='"'}function F(s){return a>="a"&&a<="z"||a>="A"&&a<="Z"||a>="0"&&a<="9"||"-_*.:#[]".indexOf(s)>=0}function B(){var s;for(s=_;s>0;s-=1)r+=o.indent}function U(){r=v(r),L?r+=" {":(r+=`
`,B(),r+="{"),f!==`
`&&(r+=`
`),_+=1}function S(){var s;_-=1,r=v(r),r.length>0&&D&&(s=r.charAt(r.length-1),s!==";"&&s!=="{"&&(r+=";")),r+=`
`,B(),r+="}",T.push(r),r=""}for(String.prototype.trimRight?v=function(s){return s.trimRight()}:v=function(s){return s.replace(/\s+$/,"")},i={Start:0,AtRule:1,Block:2,Selector:3,Ruleset:4,Property:5,Separator:6,Expression:7,URL:8},_=0,n=i.Start,C=!1,T=[],c=c.replace(/\r\n/g,`
`);d<ae;){if(a=c.charAt(d),f=c.charAt(d+1),d+=1,P(w)){r+=a,a===w&&(w=null),a==="\\"&&f===w&&(r+=f,d+=1);continue}if(P(a)){r+=a,w=a;continue}if(C){r+=a,a==="*"&&f==="/"&&(C=!1,r+=f,d+=1);continue}if(a==="/"&&f==="*"){C=!0,r+=a,r+=f,d+=1;continue}if(n===i.Start){if(T.length===0&&R(a)&&r.length===0)continue;if(a<=" "||a.charCodeAt(0)>=128){n=i.Start,r+=a;continue}if(F(a)||a==="@"){if(m=v(r),m.length===0)T.length>0&&(r=`

`);else if(m.charAt(m.length-1)==="}"||m.charAt(m.length-1)===";")r=m+`

`;else for(;f=r.charAt(r.length-1),!(f!==" "&&f.charCodeAt(0)!==9);)r=r.substr(0,r.length-1);r+=a,n=a==="@"?i.AtRule:i.Selector;continue}}if(n===i.AtRule){if(a===";"){r+=a,n=i.Start;continue}if(a==="{"){m=v(r),U(),n=m==="@font-face"?i.Ruleset:i.Block;continue}r+=a;continue}if(n===i.Block){if(F(a)){if(m=v(r),m.length===0)T.length>0&&(r=`

`);else if(m.charAt(m.length-1)==="}")r=m+`

`;else for(;f=r.charAt(r.length-1),!(f!==" "&&f.charCodeAt(0)!==9);)r=r.substr(0,r.length-1);B(),r+=a,n=i.Selector;continue}if(a==="}"){S(),n=i.Start;continue}r+=a;continue}if(n===i.Selector){if(a==="{"){U(),n=i.Ruleset;continue}if(a==="}"){S(),n=i.Start;continue}r+=a;continue}if(n===i.Ruleset){if(a==="}"){S(),n=i.Start,_>0&&(n=i.Block);continue}if(a===`
`){r=v(r),r+=`
`;continue}if(!R(a)){r=v(r),r+=`
`,B(),r+=a,n=i.Property;continue}r+=a;continue}if(n===i.Property){if(a===":"){r=v(r),r+=": ",n=i.Expression,R(f)&&(n=i.Separator);continue}if(a==="}"){S(),n=i.Start,_>0&&(n=i.Block);continue}r+=a;continue}if(n===i.Separator){if(!R(a)){r+=a,n=i.Expression;continue}P(f)&&(n=i.Expression);continue}if(n===i.Expression){if(a==="}"){S(),n=i.Start,_>0&&(n=i.Block);continue}if(a===";"){r=v(r),r+=`;
`,n=i.Ruleset;continue}if(r+=a,a==="("&&r.charAt(r.length-2)==="l"&&r.charAt(r.length-3)==="r"&&r.charAt(r.length-4)==="u"){n=i.URL;continue}continue}if(n===i.URL&&a===")"&&r.charAt(r.length-1!=="\\")){r+=a,n=i.Expression;continue}r+=a}return r=T.join("")+r,r}t.exports=l})()}(O)),O.exports}var $e=Ae();const Ce=ue($e);function Re(t){return e=>u`
      ${e()}

      <style>
        ${Ce(t,{indent:"  "})}
      </style>
    `}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Be=`${ye}linear-progress`,Ne={INDETERMINATE:"forge-linear-progress--indeterminate"},Pe={ROOT:".forge-linear-progress",TRACK:".track",PROGRESS:".primary-bar"},ee={DETERMINATE:"determinate",PROGRESS:"progress",BUFFER:"buffer",THEME:"theme"},Xe={...ee},h={elementName:Be,classes:Ne,selectors:Pe,attributes:Xe,observedAttributes:ee};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class Me extends be{constructor(e){super(e),this._rootElement=X(e,h.selectors.ROOT),this._trackElement=X(e,h.selectors.TRACK),this._progressElement=X(e,h.selectors.PROGRESS)}initialize(){this._component[M]({role:"progressbar",ariaValueMin:"0",ariaValueMax:"1",ariaValueNow:this._component.determinate?`${this._component.progress}`:null})}setDeterminate(e){this._component[M]({ariaValueNow:e?`${this._component.progress}`:null}),e?this.setProgress(this._component.progress):(this._trackElement.style.transform="scaleX(100%)",this._progressElement.style.transform=""),this._rootElement.classList.toggle(h.classes.INDETERMINATE,!e)}setProgress(e){this._component[M]({ariaValueNow:`${e}`}),this._progressElement.style.transform=`scaleX(${e*100}%)`}setBuffer(e){this._trackElement.style.transform=`scaleX(${e*100}%)`}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class Oe{constructor(e){this._adapter=e,this._determinate=!1,this._progress=0,this._buffer=1,this._theme="primary"}initialize(){this._adapter.initialize()}get determinate(){return this._determinate}set determinate(e){e=!!e,this._determinate!==e&&(this._determinate=e,this._adapter.setBuffer(this._determinate?this._buffer:1),this._adapter.setProgress(this._determinate?this._progress:0),this._adapter.setDeterminate(this._determinate),this._adapter.toggleHostAttribute(h.attributes.DETERMINATE,this._determinate))}get progress(){return this._progress}set progress(e){(e==null||e<0||e>1||isNaN(e))&&(e=0),this._progress!==e&&(this._progress=e,this._determinate&&this._adapter.setProgress(this._progress),this._adapter.setHostAttribute(h.attributes.PROGRESS,String(this._progress)))}get buffer(){return this._buffer}set buffer(e){(e==null||e<0||isNaN(e))&&(e=0),this._buffer!==e&&(this._buffer=e,this._determinate&&this._adapter.setBuffer(this._buffer),this._adapter.setHostAttribute(h.attributes.BUFFER,this._buffer.toString()))}get theme(){return this._theme}set theme(e){this._theme!==e&&(this._theme=e,this._adapter.toggleHostAttribute(h.attributes.THEME,!!this._theme,this._theme))}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const Ie='<template><div class="forge-linear-progress forge-linear-progress--indeterminate" part="progressbar"><div class="dots"></div><div class="track"></div><div class="bar primary-bar"><div class="bar-inner"></div></div><div class="bar secondary-bar"><div class="bar-inner"></div></div></div></template>',Le=`:host{--_linear-progress-track-height:var(--forge-linear-progress-track-height, 4px)}:host{display:block;position:relative;min-inline-size:80px;block-size:var(--_linear-progress-track-height);contain:strict;content-visibility:auto}:host([hidden]){display:none}.forge-linear-progress{--_linear-progress-track-color:var(--forge-linear-progress-track-color, var(--forge-theme-tertiary-container, #d0d7ff));--_linear-progress-track-shape:var(--forge-linear-progress-track-shape, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));--_linear-progress-indicator-color:var(--forge-linear-progress-indicator-color, var(--forge-theme-tertiary, #3d5afe));--_linear-progress-indicator-height:var(--forge-linear-progress-indicator-height, var(--_linear-progress-track-height));--_linear-progress-determinate-duration:var(--forge-linear-progress-determinate-duration, var(--forge-animation-duration-medium1, 250ms));--_linear-progress-determinate-easing:var(--forge-linear-progress-determinate-easing, cubic-bezier(0.4, 0, 0.6, 1));--_linear-progress-indeterminate-duration:var(--forge-linear-progress-indeterminate-duration, 2s);--_linear-progress-buffer-duration:var(--forge-linear-progress-buffer-duration, var(--forge-animation-duration-short4, 200ms));--_linear-progress-theme-transition-duration:var(--forge-linear-progress-theme-transition-duration, var(--forge-animation-duration-short3, 150ms));--_linear-progress-theme-transition-timing:var(--forge-linear-progress-theme-transition-timing, var(--forge-animation-easing-standard, cubic-bezier(0.2, 0, 0, 1)));--_linear-progress-track-dot-size:calc(var(--_linear-progress-track-height) / 2);--_linear-progress-track-background-width:calc(var(--_linear-progress-track-dot-size) * 5);--_linear-progress-track-background:0/var(--_linear-progress-track-background-width) 100% radial-gradient(circle at calc(var(--_linear-progress-track-dot-size) * 2), var(--_linear-progress-track-color) 0, var(--_linear-progress-track-color) var(--_linear-progress-track-dot-size), transparent var(--_linear-progress-track-dot-size))}.forge-linear-progress{inset:0;outline:transparent solid 1px;border-radius:var(--_linear-progress-track-shape);overflow:hidden;display:flex;align-items:center}.bar,.bar-inner,.dots,.forge-linear-progress,.track{position:absolute}.dots{inset:0;animation:linear infinite var(--_linear-progress-buffer-duration);animation-name:buffering;background-color:var(--_linear-progress-track-color);background-repeat:repeat-x;mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");z-index:-1}.bar{animation:none;inline-size:100%;block-size:var(--_linear-progress-indicator-height);transform-origin:left center;will-change:transform;transition:transform var(--_linear-progress-determinate-duration) var(--_linear-progress-determinate-easing)}.secondary-bar{display:none}.bar-inner{inset:0;animation:none;transition:background-color var(--_linear-progress-theme-transition-duration) var(--_linear-progress-theme-transition-timing);background:var(--_linear-progress-indicator-color)}.track{inset:0;will-change:transform;background:var(--_linear-progress-track-color);transition:transform var(--_linear-progress-determinate-duration) var(--_linear-progress-determinate-easing),background-color var(--_linear-progress-theme-transition-duration) var(--_linear-progress-theme-transition-timing);transform-origin:left center}.forge-linear-progress--indeterminate .bar{transition:none}.forge-linear-progress--indeterminate .primary-bar{inset-inline-start:-145.167%;will-change:transform;animation:linear infinite var(--_linear-progress-indeterminate-duration);animation-name:primary-indeterminate-translate}.forge-linear-progress--indeterminate .secondary-bar{inset-inline-start:-54.8889%;display:block;will-change:transform;animation:linear infinite var(--_linear-progress-indeterminate-duration);animation-name:secondary-indeterminate-translate}.forge-linear-progress--indeterminate .dots{display:none}.forge-linear-progress--indeterminate .primary-bar>.bar-inner{will-change:transform;animation:linear infinite var(--_linear-progress-indeterminate-duration) primary-indeterminate-scale}.forge-linear-progress--indeterminate .secondary-bar>.bar-inner{will-change:transform;animation:linear infinite var(--_linear-progress-indeterminate-duration) secondary-indeterminate-scale}:host-context([dir=rtl]) .forge-linear-progress .bar{transform-origin:right center}:host-context([dir=rtl]) .forge-linear-progress .track{transform-origin:right center}:host-context([dir=rtl]) .forge-linear-progress .dots{animation-name:buffering-rtl}:host-context([dir=rtl]) .forge-linear-progress.forge-linear-progress--indeterminate .primary-bar{animation-name:primary-indeterminate-translate-rtl}:host-context([dir=rtl]) .forge-linear-progress.forge-linear-progress--indeterminate .secondary-bar{animation-name:secondary-indeterminate-translate-rtl}:host([dir=rtl]) .forge-linear-progress .bar{transform-origin:right center}:host([dir=rtl]) .forge-linear-progress .track{transform-origin:right center}:host([dir=rtl]) .forge-linear-progress .dots{animation-name:buffering-rtl}:host([dir=rtl]) .forge-linear-progress.forge-linear-progress--indeterminate .primary-bar{animation-name:primary-indeterminate-translate-rtl}:host([dir=rtl]) .forge-linear-progress.forge-linear-progress--indeterminate .secondary-bar{animation-name:secondary-indeterminate-translate-rtl}.forge-linear-progress:dir(rtl) .bar{transform-origin:right center}.forge-linear-progress:dir(rtl) .track{transform-origin:right center}.forge-linear-progress:dir(rtl) .dots{animation-name:buffering-rtl}.forge-linear-progress:dir(rtl).forge-linear-progress--indeterminate .primary-bar{animation-name:primary-indeterminate-translate-rtl}.forge-linear-progress:dir(rtl).forge-linear-progress--indeterminate .secondary-bar{animation-name:secondary-indeterminate-translate-rtl}:host([theme=primary]) .forge-linear-progress{--_linear-progress-indicator-color:var(--forge-linear-progress-indicator-color, var(--forge-theme-primary, #3f51b5));--_linear-progress-track-color:var(--forge-linear-progress-track-color, var(--forge-theme-primary-container, #d1d5ed))}:host([theme=secondary]) .forge-linear-progress{--_linear-progress-indicator-color:var(--forge-linear-progress-indicator-color, var(--forge-theme-secondary, #ffc107));--_linear-progress-track-color:var(--forge-linear-progress-track-color, var(--forge-theme-secondary-container, #fff0c3))}:host([theme=success]) .forge-linear-progress{--_linear-progress-indicator-color:var(--forge-linear-progress-indicator-color, var(--forge-theme-success, #2e7d32));--_linear-progress-track-color:var(--forge-linear-progress-track-color, var(--forge-theme-success-container, #cde0ce))}:host([theme=error]) .forge-linear-progress{--_linear-progress-indicator-color:var(--forge-linear-progress-indicator-color, var(--forge-theme-error, #b00020));--_linear-progress-track-color:var(--forge-linear-progress-track-color, var(--forge-theme-error-container, #ecc2c9))}:host([theme=warning]) .forge-linear-progress{--_linear-progress-indicator-color:var(--forge-linear-progress-indicator-color, var(--forge-theme-warning, #d14900));--_linear-progress-track-color:var(--forge-linear-progress-track-color, var(--forge-theme-warning-container, #f4d3c2))}:host([theme=info]) .forge-linear-progress{--_linear-progress-indicator-color:var(--forge-linear-progress-indicator-color, var(--forge-theme-info, #1565c0));--_linear-progress-track-color:var(--forge-linear-progress-track-color, var(--forge-theme-info-container, #c7daf0))}@media screen and (forced-colors:active){.forge-linear-progress{--_linear-progress-indicator-color:var(--forge-linear-progress-indicator-color, CanvasText);--_linear-progress-track-color:var(--forge-linear-progress-track-color, GrayText);border:1px solid CanvasText}.forge-linear-progress.forge-linear-progress--indeterminate{--_linear-progress-track-color:var(--forge-linear-progress-track-color, Canvas)}}@keyframes buffering{0%{transform:translateX(calc(1 * var(--_linear-progress-track-background-width)))}}@keyframes primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5,0,0.701732,0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435,0.381352,0.55,0.956352);transform:translateX(calc(1 * 83.6714%))}100%{transform:translateX(calc(1 * 200.611%))}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15,0,0.515058,0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033,0.284058,0.8,0.733712);transform:translateX(calc(1 * 37.6519%))}48.35%{animation-timing-function:cubic-bezier(0.4,0.627035,0.6,0.902026);transform:translateX(calc(1 * 84.3862%))}100%{transform:translateX(calc(1 * 160.278%))}}@keyframes buffering-rtl{0%{transform:translateX(calc(-1 * var(--_linear-progress-track-background-width)))}}@keyframes primary-indeterminate-translate-rtl{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5,0,0.701732,0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435,0.381352,0.55,0.956352);transform:translateX(calc(-1 * 83.6714%))}100%{transform:translateX(calc(-1 * 200.611%))}}@keyframes secondary-indeterminate-translate-rtl{0%{animation-timing-function:cubic-bezier(0.15,0,0.515058,0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033,0.284058,0.8,0.733712);transform:translateX(calc(-1 * 37.6519%))}48.35%{animation-timing-function:cubic-bezier(0.4,0.627035,0.6,0.902026);transform:translateX(calc(-1 * 84.3862%))}100%{transform:translateX(calc(-1 * 160.278%))}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(0.334731,0.12482,0.785844,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(0.06,0.11,0.6,1);transform:scaleX(.661479)}100%{transform:scaleX(.08)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028,0.057051,0.57661,0.453971);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(0.152313,0.196432,0.648374,1.00432);transform:scaleX(.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759,-0.003163,0.211762,1.38179);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}`;let E=class extends _e(ke(xe)){static get observedAttributes(){return Object.values(h.observedAttributes)}constructor(){super(),Ee(this,Ie,Le),this._core=new Oe(new Me(this))}connectedCallback(){this._core.initialize()}attributeChangedCallback(e,l,c){switch(e){case h.observedAttributes.DETERMINATE:this.determinate=ze(c);break;case h.observedAttributes.PROGRESS:this.progress=H(c);break;case h.observedAttributes.BUFFER:this.buffer=H(c);break;case h.observedAttributes.THEME:this.theme=c;break}}};$([N()],E.prototype,"determinate",void 0);$([N()],E.prototype,"progress",void 0);$([N()],E.prototype,"buffer",void 0);$([N()],E.prototype,"theme",void 0);E=$([ve({name:h.elementName})],E);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function De(){Te(E)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=se(class extends le{constructor(t){var e;if(super(t),t.type!==ce.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var c,b;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((c=this.nt)!=null&&c.has(o))&&this.st.add(o);return this.render(e)}const l=t.element.classList;for(const o of this.st)o in e||(l.remove(o),this.st.delete(o));for(const o in e){const d=!!e[o];d===this.st.has(o)||(b=this.nt)!=null&&b.has(o)||(d?(l.add(o),this.st.add(o)):(l.remove(o),this.st.delete(o)))}return ie}}),Ue=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */@keyframes forge-dialog-zoom-in{0%{opacity:var(--_dialog-zoom-opacity);scale:var(--_dialog-zoom-scale)}to{opacity:1;scale:1}}@keyframes forge-dialog-zoom-out{0%{opacity:1;scale:1}to{opacity:var(--_dialog-zoom-opacity);scale:var(--_dialog-zoom-scale)}}@keyframes forge-dialog-fade-in{0%{opacity:var(--_dialog-fade-opacity)}to{opacity:1}}@keyframes forge-dialog-fade-out{0%{opacity:1}to{opacity:var(--_dialog-fade-opacity)}}@keyframes forge-dialog-slide-in{0%{opacity:var(--_dialog-slide-opacity);translate:var(--_dialog-slide-translate)}to{opacity:1;translate:0 0}}@keyframes forge-dialog-slide-out{0%{opacity:1;translate:0 0}to{opacity:var(--_dialog-slide-opacity);translate:var(--_dialog-slide-translate)}}:host{display:contents;border-radius:inherit}.surface{padding:var(--forge-spacing-large, 24px);display:grid;gap:var(--forge-spacing-large, 24px)}.layout-container{display:flex;align-items:center;gap:var(--forge-spacing-large, 24px)}.layout-container .content{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px);width:100%}.message{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);flex:1 auto;margin-block:0;color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6))}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);margin:0}.progress-container{min-width:244px}forge-dialog.inline{border-radius:inherit}forge-dialog.inline::part(root){position:absolute;overflow:clip}forge-dialog.inline::part(root),forge-dialog.inline::part(backdrop){border-radius:inherit}.transparent{--forge-dialog-background: transparent;--forge-dialog-elevation: none}`;var Ge=Object.defineProperty,He=Object.getOwnPropertyDescriptor,re=t=>{throw TypeError(t)},p=(t,e,l,c)=>{for(var b=c>1?void 0:c?He(e,l):e,o=t.length-1,d;o>=0;o--)(d=t[o])&&(b=(c?d(e,l,b):d(b))||b);return c&&b&&Ge(e,l,b),b},te=(t,e,l)=>e.has(t)||re("Cannot "+l),I=(t,e,l)=>(te(t,e,"read from private field"),e.get(t)),je=(t,e,l)=>e.has(t)?re("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,l),W=(t,e,l,c)=>(te(t,e,"write to private field"),e.set(t,l),l),x;const We="forge-busy-indicator";let g=class extends oe{constructor(){super(...arguments),this.open=!1,this.mode="fullscreen",this.headingLevel=1,this.cancelable=!1,this.variant="spinner",this.determinate=!1,this.progress=0,this.buffer=0,this.transparent=!1,je(this,x,null)}get _titleTemplate(){var e;const t=!!((e=this.titleText)!=null&&e.trim())||this._slottedTitleNodes.length>0;return k(t,()=>u`<div role="heading" aria-level=${this.headingLevel} id="title" class="title"><slot name="title">${this.titleText}</slot></div>`,()=>u`<slot name="title"></slot>`)}get _messageTemplate(){var e;const t=!!((e=this.message)!=null&&e.trim())||this._slottedMessageNodes.length>0;return k(t,()=>u`<p id="message" class="message"><slot name="message">${this.message}</slot></p>`,()=>u`<slot name="message"></slot>`)}get _spinnerTemplate(){return k(this.variant==="spinner",()=>u`<div>
          <forge-circular-progress
            class="spinner"
            aria-hidden="true"
            ?determinate="${this.determinate}"
            .progress=${this.progress}></forge-circular-progress>
        </div>`)}get _contentTemplate(){const t=this.variant==="message-only"||this.message||this.cancelable;return k(t,()=>u`<div class="content">${this._messageTemplate} ${this._cancelButtonTemplate}</div>`)}get _cancelButtonTemplate(){return k(this.cancelable,()=>u`<forge-button class="cancel-button" variant="outlined" @click=${this._onCancel}>
          <slot name="cancel-text">Cancel</slot>
        </forge-button>`)}get _progressBarTemplate(){return k(this.variant==="progress",()=>u`<div class="progress-container">
          <forge-linear-progress
            aria-hidden="true"
            .determinate="${this.determinate}"
            .buffer=${this.buffer}
            .progress=${this.progress}></forge-linear-progress>
        </div>`)}disconnectedCallback(){I(this,x)&&this._releaseFocus(),super.disconnectedCallback()}willUpdate(t){t.has("open")&&this._tryManageFocus()}render(){return u`
      <forge-dialog
        class=${Fe({inline:this.mode==="inline",transparent:this.transparent})}
        persistent
        fullscreen-threshold="0"
        .open=${this.open}
        .mode=${this.mode==="inline"?"inline-modal":"modal"}
        .label=${this.label||this.titleText||G(this._slottedTitleNodes)||""}
        .description=${this.description||this.message||G(this._slottedMessageNodes)||""}>
        <div class="surface" @slotchange=${this._handleSlotChange}>
          ${this._titleTemplate}
          ${k(this.variant==="spinner"||this.variant==="message-only"||this.message||this.cancelable,()=>u`<div class="layout-container">${this._spinnerTemplate} ${this._contentTemplate}</div>`)}
          ${this._progressBarTemplate}
        </div>
      </forge-dialog>
    `}_onCancel(){const t=new CustomEvent("forge-busy-indicator-cancel",{bubbles:!0,cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||(this.open=!1)}_tryManageFocus(){this.open&&this.mode==="fullscreen"?this._captureFocusedElement():I(this,x)&&this._releaseFocus()}_captureFocusedElement(){W(this,x,document.activeElement)}_releaseFocus(){var t;(t=I(this,x))==null||t.focus({preventScroll:!0}),W(this,x,null)}_handleSlotChange(t){const e=t.target.name;["title","message"].includes(e)&&this.requestUpdate()}};x=new WeakMap;ge();fe();De();pe();g.styles=ne(Ue);p([y({type:Boolean})],g.prototype,"open",2);p([y({type:String})],g.prototype,"mode",2);p([y({attribute:"title-text"})],g.prototype,"titleText",2);p([y({attribute:"heading-level",type:Number})],g.prototype,"headingLevel",2);p([y()],g.prototype,"message",2);p([y()],g.prototype,"label",2);p([y()],g.prototype,"description",2);p([y({type:Boolean})],g.prototype,"cancelable",2);p([y()],g.prototype,"variant",2);p([y({type:Boolean})],g.prototype,"determinate",2);p([y({type:Number})],g.prototype,"progress",2);p([y({type:Number})],g.prototype,"buffer",2);p([y({type:Boolean})],g.prototype,"transparent",2);p([J({slot:"title",flatten:!0})],g.prototype,"_slottedTitleNodes",2);p([J({slot:"message",flatten:!0})],g.prototype,"_slottedMessageNodes",2);g=p([we(We)],g);const qe="forge-busy-indicator",Ve=Se("forge-busy-indicator-cancel"),Ke={title:"Components/Busy Indicator",component:qe,render:t=>{const e=me();function l(){e.value.open=!0,setTimeout(()=>e.value.open=!1,3e3)}return u`
      <forge-button variant="raised" @click=${l}>Show Busy Indicator</forge-button>
      <forge-busy-indicator
        ${de(e)}
        @forge-busy-indicator-cancel=${Ve}
        .mode=${t.mode}
        .titleText="${t.titleText}"
        .message=${t.message}
        .cancelable=${t.cancelable}
        .variant=${t.variant}
        .determinate=${t.determinate}
        .progress=${t.progress}
        .buffer=${t.buffer}
        .transparent=${t.transparent}></forge-busy-indicator>
    `},argTypes:{mode:{control:"select",options:["modal","inline"]},variant:{control:"select",options:["spinner","progress","message-only"]}},args:{mode:"modal",titleText:"",message:"Please wait while we load your data...",cancelable:!1,variant:"spinner",progress:.5,buffer:1,determinate:!1,transparent:!1}},z={},A={...he,decorators:[Re(`
    .parent {
      position: relative;
      height: 300px;
      border: 1px solid var(--forge-theme-outline);
      border-radius: var(--forge-shape-large);
    }
  `)],render:()=>u`
      <div class="parent">
        <forge-busy-indicator
          open
          mode="inline"
          title-text="Loading"
          message="Please wait while we load your data..."></forge-busy-indicator>
      </div>
    `};var q,V,K;z.parameters={...z.parameters,docs:{...(q=z.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(K=(V=z.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var Q,Y,Z;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...standaloneStoryParams,
  decorators: [storyStyles(\`
    .parent {
      position: relative;
      height: 300px;
      border: 1px solid var(--forge-theme-outline);
      border-radius: var(--forge-shape-large);
    }
  \`)],
  render: () => {
    return html\`
      <div class="parent">
        <forge-busy-indicator
          open
          mode="inline"
          title-text="Loading"
          message="Please wait while we load your data..."></forge-busy-indicator>
      </div>
    \`;
  }
}`,...(Z=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Qe=["Demo","Inline"],ir=Object.freeze(Object.defineProperty({__proto__:null,Demo:z,Inline:A,__namedExportsOrder:Qe,default:Ke},Symbol.toStringTag,{value:"Module"}));export{ir as B,z as D,A as I};
