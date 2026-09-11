import{x as t}from"./iframe-BF-eadiO.js";import{s as e}from"./decorators-BfoY5jdu.js";import{I as r,o as i,F as n}from"./with-default-aria-C9Cpz9fo.js";import"./structured-card-Dhajx7DP.js";import{d as a,a as p,b as m}from"./index-2SJSMgh3.js";import{d as s}from"./index-lWkxKqp0.js";import{d as f}from"./index-BXjDdWpl.js";import{d as l}from"./index-DfifUHIy.js";import{d as c}from"./index-h52c34fn.js";import{d}from"./index-YppsFCU_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./custom-element-C71I-6m3.js";import"./constants-BoaaRiLs.js";import"./utils-BfbFTmRC.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-D_T65IvU.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BSQYp9l0.js";import"./when-3fO0zp9C.js";import"./lit-utils-BHvSaoDW.js";import"./async-directive-Bduev6Sc.js";import"./index-CV3Mr06h.js";import"./select-CFm3uOAn.js";import"./with-form-associated-CkHm9qDz.js";import"./base-button-adapter-DoZYG0eo.js";import"./focus-indicator-D-YpIZ-n.js";import"./field-D_6MK8sU.js";import"./list-dropdown-aware-core-DnBWHYp6.js";import"./linear-progress-constants-BB5TDrBM.js";import"./list-BB3ktmOI.js";import"./popover-CcQ25Hi3.js";import"./with-longpress-listener-BYdzOJl2.js";import"./dismissible-stack-DjoGjvdr.js";import"./skeleton-constants-BjWOtiy4.js";import"./divider-B_sPebie.js";import"./circular-progress-k2fV9Fmz.js";import"./scaffold-Cq-PXPlN.js";import"./icon-CQn9_tFD.js";import"./toolbar-XCuAAbPt.js";import"./icon-button-DqObqSUj.js";import"./tooltip-DjNUajub.js";s();f();l();c();a();p();m();d();r.define([i,n]);const g="forge-structured-card",ro={title:"Components/Structured Card",component:g,decorators:[e(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const io=["WithForm"];export{o as WithForm,io as __namedExportsOrder,ro as default};
