import{r as A,i as E,x as s}from"./iframe-QzzbqrfA.js";import{t as M}from"./custom-element-BhZVzxrc.js";import{n as _}from"./property-Dfd5sbDZ.js";import{r as O}from"./state-DfWlpL4k.js";import{n as F,e as P}from"./ref-Dy_ELmEO.js";import{n as V}from"./when-3fO0zp9C.js";import"./ai-modal-BSikt3YJ.js";import"./ai-chat-interface-Db04e9-K.js";import"./ai-gradient-container-C8cy6C6D.js";import"./ai-prompt-ecRp4fSE.js";import"./ai-dropdown-menu-CyNV9t0E.js";import"./ai-voice-input-DLHKchU1.js";import"./ai-user-message-DxYg0p5p.js";import"./ai-response-message-CJju-fku.js";import"./ai-suggestions-CHSFfDNv.js";import{I as k,t as z,a as H}from"./icon-registry-DkZ9Rd4X.js";import{d as W}from"./index-Ci8QZ6cV.js";import{d as D}from"./index-BBJUI7sQ.js";import{d as G}from"./index-DH5HdI6V.js";const B=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}.ai-embedded-chat{display:contents}`;var R=Object.defineProperty,L=Object.getOwnPropertyDescriptor,b=e=>{throw TypeError(e)},f=(e,t,a,g)=>{for(var r=g>1?void 0:g?L(t,a):t,h=e.length-1,v;h>=0;h--)(v=e[h])&&(r=(g?v(t,a,r):v(r))||r);return g&&r&&R(t,a,r),r},w=(e,t,a)=>t.has(e)||b("Cannot "+a),i=(e,t,a)=>(w(e,t,"read from private field"),a?a.call(e):t.get(e)),y=(e,t,a)=>t.has(e)?b("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),o=(e,t,a)=>(w(e,t,"access private method"),a),d,n,x,$,C,S,I,m;const N="forge-ai-embedded-chat";let p=class extends E{constructor(){super(...arguments),y(this,n),this.expanded=!1,this.gradientVariant="medium",this._isModalFullscreen=!1,y(this,d,P())}updated(){i(this,d).value&&this._isModalFullscreen!==i(this,d).value.fullscreen&&(this._isModalFullscreen=i(this,d).value.fullscreen??!1)}render(){return s`
      ${V(this.expanded,()=>s`
          <forge-ai-modal
            ${F(i(this,d))}
            ?open=${this.expanded}
            @forge-ai-modal-close=${o(this,n,S)}
            @forge-ai-modal-fullscreen-change=${o(this,n,I)}>
            ${i(this,n,x)}
          </forge-ai-modal>
        `,()=>s`
          <forge-ai-gradient-container variant=${this.gradientVariant}>
            ${i(this,n,x)}
          </forge-ai-gradient-container>
        `)}
    `}expand(){this.expanded||(this.expanded=!0,o(this,n,m).call(this,"forge-ai-embedded-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,o(this,n,m).call(this,"forge-ai-embedded-chat-collapse"))}};d=new WeakMap;n=new WeakSet;x=function(){return s`
      <forge-ai-chat-interface
        show-expand-button
        ?expanded=${this.expanded}
        @forge-ai-chat-header-expand=${o(this,n,$)}
        @forge-ai-chat-header-minimize=${o(this,n,C)}>
        <slot></slot>
        <slot name="suggestions" slot="suggestions"></slot>
        <slot name="prompt" slot="prompt"></slot>
      </forge-ai-chat-interface>
    `};$=function(){this.expanded=!this.expanded,this.expanded?o(this,n,m).call(this,"forge-ai-embedded-chat-expand"):o(this,n,m).call(this,"forge-ai-embedded-chat-collapse")};C=function(){this.collapse()};S=function(){this.expanded&&this.collapse()};I=function(e){this._isModalFullscreen=e.detail.isFullscreen};m=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(t)};p.styles=A(B);f([_({type:Boolean})],p.prototype,"expanded",2);f([_({attribute:"gradient-variant"})],p.prototype,"gradientVariant",2);f([O()],p.prototype,"_isModalFullscreen",2);p=f([M(N)],p);const{action:u}=__STORYBOOK_MODULE_ACTIONS__,q="forge-ai-embedded-chat";D();W();G();k.define([z,H]);const T=()=>s`
    <forge-ai-prompt slot="prompt">
      <forge-ai-dropdown-menu variant="icon-button" selection-mode="none" slot="actions">
        <span slot="trigger-content">
          <forge-icon-button>
            <forge-icon name="add" external></forge-icon>
          </forge-icon-button>
        </span>
        <forge-ai-dropdown-menu-item value="add-image">
          <span>Add image</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="add-pdf">
          <span>Add PDF</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
        <forge-ai-dropdown-menu-item value="add-spreadsheet">
          <span>Add spreadsheet</span>
          <forge-icon name="sparkles" slot="start"></forge-icon>
        </forge-ai-dropdown-menu-item>
      </forge-ai-dropdown-menu>
      <forge-ai-voice-input slot="actions" @forge-ai-voice-input-result=${t=>{const a=document.querySelector("forge-ai-prompt");a&&(a.value=t.detail.transcript)}}></forge-ai-voice-input>
    </forge-ai-prompt>
  `,K={title:"AI/Form Factors/Embedded",component:q,argTypes:{expanded:{control:{type:"boolean"},description:"Controls whether the modal view is open when expanded"},gradientVariant:{control:{type:"select"},options:["low","medium","high"],description:"Controls the gradient variant applied to the container"}},args:{expanded:!1,gradientVariant:"medium"},render:e=>s`
      <forge-ai-embedded-chat
        ?expanded=${e.expanded}
        gradient-variant=${e.gradientVariant}
        @forge-ai-embedded-chat-expand=${u("expand")}
        @forge-ai-embedded-chat-collapse=${u("collapse")}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        ${T()}
      </forge-ai-embedded-chat>
    `},l={},c={render:e=>{const t=[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}];return s`
      <forge-ai-embedded-chat
        ?expanded=${e.expanded}
        gradient-variant=${e.gradientVariant}
        @forge-ai-embedded-chat-expand=${u("expand")}
        @forge-ai-embedded-chat-collapse=${u("collapse")}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        <forge-ai-suggestions slot="suggestions" .suggestions=${t}></forge-ai-suggestions>
        ${T()}
      </forge-ai-embedded-chat>
    `}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const suggestions = [{
      text: 'Help me write an email',
      value: 'email'
    }, {
      text: 'Create a presentation',
      value: 'presentation'
    }, {
      text: 'Write some code',
      value: 'code'
    }, {
      text: 'Plan a meeting',
      value: 'meeting'
    }, {
      text: 'Summarize a document',
      value: 'summarize'
    }] as Suggestion[];
    return html\`
      <forge-ai-embedded-chat
        ?expanded=\${args.expanded}
        gradient-variant=\${args.gradientVariant}
        @forge-ai-embedded-chat-expand=\${action('expand')}
        @forge-ai-embedded-chat-collapse=\${action('collapse')}>
        <forge-ai-user-message>
          Hello! Can you help me understand how to use TypeScript generics?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components that
          can work with different types while maintaining type safety.
        </forge-ai-response-message>
        <forge-ai-suggestions slot="suggestions" .suggestions=\${suggestions}></forge-ai-suggestions>
        \${createPrompt()}
      </forge-ai-embedded-chat>
    \`;
  }
}`,...c.parameters?.docs?.source}}};const U=["Demo","WithSuggestions"],ge=Object.freeze(Object.defineProperty({__proto__:null,Demo:l,WithSuggestions:c,__namedExportsOrder:U,default:K},Symbol.toStringTag,{value:"Module"}));export{ge as A};
