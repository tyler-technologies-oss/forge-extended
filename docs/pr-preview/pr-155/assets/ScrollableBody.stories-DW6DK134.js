import{x as t}from"./iframe-C6uLETDu.js";import{s as o}from"./decorators-BW4Ng8Mp.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-qK7n-I_R.js";import"./content-scaffold-COJm1GIU.js";import"./structured-card-DzEWHTaZ.js";import{d as s}from"./index-CTj1O39E.js";import{d as m}from"./index-BkiBS89O.js";import{d}from"./index-mqgXvycp.js";import{d as p}from"./index-BoZp-nHZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CwDoUV0x.js";import"./constants-B45z8Rzx.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-QCR2zngV.js";import"./async-directive-DLnhQJrA.js";import"./directive-CJw_OlP2.js";import"./utils-CifiO2q4.js";import"./class-map-DAEvk2iL.js";import"./index-aoFpfMfe.js";import"./toolbar-bWoqmU_S.js";import"./base-button-adapter-CtIMfknO.js";import"./focus-indicator-C5nfhBw6.js";import"./icon-BFh6via-.js";import"./icon-button-DlErWaed.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
