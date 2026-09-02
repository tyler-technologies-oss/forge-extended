import{x as t}from"./iframe-D2auh-ob.js";import{s as o}from"./decorators-BWzLVk5d.js";import{I as n,l as r,e as i,n as a}from"./with-default-aria-givn-h4t.js";import"./content-scaffold-BmEgRkv_.js";import"./structured-card-AHxw13IS.js";import{d as s}from"./index-CxQX3a2h.js";import{d as m}from"./index-DytvL9v2.js";import{d}from"./index-DXo3ReHK.js";import{d as p}from"./index-DfDBNFD5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-B5suZUFP.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./when-3fO0zp9C.js";import"./lit-utils-r13SEbDt.js";import"./async-directive-CXMWIWl6.js";import"./directive-CJw_OlP2.js";import"./class-map-Jo3VKbU_.js";import"./index-Bzw9ITyu.js";import"./toolbar-K0L2U8sW.js";import"./base-button-adapter-Brj4AgaH.js";import"./focus-indicator-OGPrUnUk.js";import"./icon-Bg0ht1cC.js";import"./icon-button-kjWo9h6o.js";s();m();d();p();n.define([r,i,a]);const c="forge-content-scaffold",R={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
