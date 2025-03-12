import{r as h,a as b,x as o,E as x}from"./lit-element-CxMangmT.js";import{n as c,t as v}from"./base-Bk1rqh9v.js";import{o as f}from"./query-assigned-elements-BRx5EvbJ.js";import{d as _,a as $,b as B,n as d,c as T,e as C}from"./when-CKc7ldmw.js";const w=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:flex;flex-direction:column}.outer-container{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:var(--forge-spacing-medium, 16px);gap:var(--forge-spacing-medium, 16px);max-width:480px}.title-message-container{box-sizing:border-box;display:flex;flex-direction:column;gap:var(--forge-spacing-medium, 16px)}.title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading4-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading4-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-font-size-scale, 1.25)));font-weight:var(--forge-typography-heading4-font-weight, 500);line-height:var(--forge-typography-heading4-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading4-line-height-scale, 1.5)));letter-spacing:var(--forge-typography-heading4-letter-spacing, .005em);text-transform:var(--forge-typography-heading4-text-transform, inherit);text-decoration:var(--forge-typography-heading4-text-decoration, inherit);text-wrap:balance;margin-block:0;padding-block:0}h1{margin:0}.message{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body2-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body2-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, 1)));font-weight:var(--forge-typography-body2-font-weight, 400);line-height:var(--forge-typography-body2-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.375)));letter-spacing:var(--forge-typography-body2-letter-spacing, .015625em);text-transform:var(--forge-typography-body2-text-transform, inherit);text-decoration:var(--forge-typography-body2-text-decoration, inherit);color:inherit;margin-block:var(--forge-spacing-medium, 16px);margin-block-end:var(--forge-spacing-large, 24px)}.actions-container{display:flex;gap:var(--forge-spacing-medium, 16px);align-items:center;flex-wrap:wrap;flex-direction:row;justify-content:end}`;var S=Object.defineProperty,z=Object.getOwnPropertyDescriptor,r=(t,e,l,i)=>{for(var a=i>1?void 0:i?z(e,l):e,s=t.length-1,p;s>=0;s--)(p=t[s])&&(a=(i?p(e,l,a):p(a))||a);return i&&a&&S(e,l,a),a};const D="forge-confirmation-dialog";let n=class extends b{constructor(){super(...arguments),this.open=!1,this.isBusy=!1,this.busyLabel="Loading"}get _title(){const t=this._slottedTitleNodes.length>0;return d(t,()=>o`<h1>${this._titleSlot}</h1>`,()=>o`${this._titleSlot}`)}get _titleSlot(){return o` <slot name="title" id="confirmation-dialog-title" class="title"></slot>`}get _busyIndicator(){return this.isBusy?o`<forge-circular-progress slot="end" aria-label=${this.busyLabel}> </forge-circular-progress>`:x}get _secondaryButtonSlot(){return o` <slot name="secondary-button-text" id="secondary-button-slot"></slot>`}get _secondaryButton(){const t=this._slottedSecondaryButtonTextNodes.length>0;return d(t,()=>o` <forge-button
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
      ${d(this.isBusy,()=>this._busyIndicator,()=>o`<slot name="primary-button-text"></slot>`)}
    </forge-button>`}render(){var t,e;return console.log(this._slottedTitleNodes),o`
      <forge-dialog
        @slotchange=${this._handleSlotChange}
        persistent
        fullscreen-threshold="0"
        ?open=${this.open}
        @forge-dialog-close=${()=>this.isBusy=!1}
        .label=${this.label||((t=this._slottedTitleNodes.at(0))==null?void 0:t.innerText)||""}
        .description=${this.description||((e=this._slottedMessageNodes.at(0))==null?void 0:e.innerText)||""}>
        <div class="outer-container">
          <div class="title-message-container">
            ${this._title}
            <slot name="message" id="confirmation-message" class="message"></slot>
          </div>
          <div class="actions-container">${this._secondaryButton} ${this._primaryButton}</div>
        </div>
      </forge-dialog>
    `}_onAction(t){const e=new CustomEvent("forge-confirmation-dialog-action",{bubbles:!0,cancelable:!0,detail:{primaryAction:t}});this.dispatchEvent(e),e.defaultPrevented||(this.open=!1)}_handleSlotChange(t){const e=t.target.name;["title","secondary-button-text"].includes(e)&&this.requestUpdate()}};_();$();B();n.styles=h(w);r([c({type:Boolean,attribute:"open"})],n.prototype,"open",2);r([c()],n.prototype,"label",2);r([c()],n.prototype,"description",2);r([c({type:Boolean,attribute:"is-busy"})],n.prototype,"isBusy",2);r([c({type:String,attribute:"busy-label"})],n.prototype,"busyLabel",2);r([f({slot:"title",flatten:!0})],n.prototype,"_slottedTitleNodes",2);r([f({slot:"message",flatten:!0})],n.prototype,"_slottedMessageNodes",2);r([f({slot:"secondary-button-text",flatten:!0})],n.prototype,"_slottedSecondaryButtonTextNodes",2);n=r([v(D)],n);const L="forge-confirmation-dialog",A={title:"Components/Confirmation Dialog",render:t=>{const e=C();function l(){e.value.open=!0}function i(){e.value.open=!1}function a(s){if(console.log(s.detail.primaryAction),s.detail.primaryAction)if(t.simulateAsync)e.value.isBusy=!0,setTimeout(()=>{i()},2500);else{i();return}else{e.value.open=!1;return}}return o`
      <forge-button variant="raised" @click=${l}>Show Confirmation Dialog</forge-button>
      <forge-confirmation-dialog
        ${T(e)}
        @forge-confirmation-dialog-action=${s=>a(s)}
        @forge-dialog-close=${i}
        ?open=${t.open}
        aria-label-loading=${t.ariaLabelLoading}
        .isBusy=${t.isBusy}>
        ${t.title.length?o`<span slot="title">${t.title}</span>`:""}
        ${t.message.length?o`<span slot="message">${t.message}</span>`:""}
        ${t.secondaryButtonText.length?o`<span slot="secondary-button-text">${t.secondaryButtonText}</span>`:""}
        <span slot="primary-button-text">${t.primaryButtonText}</span>
      </forge-confirmation-dialog>
    `},component:L,argTypes:{open:{control:"boolean"},isBusy:{control:"boolean"},title:{control:"text"},message:{control:"text"},ariaLabelLoading:{control:"text"},secondaryButtonText:{control:"text"},primaryButtonText:{control:"text"},simulateAsync:{control:"boolean"}},args:{open:!1,isBusy:!1,title:"Delete selected images?",message:"Images will be permanently removed from your account and all synced devices.",ariaLabelLoading:"Loading data",secondaryButtonText:"No",primaryButtonText:"Yes",simulateAsync:!1}},g={};var y,m,u;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(u=(m=g.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const N=["Demo"],E=Object.freeze(Object.defineProperty({__proto__:null,Demo:g,__namedExportsOrder:N,default:A},Symbol.toStringTag,{value:"Module"}));export{E as C,g as D};
