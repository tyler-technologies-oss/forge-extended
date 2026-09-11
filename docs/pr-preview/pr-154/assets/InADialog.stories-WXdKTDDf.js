import{x as a}from"./iframe-BMggY0Eq.js";import{s}from"./decorators-D63UJ0xr.js";import{I as l,q as m,o as d}from"./with-default-aria-NpWy7zUu.js";import"./content-scaffold-DAyfz4LZ.js";import{d as c}from"./index-B1v7lt4m.js";import{d as g}from"./index-BwFupR3o.js";import{d as p}from"./index-DJgm2yXY.js";import{d as f}from"./index-CcueWhpz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-FMdYT5yi.js";import"./constants-o7gsy-Mc.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CWd9ykg1.js";import"./async-directive-Bkkdsiao.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-CeJFAvB2.js";import"./utils-Ci8BKDzo.js";import"./focus-indicator-CZ8Q_jHJ.js";import"./icon-B7BdjdS-.js";import"./dismissible-stack-Bly2SCxr.js";import"./icon-button-TlXi4X8k.js";c();g();p();f();l.define([m,d]);const u="forge-content-scaffold",G={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
