import{r as C,i as I,x as b}from"./iframe-CE0lWIjB.js";import{I as S,n as O,o as $,i as T}from"./with-default-aria-DKVvqIVt.js";import{n as h}from"./base-button-adapter-BdZMOsST.js";import{e as D}from"./base-CShCMygk.js";import{d as L}from"./index-BmEQbyia.js";import{d as z}from"./index-CcEsrtlr.js";import{d as Q}from"./index-BHkY4Upr.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(e){return(t,o)=>{const{slot:n,selector:r}={},c="slot"+(n?`[name=${n}]`:":not([name])");return D(t,o,{get(){const p=this.renderRoot?.querySelector(c),v=p?.assignedElements(e)??[];return r===void 0?v:v.filter(E=>E.matches(r))}})}}const P=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:inline-block}.container,.inner{display:flex;gap:var(--forge-spacing-xxsmall, 4px)}.container{flex-direction:column}.inner{align-items:center}::slotted(:is([slot=label],[slot=support-text])){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-label1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-label1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-font-size-scale, .75)));font-weight:var(--forge-typography-label1-font-weight, 400);line-height:var(--forge-typography-label1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-label-line-height-scale, 1.25)));letter-spacing:var(--forge-typography-label1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-label1-text-transform, inherit);text-decoration:var(--forge-typography-label1-text-decoration, inherit)}::slotted([slot=label]){color:var(--forge-theme-text-high, rgba(0, 0, 0, .87))}::slotted([slot=support-text]){color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6))}:host(:state(required)) ::slotted([slot=label]):before{content:"*";color:var(--forge-theme-error, #b00020);margin-inline-end:var(--forge-spacing-xxsmall, 4px)}:host(:state(invalid)) ::slotted(:where([slot=label],[slot=support-text])){color:var(--forge-theme-error, #b00020)}:host(:state(invalid)) forge-icon-button{color:var(--forge-theme-error, #b00020);--forge-icon-button-focus-indicator-color: var(--forge-theme-error, #b00020)}`;var A=Object.defineProperty,M=Object.getOwnPropertyDescriptor,_=e=>{throw TypeError(e)},l=(e,t,o,n)=>{for(var r=n>1?void 0:n?M(t,o):t,c=e.length-1,p;c>=0;c--)(p=e[c])&&(r=(n?p(t,o,r):p(r))||r);return n&&r&&A(t,o,r),r},m=(e,t,o)=>t.has(e)||_("Cannot "+o),f=(e,t,o)=>(m(e,t,"read from private field"),o?o.call(e):t.get(e)),y=(e,t,o)=>t.has(e)?_("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),B=(e,t,o,n)=>(m(e,t,"write to private field"),t.set(e,o),o),u=(e,t,o)=>(m(e,t,"access private method"),o),i,s,g,x,q;const N="forge-quantity-field";let a=class extends I{constructor(){super(),y(this,s),this.invalid=!1,this.required=!1,this.decrementLabel="Decrement",this.incrementLabel="Increment",y(this,i),B(this,i,this.attachInternals())}willUpdate(e){e.has("required")&&(this.required?f(this,i).states.add("required"):f(this,i).states.delete("required")),e.has("invalid")&&(this.invalid?f(this,i).states.add("invalid"):f(this,i).states.delete("invalid"))}render(){return b`
      <div class="container">
        <slot name="label"></slot>
        <div class="inner">
          <slot name="decrement-button" @click=${u(this,s,x)}>
            <forge-icon-button shape="squared" aria-label=${this.decrementLabel}>
              <slot name="decrement-icon">
                <forge-icon name="minus"></forge-icon>
              </slot>
            </forge-icon-button>
          </slot>
          <forge-text-field .invalid=${this.invalid} .required=${this.required}>
            <slot></slot>
          </forge-text-field>
          <slot name="increment-button" @click=${u(this,s,q)}>
            <forge-icon-button shape="squared" aria-label=${this.incrementLabel}>
              <slot name="increment-icon">
                <forge-icon name="plus"></forge-icon>
              </slot>
            </forge-icon-button>
          </slot>
        </div>
        <slot name="support-text"></slot>
      </div>
    `}};i=new WeakMap;s=new WeakSet;g=function(){return this._defaultSlotElements.find(e=>e.tagName==="INPUT")};x=function(){const e=u(this,s,g).call(this);e?.stepDown(),e?.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),e?.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};q=function(){const e=u(this,s,g).call(this);e?.stepUp(),e?.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),e?.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};L();z();Q();S.define([O,$]);a.styles=C(P);l([h({type:Boolean})],a.prototype,"invalid",2);l([h({type:Boolean})],a.prototype,"required",2);l([h({attribute:"decrement-label"})],a.prototype,"decrementLabel",2);l([h({attribute:"increment-label"})],a.prototype,"incrementLabel",2);l([F()],a.prototype,"_defaultSlotElements",2);a=l([T(N)],a);const{action:w}=__STORYBOOK_MODULE_ACTIONS__,R="forge-quantity-field",U=w("change"),k=w("input"),W={title:"Components/Quantity Field",component:R,render:e=>b`
      <forge-quantity-field .invalid=${e.invalid} .required=${e.required}>
        <label slot="label" for="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          value="1"
          aria-label="Set a quantity"
          step="2"
          @change=${U}
          @input=${k} />
        <span slot="support-text">Enter a quantity</span>
      </forge-quantity-field>
    `,argTypes:{invalid:{control:"boolean"},required:{control:"boolean"}},args:{invalid:!1,required:!1}},d={};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};const G=["Demo"],j=Object.freeze(Object.defineProperty({__proto__:null,Demo:d,__namedExportsOrder:G,default:W},Symbol.toStringTag,{value:"Module"}));export{d as D,j as Q};
