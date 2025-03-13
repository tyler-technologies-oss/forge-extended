import{r as b,a as x,x as e}from"./lit-element-CxMangmT.js";import{n as c,t as v}from"./base-CWxi9ukh.js";import{d as _,a as $,b as B,n as d,c as f,e as y,f as C,g as T}from"./slot-utils-D0xsnu3F.js";const S=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:flex;flex-direction:column}.outer-container{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:var(--forge-spacing-medium, 16px);gap:var(--forge-spacing-medium, 16px);max-width:480px}.title-message-container{box-sizing:border-box;display:flex;flex-direction:column;gap:var(--forge-spacing-medium, 16px)}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);text-wrap:balance;margin-block:0;padding-block:0}h1{margin:0}.message{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:inherit;margin-block:var(--forge-spacing-medium, 16px);margin-block-end:var(--forge-spacing-large, 24px)}.actions-container{display:flex;gap:var(--forge-spacing-medium, 16px);align-items:center;flex-wrap:wrap;flex-direction:row;justify-content:end}`;var w=Object.defineProperty,z=Object.getOwnPropertyDescriptor,i=(t,o,l,a)=>{for(var r=a>1?void 0:a?z(o,l):o,s=t.length-1,p;s>=0;s--)(p=t[s])&&(r=(a?p(o,l,r):p(r))||r);return a&&r&&w(o,l,r),r};const D="forge-confirmation-dialog";let n=class extends x{constructor(){super(...arguments),this.open=!1,this.isBusy=!1,this.busyLabel="Loading"}get _title(){const t=this._slottedTitleNodes.length>0;return f(t,()=>e`<h1>${this._titleSlot}</h1>`,()=>e`${this._titleSlot}`)}get _titleSlot(){return e` <slot name="title" id="confirmation-dialog-title" class="title"></slot>`}get _secondaryButtonSlot(){return e` <slot name="secondary-button-text" id="secondary-button-slot"></slot>`}get _primaryButtonSlot(){return this.isBusy?e`${this._busyIndicator}`:e`<slot name="primary-button-text" id="primary-button-slot">Confirm</slot>`}get _busyIndicator(){return e`<forge-circular-progress slot="end" aria-label=${this.busyLabel}> </forge-circular-progress>`}get _secondaryButton(){const t=this._slottedSecondaryButtonTextNodes.length>0;return f(t,()=>e` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          id="secondary-button"
          @click=${()=>this._onAction(!1)}>
          ${this._secondaryButtonSlot}
        </forge-button>`,()=>e`${this._secondaryButtonSlot}`)}get _primaryButton(){return e`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      @click=${()=>this._onAction(!0)}>
      ${this._primaryButtonSlot}
    </forge-button>`}render(){return e`
      <forge-dialog
        @slotchange=${this._handleSlotChange}
        persistent
        fullscreen-threshold="0"
        ?open=${this.open}
        @forge-dialog-close=${()=>this.isBusy=!1}
        .label=${this.label||y(this._slottedTitleNodes)||""}
        .description=${this.description||y(this._slottedMessageNodes)||""}>
        <div class="outer-container">
          <div class="title-message-container">
            ${this._title}
            <slot name="message" id="confirmation-message" class="message"></slot>
          </div>
          <div class="actions-container">${this._secondaryButton} ${this._primaryButton}</div>
        </div>
      </forge-dialog>
    `}_onAction(t){const o=new CustomEvent("forge-confirmation-dialog-action",{bubbles:!0,cancelable:!0,detail:{primaryAction:t}});this.dispatchEvent(o),o.defaultPrevented||(this.open=!1)}_handleSlotChange(t){const o=t.target.name;["title","secondary-button-text"].includes(o)&&this.requestUpdate()}};_();$();B();n.styles=b(S);i([c({type:Boolean,attribute:"open"})],n.prototype,"open",2);i([c()],n.prototype,"label",2);i([c()],n.prototype,"description",2);i([c({type:Boolean,attribute:"is-busy"})],n.prototype,"isBusy",2);i([c({type:String,attribute:"busy-label"})],n.prototype,"busyLabel",2);i([d({slot:"title",flatten:!0})],n.prototype,"_slottedTitleNodes",2);i([d({slot:"message",flatten:!0})],n.prototype,"_slottedMessageNodes",2);i([d({slot:"secondary-button-text",flatten:!0})],n.prototype,"_slottedSecondaryButtonTextNodes",2);n=i([v(D)],n);const L="forge-confirmation-dialog",A={title:"Components/Confirmation Dialog",render:t=>{const o=T();function l(){o.value.open=!0}function a(){o.value.open=!1}function r(s){if(console.log(s.detail.primaryAction),s.detail.primaryAction)if(t.simulateAsync)o.value.isBusy=!0,setTimeout(()=>{a()},2500);else{a();return}else{a();return}}return e`
      <forge-button variant="raised" @click=${l}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${C(o)}
        @forge-confirmation-dialog-action=${s=>r(s)}
        @forge-dialog-close=${a}
        ?open=${t.open}
        busy-label=${t.ariaLabelLoading}
        .isBusy=${t.isBusy}>
        ${t.title.length?e`<span slot="title">${t.title}</span>`:""}
        ${t.message.length?e`<span slot="message">${t.message}</span>`:""}
        ${t.secondaryButtonText.length?e`<span slot="secondary-button-text">${t.secondaryButtonText}</span>`:""}
        ${t.primaryButtonText.length?e`<span slot="primary-button-text">${t.primaryButtonText}</span>`:""}
      </forge-confirmation-dialog>
    `},component:L,argTypes:{open:{control:"boolean"},isBusy:{control:"boolean"},title:{control:"text"},message:{control:"text"},ariaLabelLoading:{control:"text"},secondaryButtonText:{control:"text"},primaryButtonText:{control:"text"},simulateAsync:{control:"boolean"}},args:{open:!1,isBusy:!1,title:"Delete selected images?",message:"Images will be permanently removed from your account and all synced devices.",ariaLabelLoading:"Loading data",secondaryButtonText:"No",primaryButtonText:"Yes",simulateAsync:!1}},g={};var m,u,h;g.parameters={...g.parameters,docs:{...(m=g.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(h=(u=g.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const N=["Demo"],k=Object.freeze(Object.defineProperty({__proto__:null,Demo:g,__namedExportsOrder:N,default:A},Symbol.toStringTag,{value:"Module"}));export{k as C,g as D};
