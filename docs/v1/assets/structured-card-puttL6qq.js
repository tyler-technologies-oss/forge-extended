var y=e=>{throw TypeError(e)};var g=(e,t,o)=>t.has(e)||y("Cannot "+o);var m=(e,t,o)=>(g(e,t,"read from private field"),o?o.call(e):t.get(e)),c=(e,t,o)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),v=(e,t,o,l)=>(g(e,t,"write to private field"),l?l.call(e,o):t.set(e,o),o),b=(e,t,o)=>(g(e,t,"access private method"),o);import{i as w,r as _,x as $}from"./iframe-CSr27Gi9.js";import{t as z,n as u}from"./utils-CaDkb-CY.js";import{n as S}from"./query-assigned-nodes-cwDSNLIu.js";import{e as T}from"./class-map-B6tseOWg.js";import{t as k}from"./component-utils-DDaW1mI9.js";import"./content-scaffold-NcH_mt3m.js";import{h as n}from"./lit-utils-BDYppvBO.js";import{d as L}from"./index-S8W-aZjQ.js";const N=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;--_structured-card-body-height: var(--forge-structured-card-body-height, auto)}:host(:state(body-spacing-none)) forge-content-scaffold{--forge-content-scaffold-body-padding-inline: 0;--forge-content-scaffold-footer-full-padding: var(--forge-spacing-small, 12px) var(--forge-spacing-medium, 16px);--forge-content-scaffold-body-padding-block: 0}:host(:state(body-spacing-none)) .footer-container{padding-block-end:0}.header-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . actions";min-height:48px}forge-content-scaffold{--forge-content-scaffold-body-height: var(--_structured-card-body-height)}.container{--forge-card-padding: 0;--forge-card-gap: 0;height:100%}.title-container{display:flex;flex-direction:row;align-items:center;gap:0;grid-area:start}.title-with-margin{margin-inline-start:var(--forge-spacing-medium, 16px)}::slotted([slot=title]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading3-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading3-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-font-size-scale, 1.125)));font-weight:var(--forge-typography-heading3-font-weight, 500);line-height:var(--forge-typography-heading3-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-heading3-letter-spacing, .0083333333em);text-transform:var(--forge-typography-heading3-text-transform, inherit);text-decoration:var(--forge-typography-heading3-text-decoration, inherit)}.actions-container{display:flex;flex-direction:row;align-items:center;gap:0;grid-area:actions}::slotted([slot=header-actions]){margin-inline-end:var(--forge-spacing-medium, 16px)}::slotted([slot=body]){height:var(--_structured-card-body-height)}.footer-container{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;column-gap:var(--forge-spacing-medium, 16px)}.footer-start-container{flex:1;flex-basis:content;justify-content:flex-end}.footer-actions{display:flex;flex-direction:row;align-items:center;gap:var(--forge-spacing-medium, 16px)}`;var j=Object.defineProperty,f=(e,t,o,l)=>{for(var a=void 0,d=e.length-1,h;d>=0;d--)(h=e[d])&&(a=h(t,o,a)||a);return a&&j(t,o,a),a};const C="forge-structured-card";var i,s,x;const p=class p extends w{constructor(){super();c(this,s);c(this,i);this.headingLevel=2,this.bodySpacing="default",v(this,i,this.attachInternals())}willUpdate(o){o.has("bodySpacing")&&z(m(this,i),"body-spacing-none",this.bodySpacing==="none")}render(){return $`
      <forge-card class="container">
        <forge-content-scaffold>
          <div slot="header" class="header-container" ${n()}>
            <div class="title-container">
              <slot name="before-title" @slotchange=${b(this,s,x)}></slot>
              <div
                role="heading"
                aria-level=${this.headingLevel}
                id="title"
                class=${T({"title-with-margin":this._beforeTitleNodes.length===0})}>
                <slot name="title"></slot>
              </div>
            </div>
            <div class="actions-container" ${n()}>
              <slot name="header-actions"></slot>
              <slot name="after-header-actions"></slot>
            </div>
          </div>
          <slot name="body" slot="body"></slot>
          <div class="footer-container" slot="footer" ${n()}>
            <div class="footer-start-container">
              <slot name="footer-start"></slot>
            </div>
            <div class="footer-actions" ${n()}>
              <slot name="footer-secondary-action"></slot>
              <slot name="footer-primary-action"></slot>
            </div>
          </div>
        </forge-content-scaffold>
      </forge-card>
    `}};i=new WeakMap,s=new WeakSet,x=function(){this.requestUpdate()},L(),p.styles=_(N);let r=p;f([u({attribute:"heading-level",type:Number})],r.prototype,"headingLevel");f([u({attribute:"body-spacing"})],r.prototype,"bodySpacing");f([S({slot:"before-title",flatten:!0})],r.prototype,"_beforeTitleNodes");k(C,r);
