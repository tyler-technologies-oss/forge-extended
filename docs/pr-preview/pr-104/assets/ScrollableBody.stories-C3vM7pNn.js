import{x as t}from"./iframe-CDvSdWWu.js";import{s as o}from"./decorators-bWwebubM.js";import{I as n,i as r,k as i,n as a}from"./with-default-aria-CBP-syo7.js";import"./content-scaffold-9IX-PmQS.js";import"./structured-card-PoeIVTDs.js";import{d as s}from"./index-dr4fHXtp.js";import{d}from"./index-HlEvWwkw.js";import{d as m}from"./index-C1vF6rMp.js";import{d as p}from"./index-uTDamdRs.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-CS0ZySMU.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./async-directive-Bh71c5iw.js";import"./directive-CJw_OlP2.js";import"./class-map-D4mmuwrz.js";import"./index-BVmhvLCV.js";import"./toolbar-C5KnbF2F.js";import"./base-button-adapter-Dmdnsfvc.js";s();d();m();p();n.define([r,i,a]);const c="forge-content-scaffold",j={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
