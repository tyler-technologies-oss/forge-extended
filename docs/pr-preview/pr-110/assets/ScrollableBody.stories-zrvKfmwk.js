import{x as t}from"./iframe-NwOXt5PQ.js";import{s as o}from"./decorators-BanK_np2.js";import{I as n,i as r,e as i,d as a}from"./with-default-aria-BWByo8DH.js";import"./content-scaffold-J4JXRIIR.js";import"./structured-card-BXvOTVDH.js";import{d as s}from"./index-CwwE2Vdc.js";import{d}from"./index-BL-Q2rop.js";import{d as m}from"./index-kJbDEwPY.js";import{d as p}from"./index-n9pwQX00.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DIc64ebK.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./async-directive-CbsTFFCg.js";import"./directive-CJw_OlP2.js";import"./class-map-DTRcdMv-.js";import"./index-D3TiFRY1.js";import"./toolbar-BeQnPoZu.js";import"./base-button-adapter-C87ZiUDG.js";s();d();m();p();n.define([r,i,a]);const c="forge-content-scaffold",j={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
      * {
        box-sizing: border-box;
      }


      .card-container {
        max-width: 360px;
   
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>t`
      <div class="card-container">
        <forge-card style="--forge-card-padding: 0;">
          <forge-content-scaffold style="--forge-content-scaffold-body-height: 200px;">
            <div slot="header-start">Project Details</div>
            <forge-icon-button aria-label="More actions" slot="header-end">
              <forge-icon name="more_vert"></forge-icon>
            </forge-icon-button>
            <div slot="body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <forge-button variant="filled" slot="footer-end">
              <forge-icon slot="start" name="save"></forge-icon>
              Save
            </forge-button>
          </forge-content-scaffold>
        </forge-card>
      </div>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const z=["ScrollableBody"];export{e as ScrollableBody,z as __namedExportsOrder,j as default};
