import{r as p,i as h,x as l}from"./iframe-DsjZy_1n.js";import{t as g}from"./custom-element-BhZVzxrc.js";import{r as m}from"./state-w6ehoa_C.js";import"./property-BjCz1Uvz.js";const y=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}.content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit)}`;var u=Object.getOwnPropertyDescriptor,_=(n,e,o,a)=>{for(var t=a>1?void 0:a?u(e,o):e,i=n.length-1,s;i>=0;i--)(s=n[i])&&(t=s(t)||t);return t};const v="forge-ai-reasoning";let d=class extends h{render(){return l`
      <div class="reasoning">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}};d.styles=p(y);d=_([g(v)],d);const x=":host{display:block}.reasoning-content{padding:.5rem 0}";var T=Object.defineProperty,b=Object.getOwnPropertyDescriptor,f=(n,e,o,a)=>{for(var t=a>1?void 0:a?b(e,o):e,i=n.length-1,s;i>=0;i--)(s=n[i])&&(t=(a?s(e,o,t):s(t))||t);return a&&t&&T(e,o,t),t};const C="forge-ai-reasoning-content";let c=class extends h{constructor(){super(...arguments),this._displayedText="",this._fullText="",this._animationId=null,this._hasStarted=!1}firstUpdated(){setTimeout(()=>{this._extractTextAndAnimate()},100)}_handleSlotChange(){this._hasStarted||this._extractTextAndAnimate()}_extractTextAndAnimate(){if(this._hasStarted)return;const n=this.shadowRoot?.querySelector("slot");if(n){const e=n.assignedNodes({flatten:!0});this._fullText=e.map(o=>o.textContent||"").join("").trim(),this._fullText&&(this._hasStarted=!0,this._startTypingAnimation())}}_startTypingAnimation(){this._animationId&&clearTimeout(this._animationId),this._displayedText="";let n=0;const e=10,o=()=>{n<this._fullText.length?(this._displayedText=this._fullText.substring(0,n+1),n++,this._animationId=setTimeout(o,e)):this._animationId=null};o()}render(){return this._hasStarted?l`
        <div class="reasoning-content">
          <span class="animated-text">${this._displayedText}</span>
        </div>
      `:l`
      <div class="reasoning-content">
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}};c.styles=p(x);f([m()],c.prototype,"_displayedText",2);c=f([g(C)],c);const A="forge-ai-reasoning",P={title:"AI/Primitives/Reasoning",component:A,render:()=>{const n=["Based on the provided information, I can reason through this step by step:","Observation: The user is asking about a complex technical problem.","Analysis: Multiple factors need to be considered including performance, scalability, and maintainability.","Evaluation: The proposed solution addresses the core requirements while maintaining code quality.","Conclusion: This approach provides the best balance of functionality and maintainability. Therefore, I recommend proceeding with the suggested implementation."];return setTimeout(()=>{const e=document.querySelector("forge-ai-reasoning");e&&(e.innerHTML="",n.forEach((o,a)=>{setTimeout(()=>{const t=document.createElement("forge-ai-reasoning-content");t.textContent=o,e.appendChild(t)},a*1e3)}))},100),l`
      <forge-ai-reasoning>
        <!-- Content will be dynamically added -->
      </forge-ai-reasoning>
    `}},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const R=["Demo"];export{r as Demo,R as __namedExportsOrder,P as default};
