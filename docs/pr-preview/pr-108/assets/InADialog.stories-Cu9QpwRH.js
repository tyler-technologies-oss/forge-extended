import{x as a}from"./iframe-C4xYzNeS.js";import{s}from"./decorators-Drr-8VSW.js";import{I as l,p as d,n as m}from"./base-lit-element-CA1-SNEn.js";import"./content-scaffold-xKbv7GnK.js";import{d as c}from"./index-dgX_BGTH.js";import{d as g}from"./index-BDeTw_Vg.js";import{d as p}from"./index-IJrFI2gY.js";import{d as f}from"./index-bSInoyeR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BGw9Ygd1.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-Dv64Iohg.js";import"./async-directive-BmxHseOJ.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-sC9lokft.js";import"./with-default-aria-in2Bq8DU.js";import"./a11y-utils-DGwyeK1V.js";import"./icon-CEwzL3bw.js";import"./dismissible-stack-BBF-r7lB.js";c();g();p();f();l.define([d,m]);const u="forge-content-scaffold",q={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
