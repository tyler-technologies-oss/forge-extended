import{x as t}from"./iframe-1dcdlrZB.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-CV78iXDo.js";import"./structured-card-D0mjUNgB.js";import{d as i,a as s}from"./index-xTCh-UMZ.js";import{d as p}from"./index-DG168QC-.js";import{d as m}from"./index-Pwb0Rn0e.js";import{d}from"./index-C1wyvNNH.js";import{d as c}from"./index-CdR9ScdD.js";import"./constants-CRBXf694.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Bs9SlVcM.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-C62WyhHV.js";import"./when-3fO0zp9C.js";import"./lit-utils-BcnBu-T5.js";import"./async-directive-BB26Ng_H.js";import"./index-B6kOa7HJ.js";import"./icon-button-DE3JhtkL.js";import"./base-button-adapter-jab__om5.js";import"./focus-indicator-CVN0kG-m.js";import"./icon-DZQJbqqs.js";import"./tooltip-D3AGXHhf.js";import"./with-longpress-listener-Cd8SlU9A.js";import"./dismissible-stack-B4_d_Qwd.js";import"./select-Dl7_F9ol.js";import"./with-form-associated-C_gFpSFy.js";import"./field-CaYyZPr8.js";import"./list-dropdown-aware-core-LtyXznqV.js";import"./linear-progress-constants-D2htPlNf.js";import"./list-DMwHu_Nc.js";import"./popover-CSICA1Vn.js";import"./skeleton-constants-Di_7XvUW.js";import"./divider-Ck04PtKV.js";import"./circular-progress-OEj2EaVK.js";import"./scaffold-CIOY7KiN.js";import"./toolbar-B1_Egwrn.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
      <forge-structured-card heading-level="2" body-spacing="none">
        <div slot="title">Asset Inventory</div>
        <forge-icon-button aria-label="Refresh data" slot="after-header-actions">
          <forge-icon name="refresh"></forge-icon>
        </forge-icon-button>
        <forge-icon-button aria-label="Download report" slot="after-header-actions">
          <forge-icon name="download"></forge-icon>
        </forge-icon-button>
        <forge-table slot="body" .data=${[{id:"AST-001",name:"Dell Latitude 5520",category:"Laptop",location:"Building A",status:"In Use"},{id:"AST-002",name:"HP LaserJet Pro",category:"Printer",location:"Building B",status:"Available"},{id:"AST-003",name:"Cisco IP Phone 8845",category:"Phone",location:"Building A",status:"In Use"},{id:"AST-004",name:'Samsung 27" Monitor',category:"Monitor",location:"Building C",status:"In Repair"},{id:"AST-005",name:"Logitech MX Keys",category:"Keyboard",location:"Building A",status:"Available"}]} .columnConfigurations=${[{property:"id",header:"Asset ID"},{property:"name",header:"Asset Name"},{property:"category",header:"Category"},{property:"location",header:"Location"},{property:"status",header:"Status"}]}></forge-table>
        <forge-stack slot="footer-start" inline alignment="center" wrap gap="8">
          <forge-button variant="outlined">Update asset inventory</forge-button>
          <forge-button variant="outlined">Asset inventory dataset</forge-button>
        </forge-stack>
        <forge-paginator slot="footer-primary-action" page-size="5" total="25" page-index="0"></forge-paginator>
      </forge-structured-card>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const Z=["WithTableAndStartButtons"];export{o as WithTableAndStartButtons,Z as __namedExportsOrder,Y as default};
