import{r as g,i as m,x as a}from"./iframe-By5VxaMH.js";import{e as y,I as u,f as h,g as b,h as v}from"./custom-element-BZjdAwDR.js";import{n as c}from"./property-DJqoTfB_.js";import{n as x}from"./when-3fO0zp9C.js";import{d as C}from"./index-hiIClPvX.js";import{d}from"./index-MISfNKvS.js";import{d as S}from"./index-c1sjbAvm.js";import{d as T}from"./index-BX_yUYjy.js";const w=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}:host forge-toolbar{--forge-toolbar-background: var(--forge-theme-primary-container-low, #e8eaf6)}.selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.select-all-button{margin-inline-start:var(--forge-spacing-medium)}`;var A=Object.defineProperty,_=Object.getOwnPropertyDescriptor,l=(e,n,i,s)=>{for(var t=s>1?void 0:s?_(n,i):n,f=e.length-1,p;f>=0;f--)(p=e[f])&&(t=(s?p(n,i,t):p(t))||t);return s&&t&&A(n,i,t),t};const B="forge-multi-select-header";let o=class extends m{constructor(){super(...arguments),this.selectedCount=0,this.selectedText="of items selected",this.noBorder=!0,this.showSelectAll=!1}render(){return a`
      <forge-toolbar ?no-border=${this.noBorder}>
        <div slot="start">
          <slot name="start">
            <span class="selected-text"> ${this.selectedCount} ${this.selectedText} </span>
            ${x(this.showSelectAll,()=>a`
                <forge-button variant="text" class="select-all-button">
                  <slot name="select-all">Select All</slot>
                </forge-button>
              `)}
          </slot>
        </div>
        <slot name="actions" slot="end"></slot>
      </forge-toolbar>
    `}};C();d();o.styles=g(w);l([c({type:Number,attribute:"selected-count"})],o.prototype,"selectedCount",2);l([c({type:String,attribute:"selected-text"})],o.prototype,"selectedText",2);l([c({type:Boolean,attribute:"no-border"})],o.prototype,"noBorder",2);l([c({type:Boolean,attribute:"show-select-all"})],o.prototype,"showSelectAll",2);o=l([y(B)],o);T();S();d();u.define([h,b,v]);const $="forge-multi-select-header",I={title:"Components/Multi Select Header",component:$,render:e=>a`
      <forge-multi-select-header
        .selectedCount=${e.selectedCount}
        .selectedText=${e.selectedText}
        .noBorder=${e.noBorder}
        .showSelectAll=${e.showSelectAll}>
        ${e.selectAllText?a`<span slot="select-all">${e.selectAllText}</span>`:""}
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
    `,argTypes:{selectedCount:{control:"number"},selectedText:{control:"text"},noBorder:{control:"boolean"},showSelectAll:{control:"boolean"},selectAllText:{control:"text"}},args:{selectedCount:3,selectedText:"",noBorder:!1,showSelectAll:!1,selectAllText:""}},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const M=["Demo"],E=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,__namedExportsOrder:M,default:I},Symbol.toStringTag,{value:"Module"}));export{r as D,E as M};
