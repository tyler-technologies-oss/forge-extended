import{x as t}from"./iframe-DeCz1NxP.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-I7DctnY-.js";import"./structured-card-bjWxbD7K.js";import{d as i,a as s}from"./index-D9z0xVKd.js";import{d as p}from"./index-Pb6G1LkD.js";import{d as m}from"./index-y6YfRWNK.js";import{d}from"./index-TgWwlDnd.js";import{d as c}from"./index-Dmo7YR45.js";import"./constants-H4k9CvBY.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DVuUGvG9.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BgGxNUvr.js";import"./when-3fO0zp9C.js";import"./lit-utils-BuEhPJXb.js";import"./async-directive-CiAFc-zp.js";import"./index-CGu_mIUY.js";import"./icon-button-BGsoo32m.js";import"./base-button-adapter-Cy9mOPq-.js";import"./focus-indicator-D8ZXg04p.js";import"./icon-CiK0WDc_.js";import"./tooltip-CtF5mnC2.js";import"./with-longpress-listener-CYjYA53N.js";import"./dismissible-stack-CkIBD97B.js";import"./select-BqEoO1om.js";import"./with-form-associated-DjuSk0o1.js";import"./field-CAWGSq0B.js";import"./list-dropdown-aware-core-6Wui6cuj.js";import"./linear-progress-constants-B29qV_te.js";import"./list-JMs13qX8.js";import"./popover-DlUlneyV.js";import"./skeleton-constants-BgOv7Gr5.js";import"./divider-CCBJ8xsg.js";import"./circular-progress-DcaeshsM.js";import"./scaffold-0fxlULKI.js";import"./toolbar-D4KHqBbf.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
