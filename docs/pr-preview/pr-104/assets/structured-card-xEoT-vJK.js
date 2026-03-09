import{r as m,i as y,x as v}from"./iframe-o8AKceW-.js";import{m as u,n as g,t as b}from"./constants-Coqop7Iu.js";import{n as w}from"./query-assigned-nodes-cwDSNLIu.js";import{e as f}from"./class-map-Ca8S5n4h.js";import{C as _,a as C,h as i}from"./content-scaffold-CSNp5CPs.js";import{d as x}from"./index-BdQappt_.js";function T(){u(C,_)}const $=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;--_forge-structured-card-body-height: var(--forge-structured-card-body-height, auto)}.header-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";border-bottom:1px solid var(--forge-theme-outline, #e0e0e0);min-height:48px}forge-content-scaffold{--forge-content-scaffold-body-height: var(--_forge-structured-card-body-height)}forge-content-scaffold.with-table{--forge-content-scaffold-body-padding-inline: 0;--forge-content-scaffold-gap: 0}.container{--forge-card-padding: 0;--forge-card-gap: 0;--forge-card-shape: 12px}.title-container{display:flex;flex-direction:row;align-items:center;gap:0;grid-area:start}.title-with-margin{margin-inline-start:var(--forge-spacing-medium, 16px)}.actions-container{grid-area:end}::slotted([slot=title]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading3-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading3-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-font-size-scale, 1.125)));font-weight:var(--forge-typography-heading3-font-weight, 500);line-height:var(--forge-typography-heading3-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-heading3-letter-spacing, .0083333333em);text-transform:var(--forge-typography-heading3-text-transform, inherit);text-decoration:var(--forge-typography-heading3-text-decoration, inherit)}.footer-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";padding-inline:var(--forge-spacing-small, 12px);padding-block-end:var(--forge-spacing-small, 12px)}.footer-container.with-table{padding-block-end:0}.footer-start-container{grid-area:start}.footer-actions{display:flex;flex-direction:row;align-items:center;gap:16px;grid-area:end}::slotted([slot=body]){height:var(--_forge-structured-card-body-height)}`;var S=Object.defineProperty,N=Object.getOwnPropertyDescriptor,h=e=>{throw TypeError(e)},s=(e,t,o,n)=>{for(var a=n>1?void 0:n?N(t,o):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(a=(n?d(t,o,a):d(a))||a);return n&&a&&S(t,o,a),a},z=(e,t,o)=>t.has(e)||h("Cannot "+o),L=(e,t,o)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),O=(e,t,o)=>(z(e,t,"access private method"),o),c,p;const P="forge-structured-card";let r=class extends y{constructor(){super(...arguments),L(this,c),this.headingLevel=2,this.withTable=!1}render(){return v`
      <forge-card class="container">
        <forge-content-scaffold
          @slotchange=${O(this,c,p)}
          full-width-header
          full-width-footer
          class=${f({"with-table":this.withTable})}>
          <div slot="header" class="header-container" ${i()}>
            <div class="title-container">
              <slot name="before-title" slot="before-header-start"></slot>
              <div
                role="heading"
                aria-level=${this.headingLevel}
                id="title"
                slot="header-start"
                class=${f({"title-with-margin":this._beforeTitleNodes.length===0})}>
                <slot name="title"></slot>
              </div>
            </div>

            <div class="actions-container" ${i()}>
              <slot name="header-actions" slot="header-end"></slot>
            </div>
          </div>

          <slot name="body" slot="body"></slot>
          <div
            class=${f({"footer-container":!0,"with-table":this.withTable})}
            slot="footer"
            ${i()}>
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
    `}};c=new WeakSet;p=function(e){e.target.name==="before-title"&&this.requestUpdate()};x();T();r.styles=m($);s([g({attribute:"heading-level",type:Number})],r.prototype,"headingLevel",2);s([g({attribute:"with-table",type:Boolean})],r.prototype,"withTable",2);s([w({slot:"before-title",flatten:!0})],r.prototype,"_beforeTitleNodes",2);r=s([b(P)],r);
