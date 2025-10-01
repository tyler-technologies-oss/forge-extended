import{r as g,x as s}from"./iframe-Bbf8iJX_.js";import"./ai-chat-interface-r87lmVcb.js";import"./ai-user-message-zRmvDXPY.js";import"./ai-response-message-sgJaLsit.js";import{_ as i,a as p,b as f,c as l,C as h,d as m}from"./utils-C90AFyt8.js";import{t as u}from"./custom-element-BhZVzxrc.js";import{n as v}from"./property-CLrH-LBy.js";import{B as _}from"./base-lit-element-DlvjBm3H.js";import"./ai-icon-DWQLQO5O.js";import"./query-CeEMzN2B.js";import"./base-CShCMygk.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */var t,n;const y=":host{display:block}:host([hidden]){display:none}.forge-card{--_card-background:var(--forge-card-background, var(--forge-theme-surface, #ffffff));--_card-height:var(--forge-card-height, 100%);--_card-width:var(--forge-card-width, 100%);--_card-outline-color:var(--forge-card-outline-color, var(--forge-theme-outline, #e0e0e0));--_card-outline-width:var(--forge-card-outline-width, var(--forge-border-thin, 1px));--_card-outline-style:var(--forge-card-outline-style, solid);--_card-elevation:var(--forge-card-elevation, none);--_card-padding:var(--forge-card-padding, var(--forge-spacing-medium, 16px));--_card-shape:var(--forge-card-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_card-overflow:var(--forge-card-overflow, initial);--_card-raised-elevation:var(--forge-card-raised-elevation, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12));--_card-raised-outline-width:var(--forge-card-raised-outline-width, 0)}.forge-card{background:var(--_card-background);border-color:var(--_card-outline-color);border-width:var(--_card-outline-width);border-style:var(--_card-outline-style);border-radius:var(--_card-shape);box-shadow:var(--_card-elevation);box-sizing:border-box;padding:var(--_card-padding);overflow:var(--_card-overflow);height:var(--_card-height);width:var(--_card-width);-webkit-tap-highlight-color:transparent}:host(:where([raised],:state(raised))) .forge-card{--_card-elevation:var(--_card-raised-elevation);--_card-outline-width:var(--_card-raised-outline-width)}:host([no-padding]) .forge-card{--_card-padding:var(--forge-card-padding, 0)}",d="forge-card";let e=class extends _{constructor(){super(),t.set(this,void 0),this.raised=!1,p(this,t,this.attachInternals(),"f")}willUpdate(c){c.has("raised")&&f(l(this,t,"f"),"raised",this.raised)}render(){return s`<div class="forge-card" part="root"><slot></slot></div>`}};t=new WeakMap;n=h;e.styles=g(y);e[n]=d;i([v({type:Boolean,reflect:!0})],e.prototype,"raised",void 0);e=i([u(d)],e);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function w(){m(e)}const b="forge-ai-chat-interface";w();const D={title:"AI/AI Chat Interface",component:b,render:()=>s`<forge-ai-chat-interface></forge-ai-chat-interface>`},r={},a={render:()=>s`
      <forge-card no-padding raised>
        <forge-ai-chat-interface></forge-ai-chat-interface>
      </forge-card>
    `},o={render:()=>s`
      <forge-card no-padding raised>
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
          <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
          <forge-ai-response-message>
            Sure! Here's a simple example of a generic function: This function works with any type T, providing type
            safety while being reusable.
          </forge-ai-response-message>
        </forge-ai-chat-interface>
      </forge-card>
    `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <forge-card no-padding raised>
        <forge-ai-chat-interface></forge-ai-chat-interface>
      </forge-card>
    \`;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <forge-card no-padding raised>
        <forge-ai-chat-interface>
          <forge-ai-user-message>
            Hello! Can you help me understand how to use TypeScript generics?
          </forge-ai-user-message>
          <forge-ai-response-message>
            I'd be happy to help you understand TypeScript generics! Generics allow you to create reusable components
            that can work with different types while maintaining type safety.
          </forge-ai-response-message>
          <forge-ai-user-message> Can you give me a practical example? </forge-ai-user-message>
          <forge-ai-response-message>
            Sure! Here's a simple example of a generic function: This function works with any type T, providing type
            safety while being reusable.
          </forge-ai-response-message>
        </forge-ai-chat-interface>
      </forge-card>
    \`;
  }
}`,...o.parameters?.docs?.source}}};const N=["Demo","InCard","WithMessages"];export{r as Demo,a as InCard,o as WithMessages,N as __namedExportsOrder,D as default};
