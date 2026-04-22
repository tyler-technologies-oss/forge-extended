import{x as a}from"./iframe-BvnLkDOK.js";import{s}from"./decorators-BJE7UAOv.js";import{I as l,p as d,n as m}from"./with-default-aria-y-32z6A_.js";import"./content-scaffold-CH17ylxq.js";import{d as c}from"./index-BtmWCw-J.js";import{d as g}from"./index-DNsR7EEB.js";import{d as p}from"./index-7VHYH-Jx.js";import{d as f}from"./index-BTX5vJi5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-kTHrmdCT.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-2hRzsoI_.js";import"./async-directive-Bhjl9_g_.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-g1RwZUjD.js";import"./focus-indicator-DL0sKKHm.js";import"./icon-B2kwpamn.js";import"./dismissible-stack-BAILyQq7.js";import"./icon-button-DmmTK0rA.js";c();g();p();f();l.define([d,m]);const u="forge-content-scaffold",q={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
