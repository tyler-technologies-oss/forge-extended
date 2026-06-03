import{x as t}from"./iframe-C44ATlN0.js";import{I as e,H as r,J as a,h as n}from"./with-default-aria-DEeb_wyb.js";import"./structured-card-B-sMzFQQ.js";import{d as i,a as s}from"./index-vEXBd-eM.js";import{d as p}from"./index-DNmQ7YPe.js";import{d as m}from"./index-B1JO16kf.js";import{d}from"./index-BYMSFbIc.js";import{d as c}from"./index-BCVnpuYy.js";import"./constants-DSgRJEDh.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-9k28UoYM.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-kKEurgLr.js";import"./when-3fO0zp9C.js";import"./lit-utils-C7ZpBEv9.js";import"./async-directive-CKU25sS1.js";import"./index-B4vRstRi.js";import"./icon-button-D2WVgfRC.js";import"./base-button-adapter-DJQ79g8S.js";import"./focus-indicator-CzWXVDLT.js";import"./icon-j-OxqPb8.js";import"./tooltip-BptsRu5z.js";import"./with-longpress-listener-BBdOH933.js";import"./dismissible-stack-DkzqwRYE.js";import"./select-xptMYxFL.js";import"./with-form-associated-D0IaSfSO.js";import"./field-5IeGXU_B.js";import"./list-dropdown-aware-core-D_JO9yDI.js";import"./linear-progress-constants-CxkxwF3R.js";import"./list-Bf10YP8d.js";import"./popover-CEZmVn8H.js";import"./skeleton-constants-uDTf0pIf.js";import"./divider-B1pNabdg.js";import"./circular-progress-_3pjWcPt.js";import"./scaffold-Cn4XAYyP.js";import"./toolbar-8MgjLBcO.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
