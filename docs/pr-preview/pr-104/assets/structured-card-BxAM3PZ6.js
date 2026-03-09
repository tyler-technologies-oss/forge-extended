import{r as S,i as w,x as s}from"./iframe-4iFiJTyg.js";import{m as A,t as x}from"./constants-Das5twfs.js";import{n as v}from"./with-default-aria-D2csPgel.js";import{n as u,a as $}from"./when-DfnyT8j1.js";import{o as T}from"./style-map-UEQKXORL.js";import{C as N,a as P}from"./content-scaffold-CFKk3rrs.js";import{d as z}from"./index-C4Q9D1PT.js";import{d as L}from"./index-BkNzMWyx.js";function O(){A(P,N)}const W=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;--_forge-structured-card-body-height: var(--forge-structured-card-body-height, auto)}forge-content-scaffold{--forge-content-scaffold-body-height: var(--_forge-structured-card-body-height)}.container{--forge-card-padding: 0;--forge-card-shape: 12px}.footer-actions{display:flex;flex-direction:row;align-items:center;gap:16px}::slotted([slot=title]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading3-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading3-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-font-size-scale, 1.125)));font-weight:var(--forge-typography-heading3-font-weight, 500);line-height:var(--forge-typography-heading3-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-heading3-letter-spacing, .0083333333em);text-transform:var(--forge-typography-heading3-text-transform, inherit);text-decoration:var(--forge-typography-heading3-text-decoration, inherit)}::slotted([slot=body]){height:var(--_forge-structured-card-body-height)}`;var D=Object.defineProperty,M=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},f=(t,e,o,c)=>{for(var r=c>1?void 0:c?M(e,o):e,h=t.length-1,g;h>=0;h--)(g=t[h])&&(r=(c?g(e,o,r):g(r))||r);return c&&r&&D(e,o,r),r},C=(t,e,o)=>e.has(t)||_("Cannot "+o),n=(t,e,o)=>(C(t,e,"read from private field"),o?o.call(t):e.get(t)),p=(t,e,o)=>e.has(t)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),m=(t,e,o)=>(C(t,e,"access private method"),o),d,l,i,b,y;const k="forge-structured-card";let a=class extends w{constructor(){super(...arguments),p(this,i),this.headingLevel=2,this.withTable=!1,p(this,d,s`<slot
    name="footer-secondary-action"
    @slotchange=${m(this,i,y)}></slot>`),p(this,l,s`<slot
    name="footer-primary-action"
    @slotchange=${m(this,i,y)}></slot>`)}render(){return s` <forge-card class="container">
      <forge-content-scaffold
        style=${T({"--forge-content-scaffold-body-padding":this.withTable?"0":void 0})}>
        <slot name="before-title" slot="before-header-start"></slot>
        <div role="heading" aria-level=${this.headingLevel} id="title" class="title" slot="header-start">
          <slot name="title"></slot>
        </div>
        <slot name="header-actions" slot="header-end"></slot>
        <slot name="body" slot="body"></slot>
        <slot name="footer-start" slot="footer-start"></slot>
        ${n(this,i,b)}
      </forge-content-scaffold>
    </forge-card>`}};d=new WeakMap;l=new WeakMap;i=new WeakSet;b=function(){const t=this._footerSecondaryActionNodes.length>0,e=this._footerPrimaryActionNodes.length>0;return $(t||e,()=>s`
        <div class="footer-actions" slot="footer-end">
          ${n(this,d)} ${n(this,l)}
        </div>
      `,()=>s` ${n(this,d)} ${n(this,l)} `)};y=function(t){const e=t.target.name;["footer-secondary-action","footer-primary-action"].includes(e)&&this.requestUpdate()};z();L();O();a.styles=S(W);f([v({attribute:"heading-level",type:Number})],a.prototype,"headingLevel",2);f([v({attribute:"with-table",type:Boolean})],a.prototype,"withTable",2);f([u({slot:"footer-secondary-action",flatten:!0})],a.prototype,"_footerSecondaryActionNodes",2);f([u({slot:"footer-primary-action",flatten:!0})],a.prototype,"_footerPrimaryActionNodes",2);a=f([x(k)],a);
