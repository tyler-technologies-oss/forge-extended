import{x as t}from"./iframe-D5y4AxAu.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-wA-QA0TJ.js";import"./structured-card-BkszK16H.js";import{d as i,a as s}from"./index-C_HboN4O.js";import{d as p}from"./index-CPGegvkm.js";import{d as m}from"./index-BKv8pDoJ.js";import{d}from"./index-PxtUuE7h.js";import{d as c}from"./index-BpdDP05g.js";import"./constants-BL4Uhso2.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-2_wuikYn.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-ClryHX0z.js";import"./when-3fO0zp9C.js";import"./lit-utils-CLrUsRtL.js";import"./async-directive-Ck1GLDgE.js";import"./index-HEkN-Qk6.js";import"./icon-button-Q3kJS1UZ.js";import"./base-button-adapter-KOWgI9rl.js";import"./focus-indicator-wDH65eEP.js";import"./icon-CNYE5Fre.js";import"./tooltip-iBg2SyZ0.js";import"./with-longpress-listener-CqBEgAny.js";import"./dismissible-stack-CdMxcwTL.js";import"./select-muT9j6lr.js";import"./with-form-associated-D58O7VcP.js";import"./field-MBBx0ZRF.js";import"./list-dropdown-aware-core-iPaXi-lu.js";import"./linear-progress-constants-C3Lfyrnq.js";import"./list-D24I4dmy.js";import"./popover-BIeAeh-8.js";import"./skeleton-constants-DJ-HGBjl.js";import"./divider-CHrYtTwp.js";import"./circular-progress-zH6M_EM_.js";import"./scaffold-DtGlRBJx.js";import"./toolbar-B3v0ci7I.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
