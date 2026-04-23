import{x as t}from"./iframe-BSkrS8By.js";import{I as e,H as r,J as a,g as n}from"./with-default-aria-BWwvJ9Lo.js";import"./structured-card-luGuxjLr.js";import{d as i,a as s}from"./index-CWnuoCil.js";import{d as p}from"./index-BKh-270t.js";import{d as m}from"./index-DUzO_SJj.js";import{d}from"./index-8MCv1UnX.js";import{d as c}from"./index-CYzbiOp-.js";import"./constants-CXiCJegp.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./class-map-CBDFGRMD.js";import"./directive-CJw_OlP2.js";import"./content-scaffold-Wvay5j8Z.js";import"./when-3fO0zp9C.js";import"./lit-utils-Q5cAF7hS.js";import"./async-directive-B8ouUbHu.js";import"./index-BA2iSPP3.js";import"./icon-button-D1WnB9XE.js";import"./base-button-adapter-wUPioLqY.js";import"./focus-indicator-B3PaEGqS.js";import"./icon-CvWIsA02.js";import"./tooltip-CXBUCp3G.js";import"./with-longpress-listener-Y-iOePj_.js";import"./dismissible-stack-C3Vt60bg.js";import"./select-DxWix_Et.js";import"./with-form-associated-CESqa8oN.js";import"./field-x0lIY3Dn.js";import"./list-dropdown-aware-core-B6fJ5fSn.js";import"./linear-progress-constants-CQz99DDo.js";import"./list-DWoPw830.js";import"./popover-uFknHTej.js";import"./skeleton-constants-BctMuylx.js";import"./divider-CstK-Wmy.js";import"./circular-progress-CuRbD16B.js";import"./scaffold-i0eri62w.js";import"./toolbar-_v_vjmTf.js";i();p();m();s();d();c();e.define([r,a,n]);const l="forge-structured-card",Y={title:"Components/Structured Card",component:l,render:()=>t`
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
