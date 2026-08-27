import{x as t}from"./iframe-C1IwHWh4.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-vNQzvBvA.js";import"./structured-card-Cg4GNQqE.js";import{d as i,a as s}from"./index-n83lfvzk.js";import{d as p}from"./index-CjDmGGLj.js";import{d as m}from"./index-BrM1vFRX.js";import{d}from"./index-B2atYMhD.js";import{d as c}from"./index-DY_Pwzpr.js";import"./constants-CR--KdMw.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CQT56oMp.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CLZXKjpq.js";import"./when-3fO0zp9C.js";import"./lit-utils-CGstrqhG.js";import"./async-directive-DgVrjHLV.js";import"./index-iSqkMykt.js";import"./icon-button-Ck7xIPIZ.js";import"./base-button-adapter-CXVNkTJs.js";import"./focus-indicator-BOAG1Qk5.js";import"./icon-CmQFPV-F.js";import"./tooltip-C5a22RZN.js";import"./with-longpress-listener-CwBHWrNA.js";import"./dismissible-stack-B9OuHJfx.js";import"./select-DvpqDZVk.js";import"./with-form-associated-ChnM3SbG.js";import"./field-CELpkER1.js";import"./list-dropdown-aware-core-B90dblQo.js";import"./linear-progress-constants-B7jdejGI.js";import"./list-K1tsZwiD.js";import"./popover-CVtI6GQy.js";import"./skeleton-constants-wex6zXBt.js";import"./divider-1heutVuv.js";import"./circular-progress-DSff2ojl.js";import"./scaffold-BF8nFtD3.js";import"./toolbar-DeDDJ6KG.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
