import{x as t}from"./iframe-CpBRfrzJ.js";import{I as e,H as r,J as a,h as n}from"./with-default-aria-CNCzwp3d.js";import"./structured-card-DK8lQNzm.js";import{d as i,a as s}from"./index-NB9EOW33.js";import{d as p}from"./index-CPqxRXg2.js";import{d as m}from"./index-Cv_cvAeD.js";import{d}from"./index-B6uwA5O0.js";import{d as c}from"./index-D5MzLC53.js";import"./constants-gVnml2HS.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DnTDE1Du.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CRjsCpj6.js";import"./when-3fO0zp9C.js";import"./lit-utils-BzwyD-AX.js";import"./async-directive-3bm8YuDq.js";import"./index-2TN2ydWO.js";import"./icon-button-Ci9JJxnx.js";import"./base-button-adapter-BElXDfEx.js";import"./focus-indicator-BNQconvI.js";import"./icon-C8Wdfnfi.js";import"./tooltip-DNkxIzFe.js";import"./with-longpress-listener-DqjEQq5X.js";import"./dismissible-stack-DrWzySwM.js";import"./select-zNFlNHHZ.js";import"./with-form-associated-Bdy862wu.js";import"./field-5kx8nyJ5.js";import"./list-dropdown-aware-core-BqcA0KMQ.js";import"./linear-progress-constants-D0XW2r4i.js";import"./list-CdnnGO3_.js";import"./popover-Dqz_2LnJ.js";import"./skeleton-constants-D_Q_KRBQ.js";import"./divider-D5dkE1O8.js";import"./circular-progress-poki7xxx.js";import"./scaffold-BeB9S3dK.js";import"./toolbar-rrQtwSp8.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
