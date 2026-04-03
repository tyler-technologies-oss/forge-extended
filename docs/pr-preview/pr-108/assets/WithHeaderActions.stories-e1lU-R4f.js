import{x as t}from"./iframe-C4xYzNeS.js";import{s as n}from"./decorators-Drr-8VSW.js";import{I as r,p as i,n as a,j as s,A as m,k as d,m as c,i as l}from"./base-lit-element-CA1-SNEn.js";import"./structured-card-DegOOcju.js";import{d as p}from"./index-dgX_BGTH.js";import{d as u}from"./index-IJrFI2gY.js";import{d as g}from"./index-bSInoyeR.js";import{d as f}from"./index-ChlR4CYA.js";import{d as y}from"./index-Dwdr0h6g.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-BGw9Ygd1.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-C-I_Yz7X.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-xKbv7GnK.js";import"./when-3fO0zp9C.js";import"./lit-utils-Dv64Iohg.js";import"./async-directive-BmxHseOJ.js";import"./index-_f68ILjs.js";import"./base-button-adapter-sC9lokft.js";import"./with-default-aria-in2Bq8DU.js";import"./a11y-utils-DGwyeK1V.js";import"./icon-CEwzL3bw.js";import"./list-dropdown-aware-core--GsYKp0S.js";import"./linear-progress-constants-BYz5RDAZ.js";import"./list-B9vxI4aG.js";import"./popover-C7j-Cj6w.js";import"./with-longpress-listener-CEhzrExr.js";import"./dismissible-stack-BBF-r7lB.js";import"./skeleton-constants-CleYKgMX.js";import"./tooltip-CVwQ210y.js";p();u();g();f();y();r.define([i,a,s,m,d,c,l]);const h="forge-structured-card",Y={title:"Components/Structured Card",component:h,decorators:[n(`
      .actions-card-container {
        max-width: 600px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>t`
      <div class="actions-card-container">
        <forge-structured-card heading-level="2">
          <div slot="title">Project Details</div>
          <forge-menu slot="header-actions" .options=${[{label:"Edit",value:"edit",leadingIcon:"edit",leadingIconType:"component"},{label:"Share",value:"share",leadingIcon:"share",leadingIconType:"component"},{label:"Download",value:"download",leadingIcon:"download",leadingIconType:"component"},{label:"Delete",value:"delete",leadingIcon:"delete",leadingIconType:"component"}]} @forge-menu-select=${o=>{console.log("Menu option selected:",o.detail)}}>
            <forge-icon-button aria-label="More actions">
              <forge-icon name="more_vert"></forge-icon>
            </forge-icon-button>
          </forge-menu>

          <div slot="body" class="card-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <forge-button variant="text" slot="footer-secondary-action">
            <forge-icon slot="start" name="delete"></forge-icon>
            Cancel
          </forge-button>
          <forge-button variant="filled" slot="footer-primary-action">
            <forge-icon slot="start" name="save"></forge-icon>
            Save
          </forge-button>
        </forge-structured-card>
      </div>
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["WithHeaderActions"];export{e as WithHeaderActions,Z as __namedExportsOrder,Y as default};
