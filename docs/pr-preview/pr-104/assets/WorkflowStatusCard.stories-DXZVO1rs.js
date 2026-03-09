import{x as t}from"./iframe-DgM_YBnP.js";import{s as r}from"./decorators-IuwOfT-s.js";import{I as n,c as i,t as a}from"./with-default-aria-DtsBzZO1.js";import"./structured-card-D68VIq55.js";import{d as p}from"./index-DzCDnRYk.js";import{d as m}from"./index-TLX34D2h.js";import{d}from"./index-dhkt5BEK.js";import{d as e}from"./constants-CWbR4eAd.js";import{O as s,S as f}from"./select-Bcu2byR3.js";import{d as c}from"./index-gIns-NZd.js";import{d as l}from"./index-CiGAiN60.js";import"./_commonjsHelpers-CqkleIqs.js";import"./when-DfnyT8j1.js";import"./base-CShCMygk.js";import"./style-map-DVhbbNmU.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CbamNx1q.js";import"./index-BxWU0voc.js";import"./index-CzU3xEkc.js";import"./base-button-adapter-CKXlJ5O5.js";import"./with-form-associated-mNAPnVj7.js";import"./field-C-ar99JY.js";import"./list-dropdown-aware-core-jOanyD3H.js";import"./linear-progress-constants-v5Wr_WrA.js";import"./list-edJCLIdU.js";import"./popover-Chw9NT3_.js";import"./with-longpress-listener-COLePBh0.js";import"./dismissible-stack-C6iDpq_p.js";import"./skeleton-constants-DXDWSROO.js";import"./divider-DUCbbCVC.js";import"./circular-progress-DV0r3iGM.js";import"./scaffold-AdtpjSsh.js";import"./tooltip-Cr_sGlMX.js";/**
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
