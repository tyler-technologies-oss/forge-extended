import{x as a}from"./iframe-CpRQkBMQ.js";import{s}from"./decorators-B70T1YDM.js";import{I as m,p as l,n as d}from"./with-default-aria-DCrQ45_b.js";import"./content-scaffold-BinYAOls.js";import{d as p}from"./index-M8L1-ckG.js";import{d as c}from"./index-ttvW4B5t.js";import{d as g}from"./index-BPW4qMFY.js";import{d as f}from"./index-CU70dnan.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-qDrs-qqg.js";import"./constants-6XKmeSe-.js";import"./a11y-utils-D6lw3lX1.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-0zZ0wsQ3.js";import"./async-directive-CWZGg9E5.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-CKJ2vgSn.js";import"./utils-DNsk33b7.js";import"./focus-indicator-BHpx-Ltw.js";import"./icon-BbBof2IO.js";import"./dismissible-stack-ByH90fXI.js";import"./icon-button-B5ctXg8e.js";p();c();g();f();m.define([l,d]);const u="forge-content-scaffold",J={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
