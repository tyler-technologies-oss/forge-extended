import{x as a}from"./iframe-aIta0XjW.js";import{s}from"./decorators-D2VId2oZ.js";import{I as l,p as m,n as d}from"./with-default-aria-B18WzXUc.js";import"./content-scaffold-DP1HJTSM.js";import{d as c}from"./index-D28XLDrM.js";import{d as p}from"./index-B-cwDR20.js";import{d as g}from"./index-d0_CFtxH.js";import{d as f}from"./index-HhQTP63o.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-BI5goMsi.js";import"./constants-C89t2nXh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-yhn8fLQC.js";import"./async-directive-B4pUYcG0.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-CZogyW6-.js";import"./utils-qX0sCc6t.js";import"./focus-indicator-DCygggO6.js";import"./icon-COisYVme.js";import"./dismissible-stack-BlFRNdPh.js";import"./icon-button-B6dAQuk5.js";c();p();g();f();l.define([m,d]);const u="forge-content-scaffold",G={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const H=["InADialog"];export{o as InADialog,H as __namedExportsOrder,G as default};
