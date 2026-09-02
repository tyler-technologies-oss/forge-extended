import{x as t}from"./iframe-D2auh-ob.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-givn-h4t.js";import"./structured-card-AHxw13IS.js";import{d as i,a as s}from"./index-1jGz6yLD.js";import{d as p}from"./index-DXo3ReHK.js";import{d as m}from"./index-DfDBNFD5.js";import{d}from"./index-DytvL9v2.js";import{d as c}from"./index-C0JpkiOZ.js";import"./constants-B5suZUFP.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-Jo3VKbU_.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-BmEgRkv_.js";import"./when-3fO0zp9C.js";import"./lit-utils-r13SEbDt.js";import"./async-directive-CXMWIWl6.js";import"./index-Bzw9ITyu.js";import"./icon-button-kjWo9h6o.js";import"./base-button-adapter-Brj4AgaH.js";import"./focus-indicator-OGPrUnUk.js";import"./icon-Bg0ht1cC.js";import"./tooltip-CURlvU88.js";import"./with-longpress-listener-Ffn_3kRX.js";import"./dismissible-stack-CfLYgfgr.js";import"./select-D6-xgd2w.js";import"./with-form-associated-CZGBV7ZG.js";import"./field-CnziThzm.js";import"./list-dropdown-aware-core-CzwQdlg1.js";import"./linear-progress-constants-DOvEblop.js";import"./list-BpHfKsBR.js";import"./popover-BIPqGnaN.js";import"./skeleton-constants-SSDGQAu_.js";import"./divider-CFdwXeOX.js";import"./circular-progress-Dn9WiwuD.js";import"./scaffold-BT2Xdtjj.js";import"./toolbar-K0L2U8sW.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
