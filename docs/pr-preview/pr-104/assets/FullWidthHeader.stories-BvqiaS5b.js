import{x as o}from"./iframe-BheD9QLh.js";import{s as r}from"./decorators-D-9hlUdR.js";import{I as n,t as a,a as s,b as i,c as d}from"./with-default-aria-BsAd8IlS.js";import"./content-scaffold-BLAmr7Nn.js";import{d as l}from"./index-D1hIqIQK.js";import{d as m}from"./index-MJSegqp9.js";import{d as c}from"./index-Ol-bO7A1.js";import{d as p}from"./index-CWSkDPE8.js";import{d as f}from"./index-CjbEl3fH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-B14oXyAV.js";import"./when-3fO0zp9C.js";import"./async-directive-Dv48Yr-i.js";import"./directive-CJw_OlP2.js";import"./toolbar-FAlG8Gv0.js";import"./base-button-adapter-DgVQ-STh.js";m();c();p();l();f();n.define([a,s,i,d]);const h="forge-content-scaffold",F={title:"Components/Content Scaffold",component:h,tags:["hidden"],args:{fullWidthHeader:!0},argTypes:{fullWidthHeader:{control:"boolean",description:"Enable full-width header mode"}},decorators:[r(`
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
