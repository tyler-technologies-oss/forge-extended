import{x as a}from"./iframe-tSrdq99I.js";import{s}from"./decorators-Be_BwGSL.js";import{I as m,q as l,o as d}from"./with-default-aria-Cjw09Hyt.js";import"./content-scaffold-BxTyVT-B.js";import{d as c}from"./index-DgOFm9rI.js";import{d as p}from"./index-DCMZGDOE.js";import{d as g}from"./index-BvK_xeaI.js";import{d as f}from"./index-DUD4nVta.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-Cg4oYBYF.js";import"./constants-DEDYFPik.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-C9gaqnGj.js";import"./async-directive-BwzQrKcK.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-BUXivA6l.js";import"./utils-BuNvph6x.js";import"./focus-indicator-DCA67l5Z.js";import"./button-constants-C8sFYYY3.js";import"./icon-xRFOyXu1.js";import"./dismissible-stack-DyydnwZ9.js";import"./icon-button-CPvX5qA1.js";c();p();g();f();m.define([l,d]);const u="forge-content-scaffold",H={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
