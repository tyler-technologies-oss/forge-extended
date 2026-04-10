import{r as w,i as $,x as d}from"./iframe-DatE1pPE.js";import{t as C}from"./constants-BuXSMmg1.js";import{n as u}from"./query-assigned-nodes-cwDSNLIu.js";import{n as m}from"./when-3fO0zp9C.js";import{h as n}from"./lit-utils-CnQt0oyh.js";const S=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:block;height:100%;--_content-scaffold-header-height: var(--forge-content-scaffold-header-height, auto);--_content-scaffold-header-background: var(--forge-content-scaffold-header-background, transparent);--_content-scaffold-header-min-height: var(--forge-content-scaffold-header-min-height, 48px);--_content-scaffold-body-height: var(--forge-content-scaffold-body-height, auto);--_content-scaffold-body-padding-inline: var( --forge-content-scaffold-body-padding-inline, var(--forge-spacing-medium, 16px) );--_content-scaffold-body-padding-block: var( --forge-content-scaffold-body-padding-block, var(--forge-spacing-xxsmall, 4px) );--_content-scaffold-footer-height: var(--forge-content-scaffold-footer-height, auto);--_content-scaffold-footer-full-padding: var( --forge-content-scaffold-footer-full-padding, var(--forge-spacing-small, 12px) );--_content-scaffold-footer-background: var(--forge-content-scaffold-footer-background, transparent);--_content-scaffold-footer-min-height: var(--forge-content-scaffold-footer-min-height, 48px)}.container{box-sizing:border-box;display:grid;grid-template-rows:1fr auto;height:100%}.header{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";background-color:var(--_content-scaffold-header-background);height:var(--_content-scaffold-header-height);min-height:var(--_content-scaffold-header-min-height);border-start-start-radius:12px;border-start-end-radius:12px}.header-full-content{display:block;height:auto}.header-start-container{grid-area:start;display:flex;align-items:center}.header-start-container slot[name=header-start]::slotted(*){margin-inline-start:var(--forge-spacing-medium, 16px)}.header-end{grid-area:end;display:flex;align-items:center;width:100%;margin-inline-end:var(--forge-spacing-xsmall, 8px)}.body{overflow-y:auto;height:var(--_content-scaffold-body-height)}.body::-webkit-scrollbar{height:var(--forge-scrollbar-height, 16px);width:var(--forge-scrollbar-width, 16px)}.body::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.body::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover, var(--forge-theme-surface-container-low, #ebebeb))}.body::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.body::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height, 32px);width:var(--forge-scrollbar-thumb-min-width, 32px);border-radius:var(--forge-scrollbar-border-radius, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));border-width:var(--forge-scrollbar-border-width, 3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container, var(--forge-theme-surface-container-medium, #c2c2c2));background-clip:content-box}.body::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover, var(--forge-theme-surface-container-high, #9e9e9e))}.body-inner{padding-inline:var(--_content-scaffold-body-padding-inline);padding-block:var(--_content-scaffold-body-padding-block)}.footer{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";background-color:var(--_content-scaffold-footer-background);height:var(--_content-scaffold-footer-height);min-height:var(--_content-scaffold-footer-min-height);padding-inline:var(--forge-spacing-medium, 16px);padding-block-end:var(--forge-spacing-xxsmall, 4px);border-end-start-radius:12px;border-end-end-radius:12px}.footer-start{grid-area:start}.footer-end{grid-area:end}.footer-full-content{display:block;padding:var(--_content-scaffold-footer-full-padding)}`;var N=Object.defineProperty,F=Object.getOwnPropertyDescriptor,_=e=>{throw TypeError(e)},b=(e,o,t,l)=>{for(var a=l>1?void 0:l?F(o,t):o,f=e.length-1,h;f>=0;f--)(h=e[f])&&(a=(l?h(o,t,a):h(a))||a);return l&&a&&N(o,t,a),a},y=(e,o,t)=>o.has(e)||_("Cannot "+t),s=(e,o,t)=>(y(e,o,"read from private field"),t?t.call(e):o.get(e)),W=(e,o,t)=>o.has(e)?_("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(e):o.set(e,t),p=(e,o,t)=>(y(e,o,"access private method"),t),r,g,v,k,x,c;const O="forge-content-scaffold";let i=class extends ${constructor(){super(...arguments),W(this,r)}render(){return d`
      ${s(this,r,k)}
      <div class="container" @slotchange=${p(this,r,c)}>
        <div class="body" ${n()}>
          <div class="body-inner">
            <slot name="body"></slot>
          </div>
        </div>
        ${s(this,r,x)}
      </div>
    `}};r=new WeakSet;g=function(){return d`<slot name="header" @slotchange=${p(this,r,c)}></slot>`};v=function(){return d`<slot name="footer" @slotchange=${p(this,r,c)}></slot>`};k=function(){const e=this._slottedHeaderNodes.length>0;return m(e,()=>d` <div class="header-full-content">${s(this,r,g)}</div> `,()=>d`
        <div class="header" ${n()}>
          <div class="header-start-container">
            <div ${n()}>
              <slot name="before-header-start"></slot>
            </div>
            <slot name="header-start"></slot>
          </div>
          <div class="header-end" ${n()}>
            <slot name="header-end"></slot>
          </div>
        </div>
        ${s(this,r,g)}
      `)};x=function(){const e=this._slottedFooterNodes.length>0;return m(e,()=>d` <div class="footer-full-content">${s(this,r,v)}</div> `,()=>d`
        <div class="footer" ${n()}>
          <div class="footer-start" ${n()}>
            <slot name="footer-start"></slot>
          </div>
          <div class="footer-end" ${n()}>
            <slot name="footer-end"></slot>
          </div>
        </div>
        ${s(this,r,v)}
      `)};c=function(e){const o=e.target.name;["header","footer"].includes(o)&&this.requestUpdate()};i.styles=w(S);b([u({slot:"header",flatten:!0})],i.prototype,"_slottedHeaderNodes",2);b([u({slot:"footer",flatten:!0})],i.prototype,"_slottedFooterNodes",2);i=b([C(O)],i);
