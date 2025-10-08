import{r as d,i as f,x as s}from"./iframe-lqpmXWRw.js";import{I as b,o as c,p as h,h as p,q as v}from"./icon-registry-B3BS71cJ.js";import{t as _}from"./custom-element-BhZVzxrc.js";import{d as m}from"./index-7Wy6wB-P.js";const y=`/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */.forge-toolbar{--_toolbar-background: var(--forge-toolbar-background, var(--forge-theme-surface, #ffffff));--_toolbar-height: var(--forge-toolbar-height, 56px);--_toolbar-min-height: var(--forge-toolbar-min-height, var(--_toolbar-height));--_toolbar-divider-width: var(--forge-toolbar-divider-width, var(--forge-border-thin, 1px));--_toolbar-divider-style: var(--forge-toolbar-divider-style, solid);--_toolbar-divider-color: var(--forge-toolbar-divider-color, var(--forge-theme-outline, #e0e0e0));--_toolbar-shape: var(--forge-toolbar-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_toolbar-start-start-shape: var(--forge-toolbar-start-start-shape, var(--_toolbar-shape));--_toolbar-start-end-shape: var(--forge-toolbar-start-end-shape, var(--_toolbar-shape));--_toolbar-end-start-shape: var(--forge-toolbar-end-start-shape, 0);--_toolbar-end-end-shape: var(--forge-toolbar-end-end-shape, 0);--_toolbar-padding: var(--forge-toolbar-padding, var(--forge-spacing-medium, 16px));--_toolbar-padding-block: var(--forge-toolbar-padding-block, 0);--_toolbar-padding-inline: var(--forge-toolbar-padding-inline, var(--_toolbar-padding));--_toolbar-columns: var(--forge-toolbar-columns, auto 1fr auto)}.forge-toolbar{display:grid;grid-template-columns:var(--_toolbar-columns);height:var(--_toolbar-height);min-height:var(--_toolbar-min-height);box-sizing:border-box;padding-inline:0;border-block-end-width:var(--_toolbar-divider-width);border-block-end-style:var(--_toolbar-divider-style);border-block-end-color:var(--_toolbar-divider-color);border-start-start-radius:var(--_toolbar-start-start-shape);border-start-end-radius:var(--_toolbar-start-end-shape);border-end-start-radius:var(--_toolbar-end-start-shape);border-end-end-radius:var(--_toolbar-end-end-shape);background:var(--_toolbar-background);grid-template-columns:1fr;grid-template-areas:"start"}.forge-toolbar:has(.forge-toolbar__center),.forge-toolbar:has(.forge-toolbar__end){grid-template-columns:auto 1fr auto;grid-template-areas:"start center end"}.forge-toolbar:has(.forge-toolbar__end):not(:has(.forge-toolbar__center)){grid-template-columns:1fr auto;grid-template-areas:"start end"}.forge-toolbar--inverted{--_toolbar-start-start-shape: var(--forge-toolbar-start-start-shape, 0);--_toolbar-start-end-shape: var(--forge-toolbar-start-end-shape, 0);--_toolbar-end-start-shape: var(--_toolbar-shape);--_toolbar-end-end-shape: var(--_toolbar-shape);border-block-end:none;border-block-start-width:var(--_toolbar-divider-width);border-block-start-style:var(--_toolbar-divider-style);border-block-start-color:var(--_toolbar-divider-color)}.forge-toolbar--no-divider{border:none}.forge-toolbar--auto-height{--_toolbar-height: var(--forge-toolbar-height, auto)}.forge-toolbar :where(h1,h2,h3,h4,h5,h6){margin:0}.forge-toolbar__start,.forge-toolbar__center,.forge-toolbar__end{display:flex;align-items:center;width:100%;box-sizing:border-box}.forge-toolbar__start{grid-area:start}.forge-toolbar__center{justify-content:center;min-width:0;grid-area:center}.forge-toolbar__end{justify-content:end;grid-area:end}:host{display:block}.artifact{border:1px solid var(--forge-theme-outline, #e0e0e0);border-radius:calc(var(--forge-shape-large, 8px) * var(--forge-shape-factor, 1))}.forge-toolbar{--forge-theme-surface: transparent;padding-inline:var(--forge-spacing-medium, 16px)}.forge-toolbar__start{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--forge-typography-heading1-font-family, var(--forge-typography-font-family, "Roboto", sans-serif));font-size:var(--forge-typography-heading1-font-size, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading1-font-size-scale, .875)));font-weight:var(--forge-typography-heading1-font-weight, 500);line-height:var(--forge-typography-heading1-line-height, calc(var(--forge-typography-font-size, 1rem) * var(--forge-typography-heading1-line-height-scale, 1.125)));letter-spacing:var(--forge-typography-heading1-letter-spacing, .0178571429em);text-transform:var(--forge-typography-heading1-text-transform, inherit);text-decoration:var(--forge-typography-heading1-text-decoration, inherit)}.forge-toolbar__end{color:var(--forge-theme-text-medium, rgba(0, 0, 0, .6))}.content{padding:var(--forge-spacing-medium, 16px)}`;var u=Object.getOwnPropertyDescriptor,x=(a,n,g,i)=>{for(var o=i>1?void 0:i?u(n,g):n,e=a.length-1,l;e>=0;e--)(l=a[e])&&(o=l(o)||o);return o};const k="forge-ai-artifact";let t=class extends f{render(){return s`
      <div class="artifact">
        <div class="forge-toolbar">
          <div class="forge-toolbar__start">
            <slot name="start"></slot>
          </div>
          <div class="forge-toolbar__end">
            <slot name="actions"></slot>
          </div>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}};t.styles=d(y);t=x([_(k)],t);m();b.define([c,h,p,v]);const w="forge-ai-artifact",A={title:"AI/Primitives/Artifact",component:w,render:()=>s`
      <forge-ai-artifact>
        <span slot="start">Artifact</span>
        <forge-stack inline slot="actions" gap="0" alignment="center">
          <forge-icon-button aria-label="Copy to clipboard">
            <forge-icon name="content_copy"></forge-icon>
          </forge-icon-button>
          <forge-icon-button aria-label="Refresh">
            <forge-icon name="refresh"></forge-icon>
          </forge-icon-button>
          <forge-icon-button aria-label="Download">
            <forge-icon name="download"></forge-icon>
          </forge-icon-button>
          <forge-icon-button aria-label="Export">
            <forge-icon name="export"></forge-icon>
          </forge-icon-button>
        </forge-stack>
        Content here
      </forge-ai-artifact>
    `},r={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};const z=["Demo"],j=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,__namedExportsOrder:z,default:A},Symbol.toStringTag,{value:"Module"}));export{j as A};
