import{x as t}from"./iframe-DXbn4rxA.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-Cx645oS7.js";import"./structured-card-BaVonffd.js";import{d as i,a as s}from"./index-DszaI-9o.js";import{d as p}from"./index-RKqivKzO.js";import{d as m}from"./index-BQBStG7r.js";import{d}from"./index-Ba3B3RI_.js";import{d as c}from"./index-C5MYRhK6.js";import"./constants-DjAQnJTr.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-BlBQRB-3.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CTYdscXb.js";import"./when-3fO0zp9C.js";import"./lit-utils-tmm0hn-_.js";import"./async-directive-lseVjRFh.js";import"./index-C7xLUIcQ.js";import"./icon-button-Dc-pE4gS.js";import"./base-button-adapter-DTHSEwCO.js";import"./focus-indicator-pXydGm2m.js";import"./icon-TYDC0QZ8.js";import"./tooltip-CpUsp_Pk.js";import"./with-longpress-listener-Bygt3nKN.js";import"./dismissible-stack-aqNiWXAU.js";import"./select-CJU31h6r.js";import"./with-form-associated-CATBW4yw.js";import"./field-Dic0ac3g.js";import"./list-dropdown-aware-core-Dy1Xr487.js";import"./linear-progress-constants-DnRjVPol.js";import"./list-BKuP7WVR.js";import"./popover-B3W99qAR.js";import"./skeleton-constants-BiZxkKen.js";import"./divider-CZrouEAr.js";import"./circular-progress-CITdtq4l.js";import"./scaffold-2-mom0XM.js";import"./toolbar-Ce7RiR54.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
