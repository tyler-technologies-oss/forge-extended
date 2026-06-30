import{x as t}from"./iframe-BTWM928H.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-xU-wGtUD.js";import"./structured-card-B0rCrF6P.js";import{d as i,a as s}from"./index-C7hLSji6.js";import{d as p}from"./index-DMKc8jLN.js";import{d as m}from"./index-DNv18lDM.js";import{d}from"./index-D1ZWgNkk.js";import{d as c}from"./index-k6DuHIz1.js";import"./constants-BDkZqNfO.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CucrPsTa.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Do-LqXjd.js";import"./when-3fO0zp9C.js";import"./lit-utils-jcZMQK43.js";import"./async-directive-CR3mRzRK.js";import"./index-B4DVHpVw.js";import"./icon-button-CVlUviaJ.js";import"./base-button-adapter-epmXT1m8.js";import"./focus-indicator-3mHajcQl.js";import"./icon-CwrdGC3_.js";import"./tooltip-nDBdav6x.js";import"./with-longpress-listener-6B6wFwH_.js";import"./dismissible-stack-DNStF2B9.js";import"./select-CcADusUC.js";import"./with-form-associated-CTuERQYm.js";import"./field-DhD5QmN3.js";import"./list-dropdown-aware-core-BKtEI7HX.js";import"./linear-progress-constants-C3uMNHEF.js";import"./list-OAz3kkN8.js";import"./popover-CT_nhYR-.js";import"./skeleton-constants-YZsWsg_y.js";import"./divider-CuaKg81Q.js";import"./circular-progress-Dtgrkgne.js";import"./scaffold-BOYA21RP.js";import"./toolbar-DZd2IoV1.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
