import{x as t}from"./iframe-CJA-oYji.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-Cyn6jl-k.js";import"./structured-card-Bi28ONSB.js";import{d as i,a as s}from"./index-DLiJlObk.js";import{d as p}from"./index-DFwCaa_u.js";import{d as m}from"./index-MdvfrA-s.js";import{d}from"./index-BFvX2EMV.js";import{d as c}from"./index-B2ZAUUEY.js";import"./constants-BWp4YXPh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DEfjwoUI.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BBiBNCfq.js";import"./when-3fO0zp9C.js";import"./lit-utils-07JDB8ZZ.js";import"./async-directive-DVtU5Q-2.js";import"./index-DdNbJoJK.js";import"./icon-button-BpsGkVSY.js";import"./base-button-adapter-A0K3LK6K.js";import"./focus-indicator-D2GI4J6r.js";import"./icon-DZ9Vtx3q.js";import"./tooltip-4eI4fWgT.js";import"./with-longpress-listener-r6HsW6jA.js";import"./dismissible-stack-Dr2ZClqI.js";import"./select-DCFapNqx.js";import"./with-form-associated-lUxBCRU7.js";import"./field-6uhecfmv.js";import"./list-dropdown-aware-core-8oO1ikCu.js";import"./linear-progress-constants-BWUJK2gM.js";import"./list-ynvVgyow.js";import"./popover-Dfrndn7Q.js";import"./skeleton-constants-BL-L33H_.js";import"./divider-CLSHNWMW.js";import"./circular-progress-BbgFGlXl.js";import"./scaffold-DHvNjx2s.js";import"./toolbar-CKYt7XE_.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
