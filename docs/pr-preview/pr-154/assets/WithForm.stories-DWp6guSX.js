import{x as t}from"./iframe-BKxBIIJQ.js";import{s as e}from"./decorators-CiAOTrg1.js";import{I as r,o as i,F as n}from"./with-default-aria-DjItAXX6.js";import"./structured-card-Dw-wAYym.js";import{d as a,a as p,b as m}from"./index-Cv9UrVdU.js";import{d as s}from"./index-CBKvSyMs.js";import{d as f}from"./index-0JZT0dcO.js";import{d as l}from"./index-B-WzmunU.js";import{d as c}from"./index-CqqeFtKj.js";import{d}from"./index-v3JyUmzH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-BldoUTPl.js";import"./constants-aeBb4lYV.js";import"./utils-B42KGafL.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BNDdSF1T.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-7A7AwKK6.js";import"./when-3fO0zp9C.js";import"./lit-utils-D3GzrXFC.js";import"./async-directive-CnrapT-E.js";import"./index-BaUYnTlJ.js";import"./select-C2oOCVdg.js";import"./with-form-associated-nkehBhWJ.js";import"./base-button-adapter-B1QGS9Um.js";import"./focus-indicator-evqk8lHd.js";import"./field-BsgSpVj7.js";import"./button-constants-D3zZPESn.js";import"./button-toggle-group-constants-CncZbqKL.js";import"./icon-button-DNvrWAkH.js";import"./icon-CGdxk2in.js";import"./list-dropdown-aware-core-ODUd_dV0.js";import"./linear-progress-constants-D_6jO8mF.js";import"./list-Ddtt4Jaf.js";import"./popover-BB3pmc-g.js";import"./with-longpress-listener-VROGiMiY.js";import"./dismissible-stack-DkTmbPfG.js";import"./skeleton-constants-2T5bCXss.js";import"./divider-DaKfdOPx.js";import"./circular-progress-CpuK6rKy.js";import"./scaffold-CCmKOYqB.js";import"./toolbar-Be9BG9fS.js";import"./tooltip-C_fHynxG.js";s();f();l();c();a();p();m();d();r.define([i,n]);const g="forge-structured-card",no={title:"Components/Structured Card",component:g,decorators:[e(`
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
