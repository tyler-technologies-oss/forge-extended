import{x as t}from"./iframe-BHiuspMz.js";import{s as o}from"./decorators-Cm9aY5zn.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-Dr8txCyU.js";import"./content-scaffold-J7PEc2fo.js";import"./structured-card-CRvBPypy.js";import{d as s}from"./index-Cxq69dtb.js";import{d as m}from"./index-DNb12-Nh.js";import{d}from"./index-CrIKbSsw.js";import{d as p}from"./index-DeRClaW4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-CS6H0gzE.js";import"./constants-aKnaKg58.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-CRjWUuMe.js";import"./async-directive-Xn8TSerS.js";import"./directive-CJw_OlP2.js";import"./utils-CTcdxc71.js";import"./class-map-BI-pJmnJ.js";import"./index-DQoQlId0.js";import"./toolbar-d9c2sXQw.js";import"./base-button-adapter-GlzYkY-X.js";import"./focus-indicator-BLsqjX4f.js";import"./icon-zqjj0lUM.js";import"./icon-button-DjS9SVHO.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
