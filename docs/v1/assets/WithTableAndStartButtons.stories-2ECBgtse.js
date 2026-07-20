import{x as t}from"./iframe-D9HQDu7p.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-DEo4mC41.js";import"./structured-card-MOcmK2AE.js";import{d as i,a as s}from"./index-FONg1PrV.js";import{d as p}from"./index-K-HPkp-G.js";import{d as m}from"./index-l6_PuuYe.js";import{d}from"./index-BhYHSfIt.js";import{d as c}from"./index-CVyyhrr1.js";import"./constants-BZ0i9X0W.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Qacjvx_q.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-CAhUByjO.js";import"./when-3fO0zp9C.js";import"./lit-utils-DlMRMc4F.js";import"./async-directive-C80dpfX0.js";import"./index-osO6IpzO.js";import"./icon-button-hpfAgSVF.js";import"./base-button-adapter-B8lUM2fR.js";import"./focus-indicator-UbAoJCCh.js";import"./icon-9Fch71G9.js";import"./tooltip-C_gAXzPd.js";import"./with-longpress-listener-DK2GrRuL.js";import"./dismissible-stack-BGUxHMnw.js";import"./select-B3krda9n.js";import"./with-form-associated-B3QC2FDR.js";import"./field-DFaAS7rY.js";import"./list-dropdown-aware-core-C8gCZFyn.js";import"./linear-progress-constants-BkZTPi-p.js";import"./list-DSPBVHzo.js";import"./popover-BuKnPi03.js";import"./skeleton-constants-olArHOC-.js";import"./divider-B14h8fVw.js";import"./circular-progress-CzIcbOLm.js";import"./scaffold-BnA7fhUD.js";import"./toolbar-BpuyIU0j.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
