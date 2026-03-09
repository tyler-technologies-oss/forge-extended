import{x as t}from"./iframe-C3t4LH1b.js";import{s as r}from"./decorators-DKIq_6l-.js";import{I as n,c as i,t as a}from"./with-default-aria-k7G-8tWu.js";import"./structured-card-BL9EX6Ke.js";import{d as p}from"./index-DKJYH_MG.js";import{d as m}from"./index-BBpruia2.js";import{d}from"./index-DM0glkgS.js";import{d as e}from"./constants-B204HRK0.js";import{O as s,S as f}from"./select-AMmZx_Mg.js";import{d as c}from"./index-O4jD_vps.js";import{d as l}from"./index-ClRnFhdX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-CIPrcNrg.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DXiN33bz.js";import"./index-DEqYr-bB.js";import"./index-Dm4Fu2XJ.js";import"./base-button-adapter-CbKkcTh8.js";import"./with-form-associated-CiWkMCe7.js";import"./field-B0dFHy75.js";import"./list-dropdown-aware-core-D-efg_ko.js";import"./linear-progress-constants-Bep7UgDf.js";import"./list-BDGHWKZ3.js";import"./popover-CTlY2Qlv.js";import"./with-longpress-listener-DwNacC_G.js";import"./dismissible-stack-ClaenXGW.js";import"./skeleton-constants-DMYNluEW.js";import"./divider-DpATyTIn.js";import"./circular-progress-Bh0GzRcQ.js";import"./scaffold-CN0aRG_9.js";import"./tooltip-ZBsc6DkQ.js";/**
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
