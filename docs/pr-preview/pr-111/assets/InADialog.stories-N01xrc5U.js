import{x as i}from"./iframe-D41Yxy1-.js";import{s}from"./decorators-CKhSRhED.js";import{I as l,p as d,n as c}from"./with-default-aria-DUhUIC4o.js";import"./content-scaffold-Bq_-p6de.js";import{d as g}from"./index-BVR6h2RZ.js";import{d as m}from"./index-CGtL2dt9.js";import{d as p}from"./index-hEcfwdMy.js";import{d as f}from"./index-s7-6HoyW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DhvMCzkD.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./async-directive-BJpdL-fk.js";import"./directive-CJw_OlP2.js";import"./base-button-adapter-BfiWk_tK.js";import"./dismissible-stack-D22RSuC8.js";import"./icon-button-LEzAtySL.js";g();m();p();f();l.define([d,c]);const u="forge-content-scaffold",_={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const z=["InADialog"];export{o as InADialog,z as __namedExportsOrder,_ as default};
