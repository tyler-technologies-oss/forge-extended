import{T as B,r as C,a as w,x as i}from"./lit-element-CxMangmT.js";import{e as T,i as S,t as D,d as z,a as A,b as I,n as f,c as k,f as u,g as N,h as P}from"./slot-utils-CJMZ2nQc.js";import{e as O,I as R,t as E,n as d,a as L,b as W}from"./base-DchQP-E2.js";import{d as M}from"./index-Dturxtqb.js";import"./service-adapter-BgeOCrvH.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(t,e){return(o,n,r)=>{const l=c=>{var y;return((y=c.renderRoot)==null?void 0:y.querySelector(t))??null};return O(o,n,{get(){return l(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x="important",U=" !"+x,h=T(class extends S{constructor(t){var e;if(super(t),t.type!==D.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const r=e[n];if(r!=null){this.ft.add(n);const l=typeof r=="string"&&r.endsWith(U);n.includes("-")||l?o.setProperty(n,l?r.slice(0,-11):r,l?x:""):o[n]=r}}return B}}),q=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.outer-container{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:var(--forge-spacing-medium, 16px);gap:var(--forge-spacing-medium, 16px);max-width:480px}.title-container{display:grid;grid-template-columns:1fr auto;align-items:start;gap:var(--forge-spacing-medium, 16px)}.close-button-container{height:24px;margin-block-start:-10px}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);text-wrap:balance;word-break:break-all}h1{margin:0}.message-container{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:inherit;box-sizing:border-box;display:flex;flex-direction:column;gap:var(--forge-spacing-medium, 16px)}.actions-container{display:flex;gap:var(--forge-spacing-medium, 16px);align-items:center;flex-wrap:wrap;flex-direction:row;justify-content:end}`;var G=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},s=(t,e,o,n)=>{for(var r=n>1?void 0:n?Y(e,o):e,l=t.length-1,c;l>=0;l--)(c=t[l])&&(r=(n?c(e,o,r):c(r))||r);return n&&r&&G(e,o,r),r},$=(t,e,o)=>e.has(t)||_("Cannot "+o),Z=(t,e,o)=>($(t,e,"read from private field"),o?o.call(t):e.get(t)),F=(t,e,o)=>e.has(t)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),H=(t,e,o,n)=>($(t,e,"write to private field"),e.set(t,o),o),g;const J="forge-confirmation-dialog";let a=class extends w{constructor(){super(...arguments),this.open=!1,this.isBusy=!1,this.busyLabel="Loading",F(this,g)}get _title(){return i` <h1>${this._titleSlot}</h1>`}get _titleSlot(){return i` <slot name="title" id="confirmation-dialog-title" class="title"></slot> `}get _closeIconButton(){return i`
      <forge-icon-button
        autofocus
        aria-label="Close confirmation dialog"
        class="close-button"
        @click=${()=>this._onAction(!1)}>
        <forge-icon name="close"></forge-icon>
      </forge-icon-button>
    `}get _secondaryButtonSlot(){return i` <slot name="secondary-button-text" id="secondary-button-slot"></slot>`}get _primaryButtonSlot(){return this.isBusy?this._busyIndicator:i`<slot name="primary-button-text" id="primary-button-slot">Confirm</slot>`}get _busyIndicator(){return i`<forge-circular-progress slot="end" aria-label=${this.busyLabel}> </forge-circular-progress>`}get _secondaryButton(){const t=this._slottedSecondaryButtonTextNodes.length>0;return k(t,()=>i` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          id="secondary-button"
          @click=${()=>this._onAction(!1)}>
          ${this._secondaryButtonSlot}
        </forge-button>`,()=>i`${this._secondaryButtonSlot}`)}get _primaryButton(){return i`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      style=${h({minWidth:Z(this,g)})}
      @click=${()=>this._onAction(!0)}>
      ${this._primaryButtonSlot}
    </forge-button>`}willUpdate(t){t.has("isBusy")&&H(this,g,this.isBusy&&this._primaryButtonRef?`${this._primaryButtonRef.clientWidth}px`:void 0)}render(){const t=this._slottedTitleNodes.length>0;return i`
      <forge-dialog
        @slotchange=${this._handleSlotChange}
        @forge-dialog-before-close=${e=>this._onAction(!1,"light-dismiss",e)}
        @forge-dialog-close=${()=>this.isBusy=!1}
        fullscreen-threshold="0"
        ?open=${this.open}
        .label=${this.label||u(this._slottedTitleNodes)||""}
        .description=${this.description||u(this._slottedMessageNodes)||""}>
        <div class="outer-container">
          <div class="title-container" style=${h({display:t?"grid":"none"})}>
            ${this._title}
            <div class="close-button-container">${this._closeIconButton}</div>
          </div>
          <div class="message-container">
            <slot name="message" id="confirmation-message"></slot>
          </div>
          <div class="actions-container">${this._secondaryButton} ${this._primaryButton}</div>
        </div>
      </forge-dialog>
    `}_onAction(t,e="action",o){const n=new CustomEvent("forge-confirmation-dialog-action",{bubbles:!0,composed:!0,cancelable:!0,detail:{value:t,type:e}});this.dispatchEvent(n),n.defaultPrevented&&o?o.preventDefault():n.defaultPrevented||(this.open=!1,this.isBusy=!1)}_handleSlotChange(t){const e=t.target.name;["title","secondary-button-text","primary-button-text"].includes(e)&&this.requestUpdate()}};g=new WeakMap;z();A();I();M();R.define([E]);a.styles=C(q);s([d({type:Boolean,attribute:"open"})],a.prototype,"open",2);s([d()],a.prototype,"label",2);s([d()],a.prototype,"description",2);s([d({type:Boolean,attribute:"is-busy"})],a.prototype,"isBusy",2);s([d({type:String,attribute:"busy-label"})],a.prototype,"busyLabel",2);s([f({slot:"title",flatten:!0})],a.prototype,"_slottedTitleNodes",2);s([f({slot:"message",flatten:!0})],a.prototype,"_slottedMessageNodes",2);s([f({slot:"secondary-button-text",flatten:!0})],a.prototype,"_slottedSecondaryButtonTextNodes",2);s([j("#primary-button")],a.prototype,"_primaryButtonRef",2);a=s([L(J)],a);const K="forge-confirmation-dialog",Q=W("forge-confirmation-dialog-action"),V={title:"Components/Confirmation Dialog",render:t=>{const e=P();function o(){e.value.open=!e.value.open}function n(r){Q(r),t.preventDefault&&r.preventDefault()}return i`
      <forge-button variant="raised" @click=${o}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${N(e)}
        @forge-confirmation-dialog-action=${n}
        .isBusy=${t.isBusy}>
        ${t.title.length?i`<span slot="title">${t.title}</span>`:""}
        ${t.message.length?i`<span slot="message">${t.message}</span>`:""}
        ${t.secondaryButtonText.length?i`<span slot="secondary-button-text">${t.secondaryButtonText}</span>`:""}
        ${t.primaryButtonText.length?i`<span slot="primary-button-text">${t.primaryButtonText}</span>`:""}
      </forge-confirmation-dialog>
    `},component:K,argTypes:{isBusy:{control:"boolean"},title:{control:"text"},message:{control:"text"},secondaryButtonText:{control:"text"},primaryButtonText:{control:"text"},preventDefault:{control:"boolean"}},args:{isBusy:!1,title:"Delete selected images?",message:"Images will be permanently removed from your account and all synced devices.",secondaryButtonText:"No",primaryButtonText:"Yes",preventDefault:!1}},p={};var m,b,v;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const X=["Demo"],it=Object.freeze(Object.defineProperty({__proto__:null,Demo:p,__namedExportsOrder:X,default:V},Symbol.toStringTag,{value:"Module"}));export{it as C,p as D};
