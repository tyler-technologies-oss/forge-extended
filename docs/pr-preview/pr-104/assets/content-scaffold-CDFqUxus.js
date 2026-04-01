import{T as $,r as k,i as w,x as n}from"./iframe-C_gvn9Wl.js";import{t as N}from"./constants-EZ5a0zyM.js";import{n as m,a as u}from"./when-DfnyT8j1.js";import{f as S}from"./async-directive-B1lMd8rW.js";import{e as W}from"./directive-CJw_OlP2.js";const E=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;height:100%;--_content-scaffold-gap: var(--forge-content-scaffold-gap, var(--forge-spacing-medium, 16px));--_content-scaffold-header-height: var(--forge-content-scaffold-header-height, auto);--_content-scaffold-header-background: var(--forge-content-scaffold-header-background, transparent);--_content-scaffold-header-min-height: var(--forge-content-scaffold-header-min-height, 48px);--_content-scaffold-body-height: var(--forge-content-scaffold-body-height, auto);--_content-scaffold-body-padding-inline: var( --forge-content-scaffold-body-padding-inline, var(--forge-spacing-medium, 16px) );--_content-scaffold-footer-height: var(--forge-content-scaffold-footer-height, auto);--_content-scaffold-footer-background: var(--forge-content-scaffold-footer-background, transparent);--_content-scaffold-footer-min-height: var(--forge-content-scaffold-footer-min-height, 48px)}.container{box-sizing:border-box;display:grid;grid-template-rows:auto 1fr auto;gap:var(--_content-scaffold-gap);height:100%}.header{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";background-color:var(--_content-scaffold-header-background);height:var(--_content-scaffold-header-height);min-height:var(--_content-scaffold-header-min-height);border-start-start-radius:12px;border-start-end-radius:12px;border-bottom:1px solid var(--forge-theme-outline, #e0e0e0)}.header-full-content{display:block}.header-start-container{grid-area:start;display:flex;align-items:center}.header-start-container slot[name=header-start]::slotted(*){margin-inline-start:var(--forge-spacing-medium, 16px)}.header-end{grid-area:end;display:flex;align-items:center;width:100%;margin-inline-end:var(--forge-spacing-xsmall, 8px)}.body{overflow-y:auto;height:var(--_content-scaffold-body-height)}.body-inner{padding-inline:var(--_content-scaffold-body-padding-inline)}.footer{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";background-color:var(--_content-scaffold-footer-background);height:var(--_content-scaffold-footer-height);min-height:var(--_content-scaffold-footer-min-height);padding-inline:var(--forge-spacing-medium, 16px);padding-block-end:var(--forge-spacing-xxsmall, 4px);border-end-start-radius:12px;border-end-end-radius:12px}.footer-start{grid-area:start}.footer-end{grid-area:end}.footer-full-content{display:block}`;class q extends S{#e;#t=!1;update(e,[o]){if(o!==this.#e&&(this.#e=o),this.#t)return;const a=e.element;a.addEventListener("slotchange",()=>{this.#o(a),this.#a(e)}),this.#o(a),queueMicrotask(()=>this.#a(e)),this.#t=!0}render(e){return $}#r(e){const o=e.querySelectorAll("slot");return Array.from(o).some(r=>r.assignedNodes().length>0)}#o(e){const o=this.#r(e);o?e.style.removeProperty("display"):e.style.display="none",this.#e&&(this.#e.hidden=!o)}#a(e){try{(e.options?.host).requestUpdate()}catch{console.warn("Unable to request update on host element. Ensure that the directive is being used within a LitElement context.")}}}const s=W(q);var A=Object.defineProperty,F=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},v=(t,e,o,r)=>{for(var a=r>1?void 0:r?F(e,o):e,h=t.length-1,g;h>=0;h--)(g=t[h])&&(a=(r?g(e,o,a):g(a))||a);return r&&a&&A(e,o,a),a},y=(t,e,o)=>e.has(t)||_("Cannot "+o),d=(t,e,o)=>(y(t,e,"read from private field"),o?o.call(t):e.get(t)),p=(t,e,o)=>e.has(t)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),H=(t,e,o)=>(y(t,e,"access private method"),o),c,f,i,b,x,C;const P="forge-content-scaffold";let l=class extends w{constructor(){super(...arguments),p(this,i),p(this,c,n`<slot name="header"></slot>`),p(this,f,n`<slot name="footer"></slot>`)}render(){return n`
      <div class="container" @slotchange=${H(this,i,C)}>
        ${d(this,i,b)}
        <div class="body" ${s()}>
          <div class="body-inner">
            <slot name="body"></slot>
          </div>
        </div>
        ${d(this,i,x)}
      </div>
    `}};c=new WeakMap;f=new WeakMap;i=new WeakSet;b=function(){const t=this._slottedHeaderNodes.length>0;return u(t,()=>n` <div class="header-full-content">${d(this,c)}</div> `,()=>n`
        <div class="header" ${s()}>
          <div class="header-start-container">
            <div ${s()}>
              <slot name="before-header-start"></slot>
            </div>
            <slot name="header-start"></slot>
          </div>
          <div class="header-end" ${s()}>
            <slot name="header-end"></slot>
          </div>
        </div>
        ${d(this,c)}
      `)};x=function(){const t=this._slottedFooterNodes.length>0;return u(t,()=>n` <div class="footer-full-content">${d(this,f)}</div> `,()=>n`
        <div class="footer" ${s()}>
          <div class="footer-start" ${s()}>
            <slot name="footer-start"></slot>
          </div>
          <div class="footer-end" ${s()}>
            <slot name="footer-end"></slot>
          </div>
        </div>
        ${d(this,f)}
      `)};C=function(t){const e=t.target.name;["header","footer"].includes(e)&&this.requestUpdate()};l.styles=k(E);v([m({slot:"header",flatten:!0})],l.prototype,"_slottedHeaderNodes",2);v([m({slot:"footer",flatten:!0})],l.prototype,"_slottedFooterNodes",2);l=v([N(P)],l);export{s as h};
