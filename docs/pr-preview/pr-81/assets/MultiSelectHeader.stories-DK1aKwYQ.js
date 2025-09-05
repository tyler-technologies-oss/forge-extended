import{r as p,i as g,x as d}from"./iframe-Ed4JexiH.js";import{e as m,I as y,f as u,g as h,h as b}from"./custom-element-CPNbPI0k.js";import{n as f}from"./property-DtCHLgdC.js";import{d as v}from"./index-DhxjW6gj.js";import{d as x}from"./index-cgDgRi2F.js";import{d as C}from"./index-C3nnRf9a.js";import{d as T}from"./index-DG_aPqoI.js";const _=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}:host forge-toolbar{--forge-toolbar-background: var(--forge-theme-primary-container-low, #e8eaf6)}.selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}`;var B=Object.defineProperty,S=Object.getOwnPropertyDescriptor,s=(o,n,l,a)=>{for(var e=a>1?void 0:a?S(n,l):n,i=o.length-1,c;i>=0;i--)(c=o[i])&&(e=(a?c(n,l,e):c(e))||e);return a&&e&&B(n,l,e),e};const I="forge-multi-select-header";let t=class extends g{constructor(){super(...arguments),this.selectedCount=0,this.selectedText="of items selected",this.noBorder=!0}render(){return d`
      <forge-toolbar ?no-border=${this.noBorder}>
        <div slot="start">
          <slot name="start">
            <span class="selected-text"> ${this.selectedCount} ${this.selectedText} </span>
          </slot>
        </div>
        <slot name="actions" slot="end"></slot>
      </forge-toolbar>
    `}};v();t.styles=p(_);s([f({type:Number,attribute:"selected-count"})],t.prototype,"selectedCount",2);s([f({type:String,attribute:"selected-text"})],t.prototype,"selectedText",2);s([f({type:Boolean,attribute:"no-border"})],t.prototype,"noBorder",2);t=s([m(I)],t);C();x();T();y.define([u,h,b]);const M="forge-multi-select-header",z={title:"Components/Multi Select Header",component:M,render:o=>d`
      <forge-multi-select-header
        .selectedCount=${o.selectedCount}
        .selectedText=${o.selectedText}
        .noBorder=${o.noBorder}>
        <forge-button slot="actions" variant="outlined">Forge button</forge-button>
        <forge-icon-button slot="actions" aria-label="Select all items">
          <forge-icon name="check"></forge-icon>
        </forge-icon-button>
        <forge-icon-button slot="actions" aria-label="Clear selection">
          <forge-icon name="clear"></forge-icon>
        </forge-icon-button>

        <forge-icon-button slot="actions" aria-label="More actions">
          <forge-icon name="more_vert"></forge-icon>
        </forge-icon-button>
      </forge-multi-select-header>
    `,argTypes:{selectedCount:{control:"number"},selectedText:{control:"text"},noBorder:{control:"boolean"}},args:{selectedCount:3,selectedText:"",noBorder:!1}},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const O=["Demo"],R=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,__namedExportsOrder:O,default:z},Symbol.toStringTag,{value:"Module"}));export{r as D,R as M};
