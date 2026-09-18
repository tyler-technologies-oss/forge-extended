var x=t=>{throw TypeError(t)};var g=(t,o,e)=>o.has(t)||x("Cannot "+e);var c=(t,o,e)=>(g(t,o,"read from private field"),e?e.call(t):o.get(t)),h=(t,o,e)=>o.has(t)?x("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(t):o.set(t,e),q=(t,o,e,s)=>(g(t,o,"write to private field"),s?s.call(t,e):o.set(t,e),e),p=(t,o,e)=>(g(t,o,"access private method"),e);import{i as w,r as T,x as _}from"./iframe-Qh6uGKis.js";import{n as m}from"./utils-DV_ZlenX.js";import{e as O}from"./base-CShCMygk.js";import{t as D}from"./component-utils-CHSR0lNw.js";import{I as L,S as z,T as C}from"./with-default-aria-Ci9C3nW2.js";import{d as k}from"./index-CTsVs46P.js";import{d as A}from"./index-B-f0Tlpv.js";import{d as B}from"./index-ClVoGirk.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(t){return(o,e)=>{const{slot:s,selector:r}={},l="slot"+(s?`[name=${s}]`:":not([name])");return O(o,e,{get(){const u=this.renderRoot?.querySelector(l),v=u?.assignedElements(t)??[];return r===void 0?v:v.filter(($=>$.matches(r)))}})}}const P=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:inline-block}.container,.inner{display:flex;gap:var(--forge-spacing-xxsmall, 4px)}.container{flex-direction:column}.inner{align-items:center}::slotted(:is([slot=label],[slot=support-text])){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit)}::slotted([slot=label]){color:var(--forge-theme-text-high, rgba(0, 0, 0, .87))}::slotted([slot=support-text]){color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6))}:host(:state(required)) ::slotted([slot=label]):before{content:"*";color:var(--forge-theme-error, #b00020);margin-inline-end:var(--forge-spacing-xxsmall, 4px)}:host(:state(invalid)) ::slotted(:where([slot=label],[slot=support-text])){color:var(--forge-theme-error, #b00020)}:host(:state(invalid)) forge-icon-button{color:var(--forge-theme-error, #b00020);--forge-icon-button-focus-indicator-color: var(--forge-theme-error, #b00020)}`;var R=Object.defineProperty,f=(t,o,e,s)=>{for(var r=void 0,l=t.length-1,u;l>=0;l--)(u=t[l])&&(r=u(o,e,r)||r);return r&&R(o,e,r),r};const U="forge-quantity-field";var i,n,b,E,I;const y=class y extends w{constructor(){super();h(this,n);h(this,i);this.invalid=!1,this.required=!1,this.decrementLabel="Decrement",this.incrementLabel="Increment",q(this,i,this.attachInternals())}willUpdate(e){e.has("required")&&(this.required?c(this,i).states.add("required"):c(this,i).states.delete("required")),e.has("invalid")&&(this.invalid?c(this,i).states.add("invalid"):c(this,i).states.delete("invalid"))}render(){return _`
      <div class="container">
        <slot name="label"></slot>
        <div class="inner">
          <slot name="decrement-button" @click=${p(this,n,E)}>
            <forge-icon-button shape="squared" aria-label=${this.decrementLabel}>
              <slot name="decrement-icon">
                <forge-icon name="minus"></forge-icon>
              </slot>
            </forge-icon-button>
          </slot>
          <forge-text-field .invalid=${this.invalid} .required=${this.required}>
            <slot></slot>
          </forge-text-field>
          <slot name="increment-button" @click=${p(this,n,I)}>
            <forge-icon-button shape="squared" aria-label=${this.incrementLabel}>
              <slot name="increment-icon">
                <forge-icon name="plus"></forge-icon>
              </slot>
            </forge-icon-button>
          </slot>
        </div>
        <slot name="support-text"></slot>
      </div>
    `}};i=new WeakMap,n=new WeakSet,b=function(){return this._defaultSlotElements.find(e=>e.tagName==="INPUT")},E=function(){const e=p(this,n,b).call(this);e?.stepDown(),e?.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),e?.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},I=function(){const e=p(this,n,b).call(this);e?.stepUp(),e?.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),e?.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},k(),A(),B(),L.define([z,C]),y.styles=T(P);let a=y;f([m({type:Boolean})],a.prototype,"invalid");f([m({type:Boolean})],a.prototype,"required");f([m({attribute:"decrement-label"})],a.prototype,"decrementLabel");f([m({attribute:"increment-label"})],a.prototype,"incrementLabel");f([N()],a.prototype,"_defaultSlotElements");D(U,a);const{action:S}=__STORYBOOK_MODULE_ACTIONS__,j="forge-quantity-field",M=S("change"),Q=S("input"),F={title:"Components/Quantity Field",component:j,render:t=>_`
      <forge-quantity-field .invalid=${t.invalid} .required=${t.required}>
        <label slot="label" for="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          value="1"
          aria-label="Set a quantity"
          step="2"
          @change=${M}
          @input=${Q} />
        <span slot="support-text">Enter a quantity</span>
      </forge-quantity-field>
    `,argTypes:{invalid:{control:"boolean"},required:{control:"boolean"}},args:{invalid:!1,required:!1}},d={};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};const G=["Demo"],te=Object.freeze(Object.defineProperty({__proto__:null,Demo:d,__namedExportsOrder:G,default:F},Symbol.toStringTag,{value:"Module"}));export{d as D,te as Q};
