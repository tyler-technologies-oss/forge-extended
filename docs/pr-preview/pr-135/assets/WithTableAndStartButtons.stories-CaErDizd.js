import{x as t}from"./iframe-tM2nPosT.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-xBsIkxsv.js";import"./structured-card-CsIo2kBl.js";import{d as i,a as s}from"./index-BtcKQ0w-.js";import{d as p}from"./index-xJmYzsWl.js";import{d as m}from"./index-CbXAgZIg.js";import{d}from"./index-CZZ5A_er.js";import{d as c}from"./index-C4bYkZ88.js";import"./constants-Bo_E71tX.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-a5mi43FS.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-eBJloXHX.js";import"./when-3fO0zp9C.js";import"./lit-utils-C5EEdW2s.js";import"./async-directive-Da5SU4qn.js";import"./index-D1fGadYP.js";import"./icon-button-7MmOA5qM.js";import"./base-button-adapter-BdPD88KD.js";import"./focus-indicator-CHK7xvbY.js";import"./icon-BKlwRGrV.js";import"./tooltip-A8JUDb4p.js";import"./with-longpress-listener-D0IurHhB.js";import"./dismissible-stack-CfzECr-G.js";import"./select-CpB-vj_5.js";import"./with-form-associated-LVmGjZHl.js";import"./field-Cz64hiep.js";import"./list-dropdown-aware-core-BOrdBczT.js";import"./linear-progress-constants-B8McYwX5.js";import"./list-DIl-OQxK.js";import"./popover-zgAVYNUA.js";import"./skeleton-constants-CmCzVQPB.js";import"./divider-C4SL4bin.js";import"./circular-progress-B7YMAyRP.js";import"./scaffold-DbS1zFPl.js";import"./toolbar-DprTCITz.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
