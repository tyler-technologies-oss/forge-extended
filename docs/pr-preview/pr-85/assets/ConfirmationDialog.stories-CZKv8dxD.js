import{r as M,i as P,x as n}from"./iframe-DqEJrj69.js";import{n as R,e as W}from"./ref-D_83ifsG.js";import{t as A}from"./custom-element-BhZVzxrc.js";import{n as g}from"./property-C_ceE6xC.js";import{e as E}from"./query-CeEMzN2B.js";import{n as _}from"./query-assigned-nodes-cwDSNLIu.js";import{n as B}from"./when-3fO0zp9C.js";import{o as C}from"./style-map-CxVkZpa4.js";import{I as L,u as U}from"./icon-registry-Bn8j1jNm.js";import{d as Y,a as j,c as $}from"./slot-utils-wIqQKnjS.js";import{d as q}from"./index-CYN2K4d9.js";import{d as G}from"./index-B8VqpnZX.js";const K=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.outer-container{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:var(--forge-spacing-medium, 16px);gap:var(--forge-spacing-medium, 16px);max-width:480px}.title-container{display:grid;grid-template-columns:1fr auto;align-items:start;gap:var(--forge-spacing-medium, 16px)}.close-button-container{height:24px;margin-block-start:-10px;margin-inline-end:-10px}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);text-wrap:balance;word-break:break-all}h1{margin:0}.message-container{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:inherit}.actions-container{display:flex;gap:var(--forge-spacing-medium, 16px);align-items:center;flex-wrap:wrap;flex-direction:row;justify-content:end}`;var F=Object.defineProperty,H=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},c=(t,e,o,a)=>{for(var l=a>1?void 0:a?H(e,o):e,v=t.length-1,b;v>=0;v--)(b=t[v])&&(l=(a?b(e,o,l):b(l))||l);return a&&l&&F(e,o,l),l},x=(t,e,o)=>e.has(t)||w("Cannot "+o),s=(t,e,o)=>(x(t,e,"read from private field"),o?o.call(t):e.get(t)),y=(t,e,o)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),J=(t,e,o,a)=>(x(t,e,"write to private field"),e.set(t,o),o),p=(t,e,o)=>(x(t,e,"access private method"),o),h,i,T,m,D,u,S,z,N,O,d,k,I;const Q="forge-confirmation-dialog";let r=class extends P{constructor(){super(...arguments),y(this,i),this.open=!1,this.isBusy=!1,this.busyLabel="Loading",y(this,h),y(this,m,n`<slot name="title" id="confirmation-dialog-title" class="title"></slot> `),y(this,u,n`<slot name="secondary-button-text" id="secondary-button-slot"></slot>`)}willUpdate(t){t.has("isBusy")&&J(this,h,this.isBusy&&this._primaryButtonRef?`${this._primaryButtonRef.clientWidth}px`:void 0)}render(){const t=this._slottedTitleNodes.length>0;return n`
      <forge-dialog
        @slotchange=${p(this,i,I)}
        @forge-dialog-before-close=${p(this,i,k)}
        @forge-dialog-close=${()=>this.isBusy=!1}
        fullscreen-threshold="0"
        ?open=${this.open}
        .label=${this.label||$(this._slottedTitleNodes)||""}
        .description=${this.description||$(this._slottedMessageNodes)||""}>
        <div class="outer-container">
          <div class="title-container" style=${C({display:t?"grid":"none"})}>
            ${s(this,i,T)}
            <div class="close-button-container">${s(this,i,D)}</div>
          </div>
          <div class="message-container">
            <slot name="message" id="confirmation-message"></slot>
          </div>
          <div class="actions-container">${s(this,i,N)} ${s(this,i,O)}</div>
        </div>
      </forge-dialog>
    `}};h=new WeakMap;i=new WeakSet;T=function(){const t=this._slottedTitleNodes.length>0;return B(t,()=>n` <h1>${s(this,m)}</h1>`,()=>n`${s(this,m)}`)};m=new WeakMap;D=function(){return n`
      <forge-icon-button autofocus aria-label="Close confirmation dialog" @click=${()=>p(this,i,d).call(this,!1)}>
        <forge-icon name="close"></forge-icon>
      </forge-icon-button>
    `};u=new WeakMap;S=function(){return this.isBusy?s(this,i,z):n`<slot name="primary-button-text" id="primary-button-slot">Confirm</slot>`};z=function(){return n`<forge-circular-progress slot="end" aria-label=${this.busyLabel}> </forge-circular-progress>`};N=function(){const t=this._slottedSecondaryButtonTextNodes.length>0;return B(t,()=>n` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          id="secondary-button"
          @click=${()=>p(this,i,d).call(this,!1)}>
          ${s(this,u)}
        </forge-button>`,()=>n`${s(this,u)}`)};O=function(){return n`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      style=${C({minWidth:s(this,h)})}
      @click=${()=>p(this,i,d).call(this,!0)}>
      ${s(this,i,S)}
    </forge-button>`};d=function(t,e="action",o){const a=new CustomEvent("forge-confirmation-dialog-action",{bubbles:!0,composed:!0,cancelable:!0,detail:{value:t,reason:e}});this.dispatchEvent(a),a.defaultPrevented&&o?o?.preventDefault():a.defaultPrevented||(this.open=!1,this.isBusy=!1)};k=function(t){if(t.detail.reason==="backdrop"){t.preventDefault();return}p(this,i,d).call(this,!1,"light-dismiss",t)};I=function(t){const e=t.target.name;["title","secondary-button-text","primary-button-text"].includes(e)&&this.requestUpdate()};q();Y();j();G();L.define([U]);r.styles=M(K);c([g({type:Boolean,attribute:"open"})],r.prototype,"open",2);c([g()],r.prototype,"label",2);c([g()],r.prototype,"description",2);c([g({type:Boolean,attribute:"is-busy"})],r.prototype,"isBusy",2);c([g({type:String,attribute:"busy-label"})],r.prototype,"busyLabel",2);c([_({slot:"title",flatten:!0})],r.prototype,"_slottedTitleNodes",2);c([_({slot:"message",flatten:!0})],r.prototype,"_slottedMessageNodes",2);c([_({slot:"secondary-button-text",flatten:!0})],r.prototype,"_slottedSecondaryButtonTextNodes",2);c([E("#primary-button")],r.prototype,"_primaryButtonRef",2);r=c([A(Q)],r);const{action:V}=__STORYBOOK_MODULE_ACTIONS__,X="forge-confirmation-dialog",Z=V("forge-confirmation-dialog-action"),tt={title:"Components/Confirmation Dialog",render:t=>{const e=W();function o(){e.value.open=!e.value.open}function a(l){Z(l),t.preventDefault&&l.preventDefault()}return n`
      <forge-button variant="raised" @click=${o}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${R(e)}
        @forge-confirmation-dialog-action=${a}
        .isBusy=${t.isBusy}>
        ${t.title.length?n`<span slot="title">${t.title}</span>`:""}
        ${t.message.length?n`<span slot="message">${t.message}</span>`:""}
        ${t.secondaryButtonText.length?n`<span slot="secondary-button-text">${t.secondaryButtonText}</span>`:""}
        ${t.primaryButtonText.length?n`<span slot="primary-button-text">${t.primaryButtonText}</span>`:""}
      </forge-confirmation-dialog>
    `},component:X,argTypes:{isBusy:{control:"boolean"},title:{control:"text"},message:{control:"text"},secondaryButtonText:{control:"text"},primaryButtonText:{control:"text"},preventDefault:{control:"boolean"}},args:{isBusy:!1,title:"Delete selected images?",message:"Images will be permanently removed from your account and all synced devices.",secondaryButtonText:"No",primaryButtonText:"Yes",preventDefault:!1}},f={};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};const et=["Demo"],yt=Object.freeze(Object.defineProperty({__proto__:null,Demo:f,__namedExportsOrder:et,default:tt},Symbol.toStringTag,{value:"Module"}));export{yt as C,f as D};
