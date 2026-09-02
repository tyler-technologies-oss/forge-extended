import{x as t}from"./iframe-BjE-IuEP.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-C0mEQDuz.js";import"./structured-card-Dg3WGW04.js";import{d as i,a as s}from"./index-DT8zacac.js";import{d as p}from"./index-dXsVakPE.js";import{d as m}from"./index-V5h_WnEl.js";import{d}from"./index-B9OvMKAB.js";import{d as c}from"./index-DiZ07tv4.js";import"./constants-CRIYNPs9.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CCdL37ts.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CgomlBE2.js";import"./when-3fO0zp9C.js";import"./lit-utils-CcVjPa8J.js";import"./async-directive-lTSM_AAO.js";import"./index-DbrSAVoz.js";import"./icon-button-CrI3QfR_.js";import"./base-button-adapter-CZgVjPHX.js";import"./focus-indicator-D8d7aSmQ.js";import"./icon-Ww3ryr7l.js";import"./tooltip-DuxrE-tx.js";import"./with-longpress-listener-CJAmkkZ3.js";import"./dismissible-stack-4jy-EvEg.js";import"./select-CxT_DlPP.js";import"./with-form-associated-o93lM432.js";import"./field-Cd3O6k0F.js";import"./list-dropdown-aware-core-DD369hWO.js";import"./linear-progress-constants-CGAwsFoC.js";import"./list-_5p6RBzw.js";import"./popover-BGRzSqC8.js";import"./skeleton-constants-CZRE8HQC.js";import"./divider-CHkwek-Z.js";import"./circular-progress-CtS8qTnv.js";import"./scaffold-D13FQjPo.js";import"./toolbar-DPdsqAKJ.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
