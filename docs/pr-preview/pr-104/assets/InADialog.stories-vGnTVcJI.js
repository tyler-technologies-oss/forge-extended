import{x as i}from"./iframe-DzMABE0J.js";import{s}from"./decorators-Bvbs7tRY.js";import{I as l,c as d,t as c}from"./with-default-aria-95UvAwgt.js";import"./content-scaffold-D7DbRIMc.js";import{d as g}from"./index-BNcDufrq.js";import{d as m}from"./index-IKJ4mJBC.js";import{d as f}from"./index-DDmcS6Ts.js";import{d as p}from"./index-gaO1S0DB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-v1LuvkTS.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./class-map-DM8pdLL7.js";import"./directive-CJw_OlP2.js";import"./index-D392OEpP.js";import"./base-button-adapter-Dvd2gz0U.js";import"./dismissible-stack-BcBmKDrd.js";g();m();f();p();l.define([d,c]);const u="forge-content-scaffold",_={title:"Components/Content Scaffold",component:u,tags:["hidden"],decorators:[s(`
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
    `}},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const z=["InADialog"];export{o as InADialog,z as __namedExportsOrder,_ as default};
