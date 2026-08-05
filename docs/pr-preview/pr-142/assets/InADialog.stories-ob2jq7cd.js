import{x as a}from"./iframe-PAcmqUG6.js";import{s}from"./decorators-BO-g6OUX.js";import{I as m,p as l,n as d}from"./with-default-aria-C94a9uFn.js";import"./content-scaffold-DWSwjSgG.js";import{d as p}from"./index-_OO7FmJl.js";import{d as c}from"./index-CFYWhSFk.js";import{d as g}from"./index-Drzkv_8K.js";import{d as f}from"./index-B3t8z8gC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-BOdxSeCd.js";import"./constants-CJiu0c9M.js";import"./a11y-utils-H-OyiifR.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BklS-4kJ.js";import"./async-directive-CgiLW7ik.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-K6HIUfEq.js";import"./utils-C5cUnwQo.js";import"./focus-indicator-BgHurxD4.js";import"./icon-Cqpt27RA.js";import"./dismissible-stack-Mo_Nexm6.js";import"./icon-button-C7FqYiw7.js";p();c();g();f();m.define([l,d]);const u="forge-content-scaffold",J={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
