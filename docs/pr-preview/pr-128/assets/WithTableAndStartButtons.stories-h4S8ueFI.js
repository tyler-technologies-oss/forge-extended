import{x as t}from"./iframe-DgquO3pO.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-BO10j1D_.js";import"./structured-card-D95DHJLY.js";import{d as i,a as s}from"./index-BLA__2D1.js";import{d as p}from"./index-1la8qqvk.js";import{d as m}from"./index-CBpqjSGL.js";import{d}from"./index-CI8dGJSN.js";import{d as c}from"./index-B7Fa6yG9.js";import"./constants-Cz_B_Edw.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Co6uFH6N.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Bx__4KE9.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cr9d3hEP.js";import"./async-directive-A3AQ89GJ.js";import"./index-DMcmQIuE.js";import"./icon-button-CMKTbsPc.js";import"./base-button-adapter-OQLbCz69.js";import"./focus-indicator-COj_WotQ.js";import"./icon-BgodXmi4.js";import"./tooltip-B4Hh5yz-.js";import"./with-longpress-listener-CAhEETAe.js";import"./dismissible-stack-CWRVjbOe.js";import"./select-C8g6VSam.js";import"./with-form-associated-UHVl8H1D.js";import"./field-DSevHd8U.js";import"./list-dropdown-aware-core-Ct4yK0WK.js";import"./linear-progress-constants-DctFSUnd.js";import"./list-DTdHfedB.js";import"./popover-CecgMusG.js";import"./skeleton-constants-BPgO9dWD.js";import"./divider-CYs2xnQD.js";import"./circular-progress-BRIAEdap.js";import"./scaffold-B_rfDPX3.js";import"./toolbar-e2Jja87u.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
