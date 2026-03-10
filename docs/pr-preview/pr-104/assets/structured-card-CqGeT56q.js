import{r as u,i as _,x as w}from"./iframe-B3gZ3oFh.js";import{m as C,n as m,t as b}from"./constants-DKJckIIi.js";import{n as x}from"./query-assigned-nodes-cwDSNLIu.js";import{e as S}from"./class-map-CNSrAlmG.js";import{C as W,a as $,h as s}from"./content-scaffold-D49A_AiZ.js";import{d as N}from"./index-_sBZfrH2.js";function T(){C($,W)}const z=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;--_structured-card-body-height: var(--forge-structured-card-body-height, auto)}:host(:state(full-width)) forge-content-scaffold{--forge-content-scaffold-body-padding-inline: 0;--forge-content-scaffold-gap: 0}:host(:state(full-width)) .footer-container{padding-block-end:0}.header-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";border-bottom:1px solid var(--forge-theme-outline, #e0e0e0);min-height:48px}forge-content-scaffold{--forge-content-scaffold-body-height: var(--_structured-card-body-height)}.container{--forge-card-padding: 0;--forge-card-gap: 0}.title-container{display:flex;flex-direction:row;align-items:center;gap:0;grid-area:start}.title-with-margin{margin-inline-start:var(--forge-spacing-medium, 16px)}.actions-container{grid-area:end}::slotted([slot=title]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading3-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading3-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-font-size-scale, 1.125)));font-weight:var(--forge-typography-heading3-font-weight, 500);line-height:var(--forge-typography-heading3-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-heading3-letter-spacing, .0083333333em);text-transform:var(--forge-typography-heading3-text-transform, inherit);text-decoration:var(--forge-typography-heading3-text-decoration, inherit)}.footer-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";padding-inline:var(--forge-spacing-small, 12px);padding-block-end:var(--forge-spacing-small, 12px)}.footer-start-container{grid-area:start}.footer-actions{display:flex;flex-direction:row;align-items:center;gap:16px;grid-area:end}::slotted([slot=body]){height:var(--_structured-card-body-height)}`;var L=Object.defineProperty,O=Object.getOwnPropertyDescriptor,v=t=>{throw TypeError(t)},l=(t,e,a,i)=>{for(var o=i>1?void 0:i?O(e,a):e,d=t.length-1,f;d>=0;d--)(f=t[d])&&(o=(i?f(e,a,o):f(o))||o);return i&&o&&L(e,a,o),o},h=(t,e,a)=>e.has(t)||v("Cannot "+a),g=(t,e,a)=>(h(t,e,"read from private field"),a?a.call(t):e.get(t)),p=(t,e,a)=>e.has(t)?v("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),P=(t,e,a,i)=>(h(t,e,"write to private field"),e.set(t,a),a),k=(t,e,a)=>(h(t,e,"access private method"),a),n,c,y;const D="forge-structured-card";let r=class extends _{constructor(){super(),p(this,c),p(this,n),this.headingLevel=2,this.fullWidth=!1,P(this,n,this.attachInternals())}willUpdate(t){t.has("fullWidth")&&(this.fullWidth?g(this,n).states.add("full-width"):g(this,n).states.delete("full-width"))}render(){return w`
      <forge-card class="container">
        <forge-content-scaffold @slotchange=${k(this,c,y)} full-width-header full-width-footer>
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
    `}};n=new WeakMap;c=new WeakSet;y=function(t){t.target.name==="before-title"&&this.requestUpdate()};N();T();r.styles=u(z);l([m({attribute:"heading-level",type:Number})],r.prototype,"headingLevel",2);l([m({attribute:"full-width",type:Boolean})],r.prototype,"fullWidth",2);l([x({slot:"before-title",flatten:!0})],r.prototype,"_beforeTitleNodes",2);r=l([b(D)],r);
