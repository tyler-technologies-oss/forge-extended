import{x as t}from"./iframe-CHiU9p4_.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-BMNYnIwX.js";import"./structured-card-DANgTFRi.js";import{d as i,a as s}from"./index-ChDM9xPE.js";import{d as p}from"./index-Df8nf2rt.js";import{d as m}from"./index-MPTQOYCp.js";import{d}from"./index-CvIW5pL1.js";import{d as c}from"./index-CUBmxzUz.js";import"./constants-CJXKSYSv.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-5BIjlE4b.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BKuRFwuA.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cr5_x4yK.js";import"./async-directive-CyGa2P2X.js";import"./index-DKRhokZN.js";import"./icon-button-CAk8iN1A.js";import"./base-button-adapter-BzHWYC8M.js";import"./focus-indicator-0YKQ1bcN.js";import"./icon-bah9rEjy.js";import"./tooltip-pXvIAl2q.js";import"./with-longpress-listener-6pwEWJuL.js";import"./dismissible-stack-CzHB2CPP.js";import"./select-Btuye-Hj.js";import"./with-form-associated-CE3vUI8A.js";import"./field-DcbW3mnm.js";import"./list-dropdown-aware-core-DmwqOquu.js";import"./linear-progress-constants-B8CgasgD.js";import"./list-CFm3ToDt.js";import"./popover-tO05DQRi.js";import"./skeleton-constants-CC8C4km9.js";import"./divider-DmN9E3ot.js";import"./circular-progress-B96Nh0dk.js";import"./scaffold-D3nwEHWr.js";import"./toolbar-C3hC13kQ.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
