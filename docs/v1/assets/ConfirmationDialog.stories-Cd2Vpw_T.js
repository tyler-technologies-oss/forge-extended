var T=e=>{throw TypeError(e)};var x=(e,n,t)=>n.has(e)||T("Cannot "+t);var a=(e,n,t)=>(x(e,n,"read from private field"),t?t.call(e):n.get(e)),y=(e,n,t)=>n.has(e)?T("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t),v=(e,n,t,l)=>(x(e,n,"write to private field"),l?l.call(e,t):n.set(e,t),t),g=(e,n,t)=>(x(e,n,"access private method"),t);import{i as P,x as r,r as j}from"./iframe-CSr27Gi9.js";import{n as A,e as E}from"./ref-CJF3Mb8J.js";import{n as b}from"./utils-CaDkb-CY.js";import{e as M}from"./query-CeEMzN2B.js";import{n as $}from"./query-assigned-nodes-cwDSNLIu.js";import{n as w}from"./when-3fO0zp9C.js";import{o as C}from"./style-map-ZfLdavep.js";import{t as U}from"./component-utils-DDaW1mI9.js";import{I as W,p as Y}from"./with-default-aria-DqAXseBi.js";import{c as D}from"./slot-utils-DH2anZHy.js";import{d as q}from"./index-C0ZwjHuE.js";import{d as K}from"./index-CpHONy-C.js";import{d as F}from"./index-B2LFS-P1.js";import{d as G}from"./index-XImc70I8.js";const H=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.outer-container{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:var(--forge-spacing-medium, 16px);gap:var(--forge-spacing-medium, 16px);max-width:480px}.title-container{display:grid;grid-template-columns:1fr auto;align-items:start;gap:var(--forge-spacing-medium, 16px)}.close-button-container{height:24px;margin-block-start:-10px;margin-inline-end:-10px}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);text-wrap:balance;word-break:break-all}h1{margin:0}.message-container{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:inherit}.actions-container{display:flex;gap:var(--forge-spacing-medium, 16px);align-items:center;flex-wrap:wrap;flex-direction:row;justify-content:end}`;var J=Object.defineProperty,p=(e,n,t,l)=>{for(var i=void 0,c=e.length-1,_;c>=0;c--)(_=e[c])&&(i=_(n,t,i)||i);return i&&J(n,t,i),i};const Q="forge-confirmation-dialog";var u,o,S,f,z,d,N,k,I,O,m,R,L;const B=class B extends P{constructor(){super(...arguments);y(this,o);y(this,u);y(this,f);y(this,d);this.open=!1,this.isBusy=!1,this.busyLabel="Loading",v(this,f,r`<slot name="title" id="confirmation-dialog-title" class="title"></slot> `),v(this,d,r`<slot name="secondary-button-text" id="secondary-button-slot"></slot>`)}willUpdate(t){t.has("isBusy")&&v(this,u,this.isBusy&&this._primaryButtonRef?`${this._primaryButtonRef.clientWidth}px`:void 0)}render(){const t=this._slottedTitleNodes.length>0;return r`
      <forge-dialog
        @slotchange=${g(this,o,L)}
        @forge-dialog-before-close=${g(this,o,R)}
        @forge-dialog-close=${()=>this.isBusy=!1}
        fullscreen-threshold="0"
        ?open=${this.open}
        .label=${this.label||D(this._slottedTitleNodes)||""}
        .description=${this.description||D(this._slottedMessageNodes)||""}>
        <div class="outer-container">
          <div class="title-container" style=${C({display:t?"grid":"none"})}>
            ${a(this,o,S)}
            <div class="close-button-container">${a(this,o,z)}</div>
          </div>
          <div class="message-container">
            <slot name="message" id="confirmation-message"></slot>
          </div>
          <div class="actions-container">${a(this,o,I)} ${a(this,o,O)}</div>
        </div>
      </forge-dialog>
    `}};u=new WeakMap,o=new WeakSet,S=function(){const t=this._slottedTitleNodes.length>0;return w(t,()=>r` <h1>${a(this,f)}</h1>`,()=>r`${a(this,f)}`)},f=new WeakMap,z=function(){return r`
      <forge-icon-button autofocus aria-label="Close confirmation dialog" @click=${()=>g(this,o,m).call(this,!1)}>
        <forge-icon name="close"></forge-icon>
      </forge-icon-button>
    `},d=new WeakMap,N=function(){return this.isBusy?a(this,o,k):r`<slot name="primary-button-text" id="primary-button-slot">Confirm</slot>`},k=function(){return r`<forge-circular-progress slot="end" aria-label=${this.busyLabel}> </forge-circular-progress>`},I=function(){const t=this._slottedSecondaryButtonTextNodes.length>0;return w(t,()=>r` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          id="secondary-button"
          @click=${()=>g(this,o,m).call(this,!1)}>
          ${a(this,d)}
        </forge-button>`,()=>r`${a(this,d)}`)},O=function(){return r`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      style=${C({minWidth:a(this,u)})}
      @click=${()=>g(this,o,m).call(this,!0)}>
      ${a(this,o,N)}
    </forge-button>`},m=function(t,l="action",i){const c=new CustomEvent("forge-confirmation-dialog-action",{bubbles:!0,composed:!0,cancelable:!0,detail:{value:t,reason:l}});this.dispatchEvent(c),c.defaultPrevented&&i?i?.preventDefault():c.defaultPrevented||(this.open=!1,this.isBusy=!1)},R=function(t){if(t.detail.reason==="backdrop"){t.preventDefault();return}g(this,o,m).call(this,!1,"light-dismiss",t)},L=function(t){const l=t.target.name;["title","secondary-button-text","primary-button-text"].includes(l)&&this.requestUpdate()},q(),K(),F(),G(),W.define([Y]),B.styles=j(H);let s=B;p([b({type:Boolean,attribute:"open"})],s.prototype,"open");p([b()],s.prototype,"label");p([b()],s.prototype,"description");p([b({type:Boolean,attribute:"is-busy"})],s.prototype,"isBusy");p([b({type:String,attribute:"busy-label"})],s.prototype,"busyLabel");p([$({slot:"title",flatten:!0})],s.prototype,"_slottedTitleNodes");p([$({slot:"message",flatten:!0})],s.prototype,"_slottedMessageNodes");p([$({slot:"secondary-button-text",flatten:!0})],s.prototype,"_slottedSecondaryButtonTextNodes");p([M("#primary-button")],s.prototype,"_primaryButtonRef");U(Q,s);const{action:V}=__STORYBOOK_MODULE_ACTIONS__,X="forge-confirmation-dialog",Z=V("forge-confirmation-dialog-action"),tt={title:"Components/Confirmation Dialog",render:e=>{const n=E();function t(){n.value.open=!n.value.open}function l(i){Z(i),e.preventDefault&&i.preventDefault()}return r`
      <forge-button variant="raised" @click=${t}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${A(n)}
        @forge-confirmation-dialog-action=${l}
        .isBusy=${e.isBusy}>
        ${e.title.length?r`<span slot="title">${e.title}</span>`:""}
        ${e.message.length?r`<span slot="message">${e.message}</span>`:""}
        ${e.secondaryButtonText.length?r`<span slot="secondary-button-text">${e.secondaryButtonText}</span>`:""}
        ${e.primaryButtonText.length?r`<span slot="primary-button-text">${e.primaryButtonText}</span>`:""}
      </forge-confirmation-dialog>
    `},component:X,argTypes:{isBusy:{control:"boolean"},title:{control:"text"},message:{control:"text"},secondaryButtonText:{control:"text"},primaryButtonText:{control:"text"},preventDefault:{control:"boolean"}},args:{isBusy:!1,title:"Delete selected images?",message:"Images will be permanently removed from your account and all synced devices.",secondaryButtonText:"No",primaryButtonText:"Yes",preventDefault:!1}},h={};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};const et=["Demo"],ut=Object.freeze(Object.defineProperty({__proto__:null,Demo:h,__namedExportsOrder:et,default:tt},Symbol.toStringTag,{value:"Module"}));export{ut as C,h as D};
