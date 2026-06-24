import{x as t}from"./iframe-BiqOLCym.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-B9u_I1Vb.js";import"./structured-card-C-CEjD1m.js";import{d as i,a as s}from"./index-DLDay9n7.js";import{d as p}from"./index-nU3wy1kV.js";import{d as m}from"./index-BvCHHo4A.js";import{d}from"./index-v9gmZ9YL.js";import{d as c}from"./index-BqySDuoE.js";import"./constants-CqaTs5fS.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-DwadfE0F.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-OJl7znny.js";import"./when-3fO0zp9C.js";import"./lit-utils-CpR51AY-.js";import"./async-directive-BRtB7_Lq.js";import"./index-P5eP_rHx.js";import"./icon-button-CKIgkTLl.js";import"./base-button-adapter-Dub1mvwR.js";import"./focus-indicator-Dd8QgJhF.js";import"./icon-CqcKSKcV.js";import"./tooltip-CTDgzlkO.js";import"./with-longpress-listener-BACsXX7Q.js";import"./dismissible-stack-BoCPnbCA.js";import"./select-BrgMoBAC.js";import"./with-form-associated-DxQwKw86.js";import"./field-BA_dOa4U.js";import"./list-dropdown-aware-core-vPzyRa-6.js";import"./linear-progress-constants-AE80DDVU.js";import"./list-DwxX-yla.js";import"./popover-D-wdKOf7.js";import"./skeleton-constants-B4EJp5pn.js";import"./divider-dnZdqObf.js";import"./circular-progress-ChobbUnK.js";import"./scaffold-DsCKVYVp.js";import"./toolbar-CD-9rqEB.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
