import{r as _,i as S,x as n}from"./iframe-MrMz8lfU.js";import{e as C,I as B,f as $,g as A,h as M}from"./custom-element-BvoQkvBY.js";import{n as h}from"./property-Cu67QiZa.js";import{n as T,a as w}from"./when-DfnyT8j1.js";import{d as I}from"./index-b8rq1gzM.js";import{d as y}from"./index-Dwd4TWFc.js";import{d as z}from"./index-BQbQxfds.js";import{d as O}from"./index-BD_KpFwX.js";const D=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}:host forge-toolbar{--forge-toolbar-background: var(--forge-theme-primary-container-low, #e8eaf6)}.start-container{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}`;var H=Object.defineProperty,P=Object.getOwnPropertyDescriptor,u=e=>{throw TypeError(e)},f=(e,t,o,l)=>{for(var r=l>1?void 0:l?P(t,o):t,p=e.length-1,d;p>=0;p--)(d=e[p])&&(r=(l?d(t,o,r):d(r))||r);return l&&r&&H(t,o,r),r},b=(e,t,o)=>t.has(e)||u("Cannot "+o),g=(e,t,o)=>(b(e,t,"read from private field"),o?o.call(e):t.get(e)),m=(e,t,o)=>t.has(e)?u("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),k=(e,t,o)=>(b(e,t,"access private method"),o),c,i,v,x;const N="forge-multi-select-header";let a=class extends S{constructor(){super(...arguments),m(this,i),this.text="",this.noBorder=!0,m(this,c,n`<slot name="select-all-button-text"></slot>`)}render(){return n`
      <forge-toolbar ?no-border=${this.noBorder} @slotchange=${k(this,i,x)}>
        <div slot="start">
          <slot name="start">
            <div class="start-container">
              <span class="selected-text">${this.text}</span>
              ${g(this,i,v)}
            </div>
          </slot>
        </div>
        <slot name="actions" slot="end"></slot>
      </forge-toolbar>
    `}};c=new WeakMap;i=new WeakSet;v=function(){const e=this._slottedSelectAllNodes.length>0;return w(e,()=>n` <forge-button id="select-all-button"> ${g(this,c)} </forge-button>`,()=>n`${g(this,c)}`)};x=function(e){const t=e.target.name;["select-all-button-text","start","actions"].includes(t)&&this.requestUpdate()};I();y();a.styles=_(D);f([h({type:String})],a.prototype,"text",2);f([h({type:Boolean,attribute:"no-border"})],a.prototype,"noBorder",2);f([T({slot:"select-all-button-text",flatten:!0})],a.prototype,"_slottedSelectAllNodes",2);a=f([C(N)],a);O();z();y();B.define([$,A,M]);const E="forge-multi-select-header",W={title:"Components/Multi Select Header",component:E,render:e=>n`
      <forge-multi-select-header .text=${e.text} .noBorder=${e.noBorder}>
        ${e.selectAllText?n`<span slot="select-all-button-text">${e.selectAllText}</span>`:""}
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
    `,argTypes:{text:{control:"text"},noBorder:{control:"boolean"},selectAllText:{control:"text"}},args:{text:"3 items selected",noBorder:!1,selectAllText:""}},s={};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};const R=["Demo"],K=Object.freeze(Object.defineProperty({__proto__:null,Demo:s,__namedExportsOrder:R,default:W},Symbol.toStringTag,{value:"Module"}));export{s as D,K as M};
