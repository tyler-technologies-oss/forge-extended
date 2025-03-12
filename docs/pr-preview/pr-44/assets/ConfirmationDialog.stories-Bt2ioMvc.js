import{r as h,a as b,x as o,E as x}from"./lit-element-CxMangmT.js";import{n as d,t as v}from"./base-CWxi9ukh.js";import{d as _,a as $,b as B,n as u,c as p,e as C,f as w}from"./when-CamHaXlU.js";const T=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:flex;flex-direction:column}.outer-container{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:var(--forge-spacing-medium, 16px);gap:var(--forge-spacing-medium, 16px);max-width:480px}.title-message-container{box-sizing:border-box;display:flex;flex-direction:column;gap:var(--forge-spacing-medium, 16px)}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);text-wrap:balance;margin-block:0;padding-block:0}h1{margin:0}.message{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:inherit;margin-block:var(--forge-spacing-medium, 16px);margin-block-end:var(--forge-spacing-large, 24px)}.actions-container{display:flex;gap:var(--forge-spacing-medium, 16px);align-items:center;flex-wrap:wrap;flex-direction:row;justify-content:end}`;var S=Object.defineProperty,z=Object.getOwnPropertyDescriptor,s=(t,e,l,n)=>{for(var a=n>1?void 0:n?z(e,l):e,i=t.length-1,c;i>=0;i--)(c=t[i])&&(a=(n?c(e,l,a):c(a))||a);return n&&a&&S(e,l,a),a};const D="forge-confirmation-dialog";let r=class extends b{constructor(){super(...arguments),this.open=!1,this.isBusy=!1,this.ariaLabelLoading="Loading"}get _title(){const t=this._slottedTitleNodes.length>0;return p(t,()=>o`<h1>${this._titleSlot}</h1>`,()=>o`${this._titleSlot}`)}get _titleSlot(){return o` <slot name="title" id="confirmation-dialog-title" class="title"></slot>`}get _busyIndicator(){return this.isBusy?o`<forge-circular-progress slot="end" aria-label=${this.ariaLabelLoading}> </forge-circular-progress>`:x}get _secondaryButtonSlot(){return o` <slot name="secondary-button-text" id="secondary-button-slot"></slot>`}get _secondaryButton(){const t=this._slottedSecondaryButtonTextNodes.length>0;return p(t,()=>o` <forge-button
          variant="outlined"
          ?disabled=${this.isBusy}
          id="secondary-button"
          @click=${()=>this._onAction(!1)}>
          ${this._secondaryButtonSlot}
        </forge-button>`,()=>o`${this._secondaryButtonSlot}`)}get _primaryButton(){return o`<forge-button
      ?disabled=${this.isBusy}
      variant="raised"
      id="primary-button"
      @click=${()=>this._onAction(!0)}>
      ${p(this.isBusy,()=>this._busyIndicator,()=>o`<slot name="primary-button-text"></slot>`)}
    </forge-button>`}render(){return o`
      <forge-dialog
        @slotchange=${this._handleSlotChange}
        persistent
        fullscreen-threshold="0"
        ?open=${this.open}
        @forge-dialog-close=${()=>this.isBusy=!1}
        aria-labelledby="confirmation-dialog-title"
        aria-describedby="confirmation-message">
        <div class="outer-container">
          <div class="title-message-container">
            ${this._title}
            <slot name="message" id="confirmation-message" class="message"></slot>
          </div>
          <div class="actions-container">${this._secondaryButton} ${this._primaryButton}</div>
        </div>
      </forge-dialog>
    `}_onAction(t){const e=new CustomEvent("forge-confirmation-dialog-action",{bubbles:!0,cancelable:!0,detail:{primaryAction:t}});this.dispatchEvent(e)}_handleSlotChange(t){const e=t.target.name;["title","secondary-button-text"].includes(e)&&this.requestUpdate()}};_();$();B();r.styles=h(T);s([d({type:Boolean,attribute:"open"})],r.prototype,"open",2);s([d({type:Boolean,attribute:"is-busy"})],r.prototype,"isBusy",2);s([d({type:String,attribute:"aria-label-loading"})],r.prototype,"ariaLabelLoading",2);s([u({slot:"secondary-button-text",flatten:!0})],r.prototype,"_slottedSecondaryButtonTextNodes",2);s([u({slot:"title",flatten:!0})],r.prototype,"_slottedTitleNodes",2);r=s([v(D)],r);const L="forge-confirmation-dialog",A={title:"Components/Confirmation Dialog",render:t=>{const e=w();function l(){e.value.open=!0}function n(){e.value.open=!1}function a(i){if(console.log(i.detail.primaryAction),i.detail.primaryAction)if(t.simulateAsync)e.value.isBusy=!0,setTimeout(()=>{n()},2500);else{n();return}else{e.value.open=!1;return}}return o`
      <forge-button variant="raised" @click=${l}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${C(e)}
        @forge-confirmation-dialog-action=${i=>a(i)}
        @forge-dialog-close=${n}
        ?open=${t.open}
        aria-label-loading=${t.ariaLabelLoading}
        .isBusy=${t.isBusy}>
        ${t.title.length?o`<span slot="title">${t.title}</span>`:""}
        ${t.message.length?o`<span slot="message">${t.message}</span>`:""}
        ${t.secondaryButtonText.length?o`<span slot="secondary-button-text">${t.secondaryButtonText}</span>`:""}
        <span slot="primary-button-text">${t.primaryButtonText}</span>
      </forge-confirmation-dialog>
    `},component:L,argTypes:{open:{control:"boolean"},isBusy:{control:"boolean"},title:{control:"text"},message:{control:"text"},ariaLabelLoading:{control:"text"},secondaryButtonText:{control:"text"},primaryButtonText:{control:"text"},simulateAsync:{control:"boolean"}},args:{open:!1,isBusy:!1,title:"Delete selected images?",message:"Images will be permanently removed from your account and all synced devices.",ariaLabelLoading:"Loading data",secondaryButtonText:"No",primaryButtonText:"Yes",simulateAsync:!1}},g={};var f,y,m;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(m=(y=g.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};const P=["Demo"],k=Object.freeze(Object.defineProperty({__proto__:null,Demo:g,__namedExportsOrder:P,default:A},Symbol.toStringTag,{value:"Module"}));export{k as C,g as D};
