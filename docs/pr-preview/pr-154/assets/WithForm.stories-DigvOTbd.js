import{x as t}from"./iframe-tSrdq99I.js";import{s as e}from"./decorators-Be_BwGSL.js";import{I as r,o as i,F as n}from"./with-default-aria-Cjw09Hyt.js";import"./structured-card-DS1evckj.js";import{d as a,a as p,b as m}from"./index-CwiwqKMM.js";import{d as s}from"./index-DgOFm9rI.js";import{d as f}from"./index-DUD4nVta.js";import{d as l}from"./index-BjQgptk1.js";import{d as c}from"./index-B-43NA9w.js";import{d}from"./index-D5SF0yP_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-Cg4oYBYF.js";import"./constants-DEDYFPik.js";import"./utils-BuNvph6x.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CTBWGCQU.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BxTyVT-B.js";import"./when-3fO0zp9C.js";import"./lit-utils-C9gaqnGj.js";import"./async-directive-BwzQrKcK.js";import"./index-DxuUp4FF.js";import"./select-DqRB95xI.js";import"./with-form-associated-C7_CQNUw.js";import"./base-button-adapter-BUXivA6l.js";import"./focus-indicator-DCA67l5Z.js";import"./field-DbQ-5lWQ.js";import"./button-constants-C8sFYYY3.js";import"./button-toggle-group-constants-DYgz6PwC.js";import"./icon-button-CPvX5qA1.js";import"./icon-xRFOyXu1.js";import"./list-dropdown-aware-core-DnX_nJmP.js";import"./linear-progress-constants-BGY00k5Y.js";import"./list-CkvIqOPB.js";import"./popover-DbbcMMsL.js";import"./with-longpress-listener-DCkSJ2mx.js";import"./dismissible-stack-DyydnwZ9.js";import"./skeleton-constants-BEUUO9S0.js";import"./divider-DBgRCrRD.js";import"./circular-progress-Ddep5AIi.js";import"./scaffold-DekT5LcS.js";import"./toolbar-dj6PAa2g.js";import"./tooltip-D7GcPVGW.js";s();f();l();c();a();p();m();d();r.define([i,n]);const g="forge-structured-card",no={title:"Components/Structured Card",component:g,decorators:[e(`
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
