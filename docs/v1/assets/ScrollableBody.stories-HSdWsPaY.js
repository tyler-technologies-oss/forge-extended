import{x as t}from"./iframe-D9HQDu7p.js";import{s as o}from"./decorators-CZOFQ3by.js";import{I as n,l as r,e as i,n as a}from"./with-default-aria-DEo4mC41.js";import"./content-scaffold-CAhUByjO.js";import"./structured-card-MOcmK2AE.js";import{d as s}from"./index-CqoEtHzV.js";import{d as m}from"./index-BhYHSfIt.js";import{d}from"./index-K-HPkp-G.js";import{d as p}from"./index-l6_PuuYe.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BZ0i9X0W.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DlMRMc4F.js";import"./async-directive-C80dpfX0.js";import"./directive-CJw_OlP2.js";import"./class-map-Qacjvx_q.js";import"./index-osO6IpzO.js";import"./toolbar-BpuyIU0j.js";import"./base-button-adapter-B8lUM2fR.js";import"./focus-indicator-UbAoJCCh.js";import"./icon-9Fch71G9.js";import"./icon-button-hpfAgSVF.js";s();m();d();p();n.define([r,i,a]);const c="forge-content-scaffold",R={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const T=["ScrollableBody"];export{e as ScrollableBody,T as __namedExportsOrder,R as default};
