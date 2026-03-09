import{r as u,i as b,x as _}from"./iframe-C3eZW3rL.js";import{m as w,n as m,t as C}from"./constants-DW0rNuKk.js";import{n as x}from"./query-assigned-nodes-cwDSNLIu.js";import{e as T}from"./class-map-XX9qvObf.js";import{C as S,a as $,h as s}from"./content-scaffold-BIHIHvoc.js";import{d as N}from"./index-BE4hfNLg.js";function z(){w($,S)}const L=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;--_forge-structured-card-body-height: var(--forge-structured-card-body-height, auto)}:host(:state(with-table)) forge-content-scaffold{--forge-content-scaffold-body-padding-inline: 0;--forge-content-scaffold-gap: 0}:host(:state(with-table)) .footer-container{padding-block-end:0}.header-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";border-bottom:1px solid var(--forge-theme-outline, #e0e0e0);min-height:48px}forge-content-scaffold{--forge-content-scaffold-body-height: var(--_forge-structured-card-body-height)}.container{--forge-card-padding: 0;--forge-card-gap: 0;--forge-card-shape: 12px}.title-container{display:flex;flex-direction:row;align-items:center;gap:0;grid-area:start}.title-with-margin{margin-inline-start:var(--forge-spacing-medium, 16px)}.actions-container{grid-area:end}::slotted([slot=title]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading3-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading3-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-font-size-scale, 1.125)));font-weight:var(--forge-typography-heading3-font-weight, 500);line-height:var(--forge-typography-heading3-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-heading3-letter-spacing, .0083333333em);text-transform:var(--forge-typography-heading3-text-transform, inherit);text-decoration:var(--forge-typography-heading3-text-decoration, inherit)}.footer-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";padding-inline:var(--forge-spacing-small, 12px);padding-block-end:var(--forge-spacing-small, 12px)}.footer-start-container{grid-area:start}.footer-actions{display:flex;flex-direction:row;align-items:center;gap:16px;grid-area:end}::slotted([slot=body]){height:var(--_forge-structured-card-body-height)}`;var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,v=e=>{throw TypeError(e)},l=(e,t,a,i)=>{for(var o=i>1?void 0:i?P(t,a):t,d=e.length-1,f;d>=0;d--)(f=e[d])&&(o=(i?f(t,a,o):f(o))||o);return i&&o&&O(t,a,o),o},g=(e,t,a)=>t.has(e)||v("Cannot "+a),h=(e,t,a)=>(g(e,t,"read from private field"),a?a.call(e):t.get(e)),p=(e,t,a)=>t.has(e)?v("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),W=(e,t,a,i)=>(g(e,t,"write to private field"),t.set(e,a),a),k=(e,t,a)=>(g(e,t,"access private method"),a),n,c,y;const D="forge-structured-card";let r=class extends b{constructor(){super(),p(this,c),p(this,n),this.headingLevel=2,this.withTable=!1,W(this,n,this.attachInternals())}willUpdate(e){e.has("withTable")&&(this.withTable?h(this,n).states.add("with-table"):h(this,n).states.delete("with-table"))}render(){return _`
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
                class=${T({"title-with-margin":this._beforeTitleNodes.length===0})}>
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
    `}};n=new WeakMap;c=new WeakSet;y=function(e){e.target.name==="before-title"&&this.requestUpdate()};N();z();r.styles=u(L);l([m({attribute:"heading-level",type:Number})],r.prototype,"headingLevel",2);l([m({attribute:"with-table",type:Boolean})],r.prototype,"withTable",2);l([x({slot:"before-title",flatten:!0})],r.prototype,"_beforeTitleNodes",2);r=l([C(D)],r);
