import{r as g,i as c,x as h}from"./iframe-DB7khuar.js";import{m as p,n as f,t as y}from"./constants-BMWnaSmQ.js";import{o as m}from"./style-map-BvuDHFBf.js";import{C as v,a as u,h as l}from"./content-scaffold-yFt3Bvs6.js";import{d as b}from"./index-C5QB_oV8.js";function C(){p(u,v)}const x=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;--_forge-structured-card-body-height: var(--forge-structured-card-body-height, auto)}.header-container{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";border-bottom:1px solid var(--forge-theme-outline, #e0e0e0)}forge-content-scaffold{--forge-content-scaffold-body-height: var(--_forge-structured-card-body-height)}.container{--forge-card-padding: 0;--forge-card-shape: 12px}.title-container{display:flex;flex-direction:row;align-items:center;gap:0;grid-area:start}.actions-container{grid-area:end}::slotted([slot=title]){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading3-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading3-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-font-size-scale, 1.125)));font-weight:var(--forge-typography-heading3-font-weight, 500);line-height:var(--forge-typography-heading3-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading3-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-heading3-letter-spacing, .0083333333em);text-transform:var(--forge-typography-heading3-text-transform, inherit);text-decoration:var(--forge-typography-heading3-text-decoration, inherit)}.footer-actions{display:flex;flex-direction:row;align-items:center;gap:16px}::slotted([slot=body]){height:var(--_forge-structured-card-body-height)}`;var w=Object.defineProperty,_=Object.getOwnPropertyDescriptor,s=(d,o,a,r)=>{for(var e=r>1?void 0:r?_(o,a):o,n=d.length-1,i;n>=0;n--)(i=d[n])&&(e=(r?i(o,a,e):i(e))||e);return r&&e&&w(o,a,e),e};const T="forge-structured-card";let t=class extends c{constructor(){super(...arguments),this.headingLevel=2,this.withTable=!1}render(){return h`
      <forge-card class="container">
        <forge-content-scaffold
          full-width-header
          style=${m({"--forge-content-scaffold-body-padding":this.withTable?"0":void 0})}>
          <div slot="header" class="header-container">
            <div class="title-container">
              <slot name="before-title" slot="before-header-start"></slot>
              <div role="heading" aria-level=${this.headingLevel} id="title" slot="header-start" ${l()}>
                <slot name="title"></slot>
              </div>
            </div>

            <div class="actions-container">
              <slot name="header-actions" slot="header-end"></slot>
            </div>
          </div>

          <slot name="body" slot="body"></slot>
          <slot name="footer-start" slot="footer-start"></slot>
          <div class="footer-actions" slot="footer-end" ${l()}>
            <slot name="footer-secondary-action"></slot>
            <slot name="footer-primary-action"></slot>
          </div>
        </forge-content-scaffold>
      </forge-card>
    `}};b();C();t.styles=g(x);s([f({attribute:"heading-level",type:Number})],t.prototype,"headingLevel",2);s([f({attribute:"with-table",type:Boolean})],t.prototype,"withTable",2);t=s([y(T)],t);
