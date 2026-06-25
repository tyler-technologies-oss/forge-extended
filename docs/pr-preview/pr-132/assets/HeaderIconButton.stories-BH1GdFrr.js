import{x as t}from"./iframe-BMqNQSB3.js";import{s as n}from"./decorators-zuJ-IfTh.js";import{I as r,p as a,n as i,m as s,C as m,e as d,g as c,l}from"./with-default-aria-B5Gz3KW5.js";import"./structured-card-BgaEOa9w.js";import{d as p}from"./index-DPOpo1qh.js";import{d as u}from"./index-CWn3kMdq.js";import{d as g}from"./index-BZg0-s7Y.js";import{d as f}from"./index-aFWCLlOq.js";import{d as y}from"./index-Ld-TGTTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-dm9VtAl7.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CcStgTUM.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-lnWeY4Jg.js";import"./when-3fO0zp9C.js";import"./lit-utils-DbQLnnc2.js";import"./async-directive-Dvrkdtd5.js";import"./index-0bXiUZPH.js";import"./base-button-adapter-D0JgTV6I.js";import"./focus-indicator-D6542vgB.js";import"./icon-DAICiFsx.js";import"./icon-button-BTf7YIrf.js";import"./list-dropdown-aware-core-D7OdZw8i.js";import"./linear-progress-constants-D450kTtT.js";import"./list-Bo2_4NQ0.js";import"./popover-BNpz9bzV.js";import"./with-longpress-listener-5-WmNr5L.js";import"./dismissible-stack-D7F1XTx3.js";import"./skeleton-constants-YdiWnD24.js";import"./tooltip-CMC2NEER.js";p();u();g();f();y();r.define([a,i,s,m,d,c,l]);const I="forge-structured-card",Y={title:"Components/Structured Card",component:I,decorators:[n(`
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
          <forge-menu slot="after-header-actions" .options=${[{label:"Edit",value:"edit",leadingIcon:"edit",leadingIconType:"component"},{label:"Share",value:"share",leadingIcon:"share",leadingIconType:"component"},{label:"Download",value:"download",leadingIcon:"download",leadingIconType:"component"},{label:"Delete",value:"delete",leadingIcon:"delete",leadingIconType:"component"}]} @forge-menu-select=${o=>{console.log("Menu option selected:",o.detail)}}>
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
    `},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["HeaderIconButton"];export{e as HeaderIconButton,Z as __namedExportsOrder,Y as default};
