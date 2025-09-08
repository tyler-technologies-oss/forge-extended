import{r as x,i as C,x as a}from"./iframe-fUKA8guk.js";import{e as S,I as T,f as $,g as B,h as A}from"./custom-element-BytZEonD.js";import{n as u}from"./property-25XFDHgZ.js";import{n as M,a as w}from"./when-DfnyT8j1.js";import{d as I}from"./index-CbHYfPOP.js";import{d as h}from"./index-DLUsvbss.js";import{d as z}from"./index-1X_nokPe.js";import{d as O}from"./index-BaZ8FRca.js";const D=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}:host forge-toolbar{--forge-toolbar-background: var(--forge-theme-primary-container-low, #e8eaf6)}.selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}.select-all-button{margin-inline-start:var(--forge-spacing-medium)}`;var H=Object.defineProperty,N=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},s=(e,t,o,c)=>{for(var r=c>1?void 0:c?N(t,o):t,f=e.length-1,p;f>=0;f--)(p=e[f])&&(r=(c?p(t,o,r):p(r))||r);return c&&r&&H(t,o,r),r},b=(e,t,o)=>t.has(e)||y("Cannot "+o),g=(e,t,o)=>(b(e,t,"read from private field"),o?o.call(e):t.get(e)),m=(e,t,o)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),P=(e,t,o)=>(b(e,t,"access private method"),o),d,i,v,_;const k="forge-multi-select-header";let n=class extends C{constructor(){super(...arguments),m(this,i),this.selectedCount=0,this.selectedText="of items selected",this.noBorder=!0,m(this,d,a`<slot name="select-all-button-text" id="select-all-button-slot"></slot>`)}render(){return a`
      <forge-toolbar ?no-border=${this.noBorder} @slotchange=${P(this,i,_)}>
        <div slot="start">
          <slot name="start">
            <span class="selected-text">${this.selectedCount} ${this.selectedText}</span>
            ${g(this,i,v)}
          </slot>
        </div>
        <slot name="actions" slot="end"></slot>
      </forge-toolbar>
    `}};d=new WeakMap;i=new WeakSet;v=function(){const e=this._slottedSelectAllNodes.length>0;return w(e,()=>a` <forge-button id="select-all-button"> ${g(this,d)} </forge-button>`,()=>a`${g(this,d)}`)};_=function(e){const t=e.target.name;["select-all-button-text","start","actions"].includes(t)&&this.requestUpdate()};I();h();n.styles=x(D);s([u({type:Number,attribute:"selected-count"})],n.prototype,"selectedCount",2);s([u({type:String,attribute:"selected-text"})],n.prototype,"selectedText",2);s([u({type:Boolean,attribute:"no-border"})],n.prototype,"noBorder",2);s([M({slot:"select-all-button-text",flatten:!0})],n.prototype,"_slottedSelectAllNodes",2);n=s([S(k)],n);O();z();h();T.define([$,B,A]);const E="forge-multi-select-header",W={title:"Components/Multi Select Header",component:E,render:e=>a`
      <forge-multi-select-header
        .selectedCount=${e.selectedCount}
        .selectedText=${e.selectedText}
        .noBorder=${e.noBorder}>
        ${e.selectAllText?a`<span slot="select-all-button-text">${e.selectAllText}</span>`:""}
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
    `,argTypes:{selectedCount:{control:"number"},selectedText:{control:"text"},noBorder:{control:"boolean"},selectAllText:{control:"text"}},args:{selectedCount:3,selectedText:"",noBorder:!1,selectAllText:""}},l={};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};const R=["Demo"],K=Object.freeze(Object.defineProperty({__proto__:null,Demo:l,__namedExportsOrder:R,default:W},Symbol.toStringTag,{value:"Module"}));export{l as D,K as M};
