var z=s=>{throw TypeError(s)};var C=(s,e,t)=>e.has(s)||z("Cannot "+t);var i=(s,e,t)=>(C(s,e,"read from private field"),t?t.call(s):e.get(s)),a=(s,e,t)=>e.has(s)?z("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),l=(s,e,t,r)=>(C(s,e,"write to private field"),r?r.call(s,t):e.set(s,t),t);import{t as _}from"./component-utils-CHSR0lNw.js";import{i as D,r as S,e as k,x}from"./iframe-Qh6uGKis.js";import{t as w,n as m}from"./utils-DV_ZlenX.js";import{e as R,n as E}from"./ref-N3zdYH6h.js";import{d as B}from"./index-CQpNJDfN.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class I{constructor(e,{target:t,config:r,callback:n,skipInitial:o}){this.t=new Set,this.o=!1,this.i=!1,this.h=e,t!==null&&this.t.add(t??e),this.l=r,this.o=o??this.o,this.callback=n,window.ResizeObserver?(this.u=new ResizeObserver((f=>{this.handleChanges(f),this.h.requestUpdate()})),e.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(e){this.value=this.callback?.(e,this.u)}hostConnected(){for(const e of this.t)this.observe(e)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(e){this.t.add(e),this.u.observe(e,this.l),this.i=!0,this.h.requestUpdate()}unobserve(e){this.t.delete(e),this.u.unobserve(e)}disconnect(){this.u.disconnect()}}const O=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;position:relative}forge-toolbar[auto-height]{--forge-toolbar-min-height: var(--forge-toolbar-height, 56px)}#end-small,#end-large{margin-inline-start:var(--forge-spacing-medium, 16px)}[slot=start]{padding-block:var(--forge-spacing-xxxsmall, 2px)}:host(:state(small)) #end-large,:host(:state(large)) #end-small{visibility:hidden;position:absolute}`;var $=Object.defineProperty,p=(s,e,t,r)=>{for(var n=void 0,o=s.length-1,f;o>=0;o--)(f=s[o])&&(n=f(e,t,n)||n);return n&&$(e,t,n),n};const U=24,q=100,A="forge-responsive-toolbar";var c,g,v,h,u,d;const y=class y extends D{constructor(){super();a(this,c);a(this,g);a(this,v);a(this,h);a(this,u);a(this,d);this.noBorder=!1,this.inverted=!1,this.resizeDelay=q,l(this,c,R()),l(this,g,R()),l(this,v,this.attachInternals())}disconnectedCallback(){var t;l(this,u,void 0),(t=i(this,d))==null||t.call(this),super.disconnectedCallback()}willUpdate(t){t.has("resizeDelay")&&this.resizeDelay!==t.get("resizeDelay")&&(i(this,h)&&(i(this,h).unobserve(this),this.removeController(i(this,h))),this._initializeResizeController())}_initializeResizeController(){var t;(t=i(this,d))==null||t.call(this),l(this,d,k(()=>requestAnimationFrame(()=>this._handleResize()),this.resizeDelay)),l(this,h,new I(this,{callback:i(this,d)}))}_handleResize(){const t=i(this,c).value?.getBoundingClientRect().right||0,r=i(this,g).value?.getBoundingClientRect().left||0,o=t+U>=r?"small":"large";i(this,u)!==o&&(l(this,u,o),w(i(this,v),"small",o==="small"),w(i(this,v),"large",o==="large"),this._emitOverflowEvent(o))}_emitOverflowEvent(t){const r=new CustomEvent("forge-responsive-toolbar-update",{bubbles:!0,composed:!0,cancelable:!0,detail:{state:t}});this.dispatchEvent(r)}render(){return x`
      <forge-toolbar
        auto-height
        ?no-border=${this.noBorder}
        ?inverted=${this.inverted}
        @slotchange=${this._handleResize}>
        <slot name="before-start" slot="before-start"></slot>
        <div ${E(i(this,c))} slot="start">
          <slot name="start"></slot>
        </div>
        <div slot="end" id="end-large" ${E(i(this,g))}>
          <slot name="end-large"></slot>
        </div>
        <div slot="end" id="end-small">
          <slot name="end-small"></slot>
        </div>
        <slot name="after-end" slot="after-end"></slot>
      </forge-toolbar>
    `}};c=new WeakMap,g=new WeakMap,v=new WeakMap,h=new WeakMap,u=new WeakMap,d=new WeakMap,B(),y.styles=S(O);let b=y;p([m({type:Boolean,attribute:"no-border"})],b.prototype,"noBorder");p([m({type:Boolean})],b.prototype,"inverted");p([m({type:Number,attribute:"resize-delay"})],b.prototype,"resizeDelay");_(A,b);
