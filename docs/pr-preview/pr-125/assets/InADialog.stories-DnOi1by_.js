import{x as a}from"./iframe-C44ATlN0.js";import{s}from"./decorators-cT0On30w.js";import{I as l,q as d,o as m}from"./with-default-aria-DEeb_wyb.js";import"./content-scaffold-kKEurgLr.js";import{d as c}from"./index-BYMSFbIc.js";import{d as g}from"./index-WqZDX3f5.js";import{d as p}from"./index-DNmQ7YPe.js";import{d as f}from"./index-B1JO16kf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DSgRJEDh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-C7ZpBEv9.js";import"./async-directive-CKU25sS1.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-DJQ79g8S.js";import"./focus-indicator-CzWXVDLT.js";import"./icon-j-OxqPb8.js";import"./dismissible-stack-DkzqwRYE.js";import"./icon-button-D2WVgfRC.js";c();g();p();f();l.define([d,m]);const u="forge-content-scaffold",j={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const F=["InADialog"];export{o as InADialog,F as __namedExportsOrder,j as default};
