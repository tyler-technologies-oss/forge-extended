import{r as C,i as A,x as n}from"./iframe-2oKuspYA.js";import{e as $,I as B,f as T,g as M,h as O}from"./custom-element-DyyTwK0S.js";import{n as m}from"./property-ggQvLMPZ.js";import{n as w,a as I}from"./when-DfnyT8j1.js";import{d as z}from"./index-CGfleUfk.js";import{d as u}from"./index-BY63_h3J.js";import{d as k}from"./index-B4Oqetgx.js";import{d as D}from"./index-BitXkolA.js";const E=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}:host forge-toolbar{--forge-toolbar-background: var(--forge-theme-primary-container-low, #e8eaf6)}.start-container{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}`;var H=Object.defineProperty,N=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},f=(e,t,o,c)=>{for(var r=c>1?void 0:c?N(t,o):t,p=e.length-1,d;p>=0;p--)(d=e[p])&&(r=(c?d(t,o,r):d(r))||r);return c&&r&&H(t,o,r),r},b=(e,t,o)=>t.has(e)||y("Cannot "+o),g=(e,t,o)=>(b(e,t,"read from private field"),o?o.call(e):t.get(e)),h=(e,t,o)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),v=(e,t,o)=>(b(e,t,"access private method"),o),i,s,_,x,S;const P="forge-multi-select-header";let a=class extends A{constructor(){super(...arguments),h(this,s),this.text="",this.noBorder=!0,h(this,i,n`<slot name="select-all-button-text"></slot>`)}render(){return n`
      <forge-toolbar ?no-border=${this.noBorder} @slotchange=${v(this,s,x)}>
        <div slot="start" class="start-container">
          <span class="selected-text">${this.text}</span>
          ${g(this,s,_)}
        </div>
        <slot name="actions" slot="end"></slot>
      </forge-toolbar>
    `}};i=new WeakMap;s=new WeakSet;_=function(){const e=this._slottedSelectAllNodes.length>0;return I(e,()=>n` <forge-button id="select-all-button" @click=${v(this,s,S)}>
          ${g(this,i)}
        </forge-button>`,()=>n`${g(this,i)}`)};x=function(e){const t=e.target.name;["select-all-button-text","actions"].includes(t)&&this.requestUpdate()};S=function(){const e=new CustomEvent("forge-multi-select-header-select-all",{bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)};z();u();a.styles=C(E);f([m({type:String})],a.prototype,"text",2);f([m({type:Boolean,attribute:"no-border"})],a.prototype,"noBorder",2);f([w({slot:"select-all-button-text",flatten:!0})],a.prototype,"_slottedSelectAllNodes",2);a=f([$(P)],a);const{action:R}=__STORYBOOK_MODULE_ACTIONS__;D();k();u();B.define([T,M,O]);const W="forge-multi-select-header",L={title:"Components/Multi Select Header",component:W,render:e=>{const t=R("forge-multi-select-header-select-all");return n`
      <forge-multi-select-header
        .text=${e.text}
        .noBorder=${e.noBorder}
        @forge-multi-select-header-select-all=${t}>
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
    `},argTypes:{text:{control:"text"},noBorder:{control:"boolean"},selectAllText:{control:"text"}},args:{text:"3 items selected",noBorder:!1,selectAllText:"Select All"}},l={};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};const U=["Demo"],Q=Object.freeze(Object.defineProperty({__proto__:null,Demo:l,__namedExportsOrder:U,default:L},Symbol.toStringTag,{value:"Module"}));export{l as D,Q as M};
