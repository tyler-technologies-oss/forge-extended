import{x as e}from"./iframe-_Oj7DJKB.js";import{s as o}from"./decorators-BgUPVGV4.js";import{I as r,t as n,d as a}from"./with-default-aria-C5iQh0up.js";import"./structured-card-zfHJrzMN.js";import{d as i}from"./index-C6A5Q754.js";import{d as s}from"./index-DMozj5AA.js";import"./_commonjsHelpers-CqkleIqs.js";import"./constants-DVgvuCGK.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DNAd802M.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BY_dmDYi.js";import"./when-3fO0zp9C.js";import"./async-directive-T0NmPtJp.js";import"./index-CNskqjFE.js";import"./base-button-adapter-D13kLxLh.js";i();s();r.define([n,a]);const d="forge-structured-card",H={title:"Components/Structured Card",component:d,decorators:[o(`
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
    `},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const L=["CardWithNoHeader"];export{t as CardWithNoHeader,L as __namedExportsOrder,H as default};
