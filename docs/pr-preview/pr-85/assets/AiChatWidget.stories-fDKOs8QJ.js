import{r as m,i as c,x as i}from"./iframe-BfZ-SlbI.js";import{t as h}from"./custom-element-BhZVzxrc.js";import{n as f}from"./property-DO6TXO3N.js";import{r as d}from"./state-DLBzmu2F.js";import{I as y,h as u,i as v,j as b,k as _}from"./icon-registry-BxF2wqXc.js";import{d as x}from"./index-CD8PEZZw.js";import{d as w}from"./index-JSi0inlt.js";import{d as z}from"./index-Ole4tSBv.js";import{d as C}from"./index-DeHY9oZ8.js";import{d as T}from"./with-default-aria-iwW4DCjU.js";import{T as I}from"./tooltip-Be9MansG.js";import{d as $}from"./index-JBM93da4.js";import{d as k}from"./index-CYyKGzOM.js";import"./ai-button-BanD6HbI.js";import"./base-button-adapter-ChhaJhOD.js";import"./with-longpress-listener-CLNdwgzE.js";import"./dismissible-stack-Br_sDzXb.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function S(){T(I)}const O=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:contents}.dialog::part(surface){top:72px;left:auto;right:24px;height:calc(100dvh - 96px)}:host([fullsize]) .dialog::part(surface){inset:var(--forge-spacing-large, 24px);width:100%;height:100%}:host([fullsize]) .container{width:100%}.dialog-header{--forge-toolbar-padding: var(--forge-spacing-small, 12px)}.container{view-transition-name:--ai-dialog-container;display:grid;grid-template-rows:auto 1fr auto;width:360px}.inline-stack{display:flex;align-items:center}.container-inner{background:#fff;background:linear-gradient(180deg,#fff 80%,#eaecf6);padding:var(--forge-spacing-medium, 16px);overflow:auto}.messages-container{display:grid;gap:var(--forge-spacing-medium, 16px)}.message{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit);padding:var(--forge-spacing-medium, 16px);background-color:var(--forge-theme-surface-container-low, #ebebeb);border-radius:calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1));margin-inline-start:var(--forge-spacing-xxxlarge, 56px)}.response{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit);display:grid;grid-template-columns:24px 1fr;align-items:center;gap:var(--forge-spacing-medium, 16px);padding:var(--forge-spacing-medium, 16px)}.input-container{box-sizing:border-box;height:96px;width:100%;display:grid;grid-template-columns:1fr auto;gap:var(--forge-spacing-medium, 16px);align-items:center;padding-inline:var(--forge-spacing-medium, 16px)}@media screen and (max-width: 600px){.dialog::part(surface){inset:var(--forge-spacing-large, 24px);width:100%;height:100%}.container{width:100%}}`;var A=Object.defineProperty,D=Object.getOwnPropertyDescriptor,r=(e,a,g,s)=>{for(var o=s>1?void 0:s?D(a,g):a,p=e.length-1,l;p>=0;p--)(l=e[p])&&(o=(s?l(a,g,o):l(o))||o);return s&&o&&A(a,g,o),o};const L="forge-ai-chat-widget";let t=class extends c{constructor(){super(...arguments),this._message="",this._messages=[],this._responses=[],this.open=!1,this.fullsize=!1}get _header(){return i`
      <forge-toolbar no-border class="dialog-header">
        <div slot="title">This is the title</div>
        <div slot="end" class="inline-stack">
          <forge-icon-button @click=${this._onFullSizeToggle}>
            <forge-icon name="arrow_expand_all"></forge-icon>
          </forge-icon-button>
          <forge-icon-button @click=${this._onClose}>
            <forge-icon name="close"></forge-icon>
            <forge-tooltip>
              <slot name="tooltip-text" id="ai-wrapper-tooltip">Close the modal</slot>
            </forge-tooltip>
          </forge-icon-button>
        </div>
      </forge-toolbar>
    `}get _input(){return i`
      <div class="input-container">
        <forge-text-field>
          <label for="forge-ai-wrapper-input">Label</label>
          <input
            autofocus
            id="forge-ai-wrapper-input"
            type="text"
            .value=${this._message}
            @change=${this._onInputChange}
            @keyup=${this._onSubmit} />
        </forge-text-field>
        <forge-icon-button @click=${this._addMessage}>
          <forge-icon name="send"></forge-icon>
        </forge-icon-button>
      </div>
    `}render(){return i`
      <button @click=${this._onOpenToggle}>Open widget</button>
      <forge-dialog
        fullscreen-threshold="0"
        class="dialog"
        animation-type="slide"
        placement="custom"
        ?open=${this.open}
        @forge-dialog-close=${()=>this._resetState()}
        role="dialog"
        mode="nonmodal"
        aria-labelledby="title">
        <div class="container">
          ${this._header}
          <div class="container-inner">
            <div class="messages-container">
              ${this._messages.map(e=>i` <div class="message">${e.message}</div> `)}
              ${this._responses.map(e=>i`
                  <div class="response">
                    <forge-icon name="sparkles"></forge-icon>
                    <div>${e.message}</div>
                  </div>
                `)}
            </div>
          </div>
          ${this._input}
        </div>
      </forge-dialog>
    `}_resetState(){}_onFullSizeToggle(){document.startViewTransition?document.startViewTransition(()=>{this.fullsize=!this.fullsize}):this.fullsize=!this.fullsize}_onClose(){this.open=!1}_onOpenToggle(){this.open=!this.open}_onInputChange(e){this._message=e.target.value}_onSubmit(e){e.key==="Enter"&&this._addMessage()}_addMessage(){this._message.length&&(this._messages=[...this._messages,{id:this._messages.length+1,message:this._message,timestamp:new Date().toLocaleTimeString()}]),this._message="",this._addResponse()}_addResponse(){setTimeout(()=>{this._responses=[...this._responses,{id:this._responses.length+1,message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",timestamp:new Date().toLocaleTimeString(),originId:this._messages[this._messages.length-1].id}]},500)}};x();w();z();C();S();$();k();y.define([u,v,b,_]);t.styles=m(O);r([d()],t.prototype,"_message",2);r([d()],t.prototype,"_messages",2);r([d()],t.prototype,"_responses",2);r([f({type:Boolean,reflect:!0})],t.prototype,"open",2);r([f({type:Boolean,reflect:!0})],t.prototype,"fullsize",2);t=r([h(L)],t);const R="forge-ai-chat-widget",Y={title:"AI/AI Chat Widget",component:R,tags:["hidden"],render:()=>i` <forge-ai-chat-widget></forge-ai-chat-widget> `,args:{}},n={};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};const Z=["Demo"];export{n as Demo,Z as __namedExportsOrder,Y as default};
