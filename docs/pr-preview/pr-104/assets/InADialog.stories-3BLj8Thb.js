import{x as i}from"./iframe-Dw63orgv.js";import{s}from"./decorators-D91PMSFZ.js";import{I as l,d,t as c}from"./with-default-aria-C6cWEsYw.js";import"./content-scaffold-BtwldoSz.js";import{d as g}from"./index-C-gukQgV.js";import{d as m}from"./index-53cxh3J5.js";import{d as f}from"./index-CCfV6emy.js";import{d as p}from"./index-CrwJhf2A.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-s5OOLmKV.js";import"./when-3fO0zp9C.js";import"./async-directive-skWUiMCP.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-Dq0prut0.js";import"./dismissible-stack-CBrvCHTX.js";g();m();f();p();l.define([d,c]);const u="forge-content-scaffold",B={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const L=["InADialog"];export{o as InADialog,L as __namedExportsOrder,B as default};
