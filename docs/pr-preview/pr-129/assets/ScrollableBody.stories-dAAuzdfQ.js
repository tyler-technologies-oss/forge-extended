import{x as t}from"./iframe-CJA-oYji.js";import{s as o}from"./decorators-eIhikN9P.js";import{I as n,l as r,e as i,n as a}from"./with-default-aria-Cyn6jl-k.js";import"./content-scaffold-BBiBNCfq.js";import"./structured-card-Bi28ONSB.js";import{d as s}from"./index-Dhltft6a.js";import{d as m}from"./index-BFvX2EMV.js";import{d}from"./index-DFwCaa_u.js";import{d as p}from"./index-MdvfrA-s.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BWp4YXPh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-07JDB8ZZ.js";import"./async-directive-DVtU5Q-2.js";import"./directive-CJw_OlP2.js";import"./class-map-DEfjwoUI.js";import"./index-DdNbJoJK.js";import"./toolbar-CKYt7XE_.js";import"./base-button-adapter-A0K3LK6K.js";import"./focus-indicator-D2GI4J6r.js";import"./icon-DZ9Vtx3q.js";import"./icon-button-BpsGkVSY.js";s();m();d();p();n.define([r,i,a]);const c="forge-content-scaffold",R={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
