import{r as A,i as x,x as r}from"./iframe-DzMABE0J.js";import{m as N,t as T}from"./constants-v1LuvkTS.js";import{n as _}from"./with-default-aria-95UvAwgt.js";import{n as u,a as C}from"./when-DfnyT8j1.js";import{o as P}from"./style-map-B5WkjWt2.js";import{C as z,a as W}from"./content-scaffold-D7DbRIMc.js";import{d as L}from"./index-BxmYG8Fc.js";function M(){N(W,z)}const O=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;--_forge-structured-card-body-height: var(--forge-structured-card-body-height, auto)}forge-content-scaffold{--forge-content-scaffold-body-height: var(--_forge-structured-card-body-height)}.container{--forge-card-padding: 0;--forge-card-shape: 12px}.footer-actions{display:flex;flex-direction:row;align-items:center;gap:16px}::slotted([slot=title]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading3-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading3-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-font-size-scale, 1.125)));font-weight:var(--forge-typography-heading3-font-weight, 500);line-height:var(--forge-typography-heading3-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-heading3-letter-spacing, .0083333333em);text-transform:var(--forge-typography-heading3-text-transform, inherit);text-decoration:var(--forge-typography-heading3-text-decoration, inherit)}::slotted([slot=body]){height:var(--_forge-structured-card-body-height)}`;var k=Object.defineProperty,D=Object.getOwnPropertyDescriptor,b=t=>{throw TypeError(t)},l=(t,e,o,c)=>{for(var i=c>1?void 0:c?D(e,o):e,y=t.length-1,m;y>=0;y--)(m=t[y])&&(i=(c?m(e,o,i):m(i))||i);return c&&i&&k(e,o,i),i},S=(t,e,o)=>e.has(t)||b("Cannot "+o),a=(t,e,o)=>(S(t,e,"read from private field"),o?o.call(t):e.get(t)),f=(t,e,o)=>e.has(t)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),v=(t,e,o)=>(S(t,e,"access private method"),o),d,g,p,s,w,$,h;const E="forge-structured-card";let n=class extends x{constructor(){super(...arguments),f(this,s),this.headingLevel=2,this.withTable=!1,f(this,d,r`<slot name="title" @slotchange=${v(this,s,h)}></slot>`),f(this,g,r`<slot
    name="footer-secondary-action"
    @slotchange=${v(this,s,h)}></slot>`),f(this,p,r`<slot
    name="footer-primary-action"
    @slotchange=${v(this,s,h)}></slot>`)}render(){return r` <forge-card class="container">
      <forge-content-scaffold
        style=${P({"--forge-content-scaffold-body-padding":this.withTable?"0":void 0})}>
        <slot name="before-title" slot="before-header-start"></slot>
        ${a(this,s,w)}
        <slot name="header-actions" slot="header-end"></slot>
        <slot name="body" slot="body"></slot>
        <slot name="footer-start" slot="footer-start"></slot>
        ${a(this,s,$)}
      </forge-content-scaffold>
    </forge-card>`}};d=new WeakMap;g=new WeakMap;p=new WeakMap;s=new WeakSet;w=function(){const t=this._titleNodes.length>0;return C(t,()=>r`
        <div role="heading" aria-level=${this.headingLevel} id="title" class="title" slot="header-start">
          ${a(this,d)}
        </div>
      `,()=>r`${a(this,d)}`)};$=function(){const t=this._footerSecondaryActionNodes.length>0,e=this._footerPrimaryActionNodes.length>0;return C(t||e,()=>r`
        <div class="footer-actions" slot="footer-end">
          ${a(this,g)} ${a(this,p)}
        </div>
      `,()=>r` ${a(this,g)} ${a(this,p)} `)};h=function(t){const e=t.target.name;["title","footer-secondary-action","footer-primary-action"].includes(e)&&this.requestUpdate()};L();M();n.styles=A(O);l([_({attribute:"heading-level",type:Number})],n.prototype,"headingLevel",2);l([_({attribute:"with-table",type:Boolean})],n.prototype,"withTable",2);l([u({slot:"title",flatten:!0})],n.prototype,"_titleNodes",2);l([u({slot:"footer-secondary-action",flatten:!0})],n.prototype,"_footerSecondaryActionNodes",2);l([u({slot:"footer-primary-action",flatten:!0})],n.prototype,"_footerPrimaryActionNodes",2);n=l([T(E)],n);
