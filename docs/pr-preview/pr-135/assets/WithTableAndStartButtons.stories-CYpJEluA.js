import{x as t}from"./iframe-C_q70EjJ.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-DoUMoyAO.js";import"./structured-card-BdX8Br1J.js";import{d as i,a as s}from"./index-BtRATusW.js";import{d as p}from"./index-DeIFq22o.js";import{d as m}from"./index-a4-2iaGm.js";import{d}from"./index-DYHwHMNC.js";import{d as c}from"./index-CMv5gR_p.js";import"./constants-Bz-XVs7i.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DkYPREOc.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CLhTGUGH.js";import"./when-3fO0zp9C.js";import"./lit-utils-BIeNeJUJ.js";import"./async-directive-CEApR3Nx.js";import"./index--VMotkga.js";import"./icon-button-BYpqW0EQ.js";import"./base-button-adapter-D8bdyaXz.js";import"./focus-indicator-B5nfyM7B.js";import"./icon-v3qIUZe9.js";import"./tooltip-BAAsjeAC.js";import"./with-longpress-listener-Dx3vJ2No.js";import"./dismissible-stack-RZL21AAV.js";import"./select-BilIAabg.js";import"./with-form-associated-CUhaRyIm.js";import"./field-BPDtcr-Y.js";import"./list-dropdown-aware-core-kKHkrv6Q.js";import"./linear-progress-constants-C3_milXL.js";import"./list-DnXFaPX-.js";import"./popover-ltD-ftzx.js";import"./skeleton-constants-DRkl2I0a.js";import"./divider-CVSeqRe7.js";import"./circular-progress-BBFnVpQo.js";import"./scaffold-C8EopZZ6.js";import"./toolbar-DYp5PUmZ.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
