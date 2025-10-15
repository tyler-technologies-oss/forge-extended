import{_ as o,c as d,d as a}from"./tslib.es6-CxAMhKEV.js";import{c as s}from"./iframe-BQrsiEyh.js";import{c as v,B as l}from"./base-adapter-B4DuGbrf.js";import{C as n}from"./icon-registry-DH_mpcNN.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const c=`${n}divider`,h={VERTICAL:"vertical"},e={elementName:c,attributes:h};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const m='<template><div class="forge-divider" part="root"></div></template>',b=":host{--_divider-margin:var(--forge-divider-margin, 0)}:host{display:block;margin:var(--_divider-margin)}:host([hidden]){display:none}.forge-divider{--_divider-color:var(--forge-divider-color, var(--forge-theme-outline, #e0e0e0));--_divider-width:var(--forge-divider-width, var(--forge-border-thin, 1px));--_divider-border-style:var(--forge-divider-border-style, solid)}.forge-divider{border:none;border-bottom-color:var(--_divider-color);border-bottom-width:var(--_divider-width);border-bottom-style:var(--_divider-border-style);height:0}:host([vertical]){display:inline-block;height:100%}:host([vertical]) .forge-divider{border:none;border-right-color:var(--_divider-color);border-right-width:var(--_divider-width);border-right-style:var(--_divider-border-style);height:100%;width:0}";let t=class extends l{static get observedAttributes(){return[e.attributes.VERTICAL]}constructor(){super(),d(this,m,b)}attributeChangedCallback(r,p,i){switch(r){case e.attributes.VERTICAL:this.vertical=s(i);break}}get vertical(){return this.hasAttribute(e.attributes.VERTICAL)}set vertical(r){this.toggleAttribute(e.attributes.VERTICAL,r)}};t=o([v({name:e.elementName})],t);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function y(){a(t)}export{y as d};
