import{e as l,i as c,c as v}from"./iframe-DwoxaNaU.js";import{_ as h,c as m,B as b,a as g,d as p}from"./with-default-aria-DPYHDtSS.js";import{C as u}from"./icon-registry-fMVROT8_.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function f(r){const e=r.shadowRoot,t=r.constructor.styles,i=r.ownerDocument.defaultView;if(!(!l||!e||!t||!i))if(Array.isArray(t)&&t.length){const d=t.map(n=>{const a=new i.CSSStyleSheet;return a.replaceSync(n.toString()),a});e.adoptedStyleSheets=d}else{const d=new i.CSSStyleSheet;d.replaceSync(t.toString()),e.adoptedStyleSheets=[d]}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class R extends c{adoptedCallback(){f(this)}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const y=`${u}divider`,S={VERTICAL:"vertical"},o={elementName:y,attributes:S};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const C='<template><div class="forge-divider" part="root"></div></template>',_=":host{--_divider-margin:var(--forge-divider-margin, 0)}:host{display:block;margin:var(--_divider-margin)}:host([hidden]){display:none}.forge-divider{--_divider-color:var(--forge-divider-color, var(--forge-theme-outline, #e0e0e0));--_divider-width:var(--forge-divider-width, var(--forge-border-thin, 1px));--_divider-border-style:var(--forge-divider-border-style, solid)}.forge-divider{border:none;border-bottom-color:var(--_divider-color);border-bottom-width:var(--_divider-width);border-bottom-style:var(--_divider-border-style);height:0}:host([vertical]){display:inline-block;height:100%}:host([vertical]) .forge-divider{border:none;border-right-color:var(--_divider-color);border-right-width:var(--_divider-width);border-right-style:var(--_divider-border-style);height:100%;width:0}";let s=class extends b{static get observedAttributes(){return[o.attributes.VERTICAL]}constructor(){super(),g(this,C,_)}attributeChangedCallback(e,t,i){switch(e){case o.attributes.VERTICAL:this.vertical=v(i);break}}get vertical(){return this.hasAttribute(o.attributes.VERTICAL)}set vertical(e){this.toggleAttribute(o.attributes.VERTICAL,e)}};s=h([m({name:o.elementName})],s);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function V(){p(s)}export{R as B,V as d};
