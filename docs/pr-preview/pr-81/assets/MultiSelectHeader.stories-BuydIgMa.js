import{r as p,i as u,x as m}from"./iframe-DZY7qQ6Z.js";import{e as f,I as g,f as b,g as y,h}from"./custom-element-VCRaCGo5.js";import{n as d}from"./property-CauFC9Ie.js";import{d as C}from"./index-D2yM1Inz.js";import{d as v}from"./index-CC6Bvw1A.js";import{d as _}from"./index-CP72to-U.js";const x=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}:host forge-toolbar{--forge-toolbar-background: var(--forge-theme-primary-container-low, #e8eaf6)}`;var T=Object.defineProperty,S=Object.getOwnPropertyDescriptor,l=(o,n,c,s)=>{for(var e=s>1?void 0:s?S(n,c):n,a=o.length-1,i;a>=0;a--)(i=o[a])&&(e=(s?i(n,c,e):i(e))||e);return s&&e&&T(n,c,e),e};const B="forge-multi-select-header";let t=class extends u{constructor(){super(...arguments),this.selectedCount=0,this.noBorder=!0}render(){return m`
      <forge-toolbar ?no-border=${this.noBorder}>
        <div slot="start">
          <slot name="start">
            <span class="forge-typography--body1">
              ${this.selectedCount} ${this.selectedText||`item${this.selectedCount===1?"":"s"} selected`}
            </span>
          </slot>
        </div>
        <slot name="actions" slot="end"></slot>
      </forge-toolbar>
    `}};C();t.styles=p(x);l([d({type:Number,attribute:"selected-count"})],t.prototype,"selectedCount",2);l([d({type:String,attribute:"selected-text"})],t.prototype,"selectedText",2);l([d({type:Boolean,attribute:"no-border"})],t.prototype,"noBorder",2);t=l([f(B)],t);_();v();g.define([b,y,h]);const I="forge-multi-select-header",M={title:"Components/Multi Select Header",component:I,render:o=>m`
      <forge-multi-select-header
        .selectedCount=${o.selectedCount}
        .selectedText=${o.selectedText}
        .noBorder=${o.noBorder}>
        <div slot="actions">
          <forge-icon-button aria-label="Select all items">
            <forge-icon name="check"></forge-icon>
          </forge-icon-button>
          <forge-icon-button aria-label="Clear selection">
            <forge-icon name="clear"></forge-icon>
          </forge-icon-button>
          <forge-icon-button aria-label="More actions">
            <forge-icon name="more_vert"></forge-icon>
          </forge-icon-button>
        </div>
      </forge-multi-select-header>
    `,argTypes:{selectedCount:{control:"number"},selectedText:{control:"text"},noBorder:{control:"boolean"}},args:{selectedCount:3,selectedText:"",noBorder:!1}},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const O=["Demo"],N=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,__namedExportsOrder:O,default:M},Symbol.toStringTag,{value:"Module"}));export{r as D,N as M};
