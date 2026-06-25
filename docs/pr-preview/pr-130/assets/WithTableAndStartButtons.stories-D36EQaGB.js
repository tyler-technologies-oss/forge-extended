import{x as t}from"./iframe-2Sbhygbf.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-mhKvke9N.js";import"./structured-card-bWSB5Psv.js";import{d as i,a as s}from"./index-cOm7Hw_B.js";import{d as p}from"./index-CYt5Y0Et.js";import{d as m}from"./index-CS3aADBg.js";import{d}from"./index-BKK1wYma.js";import{d as c}from"./index-CzIGZ2_y.js";import"./constants-BEkbKOlm.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-C06VkqGx.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Cwd49he-.js";import"./when-3fO0zp9C.js";import"./lit-utils-CBwKQi_Z.js";import"./async-directive-C2-a4nic.js";import"./index-Ch6eXN49.js";import"./icon-button-CLtckAnN.js";import"./base-button-adapter-atF8o2Y8.js";import"./focus-indicator-nwjhrUoT.js";import"./icon-UtUX4HYL.js";import"./tooltip-fk37u-wm.js";import"./with-longpress-listener-DWOqTDJ5.js";import"./dismissible-stack-l44ptn7x.js";import"./select-CmLlXt4y.js";import"./with-form-associated-D8AtjFDC.js";import"./field-D_xHIK5f.js";import"./list-dropdown-aware-core-BhdQhGqj.js";import"./linear-progress-constants-B1naPMrI.js";import"./list-KH51T-Cq.js";import"./popover-jusUZD1i.js";import"./skeleton-constants-BMe620gm.js";import"./divider-DcFviO4z.js";import"./circular-progress-Bjk6uMJW.js";import"./scaffold-CpLTyxib.js";import"./toolbar-p_u6o1OL.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
