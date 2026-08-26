import{x as t}from"./iframe-Be-8WAtF.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-fXPLHj-L.js";import"./structured-card-BL13BE1-.js";import{d as i,a as s}from"./index-CnNJOoPz.js";import{d as p}from"./index-BfZYzUXd.js";import{d as m}from"./index-DA0Dh1vd.js";import{d}from"./index-BWW_2YhK.js";import{d as c}from"./index-Do_EoKm5.js";import"./constants-Dq7oX4ND.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-LkDqZww_.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Dbo_ihfE.js";import"./when-3fO0zp9C.js";import"./lit-utils-C49Pmm7a.js";import"./async-directive-DpeoARQz.js";import"./index-BCuR79Db.js";import"./icon-button-BtBoz5U4.js";import"./base-button-adapter-BuT7cJg_.js";import"./focus-indicator-B6XIgzXe.js";import"./icon-DGd7oIZ4.js";import"./tooltip-DnGmtwFb.js";import"./with-longpress-listener-i061tCQZ.js";import"./dismissible-stack-Cdjp4gTp.js";import"./select-SS7qy6cP.js";import"./with-form-associated-DWa2cinW.js";import"./field-DB69brb6.js";import"./list-dropdown-aware-core-ELA_Z3l_.js";import"./linear-progress-constants-wVRbph3A.js";import"./list-Bv9mAW9M.js";import"./popover-BCvVw-YG.js";import"./skeleton-constants-D1vXQ_rY.js";import"./divider-CRSV_8Ro.js";import"./circular-progress-DYzAWCtm.js";import"./scaffold-BohGpMx1.js";import"./toolbar-C0VZBJqn.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
