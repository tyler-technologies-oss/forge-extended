import{x as a}from"./iframe-Dms13Zq_.js";import{s}from"./decorators-CvzrAun6.js";import{I as l,p as m,n as d}from"./with-default-aria-DIEogLWd.js";import"./content-scaffold-BlhSwhPs.js";import{d as c}from"./index-BVWKZWHV.js";import{d as p}from"./index-CU6qivxP.js";import{d as g}from"./index-DABgc_rx.js";import{d as f}from"./index-CHjFsM_0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-_XMhrF5O.js";import"./constants-VXsM_ZgY.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DjheCZrT.js";import"./async-directive-D4vy_6ok.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-DV_yZ0yv.js";import"./utils-CKW-Y7iA.js";import"./focus-indicator-B-JnphJ-.js";import"./icon-DOY4ZfAJ.js";import"./dismissible-stack-BBpZ5CI_.js";import"./icon-button-DP_Lk4AN.js";c();p();g();f();l.define([m,d]);const u="forge-content-scaffold",G={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
