import{T as R,r as M,i as W,x as r}from"./iframe-BHL0eVuP.js";import{e as A,i as E,t as L,d as U,n as j,a as q}from"./index-DJQVvxat.js";import{I as Y,t as G,n as u,a as K}from"./property-DCzK9niB.js";import{e as Z}from"./base-CShCMygk.js";import{d as F,a as H,n as x,c as $,b as B}from"./slot-utils-BcWraHY2.js";import{d as J}from"./index-0X7F8_aL.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Q(t,e){return(o,n,i)=>{const p=d=>d.renderRoot?.querySelector(t)??null;return Z(o,n,{get(){return p(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w="important",V=" !"+w,C=A(class extends E{constructor(t){if(super(t),t.type!==L.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const n=t[o];return n==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?o.removeProperty(n):o[n]=null);for(const n in e){const i=e[n];if(i!=null){this.ft.add(n);const p=typeof i=="string"&&i.endsWith(V);n.includes("-")||p?o.setProperty(n,p?i.slice(0,-11):i,p?w:""):o[n]=i}}return R}}),X=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.outer-container{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:var(--forge-spacing-medium, 16px);gap:var(--forge-spacing-medium, 16px);max-width:480px}.title-container{display:grid;grid-template-columns:1fr auto;align-items:start;gap:var(--forge-spacing-medium, 16px)}.close-button-container{height:24px;margin-block-start:-10px;margin-inline-end:-10px}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);text-wrap:balance;word-break:break-all}h1{margin:0}.message-container{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:inherit}.actions-container{display:flex;gap:var(--forge-spacing-medium, 16px);align-items:center;flex-wrap:wrap;flex-direction:row;justify-content:end}`;var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,T=t=>{throw TypeError(t)},c=(t,e,o,n)=>{for(var i=n>1?void 0:n?et(e,o):e,p=t.length-1,d;p>=0;p--)(d=t[p])&&(i=(n?d(e,o,i):d(i))||i);return n&&i&&tt(e,o,i),i},_=(t,e,o)=>e.has(t)||T("Cannot "+o),l=(t,e,o)=>(_(t,e,"read from private field"),o?o.call(t):e.get(t)),y=(t,e,o)=>e.has(t)?T("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),ot=(t,e,o,n)=>(_(t,e,"write to private field"),e.set(t,o),o),f=(t,e,o)=>(_(t,e,"access private method"),o),m,a,D,v,S,b,z,k,O,N,h,I,P;const nt="forge-confirmation-dialog";let s=class extends W{constructor(){super(...arguments),y(this,a),this.open=!1,this.isBusy=!1,this.busyLabel="Loading",y(this,m),y(this,v,r`<slot name="title" id="confirmation-dialog-title" class="title"></slot> `),y(this,b,r`<slot name="secondary-button-text" id="secondary-button-slot"></slot>`)}willUpdate(t){t.has("isBusy")&&ot(this,m,this.isBusy&&this._primaryButtonRef?`${this._primaryButtonRef.clientWidth}px`:void 0)}render(){const t=this._slottedTitleNodes.length>0;return r`
      <forge-dialog
        @slotchange=${f(this,a,P)}
        @forge-dialog-before-close=${f(this,a,I)}
        @forge-dialog-close=${()=>this.isBusy=!1}
        fullscreen-threshold="0"
        ?open=${this.open}
        .label=${this.label||$(this._slottedTitleNodes)||""}
        .description=${this.description||$(this._slottedMessageNodes)||""}>
        <div class="outer-container">
          <div class="title-container" style=${C({display:t?"grid":"none"})}>
            ${l(this,a,D)}
            <div class="close-button-container">${l(this,a,S)}</div>
          </div>
          <div class="message-container">
            <slot name="message" id="confirmation-message"></slot>
          </div>
          <div class="actions-container">${l(this,a,O)} ${l(this,a,N)}</div>
        </div>
      </forge-dialog>
    `}};m=new WeakMap;a=new WeakSet;D=function(){const t=this._slottedTitleNodes.length>0;return B(t,()=>r` <h1>${l(this,v)}</h1>`,()=>r`${l(this,v)}`)};v=new WeakMap;S=function(){return r`
      <forge-icon-button autofocus aria-label="Close confirmation dialog" @click=${()=>f(this,a,h).call(this,!1)}>
        <forge-icon name="close"></forge-icon>
      </forge-icon-button>
    `};b=new WeakMap;z=function(){return this.isBusy?l(this,a,k):r`<slot name="primary-button-text" id="primary-button-slot">Confirm</slot>`};k=function(){return r`<forge-circular-progress slot="end" aria-label=${this.busyLabel}> </forge-circular-progress>`};O=function(){const t=this._slottedSecondaryButtonTextNodes.length>0;return B(t,()=>r` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          id="secondary-button"
          @click=${()=>f(this,a,h).call(this,!1)}>
          ${l(this,b)}
        </forge-button>`,()=>r`${l(this,b)}`)};N=function(){return r`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      style=${C({minWidth:l(this,m)})}
      @click=${()=>f(this,a,h).call(this,!0)}>
      ${l(this,a,z)}
    </forge-button>`};h=function(t,e="action",o){const n=new CustomEvent("forge-confirmation-dialog-action",{bubbles:!0,composed:!0,cancelable:!0,detail:{value:t,reason:e}});this.dispatchEvent(n),n.defaultPrevented&&o?o?.preventDefault():n.defaultPrevented||(this.open=!1,this.isBusy=!1)};I=function(t){if(t.detail.reason==="backdrop"){t.preventDefault();return}f(this,a,h).call(this,!1,"light-dismiss",t)};P=function(t){const e=t.target.name;["title","secondary-button-text","primary-button-text"].includes(e)&&this.requestUpdate()};U();F();H();J();Y.define([G]);s.styles=M(X);c([u({type:Boolean,attribute:"open"})],s.prototype,"open",2);c([u()],s.prototype,"label",2);c([u()],s.prototype,"description",2);c([u({type:Boolean,attribute:"is-busy"})],s.prototype,"isBusy",2);c([u({type:String,attribute:"busy-label"})],s.prototype,"busyLabel",2);c([x({slot:"title",flatten:!0})],s.prototype,"_slottedTitleNodes",2);c([x({slot:"message",flatten:!0})],s.prototype,"_slottedMessageNodes",2);c([x({slot:"secondary-button-text",flatten:!0})],s.prototype,"_slottedSecondaryButtonTextNodes",2);c([Q("#primary-button")],s.prototype,"_primaryButtonRef",2);s=c([K(nt)],s);const{action:it}=__STORYBOOK_MODULE_ACTIONS__,rt="forge-confirmation-dialog",at=it("forge-confirmation-dialog-action"),st={title:"Components/Confirmation Dialog",render:t=>{const e=q();function o(){e.value.open=!e.value.open}function n(i){at(i),t.preventDefault&&i.preventDefault()}return r`
      <forge-button variant="raised" @click=${o}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${j(e)}
        @forge-confirmation-dialog-action=${n}
        .isBusy=${t.isBusy}>
        ${t.title.length?r`<span slot="title">${t.title}</span>`:""}
        ${t.message.length?r`<span slot="message">${t.message}</span>`:""}
        ${t.secondaryButtonText.length?r`<span slot="secondary-button-text">${t.secondaryButtonText}</span>`:""}
        ${t.primaryButtonText.length?r`<span slot="primary-button-text">${t.primaryButtonText}</span>`:""}
      </forge-confirmation-dialog>
    `},component:rt,argTypes:{isBusy:{control:"boolean"},title:{control:"text"},message:{control:"text"},secondaryButtonText:{control:"text"},primaryButtonText:{control:"text"},preventDefault:{control:"boolean"}},args:{isBusy:!1,title:"Delete selected images?",message:"Images will be permanently removed from your account and all synced devices.",secondaryButtonText:"No",primaryButtonText:"Yes",preventDefault:!1}},g={};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source}}};const lt=["Demo"],ht=Object.freeze(Object.defineProperty({__proto__:null,Demo:g,__namedExportsOrder:lt,default:st},Symbol.toStringTag,{value:"Module"}));export{ht as C,g as D};
