import{x as o}from"./iframe-B3gZ3oFh.js";import{s as r}from"./decorators-BR9xhnCs.js";import{I as n,t as a,a as s,b as i,c as d}from"./with-default-aria-8W6OebjG.js";import"./content-scaffold-D49A_AiZ.js";import{d as l}from"./index-DyV16bHf.js";import{d as m}from"./index-80mtNikG.js";import{d as c}from"./index-Bs9qPRnA.js";import{d as p}from"./index-vqvgwLx9.js";import{d as f}from"./index-y8qBiPSR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DKJckIIi.js";import"./when-3fO0zp9C.js";import"./async-directive-CZOyWRwl.js";import"./directive-CJw_OlP2.js";import"./toolbar-Ct8NUfb3.js";import"./base-button-adapter-A_AS9Ok9.js";m();c();p();l();f();n.define([a,s,i,d]);const h="forge-content-scaffold",F={title:"Components/Content Scaffold",component:h,tags:["hidden"],args:{fullWidthHeader:!0},argTypes:{fullWidthHeader:{control:"boolean",description:"Enable full-width header mode"}},decorators:[r(`
      .full-width-header {
        background-color: var(--forge-theme-surface-dim);
        height: 48px;
        display: flex;
        align-items: center;
        padding-inline: 16px;
      }
       p {
        margin:0;
        padding: 0;
       }

    `)],render:({fullWidthHeader:t})=>o`
      <forge-content-scaffold .fullWidthHeader=${t}>
        <div slot="header" class="full-width-header">This is a full width element</div>
        <div slot="body">
          <forge-stack>
            <p>
              This example demonstrates the full-width header slot. The header content spans the entire width of the
              scaffold without being constrained to start/end sections. This is useful for custom toolbars, navigation
              bars, or any content that needs complete control over the header layout.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </forge-stack>
        </div>
        <forge-button variant="filled" slot="footer-end">
          <forge-icon slot="start" name="save"></forge-icon>
          Save
        </forge-button>
      </forge-content-scaffold>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const L=["FullWidthHeader"];export{e as FullWidthHeader,L as __namedExportsOrder,F as default};
