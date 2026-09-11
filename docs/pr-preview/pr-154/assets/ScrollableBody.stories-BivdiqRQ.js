import{x as t}from"./iframe-pX2mP6Yq.js";import{s as o}from"./decorators-Dk2-X6A_.js";import{I as r,m as n,f as i,o as a}from"./with-default-aria-D0R24zrx.js";import"./content-scaffold-CTxYUhEl.js";import"./structured-card-D7Q60jFy.js";import{d as s}from"./index-Bw8xjwVn.js";import{d as m}from"./index-B9wBF_Rg.js";import{d}from"./index-l5sDas4g.js";import{d as p}from"./index-DLHmM8kM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-DER5CWwz.js";import"./constants-Bf2qWwtf.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-BPNP532N.js";import"./async-directive-D457AqlN.js";import"./directive-CJw_OlP2.js";import"./utils-BfHhYyJi.js";import"./class-map-D3M3IjTv.js";import"./index-Cel8ZMRv.js";import"./toolbar-CSNH2X33.js";import"./base-button-adapter-Dfmjl8hd.js";import"./focus-indicator-COl26dho.js";import"./button-constants-C_OH8Fqk.js";import"./icon-UK7y3e63.js";import"./icon-button-C5ML3Gbk.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",q={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const A=["ScrollableBody"];export{e as ScrollableBody,A as __namedExportsOrder,q as default};
