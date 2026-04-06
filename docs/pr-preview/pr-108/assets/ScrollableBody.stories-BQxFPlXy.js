import{x as t}from"./iframe-D_k7Yc7z.js";import{s as o}from"./decorators-lmW4X0pn.js";import{I as n,l as r,e as i,n as a}from"./with-default-aria-D52gWb8s.js";import"./content-scaffold-CnqEGl4j.js";import"./structured-card-B2Mhq6ga.js";import{d as s}from"./index-CRSTHZrJ.js";import{d}from"./index-Bnz1Nm44.js";import{d as m}from"./index-B6uNYQYq.js";import{d as p}from"./index-BmhyFQMn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DY0TjSdo.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DamIkZ81.js";import"./async-directive-OePmMPJE.js";import"./directive-CJw_OlP2.js";import"./class-map-BUn3t_br.js";import"./index-2h6eze9v.js";import"./toolbar-DhP4AFbZ.js";import"./base-button-adapter-L9LhOcQD.js";import"./focus-indicator-D-bmF3Ux.js";import"./icon-BoTXdo_E.js";s();d();m();p();n.define([r,i,a]);const c="forge-content-scaffold",P={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const R=["ScrollableBody"];export{e as ScrollableBody,R as __namedExportsOrder,P as default};
