import{r as g,i as c,x as h}from"./iframe-Bmpo7mK4.js";import{m as p,n as f,t as m}from"./constants-DWkFozGy.js";import{o as y}from"./style-map-F9UlsvX2.js";import{C as v,a as u,h as a}from"./content-scaffold-CeiNuTct.js";import{d as b}from"./index-BJPpmeSU.js";function x(){p(u,v)}const C=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;--_forge-structured-card-body-height: var(--forge-structured-card-body-height, auto)}.header-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";border-bottom:1px solid var(--forge-theme-outline, #e0e0e0);min-height:48px}forge-content-scaffold{--forge-content-scaffold-body-height: var(--_forge-structured-card-body-height)}.container{--forge-card-padding: 0;--forge-card-shape: 12px}.title-container{display:flex;flex-direction:row;align-items:center;gap:0;grid-area:start}.actions-container{grid-area:end}::slotted([slot=title]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading3-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading3-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-font-size-scale, 1.125)));font-weight:var(--forge-typography-heading3-font-weight, 500);line-height:var(--forge-typography-heading3-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-heading3-letter-spacing, .0083333333em);text-transform:var(--forge-typography-heading3-text-transform, inherit);text-decoration:var(--forge-typography-heading3-text-decoration, inherit)}.footer-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";padding-inline:var(--forge-spacing-medium, 16px);min-height:56px}.footer-start-container{grid-area:start}.footer-actions{display:flex;flex-direction:row;align-items:center;gap:16px;grid-area:end}::slotted([slot=body]){height:var(--_forge-structured-card-body-height)}`;var w=Object.defineProperty,_=Object.getOwnPropertyDescriptor,d=(l,o,i,r)=>{for(var e=r>1?void 0:r?_(o,i):o,n=l.length-1,s;n>=0;n--)(s=l[n])&&(e=(r?s(o,i,e):s(e))||e);return r&&e&&w(o,i,e),e};const T="forge-structured-card";let t=class extends c{constructor(){super(...arguments),this.headingLevel=2,this.withTable=!1}render(){return h`
      <forge-card class="container">
        <forge-content-scaffold
          full-width-header
          full-width-footer
          style=${y({"--forge-content-scaffold-body-padding":this.withTable?"0":void 0})}>
          <div slot="header" class="header-container" ${a()}>
            <div class="title-container">
              <slot name="before-title" slot="before-header-start"></slot>
              <div role="heading" aria-level=${this.headingLevel} id="title" slot="header-start">
                <slot name="title"></slot>
              </div>
            </div>

            <div class="actions-container" ${a()}>
              <slot name="header-actions" slot="header-end"></slot>
            </div>
          </div>

          <slot name="body" slot="body"></slot>
          <div class="footer-container" slot="footer" ${a()}>
            <div class="footer-start-container">
              <slot name="footer-start"></slot>
            </div>
            <div class="footer-actions" ${a()}>
              <slot name="footer-secondary-action"></slot>
              <slot name="footer-primary-action"></slot>
            </div>
          </div>
        </forge-content-scaffold>
      </forge-card>
    `}};b();x();t.styles=g(C);d([f({attribute:"heading-level",type:Number})],t.prototype,"headingLevel",2);d([f({attribute:"with-table",type:Boolean})],t.prototype,"withTable",2);t=d([m(T)],t);
