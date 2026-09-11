import{x as t}from"./iframe-pX2mP6Yq.js";import{s as e}from"./decorators-Dk2-X6A_.js";import{I as r,o as i,F as n}from"./with-default-aria-D0R24zrx.js";import"./structured-card-D7Q60jFy.js";import{d as a,a as p,b as m}from"./index-CVBTj9vP.js";import{d as s}from"./index-B9wBF_Rg.js";import{d as f}from"./index-DLHmM8kM.js";import{d as l}from"./index-5GzxYSXE.js";import{d as c}from"./index-0ndgyN4y.js";import{d}from"./index-BAvURvlC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-DER5CWwz.js";import"./constants-Bf2qWwtf.js";import"./utils-BfHhYyJi.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-D3M3IjTv.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CTxYUhEl.js";import"./when-3fO0zp9C.js";import"./lit-utils-BPNP532N.js";import"./async-directive-D457AqlN.js";import"./index-Cel8ZMRv.js";import"./select-B4Lq6obO.js";import"./with-form-associated-BwdbHkD6.js";import"./base-button-adapter-Dfmjl8hd.js";import"./focus-indicator-COl26dho.js";import"./field-BVlXpp5E.js";import"./button-constants-C_OH8Fqk.js";import"./button-toggle-group-constants-CvSuRCer.js";import"./icon-button-C5ML3Gbk.js";import"./icon-UK7y3e63.js";import"./list-dropdown-aware-core-DWuRhcHc.js";import"./linear-progress-constants-MBu6246s.js";import"./list-DlNo8USY.js";import"./popover-Bpn327V_.js";import"./with-longpress-listener-Dd9tt_HC.js";import"./dismissible-stack-Bs1vGjwE.js";import"./skeleton-constants-Cl0fJ-jr.js";import"./divider-CrSMkKbJ.js";import"./circular-progress-BL-zxg7f.js";import"./scaffold-DklV9R5s.js";import"./toolbar-CSNH2X33.js";import"./tooltip-DS299O4x.js";s();f();l();c();a();p();m();d();r.define([i,n]);const g="forge-structured-card",no={title:"Components/Structured Card",component:g,decorators:[e(`
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
