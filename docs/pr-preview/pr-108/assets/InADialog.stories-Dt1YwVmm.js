import{x as a}from"./iframe-CmpYG8UB.js";import{s}from"./decorators-a8lqixdP.js";import{I as l,p as d,n as m}from"./with-default-aria-D19lJxx9.js";import"./content-scaffold-ByWmCV5G.js";import{d as c}from"./index-BDvr1x00.js";import{d as g}from"./index-BvCk4O8G.js";import{d as p}from"./index-dyXGcnV_.js";import{d as f}from"./index-CsK1mkvm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DihiovMj.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DcwCEZxR.js";import"./async-directive-D6X1PGy4.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-DX5ysMMI.js";import"./focus-indicator-VXk6Z9Zx.js";import"./icon-DJaeDvr-.js";import"./dismissible-stack-BzkaHwIP.js";import"./icon-button-C5oqhYM3.js";c();g();p();f();l.define([d,m]);const u="forge-content-scaffold",q={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
      * {
        box-sizing: border-box;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>{const n=t=>{t.target.nextElementSibling?.show()},e=t=>{t.target.closest("forge-dialog")?.hide()};return a`
      <forge-button variant="filled" @click=${n}>Open Dialog</forge-button>
      <forge-dialog>
        <forge-content-scaffold>
          <span slot="header-start">Edit Settings</span>
          <forge-icon-button aria-label="Close dialog" slot="header-end" @click=${e}>
            <forge-icon name="close"></forge-icon>
          </forge-icon-button>

          <div slot="body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

          <forge-stack inline alignment="center" slot="footer-end">
            <forge-button variant="text" @click=${e}>Cancel</forge-button>
            <forge-button variant="filled">
              <forge-icon slot="start" name="save"></forge-icon>
              Save Changes
            </forge-button>
          </forge-stack>
        </forge-content-scaffold>
      </forge-dialog>
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const F=["InADialog"];export{o as InADialog,F as __namedExportsOrder,q as default};
