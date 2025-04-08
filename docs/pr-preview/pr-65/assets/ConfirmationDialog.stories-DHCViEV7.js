import{T as M,r as j,a as E,x as a}from"./lit-element-CxMangmT.js";import{e as U,i as q,t as G,d as Y,n as Z,a as F}from"./index-CloPWwpx.js";import{I as H,t as J,n as u,a as K,b as Q}from"./property-BA_4S1rq.js";import{e as V}from"./base-CShCMygk.js";import{d as X,a as tt,n as v,c as $,b as S}from"./slot-utils-khTkC4FZ.js";import{d as et}from"./index-CLV2ZjBO.js";import"./service-adapter-BqxTd8rK.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(t,e){return(o,n,r)=>{const f=d=>{var _;return((_=d.renderRoot)==null?void 0:_.querySelector(t))??null};return V(o,n,{get(){return f(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D="important",nt=" !"+D,z=U(class extends q{constructor(t){var e;if(super(t),t.type!==G.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const r=e[n];if(r!=null){this.ft.add(n);const f=typeof r=="string"&&r.endsWith(nt);n.includes("-")||f?o.setProperty(n,f?r.slice(0,-11):r,f?D:""):o[n]=r}}return M}}),rt=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.outer-container{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:var(--forge-spacing-medium, 16px);gap:var(--forge-spacing-medium, 16px);max-width:480px}.title-container{display:grid;grid-template-columns:1fr auto;align-items:start;gap:var(--forge-spacing-medium, 16px)}.close-button-container{height:24px;margin-block-start:-10px;margin-inline-end:-10px}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);text-wrap:balance;word-break:break-all}h1{margin:0}.message-container{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:inherit}.actions-container{display:flex;gap:var(--forge-spacing-medium, 16px);align-items:center;flex-wrap:wrap;flex-direction:row;justify-content:end}`;var it=Object.defineProperty,at=Object.getOwnPropertyDescriptor,k=t=>{throw TypeError(t)},c=(t,e,o,n)=>{for(var r=n>1?void 0:n?at(e,o):e,f=t.length-1,d;f>=0;f--)(d=t[f])&&(r=(n?d(e,o,r):d(r))||r);return n&&r&&it(e,o,r),r},x=(t,e,o)=>e.has(t)||k("Cannot "+o),l=(t,e,o)=>(x(t,e,"read from private field"),o?o.call(t):e.get(t)),B=(t,e,o)=>e.has(t)?k("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),st=(t,e,o,n)=>(x(t,e,"write to private field"),e.set(t,o),o),p=(t,e,o)=>(x(t,e,"access private method"),o),h,i,N,m,P,b,I,O,R,A,y,W,L;const lt="forge-confirmation-dialog";let s=class extends E{constructor(){super(...arguments),B(this,i),this.open=!1,this.isBusy=!1,this.busyLabel="Loading",B(this,h)}willUpdate(t){t.has("isBusy")&&st(this,h,this.isBusy&&this._primaryButtonRef?`${this._primaryButtonRef.clientWidth}px`:void 0)}render(){const t=this._slottedTitleNodes.length>0;return a`
      <forge-dialog
        @slotchange=${p(this,i,L)}
        @forge-dialog-before-close=${p(this,i,W)}
        @forge-dialog-close=${()=>this.isBusy=!1}
        fullscreen-threshold="0"
        ?open=${this.open}
        .label=${this.label||$(this._slottedTitleNodes)||""}
        .description=${this.description||$(this._slottedMessageNodes)||""}>
        <div class="outer-container">
          <div class="title-container" style=${z({display:t?"grid":"none"})}>
            ${l(this,i,N)}
            <div class="close-button-container">${l(this,i,P)}</div>
          </div>
          <div class="message-container">
            <slot name="message" id="confirmation-message"></slot>
          </div>
          <div class="actions-container">${l(this,i,R)} ${l(this,i,A)}</div>
        </div>
      </forge-dialog>
    `}};h=new WeakMap;i=new WeakSet;N=function(){const t=this._slottedTitleNodes.length>0;return S(t,()=>a` <h1>${l(this,i,m)}</h1>`,()=>a`${l(this,i,m)}`)};m=function(){return a`<slot name="title" id="confirmation-dialog-title" class="title"></slot> `};P=function(){return a`
      <forge-icon-button autofocus aria-label="Close confirmation dialog" @click=${()=>p(this,i,y).call(this,!1)}>
        <forge-icon name="close"></forge-icon>
      </forge-icon-button>
    `};b=function(){return a`<slot name="secondary-button-text" id="secondary-button-slot"></slot>`};I=function(){return this.isBusy?l(this,i,O):a`<slot name="primary-button-text" id="primary-button-slot">Confirm</slot>`};O=function(){return a`<forge-circular-progress slot="end" aria-label=${this.busyLabel}> </forge-circular-progress>`};R=function(){const t=this._slottedSecondaryButtonTextNodes.length>0;return S(t,()=>a` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          id="secondary-button"
          @click=${()=>p(this,i,y).call(this,!1)}>
          ${l(this,i,b)}
        </forge-button>`,()=>a`${l(this,i,b)}`)};A=function(){return a`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      style=${z({minWidth:l(this,h)})}
      @click=${()=>p(this,i,y).call(this,!0)}>
      ${l(this,i,I)}
    </forge-button>`};y=function(t,e="action",o){const n=new CustomEvent("forge-confirmation-dialog-action",{bubbles:!0,composed:!0,cancelable:!0,detail:{value:t,reason:e}});this.dispatchEvent(n),n.defaultPrevented&&o?o==null||o.preventDefault():n.defaultPrevented||(this.open=!1,this.isBusy=!1)};W=function(t){if(t.detail.reason==="backdrop"){t.preventDefault();return}p(this,i,y).call(this,!1,"light-dismiss",t)};L=function(t){const e=t.target.name;["title","secondary-button-text","primary-button-text"].includes(e)&&this.requestUpdate()};Y();X();tt();et();H.define([J]);s.styles=j(rt);c([u({type:Boolean,attribute:"open"})],s.prototype,"open",2);c([u()],s.prototype,"label",2);c([u()],s.prototype,"description",2);c([u({type:Boolean,attribute:"is-busy"})],s.prototype,"isBusy",2);c([u({type:String,attribute:"busy-label"})],s.prototype,"busyLabel",2);c([v({slot:"title",flatten:!0})],s.prototype,"_slottedTitleNodes",2);c([v({slot:"message",flatten:!0})],s.prototype,"_slottedMessageNodes",2);c([v({slot:"secondary-button-text",flatten:!0})],s.prototype,"_slottedSecondaryButtonTextNodes",2);c([ot("#primary-button")],s.prototype,"_primaryButtonRef",2);s=c([K(lt)],s);const ct="forge-confirmation-dialog",ft=Q("forge-confirmation-dialog-action"),pt={title:"Components/Confirmation Dialog",render:t=>{const e=F();function o(){e.value.open=!e.value.open}function n(r){ft(r),t.preventDefault&&r.preventDefault()}return a`
      <forge-button variant="raised" @click=${o}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${Z(e)}
        @forge-confirmation-dialog-action=${n}
        .isBusy=${t.isBusy}>
        ${t.title.length?a`<span slot="title">${t.title}</span>`:""}
        ${t.message.length?a`<span slot="message">${t.message}</span>`:""}
        ${t.secondaryButtonText.length?a`<span slot="secondary-button-text">${t.secondaryButtonText}</span>`:""}
        ${t.primaryButtonText.length?a`<span slot="primary-button-text">${t.primaryButtonText}</span>`:""}
      </forge-confirmation-dialog>
    `},component:ct,argTypes:{isBusy:{control:"boolean"},title:{control:"text"},message:{control:"text"},secondaryButtonText:{control:"text"},primaryButtonText:{control:"text"},preventDefault:{control:"boolean"}},args:{isBusy:!1,title:"Delete selected images?",message:"Images will be permanently removed from your account and all synced devices.",secondaryButtonText:"No",primaryButtonText:"Yes",preventDefault:!1}},g={};var C,w,T;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(T=(w=g.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const dt=["Demo"],xt=Object.freeze(Object.defineProperty({__proto__:null,Demo:g,__namedExportsOrder:dt,default:pt},Symbol.toStringTag,{value:"Module"}));export{xt as C,g as D};
