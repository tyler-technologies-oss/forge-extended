var u=r=>{throw TypeError(r)};var m=(r,t,e)=>t.has(r)||u("Cannot "+e);var a=(r,t,e)=>(m(r,t,"read from private field"),e?e.call(r):t.get(r)),y=(r,t,e)=>t.has(r)?u("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e);var l=(r,t,e)=>(m(r,t,"access private method"),e);import{i as N,r as F,x as n}from"./iframe-CSr27Gi9.js";import{n as x}from"./query-assigned-nodes-cwDSNLIu.js";import{n as k}from"./when-3fO0zp9C.js";import{t as C}from"./component-utils-DDaW1mI9.js";import{h as d}from"./lit-utils-BDYppvBO.js";const H=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{height:100%;--_content-scaffold-header-height: var(--forge-content-scaffold-header-height, auto);--_content-scaffold-header-background: var(--forge-content-scaffold-header-background, transparent);--_content-scaffold-header-min-height: var(--forge-content-scaffold-header-min-height, 48px);--_content-scaffold-body-height: var(--forge-content-scaffold-body-height, auto);--_content-scaffold-body-padding-inline: var( --forge-content-scaffold-body-padding-inline, var(--forge-spacing-medium, 16px) );--_content-scaffold-body-padding-block: var( --forge-content-scaffold-body-padding-block, var(--forge-spacing-xxsmall, 4px) );--_content-scaffold-footer-height: var(--forge-content-scaffold-footer-height, auto);--_content-scaffold-footer-full-padding: var( --forge-content-scaffold-footer-full-padding, var(--forge-spacing-small, 12px) );--_content-scaffold-footer-background: var(--forge-content-scaffold-footer-background, transparent);--_content-scaffold-footer-min-height: var(--forge-content-scaffold-footer-min-height, 48px)}.outer-container{display:grid;grid-template-rows:auto 1fr auto;height:100%}.container{box-sizing:border-box;display:grid;grid-template-rows:1fr auto;height:100%}.header{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";background-color:var(--_content-scaffold-header-background);height:var(--_content-scaffold-header-height);min-height:var(--_content-scaffold-header-min-height);border-start-start-radius:12px;border-start-end-radius:12px}.header-full-content{display:block;height:auto}.header-start-container{grid-area:start;display:flex;align-items:center}.header-start-container slot[name=header-start]::slotted(*){margin-inline-start:var(--forge-spacing-medium, 16px)}.header-end{grid-area:end;display:flex;align-items:center;width:100%;margin-inline-end:var(--forge-spacing-xsmall, 8px)}.body{overflow-y:auto;height:var(--_content-scaffold-body-height)}.body::-webkit-scrollbar{height:var(--forge-scrollbar-height, 16px);width:var(--forge-scrollbar-width, 16px)}.body::-webkit-scrollbar-track{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.body::-webkit-scrollbar-track:hover{background-color:var(--forge-scrollbar-track-container-hover, var(--forge-theme-surface-container-low, #ebebeb))}.body::-webkit-scrollbar-corner{background-color:var(--forge-scrollbar-track-container, var(--forge-theme-surface-container-low, #ebebeb))}.body::-webkit-scrollbar-thumb{height:var(--forge-scrollbar-thumb-min-height, 32px);width:var(--forge-scrollbar-thumb-min-width, 32px);border-radius:var(--forge-scrollbar-border-radius, calc(var(--forge-shape-full, 9999px) * var(--forge-shape-factor, 1)));border-width:var(--forge-scrollbar-border-width, 3px);border-style:solid;border-color:transparent;background-color:var(--forge-scrollbar-thumb-container, var(--forge-theme-surface-container-medium, #c2c2c2));background-clip:content-box}.body::-webkit-scrollbar-thumb:hover{background-color:var(--forge-scrollbar-thumb-container-hover, var(--forge-theme-surface-container-high, #9e9e9e))}.body-inner{padding-inline:var(--_content-scaffold-body-padding-inline);padding-block:var(--_content-scaffold-body-padding-block)}.footer{display:grid;grid-template-columns:auto 1fr auto;align-items:center;grid-template-areas:"start . end";background-color:var(--_content-scaffold-footer-background);height:var(--_content-scaffold-footer-height);min-height:var(--_content-scaffold-footer-min-height);padding-inline:var(--forge-spacing-medium, 16px);padding-block-end:var(--forge-spacing-xxsmall, 4px);border-end-start-radius:12px;border-end-end-radius:12px}.footer-start{grid-area:start}.footer-end{grid-area:end}.footer-full-content{display:block;padding:var(--_content-scaffold-footer-full-padding)}`;var T=Object.defineProperty,_=(r,t,e,v)=>{for(var i=void 0,f=r.length-1,p;f>=0;f--)(p=r[f])&&(i=p(t,e,i)||i);return i&&T(t,e,i),i};const W="forge-content-scaffold";var o,h,g,w,$,c;const b=class b extends N{constructor(){super(...arguments);y(this,o)}render(){return n`
      <div class="outer-container" @slotchange=${l(this,o,c)}>
        ${a(this,o,w)}
        <div class="body" ${d()}>
          <div class="body-inner">
            <slot name="body"></slot>
          </div>
        </div>
        ${a(this,o,$)}
      </div>
    `}};o=new WeakSet,h=function(){return n`<slot name="header" @slotchange=${l(this,o,c)}></slot>`},g=function(){return n`<slot name="footer" @slotchange=${l(this,o,c)}></slot>`},w=function(){const e=this._slottedHeaderNodes.length>0;return k(e,()=>n` <div class="header-full-content">${a(this,o,h)}</div> `,()=>n`
        <div class="header" ${d()}>
          <div class="header-start-container">
            <div ${d()}>
              <slot name="before-header-start"></slot>
            </div>
            <slot name="header-start"></slot>
          </div>
          <div class="header-end" ${d()}>
            <slot name="header-end"></slot>
          </div>
        </div>
        ${a(this,o,h)}
      `)},$=function(){const e=this._slottedFooterNodes.length>0;return k(e,()=>n` <div class="footer-full-content">${a(this,o,g)}</div> `,()=>n`
        <div class="footer" ${d()}>
          <div class="footer-start" ${d()}>
            <slot name="footer-start"></slot>
          </div>
          <div class="footer-end" ${d()}>
            <slot name="footer-end"></slot>
          </div>
        </div>
        ${a(this,o,g)}
      `)},c=function(e){const v=e.target.name;["header","footer"].includes(v)&&this.requestUpdate()},b.styles=F(H);let s=b;_([x({slot:"header",flatten:!0})],s.prototype,"_slottedHeaderNodes");_([x({slot:"footer",flatten:!0})],s.prototype,"_slottedFooterNodes");C(W,s);
