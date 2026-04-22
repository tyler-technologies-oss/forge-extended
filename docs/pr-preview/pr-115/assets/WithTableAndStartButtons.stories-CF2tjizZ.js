import{x as t}from"./iframe-DctCxiSq.js";import{I as e,D as r,E as a,g as n}from"./with-default-aria-CNms5Vty.js";import"./structured-card-bixkQ0ES.js";import{d as i,a as s}from"./index-2fdKA8WC.js";import{d as p}from"./index-D125PVOJ.js";import{d as m}from"./index-CoWFMgSH.js";import{d}from"./index-BoLWFwk5.js";import{d as c}from"./index-HBNxUhCI.js";import"./constants-CS4zXbsk.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-K8DqNwWa.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Cf4EZyvw.js";import"./when-3fO0zp9C.js";import"./lit-utils-BjQhxcrF.js";import"./async-directive-hMS-Qt5r.js";import"./index-KZwkj2I_.js";import"./icon-button-DwZ-7yaj.js";import"./base-button-adapter-DyQ7pt74.js";import"./focus-indicator-Diq_EcWA.js";import"./icon-BW_dzchp.js";import"./tooltip-BTEnoueP.js";import"./with-longpress-listener-Cx26JS2z.js";import"./dismissible-stack-D2yQ4f0P.js";import"./select-DsPUwiON.js";import"./with-form-associated-DOyhhcSU.js";import"./field-D8aq5Z69.js";import"./list-dropdown-aware-core-in1kzSoo.js";import"./linear-progress-constants-C8nGds3p.js";import"./list-C9gR7WRW.js";import"./popover-Co0NGWdd.js";import"./skeleton-constants-58wSoob0.js";import"./divider-DLqO2QWJ.js";import"./circular-progress-FocAaC94.js";import"./scaffold-BEmoRKf6.js";import"./toolbar-C5GY-ugz.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
