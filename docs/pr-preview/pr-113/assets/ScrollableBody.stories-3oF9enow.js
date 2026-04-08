import{x as t}from"./iframe-Dl9rccmp.js";import{s as o}from"./decorators-Dulwwya8.js";import{I as n,i as r,k as i,n as a}from"./with-default-aria-Dz8WdObG.js";import"./content-scaffold-C2mxD0hM.js";import"./structured-card-C8keIczd.js";import{d as s}from"./index-DrNjr0CF.js";import{d}from"./index-CnDlsITW.js";import{d as m}from"./index-DlU3dv5c.js";import{d as p}from"./index-9ZHXBsQk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DhgAIoth.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./async-directive-Dn4kAKBX.js";import"./directive-CJw_OlP2.js";import"./class-map-h91WH6Qb.js";import"./index-5ipHNH6c.js";import"./toolbar-LUhNY6Wp.js";import"./base-button-adapter-D3g6KwJ2.js";import"./icon-button-DYrB2kr7.js";s();d();m();p();n.define([r,i,a]);const c="forge-content-scaffold",z={title:"Components/Content Scaffold",component:c,tags:["hidden"],decorators:[o(`
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const D=["ScrollableBody"];export{e as ScrollableBody,D as __namedExportsOrder,z as default};
