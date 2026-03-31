import{r as u,i as b,x as _}from"./iframe-BxKkWUAw.js";import{m as C,t as x}from"./constants-Bb7Ji_uf.js";import{s as y}from"./with-default-aria-DBafLuCR.js";import{n as w}from"./when-DfnyT8j1.js";import{e as S}from"./class-map-BiMib_8G.js";import{C as $,a as N,h as s}from"./content-scaffold-BwTR8TXa.js";import{d as T}from"./index-6LNK74y6.js";function z(){C(N,$)}const L=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;--_structured-card-body-height: var(--forge-structured-card-body-height, auto)}:host(:state(body-spacing-none)) forge-content-scaffold{--forge-content-scaffold-body-padding-inline: 0;--forge-content-scaffold-gap: 0}:host(:state(body-spacing-none)) .footer-container{padding-block-end:0}.header-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";border-bottom:1px solid var(--forge-theme-outline, #e0e0e0);min-height:48px}forge-content-scaffold{--forge-content-scaffold-body-height: var(--_structured-card-body-height)}.container{--forge-card-padding: 0;--forge-card-gap: 0}.title-container{display:flex;flex-direction:row;align-items:center;gap:0;grid-area:start}.title-with-margin{margin-inline-start:var(--forge-spacing-medium, 16px)}.actions-container{grid-area:end}::slotted([slot=title]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading3-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading3-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-font-size-scale, 1.125)));font-weight:var(--forge-typography-heading3-font-weight, 500);line-height:var(--forge-typography-heading3-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-heading3-letter-spacing, .0083333333em);text-transform:var(--forge-typography-heading3-text-transform, inherit);text-decoration:var(--forge-typography-heading3-text-decoration, inherit)}.footer-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";padding-inline:var(--forge-spacing-small, 12px);padding-block-end:var(--forge-spacing-small, 12px)}.footer-start-container{grid-area:start}.footer-actions{display:flex;flex-direction:row;align-items:center;gap:16px;grid-area:end}::slotted([slot=body]){height:var(--_structured-card-body-height)}`;var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,m=e=>{throw TypeError(e)},d=(e,t,a,n)=>{for(var o=n>1?void 0:n?P(t,a):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(o=(n?c(t,a,o):c(o))||o);return n&&o&&O(t,a,o),o},f=(e,t,a)=>t.has(e)||m("Cannot "+a),p=(e,t,a)=>(f(e,t,"read from private field"),a?a.call(e):t.get(e)),h=(e,t,a)=>t.has(e)?m("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),W=(e,t,a,n)=>(f(e,t,"write to private field"),t.set(e,a),a),k=(e,t,a)=>(f(e,t,"access private method"),a),i,g,v;const D="forge-structured-card";let r=class extends b{constructor(){super(),h(this,g),h(this,i),this.headingLevel=2,this.bodySpacing="default",W(this,i,this.attachInternals())}willUpdate(e){e.has("bodySpacing")&&(this.bodySpacing==="none"?p(this,i).states.add("body-spacing-none"):p(this,i).states.delete("body-spacing-none"))}render(){return _`
      <forge-card class="container">
        <forge-content-scaffold @slotchange=${k(this,g,v)}>
          <div slot="header" class="header-container" ${s()}>
            <div class="title-container">
              <slot name="before-title" slot="before-header-start"></slot>
              <div
                role="heading"
                aria-level=${this.headingLevel}
                id="title"
                slot="header-start"
                class=${S({"title-with-margin":this._beforeTitleNodes.length===0})}>
                <slot name="title"></slot>
              </div>
            </div>
            <div class="actions-container" ${s()}>
              <slot name="header-actions" slot="header-end"></slot>
            </div>
          </div>
          <slot name="body" slot="body"></slot>
          <div class="footer-container" slot="footer" ${s()}>
            <div class="footer-start-container">
              <slot name="footer-start"></slot>
            </div>
            <div class="footer-actions" ${s()}>
              <slot name="footer-secondary-action"></slot>
              <slot name="footer-primary-action"></slot>
            </div>
          </div>
        </forge-content-scaffold>
      </forge-card>
    `}};i=new WeakMap;g=new WeakSet;v=function(e){e.target.name==="before-title"&&this.requestUpdate()};T();z();r.styles=u(L);d([y({attribute:"heading-level",type:Number})],r.prototype,"headingLevel",2);d([y({attribute:"body-spacing"})],r.prototype,"bodySpacing",2);d([w({slot:"before-title",flatten:!0})],r.prototype,"_beforeTitleNodes",2);r=d([x(D)],r);
