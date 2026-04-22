import{x as t}from"./iframe-BvnLkDOK.js";import{I as e,D as r,E as a,g as n}from"./with-default-aria-y-32z6A_.js";import"./structured-card-ukm54vnU.js";import{d as i,a as s}from"./index-BMg4vesZ.js";import{d as p}from"./index-7VHYH-Jx.js";import{d as m}from"./index-BTX5vJi5.js";import{d}from"./index-BtmWCw-J.js";import{d as c}from"./index-DYnTcu58.js";import"./constants-kTHrmdCT.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CPXrpwa3.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CH17ylxq.js";import"./when-3fO0zp9C.js";import"./lit-utils-2hRzsoI_.js";import"./async-directive-Bhjl9_g_.js";import"./index-Dxv-koxG.js";import"./icon-button-DmmTK0rA.js";import"./base-button-adapter-g1RwZUjD.js";import"./focus-indicator-DL0sKKHm.js";import"./icon-B2kwpamn.js";import"./tooltip-BDE0IBXy.js";import"./with-longpress-listener-DWuZ0OGt.js";import"./dismissible-stack-BAILyQq7.js";import"./select-Cr2-hdsm.js";import"./with-form-associated-Dy5GyBUV.js";import"./field-C-3u36pZ.js";import"./list-dropdown-aware-core-CDUTk67e.js";import"./linear-progress-constants-C462IbpD.js";import"./list-C589_Yxf.js";import"./popover-SffOaZUO.js";import"./skeleton-constants-Bg6tF1yR.js";import"./divider-BVCVqcue.js";import"./circular-progress-BFLBENDh.js";import"./scaffold-uJCqEj0H.js";import"./toolbar-DHuuK8Cs.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
