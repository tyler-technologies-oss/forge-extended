import{x as t}from"./iframe-CZPu-D1U.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-D7KCfSzQ.js";import"./structured-card-NyaD42IH.js";import{d as i,a as s}from"./index-4RL1CNum.js";import{d as p}from"./index-CIsPNzPZ.js";import{d as m}from"./index-c3BtHen4.js";import{d}from"./index-BSBCPjw-.js";import{d as c}from"./index-DfqG8tfa.js";import"./constants-pmch7zZ6.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BS-KI3zP.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BQ3dL5bG.js";import"./when-3fO0zp9C.js";import"./lit-utils-CsQHwhwS.js";import"./async-directive-ptfc4q4E.js";import"./index-LYHbP_0-.js";import"./icon-button-CBAAmoKT.js";import"./base-button-adapter-BluJsu7j.js";import"./focus-indicator-Du80mSZE.js";import"./icon-Co630ox_.js";import"./tooltip-DaOb7y6z.js";import"./with-longpress-listener-CmUuuU2G.js";import"./dismissible-stack-I1LEvZq_.js";import"./select-waFjtd5a.js";import"./with-form-associated-CXhmsNBK.js";import"./field-AtjMc2Iu.js";import"./list-dropdown-aware-core-C2wStSQk.js";import"./linear-progress-constants-DzK6QW-6.js";import"./list-3E5lO_PM.js";import"./popover-B7NrNTqN.js";import"./skeleton-constants-B-iUoIrb.js";import"./divider-CuD8V77X.js";import"./circular-progress-D_WRiJI2.js";import"./scaffold-D6HYIQv1.js";import"./toolbar-BFrIutW-.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
