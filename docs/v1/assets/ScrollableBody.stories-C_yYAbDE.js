import{x as t}from"./iframe-C08US71-.js";import{s as o}from"./decorators-BefWZWl6.js";import{I as r,l as n,e as i,n as a}from"./with-default-aria-BQE8XDIz.js";import"./content-scaffold-nlWmsRED.js";import"./structured-card-C4B201xh.js";import{d as s}from"./index-DpYh05JD.js";import{d as m}from"./index-BFT0Y5rM.js";import{d}from"./index-Dl8A3P2F.js";import{d as p}from"./index-BBQYzh_e.js";import"./_commonjsHelpers-CqkleIqs.js";import"./component-utils-Dk8e2pW9.js";import"./constants-BLBViMKp.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-DBbww9_W.js";import"./async-directive-DBIGADlc.js";import"./directive-CJw_OlP2.js";import"./utils-C7jF9PmR.js";import"./class-map-Dxz70OQS.js";import"./index-PVZ9PkQy.js";import"./toolbar-I6kK8L-A.js";import"./base-button-adapter-CNE4gXS8.js";import"./focus-indicator-Bchj9TEM.js";import"./icon-DQrVUb0Z.js";import"./icon-button-xZ8SOnqC.js";s();m();d();p();r.define([n,i,a]);const c="forge-content-scaffold",V={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
