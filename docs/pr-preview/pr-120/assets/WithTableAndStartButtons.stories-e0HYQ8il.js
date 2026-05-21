import{x as t}from"./iframe-GrTRO8L1.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-CAYkoqVR.js";import"./structured-card-BI0LI0QG.js";import{d as i,a as s}from"./index-C7mm2iD6.js";import{d as p}from"./index-BWwdvYCc.js";import{d as m}from"./index-CZHUx46f.js";import{d}from"./index-C8SR9MVk.js";import{d as c}from"./index-BAKiMXer.js";import"./constants-DGCB8oWA.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DYGP3HQW.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-DUrSKShD.js";import"./when-3fO0zp9C.js";import"./lit-utils-CFhwIMsU.js";import"./async-directive-wEvzFno2.js";import"./index-DStYB2pB.js";import"./icon-button-BvdXsyIG.js";import"./base-button-adapter-BKm9wL5-.js";import"./focus-indicator-CxrxGy1T.js";import"./icon-jmlsD8Z8.js";import"./tooltip-C37glYKj.js";import"./with-longpress-listener-72ALMor3.js";import"./dismissible-stack--a8Vtlke.js";import"./select-Dk0bpqgT.js";import"./with-form-associated-DBUMKeqe.js";import"./field-CP8n2q3k.js";import"./list-dropdown-aware-core-C_uEUrTC.js";import"./linear-progress-constants-TR9EyRWD.js";import"./list-3RtIrHcL.js";import"./popover-Am-zAE31.js";import"./skeleton-constants-BC0s8iFT.js";import"./divider-DlXnvteY.js";import"./circular-progress-BLV60xmS.js";import"./scaffold-9LAvZt3b.js";import"./toolbar-B6fEzPuT.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
