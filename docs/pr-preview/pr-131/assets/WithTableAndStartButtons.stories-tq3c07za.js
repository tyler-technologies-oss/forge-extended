import{x as t}from"./iframe-BcE93Zz5.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-Ctm27gPP.js";import"./structured-card-CNfdRQGx.js";import{d as i,a as s}from"./index-LtALZKDa.js";import{d as p}from"./index-Bpce5LPy.js";import{d as m}from"./index-BiPGyJDG.js";import{d}from"./index-BGENJ8Kb.js";import{d as c}from"./index-CH5bIhxy.js";import"./constants-Dh5Svg1S.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-ruiMqfj1.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-D8p_C29K.js";import"./when-3fO0zp9C.js";import"./lit-utils-w4IX00lO.js";import"./async-directive-D1frOKea.js";import"./index-D7BbtT26.js";import"./icon-button-Blln7NbG.js";import"./base-button-adapter-DoNszb5A.js";import"./focus-indicator-B9933ltP.js";import"./icon-Dt-aqUlq.js";import"./tooltip-DBAIdnrm.js";import"./with-longpress-listener-eZ12HZJc.js";import"./dismissible-stack-7I7vA9YH.js";import"./select-6ZbcBs8r.js";import"./with-form-associated-DsFjIMDL.js";import"./field-03Oxe0Qf.js";import"./list-dropdown-aware-core-LPzyPM1n.js";import"./linear-progress-constants-CB24seMq.js";import"./list-DTGe0pfB.js";import"./popover-DoVP4jsg.js";import"./skeleton-constants-oQDPZR89.js";import"./divider-BzG7JWpp.js";import"./circular-progress-BHpr2ez_.js";import"./scaffold-B3MdEs1m.js";import"./toolbar-BWL3vhFG.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
