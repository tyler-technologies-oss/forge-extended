import{r as C,i as A,x as n}from"./iframe-BuJgqGXX.js";import{e as T,I as $,f as w,g as B,h as I,i as M,j as O}from"./custom-element-Dd9KUBnE.js";import{n as h}from"./property-0M3-EbQP.js";import{n as E,a as D}from"./when-DfnyT8j1.js";import{d as z}from"./index-DjH-f1de.js";import{d as u}from"./index-Conlq6p_.js";import{d as P}from"./index-DTH0jydY.js";import{d as H}from"./index-BOy1S3y9.js";const N=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}:host forge-toolbar{--forge-toolbar-background: var(--forge-theme-primary-container-low, #e8eaf6)}.start-container{display:flex;align-items:center;gap:var(--forge-spacing-medium, 16px)}.selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}`;var k=Object.defineProperty,F=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},p=(e,t,o,i)=>{for(var r=i>1?void 0:i?F(t,o):t,f=e.length-1,d;f>=0;f--)(d=e[f])&&(r=(i?d(t,o,r):d(r))||r);return i&&r&&k(t,o,r),r},b=(e,t,o)=>t.has(e)||y("Cannot "+o),g=(e,t,o)=>(b(e,t,"read from private field"),o?o.call(e):t.get(e)),m=(e,t,o)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),v=(e,t,o)=>(b(e,t,"access private method"),o),c,s,_,x,S;const R="forge-multi-select-header";let a=class extends A{constructor(){super(...arguments),m(this,s),this.text="",this.noBorder=!0,m(this,c,n`<slot name="select-all-button-text"></slot>`)}render(){return n`
      <forge-toolbar ?no-border=${this.noBorder} @slotchange=${v(this,s,x)}>
        <div slot="start" class="start-container">
          <span class="selected-text">${this.text}</span>
          ${g(this,s,_)}
        </div>
        <slot name="actions" slot="end"></slot>
      </forge-toolbar>
    `}};c=new WeakMap;s=new WeakSet;_=function(){const e=this._slottedSelectAllNodes.length>0;return D(e,()=>n` <forge-button id="select-all-button" @click=${v(this,s,S)}>
          ${g(this,c)}
        </forge-button>`,()=>n`${g(this,c)}`)};x=function(e){const t=e.target.name;["select-all-button-text","actions"].includes(t)&&this.requestUpdate()};S=function(){const e=new CustomEvent("forge-multi-select-header-select-all",{bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)};z();u();a.styles=C(N);p([h({type:String})],a.prototype,"text",2);p([h({type:Boolean,attribute:"no-border"})],a.prototype,"noBorder",2);p([E({slot:"select-all-button-text",flatten:!0})],a.prototype,"_slottedSelectAllNodes",2);a=p([T(R)],a);const{action:W}=__STORYBOOK_MODULE_ACTIONS__;H();P();u();$.define([w,B,I,M,O]);const L="forge-multi-select-header",U={title:"Components/Multi Select Header",component:L,render:e=>{const t=W("forge-multi-select-header-select-all"),o=[{label:"Export as a PDF",value:"option-1",icon:"file_pdf",leadingIconType:"component"},{label:"Export to Excel",value:"option-2",icon:"file_excel",leadingIconType:"component"}];return n`
      <forge-multi-select-header
        .text=${e.text}
        .noBorder=${e.noBorder}
        @forge-multi-select-header-select-all=${t}>
        ${e.selectAllText?n`<span slot="select-all-button-text">${e.selectAllText}</span>`:""}
        <forge-icon-button slot="actions" aria-label="Select all items">
          <forge-icon name="download"></forge-icon>
        </forge-icon-button>
        <forge-icon-button slot="actions" aria-label="Clear selection">
          <forge-icon name="delete"></forge-icon>
        </forge-icon-button>
        <forge-menu slot="actions" .options=${o}>
          <forge-icon-button aria-label="More actions">
            <forge-icon name="more_vert"></forge-icon>
          </forge-icon-button>
        </forge-menu>
      </forge-multi-select-header>
    `},argTypes:{text:{control:"text"},noBorder:{control:"boolean"},selectAllText:{control:"text"}},args:{text:"3 items selected",noBorder:!1,selectAllText:"Select All"}},l={};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};const j=["Demo"],Z=Object.freeze(Object.defineProperty({__proto__:null,Demo:l,__namedExportsOrder:j,default:U},Symbol.toStringTag,{value:"Module"}));export{l as D,Z as M};
