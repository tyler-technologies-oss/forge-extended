import{x as t}from"./iframe-BZR3avPy.js";import{s as o}from"./decorators-Btj57eUi.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-DrGQh3rA.js";import"./content-scaffold-BiY-VgIw.js";import"./structured-card-CBV2m1K1.js";import{d as s}from"./index--AiHFgJZ.js";import{d as m}from"./index-CCo5mcVb.js";import{d}from"./index-DSF_ghjH.js";import{d as p}from"./index-HGkRbmOl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-V1xjMoTa.js";import"./constants-Dczm6517.js";import"./a11y-utils-B2lvl91r.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-B7mGwFLc.js";import"./async-directive-CduYbs5w.js";import"./directive-CJw_OlP2.js";import"./utils-BeUVm7TG.js";import"./class-map-CBmZDkCE.js";import"./index-BxeetAA7.js";import"./toolbar-twtT2uP-.js";import"./base-button-adapter-BBLLx2xC.js";import"./focus-indicator-BBF39Pup.js";import"./icon-CAC4534v.js";import"./icon-button-DD2_Bu8d.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",A={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const F=["ScrollableBody"];export{e as ScrollableBody,F as __namedExportsOrder,A as default};
