import{T as O,r as R,a as E,x as r}from"./lit-element-CxMangmT.js";import{e as W,i as L,t as M,d as j,a as U,b as q,n as m,c as v,f as C,g as G,h as Y}from"./slot-utils-D6l2wdEE.js";import{e as Z,I as F,t as H,n as d,a as J,b as K}from"./base-DchQP-E2.js";import{d as Q}from"./index-Dturxtqb.js";import"./service-adapter-BgeOCrvH.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(t,e){return(o,n,i)=>{const p=f=>{var b;return((b=f.renderRoot)==null?void 0:b.querySelector(t))??null};return Z(o,n,{get(){return p(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w="important",X=" !"+w,T=W(class extends L{constructor(t){var e;if(super(t),t.type!==M.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const i=e[n];if(i!=null){this.ft.add(n);const p=typeof i=="string"&&i.endsWith(X);n.includes("-")||p?o.setProperty(n,p?i.slice(0,-11):i,p?w:""):o[n]=i}}return O}}),tt=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.outer-container{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:var(--forge-spacing-medium, 16px);gap:var(--forge-spacing-medium, 16px);max-width:480px}.title-container{display:grid;grid-template-columns:1fr auto;align-items:start;gap:var(--forge-spacing-medium, 16px)}.close-button-container{height:24px;margin-block-start:-10px;margin-inline-end:-10px}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);text-wrap:balance;word-break:break-all}h1{margin:0}.message-container{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:inherit}.actions-container{display:flex;gap:var(--forge-spacing-medium, 16px);align-items:center;flex-wrap:wrap;flex-direction:row;justify-content:end}`;var et=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,S=t=>{throw TypeError(t)},c=(t,e,o,n)=>{for(var i=n>1?void 0:n?ot(e,o):e,p=t.length-1,f;p>=0;p--)(f=t[p])&&(i=(n?f(e,o,i):f(i))||i);return n&&i&&et(e,o,i),i},D=(t,e,o)=>e.has(t)||S("Cannot "+o),l=(t,e,o)=>(D(t,e,"read from private field"),o?o.call(t):e.get(t)),x=(t,e,o)=>e.has(t)?S("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),nt=(t,e,o,n)=>(D(t,e,"write to private field"),e.set(t,o),o),u,a,z,y,k,h,A,N,P,I;const it="forge-confirmation-dialog";let s=class extends E{constructor(){super(...arguments),x(this,a),this.open=!1,this.isBusy=!1,this.busyLabel="Loading",x(this,u)}willUpdate(t){t.has("isBusy")&&nt(this,u,this.isBusy&&this._primaryButtonRef?`${this._primaryButtonRef.clientWidth}px`:void 0)}render(){const t=this._slottedTitleNodes.length>0;return r`
      <forge-dialog
        @slotchange=${this._handleSlotChange}
        @forge-dialog-before-close=${e=>this._onAction(!1,"light-dismiss",e)}
        @forge-dialog-close=${()=>this.isBusy=!1}
        fullscreen-threshold="0"
        ?open=${this.open}
        .label=${this.label||v(this._slottedTitleNodes)||""}
        .description=${this.description||v(this._slottedMessageNodes)||""}>
        <div class="outer-container">
          <div class="title-container" style=${T({display:t?"grid":"none"})}>
            ${l(this,a,z)}
            <div class="close-button-container">${l(this,a,k)}</div>
          </div>
          <div class="message-container">
            <slot name="message" id="confirmation-message"></slot>
          </div>
          <div class="actions-container">${l(this,a,P)} ${l(this,a,I)}</div>
        </div>
      </forge-dialog>
    `}_onAction(t,e="action",o){const n=new CustomEvent("forge-confirmation-dialog-action",{bubbles:!0,composed:!0,cancelable:!0,detail:{value:t,type:e}});this.dispatchEvent(n),n.defaultPrevented&&o?o.preventDefault():n.defaultPrevented||(this.open=!1,this.isBusy=!1)}_handleSlotChange(t){const e=t.target.name;["title","secondary-button-text","primary-button-text"].includes(e)&&this.requestUpdate()}};u=new WeakMap;a=new WeakSet;z=function(){const t=this._slottedTitleNodes.length>0;return C(t,()=>r` <h1>${l(this,a,y)}</h1>`,()=>r`${l(this,a,y)}`)};y=function(){return r`<slot name="title" id="confirmation-dialog-title" class="title"></slot> `};k=function(){return r`
      <forge-icon-button autofocus aria-label="Close confirmation dialog" @click=${()=>this._onAction(!1)}>
        <forge-icon name="close"></forge-icon>
      </forge-icon-button>
    `};h=function(){return r`<slot name="secondary-button-text" id="secondary-button-slot"></slot>`};A=function(){return this.isBusy?l(this,a,N):r`<slot name="primary-button-text" id="primary-button-slot">Confirm</slot>`};N=function(){return r`<forge-circular-progress slot="end" aria-label=${this.busyLabel}> </forge-circular-progress>`};P=function(){const t=this._slottedSecondaryButtonTextNodes.length>0;return C(t,()=>r` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          id="secondary-button"
          @click=${()=>this._onAction(!1)}>
          ${l(this,a,h)}
        </forge-button>`,()=>r`${l(this,a,h)}`)};I=function(){return r`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      style=${T({minWidth:l(this,u)})}
      @click=${()=>this._onAction(!0)}>
      ${l(this,a,A)}
    </forge-button>`};j();U();q();Q();F.define([H]);s.styles=R(tt);c([d({type:Boolean,attribute:"open"})],s.prototype,"open",2);c([d()],s.prototype,"label",2);c([d()],s.prototype,"description",2);c([d({type:Boolean,attribute:"is-busy"})],s.prototype,"isBusy",2);c([d({type:String,attribute:"busy-label"})],s.prototype,"busyLabel",2);c([m({slot:"title",flatten:!0})],s.prototype,"_slottedTitleNodes",2);c([m({slot:"message",flatten:!0})],s.prototype,"_slottedMessageNodes",2);c([m({slot:"secondary-button-text",flatten:!0})],s.prototype,"_slottedSecondaryButtonTextNodes",2);c([V("#primary-button")],s.prototype,"_primaryButtonRef",2);s=c([J(it)],s);const rt="forge-confirmation-dialog",at=K("forge-confirmation-dialog-action"),st={title:"Components/Confirmation Dialog",render:t=>{const e=Y();function o(){e.value.open=!e.value.open}function n(i){at(i),t.preventDefault&&i.preventDefault()}return r`
      <forge-button variant="raised" @click=${o}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${G(e)}
        @forge-confirmation-dialog-action=${n}
        .isBusy=${t.isBusy}>
        ${t.title.length?r`<span slot="title">${t.title}</span>`:""}
        ${t.message.length?r`<span slot="message">${t.message}</span>`:""}
        ${t.secondaryButtonText.length?r`<span slot="secondary-button-text">${t.secondaryButtonText}</span>`:""}
        ${t.primaryButtonText.length?r`<span slot="primary-button-text">${t.primaryButtonText}</span>`:""}
      </forge-confirmation-dialog>
    `},component:rt,argTypes:{isBusy:{control:"boolean"},title:{control:"text"},message:{control:"text"},secondaryButtonText:{control:"text"},primaryButtonText:{control:"text"},preventDefault:{control:"boolean"}},args:{isBusy:!1,title:"Delete selected images?",message:"Images will be permanently removed from your account and all synced devices.",secondaryButtonText:"No",primaryButtonText:"Yes",preventDefault:!1}},g={};var _,$,B;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(B=($=g.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const lt=["Demo"],ut=Object.freeze(Object.defineProperty({__proto__:null,Demo:g,__namedExportsOrder:lt,default:st},Symbol.toStringTag,{value:"Module"}));export{ut as C,g as D};
