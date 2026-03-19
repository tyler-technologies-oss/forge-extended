import{C as o,D as d,E as a,_ as s,A as v,d as l}from"./with-default-aria-BHaZ-xH1.js";import{c as n}from"./iframe-B_5z-HcO.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const c=`${o}divider`,h={VERTICAL:"vertical"},e={elementName:c,attributes:h};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const b='<template><div class="forge-divider" part="root"></div></template>',m=":host{--_divider-margin:var(--forge-divider-margin, 0)}:host{display:block;margin:var(--_divider-margin)}:host([hidden]){display:none}.forge-divider{--_divider-color:var(--forge-divider-color, var(--forge-theme-outline, #e0e0e0));--_divider-width:var(--forge-divider-width, var(--forge-border-thin, 1px));--_divider-border-style:var(--forge-divider-border-style, solid)}.forge-divider{border:none;border-bottom-color:var(--_divider-color);border-bottom-width:var(--_divider-width);border-bottom-style:var(--_divider-border-style);height:0}:host([vertical]){display:inline-block;height:100%}:host([vertical]) .forge-divider{border:none;border-right-color:var(--_divider-color);border-right-width:var(--_divider-width);border-right-style:var(--_divider-border-style);height:100%;width:0}";let t=class extends d{static get observedAttributes(){return[e.attributes.VERTICAL]}constructor(){super(),a(this,b,m)}attributeChangedCallback(r,u,i){switch(r){case e.attributes.VERTICAL:this.vertical=n(i);break}}get vertical(){return this.hasAttribute(e.attributes.VERTICAL)}set vertical(r){this.toggleAttribute(e.attributes.VERTICAL,r)}};t=s([v({name:e.elementName})],t);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function C(){l(t)}export{C as d};
