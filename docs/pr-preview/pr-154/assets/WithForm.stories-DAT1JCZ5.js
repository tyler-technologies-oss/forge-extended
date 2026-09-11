import{x as t}from"./iframe-B-hqvoN1.js";import{s as e}from"./decorators-Cpx4MEKW.js";import{I as r,o as i,F as n}from"./with-default-aria-UTb2ZfEa.js";import"./structured-card-BiPXsTQp.js";import{d as a,a as p,b as m}from"./index-B653wrsF.js";import{d as s}from"./index-QNvooWwG.js";import{d as f}from"./index-CTAqYqwJ.js";import{d as l}from"./index-DP8T-jmX.js";import{d as c}from"./index-jx0yBWf-.js";import{d}from"./index-BE5_aBI8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-C0MWYpx0.js";import"./constants-BzUGdP7s.js";import"./utils-BpfZpwkX.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DYK85YWM.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BXdNFto4.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bk_RM_31.js";import"./async-directive-By6MWvSL.js";import"./index-Db49f7Dd.js";import"./select-D-6gX3SY.js";import"./with-form-associated-CisgDCmJ.js";import"./base-button-adapter-D9nRSDVN.js";import"./focus-indicator-DAcdgG1c.js";import"./field-C0feFHP8.js";import"./button-constants-DFK1DSfd.js";import"./button-toggle-group-constants-DKuK54ky.js";import"./icon-button-DfhV15n1.js";import"./icon-y17Z_xfo.js";import"./list-dropdown-aware-core-BxCWhu19.js";import"./linear-progress-constants-DGrLFOyv.js";import"./list-1cByGSGC.js";import"./popover-NY4XGJLp.js";import"./with-longpress-listener-B_LXqv_X.js";import"./dismissible-stack-BCvcndys.js";import"./skeleton-constants-CuB2XE6P.js";import"./divider-B-AlEmoL.js";import"./circular-progress-C682riUh.js";import"./scaffold-DirkK03f.js";import"./toolbar-B78QZkF-.js";import"./tooltip-XRL_YT2R.js";s();f();l();c();a();p();m();d();r.define([i,n]);const g="forge-structured-card",no={title:"Components/Structured Card",component:g,decorators:[e(`
      .actions-card-container {
        max-width: 600px;
      }
    `)],render:()=>t`
      <div class="actions-card-container">
        <forge-structured-card heading-level="2">
          <div slot="title">Project Details</div>

          <forge-badge theme="warning" slot="header-actions">
            <span>In progress</span>
            <forge-icon name="construction" slot="end"></forge-icon>
          </forge-badge>
          <form slot="body">
            <forge-stack>
              <forge-text-field label-position="block-start">
                <label>Project name</label>
                <input type="text" />
              </forge-text-field>
              <forge-text-field label-position="block-start">
                <label>Description</label>
                <textarea></textarea>
              </forge-text-field>
              <forge-select label="Category" label-position="block-start">
                <forge-option value="development">Development</forge-option>
                <forge-option value="design">Design</forge-option>
                <forge-option value="marketing">Marketing</forge-option>
                <forge-option value="research">Research</forge-option>
              </forge-select>
              <forge-text-field label-position="block-start">
                <label>Owner</label>
                <input type="text" />
              </forge-text-field>
              <forge-file-picker accept=".jpg,.png,.pdf">
                <forge-button variant="outlined">Attach files</forge-button>
              </forge-file-picker>
            </forge-stack>
          </form>
          <forge-button variant="text" slot="footer-secondary-action">
            <forge-icon slot="start" name="delete"></forge-icon>
            Cancel
          </forge-button>
          <forge-button variant="tonal" slot="footer-primary-action">
            <forge-icon slot="start" name="save"></forge-icon>
            Save
          </forge-button>
        </forge-structured-card>
      </div>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const ao=["WithForm"];export{o as WithForm,ao as __namedExportsOrder,no as default};
