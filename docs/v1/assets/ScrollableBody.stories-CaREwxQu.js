import{x as t}from"./iframe-8MwHtudQ.js";import{s as o}from"./decorators-Dr0Y6ZqA.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-BPqXu6Xp.js";import"./content-scaffold-xQoyTBhq.js";import"./structured-card-CTB1_avN.js";import{d as s}from"./index-DpR5ay8T.js";import{d as m}from"./index-BkFqknIl.js";import{d}from"./index-BkLVSv1f.js";import{d as p}from"./index-DFX5CsMH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-DEZcwXBI.js";import"./constants-DuGcWjEK.js";import"./a11y-utils-CKen7KlO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BxX9MyhQ.js";import"./async-directive-4ylYArEM.js";import"./directive-CJw_OlP2.js";import"./class-map-Bb9nqZzS.js";import"./index-Cv99O3Oe.js";import"./toolbar-CHe8ANvO.js";import"./base-button-adapter-D5X63cTL.js";import"./focus-indicator-0SpCC1vE.js";import"./icon-CLiBI_A3.js";import"./icon-button-CSXFtLEd.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const q=["ScrollableBody"];export{e as ScrollableBody,q as __namedExportsOrder,V as default};
