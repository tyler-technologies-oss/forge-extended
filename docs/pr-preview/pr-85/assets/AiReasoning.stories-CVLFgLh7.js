import{r as h,i as c,x as l}from"./iframe-d8dyRKJg.js";import{t as f}from"./custom-element-BhZVzxrc.js";import{n as u}from"./property-DloEdEuy.js";import{r as x}from"./state-BqB5MmGu.js";import"./ai-reasoning-header-Ck4ag2oa.js";const _=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}.reasoning{overflow:hidden;max-height:0;transition:max-height .3s ease-out}.reasoning.expanded{max-height:500px}.content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit);padding:var(--forge-spacing-medium, 16px)}`;var v=Object.defineProperty,T=Object.getOwnPropertyDescriptor,m=(t,n,o,a)=>{for(var e=a>1?void 0:a?T(n,o):n,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(a?i(n,o,e):i(e))||e);return a&&e&&v(n,o,e),e};const b="forge-ai-reasoning";let d=class extends c{constructor(){super(...arguments),this.expanded=!1}render(){return l`
      <slot name="header"></slot>
      <div class="reasoning ${this.expanded?"expanded":""}">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}};d.styles=h(_);m([u({type:Boolean,reflect:!0})],d.prototype,"expanded",2);d=m([f(b)],d);const C=":host{display:block}.reasoning-content{padding:.5rem 0}";var A=Object.defineProperty,$=Object.getOwnPropertyDescriptor,y=(t,n,o,a)=>{for(var e=a>1?void 0:a?$(n,o):n,s=t.length-1,i;s>=0;s--)(i=t[s])&&(e=(a?i(n,o,e):i(e))||e);return a&&e&&A(n,o,e),e};const I="forge-ai-reasoning-content";let p=class extends c{constructor(){super(...arguments),this._displayedText="",this._fullText="",this._animationId=null,this._hasStarted=!1}firstUpdated(){setTimeout(()=>{this._extractTextAndAnimate()},100)}_handleSlotChange(){this._hasStarted||this._extractTextAndAnimate()}_extractTextAndAnimate(){if(this._hasStarted)return;const t=this.shadowRoot?.querySelector("slot");if(t){const n=t.assignedNodes({flatten:!0});this._fullText=n.map(o=>o.textContent||"").join("").trim(),this._fullText&&(this._hasStarted=!0,this._startTypingAnimation())}}_startTypingAnimation(){this._animationId&&clearTimeout(this._animationId),this._displayedText="";let t=0;const n=10,o=()=>{t<this._fullText.length?(this._displayedText=this._fullText.substring(0,t+1),t++,this._animationId=setTimeout(o,n)):this._animationId=null};o()}render(){return this._hasStarted?l`
        <div class="reasoning-content">
          <span class="animated-text">${this._displayedText}</span>
        </div>
      `:l`
      <div class="reasoning-content">
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}};p.styles=h(C);y([x()],p.prototype,"_displayedText",2);p=y([f(I)],p);const S="forge-ai-reasoning",D={title:"AI/Primitives/Reasoning",component:S,argTypes:{expanded:{control:"boolean",description:"Whether the reasoning is expanded"},reasoning:{control:"boolean",description:"Whether this is a reasoning component"},title:{control:"text",description:"Title for the reasoning section"}},args:{expanded:!0,title:"AI Reasoning Process",reasoningTitle:"Thinking..."},render:t=>{const n=["Based on the provided information, I can reason through this step by step:","Observation: The user is asking about a complex technical problem.","Analysis: Multiple factors need to be considered including performance, scalability, and maintainability.","Evaluation: The proposed solution addresses the core requirements while maintaining code quality.","Conclusion: This approach provides the best balance of functionality and maintainability. Therefore, I recommend proceeding with the suggested implementation."],o=l`
      <forge-ai-reasoning .expanded=${t.expanded} id="reasoning-container">
        <forge-ai-reasoning-header slot="header" .expanded=${t.expanded} .reasoning=${t.reasoning}>
          <span slot="reasoning-title">${t.reasoningTitle}</span>
          <span slot="title">${t.title}</span>
        </forge-ai-reasoning-header>
      </forge-ai-reasoning>
    `;return setTimeout(()=>{const a=document.getElementById("reasoning-container"),e=a?.querySelector("forge-ai-reasoning-header");a&&e&&n.forEach((s,i)=>{setTimeout(()=>{i===0&&(e.reasoning=!0);const g=document.createElement("forge-ai-reasoning-content");g.textContent=s,a.appendChild(g),i===n.length-1&&setTimeout(()=>{e.reasoning=!1},s.length*10+500)},i*2e3)})},100),o}},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const E=["Demo"];export{r as Demo,E as __namedExportsOrder,D as default};
