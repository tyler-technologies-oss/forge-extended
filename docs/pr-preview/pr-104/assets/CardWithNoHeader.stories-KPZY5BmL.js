import{x as e}from"./iframe-o8AKceW-.js";import{s as o}from"./decorators-DGjX59FH.js";import{I as r,t as n,d as a}from"./with-default-aria-4hAzXmsh.js";import"./structured-card-xEoT-vJK.js";import{d as i}from"./index-DKpEeCOr.js";import{d as s}from"./index-CGJ6d-3c.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-Coqop7Iu.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Ca8S5n4h.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CSNp5CPs.js";import"./when-3fO0zp9C.js";import"./async-directive-CDL1ONwT.js";import"./index-D6Rc6ePo.js";import"./index-BdQappt_.js";import"./base-button-adapter-3k_re6z4.js";i();s();r.define([n,a]);const d="forge-structured-card",L={title:"Components/Structured Card",component:d,decorators:[o(`
      .no-header-card-container {
        max-width: 600px;
      }

      p {
        margin: 0;
        padding: 0;
      }
    `)],render:()=>e`
      <div class="no-header-card-container">
        <forge-structured-card>
          <div slot="body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

          <forge-button variant="text" slot="footer-secondary-action">
            <forge-icon slot="start" name="close"></forge-icon>
            Cancel
          </forge-button>
          <forge-button variant="filled" slot="footer-primary-action">
            <forge-icon slot="start" name="save"></forge-icon>
            Save
          </forge-button>
        </forge-structured-card>
      </div>
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const N=["CardWithNoHeader"];export{t as CardWithNoHeader,N as __namedExportsOrder,L as default};
