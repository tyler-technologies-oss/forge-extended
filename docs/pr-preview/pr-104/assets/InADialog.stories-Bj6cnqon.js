import{x as i}from"./iframe-BJgCwms7.js";import{s}from"./decorators-DEFtzW0f.js";import{I as l,d,t as g}from"./with-default-aria-CL4w3eQ3.js";import"./content-scaffold-CU4dOKdC.js";import{d as c}from"./index-a1rKQGxq.js";import{d as m}from"./index-DuQ2-AMl.js";import{d as f}from"./index-DrJxZggi.js";import{d as p}from"./index-CkH_ZBJ2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-gWaXXiXq.js";import"./when-3fO0zp9C.js";import"./async-directive-B8kS1KgH.js";import"./directive-CJw_OlP2.js";import"./index-BhSLG_zx.js";import"./base-button-adapter-CmNx4bX-.js";import"./dismissible-stack-Div5vy5E.js";c();m();f();p();l.define([d,g]);const u="forge-content-scaffold",L={title:"Components/Content Scaffold",component:u,tags:[""],decorators:[s(`
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
          <h1 slot="header-start" class="forge-typography--heading4">Edit Settings</h1>
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
