import{C as o,B as d,a,_ as s,c as v}from"./constants-BhXE-oDH.js";import{c as l}from"./iframe-BHE_MK2N.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const n=`${o}divider`,c={VERTICAL:"vertical"},e={elementName:n,attributes:c};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const h='<template><div class="forge-divider" part="root"></div></template>',b=":host{--_divider-margin:var(--forge-divider-margin, 0)}:host{display:block;margin:var(--_divider-margin)}:host([hidden]){display:none}.forge-divider{--_divider-color:var(--forge-divider-color, var(--forge-theme-outline, #e0e0e0));--_divider-width:var(--forge-divider-width, var(--forge-border-thin, 1px));--_divider-border-style:var(--forge-divider-border-style, solid)}.forge-divider{border:none;border-bottom-color:var(--_divider-color);border-bottom-width:var(--_divider-width);border-bottom-style:var(--_divider-border-style);height:0}:host([vertical]){display:inline-block;height:100%}:host([vertical]) .forge-divider{border:none;border-right-color:var(--_divider-color);border-right-width:var(--_divider-width);border-right-style:var(--_divider-border-style);height:100%;width:0}";let t=class extends d{static get observedAttributes(){return[e.attributes.VERTICAL]}constructor(){super(),a(this,h,b)}attributeChangedCallback(r,g,i){switch(r){case e.attributes.VERTICAL:this.vertical=l(i);break}}get vertical(){return this.hasAttribute(e.attributes.VERTICAL)}set vertical(r){this.toggleAttribute(e.attributes.VERTICAL,r)}};t=s([v({name:e.elementName})],t);export{t as D};
