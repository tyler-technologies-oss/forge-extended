import{x as t}from"./iframe-BMqNQSB3.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-B5Gz3KW5.js";import"./structured-card-BgaEOa9w.js";import{d as i,a as s}from"./index-IEFNdL1O.js";import{d as p}from"./index-CWn3kMdq.js";import{d as m}from"./index-BZg0-s7Y.js";import{d}from"./index-DPOpo1qh.js";import{d as c}from"./index-Ld-TGTTf.js";import"./constants-dm9VtAl7.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CcStgTUM.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-lnWeY4Jg.js";import"./when-3fO0zp9C.js";import"./lit-utils-DbQLnnc2.js";import"./async-directive-Dvrkdtd5.js";import"./index-0bXiUZPH.js";import"./icon-button-BTf7YIrf.js";import"./base-button-adapter-D0JgTV6I.js";import"./focus-indicator-D6542vgB.js";import"./icon-DAICiFsx.js";import"./tooltip-CMC2NEER.js";import"./with-longpress-listener-5-WmNr5L.js";import"./dismissible-stack-D7F1XTx3.js";import"./select-Bx9cYvd2.js";import"./with-form-associated-VIzfTt_s.js";import"./field-gEmaKuw4.js";import"./list-dropdown-aware-core-D7OdZw8i.js";import"./linear-progress-constants-D450kTtT.js";import"./list-Bo2_4NQ0.js";import"./popover-BNpz9bzV.js";import"./skeleton-constants-YdiWnD24.js";import"./divider-Bb8e60s3.js";import"./circular-progress-KIQLY9R-.js";import"./scaffold-Cu2E0aCj.js";import"./toolbar-DBblKEzt.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
