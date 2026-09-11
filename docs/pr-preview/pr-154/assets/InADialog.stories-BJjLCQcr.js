import{x as a}from"./iframe-SHp831uv.js";import{s}from"./decorators-D3zuKrK4.js";import{I as m,q as l,o as d}from"./with-default-aria-8o2urQtC.js";import"./content-scaffold-DLp9mQPY.js";import{d as c}from"./index-BKf0lMQ0.js";import{d as p}from"./index-C-HRxh8T.js";import{d as g}from"./index-BvX6YG-j.js";import{d as f}from"./index-QCVF5AdA.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-B6C_dIc3.js";import"./constants-DRnO8cEF.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-kTKF_2VI.js";import"./async-directive-sXoZ91VK.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-BVuIt3Kj.js";import"./utils-BQMvIrLC.js";import"./focus-indicator-B9vvCHqs.js";import"./button-constants-BjrjrMWP.js";import"./icon-rFRese_m.js";import"./dismissible-stack-DesdIcOG.js";import"./icon-button-q71bmWIK.js";c();p();g();f();m.define([l,d]);const u="forge-content-scaffold",H={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const J=["InADialog"];export{o as InADialog,J as __namedExportsOrder,H as default};
