import{x as i}from"./iframe-B3gZ3oFh.js";import{s}from"./decorators-BR9xhnCs.js";import{I as l,d,t as c}from"./with-default-aria-8W6OebjG.js";import"./content-scaffold-D49A_AiZ.js";import{d as g}from"./index-Bs9qPRnA.js";import{d as m}from"./index-CnGPivUc.js";import{d as f}from"./index-vqvgwLx9.js";import{d as p}from"./index-y8qBiPSR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DKJckIIi.js";import"./when-3fO0zp9C.js";import"./async-directive-CZOyWRwl.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-A_AS9Ok9.js";import"./dismissible-stack-BkroU71o.js";g();m();f();p();l.define([d,c]);const u="forge-content-scaffold",B={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
