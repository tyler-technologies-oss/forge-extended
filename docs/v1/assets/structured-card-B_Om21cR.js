import{r as v,i as u,x as _}from"./iframe-jIu5SHun.js";import{t as b}from"./constants-BCDXA3X6.js";import{B as h,O as x}from"./with-default-aria-CAxpHz7d.js";import{n as w}from"./query-assigned-nodes-cwDSNLIu.js";import{e as C}from"./class-map-C67lmCmz.js";import"./content-scaffold-CljPqIQ1.js";import{h as i}from"./lit-utils-Bk4gblj4.js";import{d as S}from"./index-DvCjSoQd.js";const $=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;--_structured-card-body-height: var(--forge-structured-card-body-height, auto)}:host(:state(body-spacing-none)) forge-content-scaffold{--forge-content-scaffold-body-padding-inline: 0;--forge-content-scaffold-footer-full-padding: var(--forge-spacing-small, 12px) var(--forge-spacing-medium, 16px);--forge-content-scaffold-body-padding-block: 0}:host(:state(body-spacing-none)) .footer-container{padding-block-end:0}.header-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . actions";min-height:48px}forge-content-scaffold{--forge-content-scaffold-body-height: var(--_structured-card-body-height)}.container{--forge-card-padding: 0;--forge-card-gap: 0;height:100%}.title-container{display:flex;flex-direction:row;align-items:center;gap:0;grid-area:start}.title-with-margin{margin-inline-start:var(--forge-spacing-medium, 16px)}::slotted([slot=title]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading3-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading3-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-font-size-scale, 1.125)));font-weight:var(--forge-typography-heading3-font-weight, 500);line-height:var(--forge-typography-heading3-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-heading3-letter-spacing, .0083333333em);text-transform:var(--forge-typography-heading3-text-transform, inherit);text-decoration:var(--forge-typography-heading3-text-decoration, inherit)}.actions-container{display:flex;flex-direction:row;align-items:center;gap:0;grid-area:actions}::slotted([slot=header-actions]){margin-inline-end:var(--forge-spacing-medium, 16px)}::slotted([slot=body]){height:var(--_structured-card-body-height)}.footer-container{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;column-gap:var(--forge-spacing-medium, 16px)}.footer-start-container{flex:1;flex-basis:content;justify-content:flex-end}.footer-actions{display:flex;flex-direction:row;align-items:center;gap:var(--forge-spacing-medium, 16px)}`;var z=Object.defineProperty,T=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},d=(e,t,o,n)=>{for(var a=n>1?void 0:n?T(t,o):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(a=(n?c(t,o,a):c(a))||a);return n&&a&&z(t,o,a),a},f=(e,t,o)=>t.has(e)||y("Cannot "+o),O=(e,t,o)=>(f(e,t,"read from private field"),o?o.call(e):t.get(e)),p=(e,t,o)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),L=(e,t,o,n)=>(f(e,t,"write to private field"),t.set(e,o),o),N=(e,t,o)=>(f(e,t,"access private method"),o),s,g,m;const P="forge-structured-card";let r=class extends u{constructor(){super(),p(this,g),p(this,s),this.headingLevel=2,this.bodySpacing="default",L(this,s,this.attachInternals())}willUpdate(e){e.has("bodySpacing")&&x(O(this,s),"body-spacing-none",this.bodySpacing==="none")}render(){return _`
      <forge-card class="container">
        <forge-content-scaffold>
          <div slot="header" class="header-container" ${i()}>
            <div class="title-container">
              <slot name="before-title" @slotchange=${N(this,g,m)}></slot>
              <div
                role="heading"
                aria-level=${this.headingLevel}
                id="title"
                class=${C({"title-with-margin":this._beforeTitleNodes.length===0})}>
                <slot name="title"></slot>
              </div>
            </div>
            <div class="actions-container" ${i()}>
              <slot name="header-actions"></slot>
              <slot name="after-header-actions"></slot>
            </div>
          </div>
          <slot name="body" slot="body"></slot>
          <div class="footer-container" slot="footer" ${i()}>
            <div class="footer-start-container">
              <slot name="footer-start"></slot>
            </div>
            <div class="footer-actions" ${i()}>
              <slot name="footer-secondary-action"></slot>
              <slot name="footer-primary-action"></slot>
            </div>
          </div>
        </forge-content-scaffold>
      </forge-card>
    `}};s=new WeakMap;g=new WeakSet;m=function(){this.requestUpdate()};S();r.styles=v($);d([h({attribute:"heading-level",type:Number})],r.prototype,"headingLevel",2);d([h({attribute:"body-spacing"})],r.prototype,"bodySpacing",2);d([w({slot:"before-title",flatten:!0})],r.prototype,"_beforeTitleNodes",2);r=d([b(P)],r);
