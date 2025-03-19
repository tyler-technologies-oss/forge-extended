import{T as B,r as w,a as T,x as a}from"./lit-element-CxMangmT.js";import{e as C,i as S,t as D,n as z,a as k}from"./ref-BAtbkH2N.js";import{e as A,a as N}from"./base-OKak0x2_.js";import{n as g,t as P}from"./property-D_Q-X6Xo.js";import{d as O,a as R,b as E,n as f,c as u,e as h}from"./slot-utils-Docw9srf.js";import"./service-adapter-CRnntHsK.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(t,e){return(o,n,r)=>{const l=c=>{var y;return((y=c.renderRoot)==null?void 0:y.querySelector(t))??null};return A(o,n,{get(){return l(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x="important",W=" !"+x,I=C(class extends S{constructor(t){var e;if(super(t),t.type!==D.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const r=e[n];if(r!=null){this.ft.add(n);const l=typeof r=="string"&&r.endsWith(W);n.includes("-")||l?o.setProperty(n,l?r.slice(0,-11):r,l?x:""):o[n]=r}}return B}}),M=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.outer-container{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:var(--forge-spacing-medium, 16px);gap:var(--forge-spacing-medium, 16px);max-width:480px}.title-message-container{box-sizing:border-box;display:flex;flex-direction:column;gap:var(--forge-spacing-medium, 16px)}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);text-wrap:balance;margin-block:0;padding-block:0}h1{margin:0}.message{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:inherit;margin-block:var(--forge-spacing-medium, 16px);margin-block-end:var(--forge-spacing-large, 24px)}.actions-container{display:flex;gap:var(--forge-spacing-medium, 16px);align-items:center;flex-wrap:wrap;flex-direction:row;justify-content:end}`;var j=Object.defineProperty,U=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},s=(t,e,o,n)=>{for(var r=n>1?void 0:n?U(e,o):e,l=t.length-1,c;l>=0;l--)(c=t[l])&&(r=(n?c(e,o,r):c(r))||r);return n&&r&&j(e,o,r),r},$=(t,e,o)=>e.has(t)||_("Cannot "+o),q=(t,e,o)=>($(t,e,"read from private field"),o?o.call(t):e.get(t)),G=(t,e,o)=>e.has(t)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),Y=(t,e,o,n)=>($(t,e,"write to private field"),e.set(t,o),o),d;const Z="forge-confirmation-dialog";let i=class extends T{constructor(){super(...arguments),this.open=!1,this.isBusy=!1,this.busyLabel="Loading",G(this,d)}get _title(){const t=this._slottedTitleNodes.length>0;return u(t,()=>a`<h1>${this._titleSlot}</h1>`,()=>a`${this._titleSlot}`)}get _titleSlot(){return a` <slot name="title" id="confirmation-dialog-title" class="title"></slot>`}get _secondaryButtonSlot(){return a` <slot name="secondary-button-text" id="secondary-button-slot"></slot>`}get _primaryButtonSlot(){return this.isBusy?this._busyIndicator:a`<slot name="primary-button-text" id="primary-button-slot">Confirm</slot>`}get _busyIndicator(){return a`<forge-circular-progress slot="end" aria-label=${this.busyLabel}> </forge-circular-progress>`}get _secondaryButton(){const t=this._slottedSecondaryButtonTextNodes.length>0;return u(t,()=>a` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          id="secondary-button"
          @click=${()=>this._onAction(!1)}>
          ${this._secondaryButtonSlot}
        </forge-button>`,()=>a`${this._secondaryButtonSlot}`)}get _primaryButton(){return a`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      style=${I({minWidth:q(this,d)})}
      @click=${()=>this._onAction(!0)}>
      ${this._primaryButtonSlot}
    </forge-button>`}willUpdate(t){t.has("isBusy")&&Y(this,d,this.isBusy&&this._primaryButtonRef?`${this._primaryButtonRef.clientWidth}px`:void 0)}render(){return a`
      <forge-dialog
        @slotchange=${this._handleSlotChange}
        @forge-dialog-before-close=${t=>this._onAction(!1,"light-dismiss",t)}
        @forge-dialog-close=${()=>this.isBusy=!1}
        fullscreen-threshold="0"
        ?open=${this.open}
        .label=${this.label||h(this._slottedTitleNodes)||""}
        .description=${this.description||h(this._slottedMessageNodes)||""}>
        <div class="outer-container">
          <div class="title-message-container">
            ${this._title}
            <slot name="message" id="confirmation-message" class="message"></slot>
          </div>
          <div class="actions-container">${this._secondaryButton} ${this._primaryButton}</div>
        </div>
      </forge-dialog>
    `}_onAction(t,e="action",o){const n=new CustomEvent("forge-confirmation-dialog-action",{bubbles:!0,composed:!0,cancelable:!0,detail:{value:t,type:e}});this.dispatchEvent(n),n.defaultPrevented&&o?o.preventDefault():n.defaultPrevented||(this.open=!1,this.isBusy=!1)}_handleSlotChange(t){const e=t.target.name;["title","secondary-button-text","primary-button-text"].includes(e)&&this.requestUpdate()}};d=new WeakMap;O();R();E();i.styles=w(M);s([g({type:Boolean,attribute:"open"})],i.prototype,"open",2);s([g()],i.prototype,"label",2);s([g()],i.prototype,"description",2);s([g({type:Boolean,attribute:"is-busy"})],i.prototype,"isBusy",2);s([g({type:String,attribute:"busy-label"})],i.prototype,"busyLabel",2);s([f({slot:"title",flatten:!0})],i.prototype,"_slottedTitleNodes",2);s([f({slot:"message",flatten:!0})],i.prototype,"_slottedMessageNodes",2);s([f({slot:"secondary-button-text",flatten:!0})],i.prototype,"_slottedSecondaryButtonTextNodes",2);s([L("#primary-button")],i.prototype,"_primaryButtonRef",2);i=s([P(Z)],i);const F="forge-confirmation-dialog",H=N("forge-confirmation-dialog-action"),J={title:"Components/Confirmation Dialog",render:t=>{const e=k();function o(){e.value.open=!e.value.open}function n(r){H(r),t.preventDefault&&r.preventDefault()}return a`
      <forge-button variant="raised" @click=${o}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${z(e)}
        @forge-confirmation-dialog-action=${n}
        .isBusy=${t.isBusy}>
        ${t.title.length?a`<span slot="title">${t.title}</span>`:""}
        ${t.message.length?a`<span slot="message">${t.message}</span>`:""}
        ${t.secondaryButtonText.length?a`<span slot="secondary-button-text">${t.secondaryButtonText}</span>`:""}
        ${t.primaryButtonText.length?a`<span slot="primary-button-text">${t.primaryButtonText}</span>`:""}
      </forge-confirmation-dialog>
    `},component:F,argTypes:{isBusy:{control:"boolean"},title:{control:"text"},message:{control:"text"},secondaryButtonText:{control:"text"},primaryButtonText:{control:"text"},preventDefault:{control:"boolean"}},args:{isBusy:!1,title:"Delete selected images?",message:"Images will be permanently removed from your account and all synced devices.",secondaryButtonText:"No",primaryButtonText:"Yes",preventDefault:!1}},p={};var m,b,v;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const K=["Demo"],nt=Object.freeze(Object.defineProperty({__proto__:null,Demo:p,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{nt as C,p as D};
