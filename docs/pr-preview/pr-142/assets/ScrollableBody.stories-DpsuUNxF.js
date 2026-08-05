import{x as t}from"./iframe-ULyB_0Dy.js";import{s as o}from"./decorators-CKHwrViY.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-CpHhlmZ0.js";import"./content-scaffold-CO77zMEz.js";import"./structured-card-B8p37Ihy.js";import{d as s}from"./index-pBIS1Ift.js";import{d as m}from"./index-CWnIIei3.js";import{d}from"./index-D9WzwKfJ.js";import{d as p}from"./index-CkUW9AMb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./feature-detection-CE0UCYUK.js";import"./constants-CCgJ39ZP.js";import"./a11y-utils-BDdgGlMC.js";import"./custom-element-C028faeO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BE-mNjuD.js";import"./async-directive-BgnHwQy-.js";import"./directive-CJw_OlP2.js";import"./utils-XRW8HtJy.js";import"./class-map-BEBg8r6d.js";import"./index-Caovf1aY.js";import"./toolbar-FIo7vZzp.js";import"./base-button-adapter-B415vPD3.js";import"./focus-indicator-C3NuoBrz.js";import"./icon-DfG7xEKj.js";import"./icon-button-CbaSmUOT.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",A={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
