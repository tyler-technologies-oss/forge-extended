import{x as a}from"./iframe-C7fMUolH.js";import{s}from"./decorators-WkUwC5EI.js";import{I as m,p as l,n as d}from"./with-default-aria-271WHlov.js";import"./content-scaffold-BAfRIaYf.js";import{d as p}from"./index-DEDT6JJb.js";import{d as c}from"./index-B0f87QK3.js";import{d as g}from"./index-Dq7PMuyO.js";import{d as f}from"./index-C_hig5gk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-Cuu7LyiG.js";import"./constants-iVqEkiyf.js";import"./a11y-utils-D0XFVk2n.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cf0GtZU2.js";import"./async-directive-Da_1GK_R.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-DsNiq0wh.js";import"./utils-CuBSrgt8.js";import"./focus-indicator-Cj5G_QpO.js";import"./icon-DgvKQl-p.js";import"./dismissible-stack-NoLrZgwI.js";import"./icon-button-BItzV8X1.js";p();c();g();f();m.define([l,d]);const u="forge-content-scaffold",J={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const K=["InADialog"];export{o as InADialog,K as __namedExportsOrder,J as default};
