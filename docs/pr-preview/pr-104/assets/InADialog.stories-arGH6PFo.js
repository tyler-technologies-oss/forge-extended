import{x as i}from"./iframe-Ca4_EFk3.js";import{s}from"./decorators-DfPxFmbz.js";import{I as l,d,t as c}from"./with-default-aria-jbFF_u3Y.js";import"./content-scaffold-N7Izrb8t.js";import{d as g}from"./index-DV0c8yBv.js";import{d as m}from"./index-5UuHXGyI.js";import{d as f}from"./index-Df7d_uCa.js";import{d as p}from"./index-DppkHxwl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-jtdDfxOl.js";import"./when-3fO0zp9C.js";import"./async-directive-B1n48Go4.js";import"./directive-CJw_OlP2.js";import"./index-c_rMPOME.js";import"./base-button-adapter-P6h1VIma.js";import"./dismissible-stack-DMEGKUAi.js";g();m();f();p();l.define([d,c]);const u="forge-content-scaffold",L={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
      * {
        box-sizing: border-box;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>{const n=t=>{t.target.nextElementSibling?.show()},e=t=>{t.target.closest("forge-dialog")?.hide()};return i`
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
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const _=["InADialog"];export{o as InADialog,_ as __namedExportsOrder,L as default};
