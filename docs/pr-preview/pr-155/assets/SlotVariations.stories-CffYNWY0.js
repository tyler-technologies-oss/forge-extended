import{x as e}from"./iframe-CEaEySpr.js";import{I as t,q as r,j as n,v as a,u as i,e as s}from"./with-default-aria-C4n4_au4.js";import"./count-card-HPaUMrR8.js";import{d as p}from"./index-BTu78JOc.js";import{d as m}from"./index-DnaM4FFE.js";import{d as c}from"./index-Ckfon9Zd.js";import{d as l}from"./index-C0Dco3Ft.js";import{d}from"./index-BlHyGU8p.js";import"./custom-element-B0HNckU6.js";import"./constants-CTXNzd9R.js";import"./utils-DtyNcxMd.js";import"./query-assigned-nodes-cwDSNLIu.js";import"./base-CShCMygk.js";import"./lit-utils-FwKPFzFF.js";import"./async-directive-CtIWyUPN.js";import"./directive-CJw_OlP2.js";import"./slot-utils-DH2anZHy.js";import"./index-BCcA4Tq5.js";import"./index-pDRkl3G0.js";import"./tooltip-BtWojpAZ.js";import"./with-longpress-listener-n-apoziF.js";import"./dismissible-stack-GVLFeEfG.js";import"./icon-Conhr7Vm.js";import"./icon-button-DTo5oUvJ.js";import"./base-button-adapter-jVdNcW1L.js";import"./focus-indicator-DQbw7lnq.js";import"./list-dropdown-aware-core-BAW28Kbr.js";import"./linear-progress-constants-Caekq9wb.js";import"./list-BL2BLWyr.js";import"./popover-BAVW41HB.js";import"./skeleton-constants-BytCpobG.js";import"./state-CgEwcDA1.js";import"./class-map-D-c3fhie.js";import"./style-map-c4G3FvDS.js";p();m();c();l();d();t.define([r,n,a,i,s]);const f="forge-count-card",J={title:"Components/Count Card",component:f,render:()=>e`
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--forge-spacing-medium);">
        <!-- Card 1: With header-end badge -->
        <forge-count-card>
          <forge-icon slot="icon" name="attach_money"></forge-icon>
          <span slot="label">Revenue</span>
          <forge-badge slot="header-end" theme="success">+12%</forge-badge>
          <span slot="count">$12,450.00</span>
        </forge-count-card>

        <!-- Card 2: With action slot, no icon -->
        <forge-count-card>
          <span slot="label">Total Users</span>
          <forge-menu slot="action" .options=${[{label:"View details",value:"details"},{label:"Export data",value:"export"},{label:"Remove card",value:"remove"}]}>
            <forge-icon-button aria-label="More options">
              <forge-icon name="more_vert"></forge-icon>
            </forge-icon-button>
          </forge-menu>
          <span slot="count">1,234</span>
        </forge-count-card>

        <!-- Card 3: With count-end and body content -->
        <forge-count-card>
          <forge-icon slot="icon" name="shopping_cart"></forge-icon>
          <span slot="label">Orders This Month</span>
          <span slot="count">567</span>
          <span slot="count-end" style="color: var(--forge-theme-text-medium);">/ 1,000</span>
          <div slot="body">
            <forge-meter value="0.567" min="0" max="1" theme="info"></forge-meter>
          </div>
        </forge-count-card>

        <!-- Card 4: Long label with full-width content -->
        <forge-count-card>
          <forge-icon slot="icon" name="trending_up"></forge-icon>
          <span slot="label">Year-over-Year Growth Rate for Q4 Performance Metrics</span>
          <span slot="count">+23.5%</span>
          <svg slot="full-width" viewBox="0 0 200 40" style="width: 100%; display: block;">
            <polyline
              fill="none"
              stroke="var(--forge-theme-success)"
              stroke-width="2"
              points="0,35 20,30 40,32 60,25 80,28 100,20 120,22 140,15 160,18 180,10 200,5" />
          </svg>
        </forge-count-card>
      </div>
    `},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const K=["SlotVariations"];export{o as SlotVariations,K as __namedExportsOrder,J as default};
