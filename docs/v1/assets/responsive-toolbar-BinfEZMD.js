import{r as R,i as E,a as k,x as S}from"./iframe-CB6BRAcV.js";import{t as D}from"./constants-Bc0BYJiE.js";import{s as b,x as _}from"./with-default-aria-id6T8pUN.js";import{n as C,e as y}from"./ref-Bp3yZ9Ka.js";import{d as x}from"./index-BZ4W2s31.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class O{constructor(e,{target:s,config:i,callback:a,skipInitial:d}){this.t=new Set,this.o=!1,this.i=!1,this.h=e,s!==null&&this.t.add(s??e),this.l=i,this.o=d??this.o,this.callback=a,window.ResizeObserver?(this.u=new ResizeObserver((c=>{this.handleChanges(c),this.h.requestUpdate()})),e.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(e){this.value=this.callback?.(e,this.u)}hostConnected(){for(const e of this.t)this.observe(e)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(e){this.t.add(e),this.u.observe(e,this.l),this.i=!0,this.h.requestUpdate()}unobserve(e){this.t.delete(e),this.u.unobserve(e)}disconnect(){this.u.disconnect()}}const B=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;position:relative}forge-toolbar[auto-height]{--forge-toolbar-min-height: var(--forge-toolbar-height, 56px)}#end-small,#end-large{margin-inline-start:var(--forge-spacing-medium, 16px)}[slot=start]{padding-block:var(--forge-spacing-xxxsmall, 2px)}:host(:state(small)) #end-large,:host(:state(large)) #end-small{visibility:hidden;position:absolute}`;var T=Object.defineProperty,W=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},m=(t,e,s,i)=>{for(var a=i>1?void 0:i?W(e,s):e,d=t.length-1,c;d>=0;d--)(c=t[d])&&(a=(i?c(e,s,a):c(a))||a);return i&&a&&T(e,s,a),a},z=(t,e,s)=>e.has(t)||w("Cannot "+s),o=(t,e,s)=>(z(t,e,"read from private field"),s?s.call(t):e.get(t)),r=(t,e,s)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),p=(t,e,s,i)=>(z(t,e,"write to private field"),e.set(t,s),s),f,u,v,n,g,l;const $=24,I=100,M="forge-responsive-toolbar";let h=class extends E{constructor(){super(),this.noBorder=!1,this.inverted=!1,this.resizeDelay=I,r(this,f,y()),r(this,u,y()),r(this,v),r(this,n),r(this,g),r(this,l),p(this,v,this.attachInternals())}disconnectedCallback(){var t;p(this,g,void 0),(t=o(this,l))==null||t.call(this),super.disconnectedCallback()}willUpdate(t){t.has("resizeDelay")&&this.resizeDelay!==t.get("resizeDelay")&&(o(this,n)&&(o(this,n).unobserve(this),this.removeController(o(this,n))),this._initializeResizeController())}_initializeResizeController(){var t;(t=o(this,l))==null||t.call(this),p(this,l,k(()=>requestAnimationFrame(()=>this._handleResize()),this.resizeDelay)),p(this,n,new O(this,{callback:o(this,l)}))}_handleResize(){const t=o(this,f).value?.getBoundingClientRect().right||0,e=o(this,u).value?.getBoundingClientRect().left||0,i=t+$>=e?"small":"large";o(this,g)!==i&&(p(this,g,i),_(o(this,v),"small",i==="small"),_(o(this,v),"large",i==="large"),this._emitOverflowEvent(i))}_emitOverflowEvent(t){const e=new CustomEvent("forge-responsive-toolbar-update",{bubbles:!0,composed:!0,cancelable:!0,detail:{state:t}});this.dispatchEvent(e)}render(){return S`
      <forge-toolbar
        auto-height
        ?no-border=${this.noBorder}
        ?inverted=${this.inverted}
        @slotchange=${this._handleResize}>
        <slot name="before-start" slot="before-start"></slot>
        <div ${C(o(this,f))} slot="start">
          <slot name="start"></slot>
        </div>
        <div slot="end" id="end-large" ${C(o(this,u))}>
          <slot name="end-large"></slot>
        </div>
        <div slot="end" id="end-small">
          <slot name="end-small"></slot>
        </div>
        <slot name="after-end" slot="after-end"></slot>
      </forge-toolbar>
    `}};f=new WeakMap;u=new WeakMap;v=new WeakMap;n=new WeakMap;g=new WeakMap;l=new WeakMap;x();h.styles=R(B);m([b({type:Boolean,attribute:"no-border"})],h.prototype,"noBorder",2);m([b({type:Boolean})],h.prototype,"inverted",2);m([b({type:Number,attribute:"resize-delay"})],h.prototype,"resizeDelay",2);h=m([D(M)],h);
