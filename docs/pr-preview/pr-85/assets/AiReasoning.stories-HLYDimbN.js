import{r as c,i as h,x as d}from"./iframe-CPkWWJPm.js";import{t as f}from"./custom-element-BhZVzxrc.js";import{n as u}from"./property-pOi3i4o6.js";import{r as x}from"./state-0wEvspZY.js";import"./ai-reasoning-header-DkhF-mLa.js";import"./ai-gradient-container-BDfNa_2h.js";import"./ai-chat-interface-BUbGTDpS.js";const _=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block}.reasoning{overflow:hidden;max-height:0;transition:max-height .3s ease-out}.reasoning.expanded{max-height:500px}.content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit);padding:var(--forge-spacing-medium, 16px)}`;var v=Object.defineProperty,T=Object.getOwnPropertyDescriptor,m=(e,n,a,o)=>{for(var t=o>1?void 0:o?T(n,a):n,r=e.length-1,i;r>=0;r--)(i=e[r])&&(t=(o?i(n,a,t):i(t))||t);return o&&t&&v(n,a,t),t};const b="forge-ai-reasoning";let l=class extends h{constructor(){super(...arguments),this.expanded=!1}render(){return d`
      <slot name="header" @toggle=${this._handleHeaderToggle}></slot>
      <div class="reasoning ${this.expanded?"expanded":""}">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}_handleHeaderToggle(e){this.expanded=e.detail.expanded}};l.styles=c(_);m([u({type:Boolean,reflect:!0})],l.prototype,"expanded",2);l=m([f(b)],l);const A=":host{display:block}.reasoning-content{padding:.5rem 0}";var C=Object.defineProperty,S=Object.getOwnPropertyDescriptor,y=(e,n,a,o)=>{for(var t=o>1?void 0:o?S(n,a):n,r=e.length-1,i;r>=0;r--)(i=e[r])&&(t=(o?i(n,a,t):i(t))||t);return o&&t&&C(n,a,t),t};const $="forge-ai-reasoning-content";let g=class extends h{constructor(){super(...arguments),this._displayedText="",this._fullText="",this._animationId=null,this._hasStarted=!1}firstUpdated(){setTimeout(()=>{this._extractTextAndAnimate()},100)}_handleSlotChange(){this._hasStarted||this._extractTextAndAnimate()}_extractTextAndAnimate(){if(this._hasStarted)return;const e=this.shadowRoot?.querySelector("slot");if(e){const n=e.assignedNodes({flatten:!0});this._fullText=n.map(a=>a.textContent||"").join("").trim(),this._fullText&&(this._hasStarted=!0,this._startTypingAnimation())}}_startTypingAnimation(){this._animationId&&clearTimeout(this._animationId),this._displayedText="";let e=0;const n=10,a=()=>{e<this._fullText.length?(this._displayedText=this._fullText.substring(0,e+1),e++,this._animationId=setTimeout(a,n)):this._animationId=null};a()}render(){return this._hasStarted?d`
        <div class="reasoning-content">
          <span class="animated-text">${this._displayedText}</span>
        </div>
      `:d`
      <div class="reasoning-content">
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}};g.styles=c(A);y([x()],g.prototype,"_displayedText",2);g=y([f($)],g);const w="forge-ai-reasoning",I={title:"AI/Primitives/Reasoning",component:w,tags:["autodocs"],argTypes:{expanded:{control:"boolean",description:"Whether the reasoning is expanded"},reasoning:{control:"boolean",description:"Whether this is a reasoning component"},title:{control:"text",description:"Title for the reasoning section"}},args:{expanded:!0,title:"AI Reasoning Process",reasoningTitle:"Thinking..."},render:e=>{const n=["Based on the provided information, I can reason through this step by step:","Observation: The user is asking about a complex technical problem.","Analysis: Multiple factors need to be considered including performance, scalability, and maintainability.","Evaluation: The proposed solution addresses the core requirements while maintaining code quality.","Conclusion: This approach provides the best balance of functionality and maintainability. Therefore, I recommend proceeding with the suggested implementation."],a=d`
      <forge-ai-gradient-container style="height: 800px; width: 100%;">
        <forge-ai-chat-interface>
          <forge-ai-reasoning .expanded=${e.expanded} id="reasoning-container">
            <forge-ai-reasoning-header slot="header" .expanded=${e.expanded} .reasoning=${e.reasoning}>
              <span slot="reasoning-title">${e.reasoningTitle}</span>
              <span slot="title">${e.title}</span>
            </forge-ai-reasoning-header>
          </forge-ai-reasoning>
        </forge-ai-chat-interface>
      </forge-ai-gradient-container>
    `;return setTimeout(()=>{const o=document.getElementById("reasoning-container"),t=o?.querySelector("forge-ai-reasoning-header");o&&t&&!o.hasAttribute("data-content-loaded")&&(o.setAttribute("data-content-loaded","true"),n.forEach((r,i)=>{setTimeout(()=>{i===0&&(t.reasoning=!0);const p=document.createElement("forge-ai-reasoning-content");p.textContent=r,o.appendChild(p),i===n.length-1&&setTimeout(()=>{t.reasoning=!1},r.length*10+500)},i*2e3)}))},100),a}},s={};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};const O=["Demo"],q=Object.freeze(Object.defineProperty({__proto__:null,Demo:s,__namedExportsOrder:O,default:I},Symbol.toStringTag,{value:"Module"}));export{q as A,s as D};
