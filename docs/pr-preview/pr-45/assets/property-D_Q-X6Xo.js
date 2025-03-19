import{i as w,t as g}from"./service-adapter-CRnntHsK.js";import{f as m,u as y}from"./lit-element-CxMangmT.js";/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const T=typeof Intl<"u"&&Intl.v8BreakIterator;class a{static get isBrowser(){return typeof document=="object"&&!!document}static get isMobile(){return a.isBrowser&&/Mobi/.test(navigator.userAgent)}static get EDGE(){return a.isBrowser&&/(edge)/i.test(navigator.userAgent)}static get TRIDENT(){return a.isBrowser&&/(msie|trident)/i.test(navigator.userAgent)}static get BLINK(){return a.isBrowser&&!!(window.chrome||T)&&!!CSS&&!a.EDGE&&!a.TRIDENT}static get WEBKIT(){return a.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!a.BLINK&&!a.EDGE&&!a.TRIDENT}static get IOS(){return a.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static get FIREFOX(){return a.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent)}static get ANDROID(){return a.isBrowser&&/android/i.test(navigator.userAgent)&&!a.TRIDENT}SAFARI(){return a.isBrowser&&/safari/i.test(navigator.userAgent)&&a.WEBKIT}}const S=Symbol("Forge custom element tag name"),f=Symbol("Forge custom element dependencies"),d=Symbol("Forge custom element parsed template"),p=Symbol("Forge custom element CSS text"),u=Symbol("Forge custom element CSSStyleSheet instances"),E=window.__forgeFlags__useConstructableStyleSheets!==!1&&window.ShadowRoot&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;function h(e){C(e[S],e),w(e[f])&&b(e[f])}function b(e){e.forEach(h)}function C(e,t,r){var o;(o=window==null?void 0:window.customElements)!=null&&o.get(e)||window.customElements.define(e,t,r)}function R(e){return new DOMParser().parseFromString(e,"text/html").querySelector("template")}function U(e,t,r,o=!1){e.attachShadow({mode:"open",delegatesFocus:o}),r&&D(e,r),A(e,t)}function A(e,t,{force:r}={force:!1}){const o=e.constructor;if(r||!o[d]){const n=t instanceof HTMLTemplateElement?t:R(t);o[d]=n}const s=o[d];e.shadowRoot.appendChild(s.content.cloneNode(!0))}function D(e,t,{force:r}={force:!1}){const o=e.constructor;if(!e.shadowRoot||!t){E&&(o[u]&&(o[u]=[]),e.shadowRoot&&(e.shadowRoot.adoptedStyleSheets=[]));return}if(t=t instanceof Array?t:[t],E){if(r||!o[u]){const s=e.ownerDocument.defaultView??window,n=new s.CSSStyleSheet,i=t.join(" ");n.replaceSync(i),o[p]=i,o[u]=[n]}e.shadowRoot.adoptedStyleSheets=o[u]}else{const s=document.createElement("style"),n=window.forgeNonce;n&&s.setAttribute("nonce",n),s.textContent=t.join(" "),e.shadowRoot.appendChild(s)}}function O(e){if(!E||!e.shadowRoot||!e.constructor[p]||!e.ownerDocument.defaultView)return;const t=new e.ownerDocument.defaultView.CSSStyleSheet;t.replaceSync(e.constructor[p]),e.shadowRoot.adoptedStyleSheets=[t]}function I(e,t){return e.shadowRoot.querySelector(t)}function x(e,t,r,o=!0,s=!1){let n;return typeof CustomEvent=="function"?n=new CustomEvent(t,{detail:r,bubbles:o,cancelable:s}):(n=document.createEvent("CustomEvent"),n.initCustomEvent(t,o,s,r)),e.dispatchEvent(n)}function k({name:e,dependencies:t,define:r=!0}){return o=>{v(o),e&&(o[S]=e),t&&t.length&&(o[f]=t),window.__forgeFlags__autoDefine!==!1&&r&&h(o)}}function v(e){const t=e.prototype.connectedCallback;e.prototype.connectedCallback=function(){this.isConnected&&(this._isInitialized||(M(this),typeof this.initializedCallback=="function"&&this.initializedCallback.apply(this),this._isInitialized=!0),typeof t=="function"&&t.apply(this))}}function M(e){const t=Object.getOwnPropertyNames(e).filter(r=>!r.startsWith("_"));for(const r of t){const o=e[r];delete e[r],e[r]=o}}function H(e,t,r,o){var s=arguments.length,n=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class Y extends HTMLElement{adoptedCallback(){this.shadowRoot&&O(this)}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function z(){return HTMLElement.prototype.hasOwnProperty("popover")}function N(){return ElementInternals.prototype.hasOwnProperty("role")}function B(){return!a.isMobile}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const K="forge-",q="https://cdn.forge.tylertech.com/",G=B(),V="data-forge-deferred-label-target",W=Symbol("ElementInternals"),$=Symbol("setDefaultAria"),X=Symbol("updateTarget"),J=Symbol("forgeLabelRef");/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 *//**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *
 * Adapted and influenced from [Material Web](https://github.com/material-components/material-web).
 * The original source code can be found at: [GitHub](https://github.com/material-components/material-web/blob/main/internal/aria/aria.ts)
 */function _(e){return e.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function Q(e,t,r,{setAttribute:o}={setAttribute:!0}){Object.entries(r).forEach(([s,n])=>{N()&&(t[s]=n);const i=_(s);(o||!e.hasAttribute(i))&&g(e,n!=null,i,n)})}function Z(e,t,r){if(r)try{e.states.add(t)}catch{e.states.add(`--${t}`)}else try{e.states.delete(t)}catch{e.states.delete(`--${t}`)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:m},P=(e=L,t,r)=>{const{kind:o,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,e),o==="accessor"){const{name:i}=r;return{set(c){const l=t.get.call(this);t.set.call(this,c),this.requestUpdate(i,l,e)},init(c){return c!==void 0&&this.P(i,void 0,e),c}}}if(o==="setter"){const{name:i}=r;return function(c){const l=this[i];t.call(this,c),this.requestUpdate(i,l,e)}}throw Error("Unsupported decorator location: "+o)};function te(e){return(t,r)=>typeof r=="object"?P(e,t,r):((o,s,n)=>{const i=s.hasOwnProperty(n);return s.constructor.createProperty(n,i?{...o,wrapped:!0}:o),i?Object.getOwnPropertyDescriptor(s,n):void 0})(e,t,r)}export{Y as B,K as C,V as D,H as _,U as a,Z as b,k as c,h as d,x as e,q as f,I as g,J as h,W as i,Q as j,z as k,G as l,te as n,$ as s,ee as t,X as u};
