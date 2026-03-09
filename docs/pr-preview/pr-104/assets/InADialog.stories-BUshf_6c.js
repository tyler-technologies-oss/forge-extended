import{x as i}from"./iframe-CVNQnw_n.js";import{s}from"./decorators-Df9cRaVj.js";import{I as l,c as d,t as c}from"./with-default-aria-YnUymmup.js";import"./content-scaffold-C3Wo-2y8.js";import{d as g}from"./index-OcvsHiQW.js";import{d as m}from"./index-g_XLhgNM.js";import{d as f}from"./index-B1lUAh7d.js";import{d as p}from"./index-BKePeJ-r.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CT4hc6nY.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./index-BFGvebPf.js";import"./base-button-adapter-DpRT1I6F.js";import"./dismissible-stack-CTIDD9LU.js";g();m();f();p();l.define([d,c]);const u="forge-content-scaffold",B={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const L=["InADialog"];export{o as InADialog,L as __namedExportsOrder,B as default};
