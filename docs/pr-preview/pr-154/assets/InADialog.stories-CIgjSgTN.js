import{x as a}from"./iframe-uYmMtFXe.js";import{s}from"./decorators-CdDnjmZ2.js";import{I as m,q as l,o as d}from"./with-default-aria-Ajc3U0-g.js";import"./content-scaffold-C31Bz0lK.js";import{d as c}from"./index-BAQeSDAv.js";import{d as p}from"./index-B9WnRHy7.js";import{d as g}from"./index-Dav54a0r.js";import{d as f}from"./index-DY8pP0a5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-RnAbd9qQ.js";import"./constants-CpZXP-xH.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CpuDE9B8.js";import"./async-directive-DqvxUZro.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-81PK7MPV.js";import"./utils-tJtJfoaq.js";import"./focus-indicator-nFJ3EteD.js";import"./button-constants-BspY-3bl.js";import"./icon-D3Ok13p2.js";import"./dismissible-stack-BvYLNEYj.js";import"./icon-button-DbCPLHsE.js";c();p();g();f();m.define([l,d]);const u="forge-content-scaffold",H={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
