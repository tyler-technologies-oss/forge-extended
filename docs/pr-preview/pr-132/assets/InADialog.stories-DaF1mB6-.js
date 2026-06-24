import{x as a}from"./iframe-DXbn4rxA.js";import{s}from"./decorators-Nd5IjqpX.js";import{I as l,p as d,n as m}from"./with-default-aria-Cx645oS7.js";import"./content-scaffold-CTYdscXb.js";import{d as c}from"./index-Ba3B3RI_.js";import{d as g}from"./index-DhGIAjx5.js";import{d as p}from"./index-RKqivKzO.js";import{d as f}from"./index-BQBStG7r.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DjAQnJTr.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-tmm0hn-_.js";import"./async-directive-lseVjRFh.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-DTHSEwCO.js";import"./focus-indicator-pXydGm2m.js";import"./icon-TYDC0QZ8.js";import"./dismissible-stack-aqNiWXAU.js";import"./icon-button-Dc-pE4gS.js";c();g();p();f();l.define([d,m]);const u="forge-content-scaffold",q={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
