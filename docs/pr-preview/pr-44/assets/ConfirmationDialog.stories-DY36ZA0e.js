import{T as B,r as T,a as w,x as i}from"./lit-element-CxMangmT.js";import{e as C,n as g,t as S}from"./base-Bk1rqh9v.js";import{e as z,i as D,t as A,d as L,a as k,b as P,n as f,c as u,f as h,g as N,h as O}from"./slot-utils-D9dibCyK.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(t,e){return(o,n,r)=>{const a=c=>{var y;return((y=c.renderRoot)==null?void 0:y.querySelector(t))??null};return C(o,n,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x="important",R=" !"+x,W=z(class extends D{constructor(t){var e;if(super(t),t.type!==A.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const r=e[n];if(r!=null){this.ft.add(n);const a=typeof r=="string"&&r.endsWith(R);n.includes("-")||a?o.setProperty(n,a?r.slice(0,-11):r,a?x:""):o[n]=r}}return B}}),I=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:flex;flex-direction:column}.outer-container{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:var(--forge-spacing-medium, 16px);gap:var(--forge-spacing-medium, 16px);max-width:480px}.title-message-container{box-sizing:border-box;display:flex;flex-direction:column;gap:var(--forge-spacing-medium, 16px)}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);text-wrap:balance;margin-block:0;padding-block:0}h1{margin:0}.message{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:inherit;margin-block:var(--forge-spacing-medium, 16px);margin-block-end:var(--forge-spacing-large, 24px)}.actions-container{display:flex;gap:var(--forge-spacing-medium, 16px);align-items:center;flex-wrap:wrap;flex-direction:row;justify-content:end}`;var M=Object.defineProperty,j=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},l=(t,e,o,n)=>{for(var r=n>1?void 0:n?j(e,o):e,a=t.length-1,c;a>=0;a--)(c=t[a])&&(r=(n?c(e,o,r):c(r))||r);return n&&r&&M(e,o,r),r},$=(t,e,o)=>e.has(t)||_("Cannot "+o),U=(t,e,o)=>($(t,e,"read from private field"),o?o.call(t):e.get(t)),q=(t,e,o)=>e.has(t)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),G=(t,e,o,n)=>($(t,e,"write to private field"),e.set(t,o),o),d;const Y="forge-confirmation-dialog";let s=class extends w{constructor(){super(...arguments),this.open=!1,this.isBusy=!1,this.busyLabel="Loading",q(this,d)}get _title(){const t=this._slottedTitleNodes.length>0;return u(t,()=>i`<h1>${this._titleSlot}</h1>`,()=>i`${this._titleSlot}`)}get _titleSlot(){return i` <slot name="title" id="confirmation-dialog-title" class="title"></slot>`}get _secondaryButtonSlot(){return i` <slot name="secondary-button-text" id="secondary-button-slot"></slot>`}get _primaryButtonSlot(){return this.isBusy?this._busyIndicator:i`<slot name="primary-button-text" id="primary-button-slot">Confirm</slot>`}get _busyIndicator(){return i`<forge-circular-progress slot="end" aria-label=${this.busyLabel}> </forge-circular-progress>`}get _secondaryButton(){const t=this._slottedSecondaryButtonTextNodes.length>0;return u(t,()=>i` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          id="secondary-button"
          @click=${()=>this._onAction(!1)}>
          ${this._secondaryButtonSlot}
        </forge-button>`,()=>i`${this._secondaryButtonSlot}`)}get _primaryButton(){return i`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      style=${W({minWidth:U(this,d)})}
      @click=${()=>this._onAction(!0)}>
      ${this._primaryButtonSlot}
    </forge-button>`}willUpdate(t){var e;t.has("isBusy")&&G(this,d,this.isBusy?((e=this._primaryButtonRef)==null?void 0:e.clientWidth)+"px":void 0)}render(){return i`
      <forge-dialog
        @slotchange=${this._handleSlotChange}
        fullscreen-threshold="0"
        ?open=${this.open}
        @forge-dialog-close=${()=>this.isBusy=!1}
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
    `}_onAction(t){const e=new CustomEvent("forge-confirmation-dialog-action",{bubbles:!0,cancelable:!0,detail:{primaryAction:t}});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1,this.isBusy=!1)}_handleSlotChange(t){const e=t.target.name;["title","secondary-button-text","primary-button-text"].includes(e)&&this.requestUpdate()}};d=new WeakMap;L();k();P();s.styles=T(I);l([g({type:Boolean,attribute:"open"})],s.prototype,"open",2);l([g()],s.prototype,"label",2);l([g()],s.prototype,"description",2);l([g({type:Boolean,attribute:"is-busy"})],s.prototype,"isBusy",2);l([g({type:String,attribute:"busy-label"})],s.prototype,"busyLabel",2);l([f({slot:"title",flatten:!0})],s.prototype,"_slottedTitleNodes",2);l([f({slot:"message",flatten:!0})],s.prototype,"_slottedMessageNodes",2);l([f({slot:"secondary-button-text",flatten:!0})],s.prototype,"_slottedSecondaryButtonTextNodes",2);l([E("#primary-button")],s.prototype,"_primaryButtonRef",2);s=l([S(Y)],s);const Z="forge-confirmation-dialog",F={title:"Components/Confirmation Dialog",render:t=>{const e=O();function o(){e.value.open=!0}function n(){e.value.open=!1}function r(a){if(console.log(a.detail.primaryAction),a.detail.primaryAction)if(t.simulateAsync)e.value.isBusy=!0,setTimeout(()=>{n()},2500);else{n();return}else{n();return}}return i`
      <forge-button variant="raised" @click=${o}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${N(e)}
        @forge-confirmation-dialog-action=${a=>r(a)}
        @forge-dialog-close=${n}
        ?open=${t.open}
        busy-label=${t.ariaLabelLoading}
        .isBusy=${t.isBusy}>
        ${t.title.length?i`<span slot="title">${t.title}</span>`:""}
        ${t.message.length?i`<span slot="message">${t.message}</span>`:""}
        ${t.secondaryButtonText.length?i`<span slot="secondary-button-text">${t.secondaryButtonText}</span>`:""}
        ${t.primaryButtonText.length?i`<span slot="primary-button-text">${t.primaryButtonText}</span>`:""}
      </forge-confirmation-dialog>
    `},component:Z,argTypes:{open:{control:"boolean"},isBusy:{control:"boolean"},title:{control:"text"},message:{control:"text"},ariaLabelLoading:{control:"text"},secondaryButtonText:{control:"text"},primaryButtonText:{control:"text"},simulateAsync:{control:"boolean"}},args:{open:!1,isBusy:!1,title:"Delete selected images?",message:"Images will be permanently removed from your account and all synced devices.",ariaLabelLoading:"Loading data",secondaryButtonText:"No",primaryButtonText:"Yes",simulateAsync:!1}},p={};var m,b,v;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const H=["Demo"],V=Object.freeze(Object.defineProperty({__proto__:null,Demo:p,__namedExportsOrder:H,default:F},Symbol.toStringTag,{value:"Module"}));export{V as C,p as D};
