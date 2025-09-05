import{r as p,i as g,x as d}from"./iframe-DLU-cbt_.js";import{e as m,I as y,f as h,g as u,h as b}from"./custom-element-Br_S2sq9.js";import{n as f}from"./property-BQtBtKEM.js";import{d as v}from"./index-EAom8EnL.js";import{d as x}from"./index-AQ8Px5Ri.js";import{d as C}from"./index-DaKrSAg2.js";const T=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}:host forge-toolbar{--forge-toolbar-background: var(--forge-theme-primary-container-low, #e8eaf6)}.selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}`;var _=Object.defineProperty,S=Object.getOwnPropertyDescriptor,s=(o,n,l,a)=>{for(var e=a>1?void 0:a?S(n,l):n,c=o.length-1,i;c>=0;c--)(i=o[c])&&(e=(a?i(n,l,e):i(e))||e);return a&&e&&_(n,l,e),e};const B="forge-multi-select-header";let t=class extends g{constructor(){super(...arguments),this.selectedCount=0,this.selectedText="of items selected",this.noBorder=!0}render(){return d`
      <forge-toolbar ?no-border=${this.noBorder}>
        <div slot="start">
          <slot name="start">
            <span class="selected-text"> ${this.selectedCount} ${this.selectedText} </span>
          </slot>
        </div>
        <slot name="actions" slot="end"></slot>
      </forge-toolbar>
    `}};v();t.styles=p(T);s([f({type:Number,attribute:"selected-count"})],t.prototype,"selectedCount",2);s([f({type:String,attribute:"selected-text"})],t.prototype,"selectedText",2);s([f({type:Boolean,attribute:"no-border"})],t.prototype,"noBorder",2);t=s([m(B)],t);C();x();y.define([h,u,b]);const I="forge-multi-select-header",M={title:"Components/Multi Select Header",component:I,render:o=>d`
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
    `,argTypes:{selectedCount:{control:"number"},selectedText:{control:"text"},noBorder:{control:"boolean"}},args:{selectedCount:3,selectedText:"",noBorder:!1}},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const z=["Demo"],H=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,__namedExportsOrder:z,default:M},Symbol.toStringTag,{value:"Module"}));export{r as D,H as M};
