import{T as c,r as h,i as g,x as f}from"./iframe-DB7khuar.js";import{n as p,t as m}from"./constants-BMWnaSmQ.js";import{n as u}from"./when-3fO0zp9C.js";import{f as v}from"./async-directive-DqBYNgnJ.js";import{e as b}from"./directive-CJw_OlP2.js";import{d as y}from"./index-DhCrqmz7.js";const x=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;height:100%;--_forge-content-scaffold-header-height: var(--forge-content-scaffold-header-height, auto);--_forge-content-scaffold-header-background: var(--forge-content-scaffold-header-background, transparent);--_forge-content-scaffold-header-min-height: var(--forge-content-scaffold-header-min-height, 48px);--_forge-content-scaffold-body-height: var(--forge-content-scaffold-body-height, auto);--_forge-content-scaffold-body-padding: var(--forge-content-scaffold-body-padding, var(--forge-spacing-medium, 16px));--_forge-content-scaffold-footer-height: var(--forge-content-scaffold-footer-height, auto);--_forge-content-scaffold-footer-background: var(--forge-content-scaffold-footer-background, transparent);--_forge-content-scaffold-footer-min-height: var(--forge-content-scaffold-footer-min-height, 48px)}.container{box-sizing:border-box;display:grid;grid-template-rows:auto 1fr auto;height:100%}.header{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";background-color:var(--_forge-content-scaffold-header-background);height:var(--_forge-content-scaffold-header-height);min-height:var(--_forge-content-scaffold-header-min-height);border-start-start-radius:12px;border-start-end-radius:12px;border-bottom:1px solid var(--forge-theme-outline)}.header-full-content{display:block}.header-start-container{grid-area:start;display:flex;align-items:center}.header-start-container slot[name=header-start]::slotted(*){margin-inline-start:var(--forge-spacing-medium, 16px)}.header-end{grid-area:end;display:flex;align-items:center;width:100%;margin-inline-end:var(--forge-spacing-xsmall, 8px)}.body{overflow-y:auto;height:var(--_forge-content-scaffold-body-height)}.body-inner{padding:var(--_forge-content-scaffold-body-padding)}.footer{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";background-color:var(--_forge-content-scaffold-footer-background);height:var(--_forge-content-scaffold-footer-height);min-height:var(--_forge-content-scaffold-footer-min-height);padding-inline:var(--forge-spacing-medium, 16px);padding-block-end:var(--forge-spacing-xxsmall, 4px);border-end-start-radius:12px;border-end-end-radius:12px}.footer-start{grid-area:start}.footer-end{grid-area:end}`;class _ extends v{#e;#t=!1;update(e,[t]){if(t!==this.#e&&(this.#e=t),this.#t)return;const o=e.element;o.addEventListener("slotchange",()=>{this.#o(o),this.#r(e)}),this.#o(o),queueMicrotask(()=>this.#r(e)),this.#t=!0}render(e){return c}#a(e){const t=e.querySelectorAll("slot");return Array.from(t).some(r=>r.assignedNodes().length>0)}#o(e){const t=this.#a(e);t?e.style.removeProperty("display"):e.style.display="none",this.#e&&(this.#e.hidden=!t)}#r(e){try{(e.options?.host).requestUpdate()}catch{console.warn("Unable to request update on host element. Ensure that the directive is being used within a LitElement context.")}}}const a=b(_);var C=Object.defineProperty,$=Object.getOwnPropertyDescriptor,l=(s,e,t,r)=>{for(var o=r>1?void 0:r?$(e,t):e,d=s.length-1,i;d>=0;d--)(i=s[d])&&(o=(r?i(e,t,o):i(o))||o);return r&&o&&C(e,t,o),o};const w="forge-content-scaffold";let n=class extends g{constructor(){super(...arguments),this.fullWidthHeader=!1}render(){return f`
      <div class="container">
        ${u(this.fullWidthHeader,()=>f`
            <div class="header-full-content">
              <slot name="header"></slot>
            </div>
          `,()=>f`
            <div class="header" ${a()}>
              <div class="header-start-container">
                <div ${a()}>
                  <slot name="before-header-start"></slot>
                </div>
                <slot name="header-start"></slot>
              </div>
              <div class="header-end" ${a()}>
                <slot name="header-end"></slot>
              </div>
            </div>
          `)}
        <div class="body" ${a()}>
          <div class="body-inner">
            <slot name="body"></slot>
          </div>
        </div>
        <div class="footer" ${a()}>
          <div class="footer-start" ${a()}>
            <slot name="footer-start"></slot>
          </div>
          <div class="footer-end" ${a()}>
            <slot name="footer-end"></slot>
          </div>
        </div>
      </div>
    `}};y();n.styles=h(x);l([p({type:Boolean,attribute:"full-width-header"})],n.prototype,"fullWidthHeader",2);n=l([m(w)],n);export{n as C,w as a,a as h};
