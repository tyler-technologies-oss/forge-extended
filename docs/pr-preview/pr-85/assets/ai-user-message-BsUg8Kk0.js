import{r as l,i as d,x as p}from"./iframe-CUyNwiwu.js";import{t as c}from"./custom-element-BhZVzxrc.js";const y=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */:host{display:inline-block;box-sizing:border-box}.grid-container{display:grid;grid-template-rows:1fr}.ai-message-container{padding-block:var(--forge-spacing-xsmall, 8px);padding-inline:var(--forge-spacing-medium, 16px);background-color:var(--forge-theme-surface);border:1px solid var(--forge-theme-outline);border-radius:var(--forge-shape-large);border-start-end-radius:0;margin-inline-start:var(--forge-spacing-xxlarge, 48px);margin-block-end:24px}span{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-body1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-body1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-font-size-scale, .875)));font-weight:var(--forge-typography-body1-font-weight, 400);line-height:var(--forge-typography-body1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-body-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-body1-letter-spacing, .0357142857em);text-transform:var(--forge-typography-body1-text-transform, inherit);text-decoration:var(--forge-typography-body1-text-decoration, inherit);color:var(--forge-theme-on-surface);overflow-wrap:break-word}`;var h=Object.getOwnPropertyDescriptor,f=e=>{throw TypeError(e)},v=(e,r,a,i)=>{for(var o=i>1?void 0:i?h(r,a):r,t=e.length-1,g;t>=0;t--)(g=e[t])&&(o=g(o)||o);return o},m=(e,r,a)=>r.has(e)||f("Cannot "+a),x=(e,r,a)=>(m(e,r,"read from private field"),a?a.call(e):r.get(e)),b=(e,r,a)=>r.has(e)?f("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,a),n;const u="forge-ai-user-message";let s=class extends d{constructor(){super(...arguments),b(this,n,p`
    <div class="ai-message-container">
      <span>
        <slot></slot>
      </span>
    </div>
  `)}render(){return p` <div class="grid-container">${x(this,n)}</div> `}};n=new WeakMap;s.styles=l(y);s=v([c(u)],s);
