import{r as v,i as u,x as _}from"./iframe-Dl9rccmp.js";import{t as b}from"./constants-DhgAIoth.js";import{u as h,x}from"./with-default-aria-Dz8WdObG.js";import{n as w}from"./when-DfnyT8j1.js";import{e as C}from"./class-map-h91WH6Qb.js";import{h as n}from"./content-scaffold-C2mxD0hM.js";import{d as S}from"./index-5ipHNH6c.js";const $=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;--_structured-card-body-height: var(--forge-structured-card-body-height, auto)}:host(:state(body-spacing-none)) forge-content-scaffold{--forge-content-scaffold-body-padding-inline: 0;--forge-content-scaffold-footer-full-padding: 0;--forge-content-scaffold-body-padding-block: 0}:host(:state(body-spacing-none)) .footer-container{padding-block-end:0}.header-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . actions";min-height:48px}forge-content-scaffold{--forge-content-scaffold-body-height: var(--_structured-card-body-height)}.container{--forge-card-padding: 0;--forge-card-gap: 0;height:100%}.title-container{display:flex;flex-direction:row;align-items:center;gap:0;grid-area:start}.title-with-margin{margin-inline-start:var(--forge-spacing-medium, 16px)}::slotted([slot=title]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading3-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading3-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-font-size-scale, 1.125)));font-weight:var(--forge-typography-heading3-font-weight, 500);line-height:var(--forge-typography-heading3-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-heading3-letter-spacing, .0083333333em);text-transform:var(--forge-typography-heading3-text-transform, inherit);text-decoration:var(--forge-typography-heading3-text-decoration, inherit)}.actions-container{display:flex;flex-direction:row;align-items:center;gap:0;grid-area:actions}::slotted([slot=header-actions]){margin-inline-end:var(--forge-spacing-medium, 16px)}::slotted([slot=body]){height:var(--_structured-card-body-height)}.footer-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end"}.footer-start-container{grid-area:start}.footer-actions{display:flex;flex-direction:row;align-items:center;gap:var(--forge-spacing-medium, 16px);grid-area:end}`;var z=Object.defineProperty,T=Object.getOwnPropertyDescriptor,y=t=>{throw TypeError(t)},d=(t,e,a,i)=>{for(var o=i>1?void 0:i?T(e,a):e,l=t.length-1,c;l>=0;l--)(c=t[l])&&(o=(i?c(e,a,o):c(o))||o);return i&&o&&z(e,a,o),o},f=(t,e,a)=>e.has(t)||y("Cannot "+a),L=(t,e,a)=>(f(t,e,"read from private field"),a?a.call(t):e.get(t)),p=(t,e,a)=>e.has(t)?y("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),N=(t,e,a,i)=>(f(t,e,"write to private field"),e.set(t,a),a),O=(t,e,a)=>(f(t,e,"access private method"),a),s,g,m;const P="forge-structured-card";let r=class extends u{constructor(){super(),p(this,g),p(this,s),this.headingLevel=2,this.bodySpacing="default",N(this,s,this.attachInternals())}willUpdate(t){t.has("bodySpacing")&&x(L(this,s),"body-spacing-none",this.bodySpacing==="none")}render(){return _`
      <forge-card class="container">
        <forge-content-scaffold>
          <div slot="header" class="header-container" ${n()}>
            <div class="title-container">
              <slot name="before-title" @slotchange=${O(this,g,m)}></slot>
              <div
                role="heading"
                aria-level=${this.headingLevel}
                id="title"
                class=${C({"title-with-margin":this._beforeTitleNodes.length===0})}>
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
    `}};s=new WeakMap;g=new WeakSet;m=function(){this.requestUpdate()};S();r.styles=v($);d([h({attribute:"heading-level",type:Number})],r.prototype,"headingLevel",2);d([h({attribute:"body-spacing"})],r.prototype,"bodySpacing",2);d([w({slot:"before-title",flatten:!0})],r.prototype,"_beforeTitleNodes",2);r=d([b(P)],r);
