import{r as R,i as M,x as n}from"./iframe-fUKA8guk.js";import{n as P,a as W}from"./ref-Cr8HMydw.js";import{I as A,k as E,e as L}from"./custom-element-BytZEonD.js";import{n as y}from"./property-25XFDHgZ.js";import{e as U}from"./base-CShCMygk.js";import{n as _,a as B}from"./when-DfnyT8j1.js";import{o as C}from"./style-map-fq989fZ8.js";import{d as q,a as Y,c as $}from"./slot-utils-DvRwc74s.js";import{d as j}from"./index-BaZ8FRca.js";import{d as G}from"./index-DLUsvbss.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(t,e){return(o,r,s)=>{const f=g=>g.renderRoot?.querySelector(t)??null;return U(o,r,{get(){return f(this)}})}}const F=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.outer-container{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:var(--forge-spacing-medium, 16px);gap:var(--forge-spacing-medium, 16px);max-width:480px}.title-container{display:grid;grid-template-columns:1fr auto;align-items:start;gap:var(--forge-spacing-medium, 16px)}.close-button-container{height:24px;margin-block-start:-10px;margin-inline-end:-10px}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);text-wrap:balance;word-break:break-all}h1{margin:0}.message-container{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:inherit}.actions-container{display:flex;gap:var(--forge-spacing-medium, 16px);align-items:center;flex-wrap:wrap;flex-direction:row;justify-content:end}`;var H=Object.defineProperty,J=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},c=(t,e,o,r)=>{for(var s=r>1?void 0:r?J(e,o):e,f=t.length-1,g;f>=0;f--)(g=t[f])&&(s=(r?g(e,o,s):g(s))||s);return r&&s&&H(e,o,s),s},x=(t,e,o)=>e.has(t)||w("Cannot "+o),l=(t,e,o)=>(x(t,e,"read from private field"),o?o.call(t):e.get(t)),u=(t,e,o)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),Q=(t,e,o,r)=>(x(t,e,"write to private field"),e.set(t,o),o),p=(t,e,o)=>(x(t,e,"access private method"),o),m,i,T,v,D,b,S,z,k,N,h,O,I;const V="forge-confirmation-dialog";let a=class extends M{constructor(){super(...arguments),u(this,i),this.open=!1,this.isBusy=!1,this.busyLabel="Loading",u(this,m),u(this,v,n`<slot name="title" id="confirmation-dialog-title" class="title"></slot> `),u(this,b,n`<slot name="secondary-button-text" id="secondary-button-slot"></slot>`)}willUpdate(t){t.has("isBusy")&&Q(this,m,this.isBusy&&this._primaryButtonRef?`${this._primaryButtonRef.clientWidth}px`:void 0)}render(){const t=this._slottedTitleNodes.length>0;return n`
      <forge-dialog
        @slotchange=${p(this,i,I)}
        @forge-dialog-before-close=${p(this,i,O)}
        @forge-dialog-close=${()=>this.isBusy=!1}
        fullscreen-threshold="0"
        ?open=${this.open}
        .label=${this.label||$(this._slottedTitleNodes)||""}
        .description=${this.description||$(this._slottedMessageNodes)||""}>
        <div class="outer-container">
          <div class="title-container" style=${C({display:t?"grid":"none"})}>
            ${l(this,i,T)}
            <div class="close-button-container">${l(this,i,D)}</div>
          </div>
          <div class="message-container">
            <slot name="message" id="confirmation-message"></slot>
          </div>
          <div class="actions-container">${l(this,i,k)} ${l(this,i,N)}</div>
        </div>
      </forge-dialog>
    `}};m=new WeakMap;i=new WeakSet;T=function(){const t=this._slottedTitleNodes.length>0;return B(t,()=>n` <h1>${l(this,v)}</h1>`,()=>n`${l(this,v)}`)};v=new WeakMap;D=function(){return n`
      <forge-icon-button autofocus aria-label="Close confirmation dialog" @click=${()=>p(this,i,h).call(this,!1)}>
        <forge-icon name="close"></forge-icon>
      </forge-icon-button>
    `};b=new WeakMap;S=function(){return this.isBusy?l(this,i,z):n`<slot name="primary-button-text" id="primary-button-slot">Confirm</slot>`};z=function(){return n`<forge-circular-progress slot="end" aria-label=${this.busyLabel}> </forge-circular-progress>`};k=function(){const t=this._slottedSecondaryButtonTextNodes.length>0;return B(t,()=>n` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          id="secondary-button"
          @click=${()=>p(this,i,h).call(this,!1)}>
          ${l(this,b)}
        </forge-button>`,()=>n`${l(this,b)}`)};N=function(){return n`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      style=${C({minWidth:l(this,m)})}
      @click=${()=>p(this,i,h).call(this,!0)}>
      ${l(this,i,S)}
    </forge-button>`};h=function(t,e="action",o){const r=new CustomEvent("forge-confirmation-dialog-action",{bubbles:!0,composed:!0,cancelable:!0,detail:{value:t,reason:e}});this.dispatchEvent(r),r.defaultPrevented&&o?o?.preventDefault():r.defaultPrevented||(this.open=!1,this.isBusy=!1)};O=function(t){if(t.detail.reason==="backdrop"){t.preventDefault();return}p(this,i,h).call(this,!1,"light-dismiss",t)};I=function(t){const e=t.target.name;["title","secondary-button-text","primary-button-text"].includes(e)&&this.requestUpdate()};G();q();Y();j();A.define([E]);a.styles=R(F);c([y({type:Boolean,attribute:"open"})],a.prototype,"open",2);c([y()],a.prototype,"label",2);c([y()],a.prototype,"description",2);c([y({type:Boolean,attribute:"is-busy"})],a.prototype,"isBusy",2);c([y({type:String,attribute:"busy-label"})],a.prototype,"busyLabel",2);c([_({slot:"title",flatten:!0})],a.prototype,"_slottedTitleNodes",2);c([_({slot:"message",flatten:!0})],a.prototype,"_slottedMessageNodes",2);c([_({slot:"secondary-button-text",flatten:!0})],a.prototype,"_slottedSecondaryButtonTextNodes",2);c([K("#primary-button")],a.prototype,"_primaryButtonRef",2);a=c([L(V)],a);const{action:X}=__STORYBOOK_MODULE_ACTIONS__,Z="forge-confirmation-dialog",tt=X("forge-confirmation-dialog-action"),et={title:"Components/Confirmation Dialog",render:t=>{const e=W();function o(){e.value.open=!e.value.open}function r(s){tt(s),t.preventDefault&&s.preventDefault()}return n`
      <forge-button variant="raised" @click=${o}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${P(e)}
        @forge-confirmation-dialog-action=${r}
        .isBusy=${t.isBusy}>
        ${t.title.length?n`<span slot="title">${t.title}</span>`:""}
        ${t.message.length?n`<span slot="message">${t.message}</span>`:""}
        ${t.secondaryButtonText.length?n`<span slot="secondary-button-text">${t.secondaryButtonText}</span>`:""}
        ${t.primaryButtonText.length?n`<span slot="primary-button-text">${t.primaryButtonText}</span>`:""}
      </forge-confirmation-dialog>
    `},component:Z,argTypes:{isBusy:{control:"boolean"},title:{control:"text"},message:{control:"text"},secondaryButtonText:{control:"text"},primaryButtonText:{control:"text"},preventDefault:{control:"boolean"}},args:{isBusy:!1,title:"Delete selected images?",message:"Images will be permanently removed from your account and all synced devices.",secondaryButtonText:"No",primaryButtonText:"Yes",preventDefault:!1}},d={};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};const ot=["Demo"],dt=Object.freeze(Object.defineProperty({__proto__:null,Demo:d,__namedExportsOrder:ot,default:et},Symbol.toStringTag,{value:"Module"}));export{dt as C,d as D};
