import{x as a}from"./iframe-DctCxiSq.js";import{s}from"./decorators-8Fo8zmO1.js";import{I as l,p as d,n as m}from"./with-default-aria-CNms5Vty.js";import"./content-scaffold-Cf4EZyvw.js";import{d as c}from"./index-BoLWFwk5.js";import{d as g}from"./index-B8uZ6Vvk.js";import{d as p}from"./index-D125PVOJ.js";import{d as f}from"./index-CoWFMgSH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CS4zXbsk.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BjQhxcrF.js";import"./async-directive-hMS-Qt5r.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-DyQ7pt74.js";import"./focus-indicator-Diq_EcWA.js";import"./icon-BW_dzchp.js";import"./dismissible-stack-D2yQ4f0P.js";import"./icon-button-DwZ-7yaj.js";c();g();p();f();l.define([d,m]);const u="forge-content-scaffold",q={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
