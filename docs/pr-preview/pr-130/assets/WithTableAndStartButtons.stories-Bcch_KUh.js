import{x as t}from"./iframe-CsIWdsoO.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-7etb-YMf.js";import"./structured-card-B1izcCMy.js";import{d as i,a as s}from"./index-JBSA0Z4Y.js";import{d as p}from"./index-CQRRmHVD.js";import{d as m}from"./index-DyZC5Fdy.js";import{d}from"./index-C4Nwcmnl.js";import{d as c}from"./index-S6LjhSpt.js";import"./constants-DRaU4qN_.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Be-9tENx.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Cn5yX2m0.js";import"./when-3fO0zp9C.js";import"./lit-utils-Cwm0xWgJ.js";import"./async-directive-XX5Cxs9U.js";import"./index-qwT5Amny.js";import"./icon-button-BFpACNpD.js";import"./base-button-adapter-DvjcpeiH.js";import"./focus-indicator-DOkwNuDB.js";import"./icon-DeCYe8gL.js";import"./tooltip-DpD9tm3o.js";import"./with-longpress-listener-CJLyaPGH.js";import"./dismissible-stack-7Qf7hkIc.js";import"./select-BORrM06Z.js";import"./with-form-associated-B1MnkSC7.js";import"./field-DLiTce9Y.js";import"./list-dropdown-aware-core-D2xGNm88.js";import"./linear-progress-constants-DfEuNLae.js";import"./list-BBDvxJQS.js";import"./popover-CCanAFf1.js";import"./skeleton-constants-DAeb6VY6.js";import"./divider-CQqJrYbO.js";import"./circular-progress-Cl1cZvUG.js";import"./scaffold-B3YyLI0M.js";import"./toolbar-C1OanydC.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
