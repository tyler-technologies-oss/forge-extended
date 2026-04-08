import{T as w,r as $,i as C,x as d}from"./iframe-BLBGr_e1.js";import{t as N}from"./constants-BWeQaIEx.js";import{n as u,a as m}from"./when-DfnyT8j1.js";import{f as S}from"./async-directive-DMXmN-NY.js";import{e as E}from"./directive-CJw_OlP2.js";const q=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;height:100%;--_content-scaffold-header-height: var(--forge-content-scaffold-header-height, auto);--_content-scaffold-header-background: var(--forge-content-scaffold-header-background, transparent);--_content-scaffold-header-min-height: var(--forge-content-scaffold-header-min-height, 48px);--_content-scaffold-body-height: var(--forge-content-scaffold-body-height, auto);--_content-scaffold-body-padding-inline: var( --forge-content-scaffold-body-padding-inline, var(--forge-spacing-medium, 16px) );--_content-scaffold-body-padding-block: var( --forge-content-scaffold-body-padding-block, var(--forge-spacing-xxsmall, 4px) );--_content-scaffold-footer-height: var(--forge-content-scaffold-footer-height, auto);--_content-scaffold-footer-full-padding: var( --forge-content-scaffold-footer-full-padding, var(--forge-spacing-small, 12px) );--_content-scaffold-footer-background: var(--forge-content-scaffold-footer-background, transparent);--_content-scaffold-footer-min-height: var(--forge-content-scaffold-footer-min-height, 48px)}.container{box-sizing:border-box;display:grid;grid-template-rows:1fr auto;height:100%}.header{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";background-color:var(--_content-scaffold-header-background);height:var(--_content-scaffold-header-height);min-height:var(--_content-scaffold-header-min-height);border-start-start-radius:12px;border-start-end-radius:12px}.header-full-content{display:block;height:auto}.header-start-container{grid-area:start;display:flex;align-items:center}.header-start-container slot[name=header-start]::slotted(*){margin-inline-start:var(--forge-spacing-medium, 16px)}.header-end{grid-area:end;display:flex;align-items:center;width:100%;margin-inline-end:var(--forge-spacing-xsmall, 8px)}.body{overflow-y:auto;height:var(--_content-scaffold-body-height)}.body::-webkit-scrollbar{height:var(--forge-scrollbar-height, 16px);width:var(--forge-scrollbar-width, 16px)}.body::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.body::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover, var(--forge-theme-surface-container-low, #ebebeb))}.body::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.body::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height, 32px);width:var(--forge-scrollbar-thumb-min-width, 32px);border-radius:var(--forge-scrollbar-border-radius, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));border-width:var(--forge-scrollbar-border-width, 3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container, var(--forge-theme-surface-container-medium, #c2c2c2));background-clip:content-box}.body::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover, var(--forge-theme-surface-container-high, #9e9e9e))}.body-inner{padding-inline:var(--_content-scaffold-body-padding-inline);padding-block:var(--_content-scaffold-body-padding-block)}.footer{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";background-color:var(--_content-scaffold-footer-background);height:var(--_content-scaffold-footer-height);min-height:var(--_content-scaffold-footer-min-height);padding-inline:var(--forge-spacing-medium, 16px);padding-block-end:var(--forge-spacing-xxsmall, 4px);border-end-start-radius:12px;border-end-end-radius:12px}.footer-start{grid-area:start}.footer-end{grid-area:end}.footer-full-content{display:block;padding:var(--_content-scaffold-footer-full-padding)}`;class A extends S{#e;#t=!1;update(e,[o]){if(o!==this.#e&&(this.#e=o),this.#t)return;const r=e.element;r.addEventListener("slotchange",()=>{this.#o(r),this.#r(e)}),this.#o(r),queueMicrotask(()=>this.#r(e)),this.#t=!0}render(e){return w}#a(e){const o=e.querySelectorAll("slot");return Array.from(o).some(n=>n.assignedNodes().length>0)}#o(e){const o=this.#a(e);o?e.style.removeProperty("display"):e.style.display="none",this.#e&&(this.#e.hidden=!o)}#r(e){try{(e.options?.host).requestUpdate()}catch{console.warn("Unable to request update on host element. Ensure that the directive is being used within a LitElement context.")}}}const s=E(A);var W=Object.defineProperty,F=Object.getOwnPropertyDescriptor,y=t=>{throw TypeError(t)},v=(t,e,o,n)=>{for(var r=n>1?void 0:n?F(e,o):e,f=t.length-1,h;f>=0;f--)(h=t[f])&&(r=(n?h(e,o,r):h(r))||r);return n&&r&&W(e,o,r),r},_=(t,e,o)=>e.has(t)||y("Cannot "+o),i=(t,e,o)=>(_(t,e,"read from private field"),o?o.call(t):e.get(t)),H=(t,e,o)=>e.has(t)?y("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),b=(t,e,o)=>(_(t,e,"access private method"),o),a,g,p,x,k,c;const P="forge-content-scaffold";let l=class extends C{constructor(){super(...arguments),H(this,a)}render(){return d`
      ${i(this,a,x)}
      <div class="container" @slotchange=${b(this,a,c)}>
        <div class="body" ${s()}>
          <div class="body-inner">
            <slot name="body"></slot>
          </div>
        </div>
        ${i(this,a,k)}
      </div>
    `}};a=new WeakSet;g=function(){return d`<slot name="header" @slotchange=${b(this,a,c)}></slot>`};p=function(){return d`<slot name="footer" @slotchange=${b(this,a,c)}></slot>`};x=function(){const t=this._slottedHeaderNodes.length>0;return m(t,()=>d` <div class="header-full-content">${i(this,a,g)}</div> `,()=>d`
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
        ${i(this,a,g)}
      `)};k=function(){const t=this._slottedFooterNodes.length>0;return m(t,()=>d` <div class="footer-full-content">${i(this,a,p)}</div> `,()=>d`
        <div class="footer" ${s()}>
          <div class="footer-start" ${s()}>
            <slot name="footer-start"></slot>
          </div>
          <div class="footer-end" ${s()}>
            <slot name="footer-end"></slot>
          </div>
        </div>
        ${i(this,a,p)}
      `)};c=function(t){const e=t.target.name;["header","footer"].includes(e)&&this.requestUpdate()};l.styles=$(q);v([u({slot:"header",flatten:!0})],l.prototype,"_slottedHeaderNodes",2);v([u({slot:"footer",flatten:!0})],l.prototype,"_slottedFooterNodes",2);l=v([N(P)],l);export{s as h};
