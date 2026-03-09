import{x as t}from"./iframe-DzMABE0J.js";import{s as r}from"./decorators-Bvbs7tRY.js";import{I as n,c as i,t as a}from"./with-default-aria-95UvAwgt.js";import"./structured-card-Dr5ouBaJ.js";import{d as p}from"./index-BNcDufrq.js";import{d as m}from"./index-DDmcS6Ts.js";import{d}from"./index-gaO1S0DB.js";import{d as e}from"./constants-v1LuvkTS.js";import{O as s,S as f}from"./select-zL8lfBIP.js";import{d as c}from"./index-CZraB76c.js";import{d as l}from"./index-B8Y54OuA.js";import"./_commonjsHelpers-CqkleIqs.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-B5WkjWt2.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-D7DbRIMc.js";import"./class-map-DM8pdLL7.js";import"./index-D392OEpP.js";import"./index-BxmYG8Fc.js";import"./base-button-adapter-Dvd2gz0U.js";import"./with-form-associated-BYqenGqG.js";import"./field-DCzfAb6_.js";import"./list-dropdown-aware-core-wGBlrZUN.js";import"./linear-progress-constants-pNPD-TN7.js";import"./list-BMlSR59_.js";import"./popover-CUPt1dqs.js";import"./with-longpress-listener-DBH80Hg0.js";import"./dismissible-stack-BcBmKDrd.js";import"./skeleton-constants-Bn8xuMCh.js";import"./divider-CYD2a11W.js";import"./circular-progress-C2SspS-I.js";import"./scaffold-DGJE3_dL.js";import"./tooltip-CjRSMWIE.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function u(){e(s)}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function g(){e(f)}p();m();d();g();u();c();l();n.define([i,a]);const v="forge-structured-card",Y={title:"Components/Structured Card",component:v,decorators:[r(`
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
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const Z=["WorkflowStatusCard"];export{o as WorkflowStatusCard,Z as __namedExportsOrder,Y as default};
