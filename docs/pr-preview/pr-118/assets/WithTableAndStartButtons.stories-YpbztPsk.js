import{x as t}from"./iframe-jIu5SHun.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-CAxpHz7d.js";import"./structured-card-B_Om21cR.js";import{d as i,a as s}from"./index-DldXaS8m.js";import{d as p}from"./index-BZAh-mPf.js";import{d as m}from"./index-Bv7OxRa7.js";import{d}from"./index-DN7rpd4A.js";import{d as c}from"./index-DDP05bK9.js";import"./constants-BCDXA3X6.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-C67lmCmz.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CljPqIQ1.js";import"./when-3fO0zp9C.js";import"./lit-utils-Bk4gblj4.js";import"./async-directive-DqWFd2EV.js";import"./index-DvCjSoQd.js";import"./icon-button-B_h3KTVL.js";import"./base-button-adapter-44w80FD7.js";import"./focus-indicator-xmVPxQxu.js";import"./icon-BwWww8Mn.js";import"./tooltip-DduLWRrp.js";import"./with-longpress-listener-DiiYn4rs.js";import"./dismissible-stack-DeFE9N0P.js";import"./select-CnfK-HGG.js";import"./with-form-associated-DCzxBx4i.js";import"./field-BJ95hi7D.js";import"./list-dropdown-aware-core-qnJ4yxsY.js";import"./linear-progress-constants-wtiKDI_1.js";import"./list-ZkxMIwLA.js";import"./popover-B4_hlWNv.js";import"./skeleton-constants-DHwaJPri.js";import"./divider-C6pGjvG1.js";import"./circular-progress-B0zHl6CG.js";import"./scaffold-DPxFFfmU.js";import"./toolbar-BUJqnE4A.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
