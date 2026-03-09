import{x as t}from"./iframe-4iFiJTyg.js";import{s as r}from"./decorators-C8peinN-.js";import{I as n,c as i,t as a}from"./with-default-aria-D2csPgel.js";import"./structured-card-BxAM3PZ6.js";import{d as p}from"./index-BwWO67qM.js";import{d as m}from"./index-BxwW0c7l.js";import{d}from"./index-nuWLtSYU.js";import{d as e}from"./constants-Das5twfs.js";import{O as s,S as f}from"./select-Bigt74ea.js";import{d as c}from"./index-t1ud0DDi.js";import{d as l}from"./index-DobcG04P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-UEQKXORL.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CFKk3rrs.js";import"./index-BkNzMWyx.js";import"./index-C4Q9D1PT.js";import"./base-button-adapter-DlfSI3Sy.js";import"./with-form-associated-PBFCvzuY.js";import"./field-CbwI_Y1t.js";import"./list-dropdown-aware-core-Bh8iLnfj.js";import"./linear-progress-constants-D4Pu9t0-.js";import"./list-p_2rJArk.js";import"./popover-D_6XvdZv.js";import"./with-longpress-listener-Ci13eENt.js";import"./dismissible-stack-DIz5D_1_.js";import"./skeleton-constants-bPDlrQFI.js";import"./divider-CbCyjs9T.js";import"./circular-progress-DOQXpkYq.js";import"./scaffold-CVxpwlO-.js";import"./tooltip-BJAtDOG4.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function u(){e(s)}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function g(){e(f)}p();m();d();g();u();c();l();n.define([i,a]);const v="forge-structured-card",X={title:"Components/Structured Card",component:v,decorators:[r(`
      .workflow-card-container {
        max-width: 320px;
      }

    `)],render:()=>t`
      <div class="workflow-card-container">
        <forge-structured-card heading-level="2">
          <div slot="title">Workflow Status</div>

          <div slot="body">
            <forge-stack gap="16">
              <forge-select label="Update status" label-position="block-start" variant="outlined" value="pending">
                <forge-option value="pending">Pending Review</forge-option>
                <forge-option value="approved">Approved</forge-option>
                <forge-option value="rejected">Rejected</forge-option>
                <forge-option value="revision">Needs Revision</forge-option>
              </forge-select>
              <forge-stack gap="8">
                <forge-button variant="filled">
                  <forge-icon name="calendar" external></forge-icon>
                  Schedule interview
                </forge-button>
                <forge-button variant="tonal">
                  <forge-icon name="send" external></forge-icon>
                  Send reference request
                </forge-button>
              </forge-stack>
            </forge-stack>
          </div>
        </forge-structured-card>
      </div>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const Y=["WorkflowStatusCard"];export{o as WorkflowStatusCard,Y as __namedExportsOrder,X as default};
